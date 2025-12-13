"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Hexagon, Zap, Activity, Code, Music, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function HomePage() {
  const [hoveredSide, setHoveredSide] = useState<"left" | "right" | null>(null);

  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-x-hidden selection:bg-cyan-500 selection:text-black">
      
      {/* --- DOBRA 1: O DISTRIBUIDOR DE FREQUÊNCIA --- */}
      <section className="relative w-full flex flex-col md:flex-row md:h-screen">
        
        {/* [[ MOBILE HEADER ]] - Aparece apenas em telas pequenas */}
        <div className="md:hidden pt-24 pb-8 px-6 text-center bg-[#050505] z-20 relative">
            <h1 className="font-display text-3xl tracking-tighter leading-none mb-2 text-white">
              DOMINAMOS A <br/> FREQUÊNCIA
            </h1>
            <p className="font-mono text-[10px] text-gray-500 uppercase tracking-[0.3em]">
              Hertz & Bits Ecosystem
            </p>
        </div>

        {/* LADO ESQUERDO: SOLUTIONS (Tech) */}
        <Link 
          href="/marrocsolutions"
          className="relative w-full md:flex-1 group min-h-[50vh] md:h-full border-b md:border-b-0 md:border-r border-white/10 overflow-hidden cursor-pointer"
          onMouseEnter={() => setHoveredSide("left")}
          onMouseLeave={() => setHoveredSide(null)}
        >
          {/* Background Tech */}
          <div className={`absolute inset-0 bg-[url('/bg-tech-grid.jpg')] bg-cover bg-center transition-all duration-700 ${hoveredSide === 'left' ? 'scale-105 opacity-40' : 'opacity-20 grayscale'}`} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-90" />
          
          <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-16 py-12 transition-transform duration-500 md:group-hover:translate-x-2">
            <div className="flex items-center gap-2 text-cyan-400 mb-4">
              <Hexagon size={20} />
              <span className="font-mono text-xs tracking-widest uppercase">Para Negócios</span>
            </div>
            <h2 className="font-display text-4xl md:text-7xl leading-none mb-2 md:group-hover:text-cyan-400 transition-colors">
              MARROC <br/> SOLUTIONS
            </h2>
            <p className="font-mono text-gray-400 text-sm md:text-base max-w-sm mt-4 border-l border-cyan-500/30 pl-4">
              Arquitetura Digital & Alta Performance. <br/>
              Otimize o código da sua empresa.
            </p>
            
            {/* Botão Mobile (Sempre visível) / Desktop (Hover) */}
            <div className="mt-8 flex items-center gap-2 text-sm font-bold uppercase tracking-widest md:opacity-0 md:group-hover:opacity-100 transition-opacity transform md:translate-y-4 md:group-hover:translate-y-0 text-cyan-400 md:text-white">
              Acessar Consultoria <ArrowRight size={16} />
            </div>
          </div>
        </Link>

        {/* LADO DIREITO: LABS (Arte) */}
        <div 
          className="relative w-full md:flex-1 group min-h-[50vh] md:h-full overflow-hidden cursor-default"
          onMouseEnter={() => setHoveredSide("right")}
          onMouseLeave={() => setHoveredSide(null)}
        >
          {/* Background Art */}
          <div className={`absolute inset-0 bg-[url('/bg-art-fluid.jpg')] bg-cover bg-center transition-all duration-700 ${hoveredSide === 'right' ? 'scale-105 opacity-50' : 'opacity-20'}`} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-90" />

          <div className="relative z-10 h-full flex flex-col justify-center md:items-end md:text-right px-6 md:px-16 py-12 transition-transform duration-500 md:group-hover:-translate-x-2">
            <div className="flex items-center md:justify-end gap-2 text-purple-400 mb-4">
              <span className="font-mono text-xs tracking-widest uppercase md:order-1">Para a Mente</span>
              <Zap size={20} className="md:order-2"/>
            </div>
            <h2 className="font-display text-4xl md:text-7xl leading-none mb-2 md:group-hover:text-purple-400 transition-colors">
              MARROC <br/> LABS
            </h2>
            <p className="font-mono text-gray-400 text-sm md:text-base max-w-sm mt-4 md:border-r border-l md:border-l-0 border-purple-500/30 pl-4 md:pl-0 md:pr-4">
              Ecossistema de Arte & Frequência. <br/>
              Música IA, Rituais e Livros.
            </p>
            
            {/* Sub-menu Mobile (Grid) / Desktop (Flex Hover) */}
            <div className="mt-8 grid grid-cols-2 md:flex gap-3 md:gap-4 md:opacity-0 md:group-hover:opacity-100 transition-opacity transform md:translate-y-4 md:group-hover:translate-y-0">
               <Link href="/higher-hz" className="px-4 py-3 md:py-2 text-center border border-purple-500/50 rounded hover:bg-purple-500 hover:text-black text-xs font-mono uppercase transition">
                 Higher Hz
               </Link>
               <Link href="/musica" className="px-4 py-3 md:py-2 text-center border border-purple-500/50 rounded hover:bg-purple-500 hover:text-black text-xs font-mono uppercase transition">
                 Live Ritual
               </Link>
               <Link href="/rituais" className="col-span-2 md:col-auto px-4 py-3 md:py-2 text-center border border-purple-500/50 rounded hover:bg-emerald-500 hover:border-emerald-500 hover:text-black text-xs font-mono uppercase transition text-emerald-400/80">
                 Terapias
               </Link>
            </div>
          </div>
        </div>

        {/* [[ DESKTOP HUB ]] - Elemento Central Absoluto (Escondido no Mobile) */}
        <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20 flex-col items-center">
           <div className={`transition-all duration-700 ${hoveredSide ? 'opacity-0 scale-50' : 'opacity-100 scale-100'}`}>
              <h1 className="text-center font-display text-6xl tracking-tighter leading-none mb-2 mix-blend-difference">
                DOMINAMOS A <br/> FREQUÊNCIA
              </h1>
              <p className="text-center font-mono text-xs text-gray-500 uppercase tracking-[0.3em]">
                Hertz & Bits Ecosystem
              </p>
           </div>
           <div className="w-px h-24 bg-gradient-to-b from-transparent via-white/20 to-transparent mt-8"></div>
        </div>

      </section>

      {/* --- DOBRA 2: A PONTE (Copy B2B) --- */}
      <section className="py-20 px-6 border-t border-white/5 bg-[#080808]">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h3 className="font-mono text-cyan-500 text-xs md:text-sm uppercase tracking-widest">
            // O Algoritmo da Criação
          </h3>
          <p className="font-display text-2xl md:text-4xl leading-relaxed text-gray-200">
            "Por que uma consultoria de tecnologia produz música psicodélica? <br/>
            Porque <span className="text-white border-b border-cyan-500">Complexidade</span> é a nossa linguagem."
          </p>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 text-left mt-12 font-mono text-sm text-gray-400 leading-relaxed">
            <p>
              O mesmo código que gera frequências de cura e orquestra experiências imersivas no palco é a base da inteligência que aplicamos no seu negócio.
            </p>
            <p>
              Não somos apenas desenvolvedores. Somos arquitetos de sistemas vivos. Unimos a precisão matemática da IA com a intuição humana.
            </p>
          </div>
        </div>
      </section>

      {/* --- DOBRA 3: O MENU DE SERVIÇOS (Grid) --- */}
      <section className="py-24 px-4 bg-[#050505]">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: SOLUTIONS (Destaque) */}
          <div className="group p-8 rounded-none border border-cyan-900/30 bg-cyan-950/5 hover:border-cyan-500/50 hover:bg-cyan-950/10 transition-all duration-500">
            <Code className="text-cyan-400 mb-6 w-10 h-10" />
            <span className="block font-mono text-xs text-cyan-600 mb-2">B2B / HIGH-PERFORMANCE</span>
            <h3 className="font-display text-3xl text-white mb-4">Marroc Solutions</h3>
            <ul className="space-y-2 font-mono text-xs text-gray-400 mb-8">
              <li>&gt; Desenvolvimento Web Complexo</li>
              <li>&gt; Otimização Core Vitals</li>
              <li>&gt; Consultoria de Inovação</li>
            </ul>
            <Link href="/marrocsolutions" className="block w-full py-3 text-center bg-cyan-600 hover:bg-cyan-500 text-white font-bold uppercase tracking-widest text-xs transition-colors">
              Agendar Auditoria
            </Link>
          </div>

          {/* Card 2: HIGHER HZ */}
          <div className="group p-8 rounded-none border border-white/5 hover:border-purple-500/30 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500">
            <Activity className="text-purple-400 mb-6 w-10 h-10" />
            
            <span className="block font-mono text-xs text-purple-600 mb-2">AI AUDIO / ARCHETYPES</span>
            
            <h3 className="font-display text-3xl text-white mb-4">Higher Hz</h3>
            
            <ul className="space-y-2 font-mono text-xs text-gray-400 mb-8">
              <li>&gt; IA + Intenção Humana</li>
              <li>&gt; 22 Arcanos (Tarot Musical)</li>
              <li>&gt; Letras Codificadas</li>
            </ul>
            
            <Link href="/higher-hz" className="block w-full py-3 text-center border border-white/10 hover:border-purple-500 hover:text-purple-400 text-gray-400 font-bold uppercase tracking-widest text-xs transition-colors">
              Ouvir os Arcanos
            </Link>
          </div>

          {/* Card 3: LIVE & RITUALS */}
          <div className="group p-8 rounded-none border border-white/5 hover:border-pink-500/30 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500">
            <Music className="text-pink-400 mb-6 w-10 h-10" />
            
            <span className="block font-mono text-xs text-pink-600 mb-2">EXPERIENCE / HUMAN</span>
            <h3 className="font-display text-3xl text-white mb-4">Live & Rituais</h3>
            
            <ul className="space-y-2 font-mono text-xs text-gray-400 mb-8">
              <li>&gt; Psytrance & Performance</li>
              <li className="text-emerald-400/80">&gt; Atendimentos Terapêuticos</li>
              <li>&gt; Imersão Audiovisual</li>
            </ul>
            
            <div className="flex gap-2">
                <Link href="/musica" className="flex-1 py-3 text-center border border-white/10 hover:border-pink-500 hover:text-pink-400 text-gray-400 font-bold uppercase tracking-widest text-[10px] transition-colors">
                  O Show
                </Link>
                <Link href="/rituais" className="flex-1 py-3 text-center border border-white/10 hover:border-emerald-500 hover:text-emerald-400 text-gray-400 font-bold uppercase tracking-widest text-[10px] transition-colors">
                  A Cura
                </Link>
            </div>
          </div>

        </div>
      </section>

      {/* --- FOOTER SIMPLIFICADO --- */}
      <footer className="py-12 border-t border-white/5 text-center font-mono text-xs text-gray-600">
        <p>MARROC ECOSYSTEM © {new Date().getFullYear()}</p>
        <p className="mt-2 text-green-900">SYSTEM STATUS: <span className="text-green-500">OPERATIONAL</span></p>
      </footer>

    </main>
  );
}