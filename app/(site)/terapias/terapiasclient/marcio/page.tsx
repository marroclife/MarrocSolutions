"use client";

import React, { useState } from "react";
import MarcioLayout from "@/components/analysis/MarcioLayout";
import { Lock, Sparkles } from "lucide-react";

export default function MarcioPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.toLowerCase() === "marcio") {
      setIsAuthenticated(true);
    } else {
      setError(true);
      setPassword("");
    }
  };

  if (isAuthenticated) {
    return <MarcioLayout />;
  }

  return (
    <div className="min-h-screen bg-marcio-obsidian flex items-center justify-center px-4 font-body">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-marcio-copper/5 rounded-full blur-[120px] opacity-30" />
      </div>

      <div className="max-w-md w-full relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center p-4 bg-marcio-copper/10 rounded-full mb-6 border border-marcio-copper/20 animate-pulse">
            <Lock className="text-marcio-copper w-6 h-6" />
          </div>
          <h1 className="font-display text-3xl text-white mb-2">Portal Restrito</h1>
          <p className="text-white/60 text-sm">Digite a senha para acessar a análise de Marcio.</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6 bg-white/5 border border-white/10 p-8 rounded-sm backdrop-blur-md">
          <div className="space-y-2">
            <label htmlFor="password" className="text-xs text-marcio-copper uppercase tracking-widest ml-1">Senha de Acesso</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(false);
              }}
              className="w-full bg-black/50 border border-white/20 rounded-sm px-4 py-3 text-white focus:border-marcio-copper focus:outline-none transition-colors text-center tracking-widest placeholder:tracking-normal"
              placeholder="••••••"
              autoFocus
            />
          </div>

          {error && (
            <p className="text-red-400 text-xs text-center animate-bounce">
              Senha incorreta. Tente novamente.
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-marcio-copper text-white font-bold py-3 rounded-sm hover:bg-white hover:text-marcio-obsidian hover:shadow-[0_0_20px_rgba(184,115,51,0.4)] transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Sparkles size={16} />
            ACESSAR ANÁLISE
          </button>
        </form>

        <div className="mt-8 text-center">
          <a href="/terapias/terapiasclient" className="text-white/40 text-xs hover:text-white transition flex items-center justify-center gap-1">
            ← Voltar para Área de Clientes
          </a>
        </div>
      </div>
    </div>
  );
}
