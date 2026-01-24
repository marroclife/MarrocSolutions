import React from "react";
import Link from "next/link";
import { ProjetoProposal } from "@/lib/propostas";
import { ArrowRight, Sparkles } from "lucide-react";

interface ProjetaCardProps {
  projeto: ProjetoProposal;
}

export const ProjetaCard: React.FC<ProjetaCardProps> = ({ projeto }) => {
  return (
    <Link
      href={`/propostas/${projeto.slug}`}
      className="group relative rounded-xl overflow-hidden transition-all duration-300 hover:scale-105"
    >
      {/* Background com gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Border e sombra decorativa */}
      <div className="absolute inset-0 border border-white/10 group-hover:border-neon-green/30 rounded-xl transition-colors duration-300"></div>
      
      {/* Conteúdo */}
      <div className="relative z-10 p-6 md:p-8 h-full flex flex-col min-h-[280px]">
        {/* Ícone decorativo */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Sparkles className="w-5 h-5 text-neon-green" />
        </div>

        {/* Título */}
        <h3 className="text-xl md:text-2xl font-display font-semibold text-white mb-3 group-hover:text-neon-green transition-colors duration-300 leading-tight pr-8">
          {projeto.titulo}
        </h3>

        {/* Descrição */}
        <p className="text-sm md:text-base text-white/70 leading-relaxed flex-1 mb-6">
          {projeto.descricaoBreve}
        </p>

        {/* Footer do card */}
        <div className="flex items-center gap-2 text-white/50 group-hover:text-neon-green transition-colors duration-300">
          <span className="text-xs md:text-sm font-medium">Explorar proposta</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </div>
      </div>

      {/* Efeito de shine no hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-neon-green/0 via-neon-green/10 to-neon-green/0 blur-2xl transform group-hover:translate-x-1/2 group-hover:translate-y-1/2 transition-transform duration-700"></div>
      </div>
    </Link>
  );
};
