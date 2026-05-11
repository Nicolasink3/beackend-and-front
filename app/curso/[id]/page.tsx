"use client";

import { Curso } from "@/interFaces/cursos";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getCurso } from "./action";
import { PenBox } from "lucide-react";
import Link from "next/link";

export default function CursoPage() {
  const { id } = useParams();
  const [curso, setCurso] = useState({} as Curso);

  useEffect(() => {
    getCurso(Number(id)).then((response) => setCurso(response));
  }, [id]);

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="p-6 bg-white text-black rounded-lg shadow shadow-white max-w-md flex flex-col items-center">
        
        <div className="flex gap-2">
          <h1 className="text-2xl font-bold mb-4">
            {curso.nome}
          </h1>

          <Link href={`/curso/${id}/editar`}>
            <PenBox />
          </Link>
        </div>

        <p>{curso.professor}</p>
        <p>{curso.cargaHoraria}</p>

        <p className="mt-10 mb-2">Descrição:</p>

        <p>{curso.descricao}</p>
      </div>
    </div>
  );
}