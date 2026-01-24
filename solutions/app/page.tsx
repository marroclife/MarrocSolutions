'use client';

import React, { useState, useEffect, ReactNode } from 'react';
import { Menu, X, Hexagon, ArrowRight, Globe, Zap, MessageSquare, Map, Database, Search, PenTool, Rocket, Clock, DollarSign, UserCheck, ShieldCheck, Quote, ArrowLeft, Terminal, Cpu, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { PricingSection } from "@/components/sections/PricingSection";

// --- LÓGICA ORÁCULO ---
const LOADING_STEPS = [
  "Estabelecendo conexão com o Guardião...",
  "Rastreando a assinatura digital...",
  "Decodificando a estrutura do HTML...",
  "Analisando Core Web Vitals...",
  "Compilando o diagnóstico final..."
];

// --- UI COMPONENTS ---
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'outline' | 'ghost';
  icon?: boolean;
  href?: string;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', icon = false, href, className = '', fullWidth = false, ...props }) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-lg px-6 py-3 text-base group relative overflow-hidden";
  const variants = {
    primary: "bg-white text-black hover:bg-neon-green hover:shadow-[0_0_20px_rgba(0,255,148,0.3)]",
    outline: "border border-slate-700 text-slate-200 hover:border-neon-green hover:text-neon-green",
    ghost: "text-slate-400 hover:text-white"
  };
  const widthClass = fullWidth ? "w-full" : "";
  const content = (<><span className="relative z-10 flex items-center gap-2">{children}{icon && <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}</span></>);
  if (href) return (<a href={href} className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}>{content}</a>);
  return (<button className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`} {...props}>{content}</button>);
};

const Section: React.FC<any> = ({ children, id, className = "", classNameInner = "" }) => {
  return (<section id={id} className={`py-20 px-6 md:px-12 lg:px-24 relative ${className}`}><div className={`max-w-7xl mx-auto ${classNameInner}`}>{children}</div></section>);
};

// --- SEÇÕES DA PÁGINA ---

const Navbar = () => (
  <nav className="fixed w-full z-50 bg-[#050505]/90 backdrop-blur-md border-b border-white/5 py-4">
    <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
      <a href="https://marroc.xyz" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group">
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        <span className="text-sm font-medium hidden sm:block">Voltar ao Hub</span>
      </a>
      <a href="/" className="text-white font-bold hover:text-neon-green transition-colors">Marroc Solutions</a>
      <div className="flex items-center gap-4">
        <a href="/portfolio" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">
          Portfolio
        </a>
        <a href="#contato" className="text-sm font-bold bg-white text-black px-4 py-2 rounded hover:bg-neon-green transition-colors">
          Agendar Diagnóstico
        </a>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-deep-emerald/30 via-[#050505] to-[#050505] z-0" />
    <div className="max-w-7xl mx-auto px-6 z-10 w-full">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neon-green/20 bg-neon-green/5 backdrop-blur-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
            <span className="text-xs font-medium text-neon-green tracking-wide uppercase">Alta Performance</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6">
            Arquitetura Digital de <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neon-green">Alta Performance para Negócios.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 mb-8 leading-relaxed max-w-2xl">
            Infraestrutura web robusta que escala suas vendas. Velocidade, SEO estrutural e automação inteligente para conversão.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button href="#planos" icon>Ver Planos</Button>
            <Button variant="outline" href="#oracle-section">Agendar Diagnóstico</Button>
          </div>
        </div>
        <motion.div 
          initial={{ opacity: 0, x: 20 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 flex items-center justify-center"
        >
          <div className="relative w-full max-w-md">
            <div className="absolute inset-0 bg-gradient-to-r from-neon-green/20 to-deep-emerald/20 blur-3xl rounded-full" />
            <img 
              src="/MSLogo.jpg" 
              alt="Marroc Solutions" 
              className="relative w-full h-auto drop-shadow-2xl hover:drop-shadow-[0_0_30px_rgba(0,255,148,0.4)] transition-all duration-300" 
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

const About = () => (
  <Section id="sobre" className="bg-[#0a0a0a] border-t border-white/5">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Infraestrutura que Vende.<br />
          <span className="text-slate-500">Tecnologia que Escala.</span>
        </h2>
      </div>
      <div>
        <p className="text-slate-400 text-lg leading-relaxed mb-4">
          A <strong>Marroc Solutions</strong> entrega infraestrutura web robusta focada em resultados mensuráveis.
        </p>
        <p className="text-slate-400 text-lg leading-relaxed">
          Velocidade, SEO estrutural e automação de processos para escalar vendas. Transformamos presença digital em receita para negócios que precisam crescer rápido.
        </p>
      </div>
    </div>
  </Section>
);

const Services = () => (
  <Section id="servicos">
    <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-[#171717]/60 backdrop-blur-xl border border-white/5 p-8 rounded-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none"><Globe className="w-64 h-64 text-white" /></div>
            <Globe className="w-12 h-12 text-neon-green mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Arquitetura Web de Alta Performance</h3>
            <p className="text-gray-400">Sites em Next.js otimizados. Carregam em menos de 2s. Escalam com sua demanda.</p>
        </div>
        <div className="flex flex-col gap-6">
            <div className="bg-[#171717]/60 p-6 rounded-2xl border border-white/5 hover:border-neon-green/30 transition-colors">
                <Zap className="w-8 h-8 text-purple-400 mb-2" />
                <h4 className="text-white font-bold">Automação de Processos</h4>
                <p className="text-xs text-gray-500 mt-1">Orquestração inteligente do fluxo de vendas.</p>
            </div>
            <div className="bg-[#171717]/60 p-6 rounded-2xl border border-white/5 hover:border-neon-green/30 transition-colors">
                <Search className="w-8 h-8 text-blue-400 mb-2" />
                <h4 className="text-white font-bold">SEO Estrutural</h4>
                <p className="text-xs text-gray-500 mt-1">Dominar a primeira página do Google.</p>
            </div>
        </div>
    </div>
  </Section>
);

const Process = () => (
  <Section id="processo" className="bg-[#171717]/50">
    <div className="text-center mb-16"><h2 className="text-3xl font-bold text-white">Como Funciona</h2></div>
    <div className="grid md:grid-cols-3 gap-8 relative">
      <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-700 to-transparent z-0" />
      {[
        { icon: <Search className="w-8 h-8" />, title: "1. Diagnóstico", desc: "Auditoria técnica completa." },
        { icon: <PenTool className="w-8 h-8" />, title: "2. Arquitetura", desc: "Design de conversão." },
        { icon: <Rocket className="w-8 h-8" />, title: "3. Deploy", desc: "Seu site performático no ar." }
      ].map((step, idx) => (
        <div key={idx} className="relative z-10 flex flex-col items-center text-center">
          <div className="w-24 h-24 rounded-full bg-[#0a0a0a] border border-slate-700 flex items-center justify-center mb-6 shadow-xl text-slate-200">{step.icon}</div>
          <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
          <p className="text-slate-400 max-w-xs">{step.desc}</p>
        </div>
      ))}
    </div>
  </Section>
);

const WhyChooseUs = () => (
  <Section className="border-t border-white/5">
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        { icon: <Clock className="w-6 h-6 text-indigo-400" />, title: "Implementação Rápida", desc: "72h para o ar." },
        { icon: <DollarSign className="w-6 h-6 text-green-400" />, title: "ROI Comprovado", desc: "Escalável." },
        { icon: <UserCheck className="w-6 h-6 text-blue-400" />, title: "Consultoria Estratégica", desc: "Com especialista." },
        { icon: <ShieldCheck className="w-6 h-6 text-slate-400" />, title: "Infraestrutura Segura", desc: "Enterprise-grade." }
      ].map((reason, idx) => (
        <div key={idx} className="flex flex-col gap-4 p-6 rounded-lg hover:bg-white/5 transition-colors">
          <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center">{reason.icon}</div>
          <div><h4 className="font-bold text-lg mb-1 text-white">{reason.title}</h4><p className="text-sm text-slate-400">{reason.desc}</p></div>
        </div>
      ))}
    </div>
  </Section>
);

const Testimonials = () => (
  <Section className="bg-gradient-to-b from-[#0a0a0a] to-deep-emerald/20">
    <div className="grid md:grid-cols-3 gap-8">
      {[
        { quote: "O site carrega em menos de 2s. As conversões subiram 45%.", author: "Ricardo S.", role: "E-commerce" },
        { quote: "A automação otimizou nosso atendimento. Ganhamos 20h semanais.", author: "Ana Beatriz", role: "Consultório" },
        { quote: "Aumentamos o tráfego orgânico em 3x em 4 meses.", author: "Felipe Mendes", role: "SaaS" }
      ].map((t, idx) => (
        <div key={idx} className="bg-[#171717]/60 backdrop-blur-xl border border-white/5 p-8 rounded-xl relative">
          <Quote className="absolute top-6 left-6 w-8 h-8 text-neon-green/20" />
          <p className="text-slate-300 italic mb-6 relative z-10 pt-4">"{t.quote}"</p>
          <div><p className="font-bold text-white">{t.author}</p><p className="text-xs text-slate-500 uppercase tracking-wider">{t.role}</p></div>
          <div className="mt-6">
            <a href="https://wa.me/5521992669980?text=Quero%20resultados%20como%20esses" className="text-xs font-bold text-neon-green hover:text-white transition-colors">
              Falar com Consultor →
            </a>
          </div>
        </div>
      ))}
    </div>
  </Section>
);

const OracleSection = () => {
  const [url, setUrl] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingMsgIndex, setLoadingMsgIndex] = useState(0);
  const [result, setResult] = useState<string | null>(null);
  
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (loading) {
        interval = setInterval(() => setLoadingMsgIndex((prev) => (prev + 1) % LOADING_STEPS.length), 2500);
    }
    return () => clearInterval(interval);
  }, [loading]);

  const handleAudit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url || !email) return;
    setLoading(true);
    try {
      const res = await fetch("/api/oracle", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url, email }),
      });
      const data = await res.json();
      setResult(data.result);
    } catch (err) { alert("Erro ao conectar."); } finally { setLoading(false); }
  };

  return (
    <div id="oracle-section" className="mt-20 container mx-auto px-6 max-w-6xl">
        <div className="rounded-3xl bg-gradient-to-r from-[#0a0a0a] to-[#111] border border-white/10 p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-neon-green/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <div className="flex items-center gap-2 text-neon-green mb-2"><Terminal size={16} /><span className="text-xs font-mono uppercase">Auditoria Técnica</span></div>
                    <h3 className="text-3xl font-serif text-white mb-4">Seu site está pronto para converter?</h3>
                    <p className="text-gray-400 mb-8">Auditoria técnica de performance e conversão. Identifique gargalos que custam vendas.</p>
                    <form onSubmit={handleAudit} className="space-y-4">
                        <input type="text" placeholder="Seu site (ex: marroc.xyz)" value={url} onChange={(e) => setUrl(e.target.value)} className="bg-black/50 border border-white/20 text-white px-4 py-3 rounded-lg w-full focus:outline-none focus:border-neon-green font-mono text-sm" required />
                        <div className="flex flex-col sm:flex-row gap-3">
                            <input type="email" placeholder="Seu e-mail" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-black/50 border border-white/20 text-white px-4 py-3 rounded-lg w-full focus:outline-none focus:border-neon-green font-mono text-sm" required />
                            <button type="submit" disabled={loading} className="bg-neon-green hover:bg-white hover:text-black text-black font-bold px-6 py-3 rounded-lg transition-colors whitespace-nowrap flex items-center justify-center gap-2 disabled:opacity-50">{loading ? <Loader2 className="animate-spin w-4 h-4" /> : <Zap className="w-4 h-4" />}{loading ? "Analisando..." : "Analisar"}</button>
                        </div>
                        {loading && <p className="text-xs text-neon-green font-mono animate-pulse mt-2">{`> ${LOADING_STEPS[loadingMsgIndex]}`}</p>}
                    </form>
                </div>
                <div className="hidden md:block font-mono text-xs text-green-500/50 bg-black/50 p-6 rounded-lg border border-white/5 leading-loose h-full min-h-[250px]"><p>{`> Initiating audit...`}</p><p>{`> Scanning performance metrics...`}</p><p>{`> Status: AWAITING_INPUT`}</p></div>
            </div>
        </div>
        {/* Modal Simplificado */}
        {result && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
                <div className="bg-[#0a0a0a] border border-neon-green/30 w-full max-w-2xl rounded-2xl shadow-2xl max-h-[85vh] flex flex-col">
                    <div className="p-6 border-b border-white/10 flex justify-between items-center"><h3 className="text-xl font-bold text-white">Relatório Técnico</h3><button onClick={() => setResult(null)}><X className="text-gray-400 hover:text-white" /></button></div>
                    <div className="p-6 overflow-y-auto custom-scrollbar prose prose-invert prose-green"><div className="whitespace-pre-line text-gray-300">{result}</div></div>
                    <div className="p-6 border-t border-white/10 bg-[#0f0f0f]"><a href={`https://wa.me/5521992669980?text=Ol%C3%A1%2C%20analisei%20meu%20site%20no%20Or%C3%A1culo.%20Quero%20falar%20com%20um%20consultor.`} target="_blank" className="block w-full text-center bg-neon-green text-black font-bold py-4 rounded-lg hover:bg-white transition-all">Falar com Consultor</a></div>
                </div>
            </div>
        )}
    </div>
  );
};

const PropostasPreview = () => (
  <Section className="mt-20 container mx-auto px-6 max-w-6xl py-20">
    <div className="rounded-3xl bg-gradient-to-r from-deep-emerald/10 via-[#050505] to-neon-green/5 border border-neon-green/20 p-8 md:p-16 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-neon-green/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neon-green/30 bg-neon-green/10 mb-6">
          <Hexagon className="w-3 h-3 text-neon-green" />
          <span className="text-xs font-medium text-neon-green tracking-wide uppercase">Propostas em Andamento</span>
        </div>
        <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-4 leading-tight">
          Já tem uma proposta em andamento?
        </h3>
        <p className="text-slate-400 text-lg leading-relaxed mb-8">
          Explore nossas propostas estruturadas e veja como estamos transformando ideias em experiências digitais reais.
        </p>
        <a 
          href="/propostas" 
          className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-neon-green text-black font-bold rounded-lg hover:bg-white transition-all duration-300 group shadow-lg hover:shadow-[0_0_30px_rgba(0,255,148,0.3)]"
        >
          <span>Explorar Propostas</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  </Section>
);

// --- RENDERIZAÇÃO FINAL DA PÁGINA ---
export default function MarrocSolutionsPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-slate-200 font-sans selection:bg-neon-green selection:text-black overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <PricingSection />  {/* Preços adicionados */}
        <WhyChooseUs />
        <Testimonials />
        <PropostasPreview />
        <OracleSection />   {/* Oráculo no final */}
        <div className="pb-20"></div>
      </main>
      <footer className="py-12 border-t border-white/10 bg-[#050505] text-center text-sm text-gray-600"><p>© 2025 Marroc Solutions. High Performance.</p></footer>
    </div>
  );
}