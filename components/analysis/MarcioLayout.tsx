import React from 'react';
import { Star, Sun, Moon, Compass, Flame, Sparkles, Mountain, Zap, Gem, Shield, Anchor } from 'lucide-react';

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

export default function MarcioLayout() {
  return (
    <div className="min-h-screen bg-marcio-obsidian text-marcio-slate selection:bg-marcio-copper selection:text-white font-body overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-marcio-copper/5 rounded-full blur-[150px] opacity-20" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-marcio-ember/5 rounded-full blur-[120px] opacity-10" />
        <div className="absolute inset-0 opacity-[0.02] bg-noise mix-blend-overlay" />
      </div>

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
          <p className="text-sm md:text-base tracking-widest text-white/60 mt-6 font-light uppercase">13 de Fevereiro de 1995 • 10:20 BRT • Rio de Janeiro</p>
          <div className="relative inline-block py-8 px-4 md:px-12 mt-8">
            <span className="absolute top-0 left-0 text-6xl text-marcio-copper opacity-30 font-playfair">"</span>
            <p className="text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto text-white/90 italic">
              Mente de vanguarda, coração de leão, alma de arquiteto.
              <br/>
              Eu construo o futuro sem perder a chama do sagrado.
            </p>
            <span className="absolute bottom-0 right-0 text-6xl text-marcio-copper opacity-30 font-playfair">"</span>
          </div>
          <div className="mt-12 animate-slow-float">
            <div className="h-24 w-[1px] bg-gradient-to-b from-marcio-copper to-transparent mx-auto" />
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 max-w-5xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between border-t border-marcio-copper/20 pt-12">
          <div className="md:w-1/3 mb-12 md:mb-0">
            <h3 className="font-playfair text-3xl md:text-4xl text-marcio-copper mb-4">Índice<br/>Cósmico</h3>
            <p className="text-xs font-sans text-white/50 uppercase tracking-widest">Navegação Estelar</p>
          </div>
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12 w-full">
            {["Tríade Fundamental", "Grande Trígono de Fogo", "Identidade Galáctica", "Numerologia da Alma", "Caminho da Alma", "Portais de Poder"].map((topic, index) => (
              <div key={index} className="group flex items-center cursor-default">
                <span className="text-marcio-copper-light/50 font-playfair text-lg mr-4 group-hover:text-marcio-copper-light transition-colors">0{index + 1}.</span>
                <span className="text-lg font-light border-b border-transparent group-hover:border-marcio-copper/30 transition-all pb-1">{topic}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl mb-6">Portais Fundamentais</h2>
            <p className="text-white/60 font-light max-w-xl mx-auto">A Tríade que define sua arquitetura interna: mente visionária, coração artístico e presença pioneira.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Reveal delay={100}>
              <Card className="h-full flex flex-col items-center text-center border-t-4 border-t-marcio-copper">
                <div className="mb-6 p-4 rounded-full bg-marcio-copper/10 text-marcio-copper">
                  <Sun size={32} strokeWidth={1.5} />
                </div>
                <h3 className="font-playfair text-2xl text-white mb-2">Sol em Aquário</h3>
                <p className="text-marcio-copper-light text-xs uppercase tracking-widest mb-6">Casa 11 • A Mente do Futuro</p>
                <p className="text-white/70 font-light leading-relaxed text-sm mb-4 italic">“Arquiteto de redes e comunidades conscientes”</p>
                <p className="text-white/70 font-light leading-relaxed text-left text-sm">Seu Sol pulsa no lar natural de Aquário na Casa 11. Sua identidade se constrói na liberdade intelectual, na quebra de padrões e na capacidade de enxergar conexões invisíveis.</p>
              </Card>
            </Reveal>
            <Reveal delay={200}>
              <Card className="h-full flex flex-col items-center text-center border-t-4 border-t-marcio-ember md:mt-8">
                <div className="mb-6 p-4 rounded-full bg-marcio-ember/10 text-marcio-ember">
                  <Moon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="font-playfair text-2xl text-white mb-2">Lua em Leão</h3>
                <p className="text-marcio-copper-light text-xs uppercase tracking-widest mb-6">Casa 5 • O Coração do Criador</p>
                <p className="text-white/70 font-light leading-relaxed text-sm mb-4 italic">“Alma de artista e calor generoso”</p>
                <p className="text-white/70 font-light leading-relaxed text-left text-sm">Sua Lua no grau puro de Leão na Casa 5 confere imenso magnetismo emocional, coração caloroso e dignidade régia. É o centro vulcânico da sua criatividade.</p>
              </Card>
            </Reveal>
            <Reveal delay={300}>
              <Card className="h-full flex flex-col items-center text-center border-t-4 border-t-marcio-copper">
                <div className="mb-6 p-4 rounded-full bg-marcio-copper/10 text-marcio-copper">
                  <Compass size={32} strokeWidth={1.5} />
                </div>
                <h3 className="font-playfair text-2xl text-white mb-2">Ascendente em Áries</h3>
                <p className="text-marcio-copper-light text-xs uppercase tracking-widest mb-6">O Pioneiro Magnético</p>
                <p className="text-white/70 font-light leading-relaxed text-sm mb-4 italic">“Presença dinâmica e olhar firme”</p>
                <p className="text-white/70 font-light leading-relaxed text-left text-sm">Você chega com energia direta e coragem. O regente Marte está em Leão na Casa 5, conferindo carisma de líder nato e calor solar.</p>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

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
                  <p className="text-marcio-copper-light font-sans uppercase tracking-[0.2em] text-xs mb-8">Sincronário Maia</p>
                  <div className="space-y-8">
                    <div className="pl-6 border-l border-marcio-copper/30">
                      <h3 className="text-2xl font-medium text-white mb-1">Macaco Solar Azul</h3>
                      <p className="text-marcio-copper/60 text-sm mb-4 font-mono">KIN 191 • A Magia, O Lúdico & A Realização</p>
                      <p className="text-white/70 font-light text-justify leading-relaxed text-sm">Marcio, sua assinatura galáctica é a do <strong>Brincalhão Cósmico</strong> que transforma realidades. O Macaco traz a magia, a quebra de paradigmas e os sorrisos. O Tom Solar transforma essa energia em realização pura.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-white/5 p-4 rounded-sm border border-white/5">
                        <h4 className="text-marcio-copper-light text-xs uppercase tracking-widest mb-2">Oráculo do Destino</h4>
                        <ul className="text-white/60 text-xs space-y-1">
                          <li><span className="text-white">Guia:</span> Macaco Solar Azul</li>
                          <li><span className="text-white">Apoio:</span> Estrela Planetária Amarela</li>
                          <li><span className="text-white">Desafio:</span> Cachorro Lunar Branco</li>
                          <li><span className="text-white">Oculto:</span> Dragão Escpectral Vermelho</li>
                        </ul>
                      </div>
                      <div className="bg-white/5 p-4 rounded-sm border border-white/5">
                        <h4 className="text-marcio-ember/80 text-xs uppercase tracking-widest mb-2">Frequência Central</h4>
                        <p className="text-white font-medium text-sm">Magia + Realização + Ilusão</p>
                        <p className="text-xs text-white/50 mt-2 leading-tight">Você veio para brincar com a realidade e, ao brincar, reinventá-la.</p>
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
          <h2 className="font-playfair text-4xl mb-8">Grande Trígono de Fogo Cósmico</h2>
          <div className="max-w-3xl mx-auto mb-16 text-white/70 font-light leading-relaxed space-y-6 text-sm md:text-base">
            <p>Uma conexão harmoniosa nos três signos de Fogo: <strong>Áries, Leão e Sagitário</strong>. É o circuito sagrado que canaliza entusiasmo, coragem criativa e regeneração instantânea.</p>
            <p>Esta configuração concede uma chama interna inextinguível. Mesmo diante dos maiores desafios, você encontra em si mesmo a centelha de ânimo, fé e coragem para liderar.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Reveal delay={100}>
              <Card className="h-full text-center border-t-2 border-t-marcio-ember">
                <Mountain className="w-8 h-8 text-marcio-ember mx-auto mb-4" />
                <h3 className="font-playfair text-xl text-white mb-2">Áries</h3>
                <p className="text-[10px] uppercase tracking-widest text-marcio-copper-light mb-4">Ascendente • Identidade</p>
                <p className="text-white/70 font-light text-sm">A identidade do guerreiro pioneiro. Coragem para iniciar e liderar.</p>
              </Card>
            </Reveal>
            <Reveal delay={200}>
              <Card className="h-full text-center border-t-2 border-t-marcio-copper mt-0 md:mt-8">
                <Sun className="w-8 h-8 text-marcio-copper mx-auto mb-4" />
                <h3 className="font-playfair text-xl text-white mb-2">Leão</h3>
                <p className="text-[10px] uppercase tracking-widest text-marcio-copper-light mb-4">Lua & Marte • Coração</p>
                <p className="text-white/70 font-light text-sm">O coração do criador. Paixão, generosidade e magnetismo.</p>
              </Card>
            </Reveal>
            <Reveal delay={300}>
              <Card className="h-full text-center border-t-2 border-t-marcio-ember">
                <Sparkles className="w-8 h-8 text-marcio-ember mx-auto mb-4" />
                <h3 className="font-playfair text-xl text-white mb-2">Sagitário</h3>
                <p className="text-[10px] uppercase tracking-widest text-marcio-copper-light mb-4">Júpiter & Plutão • Sabedoria</p>
                <p className="text-white/70 font-light text-sm">A sabedoria transcendental. Fé, expansão e regeneração.</p>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-marcio-charcoal/30 relative z-10">
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
                  <p className="text-[10px] uppercase tracking-widest text-white/40 mt-1">Casa 8 • Destino Alquímico</p>
                </div>
                <div className="md:w-3/4 border-l border-white/10 md:pl-8 pt-4 md:pt-0 border-t md:border-t-0">
                  <p className="text-white font-serif italic mb-2">“Mergulhar no autoconhecimento profundo e no poder pessoal”</p>
                  <p className="text-white/60 text-sm leading-relaxed">Seu caminho evolutivo pede que você desenvolva domínio sobre a psique, inteligência financeira compartilhada e alquimia interior. Sair da previsibilidade e abraçar a transformação.</p>
                </div>
              </Card>
            </Reveal>
            <Reveal>
              <Card className="flex flex-col md:flex-row gap-8 items-center bg-gradient-to-r from-white/5 to-transparent">
                <div className="md:w-1/4 text-center md:text-left">
                  <h3 className="text-marcio-ember font-playfair text-2xl">Júpiter em Sagitário</h3>
                  <p className="text-[10px] uppercase tracking-widest text-white/40 mt-1">Casa 9 • Domicílio Sagrado</p>
                </div>
                <div className="md:w-3/4 border-l border-white/10 md:pl-8 pt-4 md:pt-0 border-t md:border-t-0">
                  <p className="text-white font-serif italic mb-2">“Mente cósmica e proteção providencial”</p>
                  <p className="text-white/60 text-sm leading-relaxed">Júpiter em seu próprio domicílio confere sorte, expansão filosófica e fé inabalável. Sua mente é um portal entre o conhecimento antigo e as fronteiras do futuro.</p>
                </div>
              </Card>
            </Reveal>
            <Reveal>
              <Card className="flex flex-col md:flex-row gap-8 items-center bg-gradient-to-r from-white/5 to-transparent">
                <div className="md:w-1/4 text-center md:text-left">
                  <h3 className="text-white font-playfair text-2xl">Quíron em Virgem</h3>
                  <p className="text-[10px] uppercase tracking-widest text-white/40 mt-1">Casa 6 • O Mestre dos Detalhes</p>
                </div>
                <div className="md:w-3/4 border-l border-white/10 md:pl-8 pt-4 md:pt-0 border-t md:border-t-0">
                  <p className="text-white font-serif italic mb-2">“Curar através da organização e precisão técnica”</p>
                  <p className="text-white/60 text-sm leading-relaxed">Quíron em Virgem representa o curador dos métodos. Você transforma inseguranças quanto à perfeição em maestria inigualável de design, engenharia de processos e qualidade.</p>
                </div>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl mb-4">Ferramentas & Rituais</h2>
            <p className="text-white/50 text-sm font-sans uppercase tracking-widest">A Farmácia da Alma</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { name: "Cornalina", subtitle: "Fogo Criativo", desc: "Ativa a coragem e a paixão do Grande Trígono de Fogo." },
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
                <p className="text-white/80 leading-relaxed text-sm">Às segundas-feiras, escreva três objetivos concretos para a semana e acenda uma vela laranja. visualize cada um se realizando com precisão. <strong>"Eu construo o futuro com paixão e método."</strong></p>
              </div>
            </Card>
          </Reveal>
        </div>
      </section>

      <footer className="relative bg-marcio-obsidian border-t border-white/5 overflow-hidden z-10">
        <div className="py-24 px-6 text-center relative z-10">
          <Reveal>
            <div className="mb-8 text-2xl animate-pulse">🔥</div>
            <h2 className="font-playfair text-3xl md:text-4xl text-white mb-8">✦ A Jornada Continua... ✦</h2>
            <div className="max-w-3xl mx-auto text-white/70 font-light leading-relaxed space-y-6 text-lg">
              <p>Marcio, navegar pela arquitetura da sua alma foi uma honra. Este mapa não é um destino final, mas um mapa do tesouro que vive dentro de você.</p>
              <p>Que as frequências reveladas aqui — da magia do seu <strong>Macaco Solar</strong> à potência do seu <strong>Grande Trígono de Fogo</strong> — sirvam como alicerce para sua maior obra-prima: a sua própria vida.</p>
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
