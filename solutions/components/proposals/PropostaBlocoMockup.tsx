import React from "react";

interface PropostaBlocoMockupProps {
  mockupUrl?: string;
  mockupDescricao?: string;
  titulo: string;
}

export const PropostaBlocoMockup: React.FC<PropostaBlocoMockupProps> = ({
  mockupUrl,
  mockupDescricao,
  titulo,
}) => {
  return (
    <section className="py-12 md:py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        {/* Título */}
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-white mb-6">
          Visualização Interativa
        </h2>

        {/* Aviso institucional */}
        {mockupDescricao && (
          <div className="mb-6 rounded-lg border border-white/10 bg-white/5 px-5 py-4">
            <p className="text-sm md:text-base text-white/80 leading-relaxed">
              {mockupDescricao}
            </p>
          </div>
        )}

        {/* Container do Mockup */}
        <div className="relative bg-white/5 border border-white/10 rounded-xl overflow-hidden h-[500px] md:h-[800px]">
          {mockupUrl ? (
            <iframe
              src={mockupUrl}
              title={`Mockup ${titulo}`}
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          ) : (
            <div className="h-full flex items-center justify-center px-6">
              <div className="text-center max-w-sm">
                <div className="w-16 h-16 bg-white/10 rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white/40"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 6v6l4 2"
                    />
                  </svg>
                </div>
                <p className="text-white/60 text-sm">
                  Mockup será adicionado em breve
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Abrir em nova aba */}
        {mockupUrl && (
          <div className="mt-4 text-center">
            <a
              href={mockupUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-neon-green hover:text-neon-green/80 transition-colors"
            >
              Abrir em nova aba
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        )}
      </div>
    </section>
  );
};
