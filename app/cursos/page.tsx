import { Curso } from "@/interFaces/cursos";
import { getCursos } from "./action";
import Link from "next/link";
import CursoItem from "@/components/CursoItem";

export default async function CursoPage() {
  const cursos: Curso[] = await getCursos();

  return (
    <div className="min-h-screen w-full flex flex-col items-center from-gray-900 to-gray-800 text-white">
      
      <h1 className="mt-12 mb-8 text-4xl md:text-5xl font-bold tracking-tight">
        Lista de Cursos
      </h1>

      <div className="w-[90%] max-w-2xl bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-4 border border-white/20">
        
        <div className="flex flex-col gap-3">
          {cursos.map((curso) => (
            <CursoItem
              key={curso.id}
              nome={curso.nome}
              id={curso.id}
            />
          ))}
        </div>

      </div>

      <Link
        href="/curso/cadastro"
        className="px-6 py-3 bg-white text-black mt-5 rounded-lg"
      >
        Cadastrar curso
      </Link>

    </div>
  );
}