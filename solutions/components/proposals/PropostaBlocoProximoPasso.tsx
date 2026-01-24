import React from "react";

export const PropostaBlocoProximoPasso: React.FC = () => {
  return (
    <section className="py-12 md:py-16 px-6 md:px-12 bg-gradient-to-b from-white/5 to-transparent border-t border-white/10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-white mb-6">
          Próximo Passo
        </h2>
        <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-6">
          Caso esta estrutura esteja alinhada com sua visão, o próximo passo é
          uma validação técnica em conversa direta. Podemos explorar detalhes de
          implementação, timeline e recursos necessários.
        </p>
        <p className="text-sm text-white/60">
          Fique à vontade para compartilhar perguntas ou sugestões sobre esta
          proposta.
        </p>
      </div>
    </section>
  );
};
