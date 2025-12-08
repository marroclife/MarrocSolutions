import React from 'react';
import { Star, Sun, Moon, Compass, Zap, Gem, Droplets, Flame, Sparkles } from 'lucide-react';

// --- Sub-Components (Internal) ---

const PortalCard = ({ icon, title, sign, subtitle, quote, description }: any) => (
  <div className="relative group p-8 rounded-sm bg-white/5 backdrop-blur-sm border border-gold-rose/10 hover:border-gold-rose/30 transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.07] overflow-hidden">
    <div className="absolute -inset-1 bg-gradient-to-r from-refined-gold/0 via-refined-gold/10 to-refined-gold/0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 blur-xl"></div>
    <div className="relative z-10 flex flex-col items-center text-center h-full">
      <div className="mb-6 p-3 rounded-full border border-gold-rose/20 text-refined-gold group-hover:scale-110 transition-transform duration-500">
        {icon}
      </div>
      <h3 className="text-xl font-serif text-silk mb-1">{title} <span className="italic text-gold-rose">{sign}</span></h3>
      <span className="text-[10px] uppercase tracking-[0.2em] text-gold-rose/60 mb-6">{subtitle}</span>
      <p className="font-serif italic text-sm text-silk/90 mb-6 px-2">"{quote}"</p>
      <div className="w-8 h-px bg-gold-rose/30 mb-6"></div>
      <p className="text-xs md:text-sm leading-7 text-silk/70 font-light">{description}</p>
    </div>
  </div>
);

const PathCard = ({ title, subtitle, contentTitle, content }: any) => (
  <div className="flex flex-col md:flex-row bg-moss-800 border border-white/5 rounded-sm overflow-hidden hover:border-gold-rose/20 transition-all duration-300 group">
    <div className="md:w-1/3 bg-black/20 p-8 flex flex-col justify-center border-b md:border-b-0 md:border-r border-white/5 group-hover:border-gold-rose/10 transition-colors">
      <h3 className="font-serif text-2xl text-refined-gold mb-1">{title}</h3>
      <span className="text-[10px] uppercase tracking-widest text-silk/40">{subtitle}</span>
    </div>
    <div className="md:w-2/3 p-8 flex flex-col justify-center">
      <h4 className="font-serif text-lg text-white italic mb-3">"{contentTitle}"</h4>
      <p className="text-sm text-silk/70 leading-relaxed font-light">{content}</p>
    </div>
  </div>
);

const ToolItem = ({ icon, title, category, description }: any) => (
    <div className="flex flex-col items-center text-center p-6 bg-white/[0.02] border border-white/5 rounded hover:bg-white/[0.04] transition-colors h-full">
        <div className="mb-4 text-gold-rose opacity-80">{icon}</div>
        <h4 className="font-serif text-lg text-silk mb-1">{title}</h4>
        <span className="text-[9px] uppercase tracking-widest text-refined-gold mb-3">{category}</span>
        <p className="text-xs text-silk/60 leading-relaxed">{description}</p>
    </div>
);

// --- Main Layout ---

const TamiresLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-moss-900 text-silk selection:bg-gold-rose/30 selection:text-white overflow-x-hidden font-montserrat">
      
      {/* Ambient Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-gold-rose/5 rounded-full blur-[120px] opacity-30" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-refined-gold/5 rounded-full blur-[100px] opacity-20" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 py-12 flex flex-col gap-24 lg:gap-32">
        
        {/* 1. Hero Section */}
        <header className="flex flex-col items-center text-center space-y-12 mt-12 md:mt-20">
          <div className="flex flex-col items-center animate-fade-in-up">
            <div className="flex items-center gap-2 mb-4">
                <Star className="w-4 h-4 text-refined-gold animate-pulse" />
                <span className="text-xs uppercase tracking-[0.3em] text-gold-rose font-medium">Mapa Natal Premium</span>
                <Star className="w-4 h-4 text-refined-gold animate-pulse" />
            </div>
            
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-tight text-silk">
              Tamires <br />
              <span className="italic text-gold-rose/90 font-light">Freitas Rossi</span>
            </h1>
            <span className="text-sm md:text-base tracking-widest text-silk/60 mt-6 font-light uppercase">
                28 de Abril de 2005 • 16:24 • Mangaratiba, Brasil
            </span>
          </div>

          <div className="relative max-w-2xl mx-auto">
            <span className="absolute -top-6 -left-4 text-6xl font-serif text-gold-rose/10">“</span>
            <p className="font-serif text-xl md:text-2xl text-center leading-relaxed text-silk/90 italic">
              Uma arquiteta da harmonia e da permanência. Sua alma foi esculpida na solidez da terra e na leveza do ar, desenhada para construir laços que resistem ao tempo.
            </p>
            <span className="absolute -bottom-10 -right-4 text-6xl font-serif text-gold-rose/10">”</span>
          </div>
          <div className="h-16 w-px bg-gradient-to-b from-transparent via-refined-gold to-transparent opacity-50 mt-8"></div>
        </header>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-gold-rose/20 to-transparent" />

        {/* 2. Cosmic Index */}
        <section className="flex flex-col md:flex-row items-start justify-between border-t border-b border-gold-rose/10 py-12 md:py-16">
          <div className="mb-8 md:mb-0 md:w-1/3">
            <h2 className="font-serif text-3xl md:text-4xl text-silk mb-2">Índice<br /><span className="text-refined-gold italic">Cósmico</span></h2>
            <span className="text-xs uppercase tracking-widest text-gold-rose/60">Navegação Estelar</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 md:w-2/3">
            {['Tríade Fundamental', 'Identidade Galáctica', 'Numerologia da Alma', 'Caminho da Alma', 'Ferramentas & Rituais'].map((item, idx) => (
              <div key={idx} className="group flex items-center gap-4 cursor-default transition-all duration-500 hover:translate-x-2">
                <span className="text-xs font-serif text-gold-rose opacity-50 group-hover:opacity-100 transition-opacity">.{String(idx + 1).padStart(2, '0')}</span>
                <span className="text-sm md:text-base font-medium tracking-wide text-silk/80 group-hover:text-silk transition-colors">{item}</span>
                <div className="h-px bg-gold-rose/20 flex-grow max-w-[20px] opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Fundamental Portals (The Triad) */}
        <section>
          <div className="text-center mb-16 space-y-6">
            <h2 className="font-serif text-4xl md:text-5xl text-silk">Portais Fundamentais</h2>
            <div className="max-w-2xl mx-auto space-y-4 text-silk/70 font-light leading-relaxed text-sm md:text-base">
                <p>Tamires, os céus do seu nascimento revelam uma assinatura astrológica de rara beleza: a <strong>Dupla Regência de Vênus</strong>. Tanto o seu Sol quanto o seu Ascendente respondem ao chamado da deusa do amor.</p>
                <p>Sua estrutura interna é sustentada por uma Lua em Capricórnio, conferindo-lhe uma "espinha dorsal" de aço.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PortalCard 
              icon={<Sun className="w-6 h-6" />}
              title="Sol em"
              sign="Touro"
              subtitle="Casa 7 • A Essência"
              quote="A Essência do 'Nós' e a Força da Permanência"
              description="Seu Sol brilha no signo da sustentação. Touro não corre; ele constrói jardins que duram para sempre. Você é uma âncora na vida das pessoas, trazendo paz e segurança."
            />
            <PortalCard 
              icon={<Moon className="w-6 h-6" />}
              title="Lua em"
              sign="Capricórnio"
              subtitle="Casa 3 • O Mundo Interior"
              quote="A Mente Estruturada e a Maturidade Emocional"
              description="Enquanto seu Sol busca conforto, sua Lua exige respeito e ordem. Suas emoções vestem um 'traje executivo'. Você é a conselheira, a rocha em momentos de crise."
            />
            <PortalCard 
              icon={<Compass className="w-6 h-6" />}
              title="Asc. em"
              sign="Libra"
              subtitle="O Fio Condutor"
              quote="A Diplomata Natural e a Guardiã da Beleza"
              description="O mundo vê você como o equilíbrio em pessoa. Regida por Vênus, sua vida gira em torno da Harmonia. Você é a mediadora, tecendo acordos onde parecia impossível."
            />
          </div>
        </section>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-gold-rose/20 to-transparent" />

        {/* 4. Galactic Identity (Kin) */}
        <section className="bg-gradient-to-br from-white/[0.02] to-transparent p-6 md:p-12 rounded-sm border border-gold-rose/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold-rose/5 blur-[80px] rounded-full pointer-events-none"></div>
            <div className="text-center mb-12">
                <h2 className="font-serif text-4xl md:text-5xl text-silk mb-2">Identidade Galáctica</h2>
                <span className="text-xs uppercase tracking-widest text-refined-gold">Sincronário Maia • 13 Luas</span>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                <div className="w-full lg:w-1/2 flex justify-center">
                    <div className="relative group">
                        <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-[40px] animate-pulse"></div>
                        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border border-blue-300/30 bg-moss-900 flex items-center justify-center overflow-hidden shadow-2xl group-hover:border-blue-300/50 transition-colors duration-500">
                             {/* Image set to kin15.png */}
                            <img src="/images/kin15.png" alt="Kin 15" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                            <div className="absolute inset-4 border border-white/5 rounded-full border-dashed animate-[spin_10s_linear_infinite] pointer-events-none"></div>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 text-left space-y-8">
                    <div>
                        <h3 className="text-2xl md:text-3xl font-serif text-silk mb-2">Águia Lunar Azul</h3>
                        <p className="text-blue-300 text-sm font-medium mb-4">Selo Men (Águia) / Tom Lunar (2)</p>
                        <p className="text-silk/70 leading-relaxed font-light text-sm md:text-base">
                            Tamires, sua assinatura galáctica é a da <strong className="text-silk font-normal">Visionária</strong>. A Águia representa o poder da Mente Superior. O Tom "Lunar" define sua missão como um eterno balanço: estabilizar mente e emoções.
                        </p>
                        <p className="text-silk/60 text-xs mt-2 italic border-l-2 border-blue-400/30 pl-3">"Polarizo com o fim de criar, estabilizando a mente. Selo a saída da visão com o tom lunar do desafio."</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white/[0.03] p-4 rounded border-l-2 border-blue-400/30">
                            <span className="block text-[10px] uppercase tracking-widest text-blue-300 mb-1">Guia</span>
                            <p className="text-silk/90 text-sm font-serif">Mão Lunar Azul</p>
                        </div>
                        <div className="bg-white/[0.03] p-4 rounded border-l-2 border-yellow-500/30">
                            <span className="block text-[10px] uppercase tracking-widest text-yellow-500 mb-1">Apoio</span>
                            <p className="text-silk text-sm font-serif">Semente Lunar Amarela</p>
                        </div>
                        <div className="bg-white/[0.03] p-4 rounded border-l-2 border-red-500/30">
                            <span className="block text-[10px] uppercase tracking-widest text-red-400 mb-1">Desafio</span>
                            <p className="text-silk text-sm font-serif">Serpente Lunar Vermelha</p>
                        </div>
                        <div className="bg-white/[0.03] p-4 rounded border-l-2 border-white/30">
                            <span className="block text-[10px] uppercase tracking-widest text-white/60 mb-1">Oculto</span>
                            <p className="text-silk text-sm font-serif">Enlaçador de Mundos</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* 5. Frequency (Numerology) */}
        <section className="space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-4">
                <h2 className="font-serif text-3xl md:text-4xl text-silk">Frequência do Nome</h2>
                <p className="text-sm text-silk/60 font-light">Seu nome é um código de barras vibracional.</p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 py-12 border-y border-white/5">
                <div className="text-center"><span className="block font-serif text-4xl md:text-6xl text-gold-rose/80">4</span><span className="text-[10px] uppercase tracking-widest text-silk/40 mt-2 block">Tamires</span></div>
                <span className="font-serif text-2xl text-silk/20">+</span>
                <div className="text-center"><span className="block font-serif text-4xl md:text-6xl text-gold-rose/80">6</span><span className="text-[10px] uppercase tracking-widest text-silk/40 mt-2 block">Freitas</span></div>
                <span className="font-serif text-2xl text-silk/20">+</span>
                <div className="text-center"><span className="block font-serif text-4xl md:text-6xl text-gold-rose/80">8</span><span className="text-[10px] uppercase tracking-widest text-silk/40 mt-2 block">Rossi</span></div>
                <span className="font-serif text-2xl text-silk/20">=</span>
                <div className="flex items-center gap-4 md:gap-6">
                    <span className="block font-serif text-4xl md:text-6xl text-silk/60">18</span>
                    <span className="text-2xl text-refined-gold">→</span>
                    <span className="block font-serif text-5xl md:text-7xl text-refined-gold drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]">9</span>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-moss-800/50 p-8 rounded border border-white/5 hover:border-refined-gold/20 transition-all duration-300">
                    <h3 className="font-serif text-xl text-refined-gold mb-4">Vibração Mestra 9</h3>
                    <span className="text-[10px] uppercase tracking-widest text-gold-rose mb-4 block">O Arquétipo da Sábia Humanitária</span>
                    <p className="text-sm text-silk/70 leading-relaxed mb-4">Tamires, o número 9 é o último degrau da numerologia. Ele contém a sabedoria de todos os números anteriores.</p>
                    <p className="text-sm text-silk/70 leading-relaxed">Ser um "9" significa que você é uma <strong>Alma Velha</strong>. Você veio para deixar um legado que beneficie o coletivo.</p>
                </div>
                <div className="bg-moss-800/50 p-8 rounded border border-white/5 hover:border-refined-gold/20 transition-all duration-300 relative overflow-hidden group">
                    <Zap className="absolute top-4 right-4 text-white/5 w-12 h-12 group-hover:text-refined-gold/10 transition-colors" />
                    <h3 className="font-serif text-xl text-white mb-1">A Grande Sincronicidade</h3>
                    <span className="text-[10px] uppercase tracking-widest text-gold-rose mb-4 block">Convergência Cósmica</span>
                    <ul className="space-y-3 mt-4">
                        <li className="text-sm text-silk/60 flex items-start gap-3"><span className="w-1.5 h-1.5 mt-1.5 bg-refined-gold rounded-full shrink-0"></span><span><strong>Sincronário:</strong> Águia (Visão Panorâmica).</span></li>
                        <li className="text-sm text-silk/60 flex items-start gap-3"><span className="w-1.5 h-1.5 mt-1.5 bg-refined-gold rounded-full shrink-0"></span><span><strong>Numerologia:</strong> 9 (Visão Universal).</span></li>
                        <li className="text-sm text-silk/60 flex items-start gap-3"><span className="w-1.5 h-1.5 mt-1.5 bg-refined-gold rounded-full shrink-0"></span><span><strong>Astrologia:</strong> Touro/Libra (Construção e Harmonia).</span></li>
                    </ul>
                </div>
            </div>
        </section>

        {/* 6. Soul Path */}
        <section>
          <div className="flex flex-col items-end mb-8">
            <h2 className="font-serif text-3xl md:text-4xl text-silk">Caminho da Alma</h2>
            <p className="text-xs text-right text-silk/40 max-w-xs mt-2">A Bússola do Destino.</p>
          </div>
          <div className="space-y-4">
            <PathCard 
              title="Nodo Norte em Áries"
              subtitle="Casa 7 • O Desafio Relacional"
              contentTitle="A Coragem de Liderar no Amor"
              content="Seu Ascendente em Libra quer paz, mas sua alma clama por Coragem. Sua evolução depende de ter voz ativa nas parcerias. Você não deve apenas agradar; deve aprender a dizer 'Eu quero'. O destino pede que você seja uma líder dentro das relações."
            />
            <PathCard 
              title="Saturno em Câncer"
              subtitle="Casa 10 • O Mestre da Realidade"
              contentTitle="A Autoridade que Nutre"
              content="Saturno no ponto mais alto indica sucesso. Em Câncer, ensina que a liderança precisa ter empatia. Você veio para construir estruturas que cuidam de pessoas. Sua autoridade vem da capacidade de proteger e nutrir com limites claros."
            />
            <PathCard 
              title="Quíron em Aquário"
              subtitle="Casa 4 • A Ferida Sagrada"
              contentTitle="A Cura do Pertencimento"
              content="Quíron na casa do Lar sugere que você pode ter se sentido 'estrangeira' em suas raízes. Ao aceitar que você é única e que seu 'lar' é o mundo, você cura essa ferida e se torna um refúgio para outras pessoas."
            />
          </div>
        </section>

        {/* 7. Tools & Rituals */}
        <section>
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-silk mb-2">Ferramentas de Poder</h2>
            <span className="text-xs uppercase tracking-widest text-gold-rose/50">A Farmácia da Alma</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
             <ToolItem icon={<Gem className="w-5 h-5"/>} title="Cornalina" category="Cristal • Fogo" description="Para o Nodo Norte em Áries. A pedra da coragem e da iniciativa." />
             <ToolItem icon={<Gem className="w-5 h-5"/>} title="Quartzo Rosa" category="Cristal • Amor" description="Essencial para sua natureza de Dupla Vênus. Nutre o amor próprio." />
             <ToolItem icon={<Sparkles className="w-5 h-5"/>} title="Ônix" category="Cristal • Proteção" description="Suporte para Saturno e Lua de Terra. Mantém o foco profissional." />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ToolItem icon={<Droplets className="w-5 h-5"/>} title="Gerânio" category="Aromaterapia • Feminino" description="Equilíbrio hormonal. Harmoniza com sua regência de Libra e Touro." />
            <ToolItem icon={<Droplets className="w-5 h-5"/>} title="Cipreste" category="Aromaterapia • Fluxo" description="Ajuda a lidar com mudanças e traz estrutura emocional (Saturno)." />
          </div>
          <div className="mt-12 bg-gradient-to-r from-moss-800 via-moss-800/80 to-moss-800 p-8 md:p-12 text-center rounded-sm border-t border-b border-refined-gold/10">
            <Flame className="w-6 h-6 text-refined-gold mx-auto mb-4 animate-pulse" />
            <h3 className="font-serif text-xl md:text-2xl text-silk mb-2">Ritual Sugerido: "O Espelho da Liderança"</h3>
            <span className="text-xs text-gold-rose/60 italic mb-6 block">Exercitando o Músculo da Iniciativa</span>
            <p className="text-sm md:text-base text-silk/70 max-w-2xl mx-auto leading-loose">
                Como sua missão é na Casa 7, mas pede a força de Áries, pratique tomar pequenas decisões sozinha. Convide para sair em vez de esperar. Escolha o filme. <strong className="text-silk font-serif">Relacionamentos saudáveis precisam de duas pessoas inteiras, não de duas metades.</strong>
            </p>
          </div>
        </section>

        {/* 8. Footer */}
        <footer className="pt-20 pb-8 text-center space-y-12">
          <div className="flex items-center justify-center gap-4 text-gold-rose/40">
            <div className="h-px w-12 bg-current"></div>
            <Star className="w-4 h-4" />
            <h3 className="font-serif text-2xl text-silk">Síntese Sagrada</h3>
            <Star className="w-4 h-4" />
            <div className="h-px w-12 bg-current"></div>
          </div>
          <div className="max-w-2xl mx-auto space-y-6">
            <p className="text-sm text-silk/60 leading-relaxed font-light italic">"Eu honro minha necessidade de harmonia, mas não calo minha verdade. Construo meu império com empatia e firmeza. Sou a Águia que vê, a Mão que constrói e o Coração que ama com coragem."</p>
            <p className="text-sm text-silk/60 leading-relaxed font-light mt-8">Tamires, navegar pela arquitetura da sua alma foi uma honra. Que as frequências reveladas aqui sirvam como alicerce para sua maior obra-prima: a sua própria vida.</p>
          </div>
          <div className="pt-12 border-t border-white/5 flex flex-col items-center justify-center gap-2">
            <p className="text-[10px] uppercase tracking-[0.2em] text-silk/30">Feito com magia e dados por</p>
            <p className="font-serif text-lg text-refined-gold/80">Marroc <span className="text-silk/40 text-xs font-sans not-italic">by CosmoVision</span></p>
            <p className="text-[10px] text-white/10 mt-4">© {new Date().getFullYear()} Marroc. Todos os direitos reservados.</p>
          </div>
        </footer>

      </div>
    </div>
  );
};

export default TamiresLayout;
