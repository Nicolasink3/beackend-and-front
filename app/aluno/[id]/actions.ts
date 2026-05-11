"use server";

import { Aluno } from "@/interFaces/alunos";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function getAluno(id: number) {
  try {
    const cookiesStore = await cookies();
    const token = cookiesStore.get("access_token")?.value;

    const response = await fetch(`http://localhost:8080/alunos/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    });

    if (response.status === 401) {
      redirect("/login");
    }

    if (!response.ok) {
      throw new Error("Erro ao buscar aluno");
    }

    const data = await response.json();

    return data as Aluno;
  } catch (e) {
    console.error(e);
    return {} as Aluno;
  }
}

export async function updateAluno(id: number, aluno: Aluno) {
  try {
    const cookiesStore = await cookies();
    const token = cookiesStore.get("access_token")?.value;

    const response = await fetch(`http://localhost:8080/alunos/${id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(aluno),
    });

    if (response.status === 401) {
      redirect("/login");
    }

    const data = await response.json();

    if (!response.ok) {
      return data;
    }

    return data;
  } catch (e) {
    console.error(e);
    return { error: "Erro ao atualizar aluno" };
  }
}