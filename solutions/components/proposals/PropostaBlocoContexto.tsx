import React from "react";

interface PropostaBlocoContextoProps {
  contexto: {
    tipoDenegocio: string;
    situacao: string;
    necessidadePrincipal: string;
  };
}

export const PropostaBlocoContexto: React.FC<PropostaBlocoContextoProps> = ({
  contexto,
}) => {
  return (
    <section className="py-12 md:py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-white mb-8">
          Contexto do Projeto
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-sm uppercase tracking-wider font-medium text-white/60 mb-2">
              Tipo de Negócio
            </h3>
            <p className="text-base md:text-lg text-white/80 leading-relaxed">
              {contexto.tipoDenegocio}
            </p>
          </div>
          <div>
            <h3 className="text-sm uppercase tracking-wider font-medium text-white/60 mb-2">
              Situação que Motivou
            </h3>
            <p className="text-base md:text-lg text-white/80 leading-relaxed">
              {contexto.situacao}
            </p>
          </div>
          <div>
            <h3 className="text-sm uppercase tracking-wider font-medium text-white/60 mb-2">
              Necessidade Principal
            </h3>
            <p className="text-base md:text-lg text-white/80 leading-relaxed">
              {contexto.necessidadePrincipal}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
