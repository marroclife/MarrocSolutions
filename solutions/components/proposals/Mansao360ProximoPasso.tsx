"use client";

import React from "react";
import { MessageCircle, Mail, ArrowRight } from "lucide-react";

interface Mansao360ProximoPassoProps {
  onWhatsappClick?: () => void;
}

export const Mansao360ProximoPasso: React.FC<Mansao360ProximoPassoProps> = ({
  onWhatsappClick,
}) => {
  return (
    <section className="py-12 md:py-16 px-6 md:px-12 border-t border-white/10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-white mb-4">
            Próximo Passo
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Agora que você conhece a estrutura e as opções, vamos alinhar todos os detalhes para
            começar o desenvolvimento
          </p>
        </div>

        {/* Card com CTA */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-8 md:p-12">
          <p className="text-white/80 mb-8 leading-relaxed">
            Preparamos esta proposta pensando em clareza e transparência. Cada seção foi estruturada
            para que você possa entender exatamente o que será entregue, quando e por quanto.
          </p>

          <p className="text-white/80 mb-12 leading-relaxed">
            <span className="text-white font-medium">Agora precisamos conversar:</span> Revise a
            proposta com calma, analise o mockup interativo e, quando estiver pronto, entre em contato
            para:
          </p>

          {/* Lista de próximos passos */}
          <ul className="space-y-3 mb-12">
            <li className="flex gap-3">
              <span className="text-neon-green font-semibold">→</span>
              <span className="text-white/80">Tirar dúvidas sobre a estrutura e prazos</span>
            </li>
            <li className="flex gap-3">
              <span className="text-neon-green font-semibold">→</span>
              <span className="text-white/80">Ajustar qualquer detalhe conforme sua necessidade</span>
            </li>
            <li className="flex gap-3">
              <span className="text-neon-green font-semibold">→</span>
              <span className="text-white/80">Definir cronograma e forma de pagamento</span>
            </li>
            <li className="flex gap-3">
              <span className="text-neon-green font-semibold">→</span>
              <span className="text-white/80">Iniciar o desenvolvimento do seu projeto</span>
            </li>
          </ul>

          {/* CTAs */}
          <div className="grid md:grid-cols-2 gap-4">
            <button
              onClick={onWhatsappClick}
              className="flex items-center justify-center gap-2 px-6 py-4 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-all group"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Conversar no WhatsApp</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="flex items-center justify-center gap-2 px-6 py-4 bg-white/10 border border-white/20 hover:bg-white/15 text-white rounded-lg font-medium transition-all group">
              <Mail className="w-5 h-5" />
              <span>Enviar Email</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Nota final */}
          <div className="mt-8 p-4 bg-neon-green/10 border border-neon-green/30 rounded-lg">
            <p className="text-white/80 text-sm">
              <span className="text-neon-green font-medium">Importante:</span> Esta proposta é válida
              por 30 dias. Após esse período, os valores podem sofrer ajustes de mercado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
