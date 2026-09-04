import React from 'react';
import { Star, Sun, Moon, Compass, Flame, Sparkles, Mountain, Zap, Gem, Shield, Anchor, Target, Crown, ArrowUpRight } from 'lucide-react';

const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`relative overflow-hidden bg-white/[0.02] border border-white/10 rounded-sm p-8 shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_-10px_rgba(184,115,51,0.15)] hover:border-marcio-copper/30 ${className}`}>
    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />
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
    {eyebrow && <p className="text-marcio-copper-light text-xs uppercase tracking-[0.3em] mb-4">{eyebrow}</p>}
    <h2 className="font-playfair text-4xl md:text-5xl mb-6">{title}</h2>
    {description && <p className="text-white/60 font-light max-w-2xl mx-auto">{description}</p>}
  </div>
);

export default function MarcioLayout() {
  return (
    <div className="min-h-screen bg-marcio-obsidian text-marcio-slate selection:bg-marcio-copper selection:text-white font-body overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-marcio-copper/5 rounded-full blur-[150px] opacity-20" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-marcio-ember/5 rounded-full blur-[120px] opacity-10" />
        <div className="absolute inset-0 opacity-[0.02] bg-noise mix-blend-overlay" />
      </div>

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden z-10">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <div className="flex justify-center mb-6">
            <Flame className="text-marcio-copper w-6 h-6 animate-pulse" />
          </div>
          <h2 className="text-marcio-copper-light tracking-[0.3em] text-xs uppercase mb-6 font-medium">Mapa Natal Premium</h2>
          <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl text-white mb-8 leading-tight">
            Marcio <br />
            <span className="italic text-marcio-copper/90 font-playfair">Rocha</span>
          </h1>
          <p className="text-sm md:text-base tracking-widest text-white/60 mt-6 font-light uppercase">13 de Fevereiro de 1995 • 10:20 BRT • Rio de Janeiro, RJ</p>
          <p className="text-xs text-white/40 mt-2 uppercase tracking-widest">Ascendente Áries 13°40' • Sol Aquário 24°19' Casa 11 • Lua Leão 0°26' Casa 4</p>
          <div className="relative inline-block py-8 px-4 md:px-12 mt-8">
            <span className="absolute top-0 left-0 text-6xl text-marcio-copper opacity-30 font-playfair">"</span>
            <p className="text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto text-white/90 italic">
              O Arquiteto Visionário & Mestre Solar.
              <br/>
              Mente de vanguarda, coração de leão, alma de arquiteto.
            </p>
            <span className="absolute bottom-0 right-0 text-6xl text-marcio-copper opacity-30 font-playfair">"</span>
          </div>
          <div className="mt-12 animate-slow-float">
            <div className="h-24 w-[1px] bg-gradient-to-b from-marcio-copper to-transparent mx-auto" />
          </div>
        </div>
      </section>

      {/* ÍNDICE */}
      <section className="py-24 px-6 md:px-12 max-w-5xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between border-t border-marcio-copper/20 pt-12">
          <div className="md:w-1/3 mb-12 md:mb-0">
            <h3 className="font-playfair text-3xl md:text-4xl text-marcio-copper mb-4">Índice<br/>Cósmico</h3>
            <p className="text-xs font-sans text-white/50 uppercase tracking-widest">Navegação Estelar</p>
          </div>
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12 w-full">
            {[
              "Tríade Fundamental",
              "Rede de Fogo",
              "Identidade Galáctica",
              "Eixo Elétrico de Criação",
              "Caminho da Alma",
              "Casas & Terrenos de Vida",
              "Aspectos que Moldam o Destino",
              "Elementos & Modalidades",
              "Perfil de Estilo Cósmico",
              "Os Seis Poderes",
            ].map((topic, index) => (
              <div key={index} className="group flex items-center cursor-default">
                <span className="text-marcio-copper-light/50 font-playfair text-lg mr-4 group-hover:text-marcio-copper-light transition-colors">{String(index + 1).padStart(2, '0')}.</span>
                <span className="text-lg font-light border-b border-transparent group-hover:border-marcio-copper/30 transition-all pb-1">{topic}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRÍADE FUNDAMENTAL */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <SectionTitle eyebrow="Os Três Pilares" title="Portais Fundamentais" description="A Tríade que define sua arquitetura interna: mente visionária, coração artístico e presença pioneira." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Reveal delay={100}>
              <Card className="h-full flex flex-col items-center text-center border-t-4 border-t-marcio-copper">
                <div className="mb-6 p-4 rounded-full bg-marcio-copper/10 text-marcio-copper">
                  <Sun size={32} strokeWidth={1.5} />
                </div>
                <h3 className="font-playfair text-2xl text-white mb-2">Sol em Aquário</h3>
                <p className="text-marcio-copper-light text-xs uppercase tracking-widest mb-6">24°19' • Casa 11 • A Mente do Futuro</p>
                <p className="text-white/70 font-light leading-relaxed text-sm mb-4 italic">“Arquiteto de redes e comunidades conscientes”</p>
                <p className="text-white/70 font-light leading-relaxed text-left text-sm">Seu Sol pulsa a 24° de Aquário na Casa 11. Sua identidade se constrói na liberdade intelectual, na quebra de padrões obsoletos e na capacidade de enxergar conexões invisíveis.</p>
                <p className="text-white/50 text-xs mt-4 leading-relaxed">Sol em Aquário está tradicionalmente em detrimento, pois o domicílio solar é Leão. Mas isso é formato, não defeito: a sua luz funciona em círculos, não em pirâmides. A Casa 11 reforça a ênfase em redes, grupos, comunidades, projetos coletivos, inovação e futuro.</p>
              </Card>
            </Reveal>
            <Reveal delay={200}>
              <Card className="h-full flex flex-col items-center text-center border-t-4 border-t-marcio-ember md:mt-8">
                <div className="mb-6 p-4 rounded-full bg-marcio-ember/10 text-marcio-ember">
                  <Moon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="font-playfair text-2xl text-white mb-2">Lua em Leão</h3>
                <p className="text-marcio-copper-light text-xs uppercase tracking-widest mb-6">0°26' • Casa 4 • O Coração do Criador</p>
                <p className="text-white/70 font-light leading-relaxed text-sm mb-4 italic">“Alma de artista e calor generoso”</p>
                <p className="text-white/70 font-light leading-relaxed text-left text-sm">Sua Lua nos primeiros graus de Leão na Casa 4 confere imenso magnetismo emocional, coração caloroso e dignidade régia. Aqui a Lua desloca a interpretação para raízes, lar, intimidade, ancestralidade, pertencimento e mundo emocional privado.</p>
                <p className="text-white/50 text-xs mt-4 leading-relaxed">O mundo emocional é ardente, generoso, leal e motivado pelo amor genuíno à vida e à arte. A Casa 4 coloca essa chama no espaço privado: família, ninho, espaços que você chama de seus.</p>
              </Card>
            </Reveal>
            <Reveal delay={300}>
              <Card className="h-full flex flex-col items-center text-center border-t-4 border-t-marcio-copper">
                <div className="mb-6 p-4 rounded-full bg-marcio-copper/10 text-marcio-copper">
                  <Compass size={32} strokeWidth={1.5} />
                </div>
                <h3 className="font-playfair text-2xl text-white mb-2">Ascendente em Áries</h3>
                <p className="text-marcio-copper-light text-xs uppercase tracking-widest mb-6">13°40' • O Pioneiro Magnético</p>
                <p className="text-white/70 font-light leading-relaxed text-sm mb-4 italic">“Presença dinâmica e olhar firme”</p>
                <p className="text-white/70 font-light leading-relaxed text-left text-sm">Você chega com energia direta e coragem. O regente Marte está em Leão na Casa 5, conferindo carisma de líder nato e calor solar.</p>
                <p className="text-white/50 text-xs mt-4 leading-relaxed">Postura firme, movimentos decididos, expressividade dinâmica. Júpiter em Sagitário forma trígono de 1°33' com o Ascendente, abrindo caminhos e trazendo proteção providencial.</p>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SINCRONIA GALÁTICA */}
      <section className="py-24 px-6 bg-gradient-to-b from-transparent via-marcio-copper/5 to-transparent relative z-10">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <Card className="p-0 border-none bg-transparent shadow-none !overflow-visible">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative order-2 lg:order-1 flex justify-center">
                  <div className="absolute inset-0 bg-marcio-copper/10 blur-[60px] rounded-full" />
                  <div className="relative aspect-square w-64 md:w-80 rounded-full border border-marcio-copper/20 flex flex-col items-center justify-center bg-marcio-charcoal/50 backdrop-blur-sm p-4 group">
                    <div className="relative w-full h-full flex items-center justify-center p-4">
                      <img src="/images/kin191.png" alt="Oráculo Kin 191" className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(184,115,51,0.3)] group-hover:drop-shadow-[0_0_25px_rgba(184,115,51,0.5)] transition-all duration-500" />
                    </div>
                    <div className="absolute bottom-6 px-4 py-1 bg-marcio-copper/10 border border-marcio-copper/30 rounded-full backdrop-blur-md">
                      <span className="text-[10px] md:text-xs uppercase tracking-widest text-marcio-copper font-medium">Portal da Magia Solar</span>
                    </div>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <h2 className="font-playfair text-4xl md:text-5xl mb-2">Identidade Galáctica</h2>
                  <p className="text-marcio-copper-light font-sans uppercase tracking-[0.2em] text-xs mb-8">Dreamspell • Sincronário das 13 Luas</p>

                  <div className="pl-6 border-l border-marcio-copper/30 mb-8">
                    <h3 className="text-2xl font-medium text-white mb-1">Macaco Solar Azul</h3>
                    <p className="text-marcio-copper/60 text-sm mb-2 font-mono">KIN 191 • Magia, Brincadeira & Ilusão • Tom 9: Intenção/Realização</p>
                    <p className="text-white/50 text-xs italic mb-3">“I pulse in order to play / Realizing illusion / I seal the process of magic / With the solar tone of intention / I am guided by the power of accomplishment.”</p>
                    <p className="text-white/70 font-light text-justify leading-relaxed text-sm">
                      Marcio, sua assinatura galáctica é a do <strong>Realizador da Magia</strong>. O Macaco traz a capacidade de perceber que o cenário não é absoluto — aquilo que parece sólido pode ser reconfigurado. O Tom Solar adiciona a pergunta decisiva: <em>“qual dessas possibilidades você realmente pretende trazer para o mundo?”</em> A magia encontra a intenção, e a intenção gera realização.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-white/5 p-4 rounded-sm border border-white/5">
                      <h4 className="text-marcio-copper-light text-xs uppercase tracking-widest mb-3">Oráculo do KIN 191</h4>
                      <ul className="text-white/60 text-xs space-y-2">
                        <li><span className="text-white">Destino:</span> Macaco Solar Azul — KIN 191</li>
                        <li><span className="text-white">Guia:</span> Mão Solar Azul — KIN 87</li>
                        <li><span className="text-white">Apoio:</span> Estrela Solar Amarela — KIN 48</li>
                        <li><span className="text-white">Desafio:</span> Dragão Solar Vermelho — KIN 61</li>
                        <li><span className="text-white">Oculto:</span> Cachorro Harmônico Branco — KIN 70</li>
                      </ul>
                      <p className="text-[10px] text-white/30 mt-3 italic">Oráculo calculado segundo a matriz padrão do Dreamspell de José Argüelles.</p>
                    </div>
                    <div className="bg-white/5 p-4 rounded-sm border border-white/5">
                      <h4 className="text-marcio-ember/80 text-xs uppercase tracking-widest mb-3">Frequência Central</h4>
                      <p className="text-white font-medium text-sm mb-2">MAGIA + INTENÇÃO + REALIZAÇÃO</p>
                      <ul className="text-xs text-white/50 leading-relaxed space-y-1">
                        <li>✋ materialize aquilo que imaginar</li>
                        <li>⭐ dê beleza ao que materializar</li>
                        <li>🐉 sustente aquilo que fizer nascer</li>
                        <li>❤️ mantenha o coração naquilo que transformar</li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="pl-4 border-l-2 border-blue-500/30">
                      <h4 className="text-white text-sm font-medium mb-1">Guia — Mão Solar Azul (KIN 87)</h4>
                      <p className="text-white/60 text-xs leading-relaxed">Macaco imagina. Mão faz. Seu guia não é permanecer no universo das ideias, mas transformar visão em obra. A prova da sua magia é aquilo que você constrói.</p>
                    </div>
                    <div className="pl-4 border-l-2 border-yellow-500/30">
                      <h4 className="text-white text-sm font-medium mb-1">Apoio — Estrela Solar Amarela (KIN 48)</h4>
                      <p className="text-white/60 text-xs leading-relaxed">A Estrela oferece forma estética à imaginação do Macaco. Ela pergunta: “Como isso se torna belo? Qual é a composição? Como diferentes elementos entram em harmonia?”</p>
                    </div>
                    <div className="pl-4 border-l-2 border-red-500/30">
                      <h4 className="text-white text-sm font-medium mb-1">Desafio — Dragão Solar Vermelho (KIN 61)</h4>
                      <p className="text-white/60 text-xs leading-relaxed">O Dragão pergunta: “O que sustenta aquilo que você está criando?” Não basta iniciar mundos; é preciso alimentá-los. Criar também significa cuidar.</p>
                    </div>
                    <div className="pl-4 border-l-2 border-white/30">
                      <h4 className="text-white text-sm font-medium mb-1">Oculto — Cachorro Harmônico Branco (KIN 70)</h4>
                      <p className="text-white/60 text-xs leading-relaxed">A magia sem coração pode virar manipulação. O Cachorro oculto coloca a pergunta ética: “Para que — e para quem — você está usando sua capacidade de transformar a realidade?”</p>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-white/[0.03] border border-white/10 rounded-sm">
                    <p className="text-white/70 text-xs leading-relaxed italic">
                      KIN 191 é o 9º Kin da Onda Encantada da Noite Azul no Dreamspell de José Argüelles. O pano de fundo é o sonho: a Noite sonha a possibilidade, o Macaco brinca com ela, o Solar escolhe uma intenção, a Mão transforma em realização, a Estrela dá forma e beleza, o Dragão exige sustentação e o Cachorro pergunta se há coração em tudo isso. Dreamspell e Tzolk'in maia histórico não são sistemas idênticos.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </Reveal>
        </div>
      </section>

      {/* GRANDE TRÍGONO DE FOGO */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <SectionTitle eyebrow="Padrão Geométrico Supremo" title="Rede de Fogo Cósmico" description="Conexão harmoniosa nos três signos de Fogo: Áries, Leão e Sagitário. O circuito sagrado de entusiasmo, coragem e regeneração." />
          <div className="max-w-3xl mx-auto mb-16 text-white/70 font-light leading-relaxed space-y-6 text-sm md:text-base">
            <p>Uma concentração real nos três signos de Fogo: <strong>Áries, Leão e Sagitário</strong>. Tecnicamente não forma um único Grande Trígono por grau, mas existe uma geometria de fogo muito viva.</p>
            <p>Essa Rede de Fogo concede uma chama interna inextinguível. Mesmo diante dos maiores desafios, você encontra em si mesmo a centelha de ânimo, fé e coragem para liderar.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Reveal delay={100}>
              <Card className="h-full text-center border-t-2 border-t-marcio-ember">
                <Mountain className="w-8 h-8 text-marcio-ember mx-auto mb-4" />
                <h3 className="font-playfair text-xl text-white mb-2">Áries</h3>
                <p className="text-[10px] uppercase tracking-widest text-marcio-copper-light mb-4">Ascendente 13°40' • Identidade</p>
                <p className="text-white/70 font-light text-sm">A identidade do guerreiro pioneiro. Coragem para iniciar e liderar. Júpiter em Sagitário trígono exato abençoa essa presença.</p>
              </Card>
            </Reveal>
            <Reveal delay={200}>
              <Card className="h-full text-center border-t-2 border-t-marcio-copper mt-0 md:mt-8">
                <Sun className="w-8 h-8 text-marcio-copper mx-auto mb-4" />
                <h3 className="font-playfair text-xl text-white mb-2">Leão</h3>
                <p className="text-[10px] uppercase tracking-widest text-marcio-copper-light mb-4">Lua 0° • Marte 22° • Lar e Criação</p>
                <p className="text-white/70 font-light text-sm">O coração do criador. Paixão, generosidade e magnetismo. Marte retrógrado aqui é o motor central do mapa.</p>
              </Card>
            </Reveal>
            <Reveal delay={300}>
              <Card className="h-full text-center border-t-2 border-t-marcio-ember">
                <Sparkles className="w-8 h-8 text-marcio-ember mx-auto mb-4" />
                <h3 className="font-playfair text-xl text-white mb-2">Sagitário</h3>
                <p className="text-[10px] uppercase tracking-widest text-marcio-copper-light mb-4">Júpiter 12° • Plutão 0°30' • Transformação e Expansão</p>
                <p className="text-white/70 font-light text-sm">A transformação profunda e a expansão. Plutão forma trígono exatíssimo com a Lua (~0°04'), e Júpiter forma trígono preciso com o Ascendente (~1°32').</p>
              </Card>
            </Reveal>
          </div>
          <Reveal>
            <Card className="bg-gradient-to-br from-marcio-copper/10 to-transparent border-marcio-copper/20">
              <div className="max-w-3xl mx-auto">
                <h3 className="font-playfair text-2xl text-marcio-copper mb-4">O Circuito Sagrado de Fogo & Vitalidade Invencível</h3>
                <p className="text-white/70 leading-relaxed text-sm">A Rede de Fogo une a identidade de guerreiro (Áries), o coração criativo (Leão) e a expansão transformadora (Sagitário). Trígonos precisos — Lua-Plutão (~0°04') e Júpiter-Ascendente (~1°32') — dão vida a essa geometria.</p>
                <p className="text-white/50 text-sm mt-4 italic">Como harmonizar: canalizar essa energia dinâmica em projetos autorais de alta expressão, exercícios físicos, estudos profundos e criações inovadoras. O fogo precisa de movimento para não virar fumaça.</p>
              </div>
            </Card>
          </Reveal>
        </div>
      </section>

      {/* EIXO ELÉTRICO */}
      <section className="py-24 px-6 bg-marcio-charcoal/30 relative z-10">
        <div className="max-w-6xl mx-auto">
          <SectionTitle eyebrow="Dínamo do Mapa" title="Eixo Elétrico de Criação" description="Oposição dinâmica e fértil entre a individualidade apaixonada (Casa 5) e a consciência de vanguarda coletiva (Casa 11)." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Reveal>
              <Card className="h-full border-t-4 border-t-marcio-ember">
                <div className="flex items-center gap-3 mb-4">
                  <Flame className="text-marcio-ember w-6 h-6" />
                  <h3 className="font-playfair text-2xl text-white">Marte em Leão • Casa 5</h3>
                </div>
                <p className="text-marcio-copper-light text-xs uppercase tracking-widest mb-4">22°20' • Regente do Ascendente • Retrógrado</p>
                <p className="text-white/70 text-sm leading-relaxed">Como regente do Ascendente em Áries, Marte é o Planeta Mestre da sua encarnação. Posicionado em Leão na Casa 5, confere força de vontade titânica, presença cênica imponente e impulso incansável para criar. A retrogradação internaliza a energia marcial, transformando agressividade bruta em determinação estratégica refinada.</p>
              </Card>
            </Reveal>
            <Reveal>
              <Card className="h-full border-t-4 border-t-marcio-copper">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="text-marcio-copper w-6 h-6" />
                  <h3 className="font-playfair text-2xl text-white">Sol em Aquário • Casa 11</h3>
                </div>
                <p className="text-marcio-copper-light text-xs uppercase tracking-widest mb-4">24°19' • Identidade Visionária</p>
                <p className="text-white/70 text-sm leading-relaxed">Sua identidade se constrói na liberdade intelectual, na quebra de padrões obsoletos e na capacidade de enxergar conexões invisíveis. A mente brilhante do futuro, arquiteto de redes e comunidades conscientes.</p>
              </Card>
            </Reveal>
          </div>
          <Reveal>
            <div className="mt-8 text-center">
              <p className="text-white/60 text-sm max-w-2xl mx-auto">A oposição Sol ☍ Marte (1°59' de orbe) é o dínamo do mapa: impede o comodismo e gera força propulsora para inventar, inovar e criar algo único que sirva tanto ao prazer pessoal quanto à elevação coletiva.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CAMINHO DA ALMA */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 flex flex-col md:flex-row justify-between items-end">
            <h2 className="font-playfair text-4xl">Caminho da Alma</h2>
            <p className="text-white/40 text-sm max-w-md text-right mt-4 md:mt-0">A Bússola do Destino.</p>
          </div>
          <div className="space-y-6">
            <Reveal>
              <Card className="flex flex-col md:flex-row gap-8 items-center bg-gradient-to-r from-white/5 to-transparent">
                <div className="md:w-1/4 text-center md:text-left">
                  <h3 className="text-marcio-copper font-playfair text-2xl">Nodo Norte em Escorpião</h3>
                  <p className="text-[10px] uppercase tracking-widest text-white/40 mt-1">8°47' • Casa 7 • Destino Relacional</p>
                </div>
                <div className="md:w-3/4 border-l border-white/10 md:pl-8 pt-4 md:pt-0 border-t md:border-t-0">
                  <p className="text-white font-serif italic mb-2">“Mergulhar no autoconhecimento profundo e no poder pessoal”</p>
                  <p className="text-white/60 text-sm leading-relaxed">Seu caminho evolutivo pede que você desenvolva domínio sobre a psique, inteligência financeira compartilhada, espiritualidade transformadora e alquimia interior. Sair da previsibilidade e abraçar a transformação.</p>
                </div>
              </Card>
            </Reveal>
            <Reveal>
              <Card className="flex flex-col md:flex-row gap-8 items-center bg-gradient-to-r from-white/5 to-transparent">
                <div className="md:w-1/4 text-center md:text-left">
                  <h3 className="text-marcio-ember font-playfair text-2xl">Júpiter em Sagitário</h3>
                  <p className="text-[10px] uppercase tracking-widest text-white/40 mt-1">12°08' • Casa 8 • Próximo à Casa 9</p>
                </div>
                <div className="md:w-3/4 border-l border-white/10 md:pl-8 pt-4 md:pt-0 border-t md:border-t-0">
                  <p className="text-white font-serif italic mb-2">“Mente cósmica e proteção providencial”</p>
                  <p className="text-white/60 text-sm leading-relaxed">Júpiter reina absoluto em seu próprio domicílio. Tecnicamente está na Casa 8, a apenas ~1°33' da cúspide da Casa 9. Isso cria uma passagem simbólica da profundidade/transformação para filosofia, conhecimento, viagens e sistemas de sentido.</p>
                </div>
              </Card>
            </Reveal>
            <Reveal>
              <Card className="flex flex-col md:flex-row gap-8 items-center bg-gradient-to-r from-white/5 to-transparent">
                <div className="md:w-1/4 text-center md:text-left">
                  <h3 className="text-white font-playfair text-2xl">Quíron em Virgem</h3>
                  <p className="text-[10px] uppercase tracking-widest text-white/40 mt-1">25°22' • Casa 6 • O Mestre dos Detalhes</p>
                </div>
                <div className="md:w-3/4 border-l border-white/10 md:pl-8 pt-4 md:pt-0 border-t md:border-t-0">
                  <p className="text-white font-serif italic mb-2">“Curar através da organização e precisão técnica”</p>
                  <p className="text-white/60 text-sm leading-relaxed">Quíron em Virgem representa o curador dos métodos. Você transforma eventuais inseguranças quanto à perfeição em maestria inigualável de design, engenharia de processos e qualidade.</p>
                </div>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ASPECTOS */}
      <section className="py-24 px-6 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent relative z-10">
        <div className="max-w-6xl mx-auto">
          <SectionTitle eyebrow="Diálogos Estelares" title="Aspectos que Moldam o Destino" description="As conversas entre planetas que desenham a sinfonia única da alma de Marcio." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Sol ☍ Marte",
                subtitle: "Oposição 1°59' • Mente do Futuro × Coração Régio",
                text: "Combina a visão futurista e humanitária de Aquário com o coração heroico e a paixão ardente de Leão. Personalidade magnética e imparável quando alinha propósito com entusiasmo."
              },
              {
                title: "Lua △ Plutão",
                subtitle: "Trígono 0°04' • Poder de Regeneração",
                text: "Trígono exatíssimo entre a Lua em Leão e Plutão em Sagitário. Profunda resiliência psicológica, facilidade para curar feridas emocionais e transformar crises em triunfos."
              },
              {
                title: "Vênus ⚹ Saturno",
                subtitle: "Sextil 2°42' • Elegância Perene",
                text: "Vênus em Capricórnio em sextil com Saturno em Peixes. Apreço pela beleza atemporal, solidez nos compromissos, bom gosto impecável e construção de longo prazo."
              },
              {
                title: "Júpiter □ Saturno",
                subtitle: "Quadratura 0°23' • Expansão × Mestria",
                text: "Aspecto exato entre os dois grandes mestres. Grande discernimento filosófico e sabedoria prática. Ensina a converter ideais em estruturas concretas."
              },
              {
                title: "Júpiter △ Ascendente",
                subtitle: "Trígono 1°33' • Sorte Providencial",
                text: "Abertura de caminhos na vida, facilidade para atrair mentores e oportunidades nobres, olhar otimista e espírito pioneiro."
              },
              {
                title: "Urano ☌ Netuno",
                subtitle: "Conjunção 3°49' • Tecnologia × Espiritualidade",
                text: "Na Casa 10 em Capricórnio. Urano e Netuno formam conjunção geracional (~3°49'), cuja expressão individual ganha relevância por estar na Casa 10. Capacidade de projetar sistemas, plataformas e obras que unem lógica rigorosa, inovação, idealismo e propósito ético."
              },
            ].map((aspect, idx) => (
              <Reveal key={idx} delay={idx * 100}>
                <Card className="h-full">
                  <h3 className="font-playfair text-xl text-white mb-1">{aspect.title}</h3>
                  <p className="text-marcio-copper-light text-xs uppercase tracking-widest mb-4">{aspect.subtitle}</p>
                  <p className="text-white/60 text-sm leading-relaxed">{aspect.text}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CASAS */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <SectionTitle eyebrow="Os Doze Terrenos" title="Casas Astrológicas" description="Os setores da vida onde a energia planetária de Marcio se expressa e se realiza." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { house: "1", title: "Ascendente em Áries", area: "Identidade & Presença", text: "Presença dinâmica, corajosa e magnética. Chega com energia direta, olhar firme e prontidão para a ação." },
              { house: "2", title: "Casa 2 em Touro", area: "Recursos & Valores", text: "Busca por solidez, estabilidade duradoura e apreço por qualidade genuína e conforto bem estruturado." },
              { house: "3", title: "Casa 3 em Gêmeos", area: "Comunicação & Mente", text: "Mente ágil, curiosidade insaciável, facilidade para articular ideias complexas com leveza e dinamismo." },
              { house: "4", title: "IC em Câncer", area: "Lar & Raízes", text: "O lar é o refúgio do guerreiro, um santuário de acolhimento, afeto protetor e memória familiar profunda." },
              { house: "5", title: "Casa 5 em Leão", area: "Criatividade & Paixão", text: "Centro vulcânico de criatividade. Contém Marte: alegria de viver, generosidade e alma do criador. A Lua está na Casa 4." },
              { house: "6", title: "Casa 6 em Virgem", area: "Rotina & Saúde", text: "Maestria na rotina, dedicação ao aprimoramento contínuo e cuidado meticuloso com qualidade." },
              { house: "7", title: "DC em Libra", area: "Relacionamentos", text: "Atrai parcerias baseadas em elegância, reciprocidade ética, diálogo inteligente e harmonia estética." },
              { house: "8", title: "Casa 8 em Escorpião", area: "Transformação & Poder", text: "Mergulho na verdade essencial, regeneração psíquica e magnetismo de atração. Nodo Norte e Plutão." },
              { house: "9", title: "Casa 9 em Sagitário", area: "Expansão & Filosofia", text: "Sede de conhecer o mundo, compreender leis universais e expandir fronteiras mentais. Júpiter domiciliado." },
              { house: "10", title: "MC em Capricórnio", area: "Carreira & Legado", text: "Vocação de arquiteto de novos mundos, aliando estética sofisticada, tecnologia e legado sólido." },
              { house: "11", title: "Casa 11 em Aquário", area: "Amizades & Futuro", text: "Santuário da mente visionária, criação de comunidades conscientes, IA e redes do futuro. Sol e Mercúrio." },
              { house: "12", title: "Casa 12 em Peixes", area: "Espiritualidade & Bastidores", text: "Sabedoria transcendental internalizada, força espiritual silenciosa e maestria na transmutação do invisível." },
            ].map((h, idx) => (
              <Reveal key={idx} delay={idx * 50}>
                <Card className="h-full">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 rounded-full bg-marcio-copper/10 flex items-center justify-center text-marcio-copper text-sm font-playfair border border-marcio-copper/20">{h.house}</span>
                    <div>
                      <h3 className="font-playfair text-lg text-white leading-tight">{h.title}</h3>
                      <p className="text-[10px] text-marcio-copper-light uppercase tracking-widest">{h.area}</p>
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
      <section className="py-24 px-6 bg-gradient-to-b from-marcio-copper/5 via-transparent to-marcio-copper/5 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Reveal>
              <div>
                <h2 className="font-playfair text-3xl mb-8 text-center lg:text-left">Elementos</h2>
                <div className="space-y-4">
                  {[
                    { name: "Fogo", pct: "42%", desc: "Presença dominante e magnética; entusiasmo contagiante, coragem pioneira, espírito de liderança e paixão criativa que move montanhas.", color: "bg-orange-500" },
                    { name: "Terra", pct: "33%", desc: "Capacidade de construir estruturas sólidas, senso estético refinado, responsabilidade vocacional e apreço pela qualidade duradoura.", color: "bg-emerald-500" },
                    { name: "Ar", pct: "17%", desc: "Genialidade analítica, pensamento não-linear, visão de futuro, apreço pela tecnologia e facilidade para compreender dinâmicas sistêmicas.", color: "bg-sky-400" },
                    { name: "Água", pct: "8%", desc: "Sensibilidade psíquica guardada nos bastidores, intuição investigativa, resiliência emocional e empatia silenciosa.", color: "bg-blue-500" },
                  ].map((el, idx) => (
                    <div key={idx} className="bg-white/[0.03] border border-white/10 rounded-sm p-5">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white font-medium flex items-center gap-2"><span className={`w-2 h-2 rounded-full ${el.color}`} />{el.name}</span>
                        <span className="text-marcio-copper-light text-sm">{el.pct}</span>
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
                    { name: "Cardinal", pct: "42%", desc: "Iniciativa pioneira, liderança empreendedora, capacidade de iniciar novos ciclos e construir legados.", color: "bg-red-500" },
                    { name: "Fixo", pct: "33%", desc: "Lealdade inabalável, determinação férrea, fidelidade aos próprios princípios e resistência a pressões externas.", color: "bg-purple-500" },
                    { name: "Mutável", pct: "25%", desc: "Flexibilidade mental para aprender continuamente, capacidade de adaptação filosófica e refinamento técnico.", color: "bg-cyan-500" },
                  ].map((mod, idx) => (
                    <div key={idx} className="bg-white/[0.03] border border-white/10 rounded-sm p-5">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white font-medium flex items-center gap-2"><span className={`w-2 h-2 rounded-full ${mod.color}`} />{mod.name}</span>
                        <span className="text-marcio-copper-light text-sm">{mod.pct}</span>
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
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <SectionTitle eyebrow="Essência de Marcio" title="Os Seis Poderes" description="As frequências centrais que regem sua encarnação e seu modo de mover o mundo." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "⚡",
                title: "A Mente do Futuro",
                subtitle: "Mercúrio Retrógrado em Aquário / Casa 10",
                quote: "Quem enxerga a arquitetura do invisível cria o futuro no presente.",
                text: "Processa informações em alta velocidade e antecipa conexões estruturais que passam despercebidas. Mercúrio está na Casa 10 (não na 11), o que liga pensamento, comunicação e inteligência à vocação e imagem pública."
              },
              {
                icon: "🦁",
                title: "O Fogo Criativo",
                subtitle: "Marte em Leão na Casa 5, Lua em Leão na Casa 4",
                quote: "A verdadeira arte nasce quando a paixão sincera encontra a maestria.",
                text: "O setor da criação artística é o pulsar vital. Coloca a alma em tudo o que faz, buscando não apenas entregar algo funcional, mas uma experiência memorável."
              },
              {
                icon: "🔥",
                title: "A Ação Pioneira",
                subtitle: "Ascendente em Áries com Rede de Fogo",
                quote: "O guerreiro consciente não espera as condições ideais: ele cria o caminho.",
                text: "Dom de dar a largada, desbravar novos territórios e transformar ideias abstratas em movimento concreto. A força cardinal do mapa (42%) coloca iniciar e inaugurar como modo natural."
              },
              {
                icon: "🔮",
                title: "A Magia Lúdica do Kin 191",
                subtitle: "Macaco Solar Azul • Tom 9",
                quote: "Brincar com a matriz da realidade é o segredo para manifestar a verdadeira magia.",
                text: "Dissolve a rigidez e encontra caminhos leves e originais para superar qualquer barreira. Capacidade de tornar o complexo simples com bom humor e intuição criativa."
              },
              {
                icon: "🏛️",
                title: "A Elegância Atemporal",
                subtitle: "Vênus próxima ao MC em Capricórnio / Casa 9",
                quote: "A verdadeira sofisticação reside na simplicidade que resiste ao teste do tempo.",
                text: "Integridade artística, respeito aos fundamentos sólidos e compromisso de construir algo com durabilidade e honra. Vênus está a cerca de 3°52' do Meio do Céu, conectando estética, imagem pública e vocação."
              },
              {
                icon: "🦅",
                title: "A Visão do Águia",
                subtitle: "Júpiter em Sagitário na Casa 8",
                quote: "A mente que voa alto enxerga o padrão onde outros enxergam apenas caos.",
                text: "Proteção providencial, otimismo resiliente e capacidade de absorver conhecimentos profundos. Mente-ponte entre o antigo e o futuro."
              },
            ].map((power, idx) => (
              <Reveal key={idx} delay={idx * 100}>
                <Card className="h-full border-t-4 border-t-marcio-copper">
                  <div className="text-3xl mb-4">{power.icon}</div>
                  <h3 className="font-playfair text-xl text-white mb-1">{power.title}</h3>
                  <p className="text-marcio-copper-light text-[10px] uppercase tracking-widest mb-4">{power.subtitle}</p>
                  <p className="text-white/80 italic text-sm mb-4">"{power.quote}"</p>
                  <p className="text-white/60 text-sm leading-relaxed">{power.text}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PERFIL DE ESTILO */}
      <section className="py-24 px-6 bg-marcio-charcoal/30 relative z-10">
        <div className="max-w-5xl mx-auto">
          <SectionTitle eyebrow="Expressão Terrena" title="Perfil de Estilo Cósmico" description="A forma como a alma de Marcio se veste, habita e colore o mundo." />
          <div className="mb-12 text-center">
            <h3 className="font-playfair text-2xl text-marcio-copper mb-2">O Arquiteto Visionário & Mestre Solar</h3>
            <p className="text-white/60 text-sm max-w-2xl mx-auto">Futurismo refinado: equilíbrio impecável entre modernidade tecnológica de vanguarda e elegância sóbria, minimalista e duradoura.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
            {[
              { name: "Azul Cósmico", hex: "#1e3a8a", link: "Sol e Mercúrio em Aquário" },
              { name: "Ouro Solar", hex: "#eab308", link: "Lua e Marte em Leão" },
              { name: "Grafite Ônix", hex: "#0f172a", link: "Vênus e MC em Capricórnio" },
              { name: "Branco Platina", hex: "#f8fafc", link: "Urano e Netuno em Capricórnio" },
              { name: "Vermelho Fênix", hex: "#dc2626", link: "Ascendente em Áries" },
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
            <Card className="bg-gradient-to-br from-marcio-copper/10 to-transparent border-marcio-copper/20">
              <div className="max-w-3xl mx-auto">
                <h3 className="font-playfair text-2xl text-white mb-4 text-center">O Santuário Digital & Templo Criativo</h3>
                <p className="text-white/70 leading-relaxed text-sm mb-4">O espaço de Marcio é uma harmonia perfeita entre tecnologia de ponta, ergonomia impecável e aconchego afetivo. Iluminação inteligente indireta, linhas arquitetônicas limpas e livros inspiradores convivem com obras de arte com geometria sagrada.</p>
                <ul className="text-white/60 text-sm space-y-2 list-disc list-inside">
                  <li>Estação de trabalho minimalista com múltiplos monitores de altíssima definição.</li>
                  <li>Iluminação quente e personalizável que favorece o fluxo mental criativo.</li>
                  <li>Biblioteca de referências em design, IA, cosmologia, filosofia e arte.</li>
                  <li>Toques de natureza viva em vasos cerâmicos arquitetônicos.</li>
                </ul>
              </div>
            </Card>
          </Reveal>
        </div>
      </section>

      {/* RITUAL */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <SectionTitle eyebrow="Farmácia da Alma" title="Ferramentas & Ritual de Alinhamento" description="Cristais, aromas e práticas que sintonizam a frequência de Marcio." />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { name: "Cornalina", subtitle: "Fogo Criativo", desc: "Ativa a coragem e a paixão do Rede de Fogo." },
              { name: "Ônix", subtitle: "Ancoragem", desc: "Para estruturar ideias e manter o foco profissional." },
              { name: "Quartzo Fumê", subtitle: "Proteção", desc: "Dissipa a sobrecarga mental e limpa o campo energético." },
              { name: "Óleo de Cedro", subtitle: "Força", desc: "Traz estrutura, confiança e raízes profundas." },
            ].map((item, index) => (
              <Reveal key={index} className="h-full">
                <Card className="h-full flex flex-col items-center justify-center p-6 bg-white/[0.03] hover:bg-white/[0.08] transition-colors border-none text-center">
                  <div className="w-12 h-12 rounded-full bg-marcio-copper/10 mb-4 flex items-center justify-center text-marcio-copper font-playfair italic text-lg border border-marcio-copper/20">{index + 1}</div>
                  <h4 className="text-white font-medium mb-1">{item.name}</h4>
                  <p className="text-[10px] text-marcio-copper-light uppercase tracking-wider mb-3">{item.subtitle}</p>
                  <p className="text-xs text-white/50 leading-relaxed">{item.desc}</p>
                </Card>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <Card className="bg-gradient-to-br from-marcio-copper/10 to-transparent border-marcio-copper/20">
              <div className="text-center max-w-2xl mx-auto">
                <h3 className="font-playfair text-2xl text-marcio-copper mb-2">Ritual Sugerido: "O Arquiteto do Fogo"</h3>
                <p className="text-white/70 font-light italic mb-6">Para equilibrar expansão e disciplina</p>
                <p className="text-white/80 leading-relaxed text-sm">Às segundas-feiras, escreva três objetivos concretos para a semana e acenda uma vela laranja. Visualize cada um se realizando com precisão. <strong className="text-white">"Eu construo o futuro com paixão e método."</strong></p>
              </div>
            </Card>
          </Reveal>
        </div>
      </section>

      {/* CICLO DE MATURIDADE */}
      <section className="py-24 px-6 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <Card className="bg-gradient-to-br from-white/[0.05] to-transparent border-white/10">
              <h2 className="font-playfair text-3xl mb-4">O Despertar da Mestria</h2>
              <p className="text-marcio-copper-light text-xs uppercase tracking-widest mb-6">Saturno sobre o Ascendente &amp; Júpiter em Trígono</p>
              <p className="text-white/70 leading-relaxed mb-6">Aos 31 anos, não é Plutão sobre o Sol que define o céu de Marcio. Saturno atravessa praticamente em grau exato o Ascendente (~0°11') enquanto Júpiter o sustenta por trígono. O período combina expansão e estrutura: crescer exige forma; liberdade exige responsabilidade; visão precisa tornar-se construção. Júpiter também atravessa Leão, ativando progressivamente a Lua e Marte natais. Plutão, nos primeiros graus de Aquário, caminha em direção a Mercúrio natal — uma transformação intelectual/vocacional de longo prazo.</p>
              <p className="text-white/50 text-sm italic">Vitality Secret: Equilibrar a mente visionária com a prática de atividades físicas vigorosas, conexão com a natureza e cultivo de amizades leais que nutrem o coração.</p>
            </Card>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative bg-marcio-obsidian border-t border-white/5 overflow-hidden z-10">
        <div className="py-24 px-6 text-center relative z-10">
          <Reveal>
            <div className="mb-8 text-2xl animate-pulse">🔥</div>
            <h2 className="font-playfair text-3xl md:text-4xl text-white mb-8">✦ A Jornada Continua... ✦</h2>
            <div className="max-w-3xl mx-auto text-white/70 font-light leading-relaxed space-y-6 text-lg">
              <p>Marcio, navegar pela arquitetura da sua alma foi uma honra. Este mapa não é um destino final, mas um mapa do tesouro que vive dentro de você.</p>
              <p>Que as frequências reveladas aqui — da magia do seu <strong className="text-white">Macaco Solar</strong> à potência do seu <strong className="text-white">Rede de Fogo</strong> — sirvam como alicerce para sua maior obra-prima: a sua própria vida.</p>
              <p className="italic text-marcio-copper">Confie na sua visão, honre sua coragem e lembre-se: o futuro é construído por aqueles que ousam sonhar.</p>
            </div>
          </Reveal>
        </div>
        <div className="py-12 bg-black/20 text-center relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(184,115,51,0.05),transparent_50%)] pointer-events-none" />
          <p className="font-sans text-xs text-white/40 tracking-widest uppercase mb-2">Feito com magia e dados por</p>
          <h2 className="font-playfair text-2xl text-marcio-copper tracking-wide mb-8">Marroc <span className="text-sm font-sans text-white/60 tracking-widest ml-1">by CosmoVision</span></h2>
        </div>
      </footer>
    </div>
  );
}
