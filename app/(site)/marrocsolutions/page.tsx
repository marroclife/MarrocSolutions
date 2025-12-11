'use client';

import React, { useState, useEffect, ReactNode } from 'react';
import { Menu, X, Hexagon, ArrowRight, Globe, Zap, MessageSquare, Map, Database, Search, PenTool, Rocket, Clock, DollarSign, UserCheck, ShieldCheck, Quote, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

// --- UI Components ---

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'outline' | 'ghost';
  icon?: boolean;
  href?: string;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  icon = false, 
  href, 
  className = '',
  fullWidth = false,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-lg px-6 py-3 text-base group relative overflow-hidden";
  
  const variants = {
    primary: "bg-white text-black hover:bg-slate-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]",
    outline: "border border-slate-700 text-slate-200 hover:border-slate-500 hover:bg-slate-900",
    ghost: "text-slate-400 hover:text-white"
  };

  const widthClass = fullWidth ? "w-full" : "";

  const content = (
    <>
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
      </span>
    </>
  );

  if (href) {
    return (
      <a 
        href={href} 
        className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {content}
    </button>
  );
};

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  classNameInner?: string;
}

const Section: React.FC<SectionProps> = ({ children, id, className = "", classNameInner = "" }) => {
  return (
    <section id={id} className={`py-20 px-6 md:px-12 lg:px-24 relative ${className}`}>
      <div className={`max-w-7xl mx-auto ${classNameInner}`}>
        {children}
      </div>
    </section>
  );
};

// --- Page Components ---

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Serviços', href: '#servicos' },
    { name: 'Processo', href: '#processo' },
    { name: 'Sobre', href: '#sobre' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Left Side: Back Button + Logo */}
        <div className="flex items-center gap-6">
          <a 
            href="/" 
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group/back"
            title="Voltar para a Home"
          >
            <ArrowLeft className="w-5 h-5 group-hover/back:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium hidden sm:block">Voltar</span>
          </a>

          <a href="#" className="flex items-center gap-2 group">
            <Hexagon className="w-8 h-8 text-white stroke-1 group-hover:rotate-90 transition-transform duration-500" />
            <span className="text-xl font-bold tracking-tight text-white">
              Marroc<span className="font-light text-slate-400">Solutions</span>
            </span>
          </a>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contato" 
            className="text-sm font-semibold bg-white text-black px-4 py-2 rounded hover:bg-slate-200 transition-colors"
          >
            Quero meu site
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-300 hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0a0a0a] border-b border-white/10 p-6 flex flex-col gap-4 shadow-2xl">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-slate-300 hover:text-white text-lg"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contato"
            onClick={() => setIsOpen(false)}
            className="text-center font-bold bg-white text-black py-3 rounded mt-2"
          >
            Quero meu site
          </a>
          <div className="border-t border-white/10 pt-4 mt-2">
            <a 
              href="/"
              className="flex items-center justify-center gap-2 text-slate-400 hover:text-white py-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar para a Home
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/20 via-[#0a0a0a] to-[#0a0a0a] z-0" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 z-10 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-medium text-slate-300 tracking-wide uppercase">Disponível para novos projetos</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6">
              O futuro da sua <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-500">
                presença digital.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 mb-8 leading-relaxed max-w-2xl">
              Unimos estética minimalista e automação inteligente para criar sites que vendem. Rápido, direto e profissional.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="#contato" icon>
                Quero meu site
              </Button>
              <Button variant="outline" href="#servicos">
                Ver soluções
              </Button>
            </div>
            
            <div className="mt-12 flex items-center gap-8 text-sm text-slate-500 font-medium flex-wrap">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Entrega em 72h
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Design Exclusivo
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const About: React.FC = () => {
  return (
    <Section id="sobre" className="bg-[#0a0a0a] border-t border-white/5">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Design com alma.<br />
            <span className="text-slate-500">Tecnologia com propósito.</span>
          </h2>
        </div>
        <div>
          <p className="text-slate-400 text-lg leading-relaxed mb-4">
            A <strong>Marroc Solutions</strong> nasce da interseção entre a criatividade artística e a precisão tecnológica.
          </p>
          <p className="text-slate-400 text-lg leading-relaxed">
            Não entregamos apenas código. Entregamos ferramentas de crescimento para negócios locais, artistas e criadores que precisam de resultados rápidos sem abrir mão da elegância. Menos burocracia, mais performance.
          </p>
        </div>
      </div>
    </Section>
  );
};

const Services: React.FC = () => {
  const secondaryServices = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "WhatsApp Automatizado",
      desc: "Atendimento 24/7 para não perder clientes."
    },
    {
      icon: <Map className="w-6 h-6" />,
      title: "Leads via Maps",
      desc: "Estratégias para captar clientes locais no Google."
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Controle Simplificado",
      desc: "Sistemas leves para estoque e pedidos."
    }
  ];

  return (
    <Section id="servicos">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Nossas Soluções</h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Foco no essencial. Tudo o que você precisa para se posicionar online com autoridade.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Service Card */}
        <motion.div 
          className="lg:col-span-2 bg-[#171717]/60 backdrop-blur-xl border border-white/5 p-8 md:p-12 rounded-2xl relative overflow-hidden group"
          whileHover={{ y: -5 }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
            <Globe className="w-64 h-64 text-white" />
          </div>
          
          <div className="relative z-10">
            <div className="w-12 h-12 bg-white text-black rounded-lg flex items-center justify-center mb-6">
              <Zap className="w-6 h-6" />
            </div>
            
            <h3 className="text-3xl font-bold text-white mb-4">Criação de Sites Profissionais</h3>
            <p className="text-slate-300 text-lg mb-8 max-w-lg">
              Sites rápidos, leves e integrados com IA. Projetados para converter visitantes em clientes. Ideal para negócios locais e freelancers.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                "Entrega expressa em 48h a 72h",
                "Design minimalista e exclusivo",
                "Otimizado para mobile e SEO",
                "Integração direta com WhatsApp"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Secondary Services Column */}
        <div className="flex flex-col gap-6">
          {secondaryServices.map((service, idx) => (
            <motion.div 
              key={idx}
              className="bg-[#171717]/60 backdrop-blur-xl border border-white/5 p-6 rounded-2xl flex-1 flex flex-col justify-center hover:bg-white/5 transition-colors"
              whileHover={{ x: 5 }}
            >
              <div className="text-indigo-400 mb-3">{service.icon}</div>
              <h4 className="text-xl font-semibold text-white mb-2">{service.title}</h4>
              <p className="text-slate-400 text-sm">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

const Process: React.FC = () => {
  const steps = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "1. Análise",
      desc: "Entendemos seu negócio e definimos o objetivo central do site."
    },
    {
      icon: <PenTool className="w-8 h-8" />,
      title: "2. Criação",
      desc: "Desenvolvemos o layout e configuramos as automações em tempo recorde."
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "3. Entrega",
      desc: "Seu site no ar, testado e pronto para receber clientes em até 72h."
    }
  ];

  return (
    <Section id="processo" className="bg-[#171717]/50">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-white">Como Funciona</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8 relative">
        {/* Connecting Line (Desktop) */}
        <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-700 to-transparent z-0" />

        {steps.map((step, idx) => (
          <div key={idx} className="relative z-10 flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full bg-[#0a0a0a] border border-slate-700 flex items-center justify-center mb-6 shadow-xl text-slate-200">
              {step.icon}
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
            <p className="text-slate-400 max-w-xs">{step.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: <Clock className="w-6 h-6 text-indigo-400" />,
      title: "Velocidade",
      desc: "Não espere meses. Seu projeto pronto em dias."
    },
    {
      icon: <DollarSign className="w-6 h-6 text-green-400" />,
      title: "Custo Acessível",
      desc: "Qualidade de agência com preço de parceiro."
    },
    {
      icon: <UserCheck className="w-6 h-6 text-blue-400" />,
      title: "Suporte Humano",
      desc: "Fale diretamente com quem resolve."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-slate-400" />,
      title: "Confiabilidade",
      desc: "Tecnologia estável e segura para seu negócio."
    }
  ];

  return (
    <Section className="border-t border-white/5">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {reasons.map((reason, idx) => (
          <div key={idx} className="flex flex-col gap-4 p-6 rounded-lg hover:bg-white/5 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center">
              {reason.icon}
            </div>
            <div>
              <h4 className="font-bold text-lg mb-1 text-white">{reason.title}</h4>
              <p className="text-sm text-slate-400">{reason.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "A velocidade de entrega foi impressionante. Em 3 dias eu tinha um site profissional rodando.",
      author: "Ricardo S.",
      role: "Arquiteto"
    },
    {
      quote: "Minimalista e direto ao ponto. A automação do WhatsApp facilitou muito meu atendimento.",
      author: "Ana Beatriz",
      role: "Clínica de Estética"
    },
    {
      quote: "A Marroc Solutions entendeu perfeitamente a estética que eu buscava. Recomendo.",
      author: "Felipe Mendes",
      role: "Fotógrafo"
    }
  ];

  return (
    <Section className="bg-gradient-to-b from-[#0a0a0a] to-indigo-950/20">
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, idx) => (
          <div key={idx} className="bg-[#171717]/60 backdrop-blur-xl border border-white/5 p-8 rounded-xl relative">
            <Quote className="absolute top-6 left-6 w-8 h-8 text-indigo-500/20" />
            <p className="text-slate-300 italic mb-6 relative z-10 pt-4">"{t.quote}"</p>
            <div>
              <p className="font-bold text-white">{t.author}</p>
              <p className="text-xs text-slate-500 uppercase tracking-wider">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

const Footer: React.FC = () => {
  return (
    <footer id="contato" className="py-20 px-6 border-t border-white/10 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Pronto para elevar seu nível?
        </h2>
        <p className="text-slate-400 text-xl mb-10">
          Garanta seu espaço digital com quem entende de tecnologia e design.
        </p>
        
        <div className="flex justify-center">
          <Button href="https://wa.me/5521992669980?text=Olá,%20quero%20agendar%20uma%20sessão%20de%20Rituais%20de%20Reconexão" className="px-10 py-4 text-lg" icon>
            Quero meu site agora
          </Button>
        </div>

        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-sm text-slate-600">
          <p>&copy; {new Date().getFullYear()} Marroc Solutions. Todos os direitos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main Page Export ---

export default function MarrocSolutionsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-slate-200 font-sans selection:bg-blue-500 selection:text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <WhyChooseUs />
        <Testimonials />
        <div className="pb-20">
          {/* Spacing before footer */}
        </div>
      </main>
      <Footer />
    </div>
  );
}