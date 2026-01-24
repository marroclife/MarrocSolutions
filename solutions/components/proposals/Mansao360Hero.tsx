"use client";

import React from "react";
import { Film } from "lucide-react";

interface Mansao360HeroProps {
  onMockupClick?: () => void;
}

export const Mansao360Hero: React.FC<Mansao360HeroProps> = ({
  onMockupClick,
}) => {
  return (
    <section className="relative min-h-[70vh] md:min-h-screen pt-24 md:pt-32 pb-12 md:pb-20 px-6 md:px-12 flex items-center justify-center overflow-hidden">
      {/* Fundo decorativo */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-neon-green/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-1/4 w-80 h-80 bg-deep-emerald/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10 w-full">
        {/* Label */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neon-green/30 bg-neon-green/10 mb-6">
          <span className="text-xs font-medium text-neon-green tracking-wide uppercase">
            Proposta Profissional
          </span>
        </div>

        {/* Título */}
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-white mb-6 leading-tight">
          Mansão 360
        </h1>

        {/* Subtítulo */}
        <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-2xl mx-auto mb-12">
          Experiência digital imersiva para apresentação institucional
        </p>

        {/* CTA Principal */}
        <button
          onClick={onMockupClick}
          className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-neon-green/30 to-neon-green/20 border border-neon-green/60 hover:border-neon-green text-white hover:from-neon-green/40 hover:to-neon-green/30 rounded-lg transition-all duration-300 font-medium text-lg group"
        >
          <Film className="w-5 h-5 group-hover:animate-pulse" />
          <span>Ver Mockup Interativo</span>
          <span className="text-neon-green group-hover:translate-x-1 transition-transform">→</span>
        </button>

        {/* Descriptivo sutil */}
        <p className="text-white/50 text-sm mt-6">
          Clique para visualizar o protótipo interativo do front-end
        </p>
      </div>
    </section>
  );
};
