import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, MapPin, Phone, ArrowRight, Sun, Bed, PartyPopper, Home, Camera, MessageCircle, ChevronRight, Check, Waves, Mountain, Gamepad2, Coffee } from 'lucide-react';

// --- CONFIGURAÇÃO E DADOS ---

const BRAND_COLORS = {
  primary: "bg-emerald-800", // Verde sofisticado (Mata Atlântica)
  primaryHover: "hover:bg-emerald-900",
  secondary: "bg-stone-100", // Tom areia/pedra (Neutro)
  accent: "text-emerald-700",
  textMain: "text-slate-800",
  textLight: "text-slate-600",
  white: "bg-white"
};

const WHATSAPP_NUMBER = "5521999999999"; // Mantido placeholder para proteção, mas pronto para o real

// --- COMPONENTES UI REUTILIZÁVEIS ---

const Section = ({ children, className = "" }) => (
  <section className={`py-16 px-6 md:px-12 lg:px-24 ${className}`}>
    <div className="max-w-7xl mx-auto">
      {children}
    </div>
  </section>
);

const Button = ({ children, onClick, variant = 'primary', className = '', icon: Icon }) => {
  const baseStyle = "inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-sm";
  const variants = {
    primary: `${BRAND_COLORS.primary} text-white ${BRAND_COLORS.primaryHover}`,
    outline: `border-2 border-emerald-800 text-emerald-800 hover:bg-emerald-50`,
    whatsapp: "bg-green-600 hover:bg-green-700 text-white"
  };

  return (
    <button onClick={onClick} className={`${baseStyle} ${variants[variant]} ${className}`}>
      {Icon && <Icon size={20} className="mr-2" />}
      {children}
    </button>
  );
};

const SectionTitle = ({ title, subtitle }) => (
  <div className="mb-12 text-center">
    <h2 className={`text-3xl md:text-4xl font-serif font-bold ${BRAND_COLORS.textMain} mb-4`}>{title}</h2>
    {subtitle && <p className={`text-lg ${BRAND_COLORS.textLight} max-w-2xl mx-auto`}>{subtitle}</p>}
    <div className="w-24 h-1 bg-emerald-800 mx-auto mt-6 rounded-full opacity-30"></div>
  </div>
);

// --- PÁGINAS ---

const HomePage = ({ navigate }) => (
  <div className="animate-fade-in">
    {/* Hero Section */}
    <div className="relative h-[85vh] w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-slate-900/40 z-10"></div>
      <img 
        src="https://static.wixstatic.com/media/766e0b_5240be6db34440bbab4e36f758051278~mv2.jpeg/v1/fill/w_588,h_914,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/766e0b_5240be6db34440bbab4e36f758051278~mv2.jpeg" alt="area gourmet de cima.jpeg" 
        alt="Mansão 360 Vista Aérea" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-20 text-center text-white px-4 max-w-5xl">
        <div className="mb-4 inline-block px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium tracking-wider uppercase">
          Muriqui • Costa Verde • RJ
        </div>
        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight drop-shadow-lg">
          Vista Mar e Montanha.<br/>Experiência 360º.
        </h1>
        <p className="text-xl md:text-2xl font-light mb-8 opacity-95 max-w-3xl mx-auto text-shadow">
          10 Suítes, Salão de Jogos e Lazer Completo entre o verde da Mata Atlântica e a brisa do mar.
        </p>
        <Button 
          variant="whatsapp" 
          onClick={() => navigate('contato')}
          icon={MessageCircle}
          className="text-lg px-8 py-4 shadow-xl hover:scale-105 transition-transform"
        >
          Falar no WhatsApp
        </Button>
      </div>
    </div>

    {/* Menu Rápido de Serviços */}
    <Section className={BRAND_COLORS.secondary}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 -mt-24 relative z-30">
        {[
          { icon: Sun, title: "Day Use", desc: "Piscina, churrasco e diversão para passar o dia.", page: 'dayuse' },
          { icon: Bed, title: "10 Suítes", desc: "Acomodação confortável para grandes grupos.", page: 'suites' },
          { icon: PartyPopper, title: "Eventos", desc: "O cenário perfeito para sua celebração.", page: 'festas' },
          { icon: Home, title: "Locação Completa", desc: "Privacidade total da mansão para você.", page: 'locacao' },
        ].map((item, index) => (
          <div 
            key={index} 
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer border-t-4 border-emerald-800 flex flex-col h-full"
            onClick={() => navigate(item.page)}
          >
            <item.icon className="w-10 h-10 text-emerald-800 mb-4" />
            <h3 className="text-xl font-bold mb-2 text-slate-800">{item.title}</h3>
            <p className="text-slate-600 text-sm mb-4 flex-grow">{item.desc}</p>
            <span className="text-emerald-700 font-medium text-sm flex items-center group mt-auto">
              Saiba mais <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        ))}
      </div>
    </Section>

    {/* Breve Sobre - DADOS REAIS */}
    <Section>
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 relative">
          <img 
            src="https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Área da Piscina" 
            className="rounded-lg shadow-2xl z-10 relative"
          />
          <div className="absolute -bottom-6 -right-6 bg-emerald-900 text-white p-6 rounded-lg hidden md:block z-20 shadow-xl">
             <p className="font-serif text-2xl font-bold">360º</p>
             <p className="text-xs uppercase tracking-widest opacity-80">De Natureza</p>
          </div>
        </div>
        <div className="flex-1">
          <h2 className="text-3xl font-serif font-bold text-slate-800 mb-6">Por que "Mansão 360"?</h2>
          <p className="text-slate-600 mb-6 leading-relaxed text-lg">
            Localizada estrategicamente em uma área elevada da Costa Verde (região de Muriqui/Itacuruça), nossa propriedade oferece um privilégio raro: <strong className="text-emerald-800">uma vista panorâmica completa</strong> que une o azul do mar e o verde exuberante das montanhas.
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center text-slate-700"><Check className="text-emerald-600 mr-2" size={18}/> Salão de Jogos Completo (Sinuca, Totó, Air Game)</li>
            <li className="flex items-center text-slate-700"><Check className="text-emerald-600 mr-2" size={18}/> Piscina ampla para relaxar</li>
            <li className="flex items-center text-slate-700"><Check className="text-emerald-600 mr-2" size={18}/> Área Gourmet com Churrasqueira</li>
          </ul>
          <Button variant="outline" onClick={() => navigate('mansao')}>Conheça a Estrutura</Button>
        </div>
      </div>
    </Section>
  </div>
);

const MansionPage = () => (
  <div className="animate-fade-in">
    {/* NOVA HERO SECTION ADICIONADA */}
    <div className="h-64 md:h-80 w-full relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/40 z-10"></div>
        <img 
            src="https://static.wixstatic.com/media/766e0b_a26a6aee679c40798f26a5583cc23557~mv2.jpeg/v1/crop/x_332,y_0,w_615,h_720/fill/w_188,h_220,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/fachada%20a%20noite.jpeg" 
            alt="Fachada Mansão 360" 
            className="w-full h-full object-cover absolute inset-0" 
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center text-center px-4">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white shadow-sm drop-shadow-md">Nossa Estrutura</h1>
        </div>
    </div>

    <Section className="bg-stone-50 pt-12">
      <SectionTitle 
        title="Conforto e Natureza" 
        subtitle="Pensada para conforto, diversão e conexão. Conheça os detalhes."
      />
      
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h3 className="text-2xl font-bold text-emerald-900 mb-4">Lazer e Convivência</h3>
          <p className="text-slate-600 mb-6">
            A Mansão 360 não é apenas uma casa, é um complexo de lazer privativo. Nossa estrutura foi desenhada para garantir entretenimento para todas as idades, do parquinho infantil à sinuca dos adultos.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {icon: Waves, text: "Piscina Ampla"},
              {icon: Gamepad2, text: "Salão de Jogos Completo"},
              {icon: Coffee, text: "Área Gourmet Equipada"},
              {icon: Mountain, text: "Vista Mar e Montanha"},
              {icon: Sun, text: "Parquinho Infantil"},
              {icon: Check, text: "Estacionamento Privativo"}
            ].map((item, i) => (
              <div key={i} className="flex items-center text-slate-700 bg-white p-3 rounded shadow-sm">
                <item.icon size={18} className="text-emerald-600 mr-3" /> 
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="h-96 bg-slate-200 rounded-lg overflow-hidden relative shadow-lg group">
          <img 
             src="https://images.unsplash.com/photo-15422596594ab-d7932df89467?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
             alt="Vista Aérea e Natureza"
             className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
            <p className="text-white font-medium text-sm flex items-center"><MapPin size={16} className="mr-2"/> Localização Privilegiada em Muriqui</p>
          </div>
        </div>
      </div>
    </Section>
  </div>
);

const ServicePage = ({ title, subtitle, features, image, ctaText, icon: Icon, extraInfo }) => (
  <div className="animate-fade-in">
    <div className="h-64 md:h-80 w-full relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/50 z-10"></div>
        <img src={image} alt={title} className="w-full h-full object-cover absolute inset-0" />
        <div className="absolute inset-0 z-20 flex items-center justify-center text-center px-4">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white shadow-sm drop-shadow-md">{title}</h1>
        </div>
    </div>

    <Section>
        <div className="max-w-4xl mx-auto text-center mb-12">
            <Icon size={48} className="mx-auto text-emerald-800 mb-6" />
            <p className="text-xl text-slate-600 leading-relaxed">{subtitle}</p>
            {extraInfo && <p className="mt-4 text-emerald-700 font-medium">{extraInfo}</p>}
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feat, idx) => (
                <div key={idx} className="bg-stone-50 p-8 rounded-xl text-center border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="font-bold text-lg text-emerald-900 mb-3">{feat.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{feat.desc}</p>
                </div>
            ))}
        </div>

        <div className="bg-emerald-50 p-8 rounded-2xl text-center max-w-3xl mx-auto border border-emerald-100">
            <h3 className="text-2xl font-bold text-emerald-900 mb-4">Vamos conversar?</h3>
            <p className="text-slate-600 mb-8">
                Cada grupo é único. Entre em contato para verificarmos a disponibilidade e o pacote ideal para sua necessidade.
            </p>
            <Button 
                variant="whatsapp" 
                icon={MessageCircle}
                onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Vi o site e gostaria de informações sobre ${title}.`, '_blank')}
            >
                {ctaText}
            </Button>
        </div>
    </Section>
  </div>
);

const GalleryPage = () => {
  const images = [
    { cat: "Lazer", url: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", title: "Piscina com Vista" },
    { cat: "Suítes", url: "https://images.unsplash.com/photo-1616594039964-40891a913d54?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", title: "Suítes Confortáveis" },
    { cat: "Lazer", url: "https://images.unsplash.com/photo-1596568461741-2a149c40db21?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", title: "Sinuca e Jogos" },
    { cat: "Natureza", url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", title: "Vista Montanha" },
    { cat: "Gastronomia", url: "https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", title: "Área Gourmet" },
    { cat: "Eventos", url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", title: "Celebrações" },
  ];

  return (
    <div className="animate-fade-in">
        <SectionTitle title="Galeria de Fotos" subtitle="Um pouco da experiência visual da Mansão 360." />
        <Section className="pt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {images.map((img, idx) => (
                    <div key={idx} className="group relative overflow-hidden rounded-lg aspect-[4/3] shadow-md cursor-pointer">
                        <img 
                            src={img.url} 
                            alt={img.title} 
                            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                            <span className="text-emerald-300 text-xs font-bold uppercase tracking-wider mb-1">{img.cat}</span>
                            <h3 className="text-white text-lg font-bold">{img.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    </div>
  );
};

const ContactPage = () => (
  <div className="animate-fade-in">
    <SectionTitle title="Fale Conosco" subtitle="Atendimento humanizado para tirar suas dúvidas." />
    
    <Section className="pt-0">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
            {/* Adicionado imagem de background sutil aqui */}
            <div className="bg-emerald-900 p-10 text-white md:w-2/5 flex flex-col justify-between relative overflow-hidden">
                <img 
                    src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Background Natureza"
                    className="absolute inset-0 w-full h-full object-cover opacity-20"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-emerald-900/90 to-emerald-900/50 pointer-events-none"></div>
                
                <div className="relative z-10">
                    <h3 className="text-2xl font-serif font-bold mb-8">Canais Oficiais</h3>
                    <div className="space-y-8">
                        <div className="flex items-start group cursor-pointer">
                            <MapPin className="mt-1 mr-4 text-emerald-300 group-hover:text-white transition-colors" />
                            <div>
                                <p className="font-bold">Costa Verde</p>
                                <p className="text-sm opacity-80">Muriqui / Itacuruça, RJ</p>
                            </div>
                        </div>
                        <div className="flex items-center group cursor-pointer">
                            <Instagram className="mr-4 text-emerald-300 group-hover:text-white transition-colors" />
                            <p>@mansao360</p>
                        </div>
                        <div className="flex items-center group cursor-pointer">
                            <MessageCircle className="mr-4 text-emerald-300 group-hover:text-white transition-colors" />
                            <p>Atendimento via WhatsApp</p>
                        </div>
                    </div>
                </div>
                <div className="mt-12 relative z-10">
                    <p className="text-sm opacity-60">© 2026 Mansão 360</p>
                </div>
            </div>

            <div className="p-10 md:w-3/5 bg-white">
                <h3 className="text-xl font-bold text-slate-800 mb-2">Como podemos ajudar?</h3>
                <p className="text-slate-600 mb-8 text-sm">Selecione o assunto para iniciar a conversa no WhatsApp já com o contexto correto.</p>
                
                <div className="space-y-4">
                    {[
                        { label: "Day Use e Lazer", msg: "Day Use" },
                        { label: "Hospedagem (Suítes)", msg: "Hospedagem" },
                        { label: "Realizar um Evento", msg: "Eventos" },
                        { label: "Locação da Casa Inteira", msg: "Locação Completa" },
                    ].map((opt, idx) => (
                        <button 
                            key={idx}
                            onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de falar sobre ${opt.msg}.`, '_blank')}
                            className="w-full flex items-center justify-between p-5 border border-slate-100 rounded-xl hover:border-emerald-500 hover:bg-emerald-50 hover:shadow-md transition-all group text-left bg-slate-50"
                        >
                            <span className="font-medium text-slate-700 group-hover:text-emerald-900">{opt.label}</span>
                            <MessageCircle size={20} className="text-slate-300 group-hover:text-emerald-600" />
                        </button>
                    ))}
                </div>
            </div>
        </div>
    </Section>
  </div>
);

// --- COMPONENTE PRINCIPAL (LAYOUT) ---

export default function App({ hideHeader = false }) {
  const [currentPage, setCurrentPage] = useState('inicio');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  }, [currentPage]);

  const navItems = [
    { id: 'inicio', label: 'Início' },
    { id: 'mansao', label: 'A Mansão' },
    { id: 'dayuse', label: 'Day Use' },
    { id: 'suites', label: 'Suítes' },
    { id: 'festas', label: 'Eventos' },
    { id: 'locacao', label: 'Locação' },
    { id: 'galeria', label: 'Galeria' },
    { id: 'contato', label: 'Contato' },
  ];

  const renderPage = () => {
    switch(currentPage) {
      case 'inicio': return <HomePage navigate={setCurrentPage} />;
      case 'mansao': return <MansionPage />;
      case 'dayuse': return (
        <ServicePage 
            title="Day Use" 
            subtitle="Passe um dia inesquecível com amigos e família desfrutando de nossa infraestrutura completa."
            icon={Sun}
            image="https://images.unsplash.com/photo-1572331165267-854da2b00dc1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            ctaText="Consultar Valores de Day Use"
            features={[
                {title: "Piscinas e Sol", desc: "Aproveite nossa piscina com vista privilegiada e áreas de espreguiçadeiras."},
                {title: "Área Gourmet", desc: "Churrasqueira completa com freezer, fogão e mesas para seu churrasco."},
                {title: "Diversão Garantida", desc: "Acesso liberado ao Salão de Jogos (sinuca, totó, ping pong) e parquinho."}
            ]}
        />
      );
      case 'suites': return (
        <ServicePage 
            title="10 Suítes Independentes" 
            subtitle="Privacidade e conforto para grupos grandes. Todas as suítes equipadas para seu bem-estar."
            extraInfo="Capacidade para hospedar confortavelmente grandes famílias e grupos."
            icon={Bed}
            image="https://images.unsplash.com/photo-1590490360182-137d62341e1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80"
            ctaText="Verificar Disponibilidade"
            features={[
                {title: "Suíte Master", desc: "Destaque especial com hidromassagem e vista panorâmica incrível."},
                {title: "Conforto Total", desc: "Suítes com ar condicionado, garantindo noites frescas e tranquilas."},
                {title: "Privacidade", desc: "Todas as 10 unidades são suítes, oferecendo banheiro privativo para todos."}
            ]}
        />
      );
      case 'festas': return (
        <ServicePage 
            title="Eventos e Celebrações" 
            subtitle="Casamentos, aniversários e retiros corporativos com um cenário cinematográfico."
            icon={PartyPopper}
            image="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            ctaText="Solicitar Orçamento de Evento"
            features={[
                {title: "Cenário 360º", desc: "Fotos incríveis com fundo para o mar e a montanha."},
                {title: "Estrutura de Apoio", desc: "Cozinha completa para buffet e áreas cobertas e ao ar livre."},
                {title: "Flexibilidade", desc: "Espaço versátil que se adapta a cerimônias intimistas ou festas maiores."}
            ]}
        />
      );
      case 'locacao': return (
        <ServicePage 
            title="Locação Completa" 
            subtitle="A Mansão inteira só para você. Exclusividade absoluta para retiros e temporadas."
            icon={Home}
            image="https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80"
            ctaText="Consultar Locação Exclusiva"
            features={[
                {title: "10 Suítes Exclusivas", desc: "Acomode todo o seu grupo (aprox. 30 pessoas) com total conforto."},
                {title: "Infraestrutura Total", desc: "Uso livre da piscina, churrasqueira, jogos e cozinha industrial."},
                {title: "Segurança e Paz", desc: "Localização tranquila em condomínio/área segura, ideal para desconectar."}
            ]}
        />
      );
      case 'galeria': return <GalleryPage />;
      case 'contato': return <ContactPage />;
      default: return <HomePage navigate={setCurrentPage} />;
    }
  };

  return (
    <div className="font-sans text-slate-800 bg-white min-h-screen flex flex-col">
      
      {/* HEADER - Condicional */}
      {!hideHeader && (
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-black/20 backdrop-blur-sm py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <div 
            className={`font-serif font-bold text-2xl tracking-widest cursor-pointer flex items-center ${scrolled || currentPage !== 'inicio' ? 'text-emerald-900' : 'text-white'}`}
            onClick={() => setCurrentPage('inicio')}
          >
            MANSÃO<span className="text-emerald-500">360</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex gap-8 items-center">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`text-sm font-medium hover:text-emerald-500 transition-colors uppercase tracking-wide
                  ${currentPage === item.id ? 'text-emerald-500 font-bold' : (scrolled || currentPage !== 'inicio' ? 'text-slate-600' : 'text-white/90')}
                `}
              >
                {item.label}
              </button>
            ))}
            <Button 
                variant={scrolled || currentPage !== 'inicio' ? 'primary' : 'whatsapp'} 
                className="py-2 px-5 text-sm shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                onClick={() => setCurrentPage('contato')}
            >
                Reservar
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className={`lg:hidden ${scrolled || currentPage !== 'inicio' ? 'text-slate-800' : 'text-white'}`}
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </header>
      )}

      {/* MOBILE MENU OVERLAY */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white flex flex-col p-6 animate-fade-in">
            <div className="flex justify-between items-center mb-8">
                <span className="font-serif font-bold text-2xl text-emerald-900">MANSÃO360</span>
                <button onClick={() => setIsMenuOpen(false)} className="text-slate-500 hover:text-red-500 transition-colors">
                    <X size={32} />
                </button>
            </div>
            <nav className="flex flex-col gap-2 overflow-y-auto">
                {navItems.map(item => (
                    <button
                        key={item.id}
                        onClick={() => setCurrentPage(item.id)}
                        className={`text-lg font-medium py-4 border-b border-slate-100 text-left px-2 rounded-lg transition-colors ${currentPage === item.id ? 'bg-emerald-50 text-emerald-800 pl-4' : 'text-slate-600 hover:bg-slate-50'}`}
                    >
                        {item.label}
                    </button>
                ))}
            </nav>
            <div className="mt-auto pt-6">
                <Button variant="whatsapp" className="w-full justify-center text-lg py-4" icon={MessageCircle} onClick={() => { setCurrentPage('contato'); setIsMenuOpen(false); }}>
                    Falar no WhatsApp
                </Button>
            </div>
        </div>
      )}

      {/* MAIN CONTENT */}
      <main className={`flex-grow ${!hideHeader ? 'pt-24' : 'pt-0'}`}>
        {renderPage()}
      </main>

      {/* FOOTER */}
      <footer className="bg-emerald-950 text-emerald-100 py-16 border-t border-emerald-900">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10 text-sm">
            <div className="col-span-1 md:col-span-2">
                <h3 className="font-serif font-bold text-2xl text-white mb-6">MANSÃO<span className="text-emerald-500">360</span></h3>
                <p className="opacity-70 leading-relaxed mb-6 max-w-sm text-base">
                    Um refúgio exclusivo na Costa Verde (Muriqui/Itacuruça) com vista panorâmica para o mar e a montanha. O cenário perfeito para lazer, hospedagem e celebrações inesquecíveis.
                </p>
                <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-emerald-900 flex items-center justify-center hover:bg-emerald-800 cursor-pointer transition-colors">
                        <Instagram className="text-white" size={20} />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-emerald-900 flex items-center justify-center hover:bg-emerald-800 cursor-pointer transition-colors">
                        <MessageCircle className="text-white" size={20} />
                    </div>
                </div>
            </div>
            
            <div>
                <h4 className="font-bold text-white mb-6 uppercase tracking-wider border-b border-emerald-900 pb-2 inline-block">Navegação</h4>
                <ul className="space-y-3 opacity-80">
                    <li className="hover:text-white cursor-pointer hover:translate-x-1 transition-transform" onClick={() => setCurrentPage('inicio')}>Início</li>
                    <li className="hover:text-white cursor-pointer hover:translate-x-1 transition-transform" onClick={() => setCurrentPage('suites')}>10 Suítes</li>
                    <li className="hover:text-white cursor-pointer hover:translate-x-1 transition-transform" onClick={() => setCurrentPage('dayuse')}>Day Use</li>
                    <li className="hover:text-white cursor-pointer hover:translate-x-1 transition-transform" onClick={() => setCurrentPage('contato')}>Falar no WhatsApp</li>
                </ul>
            </div>

            <div>
                 <h4 className="font-bold text-white mb-6 uppercase tracking-wider border-b border-emerald-900 pb-2 inline-block">Localização</h4>
                 <ul className="space-y-4 opacity-80">
                    <li className="flex items-start"><MapPin size={18} className="mr-3 mt-0.5 shrink-0 text-emerald-500" /> Região de Muriqui<br/>Itacuruça, RJ</li>
                    <li className="flex items-center"><Phone size={18} className="mr-3 shrink-0 text-emerald-500" /> (21) 99999-9999</li>
                    <li className="flex items-center"><MessageCircle size={18} className="mr-3 shrink-0 text-emerald-500" /> Atendimento Diário</li>
                 </ul>
            </div>
        </div>
        <div className="text-center pt-8 mt-12 border-t border-emerald-900 opacity-40 text-xs">
            © {new Date().getFullYear()} Mansão 360. Todos os direitos reservados.
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      {scrolled && (
          <button 
            onClick={() => setCurrentPage('contato')}
            className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110 flex items-center justify-center hover:rotate-3"
            title="Fale no WhatsApp"
          >
              <MessageCircle size={32} />
          </button>
      )}

      {/* Global Styles */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
        .text-shadow {
          text-shadow: 0 2px 4px rgba(0,0,0,0.5);
        }
      `}</style>
    </div>
  );
}