import React, { useState, useEffect } from "react";
import { 
  ShieldAlert, 
  KeyRound, 
  Layers, 
  Radio, 
  ArrowRight, 
  ArrowDown,
  Sparkles, 
  Cpu, 
  Flame, 
  Check, 
  LogOut, 
  Clock, 
  ExternalLink,
  Lock,
  Compass,
  ArrowRightLeft
} from "lucide-react";
import CoreEcosystemCanvas from "./components/CoreEcosystemCanvas";
import LeadDashboard, { Lead } from "./components/LeadDashboard";

const INITIAL_MOCK_LEADS: Lead[] = [
  {
    id: "lead_1",
    name: "Arthur Ribas",
    email: "arthurr@gmail.com",
    utmSource: "Meta / Bio",
    timestamp: "11/06/2026, 09:12:35"
  },
  {
    id: "lead_2",
    name: "Letícia Souza",
    email: "leticia.tech@gmail.com",
    utmSource: "TikTok / Video viral",
    timestamp: "11/06/2026, 09:14:10"
  },
  {
    id: "lead_3",
    name: "Gabriel Medeiros",
    email: "gm_soberano@outlook.com",
    utmSource: "Youtube / Descrição",
    timestamp: "11/06/2026, 09:18:22"
  }
];

export default function App() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [formData, setFormData] = useState({ name: "", email: "", source: "Meta / Bio" });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeTabSolution, setActiveTabSolution] = useState<number>(0);
  const [systemTime, setSystemTime] = useState("");

  // Initialize and load leads
  useEffect(() => {
    const savedLeads = localStorage.getItem("soberania_leads");
    if (savedLeads) {
      try {
        setLeads(JSON.parse(savedLeads));
      } catch (e) {
        setLeads(INITIAL_MOCK_LEADS);
      }
    } else {
      setLeads(INITIAL_MOCK_LEADS);
      localStorage.setItem("soberania_leads", JSON.stringify(INITIAL_MOCK_LEADS));
    }

    // Dynamic system clock
    const updateClock = () => {
      const now = new Date();
      setSystemTime(now.toLocaleString("pt-BR", { 
        timeZone: "America/Sao_Paulo", 
        hour: "2-digit", 
        minute: "2-digit", 
        second: "2-digit" 
      }));
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const saveLeadsToStateAndStorage = (updatedLeads: Lead[]) => {
    setLeads(updatedLeads);
    localStorage.setItem("soberania_leads", JSON.stringify(updatedLeads));
  };

  const handleFormInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    const newLead: Lead = {
      id: "lead_" + Math.random().toString(36).substring(2, 9),
      name: formData.name,
      email: formData.email,
      utmSource: formData.source,
      timestamp: new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })
    };

    const updated = [newLead, ...leads];
    saveLeadsToStateAndStorage(updated);
    setFormSubmitted(true);
    setFormData({ name: "", email: "", source: "Meta / Bio" });

    // Auto reset submission screen after 4 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 4500);
  };

  const clearLeads = () => {
    saveLeadsToStateAndStorage([]);
  };

  const addMockLead = () => {
    const mockNames = [
      "Mariana Fontes", "Rodrigo Albuquerque", "Clara Peixoto", "Bruno Sales", "Vivian K.", "Eduardo Melo"
    ];
    const mockEmails = [
      "mari.fontes@uol.com.br", "rodrigo.tech@outlook.com", "clara.peixoto@design.io", "bruno_sales@gmail.com", "viv@soberano.com", "edu.melo@live.com"
    ];
    const mockSources = [
      "Meta / Bio", "TikTok / Video viral", "Youtube / Descrição", "Soberano / Direct"
    ];

    const randomIdx = Math.floor(Math.random() * mockNames.length);
    const randomSourceIdx = Math.floor(Math.random() * mockSources.length);

    const newMock: Lead = {
      id: "mock_" + Math.random().toString(36).substring(2, 9),
      name: mockNames[randomIdx],
      email: mockEmails[randomIdx],
      utmSource: mockSources[randomSourceIdx],
      timestamp: new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })
    };

    const updated = [newMock, ...leads];
    saveLeadsToStateAndStorage(updated);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Diagram of Sovereignty Steps
  const solutionSteps = [
    {
      title: "1. Entrada",
      short: "Instagram/TikTok",
      description: "A atenção volátil das massas é capturada através de conteúdos verticais altamente magnéticos nas redes mainstream.",
      metric: "Atração Máxima",
      subtext: "Você joga a isca no quintal deles, mas não tenta construir sua casa lá.",
      badge: "ALUGADO"
    },
    {
      title: "2. Filtro",
      short: "Lógica de Atração",
      description: "Purificação imediata de curiosos. O algoritmo passa a ser um mero meio de triagem para leads qualificados de alto valor.",
      metric: "Conversão Inicial",
      subtext: "Substituição do 'arrasta pra cima' por uma proposta inestimável de valor único.",
      badge: "FILTRAGEM"
    },
    {
      title: "3. Soberania",
      short: "Site/Domínio Próprio",
      description: "O tráfego aterrissa no seu castelo. Pixels próprios ativados, sem anúncios de concorrentes e controle total sobre a atenção gerada.",
      metric: "Segurança de Dados",
      subtext: "A audiência passa de seguidora algorítmica para contato proprietário real.",
      badge: "PROPRIEDADE"
    },
    {
      title: "4. Conversão",
      short: "Experiência de Valor",
      description: "Nutrição e monetização direta. Sem intermediários, sem taxas injustas do ecossistema e com profunda ancoragem de marca.",
      metric: "Ativo Permanente",
      subtext: "O lead agora faz parte de um ecossistema indestrutível e escalável.",
      badge: "SOBERANIA"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-zinc-100 selection:bg-[#00ff41] selection:text-black font-sans relative overflow-x-hidden">
      
      {/* Visual background atmospheric effects */}
      <div className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[160px] pointer-events-none -translate-y-1/2" />
      <div className="fixed bottom-0 right-1/4 w-[600px] h-[600px] bg-emerald-900/10 rounded-full blur-[180px] pointer-events-none translate-y-1/3" />
      
      {/* TOP HEADER MENU */}
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-zinc-900/80 px-4 lg:px-8 py-3.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-purple-500 to-[#00ff41] animate-pulse" />
            <span className="font-display font-extrabold text-sm md:text-base tracking-widest text-white uppercase">
              SABIÊNCIA DIGITAL <span className="font-light text-zinc-500">// SOBERANIA</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-6 text-xs font-mono text-zinc-400">
            <button id="nav-armadilha-btn" onClick={() => scrollToSection("armadilha")} className="hover:text-white transition">01. O PROBLEMA</button>
            <button id="nav-solucao-btn" onClick={() => scrollToSection("solucao")} className="hover:text-white transition">02. A ENGENHARIA</button>
            <button id="nav-ponte-btn" onClick={() => scrollToSection("ponte")} className="hover:text-white transition">03. A PONTE</button>
            <button id="nav-foco-btn" onClick={() => scrollToSection("conversão")} className="hover:text-[#00ff41] transition">04. CONVERSÃO</button>
          </div>

          <div className="flex items-center gap-4">
            {/* System Clock */}
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 bg-zinc-950/80 border border-zinc-800 rounded-lg text-[10px] font-mono text-zinc-400">
              <Clock className="w-3 h-3 text-[#00ff41]" />
              <span>SP: {systemTime || "Carregando..."}</span>
            </div>

            {/* CTA Shortcut to leads panel */}
            <button
              id="header-shortcut-leads-btn"
              onClick={() => scrollToSection("dashboard")}
              className="px-3.5 py-1.5 text-xs font-mono font-bold bg-zinc-900 hover:bg-[#00ff41] text-[#00ff41] hover:text-black border border-zinc-800 hover:border-[#00ff41] rounded-lg transition duration-300 flex items-center gap-1.5 shadow-[0_0_15px_rgba(0,255,65,0.05)]"
            >
              👑 Cockpit
            </button>
          </div>

        </div>
      </header>

      {/* 1. HERO SECTION (Saia Do Terreno Alugado) */}
      <section id="hero" className="relative min-h-[92vh] flex items-center py-16 md:py-24 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero left text content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/50 border border-purple-500/30 text-xs font-mono text-purple-300">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00ff41] animate-ping" />
              CONSTRUÇÃO DE AUTORIDADE INDESTRUTÍVEL
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-black leading-[1.05] tracking-tight text-white uppercase">
              SAIA DO TERRENO <br />
              <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-[#00ff41] bg-clip-text text-transparent glow-text-purple">
                ALUGADO.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-zinc-300 font-sans tracking-wide leading-relaxed max-w-xl">
              A diferença entre ter seguidores e ter um ecossistema. Você{" "}
              <strong className="text-white font-semibold">não é dono</strong> do seu negócio se você só existe no Instagram.
            </p>

            {/* Glowing separator line */}
            <div className="w-24 h-1 bg-gradient-to-r from-[#a020f0] to-[#00ff41]" />

            {/* Interactive Call to Action */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-2">
              <button
                id="hero-sintonizar-btn"
                onClick={() => scrollToSection("conversão")}
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-display font-extrabold tracking-wider rounded-xl transition duration-300 flex items-center justify-center gap-2.5 shadow-lg shadow-purple-950/50 hover:shadow-purple-700/30 overflow-hidden transform hover:-translate-y-0.5 active:translate-y-0"
              >
                {/* Visual glare shine on hover */}
                <div className="absolute inset-0 w-1/2 h-full bg-white/10 skew-x-12 -translate-x-full group-hover:animate-pulse" />
                SINTONIZAR COM A SOBERANIA
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition duration-200" />
              </button>

              <button
                id="hero-ver-prova-btn"
                onClick={() => scrollToSection("armadilha")}
                className="px-6 py-4 bg-zinc-950 hover:bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white font-mono text-xs rounded-xl transition duration-300 flex items-center justify-center gap-2"
              >
                Ver Prova Científica <ArrowDown className="w-4 h-4 text-[#00ff41] animate-bounce" />
              </button>
            </div>

            {/* Fast Stats Row */}
            <div className="grid grid-cols-3 gap-6 pt-6 w-full max-w-lg border-t border-zinc-900">
              <div>
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">CONTROLE</span>
                <span className="text-lg font-bold text-white">100% Livre</span>
              </div>
              <div>
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">AUDIÊNCIA</span>
                <span className="text-lg font-bold text-white">Proprietária</span>
              </div>
              <div>
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">CONVERSÃO</span>
                <span className="text-lg font-bold text-emerald-400">Sem Pedágio</span>
              </div>
            </div>

          </div>

          {/* Hero right visualization graphics */}
          <div className="lg:col-span-5 flex flex-col justify-center relative py-6">
            <div className="absolute inset-0 bg-radial-gradient(circle_at_center,rgba(0,255,65,0.05)_0%,transparent_60%) pointer-events-none" />
            <CoreEcosystemCanvas />
            <div className="text-center mt-3">
              <span className="text-[10px] font-mono text-zinc-500 hover:text-zinc-300 cursor-pointer" onClick={() => scrollToSection("solucao")}>
                ▲ Clique nos nós acima para inspecionar os canais alugados
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* 2. A ARMADILHA (O Risco da Dependência Algorítmica) */}
      <section id="armadilha" className="py-24 border-b border-zinc-900 bg-neutral-950/25 relative">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">01. O PROBLEMA DE DEPENDER DE REDES</span>
            <h2 className="text-3xl md:text-5xl font-display font-black text-white uppercase tracking-tight">
              O Risco da Dependência Algorítmica.
            </h2>
            <div className="w-16 h-0.5 bg-[#00ff41] mx-auto" />
          </div>

          {/* Comparative grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto items-stretch">
            
            {/* Lado A: Rede Social (Alugado) */}
            <div className="bg-black border border-zinc-900 rounded-2xl p-8 relative flex flex-col justify-between transition hover:border-purple-900/60 group">
              <div className="absolute top-4 right-4 text-purple-900/30 font-mono text-7xl font-bold select-none pointer-events-none group-hover:text-purple-900/50 transition">
                BIO
              </div>
              
              <div className="space-y-6">
                <div className="w-10 h-10 rounded-xl bg-purple-950/50 border border-purple-800/40 flex items-center justify-center">
                  <ShieldAlert className="w-5 h-5 text-purple-400" />
                </div>
                
                <div className="space-y-2">
                  <span className="text-xs font-mono text-purple-500 font-bold uppercase tracking-wider">[LADO A: REDE SOCIAL]</span>
                  <h3 className="text-2xl font-display font-bold text-white">Regime de Aluguel Algorítmico</h3>
                </div>

                <ul className="space-y-3.5 text-sm text-zinc-400">
                  <li className="flex items-start gap-2.5">
                    <span className="text-purple-500 font-bold mt-0.5">✕</span>
                    <span><strong className="text-zinc-200">Mudanças de API súbitas:</strong> Formas de entrega e integrações quebradas sem aviso prévio.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-purple-500 font-bold mt-0.5">✕</span>
                    <span><strong className="text-zinc-200">Perda de alcance cruel:</strong> O Instagram decide reduzir seu alcance de 15% para 2% para forcá-lo a pagar anúncios.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-purple-500 font-bold mt-0.5">✕</span>
                    <span><strong className="text-zinc-200">Regras impostas por terceiros:</strong> Banimentos fantasma (shadowban) baseados em algoritmos cegos de moderação.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-zinc-900 text-xs font-mono text-zinc-500">
                Punição constante sobre quem constrói patrimônio em terra de big tech.
              </div>
            </div>

            {/* Lado B: Soberania (Propriedade) */}
            <div className="bg-black border border-emerald-500/20 rounded-2xl p-8 relative flex flex-col justify-between transition hover:border-[#00ff41]/50 group glow-green">
              <div className="absolute top-4 right-4 text-[#00ff41]/5 font-mono text-7xl font-bold select-none pointer-events-none group-hover:text-[#00ff41]/10 transition">
                LIVE
              </div>
              
              <div className="space-y-6">
                <div className="w-10 h-10 rounded-xl bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center">
                  <KeyRound className="w-5 h-5 text-[#00ff41]" />
                </div>
                
                <div className="space-y-2">
                  <span className="text-xs font-mono text-[#00ff41] font-bold uppercase tracking-wider">[LADO B: SOBERANIA SÓLIDA]</span>
                  <h3 className="text-2xl font-display font-bold text-white">Castelo Tecnológico Próprio</h3>
                </div>

                <ul className="space-y-3.5 text-sm text-zinc-400">
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#00ff41] font-bold mt-0.5">✓</span>
                    <span><strong className="text-zinc-200">Domínio próprio indestrutível:</strong> Você define o endereço permanente e o tom da sua marca digital.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#00ff41] font-bold mt-0.5">✓</span>
                    <span><strong className="text-zinc-200">Controle irrestrito de dados:</strong> Seus próprios pixels, analytics nativo gratuito e cookies de ponta.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#00ff41] font-bold mt-0.5">✓</span>
                    <span><strong className="text-zinc-200">Experiência refinada sem ruído:</strong> Layouts desenhados exclusivamente para imergir e converter seu lead.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-zinc-900 text-xs font-mono text-[#00ff41] glow-text-green font-bold">
                Conectado diretamente ao seu próprio painel proprietário seguro.
              </div>
            </div>

          </div>

          {/* Outro impact statement phrase */}
          <div className="mt-16 text-center max-w-2xl mx-auto">
            <p className="text-lg md:text-2xl font-display font-bold text-white leading-relaxed italic block border-x border-[#00ff41]/30 py-4 px-6 rounded-2xl bg-zinc-950/40">
              "Sua autoridade não pode ser refém de um código que você não controla."
            </p>
          </div>

        </div>
      </section>

      {/* 3. A ARQUITETURA DE SABIÊNCIA (A Engenharia do Ecossistema) */}
      <section id="solucao" className="py-24 border-b border-zinc-900 relative">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-mono text-purple-400 uppercase tracking-widest">02. INTELIGÊNCIA SISTÊMICA</span>
            <h2 className="text-3xl md:text-5xl font-display font-black text-white uppercase tracking-tight">
              A Engenharia do Ecossistema.
            </h2>
            <p className="text-sm text-zinc-400 font-mono">
              Interaja com o diagrama de fluxo abaixo para entender a arquitetura de conversão direta.
            </p>
            <div className="w-16 h-0.5 bg-purple-500 mx-auto" />
          </div>

          {/* Interactive Flow diagram map */}
          <div className="max-w-4xl mx-auto bg-zinc-950/80 border border-zinc-800 rounded-3xl p-6 md:p-8 space-y-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl pointer-events-none" />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative">
              {solutionSteps.map((step, idx) => (
                <button
                  id={`solution-step-${idx}`}
                  key={idx}
                  onClick={() => setActiveTabSolution(idx)}
                  className={`text-left p-4 rounded-xl border transition-all duration-300 relative group flex flex-col justify-between h-36 ${
                    activeTabSolution === idx 
                      ? "bg-black border-purple-500 scale-105 shadow-[0_0_15px_rgba(160,32,240,0.15)]" 
                      : "bg-zinc-950 border-zinc-850 hover:border-zinc-700"
                  }`}
                >
                  <div>
                    <span className={`text-[9px] font-mono font-bold tracking-widest px-2 py-0.5 rounded uppercase block w-max ${
                      activeTabSolution === idx ? "bg-purple-950 text-purple-400" : "bg-zinc-900 text-zinc-500"
                    }`}>
                      {step.badge}
                    </span>
                    <h4 className="text-sm font-display font-bold text-white mt-3 group-hover:text-purple-400 transition">
                      {step.title}
                    </h4>
                    <p className="text-[11.5px] text-zinc-400 mt-1 font-mono tracking-tight leading-4">
                      {step.short}
                    </p>
                  </div>
                  
                  {activeTabSolution === idx && (
                    <span className="absolute bottom-2 right-2 w-2 h-2 rounded-full bg-[#00ff41] animate-pulse" />
                  )}
                </button>
              ))}
            </div>

            {/* Interconnected flux indicator nodes (Horizontal on large screens, vertical on mobile) */}
            <div className="hidden md:flex items-center justify-around px-8 py-2 text-zinc-600 font-mono text-xs">
              <span className="flex items-center gap-1">Instagram/TikTok <ArrowRight className="w-3.5 h-3.5 text-purple-500" /></span>
              <span className="flex items-center gap-1">Lógica Sabiência <ArrowRight className="w-3.5 h-3.5 text-[#00ff41]" /></span>
              <span className="flex items-center gap-1">Domínio Seguro <ArrowRight className="w-3.5 h-3.5 text-purple-500" /></span>
              <span className="text-[#00ff41] font-bold">Conversão Blindada</span>
            </div>

            {/* Active Details Box */}
            <div className="bg-black border border-zinc-900 rounded-2xl p-6 min-h-[140px] flex flex-col justify-between space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
                
                <div className="md:col-span-8 space-y-2">
                  <span className="text-[10px] uppercase tracking-widest font-mono text-zinc-500 block">Especificidade Técnica</span>
                  <p className="text-base text-zinc-200 leading-relaxed font-sans">
                    {solutionSteps[activeTabSolution].description}
                  </p>
                </div>

                <div className="md:col-span-4 bg-zinc-950 p-4 border border-zinc-900 rounded-xl space-y-1">
                  <span className="text-[9px] font-mono text-zinc-500 block uppercase">Estágio de Métrica</span>
                  <span className="text-sm font-semibold text-[#00ff41] font-mono block">
                    {solutionSteps[activeTabSolution].metric}
                  </span>
                  <span className="text-[11px] text-zinc-400 block pt-0.5 leading-snug">
                    {solutionSteps[activeTabSolution].subtext}
                  </span>
                </div>

              </div>

              <div className="border-t border-zinc-900 pt-3 text-[11px] font-mono text-zinc-500 flex justify-between">
                <span>Engenharia de Automação de Audiência Ativa</span>
                <span className="text-zinc-400">Passo {activeTabSolution + 1} de 4</span>
              </div>
            </div>

          </div>

          <div className="mt-12 text-center max-w-3xl mx-auto space-y-3">
            <p className="text-md md:text-lg text-zinc-300 font-sans leading-relaxed">
              "O digital não é sobre posts, é sobre fluxos. A <span className="text-[#00ff41] font-bold">Sabiência Digital</span> consiste em transformar a atenção volátil das redes em um ativo permanente no seu próprio domínio."
            </p>
          </div>

        </div>
      </section>

      {/* 4. A PONTE: ARTE <-> TECH (A Prova de Essência / Reel Division) */}
      <section id="ponte" className="border-b border-zinc-900 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px] items-stretch">
          
          {/* Lado Roxo (Arte) */}
          <div className="bg-black border-b lg:border-b-0 lg:border-r border-zinc-900 p-8 md:p-16 flex flex-col justify-between relative group overflow-hidden">
            
            {/* Ambient Purple Grid background lines */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(160,32,240,0.08)_0%,transparent_50%)] pointer-events-none" />
            <div className="absolute bottom-4 right-4 text-purple-950/20 font-mono text-[140px] font-extrabold select-none pointer-events-none uppercase">
              ALMA
            </div>

            <div className="space-y-2">
              <span className="text-[#a020f0] font-mono text-xs font-bold tracking-widest uppercase">
                // SINTONIA INFINITA
              </span>
              <div className="w-12 h-1 bg-purple-500" />
            </div>

            <div className="my-12 md:my-16 space-y-6 max-w-lg z-10">
              <h3 className="text-3xl md:text-5xl font-display font-black text-white uppercase tracking-tight leading-none">
                A FREQUÊNCIA <br />
                DA ALMA.
              </h3>
              
              <p className="text-base md:text-lg text-zinc-300 leading-relaxed font-sans font-light">
                "A música, a espiritualidade e a arte como veículo de conexão humana."
              </p>

              {/* Graphical Soundwaves illustration */}
              <div className="flex items-end gap-1 h-8 pt-4">
                {[4, 8, 2, 6, 12, 10, 3, 5, 14, 8, 4, 11, 7, 2, 5, 9, 3, 7].map((h, i) => (
                  <div 
                    key={i} 
                    className="w-1 bg-[#a020f0]/40 rounded-full animate-pulse" 
                    style={{ 
                      height: `${h * 6}%`, 
                      animationDelay: `${i * 120}ms`,
                      animationDuration: '1.2s'
                    }} 
                  />
                ))}
              </div>
            </div>

            <span className="text-xs font-mono text-purple-500 font-bold tracking-widest uppercase">
              ARTE / SENTIMENTO / CONECTIVIDADE
            </span>
          </div>

          {/* Lado Verde (Tech) */}
          <div className="bg-black p-8 md:p-16 flex flex-col justify-between relative group overflow-hidden">
            
            {/* Ambient Green Grid background lines */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,rgba(0,255,65,0.08)_0%,transparent_50%)] pointer-events-none" />
            <div className="absolute bottom-4 right-4 text-[#00ff41]/5 font-mono text-[140px] font-extrabold select-none pointer-events-none uppercase">
              CORE
            </div>

            <div className="space-y-2">
              <span className="text-[#00ff41] font-mono text-xs font-bold tracking-widest uppercase">
                // PRECISÃO ENGENHARIA
              </span>
              <div className="w-12 h-1 bg-[#00ff41]" />
            </div>

            <div className="my-12 md:my-16 space-y-6 max-w-lg z-10">
              <h3 className="text-3xl md:text-5xl font-display font-black text-white uppercase tracking-tight leading-none">
                A PRECISÃO <br />
                DO SISTEMA.
              </h3>
              
              <p className="text-base md:text-lg text-zinc-300 leading-relaxed font-sans font-light">
                "A IA, a automação e a arquitetura de dados como veículo de escala."
              </p>

              {/* Graphical Network Connections / Code columns visual */}
              <div className="bg-zinc-950/80 border border-zinc-900 rounded-xl p-3.5 font-mono text-[10px] text-zinc-500 space-y-1 max-w-md">
                <div className="flex justify-between"><span className="text-[#00ff41]">SYS://CORE.ONLINE</span><span>OK</span></div>
                <div className="flex justify-between"><span>DATABASE_PERSISTENCE: LOCAL</span><span>ACTIVE</span></div>
                <div className="flex justify-between"><span>API_DECRYPTION_RATE: 100%</span><span>GLOW</span></div>
              </div>
            </div>

            <span className="text-xs font-mono text-[#00ff41] font-bold tracking-widest uppercase">
              TECH / CONVERSÃO / FLUXOGRAMA
            </span>
          </div>

          {/* Absolute overlap badge in the true center of the screen split */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-black border border-zinc-800 text-white font-mono font-black italic tracking-widest text-xs px-6 py-3 rounded-full hover:scale-110 transition duration-300 shadow-[0_0_20px_rgba(160,32,240,0.2)] flex items-center gap-2">
            <ArrowRightLeft className="w-4 h-4 text-[#00ff41]" />
            "I AM THE BRIDGE."
          </div>

        </div>
      </section>

      {/* 5. O CONVITE FINAL + CONVERSÃO (Construa seu Império Digital) */}
      <section id="conversão" className="py-24 border-b border-zinc-900 relative">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          
          <div className="bg-zinc-950 border border-zinc-850 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl">
            {/* Visual aesthetic edge lights */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-purple-500 via-[#00ff41] to-purple-500" />
            
            <div className="max-w-2xl mx-auto text-center space-y-4 mb-10">
              <h2 className="text-4xl font-display font-black text-white uppercase tracking-tight">
                Construa seu Império Digital.
              </h2>
              <p className="text-base text-zinc-300">
                "Pare de lutar contra o algoritmo e comece a ditar as regras do seu próprio jogo."
              </p>
            </div>

            {/* Lead capture form */}
            {!formSubmitted ? (
              <form onSubmit={handleFormSubmit} className="max-w-lg mx-auto space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name-input" className="block text-[10px] font-mono text-zinc-400 uppercase tracking-widest mb-1.5 font-bold">
                      Seu Nome Completo
                    </label>
                    <input
                      id="name-input"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleFormInputChange}
                      placeholder="Ex: Gabriel Ribas"
                      className="w-full bg-black border border-zinc-800 hover:border-zinc-700 focus:border-[#00ff41] focus:ring-1 focus:ring-[#00ff41] text-white rounded-lg p-3 text-sm font-sans transition outline-none placeholder:text-zinc-600"
                    />
                  </div>

                  <div>
                    <label htmlFor="email-input" className="block text-[10px] font-mono text-zinc-400 uppercase tracking-widest mb-1.5 font-bold">
                      E-mail Principal
                    </label>
                    <input
                      id="email-input"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleFormInputChange}
                      placeholder="Ex: gabriel@dominio.com"
                      className="w-full bg-black border border-zinc-805 hover:border-zinc-700 focus:border-[#00ff41] focus:ring-1 focus:ring-[#00ff41] text-white rounded-lg p-3 text-sm font-sans transition outline-none placeholder:text-zinc-600"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="source-input" className="block text-[10px] font-mono text-zinc-400 uppercase tracking-widest mb-1.5 font-bold">
                    Onde você me descobriu? (Mapeamento de Tráfego)
                  </label>
                  <select
                    id="source-input"
                    name="source"
                    value={formData.source}
                    onChange={handleFormInputChange}
                    className="w-full bg-black border border-zinc-800 focus:border-[#a020f0] text-zinc-300 rounded-lg p-3 text-sm font-sans transition outline-none"
                  >
                    <option value="Meta / Bio">Direct / Bio do Instagram</option>
                    <option value="TikTok / Video viral">Scroll de Feed do TikTok</option>
                    <option value="Youtube / Descrição">Indicação / Descrição de Vídeo YouTube</option>
                    <option value="Soberano / Direct">Estímulo Direto Proprietário</option>
                  </select>
                </div>

                <button
                  id="final-submit-btn"
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#00ff41] to-emerald-500 hover:from-emerald-400 hover:to-[#00ff41] text-black font-display font-extrabold text-sm uppercase p-4 rounded-xl transition duration-300 transform active:scale-95 shadow-[0_0_20px_rgba(0,255,65,0.2)] tracking-wider mt-4"
                >
                  QUERO CONSTRUIR MEU ECOSISTEMA
                </button>

                <div className="flex items-center justify-center gap-1.5 text-[10px] font-mono text-zinc-500 pt-2">
                  <Lock className="w-3.5 h-3.5 text-[#00ff41]" />
                  <span>Seus dados protegidos no seu servidor pessoal seguro. Zero spam.</span>
                </div>

              </form>
            ) : (
              <div className="max-w-md mx-auto text-center py-8 space-y-4">
                <div className="w-16 h-16 bg-emerald-950/80 border border-[#00ff41] rounded-full flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(0,255,65,0.3)] animate-bounce">
                  <Check className="w-8 h-8 text-[#00ff41]" />
                </div>
                <h3 className="text-2xl font-display font-bold text-white uppercase tracking-tight">
                  Acesso Sincronizado!
                </h3>
                <p className="text-zinc-300 text-sm leading-relaxed">
                  Seu sinal de recepção foi captado. Sua transição para o Ecossistema Soberano acaba de ser registrada em nosso banco de dados.
                </p>
                <p className="text-xs text-zinc-500 font-mono">
                  [VEJA O REGISTRO IMEDIATO NO PAINEL ABAIXO 👇]
                </p>
              </div>
            )}

          </div>

        </div>
      </section>

      {/* 6. LEAD COCKPIT / BACKOFFICE LIVE SCREEN */}
      <section id="dashboard" className="py-20 max-w-7xl mx-auto px-4 lg:px-8">
        
        <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
          <span className="text-[10px] font-mono text-amber-500 uppercase tracking-widest font-bold">
            ⚡ PROVA DE ECOSSISTEMA SOBERANO (RESERVA DO CRIADOR)
          </span>
          <h2 className="text-2xl font-display font-black text-white uppercase">
            Soberania Control Cockpit
          </h2>
          <p className="text-xs text-zinc-500 leading-normal font-sans">
            Abaixo está a materialização tecnológica da teoria. Este simulador de monitoramento coleta os contatos em tempo real e permite analisar o fluxo livre do controle alheio.
          </p>
        </div>

        {/* Live leads visual widget dashboard connected to actions */}
        <LeadDashboard 
          leads={leads} 
          onClearLeads={clearLeads} 
          onAddMockLead={addMockLead} 
        />

      </section>

      {/* FOOTER CO-OP */}
      <footer className="border-t border-zinc-900 bg-neutral-950 px-4 py-12 text-center text-zinc-500 font-mono text-xs">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex justify-center items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00ff41]" />
            <span className="text-zinc-300 uppercase tracking-wider font-bold">SABIÊNCIA DIGITAL // DESIGNED FOR THE MULTI-FACETED ERA</span>
          </div>
          <p className="max-w-lg mx-auto text-zinc-600 leading-relaxed">
            Desenvolvido para ancoragem de autoridade indestrutível. Este site é de domínio proprietário do criador. Todos os dados coletados são salvos em Sandbox LocalStorage, assegurando imunidade contra Big Techs.
          </p>
          <p className="text-[10px] text-zinc-700 uppercase">
            © 2026 SOBERANIA CO. TODOS OS DIREITOS RESERVADOS.
          </p>
        </div>
      </footer>

    </div>
  );
}
