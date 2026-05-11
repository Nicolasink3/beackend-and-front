"use client";

import { deleteCursos } from "@/app/cursos/action";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Props {
  id: number;
  nome: string;
}

export default function CursoItem({ id, nome }: Props) {
  const router = useRouter();

  async function handleDelete() {
    await deleteCursos(id);
    router.refresh();
  }

  return (
    <div className="flex items-center justify-center gap-4 w-full">
      
      <Link href={`/curso/${id}`} className="w-40 text-center">
        <div className="list-none text-white font-medium bg-gray-500 rounded-lg py-2 hover:bg-gray-700 transition">
          {nome}
        </div>
      </Link>

      <button
        onClick={handleDelete}
        className="w-40 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 active:scale-95 transition-all duration-200"
      >
        Excluir
      </button>

    </div>
  );
}