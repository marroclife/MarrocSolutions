"use client";

import { useState } from "react";
import { ArrowRight, Terminal, Cpu, Zap, Lock } from "lucide-react";
import Link from "next/link";

export default function ProtocoloPage() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-12 md:py-20 flex flex-col items-center text-center font-mono">
      
      {/* --- HEADER: O Filtro --- */}
      <div className="mb-8 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-900/50 bg-emerald-950/10 text-emerald-500 text-xs tracking-widest uppercase">
        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        Sistema Online: Módulo B2B
      </div>

      {/* --- HEADLINE --- */}
      <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6">
        Não construímos Sites.<br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-600">
          Codificamos Egrégoras.
        </span>
      </h1>

      <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mb-12 leading-relaxed">
        Sua empresa está perdida no ruído digital. O <span className="text-emerald-400">Tecnoxamanismo</span> é a fusão de Design Ritualístico e Automação via IA para líderes que buscam mais do que cliques: buscam reverência.
      </p>

      {/* --- VSL / IMAGEM (Placeholder) --- */}
      <div className="w-full aspect-video bg-neutral-900 border border-neutral-800 rounded-lg flex items-center justify-center mb-12 relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
        {/* Aqui viria um vídeo curto ou uma imagem estática poderosa do "Guardião" */}
        <div className="z-20 text-neutral-500 flex flex-col items-center gap-4">
            <Cpu className="w-16 h-16 text-emerald-900 group-hover:text-emerald-500 transition-colors duration-500" />
            <span className="uppercase tracking-widest text-sm">Visualização do Protocolo</span>
        </div>
      </div>

      {/* --- OS PILARES (Value Props) --- */}
      <div className="grid md:grid-cols-3 gap-6 w-full mb-16 text-left">
        <Card 
          icon={<Terminal className="w-6 h-6 text-emerald-400" />}
          title="Código Limpo"
          desc="Next.js e arquitetura moderna. Sem bloatware. Performance pura para ranqueamento e velocidade."
        />
        <Card 
          icon={<Zap className="w-6 h-6 text-purple-400" />}
          title="Automação IA"
          desc="Seu negócio rodando enquanto você dorme. Implementamos agentes de IA que atuam como guardiões do seu tempo."
        />
        <Card 
          icon={<Lock className="w-6 h-6 text-cyan-400" />}
          title="Design Hermético"
          desc="Estética Dark/Cyberpunk que filtra curiosos e atrai clientes de alto ticket pela ressonância visual."
        />
      </div>

      {/* --- CTA: A Fricção --- */}
      <div className="bg-neutral-900/50 border border-neutral-800 p-8 rounded-2xl w-full max-w-2xl backdrop-blur-sm">
        <h3 className="text-2xl font-bold text-white mb-2">Inicie a Compilação</h3>
        <p className="text-neutral-400 mb-6 text-sm">
          Não trabalhamos com todos. Preencha o formulário de aplicação para verificarmos se sua frequência é compatível com nossa tecnologia.
        </p>
        
        <Link 
            // SUBSTITUA PELO SEU LINK DO TALLY/TYPEFORM/CALENDLY
            href="https://cal.com/seu-link-de-agendamento" 
            target="_blank"
            className="group relative w-full inline-flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-black font-bold py-4 px-8 rounded-lg transition-all duration-300"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <span className="uppercase tracking-widest">Solicitar Acesso ao Protocolo</span>
            <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${hovered ? "translate-x-1" : ""}`} />
            
            {/* Efeito de Glow */}
            <div className="absolute inset-0 rounded-lg ring-2 ring-white/20 group-hover:ring-white/40 transition-all" />
        </Link>
        <p className="mt-4 text-xs text-neutral-600 uppercase tracking-wider">
          Apenas 3 Vagas para o Ciclo Atual
        </p>
      </div>

    </div>
  );
}

// Componente simples de Card
function Card({ icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <div className="p-6 rounded-xl border border-neutral-800 bg-neutral-900/30 hover:border-emerald-500/30 transition-colors">
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
      <p className="text-sm text-neutral-400 leading-relaxed">{desc}</p>
    </div>
  );
}