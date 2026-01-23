"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Terminal, Cpu, Globe, ArrowRight, ShieldCheck, X, Loader2, Zap } from "lucide-react";

// Mensagens para a UX Ritualística de Carregamento
const LOADING_STEPS = [
  "Estabelecendo conexão com o Guardião...",
  "Rastreando a assinatura digital...",
  "Decodificando a estrutura do HTML...",
  "Lendo a aura de conversão...",
  "Compilando o diagnóstico final..."
];

export function SolutionsSection() {
  // Estados do Formulário
  const [url, setUrl] = useState("");
  const [email, setEmail] = useState("");
  
  // Estados de Interface
  const [loading, setLoading] = useState(false);
  const [loadingMsgIndex, setLoadingMsgIndex] = useState(0);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Efeito para rotacionar mensagens de loading
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (loading) {
      interval = setInterval(() => {
        setLoadingMsgIndex((prev) => (prev + 1) % LOADING_STEPS.length);
      }, 2500);
    } else {
      setLoadingMsgIndex(0);
    }
    return () => clearInterval(interval);
  }, [loading]);

  const handleAudit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url || !email) return;

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const res = await fetch("/api/oracle", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url, email }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Erro desconhecido na comunicação.");

      setResult(data.result);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative w-full py-24 bg-[#030303] text-white overflow-hidden border-t border-white/5">
      
      {/* Background Decorativo */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" 
           style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        
        {/* Cabeçalho */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 text-[10px] font-mono border border-cyan-500/30 text-cyan-400 rounded-full uppercase tracking-widest bg-cyan-950/10">
                Divisão B2B
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-serif leading-tight">
              Marroc <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Solutions</span>
            </h2>
            <p className="mt-4 text-gray-400 max-w-xl text-lg">
              O braço tecnológico do ecossistema. Transformamos a visão mística em 
              código de alta performance e sistemas de inteligência ética.
            </p>
          </div>

          <Link 
            href="https://solutions.marroc.xyz" 
            className="group flex items-center gap-2 text-white border-b border-white/30 pb-1 hover:border-cyan-400 hover:text-cyan-400 transition-all"
          >
            Conhecer a Divisão <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
          </Link>
        </div>

        {/* Grid de Serviços */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 hover:bg-white/[0.07] transition-all duration-300">
            <Globe className="text-cyan-400 mb-6" size={32} />
            <h3 className="text-xl font-bold mb-3 text-white">Arquitetura Digital</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Sites imersivos e aplicações web que não apenas informam, mas envolvem. 
              Foco total em performance (Core Web Vitals) e SEO semântico.
            </p>
          </div>

          <div className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-white/[0.07] transition-all duration-300">
            <Cpu className="text-blue-400 mb-6" size={32} />
            <h3 className="text-xl font-bold mb-3 text-white">Sistemas de IA Ética</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Implementação do <strong>Guardião™</strong>. Chatbots, automações e 
              análise de dados que respeitam a privacidade e alinham-se aos valores da marca.
            </p>
          </div>

          <div className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 hover:bg-white/[0.07] transition-all duration-300">
            <ShieldCheck className="text-purple-400 mb-6" size={32} />
            <h3 className="text-xl font-bold mb-3 text-white">Consultoria Visionária</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Diagnóstico técnico e vibracional. Ajudamos marcas a encontrar 
              o equilíbrio entre inovação tecnológica e propósito humano.
            </p>
          </div>
        </div>

        {/* --- O ORÁCULO DE PERFORMANCE (Feature Interativa) --- */}
        <div className="rounded-3xl bg-gradient-to-r from-[#0a0a0a] to-[#111] border border-white/10 p-8 md:p-12 relative overflow-hidden">
          
          {/* Efeitos de Fundo */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            
            {/* Coluna Esquerda: Formulário */}
            <div>
              <div className="flex items-center gap-2 text-cyan-400 mb-2">
                <Terminal size={16} />
                <span className="text-xs font-mono uppercase">System Check</span>
              </div>
              <h3 className="text-3xl font-serif text-white mb-4">
                Sua marca está pronta para o futuro?
              </h3>
              <p className="text-gray-400 mb-8">
                O Oráculo analisa a "alma digital" do seu site em busca de falhas de performance 
                e oportunidades de inovação com IA.
              </p>
              
              <form onSubmit={handleAudit} className="space-y-3">
                <input 
                  type="text" 
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="Seu site (ex: marroc.xyz)" 
                  className="bg-black/50 border border-white/20 text-white px-4 py-3 rounded-lg w-full focus:outline-none focus:border-cyan-500 font-mono text-sm"
                  required
                />
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Seu e-mail corporativo" 
                  className="bg-black/50 border border-white/20 text-white px-4 py-3 rounded-lg w-full focus:outline-none focus:border-cyan-500 font-mono text-sm"
                  required
                />
                
                <button 
                  type="submit" 
                  disabled={loading}
                  className="bg-cyan-600 hover:bg-cyan-500 text-white font-bold px-6 py-3 rounded-lg transition-all w-full md:w-auto flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? <Loader2 className="animate-spin w-4 h-4" /> : <Zap className="w-4 h-4" />}
                  {loading ? "Processando..." : "Invocar Oráculo"}
                </button>

                {loading && (
                    <p className="text-xs text-cyan-400 font-mono animate-pulse mt-2">
                        {`> ${LOADING_STEPS[loadingMsgIndex]}`}
                    </p>
                )}

                {error && (
                    <p className="text-xs text-red-400 font-mono mt-2 bg-red-900/20 p-2 rounded">
                        {`> ERRO: ${error}`}
                    </p>
                )}
              </form>
              
              <p className="text-[10px] text-gray-500 mt-4">* Diagnóstico gratuito preliminar via GPT-4o.</p>
            </div>

            {/* Coluna Direita: Decorativo Tech */}
            <div className="hidden md:block font-mono text-xs text-green-500/50 bg-black/50 p-6 rounded-lg border border-white/5 leading-loose select-none h-full min-h-[250px] relative overflow-hidden">
                {/* Linhas de Código Fake */}
                <p>{`> Initiating protocol Marroc_v1...`}</p>
                <p>{`> Connecting to Neural Node...`}</p>
                <p>{`> Target: ${url || "undefined"}`}</p>
                <p>{`> User: ${email || "undefined"}`}</p>
                <p className="text-white/20">--------------------------------</p>
                {loading ? (
                    <div className="text-cyan-400 animate-pulse">
                        <p>{`> READING_SOURCE_CODE...`}</p>
                        <p>{`> DETECTING_PATTERNS...`}</p>
                    </div>
                ) : (
                    <div className="text-gray-600">
                        <p>{`> Status: AWAITING_INPUT`}</p>
                        <p>{`> ...`}</p>
                    </div>
                )}
            </div>
          </div>
        </div>

      </div>

      {/* --- MODAL DE RESULTADO --- */}
      {result && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-300">
          <div className="bg-[#0a0a0a] border border-cyan-500/30 w-full max-w-2xl rounded-2xl shadow-[0_0_50px_-10px_rgba(6,182,212,0.3)] max-h-[85vh] flex flex-col relative overflow-hidden">
            
            {/* Header Modal */}
            <div className="p-6 border-b border-white/10 flex justify-between items-center bg-[#0a0a0a] z-10">
              <div className="flex items-center gap-2">
                 <Terminal className="text-cyan-400 w-5 h-5" />
                 <h3 className="text-xl font-bold text-white">Diagnóstico do Oráculo</h3>
              </div>
              <button 
                onClick={() => setResult(null)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="p-6 overflow-y-auto custom-scrollbar">
              <div className="prose prose-invert prose-cyan max-w-none">
                <div className="whitespace-pre-line text-gray-300 leading-relaxed font-light text-sm md:text-base">
                  {result}
                </div>
              </div>
            </div>

            {/* Footer / CTA */}
            <div className="p-6 border-t border-white/10 bg-[#0f0f0f] z-10">
              <p className="text-sm text-gray-400 mb-4 text-center">
                Este foi apenas um vislumbre superficial. Para reescrever sua arquitetura digital:
              </p>
              <a 
                href={`https://wa.me/5521992669980?text=Ol%C3%A1%2C%20o%20Or%C3%A1culo%20analisou%20meu%20site%20(${url})%20e%20quero%20aprofundar.`}
                target="_blank"
                rel="noreferrer"
                className="block w-full text-center bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-4 rounded-lg transition-all shadow-lg shadow-cyan-900/20"
              >
                Solicitar Intervenção Técnica (WhatsApp)
              </a>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}