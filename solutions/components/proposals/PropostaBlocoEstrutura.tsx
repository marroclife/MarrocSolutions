import React from "react";

interface PropostaBlocoEstruturapProps {
  estrutura: {
    paginas: string[];
    organizacao: string;
    logicaNavegacao: string;
  };
}

export const PropostaBlocoEstrutura: React.FC<PropostaBlocoEstruturapProps> = ({
  estrutura,
}) => {
  return (
    <section className="py-12 md:py-16 px-6 md:px-12 bg-white/5">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-white mb-8">
          Estrutura Pensada
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-sm uppercase tracking-wider font-medium text-neon-green mb-3">
              Páginas Previstas
            </h3>
            <ul className="text-sm text-white/80 leading-relaxed space-y-1">
              {estrutura.paginas.map((pagina, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-neon-green">•</span>
                  <span>{pagina}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm uppercase tracking-wider font-medium text-neon-green mb-3">
              Organização
            </h3>
            <p className="text-sm text-white/80 leading-relaxed">
              {estrutura.organizacao}
            </p>
          </div>
          <div>
            <h3 className="text-sm uppercase tracking-wider font-medium text-neon-green mb-3">
              Lógica de Navegação
            </h3>
            <p className="text-sm text-white/80 leading-relaxed">
              {estrutura.logicaNavegacao}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
