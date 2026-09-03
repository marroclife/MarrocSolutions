"use client";

import React, { useState } from "react";
import NaraLayout from "@/components/analysis/NaraLayout";
import { Lock, Sparkles } from "lucide-react";

export default function NaraPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.toLowerCase() === "nara") {
      setIsAuthenticated(true);
    } else {
      setError(true);
      setPassword("");
    }
  };

  if (isAuthenticated) {
    return <NaraLayout />;
  }

  return (
    <div className="min-h-screen bg-nara-deep-indigo flex items-center justify-center px-4 font-body">
      <div className="absolute inset-0 bg-[url('/bg-forest.jpg')] opacity-10 bg-cover bg-center mix-blend-overlay pointer-events-none" />

      <div className="max-w-md w-full relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center p-4 bg-nara-amethyst/10 rounded-full mb-6 border border-nara-amethyst/20 animate-pulse">
            <Lock className="text-nara-amethyst w-6 h-6" />
          </div>
          <h1 className="font-display text-3xl text-white mb-2">Área Restrita</h1>
          <p className="text-white/60 text-sm">Digite a senha para acessar a análise de Lady Nara.</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6 bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-md">
          <div className="space-y-2">
            <label htmlFor="password" className="text-xs text-nara-amethyst uppercase tracking-widest ml-1">Senha de Acesso</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(false);
              }}
              className="w-full bg-black/50 border border-white/20 rounded-xl px-4 py-3 text-white focus:border-nara-amethyst focus:outline-none transition-colors text-center tracking-widest placeholder:tracking-normal"
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
            className="w-full bg-nara-amethyst text-white font-bold py-3 rounded-xl hover:bg-white hover:text-nara-deep-indigo hover:shadow-[0_0_20px_rgba(157,80,187,0.4)] transition-all duration-300 flex items-center justify-center gap-2"
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
