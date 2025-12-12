"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Terminal, Cpu, Zap, Lock, Activity, ShieldCheck } from "lucide-react";
import Link from "next/link";

// --- CONFIGURAÇÃO ---
const CONST_PHONE_NUMBER = "5511999999999"; // SUBSTITUA PELO SEU NÚMERO
const CONST_MESSAGE = "Solicito acesso ao Protocolo Marroc. Identidade: [Meu Nome/Empresa]";

export default function ProtocoloPage() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  // Intro Sequence
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 500); 
          return 100;
        }
        return prev + 4; 
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  const whatsappUrl = `https://wa.me/+5521992669980?text=${encodeURIComponent(CONST_MESSAGE)}`;

  // --- FUNÇÃO DE RASTREAMENTO (NOVO) ---
  const handleConversion = () => {
    // Tenta disparar o evento para o Facebook Pixel
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq('track', 'Contact'); // Ou 'Lead', se preferir
      console.log("Pixel Disparado: Contact");
    }
    // Tenta disparar para o Google Analytics (se tiver)
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {'send_to': 'SEU-ID-CONVERSAO'});
    }
  };

  return (
    <div className="min-h-screen w-full bg-neutral-950 text-white font-mono relative selection:bg-emerald-500 selection:text-black overflow-x-hidden">
      
      {/* --- LAYER 1: INTRO --- */}
      <div 
        className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-neutral-950 transition-opacity duration-1000 ease-in-out ${loading ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <div className="text-emerald-500 mb-4 animate-pulse">
            <Cpu className="w-16 h-16" />
        </div>
        <div className="w-64">
            <div className="flex justify-between text-xs text-neutral-500 mb-2 font-mono uppercase">
                <span>System Check</span>
                <span>{progress}%</span>
            </div>
            <div className="h-1 bg-neutral-900 rounded-full overflow-hidden border border-neutral-800">
                <div 
                    className="h-full bg-emerald-500 transition-all duration-100 ease-out shadow-[0_0_10px_#10b981]" 
                    style={{ width: `${progress}%` }} 
                />
            </div>
            <p className="mt-4 text-xs text-center text-neutral-600 font-mono">
                {progress < 50 ? "Validando credenciais..." : "Estabelecendo conexão segura..."}
            </p>
        </div>
      </div>

      {/* --- LAYER 2: MAIN CONTENT --- */}
      <main className={`flex flex-col items-center px-6 py-12 md:py-20 transition-all duration-1000 delay-500 ${loading ? "opacity-0 blur-sm scale-95" : "opacity-100 blur-0 scale-100"}`}>
        
        {/* Background Grid */}
        <div className="absolute inset-0 opacity-10 pointer-events-none z-0" 
             style={{ 
                 backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(to right, #10b981 1px, transparent 1px)', 
                 backgroundSize: '40px 40px',
                 maskImage: 'radial-gradient(circle at center, white, transparent 60%)'
             }} 
        />

        {/* Badge */}
        <div className="z-10 mb-8 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-900/50 bg-emerald-950/10 text-emerald-500 text-xs tracking-widest uppercase">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Acesso Liberado: Módulo B2B
        </div>

        {/* Headline */}
        <h1 className="z-10 text-4xl md:text-6xl font-bold tracking-tighter text-center mb-6 max-w-4xl">
          Não construímos Sites.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-600">
            Codificamos Egrégoras.
          </span>
        </h1>

        <p className="z-10 text-lg md:text-xl text-neutral-400 max-w-2xl text-center mb-12 leading-relaxed">
          O <span className="text-emerald-400">Tecnoxamanismo</span> é a fusão de Design Ritualístico e Automação via IA para líderes que buscam reverência no mercado.
        </p>

        {/* Pilares */}
        <div className="z-10 grid md:grid-cols-3 gap-4 w-full max-w-5xl mb-16">
          <Card 
            icon={<Terminal className="w-6 h-6 text-emerald-400" />}
            title="Código Limpo"
            desc="Next.js e arquitetura moderna. Performance pura para ranqueamento e velocidade."
          />
          <Card 
            icon={<Zap className="w-6 h-6 text-purple-400" />}
            title="Automação IA"
            desc="Agentes autônomos que atuam como guardiões do seu tempo e atendimento."
          />
          <Card 
            icon={<Lock className="w-6 h-6 text-cyan-400" />}
            title="Design Hermético"
            desc="Estética Dark/Cyberpunk que filtra curiosos e atrai clientes High-Ticket."
          />
        </div>

        {/* CTA FINAL COM TRACKING */}
        <div className="z-10 w-full max-w-2xl text-center">
            <div className="bg-neutral-900/50 border border-emerald-900/30 p-8 rounded-2xl backdrop-blur-sm relative overflow-hidden group">
                
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-50" />

                <h3 className="text-2xl font-bold text-white mb-2">Inicie a Transmissão</h3>
                <p className="text-neutral-400 mb-8 text-sm">
                  O sistema está aguardando seu comando via canal seguro.
                </p>
                
                <Link 
                    href={whatsappUrl}
                    target="_blank"
                    onClick={handleConversion} // <--- AQUI ESTÁ O SEGREDO
                    className="inline-flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-black font-bold py-4 px-8 rounded-lg transition-all duration-300 w-full md:w-auto hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]"
                >
                    <Activity className="w-5 h-5" />
                    <span className="uppercase tracking-widest">Iniciar Protocolo no WhatsApp</span>
                    <ArrowRight className="w-5 h-5" />
                </Link>

                <div className="mt-4 flex items-center justify-center gap-2 text-xs text-emerald-500/60 font-mono">
                    <ShieldCheck className="w-3 h-3" />
                    <span>Conexão Criptografada</span>
                </div>
            </div>
        </div>

      </main>
    </div>
  );
}

function Card({ icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <div className="p-6 rounded-xl border border-neutral-800 bg-neutral-900/40 hover:bg-neutral-900/80 hover:border-emerald-500/30 transition-all duration-300 text-left group">
      <div className="mb-4 p-3 bg-neutral-950 rounded-lg inline-block border border-neutral-800 group-hover:border-emerald-500/20">{icon}</div>
      <h3 className="text-lg font-bold text-white mb-2 font-mono">{title}</h3>
      <p className="text-sm text-neutral-400 leading-relaxed">{desc}</p>
    </div>
  );
}