"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Cpu, Terminal, ShieldCheck, Activity } from "lucide-react";
import Link from "next/link";

// --- CONFIGURAÇÃO ---
const CONST_PHONE_NUMBER = "5511999999999"; // SEU NÚMERO AQUI (DDD + NÚMERO)
const CONST_MESSAGE = "Solicito acesso ao Protocolo Marroc. Identidade: [Meu Nome/Empresa]";

export default function ProtocoloPage() {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("INICIANDO HANDSHAKE...");
  const [isReady, setIsReady] = useState(false);

  // Simulação do "Carregamento Matrix"
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsReady(true);
          setStatusText("CONEXÃO ESTABELECIDA.");
          return 100;
        }
        
        // Efeitos de texto durante o carregamento
        if (prev === 20) setStatusText("VERIFICANDO INTEGRIDADE DE DADOS...");
        if (prev === 50) setStatusText("CRIPTOGRAFANDO CANAL...");
        if (prev === 80) setStatusText("SINCRONIZANDO COM A EGRÉGORA...");
        
        return prev + 2; // Velocidade do carregamento
      });
    }, 40); // 40ms * 50 ticks = ~2 segundos

    return () => clearInterval(timer);
  }, []);

  // Função para abrir o WhatsApp
  const whatsappUrl = `https://wa.me/+5521992669980?text=${encodeURIComponent(CONST_MESSAGE)}`;

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-6 text-center font-mono relative overflow-hidden">
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-neutral-950 z-0" />
      <div className="absolute inset-0 opacity-10 pointer-events-none z-0" 
             style={{ 
                 backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(to right, #10b981 1px, transparent 1px)', 
                 backgroundSize: '40px 40px',
                 maskImage: 'radial-gradient(circle at center, white, transparent 80%)'
             }} 
      />

      <div className="z-10 max-w-2xl w-full flex flex-col items-center">
        
        {/* --- O NÚCLEO DIGITAL (Animação) --- */}
        <div className="relative mb-12">
            {/* Círculos Pulsantes */}
            <div className={`absolute inset-0 bg-emerald-500/20 rounded-full blur-3xl transition-all duration-1000 ${isReady ? "scale-150 opacity-30" : "scale-100 opacity-10"}`} />
            
            <div className="relative bg-neutral-900/80 p-8 rounded-full border border-emerald-500/30 backdrop-blur-md shadow-[0_0_50px_rgba(16,185,129,0.15)]">
                {isReady ? (
                    <ShieldCheck className="w-16 h-16 text-emerald-400 animate-pulse" />
                ) : (
                    <Cpu className="w-16 h-16 text-emerald-600 animate-spin-slow" />
                )}
            </div>
        </div>

        {/* --- TEXTOS DE STATUS --- */}
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tighter">
          PROTOCOL: <span className="text-emerald-500">MARROC</span>
        </h1>

        <div className="w-full max-w-md bg-neutral-900 border border-neutral-800 rounded p-4 mb-8 font-mono text-xs md:text-sm text-left shadow-2xl">
            <div className="flex gap-2 mb-2 border-b border-neutral-800 pb-2">
                <Terminal className="w-4 h-4 text-neutral-500" />
                <span className="text-neutral-400">System Log</span>
            </div>
            <div className="space-y-1 h-20 overflow-hidden flex flex-col justify-end">
                <p className="text-neutral-600">Initializing core systems...</p>
                <p className="text-neutral-500">Loading assets...</p>
                <p className="text-emerald-500/80 animate-pulse"> {statusText}</p>
            </div>
            
            {/* BARRA DE PROGRESSO */}
            <div className="w-full h-1 bg-neutral-800 mt-4 rounded-full overflow-hidden">
                <div 
                    className="h-full bg-emerald-500 transition-all duration-100 ease-out"
                    style={{ width: `${progress}%` }}
                />
            </div>
        </div>

        {/* --- O BOTÃO DE AÇÃO (Só aparece no final) --- */}
        <div className={`transition-all duration-700 transform ${isReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}`}>
            <Link 
                href={whatsappUrl}
                target="_blank"
                // IMPORTANTE: Adicione aqui seu tracking ID se necessário
                className="group relative inline-flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-black font-bold py-5 px-10 rounded-lg transition-all duration-300 shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_50px_rgba(16,185,129,0.6)]"
            >
                <Activity className="w-5 h-5 animate-bounce" />
                <span className="uppercase tracking-widest text-lg">INICIAR TRANSMISSÃO</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <p className="mt-6 text-xs text-neutral-500 max-w-sm mx-auto">
                Ao clicar, você será redirecionado para o canal criptografado do WhatsApp. O sistema aguarda seu comando.
            </p>
        </div>

      </div>
    </div>
  );
}