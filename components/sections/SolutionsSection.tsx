// components/sections/SolutionsSection.tsx
// Atualizado em 03/06/2026:
// 1. Removido "System Check / Sua marca está pronta" (intruso, sem valor).
// 2. Cor trocada de CYAN → VERDE NEON (alinhada com home do /solutions).

"use client";

import React from "react";
import Link from "next/link";
import { Hexagon, Globe, Cpu, ShieldCheck, ArrowRight } from "lucide-react";

export function SolutionsSection() {
  return (
    <section className="relative w-full py-24 bg-[#030303] text-white overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Cabeçalho */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 text-[10px] font-mono border border-neon-green/30 text-neon-green rounded-full uppercase tracking-widest bg-neon-green/5">
                Divisão B2B
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-serif leading-tight">
              Marroc{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-emerald-400">
                Solutions
              </span>
            </h2>
            <p className="mt-4 text-gray-400 max-w-xl text-lg">
              O braço tecnológico do ecossistema. Transformamos a visão mística em
              código de alta performance e sistemas de inteligência ética.
            </p>
          </div>

          <Link
            href="/solutions"
            className="group flex items-center gap-2 text-white border-b border-white/30 pb-1 hover:border-neon-green hover:text-neon-green transition-all"
          >
            Conhecer a Divisão <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Grid de Serviços */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-neon-green/50 hover:bg-white/[0.07] transition-all duration-300">
            <Globe className="text-neon-green mb-6" size={32} />
            <h3 className="text-xl font-bold mb-3 text-white">Arquitetura Digital</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Sites imersivos e aplicações web que não apenas informam, mas envolvem.
              Foco total em performance (Core Web Vitals) e SEO semântico.
            </p>
          </div>

          <div className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-400/50 hover:bg-white/[0.07] transition-all duration-300">
            <Cpu className="text-emerald-400 mb-6" size={32} />
            <h3 className="text-xl font-bold mb-3 text-white">Sistemas de IA Ética</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Implementação do <strong>Guardião™</strong>. Chatbots, automações e
              análise de dados que respeitam a privacidade e alinham-se aos valores da marca.
            </p>
          </div>

          <div className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-300/50 hover:bg-white/[0.07] transition-all duration-300">
            <ShieldCheck className="text-emerald-300 mb-6" size={32} />
            <h3 className="text-xl font-bold mb-3 text-white">Consultoria Visionária</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Diagnóstico técnico e vibracional. Ajudamos marcas a encontrar
              o equilíbrio entre inovação tecnológica e propósito humano.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
