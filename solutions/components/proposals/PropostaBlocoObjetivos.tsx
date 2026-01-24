import React from "react";
import { CheckCircle2 } from "lucide-react";

interface PropostaBlocoObjetivosProps {
  objetivos: string[];
}

export const PropostaBlocoObjetivos: React.FC<PropostaBlocoObjetivosProps> = ({
  objetivos,
}) => {
  return (
    <section className="py-12 md:py-16 px-6 md:px-12 bg-white/5">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-white mb-8">
          Objetivo do Projeto
        </h2>
        <ul className="space-y-4">
          {objetivos.map((objetivo, i) => (
            <li key={i} className="flex gap-4 items-start">
              <CheckCircle2 className="w-5 h-5 text-neon-green flex-shrink-0 mt-0.5" />
              <span className="text-base md:text-lg text-white/80 leading-relaxed">
                {objetivo}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
