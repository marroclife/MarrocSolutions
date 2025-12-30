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
      
      {/* --- 1. HERO: O PONTO ZERO --- */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20 pb-12 overflow-hidden">
        {/* Background Ambience - Cyan Focus */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(0,255,255,0.08),transparent_70%)]" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
        
        {/* Vertical Beam (O Eixo) */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent opacity-30" />

        <div className="container relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <NodeBadge>Protocolo: Soberania Cognitiva</NodeBadge>
            
            <h1 className="font-display text-5xl md:text-7xl leading-tight text-white tracking-tighter">
              O EIXO DA <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-200 to-cyan-400 drop-shadow-[0_0_15px_rgba(6,182,212,0.4)]">
                CONSCIÊNCIA
              </span>
            </h1>
            
            <p className="text-xl text-gray-400 leading-relaxed max-w-xl font-light italic border-l border-cyan-500/30 pl-6">
              "A inteligência artificial não veio para substituir o humano. Ela veio para revelar quem ele é."
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href={KIWIFY_LINK}
                target="_blank"
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-cyan-600 text-black font-bold uppercase tracking-widest text-sm rounded-sm transition-all hover:bg-white hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]"
              >
                Adquirir Artefato
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link 
                href="#manifesto"
                className="px-8 py-4 text-xs font-mono text-cyan-400/60 hover:text-cyan-400 transition flex items-center justify-center gap-2 group border border-cyan-900/30 hover:border-cyan-500/50 rounded-sm"
              >
                Ler Manifesto
              </Link>
            </div>
          </div>

          <div className="relative flex justify-center order-1 lg:order-2">
            {/* Book Visualization */}
            <div className="relative w-[320px] md:w-[400px] aspect-[3/4.5] shadow-[0_0_50px_-10px_rgba(6,182,212,0.3)] group">
                <Image 
                  src="/capa-eixo.png" // Certifique-se de subir esta imagem
                  alt="Capa O Eixo da Consciência"
                  fill
                  className="object-contain rounded-sm transition-transform duration-700 group-hover:scale-[1.02]"
                  priority
                />
            </div>
          </div>
        </div>
      </section>

      {/* --- 2. O DESLOCAMENTO: DA EXECUÇÃO À INTENÇÃO --- */}
      <section id="manifesto" className="py-32 bg-black border-y border-white/5 relative">
        <div className="container max-w-4xl">
            <div className="text-center space-y-12">
                <h2 className="font-display text-3xl md:text-5xl text-white">
                    Você não é um <span className="text-cyan-400">operário cognitivo.</span>
                </h2>
                <div className="space-y-8 text-gray-400 text-lg md:text-xl font-light leading-relaxed text-justify">
                    <p>
                        A maioria das pessoas acredita que o problema da criação contemporânea é a falta de tempo. Não é. O verdadeiro problema é onde a energia criativa está sendo desperdiçada.
                    </p>
                    <p>
                        Pesquisa básica. Formatação. Reescrita mecânica. Tarefas que não exigem humanidade, mas consomem sua atenção consciente — seu recurso mais raro.
                    </p>
                    <p className="text-white font-medium text-center py-8 border-y border-cyan-500/10">
                        A IA surge para deslocar você: não para fora do processo, mas para o centro dele.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* --- 3. OS 4 NODES: A ARQUITETURA DO LIVRO --- */}
      <Section className="py-32 bg-[#050505]">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <MysticCard className="border-cyan-500/10 hover:border-cyan-500/40 group">
                <Terminal className="text-cyan-400 mb-6 w-8 h-8" />
                <span className="text-[10px] font-mono text-gray-500 mb-2 block tracking-widest">NODE_01</span>
                <h3 className="font-display text-xl text-white mb-4">Eixo Invisível</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                    Como inverte a lógica da colaboração para externalizar o baixo valor cognitivo e focar no significado.
                </p>
            </MysticCard>

            <MysticCard className="border-cyan-500/10 hover:border-cyan-500/40 group">
                <ShieldAlert className="text-cyan-400 mb-6 w-8 h-8" />
                <span className="text-[10px] font-mono text-gray-500 mb-2 block tracking-widest">NODE_02</span>
                <h3 className="font-display text-xl text-white mb-4">Ética do Poder</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                    A consciência como agente moral. Por que transparência não é opcional na era da autoria difusa.
                </p>
            </MysticCard>

            <MysticCard className="border-cyan-500/10 hover:border-cyan-500/40 group">
                <Zap className="text-cyan-400 mb-6 w-8 h-8" />
                <span className="text-[10px] font-mono text-gray-500 mb-2 block tracking-widest">NODE_03</span>
                <h3 className="font-display text-xl text-white mb-4">Maestria Estratégica</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                    Sistemas de decisão sobre ferramentas. Do "fazer" ao "orquestrar" inteligência.
                </p>
            </MysticCard>

            <MysticCard className="border-cyan-500/10 hover:border-cyan-500/40 group">
                <Orbit className="text-cyan-400 mb-6 w-8 h-8" />
                <span className="text-[10px] font-mono text-gray-500 mb-2 block tracking-widest">NODE_04</span>
                <h3 className="font-display text-xl text-white mb-4">Sistema Vivo</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                    Como construir uma relação de convivência que te sustenta sem te fragmentar.
                </p>
            </MysticCard>

          </div>
        </div>
      </Section>

      {/* --- 4. CITAÇÃO CHAVE --- */}
      <section className="py-24 bg-gradient-to-b from-black to-cyan-950/10">
        <div className="container max-w-3xl text-center">
            <Fingerprint className="text-cyan-500/40 w-12 h-12 mx-auto mb-8" />
            <blockquote className="font-display text-2xl md:text-4xl text-gray-200 leading-tight">
                "Você é o eixo. A IA é satélite. Quando essa hierarquia se inverte, a prática se esvazia."
            </blockquote>
        </div>
      </section>

      {/* --- 5. O QUE VOCÊ IRÁ ASSIMILAR --- */}
      <section className="py-32 container grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
            <h2 className="font-display text-4xl text-white">Download de <br/> Consciência</h2>
            <p className="text-gray-400 text-lg">
                Este não é um livro sobre como escrever prompts. É um guia para não perder sua humanidade enquanto ganha escala divina.
            </p>
            
            <div className="grid gap-4">
                {[
                    "Higiene Cognitiva: O fim da exaustão mental inútil.",
                    "Soberania Neural: Proteja seu espaço de síntese e intuição.",
                    "Arquitetura Narrativa: Como comandar ecossistemas de IA.",
                    "O Veredito Ético: Construa uma reputação inabalável."
                ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-center p-4 bg-white/5 border border-white/5 rounded-sm">
                        <CheckCircle2 className="text-cyan-400 w-5 h-5 shrink-0" />
                        <span className="text-gray-300 text-sm font-mono tracking-tight">{item}</span>
                    </div>
                ))}
            </div>
        </div>
        <div className="bg-cyan-950/10 border border-cyan-500/20 p-8 rounded-sm relative overflow-hidden group">
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-cyan-500/5 rounded-full blur-[80px]" />
            <Terminal className="text-cyan-500/50 mb-6" size={40} />
            <h4 className="font-mono text-cyan-400 text-xs mb-4 uppercase tracking-[0.3em]">Status do Artefato</h4>
            <div className="space-y-2 text-sm font-mono text-gray-500">
                <p>&gt; TIPO: Livro Digital (PDF)</p>
                <p>&gt; MODELO: Cyber-Humanismo v1.0</p>
                <p>&gt; ACESSO: Imediato via Kiwify</p>
                <p>&gt; IMPACTO: Expansão de Consciência</p>
            </div>
        </div>
      </section>

      {/* --- 6. OFERTA FINAL --- */}
      <section id="oferta" className="py-40 relative">
        <div className="container max-w-2xl text-center">
          <div className="mb-12">
            <h2 className="font-display text-4xl md:text-6xl text-white mb-6">Assuma o Eixo</h2>
            <p className="text-gray-400 font-light">
              Escolha integrar a tecnologia com integridade. O acesso ao artefato é vitalício.
            </p>
          </div>

          <div className="relative p-12 bg-black border border-cyan-500/30 rounded-sm shadow-[0_0_60px_-15px_rgba(6,182,212,0.3)]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cyan-600 text-black text-[10px] font-bold px-4 py-1 uppercase tracking-[0.2em]">
              Oferta de Lançamento
            </div>

            <div className="flex flex-col items-center gap-6">
                <div className="flex items-baseline gap-2">
                    <span className="text-xl text-cyan-500/50 font-mono">R$</span>
                    <span className="text-7xl font-display text-white">47,00</span>
                </div>
                
                <p className="text-xs text-gray-500 font-mono uppercase tracking-widest">
                  Valor Único • Acesso Imediato
                </p>

                <a 
                    href={KIWIFY_LINK}
                    target="_blank"
                    className="w-full py-5 bg-cyan-600 hover:bg-white text-black font-bold uppercase tracking-[0.3em] text-sm transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]"
                >
                    Desbloquear Acesso
                </a>

                <div className="pt-6 flex items-center gap-6 text-gray-600">
                    <div className="flex flex-col items-center gap-1">
                        <BookOpen size={16} />
                        <span className="text-[9px] uppercase tracking-tighter">PDF Nativo</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                        <ShieldAlert size={16} />
                        <span className="text-[9px] uppercase tracking-tighter">Garantia 7 Dias</span>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER: O AUTOR --- */}
      <footer className="py-20 border-t border-white/5 bg-[#020202]">
        <div className="container max-w-4xl flex flex-col md:flex-row items-center gap-12 opacity-60 hover:opacity-100 transition-opacity duration-700">
            <div className="w-24 h-24 relative grayscale rounded-full overflow-hidden border border-cyan-500/30">
                <Image src="/autor.png" alt="Marroc" fill className="object-cover" />
            </div>
            <div className="text-center md:text-left">
                <p className="font-mono text-cyan-400 text-[10px] uppercase tracking-widest mb-2">Sobre o Artífice</p>
                <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
                    Marroc investiga a interseção entre consciência, tecnologia e estratégia viva. 
                    Sua obra transita entre filosofia existencial, neurociência aplicada e sistemas inteligentes. 
                    O Eixo da Consciência é o resultado de anos habitando a fronteira entre o código e o ritual.
                </p>
            </div>
        </div>
        <div className="mt-20 text-center text-[10px] font-mono text-gray-700 tracking-[0.5em] uppercase">
            Marroc Labs // Human.Centric.Systems
        </div>
      </footer>

    </main>
  );
}