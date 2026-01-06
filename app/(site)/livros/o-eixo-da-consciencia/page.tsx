"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Cpu, 
  Orbit, 
  ShieldAlert, 
  Zap, 
  ArrowRight, 
  Terminal, 
  BookOpen, 
  CheckCircle2, 
  Fingerprint
} from "lucide-react";
import { MysticCard } from "@/components/ui/MysticCard";
import { Section } from "@/components/ui/Section";

// Link de Venda Kiwify
const KIWIFY_LINK = "https://pay.kiwify.com.br/QhQvSHx";

// Componente de Badge Customizado para o Eixo
const NodeBadge = ({ children }: { children: React.ReactNode }) => (
  <div className="inline-flex items-center gap-2 px-3 py-1 border border-cyan-500/30 rounded-full bg-cyan-950/10 mb-6">
    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
    <span className="text-[10px] font-mono text-cyan-400 tracking-widest uppercase">
      {children}
    </span>
  </div>
);

export default function OEixoDaConscienciaPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-paper selection:bg-cyan-500 selection:text-black overflow-x-hidden font-sans">
      
      {/* --- 1. HERO: O EIXO --- */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(0,255,255,0.08),transparent_70%)]" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent opacity-30" />

        <div className="container relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <NodeBadge>Manifesto de Consciência Aplicada</NodeBadge>
            
            <h1 className="font-display text-5xl md:text-7xl leading-tight text-white tracking-tighter">
              O EIXO DA <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-200 to-cyan-400 drop-shadow-[0_0_15px_rgba(6,182,212,0.4)]">
                CONSCIÊNCIA
              </span>
            </h1>
            
            <p className="text-xl text-gray-400 leading-relaxed max-w-xl font-light italic border-l border-cyan-500/30 pl-6">
              “A inteligência artificial não é consciência.  
              Ela revela quem permanece humano.”
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href={KIWIFY_LINK}
                target="_blank"
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-cyan-600 text-black font-bold uppercase tracking-widest text-sm rounded-sm transition-all hover:bg-white hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]"
              >
                Acessar o Livro
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link 
                href="#manifesto"
                className="px-8 py-4 text-xs font-mono text-cyan-400/60 hover:text-cyan-400 transition flex items-center justify-center gap-2 group border border-cyan-900/30 hover:border-cyan-500/50 rounded-sm"
              >
                Ler o Manifesto
              </Link>
            </div>
          </div>

          <div className="relative flex justify-center order-1 lg:order-2">
            <div className="relative w-[320px] md:w-[400px] aspect-[3/4.5] shadow-[0_0_50px_-10px_rgba(6,182,212,0.3)] group">
              <Image 
                src="/capa-eixo.png"
                alt="Capa O Eixo da Consciência"
                fill
                className="object-contain rounded-sm transition-transform duration-700 group-hover:scale-[1.02]"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- 2. MANIFESTO --- */}
      <section id="manifesto" className="py-32 bg-black border-y border-white/5 relative">
        <div className="container max-w-4xl">
          <div className="text-center space-y-12">
            <h2 className="font-display text-3xl md:text-5xl text-white">
              Você não é uma máquina de produção.
            </h2>

            <div className="space-y-8 text-gray-400 text-lg md:text-xl font-light leading-relaxed text-justify">
              <p>
                A inteligência artificial não pensa.  
                Ela processa.
              </p>

              <p>
                Consciência é outra coisa.  
                É presença, intenção e responsabilidade.
              </p>

              <p>
                O erro da nossa era não é tecnológico.  
                É a perda do eixo humano em meio à automação.
              </p>

              <p className="text-white font-medium text-center py-8 border-y border-cyan-500/10">
                Você é o eixo.  
                A inteligência artificial é satélite.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. OS NODES --- */}
      <Section className="py-32 bg-[#050505]">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <MysticCard>
              <Terminal className="text-cyan-400 mb-6 w-8 h-8" />
              <span className="text-[10px] font-mono text-gray-500 mb-2 block tracking-widest">NODE_01</span>
              <h3 className="font-display text-xl text-white mb-4">O Eixo Invisível</h3>
              <p className="text-gray-500 text-sm">
                O humano como centro decisório. A IA como extensão operacional.
              </p>
            </MysticCard>

            <MysticCard>
              <ShieldAlert className="text-cyan-400 mb-6 w-8 h-8" />
              <span className="text-[10px] font-mono text-gray-500 mb-2 block tracking-widest">NODE_02</span>
              <h3 className="font-display text-xl text-white mb-4">Ética da Autoria</h3>
              <p className="text-gray-500 text-sm">
                Responsabilidade, critério e identidade em sistemas inteligentes.
              </p>
            </MysticCard>

            <MysticCard>
              <Zap className="text-cyan-400 mb-6 w-8 h-8" />
              <span className="text-[10px] font-mono text-gray-500 mb-2 block tracking-widest">NODE_03</span>
              <h3 className="font-display text-xl text-white mb-4">Estratégia Viva</h3>
              <p className="text-gray-500 text-sm">
                Orquestrar inteligência sem perder presença.
              </p>
            </MysticCard>

            <MysticCard>
              <Orbit className="text-cyan-400 mb-6 w-8 h-8" />
              <span className="text-[10px] font-mono text-gray-500 mb-2 block tracking-widest">NODE_04</span>
              <h3 className="font-display text-xl text-white mb-4">Sistema Sustentável</h3>
              <p className="text-gray-500 text-sm">
                Convivência consciente entre humano e máquina.
              </p>
            </MysticCard>

          </div>
        </div>
      </Section>

      {/* --- 4. CITAÇÃO --- */}
      <section className="py-24 bg-gradient-to-b from-black to-cyan-950/10">
        <div className="container max-w-3xl text-center">
          <Fingerprint className="text-cyan-500/40 w-12 h-12 mx-auto mb-8" />
          <blockquote className="font-display text-2xl md:text-4xl text-gray-200">
            “Quando o centro é terceirizado,  
            o sistema cresce — e o humano encolhe.”
          </blockquote>
        </div>
      </section>

      {/* --- 5. ASSIMILAÇÃO --- */}
      <section className="py-32 container grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <h2 className="font-display text-4xl text-white">
            Isto não é um manual.<br/>É um alinhamento.
          </h2>
          <p className="text-gray-400 text-lg">
            Um livro para quem deseja conviver com a IA sem perder o centro.
          </p>

          <div className="grid gap-4">
            {[
              "Consciência aplicada à tecnologia",
              "Critério estratégico em ambientes automatizados",
              "Preservação da identidade humana",
              "Uso ético e sustentável da IA"
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-center p-4 bg-white/5 border border-white/5 rounded-sm">
                <CheckCircle2 className="text-cyan-400 w-5 h-5" />
                <span className="text-gray-300 text-sm font-mono">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-cyan-950/10 border border-cyan-500/20 p-8 rounded-sm">
          <h4 className="font-mono text-cyan-400 text-xs mb-4 uppercase tracking-widest">
            Artefato
          </h4>
          <div className="space-y-2 text-sm font-mono text-gray-500">
            <p>&gt; FORMATO: Livro Digital (PDF)</p>
            <p>&gt; PROPÓSITO: Alinhamento Humano-IA</p>
            <p>&gt; ACESSO: Imediato</p>
          </div>
        </div>
      </section>

      {/* --- 6. OFERTA --- */}
      <section className="py-40">
        <div className="container max-w-2xl text-center">
          <h2 className="font-display text-5xl text-white mb-6">
            Assuma o Eixo
          </h2>
          <p className="text-gray-400 mb-12">
            Não é para todos. É para quem sente.
          </p>

          <a 
            href={KIWIFY_LINK}
            target="_blank"
            className="w-full inline-block py-6 bg-cyan-600 hover:bg-white text-black font-bold uppercase tracking-[0.3em] transition-all"
          >
            Acessar Agora
          </a>
        </div>
      </section>

    </main>
  );
}
