"use client";

import React from "react";
import { Building2, Users, Target } from "lucide-react";

export const Mansao360Contexto: React.FC = () => {
  return (
    <section className="py-12 md:py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-white mb-12">
          Contexto do Projeto
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Tipo de Negócio */}
          <div className="bg-white/5 border border-white/10 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-neon-green/20 border border-neon-green/30 flex items-center justify-center">
                <Building2 className="w-5 h-5 text-neon-green" />
              </div>
              <h3 className="font-semibold text-white">Tipo de Negócio</h3>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Hospedagem / espaço de locação de alto padrão
            </p>
          </div>

          {/* Desafio */}
          <div className="bg-white/5 border border-white/10 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-neon-green/20 border border-neon-green/30 flex items-center justify-center">
                <Target className="w-5 h-5 text-neon-green" />
              </div>
              <h3 className="font-semibold text-white">Desafio Atual</h3>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Plataformas tradicionais limitam controle e não permitem posicionamento premium diferenciado
            </p>
          </div>

          {/* Necessidade */}
          <div className="bg-white/5 border border-white/10 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-neon-green/20 border border-neon-green/30 flex items-center justify-center">
                <Users className="w-5 h-5 text-neon-green" />
              </div>
              <h3 className="font-semibold text-white">Necessidade</h3>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Criar base digital própria com apresentação profissional e controle total
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
