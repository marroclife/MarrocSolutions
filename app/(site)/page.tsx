"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image"; 
import { ArrowRight, Hexagon, Zap, Activity, Code, Music, BookOpen, ShoppingBag } from "lucide-react";

export default function HomePage() {
  const [hoveredSide, setHoveredSide] = useState<"left" | "right" | null>(null);

  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-x-hidden selection:bg-neon-green selection:text-black">
      
      {/* --- DOBRA 1: HERO SPLIT --- */}
      <section className="relative w-full flex flex-col md:flex-row md:h-screen">
        
        {/* MOBILE HEADER (Fixo no topo em telas pequenas) */}
        <div className="md:hidden pt-24 pb-8 px-6 text-center bg-[#050505] z-20 relative">
            <h1 className="font-display text-3xl tracking-tighter leading-none mb-2 text-white">
              DOMINAMOS A <br/> FREQUÊNCIA
            </h1>
            <p className="font-mono text-[10px] text-gray-500 uppercase tracking-[0.3em]">
              Hertz & Bits Ecosystem
            </p>
        </div>

        {/* LADO ESQUERDO: SOLUTIONS (Tech) */}
        <Link 
          href="https://solutions.marroc.xyz"
          className="relative w-full md:flex-1 group min-h-[50vh] md:h-full border-b md:border-b-0 md:border-r border-white/10 overflow-hidden cursor-pointer"
          onMouseEnter={() => setHoveredSide("left")}
          onMouseLeave={() => setHoveredSide(null)}
        >
          <div className={`absolute inset-0 bg-[url('/bg-tech-grid.jpg')] bg-cover bg-center transition-all duration-700 ${hoveredSide === 'left' ? 'scale-105 opacity-40' : 'opacity-20 grayscale'}`} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-90" />
          
          <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-16 py-12 transition-transform duration-500 md:group-hover:translate-x-2">
            <div className="flex items-center gap-2 text-neon-green mb-4">
              <Hexagon size={20} />
              <span className="font-mono text-xs tracking-widest uppercase">Para Negócios</span>
            </div>
            <h2 className="font-display text-4xl md:text-7xl leading-none mb-2 md:group-hover:text-neon-green transition-colors">
              MARROC <br/> SOLUTIONS
            </h2>
            <p className="font-mono text-gray-400 text-sm md:text-base max-w-sm mt-4 border-l border-neon-green/30 pl-4">
              <strong className="text-white">Arquitetura de Inteligência Operacional.</strong><br/>
              Sistemas de agentes autônomos para escalar a capacidade produtiva da sua empresa.
            </p>
            <div className="mt-8 flex items-center gap-2 text-sm font-bold uppercase tracking-widest md:opacity-0 md:group-hover:opacity-100 transition-opacity transform md:translate-y-4 md:group-hover:translate-y-0 text-neon-green md:text-white">
              Acessar Consultoria <ArrowRight size={16} />
            </div>
          </div>
        </Link>

        {/* LADO DIREITO: LABS (Arte) */}
        <div 
          className="relative w-full md:flex-1 group min-h-[50vh] md:h-full overflow-hidden cursor-default"
          onMouseEnter={() => setHoveredSide("right")}
          onMouseLeave={() => setHoveredSide(null)}
        >
          <div className={`absolute inset-0 bg-[url('/bg-art-fluid.jpg')] bg-cover bg-center transition-all duration-700 ${hoveredSide === 'right' ? 'scale-105 opacity-50' : 'opacity-20'}`} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-90" />

          <div className="relative z-10 h-full flex flex-col justify-center md:items-end md:text-right px-6 md:px-16 py-12 transition-transform duration-500 md:group-hover:-translate-x-2">
            <div className="flex items-center md:justify-end gap-2 text-purple-400 mb-4">
              <span className="font-mono text-xs tracking-widest uppercase md:order-1">Para a Mente</span>
              <Zap size={20} className="md:order-2"/>
            </div>
            <h2 className="font-display text-4xl md:text-7xl leading-none mb-2 md:group-hover:text-purple-400 transition-colors">
              MARROC <br/> LABS
            </h2>
            <p className="font-mono text-gray-400 text-sm md:text-base max-w-sm mt-4 md:border-r border-l md:border-l-0 border-purple-500/30 pl-4 md:pl-0 md:pr-4">
              Ecossistema de Arte & Frequência. <br/>
              Música IA, Rituais e Livros.
            </p>
            
            <div className="mt-8 flex flex-wrap md:justify-end gap-3 md:opacity-0 md:group-hover:opacity-100 transition-opacity transform md:translate-y-4 md:group-hover:translate-y-0">
               <Link href="/higher-hz" className="px-4 py-2 border border-purple-500/50 rounded hover:bg-purple-500 hover:text-black text-xs font-mono uppercase transition">
                 Higher Hz
               </Link>
               <Link href="/musica" className="px-4 py-2 border border-purple-500/50 rounded hover:bg-purple-500 hover:text-black text-xs font-mono uppercase transition">
                 Live Ritual
               </Link>
               <Link href="/rituais" className="px-4 py-2 border border-purple-500/50 rounded hover:bg-emerald-500 hover:border-emerald-500 hover:text-black text-xs font-mono uppercase transition text-emerald-400/80">
                 Terapias
               </Link>
            </div>
          </div>
        </div>

        {/* DESKTOP HUB TITLE (Apenas PC) */}
        <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20 flex-col items-center">
           <div className={`transition-all duration-700 ${hoveredSide ? 'opacity-0 scale-50' : 'opacity-100 scale-100'}`}>
              <h1 className="text-center font-display text-6xl tracking-tighter leading-none mb-2 mix-blend-difference">
                DOMINAMOS A <br/> FREQUÊNCIA
              </h1>
              <p className="text-center font-mono text-xs text-gray-500 uppercase tracking-[0.3em]">
                Hertz & Bits Ecosystem
              </p>
           </div>
           <div className="w-px h-24 bg-gradient-to-b from-transparent via-white/20 to-transparent mt-8"></div>
        </div>
      </section>

      {/* --- DOBRA 2: A PONTE --- */}
      <section className="py-20 px-6 border-t border-white/5 bg-[#080808]">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h3 className="font-mono text-neon-green text-xs md:text-sm uppercase tracking-widest">
            // O Algoritmo da Criação
          </h3>
          <p className="font-display text-2xl md:text-4xl leading-relaxed text-gray-200">
            "Por que uma consultoria de tecnologia produz música psicodélica? <br/>
            Porque <span className="text-white border-b border-neon-green">Complexidade</span> é a nossa linguagem."
          </p>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 text-left mt-12 font-mono text-sm text-gray-400 leading-relaxed">
            <p>
              O mesmo código que gera frequências de cura e orquestra experiências imersivas no palco é a base da inteligência que aplicamos no seu negócio.
            </p>
            <p>
              Não somos apenas desenvolvedores. Somos arquitetos de sistemas vivos. Unimos a precisão matemática da IA com a intuição humana.
            </p>
          </div>
        </div>
      </section>

      {/* --- ONDA 2: PROOF OF WORK (Nexo como caso vivo) --- */}
      <section className="py-24 px-6 border-t border-neon-green/10 bg-[#050505] relative overflow-hidden">
        {/* Glow de fundo */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,148,0.03),transparent_70%)] pointer-events-none" />
        
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="font-mono text-neon-green text-xs uppercase tracking-widest mb-4 block">Proof of Work</span>
            <h2 className="font-display text-3xl md:text-5xl text-white mb-6">
              Este ecossistema é operado por <br/>
              <span className="text-neon-green">sistemas de agentes autônomos</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A melhor prova de que construímos sistemas vivos é que <strong className="text-white">este site é gerido por um deles</strong>. Não vendemos teoria. Entregamos realidade.
            </p>
          </div>

          {/* Cards de Prova */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Prova 1: Memória */}
            <div className="p-6 border border-white/10 bg-white/[0.02] rounded-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-neon-green/10 flex items-center justify-center">
                  <span className="text-neon-green font-mono text-sm">🧠</span>
                </div>
                <span className="font-mono text-xs text-neon-green uppercase tracking-widest">Memória Perpétua</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Cada decisão, contexto e aprendizado é preservado em arquivos estruturados. O sistema nunca esquece. Nunca perde o fio.
              </p>
            </div>

            {/* Prova 2: Ejecução */}
            <div className="p-6 border border-white/10 bg-white/[0.02] rounded-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-neon-green/10 flex items-center justify-center">
                  <span className="text-neon-green font-mono text-sm">⚡</span>
                </div>
                <span className="font-mono text-xs text-neon-green uppercase tracking-widest">Execução Autônoma</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Crons executam tarefas em background. Revisões rodam sozinhas. Alertas disparados automaticamente. Sem intervenção humana constante.
              </p>
            </div>

            {/* Prova 3: Orquestração */}
            <div className="p-6 border border-white/10 bg-white/[0.02] rounded-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-neon-green/10 flex items-center justify-center">
                  <span className="text-neon-green font-mono text-sm">🔄</span>
                </div>
                <span className="font-mono text-xs text-neon-green uppercase tracking-widest">Orquestração de Agentes</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Múltiplos agentes especializados trabalham em paralelo. Cada um com seu papel. Uma única inteligência coordenando o ecossistema.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-gray-500 font-mono text-xs mb-4">
              Quer um sistema assim para o seu negócio?
            </p>
            <Link 
              href="https://solutions.marroc.xyz" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-neon-green hover:bg-white text-black font-bold uppercase tracking-widest text-xs transition-colors"
            >
              Implementar Autonomia <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* --- ONDA 3: LEARNING PATHS (Trilhas de Autoridade) --- */}
      <section className="py-24 px-6 border-t border-white/5 bg-[#080808] relative overflow-hidden">
        {/* Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,255,148,0.02),transparent_50%)] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="font-mono text-neon-green text-xs uppercase tracking-widest mb-4 block">Learning Paths</span>
            <h2 className="font-display text-3xl md:text-5xl text-white mb-6">
              A Jornada da <span className="text-neon-green">Soberania Digital</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Não vendemos serviços. Entregamos <strong className="text-white">educação estratégica</strong>. Cada trilha é um caminho de domínio que transforma sua percepção sobre o digital.
            </p>
          </div>

          {/* Trilhas */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Trilha 1: Arquitetura de IA */}
            <div className="group p-8 border border-white/10 bg-white/[0.02] hover:border-neon-green/30 transition-all duration-500">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <span className="font-mono text-neon-green text-xs uppercase tracking-widest mb-2 block">Trilha 01</span>
                  <h3 className="font-display text-2xl text-white">Arquitetura de Agentes</h3>
                </div>
                <div className="w-12 h-12 rounded-full border border-neon-green/30 flex items-center justify-center text-neon-green group-hover:bg-neon-green group-hover:text-black transition-colors">
                  <span className="text-lg">→</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-6">
                Do conceito à operação: como transformar processos manuais em <strong className="text-white">sistemas autônomos</strong> que executam, aprendem e evoluem.
              </p>
              <div className="space-y-2 text-xs font-mono text-gray-500">
                <div className="flex items-center gap-2">
                  <span className="text-neon-green">01</span>
                  <span>Mapeamento de fluxos operacionais</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-neon-green">02</span>
                  <span>Engenharia de prompts e memória</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-neon-green">03</span>
                  <span>Deploy e monitoramento contínuo</span>
                </div>
              </div>
            </div>

            {/* Trilha 2: Saliência de Entidade */}
            <div className="group p-8 border border-white/10 bg-white/[0.02] hover:border-cyan-400/30 transition-all duration-500">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <span className="font-mono text-cyan-400 text-xs uppercase tracking-widest mb-2 block">Trilha 02</span>
                  <h3 className="font-display text-2xl text-white">Saliência de Entidade</h3>
                </div>
                <div className="w-12 h-12 rounded-full border border-cyan-400/30 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-400 group-hover:text-black transition-colors">
                  <span className="text-lg">→</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-6">
                Como fazer o Google <strong className="text-white">entender que você é a autoridade máxima</strong> do seu nicho. Além do SEO: engenharia de percepção.
              </p>
              <div className="space-y-2 text-xs font-mono text-gray-500">
                <div className="flex items-center gap-2">
                  <span className="text-cyan-400">01</span>
                  <span>Diagnóstico de posicionamento atual</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-cyan-400">02</span>
                  <span>Construção de silo de autoridade</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-cyan-400">03</span>
                  <span>Monitoramento de percepção (E-E-A-T)</span>
                </div>
              </div>
            </div>

            {/* Trilha 3: Sistemas Vivos */}
            <div className="group p-8 border border-white/10 bg-white/[0.02] hover:border-purple-400/30 transition-all duration-500">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <span className="font-mono text-purple-400 text-xs uppercase tracking-widest mb-2 block">Trilha 03</span>
                  <h3 className="font-display text-2xl text-white">Sistemas Vivos Digitais</h3>
                </div>
                <div className="w-12 h-12 rounded-full border border-purple-400/30 flex items-center justify-center text-purple-400 group-hover:bg-purple-400 group-hover:text-black transition-colors">
                  <span className="text-lg">→</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-6">
                A transição de <strong className="text-white">sites estáticos para ecossistemas responsivos</strong>. Como fazer seu digital respirar, aprender e se adaptar.
              </p>
              <div className="space-y-2 text-xs font-mono text-gray-500">
                <div className="flex items-center gap-2">
                  <span className="text-purple-400">01</span>
                  <span>De páginas à ecossistemas (arquitetura)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-purple-400">02</span>
                  <span>Feedback loops e adaptação contínua</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-purple-400">03</span>
                  <span>Escalabilidade sem perda de performance</span>
                </div>
              </div>
            </div>

            {/* Trilha 4: Performance Zero-Latency */}
            <div className="group p-8 border border-white/10 bg-white/[0.02] hover:border-yellow-400/30 transition-all duration-500">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <span className="font-mono text-yellow-400 text-xs uppercase tracking-widest mb-2 block">Trilha 04</span>
                  <h3 className="font-display text-2xl text-white">Performance Zero-Latency</h3>
                </div>
                <div className="w-12 h-12 rounded-full border border-yellow-400/30 flex items-center justify-center text-yellow-400 group-hover:bg-yellow-400 group-hover:text-black transition-colors">
                  <span className="text-lg">→</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-6">
                Como alcançar <strong className="text-white">INP &lt; 200ms e CLS = 0</strong>. A velocidade como extensão do pensamento, não como métrica técnica.
              </p>
              <div className="space-y-2 text-xs font-mono text-gray-500">
                <div className="flex items-center gap-2">
                  <span className="text-yellow-400">01</span>
                  <span>Auditoria de renderização crítica</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-yellow-400">02</span>
                  <span>Otimização de Server Components</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-yellow-400">03</span>
                  <span>Zero-CLS: estabilidade total de layout</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-gray-500 font-mono text-xs mb-4">
              Pronto para dominar sua jornada digital?
            </p>
            <a
              href="https://solutions.marroc.xyz"
              className="inline-flex items-center gap-2 px-8 py-4 border border-neon-green text-neon-green hover:bg-neon-green hover:text-black font-bold uppercase tracking-widest text-xs transition-colors"
            >
              Iniciar minha Trilha <span className="text-lg">→</span>
            </a>
          </div>
        </div>
      </section>
    
    {/* Card 1: SOLUTIONS (Green) */}
    <div className="group p-8 rounded-none border border-neon-green/30 bg-deep-emerald/5 hover:border-neon-green/50 hover:bg-deep-emerald/10 transition-all duration-500 flex flex-col">
      <Code className="text-neon-green mb-6 w-10 h-10" />
      <span className="block font-mono text-xs text-neon-green mb-2 uppercase tracking-widest">B2B / Performance</span>
      <h3 className="font-display text-3xl text-white mb-4">Marroc Solutions</h3>
      <ul className="space-y-2 font-mono text-[10px] text-gray-400 mb-8 flex-1">
        <li>&gt; Orquestração de Agentes Autônomos</li>
        <li>&gt; Saliência de Entidade & SEO</li>
        <li>&gt; Arquitetura de Sistemas Vivos</li>
      </ul>
      <Link href="https://solutions.marroc.xyz" className="block w-full py-3 text-center bg-neon-green hover:bg-white hover:text-black text-black font-bold uppercase tracking-widest text-[10px] transition-colors">
        Agendar Auditoria
      </Link>
    </div>

    {/* Card 2: LIVROS (Cyan - O NOVO) */}
    <div className="group p-8 rounded-none border border-cyan-500/30 bg-cyan-950/5 hover:border-cyan-400/60 hover:bg-cyan-950/10 transition-all duration-500 flex flex-col">
      <BookOpen className="text-cyan-400 mb-6 w-10 h-10" />
      <span className="block font-mono text-xs text-cyan-500 mb-2 uppercase tracking-widest">Digital / Narrative</span>
      <h3 className="font-display text-3xl text-white mb-4">Biblioteca Marroc</h3>
      <ul className="space-y-2 font-mono text-[10px] text-gray-400 mb-8 flex-1">
        <li>&gt; O Eixo da Consciência</li>
        <li>&gt; Um Lugar Entre Mundos</li>
        <li>&gt; Soberania Cognitiva</li>
      </ul>
      <Link href="/livros" className="block w-full py-3 text-center bg-cyan-600 hover:bg-cyan-400 text-black font-bold uppercase tracking-widest text-[10px] transition-colors">
        Acessar Acervo
      </Link>
    </div>

    {/* Card 3: HIGHER HZ (Purple) */}
    <div className="group p-8 rounded-none border border-white/5 hover:border-purple-500/30 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 flex flex-col">
      <Activity className="text-purple-400 mb-6 w-10 h-10" />
      <span className="block font-mono text-xs text-purple-600 mb-2 uppercase tracking-widest">AI Audio / Arcanos</span>
      <h3 className="font-display text-3xl text-white mb-4">Higher Hz</h3>
      <ul className="space-y-2 font-mono text-[10px] text-gray-400 mb-8 flex-1">
        <li>&gt; IA + Intenção Humana</li>
        <li>&gt; Tarot Musical</li>
        <li>&gt; Frequência 432Hz</li>
      </ul>
      <Link href="/higher-hz" className="block w-full py-3 text-center border border-white/10 hover:border-purple-500 hover:text-purple-400 text-gray-400 font-bold uppercase tracking-widest text-[10px] transition-colors">
        Ouvir Álbum
      </Link>
    </div>

    {/* Card 4: LIVE (Pink/Green) */}
    <div className="group p-8 rounded-none border border-white/5 hover:border-pink-500/30 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 flex flex-col">
      <Music className="text-pink-400 mb-6 w-10 h-10" />
      <span className="block font-mono text-xs text-pink-600 mb-2 uppercase tracking-widest">Experience / Human</span>
      <h3 className="font-display text-3xl text-white mb-4">Live & Rituais</h3>
      <ul className="space-y-2 font-mono text-[10px] text-gray-400 mb-8 flex-1">
        <li>&gt; Psytrance Ritualístico</li>
        <li className="text-emerald-400/80">&gt; Atendimentos de Cura</li>
        <li>&gt; Imersão Multidimensional</li>
      </ul>
      <div className="flex gap-2">
          <Link href="/musica" className="flex-1 py-3 text-center border border-white/10 hover:border-pink-500 hover:text-pink-400 text-gray-400 font-bold uppercase tracking-widest text-[9px] transition-colors">
            O SHOW
          </Link>
          <Link href="/rituais" className="flex-1 py-3 text-center border border-white/10 hover:border-emerald-500 hover:text-emerald-400 text-gray-400 font-bold uppercase tracking-widest text-[9px] transition-colors">
            A CURA
          </Link>
      </div>
    </div>

  </div>
</section>
{/* --- SEÇÃO GAJA HAI: ARTEFATOS --- */}
<section className="relative py-20 border-t border-white/5 overflow-hidden">
  {/* Ambient Glow */}
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(199,169,75,0.05),transparent_70%)] pointer-events-none" />

  <div className="container mx-auto max-w-6xl px-6">
    <div className="relative group bg-white/[0.01] border border-white/5 p-12 md:p-20 overflow-hidden rounded-sm transition-all duration-700 hover:border-gold/20">
      
      {/* Detalhe de Canto */}
      <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-gray-700 uppercase tracking-widest hidden md:block">
        Materializing_Frequency // v1.0
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
        
        <div className="max-w-xl text-center md:text-left space-y-6">
          <div className="flex items-center justify-center md:justify-start gap-3 text-gold/60 mb-2">
            <ShoppingBag size={20} strokeWidth={1.5} />
            <span className="font-mono text-xs tracking-[0.3em] uppercase">Vestuário & Artefatos</span>
          </div>

          <h2 className="font-display text-4xl md:text-6xl text-white tracking-tighter leading-none">
            GAJA <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-gold via-white to-gold">HAI</span>
          </h2>

          <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed">
            Curadoria de objetos de poder e vestimentas codificadas. Ferramentas físicas para a jornada imaterial. 
          </p>

          <div className="pt-4">
            <a 
              href="https://store.marroc.xyz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-bold uppercase tracking-[0.2em] text-xs transition-all hover:bg-gold hover:text-black hover:shadow-[0_0_40px_rgba(199,169,75,0.3)]"
            >
              Explorar Store <ArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* LOGO GAJA HAI COM ORBITAIS */}
        <div className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center group-hover:scale-105 transition-transform duration-1000">
           {/* Orbitais Geométricos em Dourado Sutil */}
           <div className="absolute inset-0 border border-gold/30 rounded-full animate-[spin_30s_linear_infinite] opacity-40" />
           <div className="absolute inset-4 border border-gold/10 rounded-full animate-[spin_20s_linear_infinite_reverse] opacity-20" />
           
           {/* Container da Logo */}
           <div className="relative w-32 h-32 md:w-44 md:h-44 transition-all duration-700 filter group-hover:brightness-125">
              <Image
                src="/gaja-logo.jpeg"
                alt="Gaja Hai Logo"
                fill
                className="object-contain drop-shadow-[0_0_15px_rgba(199,169,75,0.4)]"
              />
           </div>
        </div>

      </div>
    </div>
  </div>
</section>
      <footer className="py-12 border-t border-white/5 text-center font-mono text-xs text-gray-600">
        <p>MARROC ECOSYSTEM © {new Date().getFullYear()}</p>
        <p className="mt-2 text-green-900">SYSTEM STATUS: <span className="text-green-500">OPERATIONAL</span></p>
      </footer>

    </main>
  );
}