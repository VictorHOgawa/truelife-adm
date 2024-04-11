"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { PostAPI, refreshToken, token } from "@/lib/axios";
import { Messages } from "@/components/app/login/messages";

export default function Login() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState("password");
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  function toggleShowPassword() {
    if (showPassword === "password") {
      setShowPassword("text");
    } else {
      setShowPassword("password");
    }
  }

  async function handleLogin() {
    setLoginLoading(true);
    const connect = await PostAPI("/partner/login", {
      email: loginData.email,
      password: loginData.password,
    });
    if (connect.status !== 200) {
      alert(connect.body);
      return setLoginLoading(false);
    }
    localStorage.setItem(token, connect.body);
    localStorage.setItem(refreshToken, connect.body.refreshToken);
    router.push("/");
    return setLoginLoading(false);
  }

  return (
    <div className="min-h-screen relative pb-16 bg-white text-[#33303e]">
      <div className="w-full flex flex-col items-center justify-around mb-16 md:mb-0 lg:flex-row">
        <div className="w-1/2 px-4">
          <div className="flex justify-center p-4">
            <img className="w-32 lg:w-auto" src="/Logos/truelife.svg" alt="" />
          </div>
          <div className="flex flex-col">
            <strong>Faça seu login para utilizar a plataforma.</strong>
            <span>Acesse aqui todas as suas contas pelo painel principal.</span>
          </div>

          <div
            style={{
              position: "relative",
              margin: "5vh 0",
            }}
          >
            <div style={{ border: "1px solid lightgray" }} />
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="email">Email</label>
            <input
              className="p-2 border border-zinc-300 rounded"
              type="email"
              value={loginData.email}
              onChange={(e) =>
                setLoginData({ ...loginData, email: e.target.value })
              }
            />
          </div>

          <div className="flex flex-col mb-4" style={{ position: "relative" }}>
            <label htmlFor="password">Senha</label>
            <input
              className="p-2 border border-zinc-300 rounded"
              type={showPassword}
              value={loginData.password}
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
            />
            <img src="/eye-slash.svg" alt="" onClick={toggleShowPassword} />
          </div>
          <div className="flex justify-end">
            <button
              className="bg-transparent border-0 text-sky-500"
              onClick={() => router.push("/recover-password")}
            >
              Esqueceu sua senha?
            </button>
          </div>
          <button
            className="w-full py-4 my-4 bg-[#0d123c] text-white font-semibold text-xl rounded-lg"
            onClick={handleLogin}
            disabled={loginLoading}
          >
            {loginLoading ? "..." : "Entrar"}
          </button>
          <p style={{ fontSize: "0.9rem", fontWeight: "bold" }}>
            Não tem uma conta? {""}
            <span
              style={{ cursor: "pointer" }}
              className="text-sky-500"
              onClick={() => router.push("/register-account")}
            >
              Cadastre-se
            </span>
          </p>
        </div>
        <div className="relative self-start bg-[url('/foto.png')] bg-cover bg-center w-full h-full min-h-screen lg:w-1/2">
          <Messages />
        </div>
      </div>
      <div className="flex items-center justify-between border-t border-t-zinc-500 h-40 text-zinc-300 absolute bottom-0 w-full md:h-16">
        <div>
          <p>Copyright © . Todos os direitos reservados. CNPJ nº 0</p>
        </div>
        <div>Política de privacidade | Termos de serviço</div>
      </div>
    </div>
  );
}
