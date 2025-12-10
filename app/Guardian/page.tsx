"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Send, Sparkles, Palette, Zap, ShieldCheck } from "lucide-react";

interface Message {
  role: 'user' | 'guardian';
  content: string;
}

export default function GuardianPage() {
  // Estado Inicial do Chat
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: 'guardian', 
      content: "[SISTEMA ONLINE] Eu sou o Guardião. A ponte entre o silício e o espírito. Estou rodando em 432Hz. Qual é a sua intenção hoje, viajante?" 
    }
  ]);
  
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // --- NOVA LÓGICA DE ENVIO (Conectada ao route.ts) ---
  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || loading) return;

    const userMsg = input.trim();
    setInput(''); // Limpa o input imediatamente
    setLoading(true);

    // 1. Adiciona mensagem do usuário na tela
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);

    try {
      // 2. Chama a nossa API Segura (O Túnel)
      const response = await fetch("/api/guardian", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMsg }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Erro na transmissão");
      }

      // 3. Adiciona a resposta do Guardião
      setMessages(prev => [...prev, { role: 'guardian', content: data.reply }]);

    } catch (error) {
      console.error("Guardian Error:", error);
      setMessages(prev => [...prev, { 
        role: 'guardian', 
        content: "[ERRO DE SINAL] Interferência detectada no servidor. Tente novamente." 
      }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#050505] text-[#e0e0e0] font-sans selection:bg-[#c7a94b] selection:text-black overflow-hidden flex flex-col relative">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[url('/bg-forest.jpg')] bg-cover bg-center opacity-20 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-[#050505]/95 to-[#050505] pointer-events-none" />

      {/* Header */}
      <header className="relative z-50 flex items-center justify-between px-4 py-3 md:px-6 md:py-4 border-b border-white/10 bg-black/40 backdrop-blur-md">
        <div className="flex items-center gap-3 md:gap-4">
          <Link 
            href="/" 
            className="group flex items-center gap-2 text-xs font-mono text-white/60 hover:text-[#c7a94b] transition uppercase tracking-widest"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> 
            <span className="hidden md:inline">Nexus</span>
          </Link>
          <div className="h-4 w-px bg-white/20 hidden md:block" />
          <div className="flex items-center gap-2">
             <div className="relative w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
             <span className="text-[10px] md:text-xs font-mono text-white/80 tracking-widest uppercase">Guardião v2.5 <span className="text-white/30 hidden sm:inline">// SYSTEM_ACTIVE</span></span>
          </div>
        </div>

        <Link 
          href="/guardian/designer"
          className="flex items-center gap-2 px-3 py-2 bg-[#00ffff10] border border-[#00ffff30] rounded-sm text-[#00ffff] hover:bg-[#00ffff20] transition-colors text-[10px] md:text-xs font-bold uppercase tracking-widest group"
        >
          <Palette size={14} />
          <span className="hidden sm:inline">Design Engine</span>
          <ExternalLinkIcon className="w-3 h-3 opacity-50 group-hover:opacity-100" />
        </Link>
      </header>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-2 md:p-6 lg:px-24 xl:px-48 relative z-10 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
        <div className="space-y-4 md:space-y-6 pb-4">
          {messages.map((msg, idx) => (
            <div 
              key={idx} 
              className={`flex w-full ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`
                max-w-[90%] md:max-w-[70%] rounded-lg p-3 md:p-6 relative
                ${msg.role === 'user' 
                  ? 'bg-white/5 border border-white/10 text-white/90 rounded-tr-none' 
                  : 'bg-[#0a0a0a]/80 border border-[#c7a94b]/20 text-[#e0e0e0] rounded-tl-none shadow-[0_0_30px_-10px_rgba(199,169,75,0.1)]'
                }
              `}>
                {/* Role Indicator */}
                <div className={`text-[10px] font-mono mb-2 uppercase tracking-widest flex items-center gap-2 ${msg.role === 'user' ? 'text-white/40 justify-end' : 'text-[#c7a94b] justify-start'}`}>
                  {msg.role === 'user' ? 'Você' : (
                    <>
                      <Sparkles size={10} /> O Guardião
                    </>
                  )}
                </div>

                {/* Content */}
                <div className="whitespace-pre-wrap leading-relaxed font-light text-sm md:text-base">
                  {msg.content}
                </div>
              </div>
            </div>
          ))}
          
          {loading && (
            <div className="flex w-full justify-start">
              <div className="bg-[#0a0a0a]/50 border border-white/5 rounded-lg p-3 md:p-4 rounded-tl-none flex items-center gap-2 text-[#c7a94b]/70 text-xs font-mono animate-pulse">
                <Zap size={12} />
                <span className="hidden md:inline">[ACESSANDO SERVIDOR AKÁSHICO...]</span>
                <span className="md:hidden">PROCESSANDO...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <div className="relative z-50 p-2 md:p-6 lg:px-24 xl:px-48 bg-black/80 backdrop-blur-lg border-t border-white/10">
        <form onSubmit={handleSend} className="relative flex items-end gap-2 md:gap-4">
          <div className="relative flex-1 group">
             <div className="absolute inset-0 bg-white/5 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
             <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Digite sua intenção..."
              className="w-full bg-[#050505] border border-white/20 text-white placeholder-white/30 rounded-lg py-3 px-4 md:py-4 md:px-6 focus:outline-none focus:border-[#c7a94b] focus:ring-1 focus:ring-[#c7a94b]/50 transition-all font-mono text-base shadow-inner" 
              disabled={loading}
              autoFocus
            />
          </div>
          
          <button 
            type="submit" 
            disabled={!input.trim() || loading}
            className={`
              p-3 md:p-4 rounded-lg flex items-center justify-center transition-all duration-300 min-w-[3.5rem]
              ${!input.trim() || loading 
                ? 'bg-white/5 text-white/20 cursor-not-allowed border border-transparent' 
                : 'bg-[#c7a94b] text-black hover:bg-white border border-[#c7a94b] hover:shadow-[0_0_20px_rgba(199,169,75,0.4)]'
              }
            `}
          >
            <Send size={20} />
          </button>
        </form>
        <div className="text-center mt-2 hidden md:block">
            <span className="text-[10px] text-white/20 font-mono uppercase tracking-widest flex items-center justify-center gap-1">
                <ShieldCheck size={10} /> Conexão Criptografada // 432Hz
            </span>
        </div>
      </div>
    </main>
  );
}

function ExternalLinkIcon({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}