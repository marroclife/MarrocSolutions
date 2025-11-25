"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Sparkles, Zap, ExternalLink, Lock, Cpu } from "lucide-react";
import { MysticCard } from "@/components/ui/MysticCard";

const OPAL_URL = "https://opal.google/_app/?flow=drive:/1lKi3fjTh7g0YeMscFX56VmS9cGuW01QL&shared&mode=app";

export default function GuardianLauncherPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-paper bg-[url('/bg-forest.jpg')] bg-cover bg-center bg-fixed bg-no-repeat font-sans selection:bg-gold selection:text-black overflow-hidden">
      
      {/* Overlay Escuro */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      {/* --- NAV --- */}
      <nav className="absolute top-6 left-6 z-50">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-xs font-mono text-white/70 hover:text-gold transition uppercase tracking-widest bg-black/40 px-4 py-2 rounded-full border border-white/10 hover:border-gold/50"
        >
          <ArrowLeft size={14} /> Voltar ao Nexus
        </Link>
      </nav>

      {/* --- CONTEÚDO CENTRAL --- */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        
        {/* Ícone Animado */}
        <div className="relative mb-8">
            <div className="absolute inset-0 bg-gold/20 blur-3xl rounded-full animate-pulse"></div>
            <div className="relative w-32 h-32 border border-gold/30 rounded-full flex items-center justify-center bg-black/50 backdrop-blur-md">
                <div className="w-24 h-24 border border-tech-cyan/50 rounded-full flex items-center justify-center animate-spin-slow">
                    <Sparkles className="w-10 h-10 text-gold" />
                </div>
            </div>
        </div>

        <h1 className="font-display text-5xl md:text-7xl text-white mb-6 tracking-tight drop-shadow-glow">
          O Guardião da Espiral
        </h1>

        <p className="text-xl text-white/60 max-w-2xl mb-10 leading-relaxed">
          Você está prestes a acessar uma inteligência sutil hospedada nos servidores seguros do Google Opal. 
          Prepare sua intenção.
        </p>

        {/* Card de Status */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 w-full max-w-3xl">
             <div className="bg-white/5 border border-white/10 p-4 rounded-xl flex flex-col items-center gap-2">
                <Lock className="w-5 h-5 text-emerald-400" />
                <span className="text-xs font-mono text-white/50 uppercase">Ambiente Seguro</span>
             </div>
             <div className="bg-white/5 border border-white/10 p-4 rounded-xl flex flex-col items-center gap-2">
                <Cpu className="w-5 h-5 text-tech-cyan" />
                <span className="text-xs font-mono text-white/50 uppercase">Gemini 2.0 Flash</span>
             </div>
             <div className="bg-white/5 border border-white/10 p-4 rounded-xl flex flex-col items-center gap-2">
                <Zap className="w-5 h-5 text-gold" />
                <span className="text-xs font-mono text-white/50 uppercase">Alta Frequência</span>
             </div>
        </div>

        {/* BOTÃO DE LANÇAMENTO */}
        <a 
          href={OPAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative px-10 py-5 bg-gold text-black font-bold text-lg tracking-widest uppercase rounded-sm hover:bg-white transition-all duration-300 shadow-[0_0_30px_rgba(199,169,75,0.3)] flex items-center gap-3"
        >
          Iniciar Conexão <ExternalLink size={20} />
          <div className="absolute inset-0 border border-white/50 rounded-sm scale-105 opacity-0 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500"></div>
        </a>

        <p className="mt-6 text-xs font-mono text-white/30">
          *Uma nova janela dimensional será aberta.
        </p>

      </div>
    </main>
  );
}