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
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-mono text-neon-green text-xs uppercase tracking-widest mb-4 block">Live Proof</span>
            <h2 className="font-display text-3xl md:text-5xl text-white mb-4">
              Este site é gerenciado por <span className="text-neon-green">agentes autônomos</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Cada decisão, contexto e aprendizado é preservado em arquivos estruturados. O sistema nunca esquece. Nunca perde o fio.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 border border-white/10 bg-white/[0.02] rounded-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-neon-green/10 flex items-center justify-center">
                  <span className="text-neon-green font-mono text-sm">🧠</span>
                </div>
                <span className="font-mono text-xs text-neon-green uppercase tracking-widest">Memória Perpétua</span>
              </div>
              <p className="text-gray-400 text-sm">Cada decisão, contexto e aprendizado é preservado em arquivos estruturados. O sistema nunca esquece.</p>
            </div>
            <div className="p-6 border border-white/10 bg-white/[0.02] rounded-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-neon-green/10 flex items-center justify-center">
                  <span className="text-neon-green font-mono text-sm">⚡</span>
                </div>
                <span className="font-mono text-xs text-neon-green uppercase tracking-widest">Execução Autônoma</span>
              </div>
              <p className="text-gray-400 text-sm">Crons executam tarefas em background. Revisões rodam sozinhas. Alertas disparados automaticamente.</p>
            </div>
            <div className="p-6 border border-white/10 bg-white/[0.02] rounded-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-neon-green/10 flex items-center justify-center">
                  <span className="text-neon-green font-mono text-sm">🔄</span>
                </div>
                <span className="font-mono text-xs text-neon-green uppercase tracking-widest">Orquestração</span>
              </div>
              <p className="text-gray-400 text-sm">Múltiplos agentes especializados trabalham em paralelo. Cada um com seu papel. Uma inteligência coordenando.</p>
            </div>
          </div>
          <div className="text-center mt-10">
            <p className="text-gray-500 font-mono text-xs mb-4">Quer um sistema assim para o seu negócio?</p>
            <a href="https://solutions.marroc.xyz" className="inline-flex items-center gap-2 px-8 py-4 bg-neon-green hover:bg-white text-black font-bold uppercase tracking-widest text-xs transition-colors">
              Implementar Autonomia →
            </a>
          </div>
        </div>
      </section>

      {/* --- MENU DE SERVIÇOS (ATUALIZADO PARA 4 COLUNAS) --- */}
<section className="py-24 px-4 bg-[#050505]">
  <div className="container mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    
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

      {/* --- ONDA 3: LEARNING PATHS --- */}
      <section className="py-24 px-6 border-t border-white/5 bg-[#080808] relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-mono text-neon-green text-xs uppercase tracking-widest mb-4 block">Learning Paths</span>
            <h2 className="font-display text-3xl md:text-5xl text-white mb-6">
              A Jornada da <span className="text-neon-green">Soberania Digital</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Não vendemos serviços. Entregamos <strong className="text-white">educação estratégica</strong>.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group p-8 border border-white/10 bg-white/[0.02] hover:border-neon-green/30 transition-all">
              <span className="font-mono text-neon-green text-xs uppercase tracking-widest mb-2 block">Trilha 01</span>
              <h3 className="font-display text-2xl text-white mb-4">Arquitetura de Agentes</h3>
              <p className="text-gray-400 text-sm mb-4">Do conceito à operação: como transformar processos manuais em sistemas autônomos.</p>
              <div className="space-y-2 text-xs font-mono text-gray-500">
                <div><span className="text-neon-green">01</span> Mapeamento de fluxos operacionais</div>
                <div><span className="text-neon-green">02</span> Engenharia de prompts e memória</div>
                <div><span className="text-neon-green">03</span> Deploy e monitoramento contínuo</div>
              </div>
            </div>
            <div className="group p-8 border border-white/10 bg-white/[0.02] hover:border-cyan-400/30 transition-all">
              <span className="font-mono text-cyan-400 text-xs uppercase tracking-widest mb-2 block">Trilha 02</span>
              <h3 className="font-display text-2xl text-white mb-4">Saliência de Entidade</h3>
              <p className="text-gray-400 text-sm mb-4">Como fazer o Google entender que você é a autoridade máxima do seu nicho.</p>
              <div className="space-y-2 text-xs font-mono text-gray-500">
                <div><span className="text-cyan-400">01</span> Diagnóstico de posicionamento atual</div>
                <div><span className="text-cyan-400">02</span> Construção de silo de autoridade</div>
                <div><span className="text-cyan-400">03</span> Monitoramento de percepção (E-E-A-T)</div>
              </div>
            </div>
            <div className="group p-8 border border-white/10 bg-white/[0.02] hover:border-purple-400/30 transition-all">
              <span className="font-mono text-purple-400 text-xs uppercase tracking-widest mb-2 block">Trilha 03</span>
              <h3 className="font-display text-2xl text-white mb-4">Sistemas Vivos Digitais</h3>
              <p className="text-gray-400 text-sm mb-4">A transição de sites estáticos para ecossistemas responsivos.</p>
              <div className="space-y-2 text-xs font-mono text-gray-500">
                <div><span className="text-purple-400">01</span> De páginas à ecossistemas</div>
                <div><span className="text-purple-400">02</span> Feedback loops e adaptação</div>
                <div><span className="text-purple-400">03</span> Escalabilidade sem perda</div>
              </div>
            </div>
            <div className="group p-8 border border-white/10 bg-white/[0.02] hover:border-yellow-400/30 transition-all">
              <span className="font-mono text-yellow-400 text-xs uppercase tracking-widest mb-2 block">Trilha 04</span>
              <h3 className="font-display text-2xl text-white mb-4">Performance Zero-Latency</h3>
              <p className="text-gray-400 text-sm mb-4">Como alcançar INP &lt; 200ms e CLS = 0.</p>
              <div className="space-y-2 text-xs font-mono text-gray-500">
                <div><span className="text-yellow-400">01</span> Auditoria de renderização crítica</div>
                <div><span className="text-yellow-400">02</span> Otimização de Server Components</div>
                <div><span className="text-yellow-400">03</span> Zero-CLS: estabilidade total</div>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <a href="https://solutions.marroc.xyz" className="inline-flex items-center gap-2 px-8 py-4 border border-neon-green text-neon-green hover:bg-neon-green hover:text-black font-bold uppercase tracking-widest text-xs transition-colors">
              Iniciar minha Trilha →
            </a>
          </div>
        </div>
      </section>

{/* --- SEÇÃO GAJA HAI: ARTEFATOS --- */}

      {/* --- ONDA 5: RESPONSE MATRIX --- */}
      <section className="py-24 px-6 border-t border-white/5 bg-[#080808] relative overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-mono text-neon-green text-xs uppercase tracking-widest mb-4 block">Response Matrix</span>
            <h2 className="font-display text-3xl md:text-5xl text-white mb-6">
              Teses de <span className="text-neon-green">Autoridade</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Não respondemos perguntas. <strong className="text-white">Apresentamos teses.</strong>
            </p>
          </div>
          <div className="space-y-4">
            <details className="group border border-white/10 bg-white/[0.02] rounded-sm overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer p-6 font-mono text-sm text-white hover:text-neon-green list-none">
                <span><span className="text-neon-green">//</span> O que é um sistema vivo digital?</span>
                <span className="text-neon-green group-open:rotate-45">+</span>
              </summary>
              <div className="px-6 pb-6 text-gray-400 text-sm border-t border-white/5 pt-4">
                <p><strong className="text-white">Um sistema vivo digital é um ecossistema que respira, aprende e se adapta.</strong> Diferente de um site tradicional (que é estático), um sistema vivo possui memória, autonomia e capacidade de evolução.</p>
              </div>
            </details>
            <details className="group border border-white/10 bg-white/[0.02] rounded-sm overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer p-6 font-mono text-sm text-white hover:text-neon-green list-none">
                <span><span className="text-neon-green">//</span> Por que a maioria das agências falha?</span>
                <span className="text-neon-green group-open:rotate-45">+</span>
              </summary>
              <div className="px-6 pb-6 text-gray-400 text-sm border-t border-white/5 pt-4">
                <p><strong className="text-white">Porque entregam ferramentas, não sistemas.</strong> Uma landing page bonita não gera receita. O que gera resultado é um ecossistema onde cada componente conversa com o outro.</p>
              </div>
            </details>
            <details className="group border border-white/10 bg-white/[0.02] rounded-sm overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer p-6 font-mono text-sm text-white hover:text-neon-green list-none">
                <span><span className="text-neon-green">//</span> Como a IA muda a operação B2B?</span>
                <span className="text-neon-green group-open:rotate-45">+</span>
              </summary>
              <div className="px-6 pb-6 text-gray-400 text-sm border-t border-white/5 pt-4">
                <p><strong className="text-white">A IA não automatiza tarefas. Ela multiplica resultados.</strong> O mesmo tempo que um salesperson gasta respondendo perguntas básicas, um agente de IA responde 1000x com consistência.</p>
              </div>
            </details>
            <details className="group border border-white/10 bg-white/[0.02] rounded-sm overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer p-6 font-mono text-sm text-white hover:text-neon-green list-none">
                <span><span className="text-neon-green">//</span> O que é saliência de entidade?</span>
                <span className="text-neon-green group-open:rotate-45">+</span>
              </summary>
              <div className="px-6 pb-6 text-gray-400 text-sm border-t border-white/5 pt-4">
                <p><strong className="text-white">Saliência de entidade é como o Google te vê.</strong> Se você é uma "agência de marketing", o Google te compara com 10.000 outras. Se você é o "Arquiteto de Agentes Autônomos para B2B", não existe comparação.</p>
              </div>
            </details>
          </div>
          <div className="text-center mt-12">
            <a href="https://solutions.marroc.xyz" className="inline-flex items-center gap-2 px-8 py-4 bg-neon-green hover:bg-white text-black font-bold uppercase tracking-widest text-xs transition-colors">
              Implementar Minha Autoridade →
            </a>
          </div>
        </div>
      </section>

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