"use client";

import React, { useState } from "react";
import { Check, Zap, Rocket, Crown, Code, Bot, Globe } from "lucide-react";
import { motion } from "framer-motion";

// Componente de Card de Preço
const PriceCard = ({ title, description, oldPrice, price, monthly, features, isHighlight, link, type }: any) => (
  <div className={`flex flex-col p-8 rounded-2xl border transition-all duration-500 relative ${isHighlight ? 'border-neon-green/50 bg-deep-emerald/10 shadow-[0_0_40px_-10px_rgba(0,255,148,0.15)] transform md:-translate-y-2' : 'border-white/10 bg-white/[0.02] hover:border-white/30'}`}>
    {isHighlight && (
      <div className="absolute top-0 right-0 bg-neon-green text-black text-[10px] font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg font-mono uppercase">
        Best-Seller
      </div>
    )}
    
    <div className={`mb-4 w-12 h-12 rounded-lg flex items-center justify-center ${isHighlight ? 'bg-neon-green/20 text-neon-green' : 'bg-white/10 text-white'}`}>
      {type === 'bot' ? <Bot size={24} /> : <Globe size={24} />}
    </div>

    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-gray-400 text-xs mb-6 h-10">{description}</p>

    {/* BLOCO DE PREÇO */}
    <div className="mb-6">
      {oldPrice && (
        <span className="block text-sm text-red-400/60 line-through font-mono">
          De {oldPrice}
        </span>
      )}
      <div className={`text-3xl font-display ${isHighlight ? 'text-neon-green' : 'text-white'}`}>
        {price}
      </div>
      {monthly && (
        <div className="text-sm text-gray-400 font-mono mt-1">
          + {monthly} <span className="text-xs">/mês</span>
        </div>
      )}
      {!monthly && (
        <div className="text-sm text-gray-500 font-mono mt-1">
          Pagamento Único
        </div>
      )}
    </div>

    <ul className="space-y-3 mb-8 flex-1 font-mono text-xs text-gray-300">
      {features.map((feat: string, i: number) => (
        <li key={i} className="flex gap-2">
          <Check size={14} className={isHighlight ? "text-neon-green" : "text-white"}/> 
          {feat}
        </li>
      ))}
    </ul>

    <a 
      href={link} 
      target="_blank" 
      className={`block w-full py-3 text-center rounded-lg font-bold text-sm uppercase tracking-widest transition-all ${isHighlight ? 'bg-neon-green text-black hover:bg-white' : 'border border-white/20 text-white hover:bg-white hover:text-black'}`}
    >
      Falar com Consultor
    </a>
  </div>
);

export function PricingSection() {
  const [activeTab, setActiveTab] = useState<'site' | 'bot'>('site');

  return (
    <section className="py-24 px-4 bg-[#050505] border-t border-white/5" id="planos">
      <div className="container mx-auto max-w-6xl">
        
        {/* CABEÇALHO DA OFERTA */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-5xl text-white mb-4">
            Arquitetura de Resultado
          </h2>
          <p className="text-gray-400 font-mono text-sm max-w-xl mx-auto">
            INFRAESTRUTURA DIGITAL ESCALÁVEL. INVESTIMENTO EM CRESCIMENTO.
          </p>
        </div>

        {/* SELETOR DE VERTICAL (TABS) */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/5 p-1 rounded-xl flex gap-1 border border-white/10">
            <button 
              onClick={() => setActiveTab('site')}
              className={`px-6 py-3 rounded-lg text-sm font-bold uppercase tracking-wider transition-all ${activeTab === 'site' ? 'bg-neon-green text-black shadow-lg' : 'text-gray-400 hover:text-white'}`}
            >
              Websites
            </button>
            <button 
              onClick={() => setActiveTab('bot')}
              className={`px-6 py-3 rounded-lg text-sm font-bold uppercase tracking-wider transition-all ${activeTab === 'bot' ? 'bg-neon-green text-black shadow-lg' : 'text-gray-400 hover:text-white'}`}
            >
              Automação IA
            </button>
          </div>
        </div>

        {/* --- GRID: WEBSITES --- */}
        {activeTab === 'site' && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="grid md:grid-cols-3 gap-8"
          >
            <PriceCard 
              type="site"
              title="Landing Page (LP)"
              description="Foco total em conversão. Ideal para tráfego pago e lançamentos."
              price="A partir de R$ 1.500"
              isHighlight={false}
              features={["Site One-Page (Página Única)", "Design de Conversão", "Carregamento < 2s", "Integração WhatsApp", "Pixel e Analytics Básicos"]}
              link="https://wa.me/5521992669980?text=Quero%20uma%20Landing%20Page%20de%20alta%20performance"
            />
            <PriceCard 
              type="site"
              title="Institucional (QG)"
              description="Autoridade e presença profissional. Sua sede digital."
              price="A partir de R$ 2.800"
              isHighlight={true}
              features={["Até 5 Páginas Internas", "Next.js (Ultra Rápido)", "SEO Estrutural", "CMS Gerenciável", "Domínio + SSL Grátis"]}
              link="https://wa.me/5521992669980?text=Quero%20um%20Site%20Institucional%20profissional"
            />
            <PriceCard 
              type="site"
              title="E-commerce"
              description="Vendas complexas, catálogo dinâmico e gestão total."
              price="A partir de R$ 6.500"
              isHighlight={false}
              features={["Carrinho + Checkout", "Cálculo Automático de Frete", "Múltiplos Gateways", "Painel Admin", "Integração ERP"]}
              link="https://wa.me/5521992669980?text=Preciso%20de%20um%20Ecommerce%20robusto"
            />
          </motion.div>
        )}

        {/* --- GRID: AUTOMAÇÃO --- */}
        {activeTab === 'bot' && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="grid md:grid-cols-3 gap-8"
          >
            <PriceCard 
              type="bot"
              title="O Escudeiro"
              description="Para quem precisa sair do zero e organizar o WhatsApp."
              oldPrice="Setup: R$ 2.000"
              price="Setup: R$ 1.600"
              monthly="R$ 800"
              isHighlight={false}
              features={["IA de Texto (GPT-4o-mini)", "Atendimento 24/7", "Semáforo (#pare/#volte)", "Respostas Contextuais", "Anti-Spam Básico"]}
              link="https://wa.me/5521992669980?text=Quero%20o%20pacote%20Escudeiro"
            />
            <PriceCard 
              type="bot"
              title="O Guardião"
              description="A arquitetura completa. Onde a mágica acontece."
              oldPrice="Setup: R$ 3.500"
              price="Setup: R$ 2.800"
              monthly="R$ 1.200"
              isHighlight={true}
              features={["Tudo do Escudeiro +", "Ouvido Absoluto (Áudio/Whisper)", "Integração Google Sheets", "Buffer Anti-Alucinação", "Personalidade Customizada"]}
              link="https://wa.me/5521992669980?text=Quero%20o%20pacote%20Guardiao"
            />
            <PriceCard 
              type="bot"
              title="O Tecnoxamã"
              description="Para operações robustas que exigem dados e CRM."
              oldPrice="Setup: R$ 6.000"
              price="Setup: R$ 4.800"
              monthly="A partir de R$ 2k"
              isHighlight={false}
              features={["Multi-Agentes", "Integração CRM (RD/Pipefy)", "Dashboard BI", "Motor GPT-4o Full", "Consultoria Estratégica Mensal"]}
              link="https://wa.me/5521992669980?text=Interesse%20no%20Enterprise"
            />
          </motion.div>
        )}

        {/* BANNER DO COMBO */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-neon-green/20 to-deep-emerald/20 border border-neon-green/30 text-center relative overflow-hidden">
           <div className="relative z-10">
              <h3 className="text-neon-green font-display text-2xl mb-2">🚀 O COMBO SUPREMO</h3>
              <p className="text-white text-lg max-w-2xl mx-auto mb-6">
                Contrate <strong>Site + Automação</strong> juntos e ganhe <span className="text-neon-green font-bold">20% DE DESCONTO EXTRA</span> no total do investimento.
              </p>
              <a href="https://wa.me/5521992669980?text=Quero%20negociar%20o%20Combo%20Supremo%20(Site%20%2B%20Automação%20IA)" target="_blank" className="inline-block px-8 py-3 bg-neon-green text-black font-bold rounded-lg hover:bg-white transition-colors uppercase tracking-widest text-sm">
                Agendar Diagnóstico
              </a>
           </div>
        </div>

      </div>
    </section>
  );
}