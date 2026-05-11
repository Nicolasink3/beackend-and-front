"use client";

import { Aluno } from "@/interFaces/alunos";
import { useParams } from "next/navigation";
import { SubmitEvent, useEffect, useState } from "react";
import { getAluno, updateAluno } from "../actions";
import { useRouter } from "next/navigation";


import Image from "next/image"



export default function AlunoPage() {
  const { id } = useParams();
  const [aluno, setAluno] = useState({} as Aluno);
  const router = useRouter();   

  useEffect(() => {
    if (!id) return;
    getAluno(Number(id)).then((response) => setAluno(response));
  }, [id]);

  function handleChange(value: string | number, field: keyof Aluno) {
    setAluno((prev) => ({
      ...prev,
      [field]: value,
    }));
  }


async function handleUpdate(e : SubmitEvent) {
  e.preventDefault();
  const response = await updateAluno(Number(id), aluno);

  if (response) {
    alert(response);
    return;
  }
  router.push(`/aluno/${id}`);
}



  return (
    <div className="relative min-h-screen w-full flex items-center justify-center bg-black text-white overflow-hidden">
      
      <Image
        src="/imagens/Don-quixote1.png"
        alt="Don Quixote 1"
        width={250}
        height={250}
        className="absolute top-4 right-4 w-32 opacity-80"
      />

      <Image
        src="/imagens/Don-quixote2.png"
        alt="Don Quixote 2"
        width={250}
        height={250}
        className="absolute bottom-4 left-4 w-32 opacity-80"
      />

      <div className="bg-red-900/20 backdrop-blur-md border border-yellow-600/40 rounded-2xl shadow-xl p-8 w-[90%] max-w-md text-center">
        
        <h1 className="text-2xl font-semibold mb-4 text-yellow-400">
          Dados do aluno
        </h1>

        <form className="p-6 bg-white text-black rounded-lg shadow shadow-white max-w-md flex flex-col items-center gap-2"
          onSubmit={handleUpdate}>
          
          <input
            value={aluno.nome || ""}
            onChange={(e) => handleChange(e.target.value, "nome")}
            className="w-full border border-black px-2 py-1"
          />

          <input
            value={aluno.cpf || ""}
            type="text"
            onChange={(e) => handleChange(Number(e.target.value), "cpf")}
            className="w-full border border-black px-2 py-1"
          />

          <input
            value={aluno.email || ""}
            onChange={(e) => handleChange(e.target.value, "email")}
            className="w-full border border-black px-2 py-1"
          />

          <button
            type="submit"
            className="bg-black text-white rounded-xl px-10 py-2 cursor-pointer hover:opacity-80"
          >
            Editar
          </button>

        </form>
      </div>
    </div>
  );
}