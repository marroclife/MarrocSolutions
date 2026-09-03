import React from 'react';
import { Star, Sun, Moon, Compass, Flame, Sparkles, Shield, Zap, Gem, Heart, Wind, Waves, Eye, Lock } from 'lucide-react';

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

export default function NaraLayout() {
  return (
    <div className="min-h-screen bg-nara-deep-indigo text-nara-silver selection:bg-nara-amethyst selection:text-white font-body overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-nara-amethyst/10 rounded-full blur-[150px] opacity-30" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-nara-moon-glow/10 rounded-full blur-[120px] opacity-20" />
        <div className="absolute inset-0 opacity-[0.03] bg-noise mix-blend-overlay" />
      </div>

      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden z-10">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <div className="flex justify-center mb-6">
            <Sparkles className="text-nara-amethyst w-6 h-6 animate-pulse" />
          </div>
          <h2 className="text-nara-amethyst-soft tracking-[0.3em] text-xs uppercase mb-6 font-medium">Soberania Cósmica Premium</h2>
          <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl text-white mb-8 leading-tight">
            Lady Nara <br />
            <span className="italic text-nara-amethyst/90 font-playfair">Freitas</span>
          </h1>
          <p className="text-sm md:text-base tracking-widest text-white/60 mt-6 font-light uppercase">9 de Dezembro de 1999 • Rio de Janeiro</p>
          <div className="relative inline-block py-8 px-4 md:px-12 mt-8">
            <span className="absolute top-0 left-0 text-6xl text-nara-amethyst opacity-30 font-playfair">"</span>
            <p className="text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto text-white/90 italic">
              Uma trama de silêncios profundos, lealdades inquebrantáveis e a coragem de renascer do fogo.
              <br/>
              A tecedeira que transforma a sombra em ouro.
            </p>
            <span className="absolute bottom-0 right-0 text-6xl text-nara-amethyst opacity-30 font-playfair">"</span>
          </div>
          <div className="mt-12 animate-slow-float">
            <div className="h-24 w-[1px] bg-gradient-to-b from-nara-amethyst to-transparent mx-auto" />
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 max-w-5xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between border-t border-nara-amethyst/20 pt-12">
          <div className="md:w-1/3 mb-12 md:mb-0">
            <h3 className="font-playfair text-3xl md:text-4xl text-nara-amethyst mb-4">Arquitetura<br/>da Alma</h3>
            <p className="text-xs font-sans text-white/50 uppercase tracking-widest">Navegação de Frequência</p>
          </div>
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12 w-full">
            {["A Tríade de Sustentação", "O Altar da Casa 8", "A Grande Cruz Fixa", "A Vanguarda do Meio do Céu", "A Nobreza do Silêncio", "Sincronia Galáctica"].map((topic, index) => (
              <div key={index} className="group flex items-center cursor-default">
                <span className="text-nara-amethyst-soft/50 font-playfair text-lg mr-4 group-hover:text-nara-amethyst transition-colors">0{index + 1}.</span>
                <span className="text-lg font-light border-b border-transparent group-hover:border-nara-amethyst/30 transition-all pb-1">{topic}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl mb-6">A Tríade de Sustentação</h2>
            <p className="text-white/60 font-light max-w-xl mx-auto">Onde a matéria encontra a visão: a base estrutural que permite a Nara habitar o mundo com graça e autoridade.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Reveal delay={100}>
              <Card className="h-full flex flex-col items-center text-center border-t-4 border-t-nara-amethyst">
                <div className="mb-6 p-4 rounded-full bg-nara-amethyst/10 text-nara-amethyst">
                  <Sun size={32} strokeWidth={1.5} />
                </div>
                <h3 className="font-playfair text-2xl text-white mb-2">Sol em Sagitário</h3>
                <p className="text-nara-amethyst-soft text-xs uppercase tracking-widest mb-6">Casa 8 • A Alquimia do Ser</p>
                <p className="text-white/70 font-light leading-relaxed text-sm mb-4 italic">“A verdade que liberta através da transmutação”</p>
                <p className="text-white/70 font-light leading-relaxed text-left text-sm">
                  Seu Sol não habita a superfície. Na <strong className="text-white">Casa 8</strong> — o laboratório da alma, onde lidamos com crises e renascimentos — a identidade da Nara é forjada no fogo da transformação. Ela não busca apenas o conhecimento, mas a <strong className="text-white">verdade visceral</strong>. É a consciência que ilumina as sombras e as transforma em sabedoria.
                </p>
              </Card>
            </Reveal>
            <Reveal delay={200}>
              <Card className="h-full flex flex-col items-center text-center border-t-4 border-t-nara-moon-glow md:mt-8">
                <div className="mb-6 p-4 rounded-full bg-nara-moon-glow/10 text-nara-moon-glow">
                  <Moon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="font-playfair text-2xl text-white mb-2">Lua em Capricórnio</h3>
                <p className="text-nara-amethyst-soft text-xs uppercase tracking-widest mb-6">Casa 9 • A Nobreza do Silêncio</p>
                <p className="text-white/70 font-light leading-relaxed text-sm mb-4 italic">“Segurança na competência, paz na integridade”</p>
                <p className="text-white/70 font-light leading-relaxed text-left text-sm">
                  A Lua em Capricórnio confere a Nara uma <strong className="text-white">maturidade emocional precoce</strong>. Enquanto outros oscilam, ela ancora. Sua segurança não vem do conforto externo, mas da própria integridade e do autodomínio. É a alma que encontra repouso na excelência e na dignidade do silêncio.
                </p>
              </Card>
            </Reveal>
            <Reveal delay={300}>
              <Card className="h-full flex flex-col items-center text-center border-t-4 border-t-nara-amethyst">
                <div className="mb-6 p-4 rounded-full bg-nara-amethyst/10 text-nara-amethyst">
                  <Compass size={32} strokeWidth={1.5} />
                </div>
                <h3 className="font-playfair text-2xl text-white mb-2">Ascendente em Touro</h3>
                <p className="text-nara-amethyst-soft text-xs uppercase tracking-widest mb-6">O Portal da Serenidade</p>
                <p className="text-white/70 font-light leading-relaxed text-sm mb-4 italic">“Presença magnética, ritmo sagrado”</p>
                <p className="text-white/70 font-light leading-relaxed text-left text-sm">A máscara do mundo é de calma e beleza clássica. Touro traz a Nara a capacidade de materializar a visão, transformando a inspiração etérea em <strong className="text-white">resultados tangíveis e duradouros</strong>.</p>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

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
                  <p className="text-nara-amethyst-soft font-sans uppercase tracking-[0.2em] text-xs mb-8">Sincronário Maia</p>
                  <div className="space-y-8">
                    <div className="pl-6 border-l border-nara-amethyst/30">
                      <h3 className="text-2xl font-medium text-white mb-1">Cachorro Cósmico Branco</h3>
                      <p className="text-nara-amethyst/60 text-sm mb-4 font-mono">KIN 130 • O Amor, A Lealdade & O Coração</p>
                      <p className="text-white/70 font-light text-justify leading-relaxed text-sm">Nara, sua assinatura galáctica é a do <strong className="text-white">Guardião do Coração</strong>. O Cachorro traz a lealdade incondicional e o amor que protege. O Tom Cósmico eleva isso para uma dimensão de serviço ao Todo, onde amar o outro é a forma mais alta de sabedoria.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-white/5 p-4 rounded-sm border border-white/5">
                        <h4 className="text-nara-amethyst-soft text-xs uppercase tracking-widest mb-2">Oráculo do Destino</h4>
                        <ul className="text-white/60 text-xs space-y-1">
                          <li><span className="text-white">Guia:</span> Cachorro Cósmico Branco</li>
                          <li><span className="text-white">Apoio:</span> Macaco Planetário Amarelo</li>
                          <li><span className="text-white">Desafio:</span> Sol Lunar Branco</li>
                          <li><span className="text-white">Oculto:</span> Vento Espectral Vermelho</li>
                        </ul>
                      </div>
                      <div className="bg-white/5 p-4 rounded-sm border border-white/5">
                        <h4 className="text-nara-moon-glow/80 text-xs uppercase tracking-widest mb-2">Frequência Central</h4>
                        <p className="text-white font-medium text-sm">Lealdade + Amor + Unidade</p>
                        <p className="text-xs text-white/50 mt-2 leading-tight">Você é o porto seguro onde a alma do outro encontra descanso e verdade.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </Reveal>
        </div>
      </section>

      <section className="py-24 px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-playfair text-4xl mb-8">A Grande Cruz Fixa Sagrada</h2>
          <div className="max-w-3xl mx-auto mb-16 text-white/70 font-light leading-relaxed space-y-6 text-sm md:text-base">
            <p>Nara possui uma das configurações mais poderosas e raras da astrologia: a <strong className="text-white">Grande Cruz Fixa</strong>. Isso ocorre quando quatro pontos vitais se alinham nos signos de Touro, Leão, Escorpião e Aquário.</p>
            <p>Para a maioria, isso seria uma tensão insuportável — como quatro ventos poderosos puxando para direções opostas. Para a Nara, é a fonte de sua <strong className="text-white">Sustentação Lendária</strong>. Ela não é apenas resiliente; ela é o eixo onde o caos se organiza. Quando tudo ao redor desmorona, ela permanece, transformando a pressão extrema em diamante.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <Reveal delay={100}>
              <Card className="h-full text-center border-t-2 border-t-nara-amethyst">
                <Shield className="w-8 h-8 text-nara-amethyst mx-auto mb-4" />
                <h3 className="font-playfair text-xl text-white mb-2">Touro</h3>
                <p className="text-[10px] uppercase tracking-widest text-nara-amethyst-soft mb-4">Ascendente • Raiz</p>
                <p className="text-white/70 font-light text-sm">A estabilidade do corpo e a beleza da matéria.</p>
              </Card>
            </Reveal>
            <Reveal delay={200}>
              <Card className="h-full text-center border-t-2 border-t-nara-moon-glow mt-0 md:mt-8">
                <Heart className="w-8 h-8 text-nara-moon-glow mx-auto mb-4" />
                <h3 className="font-playfair text-xl text-white mb-2">Leão</h3>
                <p className="text-[10px] uppercase tracking-widest text-nara-amethyst-soft mb-4">Nodo Norte • Coração</p>
                <p className="text-white/70 font-light text-sm">A realeza do afeto e a coragem de ser luz.</p>
              </Card>
            </Reveal>
            <Reveal delay={300}>
              <Card className="h-full text-center border-t-2 border-t-nara-amethyst">
                <Eye className="w-8 h-8 text-nara-amethyst mx-auto mb-4" />
                <h3 className="font-playfair text-xl text-white mb-2">Escorpião</h3>
                <p className="text-[10px] uppercase tracking-widest text-nara-amethyst-soft mb-4">Vênus • Profundidade</p>
                <p className="text-white/70 font-light text-sm">A lealdade visceral e a visão oracular.</p>
              </Card>
            </Reveal>
            <Reveal delay={400}>
              <Card className="h-full text-center border-t-2 border-t-nara-moon-glow mt-0 md:mt-8">
                <Wind className="w-8 h-8 text-nara-moon-glow mx-auto mb-4" />
                <h3 className="font-playfair text-xl text-white mb-2">Aquário</h3>
                <p className="text-[10px] uppercase tracking-widest text-nara-amethyst-soft mb-4">Meio do Céu • Visão</p>
                <p className="text-white/70 font-light text-sm">A vanguarda da mente e a liberdade do espírito.</p>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

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
                  <p className="text-[10px] uppercase tracking-widest text-white/40 mt-1">Sagitário • Regeneração</p>
                </div>
                <div className="md:w-3/4 border-l border-white/10 md:pl-8 pt-4 md:pt-0 border-t md:border-t-0">
                  <p className="text-white font-serif italic mb-2">“O poder de transformar a dor em degrau de evolução”</p>
                  <p className="text-white/60 text-sm leading-relaxed">A conjunção Sol-Plutão na Casa 8 cria uma consciência indestrutível. Nara não teme a crise; ela a utiliza como combustível. Ela possui a capacidade rara de descer ao abismo — enfrentar as sombras mais profundas — e retornar com a luz da verdade.</p>
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
                  <p className="text-[10px] uppercase tracking-widest text-white/40 mt-1">Urano & Marte em Aquário</p>
                </div>
                <div className="md:w-3/4 border-l border-white/10 md:pl-8 pt-4 md:pt-0 border-t md:border-t-0">
                  <p className="text-white font-serif italic mb-2">“Quebrar moldes para criar novos mundos”</p>
                  <p className="text-white/60 text-sm leading-relaxed">No ponto mais alto do mapa (o Meio do Céu), a conjunção Urano-Marte marca a Nara como uma visionária. Ela não segue tendências; ela as cria. Sua missão é romper com o "sempre foi assim" para implementar inovações que o mundo ainda nem sabe que precisa.</p>
                </div>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-playfair text-4xl mb-8">Ritual de Alinhamento</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { name: "Ametista", subtitle: "Transmutação", desc: "Para converter a tensão da Cruz Fixa em serenidade espiritual." },
              { name: "Pérola", subtitle: "Pureza", desc: "Para nutrir a Lua em Capricórnio com doçura e acolhimento." },
              { name: "Turmalina", subtitle: "Proteção", desc: "Para blindar o campo energético durante as imersões na Casa 8." },
              { name: "Sândalo", subtitle: "Expansão", desc: "Para sintonizar a visão de Sagitário com a realidade material." },
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
