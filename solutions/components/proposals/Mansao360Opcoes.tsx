"use client";

import React, { useState } from "react";
import { CheckCircle2, Star } from "lucide-react";

export const Mansao360Opcoes: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<"institucional" | "simplificada">(
    "institucional"
  );

  const opcoes = {
    institucional: {
      titulo: "Site Institucional",
      subtitulo: "Recomendado",
      descricao:
        "Estrutura profissional completa com todas as seções e organização por serviços",
      valor: "R$ 2.800,00",
      features: [
        "Estrutura completa conforme mockup",
        "Organização por tipo de serviço (Day Use, Suítes, Eventos, Locação Completa)",
        "Galeria de imagens responsiva",
        "Site mobile-first e responsivo",
        "Domínio mansao360.com incluso",
        "Hospedagem e SSL inclusos",
        "Direcionamento inteligente para WhatsApp",
        "SEO básico implementado",
      ],
    },
    simplificada: {
      titulo: "Versão Simplificada",
      subtitulo: "Landing Page",
      descricao:
        "Página única com apresentação geral da mansão e direcionamento para contato",
      valor: "a partir de R$ 1.500,00",
      features: [
        "Página única (landing page)",
        "Apresentação visual geral da mansão",
        "Galeria básica de imagens",
        "Direcionamento para WhatsApp",
        "Responsividade mobile",
        "Site mobile-first",
        "Domínio incluso",
        "Ideal para início de presença digital",
      ],
    },
  };

  const current = opcoes[selectedOption];

  return (
    <section className="py-12 md:py-16 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-white mb-4">
            Opções de Implementação
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Escolha a solução que melhor se adequa ao estágio e necessidades do projeto
          </p>
        </div>

        {/* Toggle Buttons */}
        <div className="flex gap-3 mb-12 justify-center">
          <button
            onClick={() => setSelectedOption("institucional")}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              selectedOption === "institucional"
                ? "bg-neon-green/30 border border-neon-green/60 text-white"
                : "bg-white/10 border border-white/20 text-white/70 hover:bg-white/15"
            }`}
          >
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4" />
              Site Institucional
            </div>
          </button>
          <button
            onClick={() => setSelectedOption("simplificada")}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              selectedOption === "simplificada"
                ? "bg-neon-green/30 border border-neon-green/60 text-white"
                : "bg-white/10 border border-white/20 text-white/70 hover:bg-white/15"
            }`}
          >
            Versão Simplificada
          </button>
        </div>

        {/* Card da opção selecionada */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-8 md:p-12">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="font-display text-2xl md:text-3xl font-semibold text-white">
                {current.titulo}
              </h3>
              {selectedOption === "institucional" && (
                <span className="px-3 py-1 bg-neon-green/20 border border-neon-green/50 rounded-full text-xs font-medium text-neon-green uppercase tracking-wider">
                  {current.subtitulo}
                </span>
              )}
            </div>
            <p className="text-white/70 mb-6">{current.descricao}</p>

            {/* Valor destacado */}
            <div className="mb-8 pb-8 border-b border-white/10">
              <p className="text-sm text-white/60 uppercase tracking-wider mb-2">Investimento</p>
              <p className="text-4xl md:text-5xl font-semibold text-neon-green">
                {current.valor}
              </p>
            </div>
          </div>

          {/* Features list */}
          <div className="mb-8">
            <h4 className="text-sm uppercase tracking-wider font-medium text-white/60 mb-4">
              Incluso nesta opção
            </h4>
            <ul className="space-y-3">
              {current.features.map((feature, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <CheckCircle2 className="w-5 h-5 text-neon-green flex-shrink-0 mt-0.5" />
                  <span className="text-white/80">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <button className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-neon-green/40 to-neon-green/30 border border-neon-green/60 hover:border-neon-green text-white rounded-lg font-medium transition-all hover:from-neon-green/50 hover:to-neon-green/40">
            Solicitar Orçamento
          </button>
        </div>

        {/* Nota adicional */}
        <div className="mt-8 p-4 bg-white/5 border border-white/10 rounded-lg">
          <p className="text-sm text-white/70">
            <span className="text-white/90 font-medium">Nota:</span> Ambas as opções incluem análise
            inicial, prototipagem e até 2 rodadas de ajustes. Pagamento pode ser realizado à vista ou
            em parcelamento (sujeito a aprovação).
          </p>
        </div>
      </div>
    </section>
  );
};
