import AlunoItem from "@/components/alunoitam";
import { getAlunos } from "./actions";
import Link from "next/link";

export default async function AlunosPage() {
  const alunos = await getAlunos();



  return (
    <div className="min-h-screen w-full flex flex-col items-center from-gray-900 to-gray-800 text-white">
      
      <h1 className="mt-12 mb-8 text-4xl md:text-5xl font-bold tracking-tight">
        Lista de alunos
      </h1>

      <div className="w-[90%] max-w-2xl bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-4 border border-white/20">
        
        <ul className="flex flex-col gap-3">
          {alunos.map((aluno) => (
            <AlunoItem 
              key={aluno.id} 
              nome={aluno.nome} 
              id={aluno.id} 
            />
          ))}
        </ul>
        
      </div>

      <Link  
        href="/aluno/cadastro"
        className="px-6 py-3 bg-white text-black mt-5 rounded-lg"
      >
        Cadastrar aluno
      </Link>

    </div>
  );
}