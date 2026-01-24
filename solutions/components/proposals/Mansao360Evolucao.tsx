"use client";

import React from "react";
import { Zap, MessageCircle, BarChart3 } from "lucide-react";

export const Mansao360Evolucao: React.FC = () => {
  return (
    <section className="py-12 md:py-16 px-6 md:px-12 bg-white/5">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-white mb-8">
          Visão de Evolução
        </h2>

        {/* Grid de fases */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Fase 1 - Site */}
          <div className="bg-white/5 border border-white/10 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-neon-green/20 border border-neon-green/30 flex items-center justify-center text-neon-green font-semibold">
                1
              </div>
              <h3 className="font-semibold text-white">Site Profissional</h3>
            </div>
            <p className="text-white/70 text-sm mb-4">Base sólida para presença digital</p>
            <ul className="space-y-2 text-sm text-white/60">
              <li className="flex gap-2">
                <span className="text-neon-green">✓</span>
                <span>Apresentação profissional</span>
              </li>
              <li className="flex gap-2">
                <span className="text-neon-green">✓</span>
                <span>Galeria otimizada</span>
              </li>
              <li className="flex gap-2">
                <span className="text-neon-green">✓</span>
                <span>Responsividade completa</span>
              </li>
            </ul>
          </div>

          {/* Arrow */}
          <div className="hidden md:flex items-center justify-center">
            <div className="text-neon-green/30 text-3xl">→</div>
          </div>

          {/* Fase 2 - IA */}
          <div className="bg-white/5 border border-neon-green/30 rounded-lg p-6 md:col-span-1 relative">
            <div className="absolute -top-3 left-4 px-3 py-1 bg-neon-green/20 border border-neon-green/30 rounded-full text-xs font-medium text-neon-green">
              Próxima Fase
            </div>
            <div className="flex items-center gap-3 mb-4 mt-2">
              <Zap className="w-6 h-6 text-neon-green" />
              <h3 className="font-semibold text-white">Automação com IA</h3>
            </div>
            <p className="text-white/70 text-sm mb-4">
              Potencialize o atendimento e qualificação de clientes
            </p>
            <ul className="space-y-2 text-sm text-white/60">
              <li className="flex gap-2">
                <MessageCircle className="w-4 h-4 text-neon-green flex-shrink-0" />
                <span>Chatbot WhatsApp 24/7</span>
              </li>
              <li className="flex gap-2">
                <BarChart3 className="w-4 h-4 text-neon-green flex-shrink-0" />
                <span>Qualificação automática</span>
              </li>
              <li className="flex gap-2">
                <span className="text-neon-green">✓</span>
                <span>Agendamentos inteligentes</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Descrição adicional */}
        <div className="mt-8 p-4 bg-white/5 border border-white/10 rounded-lg">
          <h4 className="text-white font-medium mb-2">Fase 2 — Automação de WhatsApp com IA</h4>
          <p className="text-white/70 text-sm mb-3">
            Com o site estabelecido, a próxima fase integra inteligência artificial para automatizar e
            qualificar o atendimento:
          </p>
          <ul className="space-y-2 text-sm text-white/60">
            <li className="flex gap-2">
              <span className="text-neon-green">•</span>
              <span><strong>Atendimento automatizado:</strong> Respostas rápidas para dúvidas comuns</span>
            </li>
            <li className="flex gap-2">
              <span className="text-neon-green">•</span>
              <span><strong>Qualificação de clientes:</strong> Triagem inteligente de leads</span>
            </li>
            <li className="flex gap-2">
              <span className="text-neon-green">•</span>
              <span><strong>Organização de agendamentos:</strong> Gestão automática de horários</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
