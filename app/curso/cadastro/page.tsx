"use client";

import { useState } from "react";
import { createCurso } from "./action";
import { useRouter } from "next/navigation";

export default function CursoCadastroPage() {
  const router = useRouter();

  const [curso, setCurso] = useState("");
  const [professor, setProfessor] = useState("");
  const [cargaHoraria, setCargaHoraria] = useState("");
  const [descricao, setDescricao] = useState("");

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    const response = await createCurso({
      nome: curso,
      professor,
      cargaHoraria: Number(cargaHoraria),
      descricao,
    });

    if (response) {
      alert(response);
      return;
    }

    router.push("/cursos");
  }

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="p-6 bg-white text-black rounded-lg shadow shadow-white max-w-md w-full flex flex-col items-center">
        
        <h1 className="text-2xl font-bold mb-6">
          Cadastro de Curso
        </h1>

        <form
          className="flex flex-col gap-3 w-full"
          onSubmit={handleSubmit}
        >
          <input
            className="border rounded px-3 py-2"
            type="text"
            placeholder="Nome do Curso"
            value={curso}
            onChange={(e) => setCurso(e.target.value)}
          />

          <input
            className="border rounded px-3 py-2"
            type="number"
            placeholder="Carga Horária"
            value={cargaHoraria}
            onChange={(e) => setCargaHoraria(e.target.value)}
          />

          <input
            className="border rounded px-3 py-2"
            type="text"
            placeholder="Nome do Professor"
            value={professor}
            onChange={(e) => setProfessor(e.target.value)}
          />

          <input
            className="border rounded px-3 py-2"
            type="text"
            placeholder="Descrição"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />

          <button
            className="bg-black text-white rounded py-2"
            type="submit"
          >
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}