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
      Contratar
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
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-red-900/20 border border-red-500/30 mb-6">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-xs font-bold text-red-400 uppercase tracking-widest">Oferta de Natal • Até 31/12</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl text-white mb-4">
            Escolha seu Arsenal
          </h2>
          <p className="text-gray-400 font-mono text-sm max-w-xl mx-auto">
            PREÇOS PROMOCIONAIS ATIVADOS. ARQUITETURA DIGITAL & INTELIGÊNCIA ARTIFICIAL.
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
              oldPrice="R$ 1.500"
              price="R$ 1.200"
              isHighlight={false}
              features={["Site One-Page (Página Única)", "Design Persuasivo", "Carregamento Ultrarrápido", "Botão WhatsApp Flutuante", "Configuração de Pixel Básica"]}
              link="https://wa.me/5521990387232?text=Quero%20aproveitar%20a%20promo%20da%20Landing%20Page"
            />
            <PriceCard 
              type="site"
              title="Institucional (QG)"
              description="Branding e Autoridade. A sede oficial da sua marca na internet."
              oldPrice="R$ 3.500"
              price="R$ 2.800"
              isHighlight={true}
              features={["Até 5 Páginas Internas", "Tecnologia Next.js (Alta Performance)", "SEO Estrutural (Google)", "CMS Gerenciável", "Domínio Grátis (1 ano)"]}
              link="https://wa.me/5521990387232?text=Quero%20o%20Site%20Institucional%20com%20desconto"
            />
            <PriceCard 
              type="site"
              title="E-commerce"
              description="Vendas complexas, catálogo dinâmico e área do cliente."
              price="Sob Consulta"
              monthly="A partir de R$ 5k"
              isHighlight={false}
              features={["Carrinho de Compras", "Cálculo de Frete", "Gateway de Pagamento", "Painel Administrativo", "Integração ERP"]}
              link="https://wa.me/5521990387232?text=Preciso%20de%20um%20Ecommerce"
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
              link="https://wa.me/5521990387232?text=Quero%20o%20pacote%20Escudeiro"
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
              link="https://wa.me/5521990387232?text=Quero%20o%20pacote%20Guardiao"
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
              link="https://wa.me/5521990387232?text=Interesse%20no%20Enterprise"
            />
          </motion.div>
        )}

        {/* BANNER DO COMBO */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-neon-green/20 to-deep-emerald/20 border border-neon-green/30 text-center relative overflow-hidden">
           <div className="relative z-10">
              <h3 className="text-neon-green font-display text-2xl mb-2">🎁 O COMBO SUPREMO</h3>
              <p className="text-white text-lg max-w-2xl mx-auto mb-6">
                Contrate <strong>Site + Automação</strong> juntos e ganhe <span className="text-neon-green font-bold">20% DE DESCONTO EXTRA</span> no total do setup.
              </p>
              <a href="https://wa.me/5521990387232?text=Quero%20o%20Combo%20Supremo%20(Site%20%2B%20Bot)" target="_blank" className="inline-block px-8 py-3 bg-neon-green text-black font-bold rounded-lg hover:bg-white transition-colors uppercase tracking-widest text-sm">
                Quero o Combo
              </a>
           </div>
           {/* Efeito de fundo */}
           <div className="absolute top-0 left-0 w-full h-full bg-[url('/noise.svg')] opacity-10 mix-blend-overlay"></div>
        </div>

      </div>
    </section>
  );
}