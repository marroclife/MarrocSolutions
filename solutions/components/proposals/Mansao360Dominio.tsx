"use client";

import React from "react";
import { Globe, CheckCircle2 } from "lucide-react";

export const Mansao360Dominio: React.FC = () => {
  return (
    <section className="py-12 md:py-16 px-6 md:px-12 bg-white/5">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-start gap-4 md:gap-6">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-neon-green/20 border border-neon-green/30">
              <Globe className="h-6 w-6 text-neon-green" />
            </div>
          </div>
          <div className="flex-1">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-white mb-4">
              Domínio
            </h2>
            <div className="space-y-4">
              <p className="text-lg text-white/80 leading-relaxed">
                O domínio <span className="text-neon-green font-semibold">mansao360.com</span> está disponível e será incluído no valor final do projeto.
              </p>
              <div className="flex items-start gap-3 p-4 bg-neon-green/10 border border-neon-green/30 rounded-lg">
                <CheckCircle2 className="w-5 h-5 text-neon-green flex-shrink-0 mt-0.5" />
                <p className="text-white/80">
                  Configuração, hospedagem e certificado SSL estão <span className="text-white font-medium">inclusos</span> na proposta
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
