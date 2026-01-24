import React from "react";
import { ArrowRight } from "lucide-react";

interface PropostaBlocoEvolucaoProps {
  visaoEvolucao: {
    faseAtual: string[];
    fasePossivel?: string[];
  };
}

export const PropostaBlocoEvolucao: React.FC<PropostaBlocoEvolucaoProps> = ({
  visaoEvolucao,
}) => {
  return (
    <section className="py-12 md:py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-white mb-8">
          Visão de Evolução
        </h2>

        <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-2 md:gap-8">
          {/* Fase Atual */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 rounded-full bg-neon-green" />
              <h3 className="font-display text-lg font-semibold text-white">
                Fase Atual
              </h3>
            </div>
            <ul className="space-y-3">
              {visaoEvolucao.faseAtual.map((item, i) => (
                <li key={i} className="flex gap-3 items-start text-sm text-white/80">
                  <span className="inline-block w-1.5 h-1.5 bg-white/40 rounded-full mt-2 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Fase Possível */}
          {visaoEvolucao.fasePossivel &&
            visaoEvolucao.fasePossivel.length > 0 && (
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-white/40" />
                  <h3 className="font-display text-lg font-semibold text-white/60">
                    Possível Fase 2
                  </h3>
                </div>
                <ul className="space-y-3">
                  {visaoEvolucao.fasePossivel.map((item, i) => (
                    <li
                      key={i}
                      className="flex gap-3 items-start text-sm text-white/60"
                    >
                      <span className="inline-block w-1.5 h-1.5 bg-white/20 rounded-full mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-white/40 mt-4 italic">
                  Sem compromisso. Explorada conforme alinhamento e demanda.
                </p>
              </div>
            )}
        </div>
      </div>
    </section>
  );
};
