'use client';

import React, { useState } from 'react';
import { Lock, Sparkles } from 'lucide-react';
import TamiresLayout from '../../../../components/analysis/TamiresLayout';

const TamiresAnalysisPage: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.toLowerCase() === "tamires") {
      setIsAuthenticated(true);
    } else {
      setError(true);
      setPassword("");
    }
  };

  if (isAuthenticated) {
    return <TamiresLayout />;
  }

  return (
    <div className="min-h-screen bg-[#151e1c] flex items-center justify-center px-4 font-sans text-[#e8e4dc]">
       {/* Ambient Background Effects (Similar to TamiresLayout) */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-[#e6b8a2]/5 rounded-full blur-[120px] opacity-30" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-[#d4af37]/5 rounded-full blur-[100px] opacity-20" />
      </div>
      
      <div className="max-w-md w-full relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center p-4 bg-[#d4af37]/10 rounded-full mb-6 border border-[#d4af37]/20 animate-pulse">
            <Lock className="text-[#d4af37] w-6 h-6" />
          </div>
          <h1 className="font-serif text-3xl md:text-4xl text-[#e8e4dc] mb-2">Portal Restrito</h1>
          <p className="text-[#e8e4dc]/60 text-sm font-light">Digite a senha para acessar o Santuário de Tamires.</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-8 bg-white/5 border border-[#e6b8a2]/10 p-8 rounded-sm backdrop-blur-md shadow-2xl">
          <div className="space-y-3">
            <label htmlFor="password" className="text-[10px] text-[#e6b8a2] uppercase tracking-[0.2em] ml-1 block">Senha de Acesso</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(false);
              }}
              className="w-full bg-[#1c2624] border border-[#e6b8a2]/20 rounded-sm px-4 py-3 text-[#e8e4dc] focus:border-[#d4af37] focus:outline-none focus:bg-[#1c2624]/80 transition-all text-center tracking-[0.3em] placeholder:tracking-normal font-serif text-lg"
              placeholder="••••••"
              autoFocus
            />
          </div>

          {error && (
            <div className="bg-red-500/10 border border-red-500/20 p-2 rounded-sm">
                <p className="text-red-300 text-xs text-center">
                Senha incorreta. Tente novamente.
                </p>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-[#d4af37] text-[#151e1c] font-medium py-3 rounded-sm hover:bg-[#e6b8a2] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300 flex items-center justify-center gap-2 uppercase text-xs tracking-widest"
          >
            <Sparkles size={16} />
            Entrar no Santuário
          </button>
        </form>
        
        <div className="mt-8 text-center">
             <p className="text-[10px] uppercase tracking-[0.2em] text-[#e8e4dc]/20">Marroc by CosmoVision</p>
        </div>
      </div>
    </div>
  );
};

export default TamiresAnalysisPage;