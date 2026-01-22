import React from 'react';
import { Star, Sun, Moon, Compass, Zap } from 'lucide-react';

const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`relative overflow-hidden backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_-10px_rgba(198,168,124,0.15)] ${className}`}>
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
    {children}
  </div>
);

const Reveal = ({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string, delay?: number }) => (
  <div 
    className={`animate-fade-in-up opacity-0 ${className}`}
    style={{ animationDelay: `${delay}ms` }}
  >
    {children}
  </div>
);

export default function SerenaLayout() {
  return (
    <div className="min-h-screen bg-cosmic-900 text-earth-cream selection:bg-earth-gold selection:text-cosmic-900 font-body">
      {/* Noise Texture Overlay */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-0 bg-noise mix-blend-overlay"></div>
      
      {/* Background Elements */}
      <div className="fixed top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(198,168,124,0.1),transparent_50%)] z-0 pointer-events-none" />

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden z-10">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <div className="flex justify-center mb-6">
             <Star className="text-earth-gold w-6 h-6 animate-pulse" />
          </div>
          
          <h2 className="text-earth-gold tracking-[0.3em] text-xs uppercase mb-6 font-medium">
            Análise Astrológica Premium
          </h2>
          
          <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl text-earth-cream mb-8 leading-tight">
            Serena <br />
            <span className="italic text-earth-gold/90 font-playfair">Barroca</span>
          </h1>

          <div className="relative inline-block py-8 px-4 md:px-12">
            <span className="absolute top-0 left-0 text-6xl text-earth-gold opacity-30 font-playfair">"</span>
            <p className="text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto text-earth-cream/90 italic">
              Minha mente desenha o futuro, minhas mãos constroem o presente.<br/>
              Transformo minhas sombras em sabedoria e minha voz em cura.
            </p>
            <span className="absolute bottom-0 right-0 text-6xl text-earth-gold opacity-30 font-playfair">"</span>
          </div>

          <div className="mt-12 animate-slow-float">
            <div className="h-24 w-[1px] bg-gradient-to-b from-earth-gold to-transparent mx-auto" />
          </div>
        </div>
      </section>

      {/* --- ÍNDICE CÓSMICO --- */}
      <section className="py-24 px-6 md:px-12 max-w-5xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between border-t border-earth-gold/20 pt-12">
          <div className="md:w-1/3 mb-12 md:mb-0">
            <h3 className="font-playfair text-3xl md:text-4xl text-earth-gold mb-4">Índice<br/>Cósmico</h3>
            <p className="text-xs font-sans text-white/50 uppercase tracking-widest">Navegação Estelar</p>
          </div>
          
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12 w-full">
            {["Tríade Fundamental", "Identidade Galáctica", "Frequência Sonora", "Caminho da Alma", "Ferramentas & Rituais"].map((topic, index) => (
              <div key={index} className="group flex items-center cursor-default">
                <span className="text-earth-copper/50 font-playfair text-lg mr-4 group-hover:text-earth-copper transition-colors">
                  0{index + 1}.
                </span>
                <span className="text-lg font-light border-b border-transparent group-hover:border-earth-gold/30 transition-all pb-1">
                  {topic}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PORTAIS FUNDAMENTAIS --- */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl mb-6">Portais Fundamentais</h2>
            <p className="text-white/60 font-light max-w-xl mx-auto">
              A Tríade. A estrutura primária da sua essência. Onde a luz incide, onde a emoção flui e onde a jornada começa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Reveal delay={100}>
              <Card className="h-full flex flex-col items-center text-center border-t-4 border-t-earth-gold">
                <div className="mb-6 p-4 rounded-full bg-earth-gold/10 text-earth-gold">
                  <Sun size={32} strokeWidth={1.5} />
                </div>
                <h3 className="font-playfair text-2xl text-earth-cream mb-2">Sol em Aquário</h3>
                <p className="text-earth-copper text-xs uppercase tracking-widest mb-6">O Limiar do Valor e da Voz</p>
                <p className="text-white/70 font-light leading-relaxed text-sm mb-4 italic">
                  “Transformando a própria Essência em Mensagem”
                </p>
                <p className="text-white/70 font-light leading-relaxed text-left text-sm">
                  Seu Sol brilha na transição exata entre a Casa 2 (Recursos) e a Casa 3 (Comunicação). Sua missão solar é transformar seus talentos inatos e valores pessoais em ideias, palavras e música. Você é uma visionária que materializa o futuro; onde outros veem ideias abstratas, você vê valor concreto.
                </p>
              </Card>
            </Reveal>

            <Reveal delay={200}>
              <Card className="h-full flex flex-col items-center text-center border-t-4 border-t-earth-copper md:mt-8">
                <div className="mb-6 p-4 rounded-full bg-earth-copper/10 text-earth-copper">
                  <Moon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="font-playfair text-2xl text-earth-cream mb-2">Lua em Virgem</h3>
                <p className="text-earth-copper text-xs uppercase tracking-widest mb-6">Meio do Céu</p>
                <p className="text-white/70 font-light leading-relaxed text-sm mb-4 italic">
                  “A Alma da Mestra Artesã”
                </p>
                <p className="text-white/70 font-light leading-relaxed text-left text-sm">
                  Enquanto sua mente viaja no futuro, seu coração busca o chão firme. Ter a Lua no ponto mais alto do mapa significa que sua alma se nutre através da realização. O perfeccionismo é sua linguagem de amor. O mundo vê suas emoções através do seu trabalho — uma imagem de competência, humildade e cuidado nos detalhes.
                </p>
              </Card>
            </Reveal>

            <Reveal delay={300}>
              <Card className="h-full flex flex-col items-center text-center border-t-4 border-t-earth-gold">
                <div className="mb-6 p-4 rounded-full bg-earth-gold/10 text-earth-gold">
                  <Compass size={32} strokeWidth={1.5} />
                </div>
                <h3 className="font-playfair text-2xl text-earth-cream mb-2">Ascendente Sagitário</h3>
                <p className="text-earth-copper text-xs uppercase tracking-widest mb-6">Com Plutão e Quíron</p>
                <p className="text-white/70 font-light leading-relaxed text-sm mb-4 italic">
                  “A Flecha da Transformação Profunda”
                </p>
                <p className="text-white/70 font-light leading-relaxed text-left text-sm">
                   Este ascendente é habitado por dois gigantes: Plutão e Quíron. Você emana uma aura de mistério e poder oculto, não apenas otimismo. Você é uma agente de transformação; onde chega, as coisas mudam. Sua jornada é curar a si mesma para se tornar uma bússola capaz de guiar outros.
                </p>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      {/* --- IDENTIDADE GALÁCTICA --- */}
      <section className="py-24 px-6 bg-gradient-to-b from-transparent via-earth-gold/5 to-transparent relative z-10">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <Card className="p-0 border-none bg-transparent shadow-none !overflow-visible">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                
                {/* Visual Side */}
                <div className="relative order-2 lg:order-1 flex justify-center">
    {/* Brilho de fundo (Mantido) */}
    <div className="absolute inset-0 bg-earth-gold/10 blur-[60px] rounded-full" />

    {/* O Container Circular */}
    <div className="relative aspect-square w-64 md:w-80 rounded-full border border-earth-gold/20 flex flex-col items-center justify-center bg-cosmic-800/50 backdrop-blur-sm p-4 group">
        
        {/* A Imagem do Oráculo */}
        {/* Adicionei uma transição suave para dar um efeito premium ao passar o mouse */}
        <div className="relative w-full h-full flex items-center justify-center p-4">
            <img 
                src="/images/kin176.png" 
                alt="Oráculo Kin 176" 
                className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(184,134,11,0.3)] group-hover:drop-shadow-[0_0_25px_rgba(184,134,11,0.5)] transition-all duration-500"
            />
        </div>

        {/* O Badge de Portal */}
        {/* Posicionado na base interna do círculo para não tapar o oráculo */}
        <div className="absolute bottom-6 px-4 py-1 bg-earth-gold/10 border border-earth-gold/30 rounded-full backdrop-blur-md">
            <span className="text-[10px] md:text-xs uppercase tracking-widest text-earth-gold font-medium">
                Portal de Ativação Galáctica
            </span>
        </div>

    </div>
</div>

                {/* Text Side */}
                <div className="order-1 lg:order-2">
                  <h2 className="font-playfair text-4xl md:text-5xl mb-2">Identidade Galáctica</h2>
                  <p className="text-earth-copper font-sans uppercase tracking-[0.2em] text-xs mb-8">Sincronário Maia</p>
                  
                  <div className="space-y-8">
                    <div className="pl-6 border-l border-earth-gold/30">
                      <h3 className="text-2xl font-medium text-earth-cream mb-1">Guerreiro Ressonante Amarelo</h3>
                      <p className="text-earth-gold/60 text-sm mb-4 font-mono">Selo Cib / Tom Ressonante</p>
                      <p className="text-white/70 font-light text-justify leading-relaxed text-sm">
                        Serena, você é um <strong>Canal de Inteligência Divina</strong>. O "Guerreiro" não luta com armas, mas com o destemor do espírito. Sua espada é o questionamento. O tom "Ressonante" transforma você em uma antena cósmica, capaz de canalizar inspirações e harmonizar o ambiente ao seu redor.
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-white/5 p-4 rounded-lg border border-white/5">
                        <h4 className="text-earth-copper text-xs uppercase tracking-widest mb-2">Oráculo do Destino</h4>
                        <ul className="text-white/60 text-xs space-y-1">
                          <li><span className="text-earth-cream">Guia:</span> Estrela Amarela</li>
                          <li><span className="text-earth-cream">Apoio:</span> Noite Azul</li>
                          <li><span className="text-earth-cream">Desafio:</span> Enlaçador de Mundos</li>
                          <li><span className="text-earth-cream">Oculto:</span> Serpente Vermelha</li>
                        </ul>
                      </div>

                      <div className="bg-white/5 p-4 rounded-lg border border-white/5">
                        <h4 className="text-blue-300/80 text-xs uppercase tracking-widest mb-2">Crono-Psi</h4>
                        <p className="text-earth-cream font-medium text-sm">Kin 131: Macaco Magnético Azul</p>
                        <p className="text-xs text-white/50 mt-2 leading-tight">
                          Sua alma vibra na energia da Magia e da Ilusão. Brinque com a realidade.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </Card>
          </Reveal>
        </div>
      </section>

      {/* --- FREQUÊNCIA SONORA --- */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-playfair text-4xl mb-8">Frequência Sonora</h2>
          
          <div className="max-w-3xl mx-auto mb-16 text-white/70 font-light leading-relaxed space-y-6 text-sm md:text-base">
            <p>
              O universo é composto de vibração e som. O nome que escolhemos não é apenas uma etiqueta; é um mantra contínuo. Auditamos a cabala do seu nome artístico e encontramos uma "coincidência" divina.
            </p>
            <div className="border-t border-white/5 pt-6">
              <h3 className="text-earth-gold font-playfair text-xl mb-2">A Anatomia Vibracional</h3>
              <p>
                Para entender a força do todo, precisamos olhar as partes que compõem sua identidade sonora:
              </p>
            </div>
          </div>
          
          {/* Math Visual */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 font-playfair text-5xl md:text-7xl text-earth-gold/90 mb-16">
            <div className="flex flex-col items-center group">
              <span className="group-hover:text-earth-cream transition-colors">8</span>
              <span className="text-xs font-sans text-white/30 mt-4 tracking-widest uppercase">Serena</span>
            </div>
            <span className="text-earth-copper font-light">+</span>
            <div className="flex flex-col items-center group">
               <span className="group-hover:text-earth-cream transition-colors">4</span>
               <span className="text-xs font-sans text-white/30 mt-4 tracking-widest uppercase">Barroca</span>
            </div>
            <span className="text-earth-copper font-light">=</span>
            <div className="relative">
              <span className="relative z-10 text-earth-cream">12 ➝ 3</span>
              <div className="absolute inset-0 bg-earth-gold/20 blur-xl -z-10" />
              <span className="text-xs font-sans text-white/30 mt-4 tracking-widest uppercase block">Expressão</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <Reveal delay={100}>
                <div className="p-8 border border-white/10 rounded-2xl bg-white/[0.02] h-full">
                    <h3 className="font-playfair text-2xl text-earth-copper mb-4">A Alquimia do Nome</h3>
                    <p className="text-white/70 font-light leading-relaxed mb-4 text-sm">
                        A união do <strong>Poder (8)</strong> com a <strong>Estrutura (4)</strong> resulta na Expressão Pura (3).
                    </p>
                    <p className="text-white/70 font-light leading-relaxed text-sm">
                        A vibração 3 é a frequência da luz, da criatividade desenfreada e do palco. É o número daqueles que vieram para brilhar e verbalizar emoções. Sob esta vibração, a vida pede socialização, otimismo e o uso da voz como ferramenta de impacto.
                    </p>
                </div>
              </Reveal>

              <Reveal delay={200}>
                <div className="p-8 border border-earth-gold/20 rounded-2xl bg-earth-gold/5 relative overflow-hidden h-full">
                    <div className="absolute top-4 right-4 text-earth-gold/20">
                        <Zap size={48} />
                    </div>
                    <h3 className="font-playfair text-2xl text-earth-gold mb-2">Stellium na Casa 3</h3>
                    <p className="text-xs text-earth-gold/60 uppercase tracking-widest mb-4">A Confirmação Cósmica</p>
                    <p className="text-white/80 font-light leading-relaxed text-sm mb-4">
                        A Numerologia do seu nome (3) é a chave que liga o motor mais potente do seu Mapa: um alinhamento raríssimo em <strong>Aquário</strong>.
                    </p>
                    <ul className="space-y-2 text-sm text-white/70 font-light">
                        <li className="flex items-start"><span className="text-earth-gold mr-2">✦</span> <span><strong>Sol:</strong> Canaliza valores para a voz.</span></li>
                        <li className="flex items-start"><span className="text-earth-gold mr-2">✦</span> <span><strong>Mercúrio:</strong> Mente elétrica e genial (Domicílio).</span></li>
                        <li className="flex items-start"><span className="text-earth-gold mr-2">✦</span> <span><strong>Netuno:</strong> Afina a voz com poesia e magnetismo.</span></li>
                    </ul>
                </div>
              </Reveal>
          </div>
        </div>
      </section>

      {/* --- CAMINHO DA ALMA --- */}
      <section className="py-24 px-6 bg-cosmic-800/30 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 flex flex-col md:flex-row justify-between items-end">
             <h2 className="font-playfair text-4xl">Caminho da Alma</h2>
             <p className="text-white/40 text-sm max-w-md text-right mt-4 md:mt-0">
                 A Bússola do Destino. De onde vim, para onde vou? Zonas de transição e movimento constante.
             </p>
          </div>

          <div className="space-y-6">
              {/* North Node */}
              <Reveal>
                  <Card className="flex flex-col md:flex-row gap-8 items-center bg-gradient-to-r from-white/5 to-transparent">
                      <div className="md:w-1/4 text-center md:text-left">
                          <h3 className="text-earth-gold font-playfair text-2xl">Nodo Norte em Leão</h3>
                          <p className="text-[10px] uppercase tracking-widest text-white/40 mt-1">O Portal da Casa 8 para a 9</p>
                      </div>
                      <div className="md:w-3/4 border-l border-white/10 md:pl-8 pt-4 md:pt-0 border-t md:border-t-0">
                           <p className="text-earth-cream font-serif italic mb-2">“Do Renascimento à Sabedoria Expandida”</p>
                           <p className="text-white/60 text-sm leading-relaxed">
                              Sua alma pede que você mergulhe nas profundezas das emoções humanas (Casa 8) para encontrar o seu brilho leonino. Mas você não deve guardar esse "ouro". A influência da Casa 9 exige que você transforme suas crises em Sabedoria para o mundo. Você veio para ser uma mentora, a "Fênix" que voa para longe.
                           </p>
                      </div>
                  </Card>
              </Reveal>

              {/* Saturn */}
              <Reveal>
                  <Card className="flex flex-col md:flex-row gap-8 items-center bg-gradient-to-r from-white/5 to-transparent">
                      <div className="md:w-1/4 text-center md:text-left">
                          <h3 className="text-earth-copper font-playfair text-2xl">Saturno em Touro</h3>
                          <p className="text-[10px] uppercase tracking-widest text-white/40 mt-1">O Limiar da Casa 6</p>
                      </div>
                      <div className="md:w-3/4 border-l border-white/10 md:pl-8 pt-4 md:pt-0 border-t md:border-t-0">
                           <p className="text-earth-cream font-serif italic mb-2">“A Profissionalização da Arte”</p>
                           <p className="text-white/60 text-sm leading-relaxed">
                              Saturno é o divisor de águas entre o hobby e a carreira. Em Touro, ele diz: "Não basta ter talento; é preciso ter método." Sua saúde física e sua rotina diária são a base do seu império. Trate seu corpo e seus rituais com sagrado respeito para garantir uma obra sólida.
                           </p>
                      </div>
                  </Card>
              </Reveal>

               {/* Chiron */}
               <Reveal>
                  <Card className="flex flex-col md:flex-row gap-8 items-center bg-gradient-to-r from-white/5 to-transparent">
                      <div className="md:w-1/4 text-center md:text-left">
                          <h3 className="text-earth-cream font-playfair text-2xl">Quíron em Sagitário</h3>
                          <p className="text-[10px] uppercase tracking-widest text-white/40 mt-1">Conjunto ao Ascendente</p>
                      </div>
                      <div className="md:w-3/4 border-l border-white/10 md:pl-8 pt-4 md:pt-0 border-t md:border-t-0">
                           <p className="text-earth-cream font-serif italic mb-2">“A Identidade Curadora”</p>
                           <p className="text-white/60 text-sm leading-relaxed">
                              A ferida sagrada na "vitrine" do mapa. Talvez você tenha se sentido "estrangeira" em sua própria vida. Essa sensibilidade é sua maior medicina. Ao curar a si mesma e bancar sua verdade filosófica, você se torna um farol para os outros.
                           </p>
                      </div>
                  </Card>
              </Reveal>
          </div>
        </div>
      </section>

      {/* --- FERRAMENTAS & RITUAIS --- */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl mb-4">Ferramentas & Rituais</h2>
            <p className="text-white/50 text-sm font-sans uppercase tracking-widest">Tecnologia da Terra para a Alma</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {[
                  { name: "Citrino", subtitle: "O Sol Cristalizado", desc: "Essencial para o Nodo Norte em Leão. Ativa o brilho pessoal e a coragem." },
                  { name: "Lápis Lazúli", subtitle: "A Pedra da Verdade", desc: "Conecta a mente (Casa 3) com a sabedoria superior. Facilita a expressão verbal." },
                  { name: "Turmalina", subtitle: "Proteção PAG", desc: "Vital para você que é um Portal. Filtra energias densas." },
                  { name: "Óleo de Alecrim", subtitle: "Foco Mental", desc: "Para foco mental e 'aterramento' das ideias geniais aquarianas." },
              ].map((item, index) => (
                  <Reveal key={index} className="h-full">
                      <Card className="h-full flex flex-col items-center justify-center p-6 bg-white/[0.03] hover:bg-white/[0.08] transition-colors border-none text-center">
                          <div className="w-12 h-12 rounded-full bg-earth-gold/10 mb-4 flex items-center justify-center text-earth-gold font-playfair italic text-lg border border-earth-gold/20">
                              {index + 1}
                          </div>
                          <h4 className="text-earth-cream font-medium mb-1">{item.name}</h4>
                          <p className="text-[10px] text-earth-copper uppercase tracking-wider mb-3">{item.subtitle}</p>
                          <p className="text-xs text-white/50 leading-relaxed">{item.desc}</p>
                      </Card>
                  </Reveal>
              ))}
          </div>

          <Reveal>
              <Card className="bg-gradient-to-br from-earth-gold/10 to-transparent border-earth-gold/20">
                  <div className="text-center max-w-2xl mx-auto">
                      <h3 className="font-playfair text-2xl text-earth-gold mb-2">Ritual Sugerido: "A Voz do Palco Solar"</h3>
                      <p className="text-white/70 font-light italic mb-6">Para desbloquear o destino</p>
                      <p className="text-white/80 leading-relaxed text-sm">
                          Seu Nodo pede expressão (Leão) e expansão (Casa 9). Quando se sentir estagnada, estude algo novo ou ensine algo que você ama. Use a voz para "transmitir conhecimento". Cante mantras, grave vídeos falando de suas filosofias ou escreva. O movimento de <strong>"Exteriorizar a Sabedoria"</strong> é o que desbloqueia seu caminho.
                      </p>
                  </div>
              </Card>
          </Reveal>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="relative bg-cosmic-900 border-t border-white/5 overflow-hidden z-10">
        <div className="py-24 px-6 text-center relative z-10">
          <Reveal>
              <div className="mb-8 text-2xl animate-pulse">✨</div>
              <h2 className="font-playfair text-3xl md:text-4xl text-earth-cream mb-8">✦ A Jornada Continua... ✦</h2>
              
              <div className="max-w-3xl mx-auto text-white/70 font-light leading-relaxed space-y-6 text-lg">
                  <p>
                      Serena, navegar pela arquitetura da sua alma foi uma honra.
                      Este mapa não é um destino final, mas um mapa do tesouro que vive dentro de você.
                  </p>
                  <p>
                      Que as frequências reveladas aqui — da inteligência do seu <strong>Guerreiro Galáctico</strong> à potência da sua <strong>Voz Aquariana</strong> — sirvam como notas musicais para a composição da sua maior obra-prima: a sua própria vida.
                  </p>
                  <p className="italic text-earth-gold">
                      Confie no seu ritmo, honre sua intuição e lembre-se: o universo não erra o compasso. Você está exatamente onde deveria estar.
                  </p>
              </div>
          </Reveal>
        </div>

        <div className="py-12 bg-black/20 text-center relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(198,168,124,0.05),transparent_50%)] pointer-events-none" />
          
          <p className="font-sans text-xs text-white/40 tracking-widest uppercase mb-2">
              Feito com magia e dados por
          </p>
          <h2 className="font-playfair text-2xl text-earth-gold tracking-wide mb-8">
              Marroc <span className="text-sm font-sans text-earth-cream/60 tracking-widest ml-1">by CosmoVision</span>
          </h2>
        </div>
      </footer>
    </div>
  );
}