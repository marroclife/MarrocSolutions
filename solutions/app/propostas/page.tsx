"use client";

import React from "react";
import { listarTodosProjetos } from "../../lib/propostas";
import { ProjetaCard } from "../../components/proposals/ProjetaCard";
import { Hexagon, ArrowRight } from "lucide-react";

export default function PropostasPage() {
  const projetos = listarTodosProjetos();

  return (
    <main className="bg-[#050505] min-h-screen">
      {/* Header/Hero da seção */}
      <section className="relative min-h-screen pt-32 pb-20 px-6 md:px-12 flex items-center justify-center overflow-hidden">
        {/* Fundo decorativo */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 right-1/4 w-96 h-96 bg-neon-green/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-32 left-1/4 w-80 h-80 bg-deep-emerald/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neon-green/30 bg-neon-green/10 mb-6">
            <Hexagon className="w-4 h-4 text-neon-green" />
            <span className="text-xs font-medium text-neon-green tracking-wide uppercase">Propostas Estruturadas</span>
          </div>

          <h1 className="font-display text-5xl md:text-6xl font-semibold text-white mb-6 leading-tight">
            Área de Propostas
          </h1>

          <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-3xl mx-auto mb-4">
            Visualizações iniciais de projetos em andamento.
          </p>

          <p className="text-base md:text-lg text-white/60 leading-relaxed max-w-2xl mx-auto mb-16 font-light">
            O objetivo é facilitar o entendimento da estrutura e da proposta, não representar uma decisão final.
          </p>

          {/* Grid de projetos */}
          <div className="w-full max-w-6xl mx-auto">
            {projetos.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {projetos.map((projeto) => (
                  <ProjetaCard key={projeto.id} projeto={projeto} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-white/60 text-lg">
                  Nenhum projeto disponível no momento.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Secundário */}
      <section className="px-6 md:px-12 py-20 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-white mb-4">
            Quer explorar mais detalhes?
          </h2>
          <p className="text-white/70 mb-8">
            Clique em qualquer proposta acima para conhecer a estrutura completa e entender nossa visão para o projeto.
          </p>
        </div>
      </section>
    </main>
  );
}
