import React from 'react';
import { Star, Sun, Moon, Compass, Flame, Sparkles, Shield, Zap, Gem, Heart, Wind, Waves, Eye } from 'lucide-react';

const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`relative overflow-hidden bg-white/[0.02] border border-nara-amethyst/20 rounded-sm p-8 shadow-xl transition-all duration-500 hover:-translate-y-1 hover:border-nara-amethyst/40 hover:shadow-[0_20px_40px_-10px_rgba(157,80,187,0.15)] ${className}`}>
    <div className="absolute inset-0 bg-gradient-to-br from-nara-amethyst/5 to-transparent pointer-events-none" />
    <div className="relative z-10">{children}</div>
  </div>
);

const Reveal = ({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string, delay?: number }) => (
  <div className={`animate-fade-in-up opacity-0 ${className}`} style={{ animationDelay: `${delay}ms` }}>
    {children}
  </div>
);

const SectionTitle = ({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) => (
  <div className="text-center mb-16">
    {eyebrow && <p className="text-nara-amethyst-soft text-xs uppercase tracking-[0.3em] mb-4">{eyebrow}</p>}
    <h2 className="font-playfair text-4xl md:text-5xl mb-6">{title}</h2>
    {description && <p className="text-white/60 font-light max-w-2xl mx-auto">{description}</p>}
  </div>
);

export default function NaraLayout() {
  return (
    <div className="min-h-screen bg-nara-deep-indigo text-nara-silver selection:bg-nara-amethyst selection:text-white font-body overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-nara-amethyst/10 rounded-full blur-[150px] opacity-30" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-nara-moon-glow/10 rounded-full blur-[120px] opacity-20" />
        <div className="absolute inset-0 opacity-[0.03] bg-noise mix-blend-overlay" />
      </div>

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden z-10">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <div className="flex justify-center mb-6">
            <Sparkles className="text-nara-amethyst w-6 h-6 animate-pulse" />
          </div>
          <h2 className="text-nara-amethyst-soft tracking-[0.3em] text-xs uppercase mb-6 font-medium">Soberania Cósmica Premium</h2>
          <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl text-white mb-8 leading-tight">
            Lady Nara <br />
            <span className="italic text-nara-amethyst/90 font-playfair">Freitas dos Reis</span>
          </h1>
          <p className="text-sm md:text-base tracking-widest text-white/60 mt-6 font-light uppercase">9 de Dezembro de 1999 • 16:19 BRST • Mangaratiba, RJ</p>
          <p className="text-xs text-white/40 mt-2 uppercase tracking-widest">Ascendente Touro 5°18' • Sol Sagitário 17°13' Casa 8 • Lua Capricórnio 6°56' Casa 9</p>
          <div className="relative inline-block py-8 px-4 md:px-12 mt-8">
            <span className="absolute top-0 left-0 text-6xl text-nara-amethyst opacity-30 font-playfair">"</span>
            <p className="text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto text-white/90 italic">
              A Aristocrata da Terra & Guardiã do Coração.<br />
              Beleza clássica, firmeza de rocha e fogo alquímico que transforma sombras em ouro.
            </p>
            <span className="absolute bottom-0 right-0 text-6xl text-nara-amethyst opacity-30 font-playfair">"</span>
          </div>
          <div className="mt-12 animate-slow-float">
            <div className="h-24 w-[1px] bg-gradient-to-b from-nara-amethyst to-transparent mx-auto" />
          </div>
        </div>
      </section>

      {/* ÍNDICE */}
      <section className="py-24 px-6 md:px-12 max-w-5xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between border-t border-nara-amethyst/20 pt-12">
          <div className="md:w-1/3 mb-12 md:mb-0">
            <h3 className="font-playfair text-3xl md:text-4xl text-nara-amethyst mb-4">Arquitetura<br/>da Alma</h3>
            <p className="text-xs font-sans text-white/50 uppercase tracking-widest">Navegação de Frequência</p>
          </div>
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12 w-full">
            {[
              "A Tríade de Sustentação",
              "O Altar da Casa 8",
              "A Grande Cruz Fixa",
              "A Vanguarda do Meio do Céu",
              "A Nobreza do Silêncio",
              "Sincronia Galáctica",
              "Casas & Terrenos de Vida",
              "Aspectos que Moldam o Destino",
              "Elementos & Modalidades",
              "Perfil de Estilo Cósmico",
            ].map((topic, index) => (
              <div key={index} className="group flex items-center cursor-default">
                <span className="text-nara-amethyst-soft/50 font-playfair text-lg mr-4 group-hover:text-nara-amethyst transition-colors">{String(index + 1).padStart(2, '0')}.</span>
                <span className="text-lg font-light border-b border-transparent group-hover:border-nara-amethyst/30 transition-all pb-1">{topic}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRÍADE FUNDAMENTAL */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <SectionTitle eyebrow="Os Três Pilares" title="A Tríade de Sustentação" description="Onde a matéria encontra a visão: a base estrutural que permite a Nara habitar o mundo com graça e autoridade." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Reveal delay={100}>
              <Card className="h-full flex flex-col items-center text-center border-t-4 border-t-nara-amethyst">
                <div className="mb-6 p-4 rounded-full bg-nara-amethyst/10 text-nara-amethyst">
                  <Sun size={32} strokeWidth={1.5} />
                </div>
                <h3 className="font-playfair text-2xl text-white mb-2">Sol em Sagitário</h3>
                <p className="text-nara-amethyst-soft text-xs uppercase tracking-widest mb-6">17°13' • Casa 8 • A Alquimia do Ser</p>
                <p className="text-white/70 font-light leading-relaxed text-sm mb-4 italic">“A verdade que liberta através da transmutação”</p>
                <p className="text-white/70 font-light leading-relaxed text-left text-sm">
                  Seu Sol não habita a superfície. Na <strong className="text-white">Casa 8</strong> — o laboratório da alma — a identidade de Nara é forjada no fogo da transformação. Ela não busca apenas o conhecimento, mas a <strong className="text-white">verdade visceral</strong>. É a consciência que ilumina as sombras e as transforma em sabedoria.
                </p>
                <p className="text-white/50 text-xs mt-4 leading-relaxed">
                  Em conjunção com Plutão (10°36') e Quíron (8°53'), este stellium na Casa 8 forma um dos posicionamentos mais poderosos da astrologia. Nara possui o dom da alquimia emocional: tudo o que toca com intenção de cura é transmutado em poder consciente.
                </p>
              </Card>
            </Reveal>
            <Reveal delay={200}>
              <Card className="h-full flex flex-col items-center text-center border-t-4 border-t-nara-moon-glow md:mt-8">
                <div className="mb-6 p-4 rounded-full bg-nara-moon-glow/10 text-nara-moon-glow">
                  <Moon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="font-playfair text-2xl text-white mb-2">Lua em Capricórnio</h3>
                <p className="text-nara-amethyst-soft text-xs uppercase tracking-widest mb-6">6°56' • Casa 9 • A Nobreza do Silêncio</p>
                <p className="text-white/70 font-light leading-relaxed text-sm mb-4 italic">“Segurança na competência, paz na integridade”</p>
                <p className="text-white/70 font-light leading-relaxed text-left text-sm">
                  A Lua em Capricórnio confere a Nara uma <strong className="text-white">maturidade emocional precoce</strong>. Enquanto outros oscilam, ela ancora. Sua segurança não vem do conforto externo, mas da própria integridade e do autodomínio.
                </p>
                <p className="text-white/50 text-xs mt-4 leading-relaxed">
                  Na Casa 9, a sensibilidade é canalizada para a construção de ideais sólidos, ética impecável e cuidado prático com aqueles que ama. Sextil exato com Vênus (2°29' de orbe) e trígono com o Ascendente (1°38') criam uma fluência rara entre emoção, beleza e presença física.
                </p>
              </Card>
            </Reveal>
            <Reveal delay={300}>
              <Card className="h-full flex flex-col items-center text-center border-t-4 border-t-nara-amethyst">
                <div className="mb-6 p-4 rounded-full bg-nara-amethyst/10 text-nara-amethyst">
                  <Compass size={32} strokeWidth={1.5} />
                </div>
                <h3 className="font-playfair text-2xl text-white mb-2">Ascendente em Touro</h3>
                <p className="text-nara-amethyst-soft text-xs uppercase tracking-widest mb-6">5°18' • O Portal da Serenidade</p>
                <p className="text-white/70 font-light leading-relaxed text-sm mb-4 italic">“Presença magnética, ritmo sagrado”</p>
                <p className="text-white/70 font-light leading-relaxed text-left text-sm">
                  A máscara do mundo é de calma e beleza clássica. Touro traz a Nara a capacidade de materializar a visão, transformando a inspiração etérea em <strong className="text-white">resultados tangíveis e duradouros</strong>.
                </p>
                <p className="text-white/50 text-xs mt-4 leading-relaxed">
                  Com Saturno retrógrado em Touro a pouco mais de 5° do Ascendente, sua presença física é marcante, imponente e aristocrática. Transmite confiabilidade, estabilidade e refinamento. Postura serena, gestos nobres, movimentos harmoniosos.
                </p>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SINCRONIA GALÁTICA */}
      <section className="py-24 px-6 bg-gradient-to-b from-transparent via-nara-amethyst/5 to-transparent relative z-10">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <Card className="p-0 border-none bg-transparent shadow-none !overflow-visible">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative order-2 lg:order-1 flex justify-center">
                  <div className="absolute inset-0 bg-nara-amethyst/10 blur-[60px] rounded-full" />
                  <div className="relative aspect-square w-64 md:w-80 rounded-full border border-nara-amethyst/20 flex flex-col items-center justify-center bg-nara-deep-indigo/50 backdrop-blur-sm p-4 group">
                    <div className="relative w-full h-full flex items-center justify-center p-4">
                      <img src="/images/kin130.png" alt="Oráculo Kin 130" className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(157,80,187,0.3)] group-hover:drop-shadow-[0_0_25px_rgba(157,80,187,0.5)] transition-all duration-500" />
                    </div>
                    <div className="absolute bottom-6 px-4 py-1 bg-nara-amethyst/10 border border-nara-amethyst/30 rounded-full backdrop-blur-md">
                      <span className="text-[10px] md:text-xs uppercase tracking-widest text-nara-amethyst font-medium">Portal do Amor Cósmico</span>
                    </div>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <h2 className="font-playfair text-4xl md:text-5xl mb-2">Sincronia Galáctica</h2>
                  <p className="text-nara-amethyst-soft font-sans uppercase tracking-[0.2em] text-xs mb-8">Dreamspell • Sincronário das 13 Luas</p>

                  <div className="pl-6 border-l border-nara-amethyst/30 mb-8">
                    <h3 className="text-2xl font-medium text-white mb-1">Cachorro Cósmico Branco</h3>
                    <p className="text-nara-amethyst/60 text-sm mb-2 font-mono">KIN 130 • Coração, Amor & Lealdade • Tom 13: Presença/Transcendência</p>
                    <p className="text-white/50 text-xs italic mb-3">“Eu persevero para amar; transcendendo a lealdade; selo o processo do coração com o tom cósmico da presença.”</p>
                    <p className="text-white/70 font-light text-justify leading-relaxed text-sm">
                      Nara, sua assinatura galáctica não é simplesmente “amar”. É aprender <strong className="text-white">o que permanece do amor quando ele atravessa o tempo, as provas, as expectativas e o apego</strong>. O Cachorro fala de coração + lealdade; o Tom Cósmico, de transcendência. Juntos, eles perguntam: <em>até onde posso permanecer leal ao amor sem me tornar prisioneiro da forma que o amor assumiu?</em>
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-white/5 p-4 rounded-sm border border-white/5">
                      <h4 className="text-nara-amethyst-soft text-xs uppercase tracking-widest mb-3">Oráculo do KIN 130</h4>
                      <ul className="text-white/60 text-xs space-y-2">
                        <li><span className="text-white">Destino:</span> Cachorro Cósmico Branco — KIN 130</li>
                        <li><span className="text-white">Guia:</span> Mago Cósmico Branco — KIN 234</li>
                        <li><span className="text-white">Apoio:</span> Lua Cósmica Vermelha — KIN 169</li>
                        <li><span className="text-white">Desafio:</span> Sol Cósmico Amarelo — KIN 260</li>
                        <li><span className="text-white">Oculto:</span> Macaco Magnético Azul — KIN 131</li>
                      </ul>
                      <p className="text-[10px] text-white/30 mt-3 italic">Oráculo calculado segundo a matriz padrão do Dreamspell de José Argüelles.</p>
                    </div>
                    <div className="bg-white/5 p-4 rounded-sm border border-white/5">
                      <h4 className="text-nara-moon-glow/80 text-xs uppercase tracking-widest mb-3">Frequência Central</h4>
                      <p className="text-white font-medium text-sm mb-2">AMOR + LEALDADE + PRESENÇA → TRANSCENDÊNCIA</p>
                      <p className="text-xs text-white/50 leading-relaxed">Amar sem aprisionar. Permanecer sem possuir. Entregar-se sem perder a presença.</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="pl-4 border-l-2 border-nara-amethyst/20">
                      <h4 className="text-white text-sm font-medium mb-1">Guia — Mago Cósmico Branco</h4>
                      <p className="text-white/60 text-xs leading-relaxed">O coração guiado pela presença. Não é “fazer mais pelo outro”, mas <strong className="text-white">estar suficientemente presente para perceber o que realmente existe</strong>. O Mago recebe. O Mago observa. O Mago entra no tempo presente.</p>
                    </div>
                    <div className="pl-4 border-l-2 border-nara-moon-glow/20">
                      <h4 className="text-white text-sm font-medium mb-1">Apoio — Lua Cósmica Vermelha</h4>
                      <p className="text-white/60 text-xs leading-relaxed">Cachorro diz “eu permaneço”. Lua diz “eu deixo fluir”. A maturidade é fazer ambos: ter coração sem transformar lealdade em retenção. Amar não significa segurar.</p>
                    </div>
                    <div className="pl-4 border-l-2 border-yellow-500/30">
                      <h4 className="text-white text-sm font-medium mb-1">Desafio — Sol Cósmico Amarelo</h4>
                      <p className="text-white/60 text-xs leading-relaxed">A antípoda pergunta: <em>seu coração consegue continuar irradiando mesmo quando ninguém específico está recebendo essa luz?</em> É a passagem do amor como vínculo para o amor como estado de ser.</p>
                    </div>
                    <div className="pl-4 border-l-2 border-blue-500/30">
                      <h4 className="text-white text-sm font-medium mb-1">Oculto — Macaco Magnético Azul</h4>
                      <p className="text-white/60 text-xs leading-relaxed">A chave secreta do mapa. Quando o Cachorro leva o amor até o limite, o que aparece atrás? A criança, a brincadeira, a espontaneidade. <strong className="text-white">O amor suficientemente maduro volta a brincar.</strong></p>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-white/[0.03] border border-white/10 rounded-sm">
                    <p className="text-white/70 text-xs leading-relaxed italic">
                      KIN 130, no Dreamspell de José Argüelles, marca a fronteira matemática antes do KIN 131. É o momento em que transcendência (Tom 13) se torna propósito (Tom 1). Para Nara, isso traduz a capacidade de transformar o fim de cada ciclo em início consciente — sem drama, sem apego, com presença.<br/><br/><span className="text-white/50">Nota: Dreamspell e Tzolk'in maia histórico são sistemas diferentes com raízes simbólicas relacionadas.</span>
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </Reveal>
        </div>
      </section>

      {/* GRANDE CRUZ FIXA */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <SectionTitle eyebrow="Padrão Geométrico Raro" title="A Grande Cruz Fixa" description="Uma configuração rara e precisa nos primeiros graus dos signos fixos de Touro, Leão, Escorpião e Aquário." />
          <div className="max-w-3xl mx-auto mb-16 text-white/70 font-light leading-relaxed space-y-6 text-sm md:text-base">
            <p>Nara possui uma <strong className="text-white">Grande Cruz Fixa</strong> muito precisa. Quatro ventos cósmicos puxam para direções opostas — Touro (terra), Leão (fogo), Escorpião (água) e Aquário (ar).</p>
            <p>Para a maioria, isso seria tensão insuportável. Para Nara, é a fonte de sua <strong className="text-white">sustentação</strong>. Ela não é apenas resiliente; ela é o eixo onde o caos se organiza.</p>
            <p className="text-white/50 text-xs">
              Nota técnica: a cruz é formada por <strong className="text-white">Ascendente (Touro) × Nodo Norte (Leão) × Vênus (Escorpião) × Netuno (Aquário)</strong>. Ou seja, envolve dois corpos planetários, o Nodo Norte e um ângulo — não quatro planetas. Mesmo assim, geometricamente, ela é real e marcante.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <Reveal delay={100}>
              <Card className="h-full text-center border-t-2 border-t-nara-amethyst">
                <Shield className="w-8 h-8 text-nara-amethyst mx-auto mb-4" />
                <h3 className="font-playfair text-xl text-white mb-2">Touro</h3>
                <p className="text-[10px] uppercase tracking-widest text-nara-amethyst-soft mb-4">Ascendente 5° • Saturno 11° • Raiz</p>
                <p className="text-white/70 font-light text-sm">A estabilidade do corpo, a beleza da matéria e a firmeza da rocha sagrada.</p>
              </Card>
            </Reveal>
            <Reveal delay={200}>
              <Card className="h-full text-center border-t-2 border-t-nara-moon-glow mt-0 md:mt-8">
                <Heart className="w-8 h-8 text-nara-moon-glow mx-auto mb-4" />
                <h3 className="font-playfair text-xl text-white mb-2">Leão</h3>
                <p className="text-[10px] uppercase tracking-widest text-nara-amethyst-soft mb-4">Nodo Norte 4° • IC 6° • Coração</p>
                <p className="text-white/70 font-light text-sm">A realeza do afeto, a coragem de ser luz e o orgulho das raízes.</p>
              </Card>
            </Reveal>
            <Reveal delay={300}>
              <Card className="h-full text-center border-t-2 border-t-nara-amethyst">
                <Eye className="w-8 h-8 text-nara-amethyst mx-auto mb-4" />
                <h3 className="font-playfair text-xl text-white mb-2">Escorpião</h3>
                <p className="text-[10px] uppercase tracking-widest text-nara-amethyst-soft mb-4">Vênus 4° • Mercúrio 28° • Profundidade</p>
                <p className="text-white/70 font-light text-sm">A lealdade visceral, a visão oracular e o amor que transforma.</p>
              </Card>
            </Reveal>
            <Reveal delay={400}>
              <Card className="h-full text-center border-t-2 border-t-nara-moon-glow mt-0 md:mt-8">
                <Wind className="w-8 h-8 text-nara-moon-glow mx-auto mb-4" />
                <h3 className="font-playfair text-xl text-white mb-2">Aquário</h3>
                <p className="text-[10px] uppercase tracking-widest text-nara-amethyst-soft mb-4">MC 6° • Marte 10° • Urano 13°</p>
                <p className="text-white/70 font-light text-sm">A vanguarda da mente, a liberdade do espírito e a liderança humanitária. Netuno está na Casa 9, conjunto ao MC (~3°55').</p>
              </Card>
            </Reveal>
          </div>
          <Reveal>
            <Card className="bg-gradient-to-br from-nara-amethyst/10 to-transparent border-nara-amethyst/20">
              <div className="text-center max-w-3xl mx-auto">
                <h3 className="font-playfair text-2xl text-nara-amethyst mb-4">A Cruz de Ouro & Sustentação dos 4 Guardiões</h3>
                <p className="text-white/70 leading-relaxed text-sm">A Grande Cruz Fixa une quatro territórios vitais: o corpo (Touro), a alma (Leão), o outro (Escorpião) e a visão (Aquário). Nara foi talhada para aprender o equilíbrio dinâmico entre esses polos, transformando tensão em presença.</p>
                <p className="text-white/50 text-sm mt-4 italic">Como harmonizar: integrar a nobreza de Leão no lar, a sabedoria de Escorpião nos afetos, a estabilidade de Touro no corpo e a visão de Aquário na carreira.</p>
              </div>
            </Card>
          </Reveal>
        </div>
      </section>

      {/* O ALTAR DA CASA 8 */}
      <section className="py-24 px-6 bg-nara-deep-indigo/50 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 flex flex-col md:flex-row justify-between items-end">
            <h2 className="font-playfair text-4xl">O Altar da Casa 8</h2>
            <p className="text-white/40 text-sm max-w-md text-right mt-4 md:mt-0">A Alquimia da Fênix Sagrada.</p>
          </div>
          <div className="space-y-6">
            <Reveal>
              <Card className="flex flex-col md:flex-row gap-8 items-center bg-gradient-to-r from-nara-amethyst/10 to-transparent">
                <div className="md:w-1/4 text-center md:text-left">
                  <h3 className="text-nara-amethyst font-playfair text-2xl">Sol & Plutão</h3>
                  <p className="text-[10px] uppercase tracking-widest text-white/40 mt-1">Sagitário • Casa 8 • Regeneração</p>
                </div>
                <div className="md:w-3/4 border-l border-white/10 md:pl-8 pt-4 md:pt-0 border-t md:border-t-0">
                  <p className="text-white font-serif italic mb-2">“O poder de transformar a dor em degrau de evolução”</p>
                  <p className="text-white/60 text-sm leading-relaxed">A conjunção Sol-Plutão na Casa 8 (6°37' de orbe) cria uma consciência indestrutível. Nara não teme a crise; ela a utiliza como combustível. Possui a capacidade rara de descer ao abismo — enfrentar as sombras mais profundas — e retornar com a luz da verdade.</p>
                </div>
              </Card>
            </Reveal>
            <Reveal>
              <Card className="flex flex-col md:flex-row gap-8 items-center bg-gradient-to-r from-nara-moon-glow/10 to-transparent">
                <div className="md:w-1/4 text-center md:text-left">
                  <h3 className="text-nara-moon-glow font-playfair text-2xl">Quíron na 8</h3>
                  <p className="text-[10px] uppercase tracking-widest text-white/40 mt-1">A Medicina da Alma</p>
                </div>
                <div className="md:w-3/4 border-l border-white/10 md:pl-8 pt-4 md:pt-0 border-t md:border-t-0">
                  <p className="text-white font-serif italic mb-2">“Curar o outro através da própria superação”</p>
                  <p className="text-white/60 text-sm leading-relaxed">Quíron aqui confere a Nara o dom da empatia oracular. Ela sente a ferida do outro e, porque já curou a sua própria, sabe exatamente qual frequência de luz é necessária para a libertação alheia.</p>
                </div>
              </Card>
            </Reveal>
            <Reveal>
              <Card className="flex flex-col md:flex-row gap-8 items-center bg-gradient-to-r from-white/5 to-transparent">
                <div className="md:w-1/4 text-center md:text-left">
                  <h3 className="text-white font-playfair text-2xl">Vanguarda no MC</h3>
                  <p className="text-[10px] uppercase tracking-widest text-white/40 mt-1">Urano, Marte & Netuno em Aquário</p>
                </div>
                <div className="md:w-3/4 border-l border-white/10 md:pl-8 pt-4 md:pt-0 border-t md:border-t-0">
                  <p className="text-white font-serif italic mb-2">“Quebrar moldes para criar novos mundos”</p>
                  <p className="text-white/60 text-sm leading-relaxed">No ponto mais alto do mapa (Meio do Céu em Aquário 6°22'), a conjunção Marte-Urano (3°27') na Casa 10 marca Nara como uma visionária. Netuno está na Casa 9, conjunto ao MC (~3°55'), trazendo sonho e ideal à direção de vida. Ela não segue tendências; ela as cria.</p>
                </div>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ASPECTOS */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <SectionTitle eyebrow="Diálogos Estelares" title="Aspectos que Moldam o Destino" description="As conversas entre planetas que desenham a sinfonia única da alma de Nara." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Vênus ☍ Ascendente",
                subtitle: "Oposição 0°51' • Magnetismo Hipnótico",
                text: "Vênus em Escorpião em oposição quase exata ao Ascendente em Touro cria uma presença estética inesquecível e relacionamentos que marcam a vida para sempre."
              },
              {
                title: "Saturno □ Marte",
                subtitle: "Quadratura 0°56' • Determinação de Ferro",
                text: "Saturno na Casa 1 em quadratura exata com Marte no MC confere determinação de ferro e resistência inabalável para construir realizações de longo prazo."
              },
              {
                title: "Saturno □ Urano",
                subtitle: "Quadratura 2°30' • Tradição × Vanguarda",
                text: "O encontro entre a tradição sólida e a vanguarda revolucionária. Habilidade rara para modernizar estruturas antigas e criar inovações seguras no tempo."
              },
              
              {
                title: "Lua ⚹ Vênus",
                subtitle: "Sextil 2°29' • Elegância & Afeto Sólido",
                text: "Lua em Capricórnio em sextil com Vênus em Escorpião: elegância clássica, bom gosto refinado e relações baseadas em respeito mútuo."
              },
              {
                title: "Lua △ Ascendente",
                subtitle: "Trígono 1°38' • Serenidade Magnética",
                text: "Lua na Casa 9 em trígono quase exato com o Ascendente em Touro: harmonia entre emoção e presença física. Porto sereno que acalma o ambiente."
              },
            ].map((aspect, idx) => (
              <Reveal key={idx} delay={idx * 100}>
                <Card className="h-full">
                  <h3 className="font-playfair text-xl text-white mb-1">{aspect.title}</h3>
                  <p className="text-nara-amethyst-soft text-xs uppercase tracking-widest mb-4">{aspect.subtitle}</p>
                  <p className="text-white/60 text-sm leading-relaxed">{aspect.text}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CASAS */}
      <section className="py-24 px-6 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent relative z-10">
        <div className="max-w-6xl mx-auto">
          <SectionTitle eyebrow="Os Dois Terrenos" title="Casas Astrológicas" description="Os setores da vida onde a energia planetária de Nara se expressa e se realiza." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { house: "1", title: "Ascendente em Touro", area: "Identidade & Presença", text: "Beleza clássica, postura serena, elegância atemporal e magnetismo tátil irresistível. Saturno conjunto confere presença aristocrática." },
              { house: "2", title: "Casa 2 em Gêmeos", area: "Recursos & Finanças", text: "Habilidade para gerar valor através da comunicação, inteligência versátil, redes de contatos e ideias multifacetadas." },
              { house: "3", title: "Casa 3 em Câncer", area: "Comunicação Próxima", text: "Comunicação calorosa e intuitiva; memória prodigiosa e forte vínculo emocional com histórias e aprendizados." },
              { house: "4", title: "IC em Leão", area: "Lar & Raízes", text: "Raízes nobres, generosas e iluminadas. O lar é seu castelo sagrado de acolhimento e celebração." },
              { house: "5", title: "Casa 5 em Virgem", area: "Criatividade & Prazer", text: "Expressão criativa refinada, perfeccionista e de bom gosto requintado; romances autênticos." },
              { house: "6", title: "Casa 6 em Libra", area: "Rotina & Saúde", text: "Ambiente de trabalho esteticamente harmonioso; busca pelo equilíbrio corporal e bem-estar mental." },
              { house: "7", title: "DC em Escorpião", area: "Relacionamentos", text: "Busca parceiros de alma, leais até o fim, intensos e com cumplicidade emocional inabalável." },
              { house: "8", title: "Casa 8 em Sagitário", area: "Transformação & Poder", text: "Epicentro do poder: Sol, Plutão e Quíron. Capacidade de renascer das cinzas e prosperar." },
              { house: "9", title: "Casa 9 em Capricórnio", area: "Filosofia & Expansão", text: "Visão de mundo sábia, realista e edificada em princípios atemporais de integridade." },
              { house: "10", title: "MC em Aquário", area: "Carreira & Legado", text: "Líder visionária, inovadora e progressista. Marte, Urano em domicílio e Netuno no topo." },
              { house: "11", title: "Casa 11 em Peixes", area: "Amizades & Ideais", text: "Círculo conectado pela empatia espiritual; capacidade de sonhar e apoiar causas nobres." },
              { house: "12", title: "Casa 12 em Áries", area: "Espiritualidade Oculta", text: "Força guerreira interior que surge em silêncio e meditação com poder milagroso." },
            ].map((h, idx) => (
              <Reveal key={idx} delay={idx * 50}>
                <Card className="h-full">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 rounded-full bg-nara-amethyst/10 flex items-center justify-center text-nara-amethyst text-sm font-playfair border border-nara-amethyst/20">{h.house}</span>
                    <div>
                      <h3 className="font-playfair text-lg text-white leading-tight">{h.title}</h3>
                      <p className="text-[10px] text-nara-amethyst-soft uppercase tracking-widest">{h.area}</p>
                    </div>
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed">{h.text}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ELEMENTOS & MODALIDADES */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Reveal>
              <div>
                <h2 className="font-playfair text-3xl mb-8 text-center lg:text-left">Elementos</h2>
                <div className="space-y-4">
                  {[
                    { name: "Ar", pct: "33%", desc: "Visão de vanguarda, originalidade, mente sistêmica e liberdade.", color: "bg-sky-400" },
                    { name: "Terra", pct: "25%", desc: "Pragmatismo, elegância clássica, solidez material e confiabilidade.", color: "bg-emerald-500" },
                    { name: "Fogo", pct: "25%", desc: "Entusiasmo, coragem, visão expansiva e busca ardente pela verdade.", color: "bg-orange-500" },
                    { name: "Água", pct: "17%", desc: "Profundidade psicológica, sensibilidade oracular e lealdade visceral.", color: "bg-indigo-400" },
                  ].map((el, idx) => (
                    <div key={idx} className="bg-white/[0.03] border border-white/10 rounded-sm p-5">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white font-medium flex items-center gap-2"><span className={`w-2 h-2 rounded-full ${el.color}`} />{el.name}</span>
                        <span className="text-nara-amethyst-soft text-sm">{el.pct}</span>
                      </div>
                      <p className="text-white/50 text-sm leading-relaxed">{el.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal>
              <div>
                <h2 className="font-playfair text-3xl mb-8 text-center lg:text-left">Modalidades</h2>
                <div className="space-y-4">
                  {[
                    { name: "Fixo", pct: "50%", desc: "Poder de sustentação, lealdade lendária, resistência e determinação inabalável.", color: "bg-yellow-500" },
                    { name: "Mutável", pct: "25%", desc: "Flexibilidade mental, busca filosófica e capacidade de adaptação às transformações.", color: "bg-purple-500" },
                    { name: "Cardinal", pct: "25%", desc: "Iniciativa, liderança executiva e impulso realizador.", color: "bg-red-500" },
                  ].map((mod, idx) => (
                    <div key={idx} className="bg-white/[0.03] border border-white/10 rounded-sm p-5">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white font-medium flex items-center gap-2"><span className={`w-2 h-2 rounded-full ${mod.color}`} />{mod.name}</span>
                        <span className="text-nara-amethyst-soft text-sm">{mod.pct}</span>
                      </div>
                      <p className="text-white/50 text-sm leading-relaxed">{mod.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* OS 6 PODERES */}
      <section className="py-24 px-6 bg-gradient-to-b from-nara-amethyst/5 via-transparent to-nara-amethyst/5 relative z-10">
        <div className="max-w-6xl mx-auto">
          <SectionTitle eyebrow="Essência de Lady Nara" title="Os Seis Poderes" description="As frequências centrais que regem sua encarnação e seu modo de mover o mundo." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "🐕",
                title: "O Poder da Lealdade do Coração",
                subtitle: "KIN 130 & Vênus em Escorpião",
                quote: "A lealdade do coração é a âncora sagrada que vence qualquer tempestade.",
                text: "Capacidade de sustentar laços eternos, proteger sua família de alma e oferecer um amor incondicional que cura, regenera e ampara."
              },
              {
                icon: "🔥",
                title: "A Fênix Alquímica",
                subtitle: "Sol, Plutão e Quíron na Casa 8",
                quote: "Transformar a dor em poder e a crise em ouro é a verdadeira alquimia da alma.",
                text: "A maestria de transformar desafios em sabedoria. A conjunção mais precisa aqui é Plutão-Quíron (~1°43'), com o Sol participando da concentração sagitariana por uma conjunção mais ampla (~6°37')."
              },
              {
                icon: "🏛️",
                title: "A Rocha Inabalável",
                subtitle: "Ascendente em Touro conjunto Saturno",
                quote: "A verdadeira nobreza repousa na constância, na paciência e na serenidade dos passos.",
                text: "Firmeza serena e aristocrática que transmite segurança. Saturno na Casa 1, a pouco mais de 5° do Ascendente, traz maturação e estrutura à identidade."
              },
              {
                icon: "⚡",
                title: "A Visão do Futuro",
                subtitle: "MC, Marte, Urano e Netuno em Aquário",
                quote: "Construir o legado de amanhã exige coragem para inovar com princípios inegociáveis.",
                text: "Inteligência brilhante para idealizar projetos de vanguarda. Marte e Urano na Casa 10 trazem ruptura e ação à carreira. Netuno, na Casa 9 e conjunto ao MC, acrescenta sonho e ideal à direção de vida."
              },
              {
                icon: "👑",
                title: "A Nobreza Emocional",
                subtitle: "Lua em Capricórnio na Casa 9",
                quote: "A sabedoria do tempo ensina que a integridade é o maior tesouro humano.",
                text: "Equilíbrio emocional maduro, compromisso ético e senso de honra que guiam suas decisões com clareza moral."
              },
              {
                icon: "🌙",
                title: "A Intuição Oracular",
                subtitle: "Mercúrio em Escorpião / Casa 7",
                quote: "O silêncio que escuta a alma é mais eloquente que mil palavras.",
                text: "Mente penetrante que lê entrelinhas, captura microexpressões e compreende o não-dito com precisão cirúrgica. Mercúrio está em 28°12' Escorpião, próximo do fim do signo, mas não no grau anarético (29°)."
              },
            ].map((power, idx) => (
              <Reveal key={idx} delay={idx * 100}>
                <Card className="h-full border-t-4 border-t-nara-amethyst">
                  <div className="text-3xl mb-4">{power.icon}</div>
                  <h3 className="font-playfair text-xl text-white mb-1">{power.title}</h3>
                  <p className="text-nara-amethyst-soft text-[10px] uppercase tracking-widest mb-4">{power.subtitle}</p>
                  <p className="text-white/80 italic text-sm mb-4">"{power.quote}"</p>
                  <p className="text-white/60 text-sm leading-relaxed">{power.text}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PERFIL DE ESTILO */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <SectionTitle eyebrow="Expressão Terrena" title="Perfil de Estilo Cósmico" description="A forma como a alma de Nara se veste, habita e colore o mundo." />
          <div className="mb-12 text-center">
            <h3 className="font-playfair text-2xl text-nara-amethyst mb-2">A Aristocrata da Terra & Guardiã do Coração</h3>
            <p className="text-white/60 text-sm max-w-2xl mx-auto">Quiet Luxury de altíssimo padrão, alfaiataria impecável com tecidos naturais nobres, caimento fluido com estrutura, joias com gemas nobres e perfumes com notas ambaradas.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
            {[
              { name: "Esmeralda Terroso", hex: "#065f46", link: "Ascendente Touro • Kin 130" },
              { name: "Bordeaux Profundo", hex: "#881337", link: "Vênus em Escorpião" },
              { name: "Âmbar Fogo", hex: "#c2410c", link: "Sol em Sagitário" },
              { name: "Areia Nobre", hex: "#e2d9cc", link: "Lua em Capricórnio" },
              { name: "Safira Noturno", hex: "#1e3a8a", link: "MC em Aquário" },
            ].map((color, idx) => (
              <Reveal key={idx} delay={idx * 80}>
                <div className="text-center">
                  <div className="w-full aspect-square rounded-sm mb-3 border border-white/10" style={{ backgroundColor: color.hex }} />
                  <p className="text-white text-xs font-medium mb-1">{color.name}</p>
                  <p className="text-white/40 text-[10px] uppercase tracking-wider">{color.link}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <Card className="bg-gradient-to-br from-nara-amethyst/10 to-transparent border-nara-amethyst/20">
              <div className="max-w-3xl mx-auto">
                <h3 className="font-playfair text-2xl text-white mb-4 text-center">O Santuário da Beleza Serena</h3>
                <p className="text-white/70 leading-relaxed text-sm mb-4">O lar de Lady Nara é um oásis de bom gosto sensorial, conforto acolhedor e proteção sagrada. Ambientes amplos com iluminação quente, plantas nobres, aromas envolventes e peças de arte com valor afetivo e histórico.</p>
                <ul className="text-white/60 text-sm space-y-2 list-disc list-inside">
                  <li>Mobiliário de madeira maciça nobre e sofás com tecidos táteis convidativos (linho, veludo e couro suave).</li>
                  <li>Velas aromáticas e difusores com essências botânicas nobres (baunilha, âmbar, flor de laranjeira e madeiras nobres).</li>
                  <li>Cristais de cura e proteção (esmeralda, quartzo verde, ametista e pirita).</li>
                  <li>Cozinha e mesa posta com cerâmicas artesanais e louças clássicas.</li>
                </ul>
              </div>
            </Card>
          </Reveal>
        </div>
      </section>

      {/* RITUAL */}
      <section className="py-24 px-6 bg-nara-deep-indigo/50 relative z-10">
        <div className="max-w-5xl mx-auto">
          <SectionTitle eyebrow="Farmácia da Alma" title="Ferramentas & Ritual de Alinhamento" description="Cristais, aromas e práticas que sintonizam a frequência de Nara." />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { name: "Ametista", subtitle: "Transmutação", desc: "Converter a tensão da Cruz Fixa em serenidade espiritual." },
              { name: "Pérola", subtitle: "Pureza", desc: "Nutrir a Lua em Capricórnio com doçura e acolhimento." },
              { name: "Turmalina", subtitle: "Proteção", desc: "Blindar o campo energético durante imersões na Casa 8." },
              { name: "Sândalo", subtitle: "Expansão", desc: "Sintonizar a visão de Sagitário com a realidade material." },
            ].map((item, index) => (
              <Reveal key={index} className="h-full">
                <Card className="h-full flex flex-col items-center justify-center p-6 bg-white/[0.03] hover:bg-white/[0.08] transition-colors border-none text-center">
                  <div className="w-12 h-12 rounded-full bg-nara-amethyst/10 mb-4 flex items-center justify-center text-nara-amethyst font-playfair italic text-lg border border-nara-amethyst/20">{index + 1}</div>
                  <h4 className="text-white font-medium mb-1">{item.name}</h4>
                  <p className="text-[10px] text-nara-amethyst-soft uppercase tracking-wider mb-3">{item.subtitle}</p>
                  <p className="text-xs text-white/50 leading-relaxed">{item.desc}</p>
                </Card>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <Card className="bg-gradient-to-br from-nara-amethyst/10 to-transparent border-nara-amethyst/20">
              <div className="text-center max-w-2xl mx-auto">
                <h3 className="font-playfair text-2xl text-nara-amethyst mb-2">Sugerido: "O Despertar da Fênix"</h3>
                <p className="text-white/70 font-light italic mb-6">Para momentos de transição e renascimento</p>
                <p className="text-white/80 leading-relaxed text-sm">No silêncio da lua cheia, acenda uma vela branca e violeta. Medite sobre aquilo que precisa morrer em você para que a nova versão possa nascer. <strong className="text-white">"Eu sou a chama que consome o velho e a luz que guia o novo."</strong></p>
              </div>
            </Card>
          </Reveal>
        </div>
      </section>

      {/* CICLO DE MATURIDADE */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <Card className="bg-gradient-to-br from-white/[0.05] to-transparent border-white/10">
              <h2 className="font-playfair text-3xl mb-4">A Travessia da Vanguarda</h2>
              <p className="text-nara-amethyst-soft text-xs uppercase tracking-widest mb-6">O Ciclo de Reconfiguração dos 26 Anos</p>
              <p className="text-white/70 leading-relaxed mb-6">Aos 26 anos, Nara atravessa uma fase de reconfiguração profunda entre segurança e liberdade. Urano inaugura um novo ciclo na Casa 2 enquanto Júpiter ativa por oposição sua conjunção Marte-Urano natal, e Plutão se aproxima lentamente do Meio do Céu. O céu não descreve apenas expansão: descreve mudança de arquitetura. Aquilo que antes sustentava sua identidade material e profissional começa a ser questionado para que uma estrutura mais autêntica possa emergir.</p>
              <p className="text-white/50 text-sm italic">Vitality Secret: Banhos botânicos com lavanda e sândalo, rituais de autocuidado com óleos puros, contato frequente com a natureza e momentos de intimidade e riso com sua família do coração.</p>
            </Card>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative bg-nara-deep-indigo border-t border-white/5 overflow-hidden z-10">
        <div className="py-24 px-6 text-center relative z-10">
          <Reveal>
            <div className="mb-8 text-2xl animate-pulse">✨</div>
            <h2 className="font-playfair text-3xl md:text-4xl text-white mb-8">✦ A Trama Continua... ✦</h2>
            <div className="max-w-3xl mx-auto text-white/70 font-light leading-relaxed space-y-6 text-lg">
              <p>Lady Nara, navegar pela arquitetura da sua alma foi um mergulho em águas profundas e luzes intensas.</p>
              <p>Este mapa revela que você não é apenas uma observadora da vida, mas uma <strong className="text-white">operadora de frequências</strong>. De sua resiliência de rocha à sua visão de vanguarda, você é a prova de que a força e a delicadeza podem coexistir em perfeita harmonia.</p>
              <p className="italic text-nara-amethyst">Que a sua luz continue a tecer pontes entre o humano e o divino, transformando cada sombra em um portal de ascensão.</p>
            </div>
          </Reveal>
        </div>
        <div className="py-12 bg-black/20 text-center relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(157,80,187,0.05),transparent_50%)] pointer-events-none" />
          <p className="font-sans text-xs text-white/40 tracking-widest uppercase mb-2">Feito com magia e dados por</p>
          <h2 className="font-playfair text-2xl text-nara-amethyst tracking-wide mb-8">Marroc <span className="text-sm font-sans text-white/60 tracking-widest ml-1">by CosmoVision</span></h2>
        </div>
      </footer>
    </div>
  );
}
