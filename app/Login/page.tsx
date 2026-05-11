import LoginForm from "@/components/LoginForm";
import { loginAction } from "./actions";

export default function LoginPage() {
  return (
    <div className="w-screen h-screen flex flex-col items-center">
       <div className="w-screen h-screen flex items-center justify-center bg-zinc-900">
      
      <div className="bg-zinc-800 p-8 rounded-2xl shadow-lg w-80 flex flex-col gap-6">
        
        <h1 className="text-3xl font-bold text-white text-center"> Login </h1>
        
        
      <LoginForm onSend={loginAction} />
    </div>
    </div>
    </div>
  );
}