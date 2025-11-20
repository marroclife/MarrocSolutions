import React from "react";
import Link from "next/link";
import { ArrowLeft, Sparkles, Fingerprint } from "lucide-react";
import { GlowButton } from "@/components/ui/GlowButton";

export const metadata = {
  title: "Prelúdio | Um Lugar Entre Mundos",
  description: "O Vazio Inicial. A Sequência de Fibonacci. O Começo.",
};

export default function CapituloZero() {
  return (
    <main className="min-h-screen bg-[#020202] text-gray-300 font-serif overflow-x-hidden selection:bg-gold/30 selection:text-white">
      
      {/* --- BACKGROUND ATMOSPHERE --- */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* O Ponto de Luz que Pulsa (simulando o ventre do vazio) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-indigo-900/20 rounded-full blur-[100px] animate-pulse duration-[4000ms]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50px] h-[50px] bg-gold/10 rounded-full blur-[40px] animate-pulse duration-[2000ms]" />
        
        {/* Ruído/Noise Sutil */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('/noise.png')] mix-blend-overlay"></div>
      </div>

      {/* --- NAV SIMPLIFICADA --- */}
      <nav className="fixed top-0 left-0 w-full p-6 z-50 flex justify-between items-center mix-blend-difference">
        <Link 
          href="/livros/um-lugar-entre-mundos" 
          className="text-xs font-mono tracking-widest text-white/50 hover:text-gold transition flex items-center gap-2"
        >
          <ArrowLeft size={14} /> VOLTAR
        </Link>
        <span className="text-xs font-mono text-gold/50">CAPÍTULO 0</span>
      </nav>

      {/* --- CONTEÚDO DO TEXTO --- */}
      <div className="relative z-10 max-w-xl mx-auto px-6 py-32 md:py-48 flex flex-col items-center text-center">
        
        {/* Título */}
        <header className="mb-20 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <span className="block text-xs font-mono text-gold/60 tracking-[0.3em] mb-4 uppercase">
            O Vazio Inicial
          </span>
          <h1 className="text-5xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-600 font-display">
            Prelúdio
          </h1>
        </header>

        {/* O Poema - Estrofes com espaçamento ritualístico */}
        <div className="space-y-16 text-lg md:text-xl leading-relaxed text-gray-400">
          
          {/* Estrofe 1: O Silêncio */}
          <div className="space-y-2 animate-in fade-in duration-[1500ms] delay-300">
            <p>Escuridão.</p>
            <p>Silêncio.</p>
            <p>Tudo dorme.</p>
            <p>Nada ainda nasceu.</p>
          </div>

          {/* Estrofe 2: O Surgimento */}
          <div className="space-y-2 animate-in fade-in duration-[1500ms] delay-500">
            <p>Mas há algo surgindo agora.</p>
            <p className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] transition-colors duration-500">
              Um ponto de luz pulsa no ventre do vazio.
            </p>
            <p>Surge.</p>
            <p>Respira.</p>
            <p>Expande. Contrai.</p>
          </div>

          {/* Estrofe 3: A Geometria */}
          <div className="space-y-4 animate-in fade-in duration-[1500ms] delay-700">
            <p>Segue um ritmo invisível.</p>
            <p>Uma vibração silenciosa toca o cosmos.</p>
            <p>A luz se curva, gira, traça um caminho desconhecido.</p>
            <p>Nasce.</p>
            <p>Criação desperta.</p>
          </div>

          <div className="w-px h-24 bg-gradient-to-b from-transparent via-gold/30 to-transparent mx-auto my-8"></div>

          {/* Estrofe 4: Ponto Zero */}
          <div className="space-y-3 animate-in fade-in duration-[1500ms] delay-1000">
            <p className="text-gold/80 font-display text-2xl">O Ponto Zero vibra.</p>
            <p>Fonte de tudo o que existe.</p>
            <p>Dele tudo surge, a ele tudo retorna sempre.</p>
            <p>Dança.</p>
            <p>Espira.</p>
            <p>Cria formas.</p>
          </div>

          {/* Estrofe 5: Sagrado */}
          <div className="space-y-2 animate-in fade-in duration-[1500ms] delay-1000">
            <p>Geometrias sagradas se revelam.</p>
            <p>Elas repetem o som da origem.</p>
            <p>A espiral se estende, expandindo com harmonia e mistério.</p>
          </div>

          {/* SESSÃO FIBONACCI (Estilo Código/Tech) */}
          <div className="py-12 animate-in zoom-in-95 duration-[2000ms] delay-500">
            <div className="border-y border-white/5 py-8 bg-white/[0.02]">
              <p className="font-mono text-xs text-gold mb-4 tracking-widest uppercase flex items-center justify-center gap-2">
                <Fingerprint size={14} /> Sequência Detectada
              </p>
              <p className="font-mono text-2xl md:text-4xl text-tech-cyan tracking-widest">
                0, 1, 1, 2, 3, 5, 8...
              </p>
              <p className="mt-4 text-sm text-white/50 font-mono">
                // Cada número nasce dos dois anteriores. <br/>
                // Como a vida. Como tudo.
              </p>
            </div>
          </div>

          {/* Estrofe Final: O Despertar */}
          <div className="space-y-4 pb-12 animate-in fade-in slide-in-from-bottom-8 duration-[1500ms] delay-700">
            <p>Pulsa.</p>
            <p>Gira, cresce.</p>
            <p>Luz e sombra dançam.</p>
            <p>Potencial desperto no ventre escuro.</p>
            <p>Uma semente vibra, pronta para florescer no invisível.</p>
            <br />
            <p className="italic text-white/60">História.</p>
            <p className="italic text-white/60">Está começando.</p>
            <p>Do nada: tudo.</p>
            <br />
            <p>A centelha se transforma em caminho.</p>
          </div>

          {/* REVELAÇÃO FINAL */}
          <div className="pt-10 pb-20">
            <p className="text-lg mb-6">E dele, surgirá...</p>
            <h2 className="text-4xl md:text-5xl font-display text-gold mb-12 drop-shadow-glow">
              Sofia — Feiticeira do Samadhi
            </h2>

            {/* Call to Action */}
            <div className="flex flex-col gap-4 items-center">
              <p className="text-sm text-white/40 font-mono mb-2">A JORNADA CONTINUA NO LIVRO COMPLETO</p>
              <GlowButton 
                href="https://pay.hotmart.com/M101238238O?off=ur3sdp6i" 
                target="_blank"
                variant="gold"
              >
                Iniciar a Iniciação
              </GlowButton>
              <Link 
                href="/livros/um-lugar-entre-mundos"
                className="text-sm text-white/50 hover:text-white underline underline-offset-4 mt-4 transition"
              >
                Voltar à página do livro
              </Link>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}