"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type LoginFormProps = {
  onSend: (email: string, password: string) => Promise <string | void>;
};

export default function LoginForm({ onSend }: LoginFormProps) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit() {
    const response = await onSend(email, password);
        console.log(response);

    if (response) {
      alert(response);
      return;
    }

    router.push("/");
  }


  return (
   
        <div className="flex flex-col gap-4">
          
          <input
            type="email"
            placeholder="Email"
            className="p-3 rounded-lg bg-gray-900 text-white placeholder-zinc-400 outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Senha"
            className="p-3 rounded-lg bg-black-900 text-white placeholder-zinc-400 outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
         
         />

          <button
            className="bg-blue-600 hover:bg-blue-700 transition-all text-white font-semibold py-3 rounded-lg"
            onClick={handleSubmit} >
            Entrar
          </button>

        </div>


  );
}