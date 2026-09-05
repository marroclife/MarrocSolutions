import React from 'react';
import { Sun, Moon, Star, Flame, Mountain, Compass, Zap, Sparkles, Target, ArrowUpRight, Gem, Eye, BookOpen, Shield, ArrowDown } from 'lucide-react';

const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`relative overflow-hidden bg-white/[0.02] border border-white/10 rounded-sm p-8 shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_-10px_rgba(139,115,85,0.15)] hover:border-barbara-terracotta/30 ${className}`}>
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
    {eyebrow && <p className="text-barbara-terracotta-light text-xs uppercase tracking-[0.3em] mb-4">{eyebrow}</p>}
    <h2 className="font-playfair text-4xl md:text-5xl mb-6">{title}</h2>
    {description && <p className="text-white/60 font-light max-w-2xl mx-auto">{description}</p>}
  </div>
);

export default function BarbaraLayout() {
  return (
    <div className="min-h-screen bg-barbara-earth text-barbara-slate selection:bg-barbara-terracotta selection:text-white font-body overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-barbara-terracotta/5 rounded-full blur-[150px] opacity-20" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-barbara-gold/5 rounded-full blur-[120px] opacity-10" />
        <div className="absolute inset-0 opacity-[0.02] bg-noise mix-blend-overlay" />
      </div>

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden z-10">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <div className="flex justify-center mb-6">
            <Flame className="text-barbara-terracotta w-6 h-6 animate-pulse" />
          </div>
          <h2 className="text-barbara-terracotta-light tracking-[0.3em] text-xs uppercase mb-6 font-medium">Mapa Natal Premium</h2>
          <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl text-white mb-8 leading-tight">
            Bárbara <br />
            <span className="italic text-barbara-terracotta/90 font-playfair">Oliveira Nascimento</span>
          </h1>
          <p className="text-sm md:text-base tracking-widest text-white/60 mt-6 font-light uppercase">30 de Abril de 1995 • 19:10 BRAS • São Paulo, SP</p>
          <p className="text-xs text-white/40 mt-2 uppercase tracking-widest">Ascendente Sagitário 5°56' • Sol Touro 10°05' Casa 5 • Lua Touro 23°12' Casa 6</p>
          <div className="relative inline-block py-8 px-4 md:px-12 mt-8">
            <span className="absolute top-0 left-0 text-6xl text-barbara-terracotta opacity-30 font-playfair">"</span>
            <p className="text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto text-white/90 italic">
              A Construtora de Horizontes.
              <br/>
              Raiz que constrói, fogo que expande.
            </p>
            <span className="absolute bottom-0 right-0 text-6xl text-barbara-terracotta opacity-30 font-playfair">"</span>
          </div>
          <div className="mt-12 animate-slow-float">
            <div className="h-24 w-[1px] bg-gradient-to-b from-barbara-terracotta to-transparent mx-auto" />
          </div>
        </div>
      </section>

      {/* ÍNDICE */}
      <section className="py-24 px-6 md:px-12 max-w-5xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between border-t border-barbara-terracotta/20 pt-12">
          <div className="md:w-1/3 mb-12 md:mb-0">
            <h3 className="font-playfair text-3xl md:text-4xl text-barbara-terracotta mb-4">Índice<br/>Cósmico</h3>
            <p className="text-xs font-sans text-white/50 uppercase tracking-widest">Navegação Estelar</p>
          </div>
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12 w-full">
            {[
              "Tríade Fundamental",
              "A Terra que Cria",
              "O Horizonte Interior",
              "A Mente que Escava",
              "A Coroa de Fogo",
              "O Templo Interior",
              "O Invisível",
              "Caminho da Alma",
              "Elementos & Modalidades",
              "Casas & Terrenos",
              "Aspectos Estruturais",
              "Identidade Galáctica",
              "O Oráculo da Mão",
              "A Onda do Dragão",
              "A Construtora de Horizontes",
            ].map((topic, index) => (
              <div key={index} className="group flex items-center cursor-default">
                <span className="text-barbara-terracotta-light/50 font-playfair text-lg mr-4 group-hover:text-barbara-terracotta-light transition-colors">{String(index + 1).padStart(2, '0')}.</span>
                <span className="text-lg font-light border-b border-transparent group-hover:border-barbara-terracotta/30 transition-all pb-1">{topic}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRÍADE FUNDAMENTAL */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <SectionTitle eyebrow="Os Três Pilares" title="Portais Fundamentais" description="A Tríade que define sua arquitetura interna: solidez taurina, mundo emocional em ritmo e presença sagitariana." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Reveal delay={100}>
              <Card className="h-full flex flex-col items-center text-center border-t-4 border-t-barbara-terracotta">
                <div className="mb-6 p-4 rounded-full bg-barbara-terracotta/10 text-barbara-terracotta">
                  <Sun size={32} strokeWidth={1.5} />
                </div>
                <h3 className="font-playfair text-2xl text-white mb-2">Sol em Touro</h3>
                <p className="text-barbara-terracotta-light text-xs uppercase tracking-widest mb-6">10°05' • Casa 5 • A Criadora da Forma</p>
                <p className="text-white/70 font-light leading-relaxed text-sm mb-4 italic">"Aquilo que ama precisa ganhar forma."</p>
                <p className="text-white/70 font-light leading-relaxed text-left text-sm">Sol em Touro na Casa 5 coloca a identidade central na criação de valor próprio. Não é simplesmente estabilidade: é a capacidade simbólica de cultivar algo até que adquira consistência, beleza e permanência.</p>
                <p className="text-white/50 text-xs mt-4 leading-relaxed">A Casa 5 reforça autoria, prazer, romance e expressão pessoal. Touro fixo traz persistência quando reconhece valor.</p>
              </Card>
            </Reveal>
            <Reveal delay={200}>
              <Card className="h-full flex flex-col items-center text-center border-t-4 border-t-barbara-gold md:mt-8">
                <div className="mb-6 p-4 rounded-full bg-barbara-gold/10 text-barbara-gold">
                  <Moon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="font-playfair text-2xl text-white mb-2">Lua em Touro</h3>
                <p className="text-barbara-terracotta-light text-xs uppercase tracking-widest mb-6">23°12' • Casa 6 • Exaltada</p>
                <p className="text-white/70 font-light leading-relaxed text-sm mb-4 italic">"O mundo emocional procura um ritmo no qual possa confiar."</p>
                <p className="text-white/70 font-light leading-relaxed text-left text-sm">Lua exaltada em Touro encontra segurança emocional na continuidade, no corpo, nos sentidos e na previsibilidade. A Casa 6 desloca isso para o cotidiano, trabalho, hábitos e manutenção.</p>
                <p className="text-white/50 text-xs mt-4 leading-relaxed">Sombra possível: apego à previsibilidade, resistência a mudanças abruptas, dificuldade de abandonar estruturas que já deram segurança.</p>
              </Card>
            </Reveal>
            <Reveal delay={300}>
              <Card className="h-full flex flex-col items-center text-center border-t-4 border-t-barbara-terracotta">
                <div className="mb-6 p-4 rounded-full bg-barbara-terracotta/10 text-barbara-terracotta">
                  <Compass size={32} strokeWidth={1.5} />
                </div>
                <h3 className="font-playfair text-2xl text-white mb-2">Ascendente em Sagitário</h3>
                <p className="text-barbara-terracotta-light text-xs uppercase tracking-widest mb-6">5°56' • A Porta do Horizonte</p>
                <p className="text-white/70 font-light leading-relaxed text-sm mb-4 italic">"Por dentro, construir raízes; por fora, procurar horizontes."</p>
                <p className="text-white/70 font-light leading-relaxed text-left text-sm">O Ascendente em Sagitário introduz movimento, expansão, franqueza e busca de significado. Cria uma aparente — e produtiva — contradição: interior taurino e exterior sagitariano.</p>
                <p className="text-white/50 text-xs mt-4 leading-relaxed">Regente do mapa: Júpiter, em domicílio em Sagitário e na Casa 1.</p>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SINCRONIA GALÁTICA */}
      <section className="py-24 px-6 bg-gradient-to-b from-transparent via-barbara-terracotta/5 to-transparent relative z-10">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <Card className="p-0 border-none bg-transparent shadow-none !overflow-visible">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative order-2 lg:order-1 flex justify-center">
                  <div className="absolute inset-0 bg-barbara-terracotta/10 blur-[60px] rounded-full" />
                  <div className="relative aspect-square w-64 md:w-80 rounded-full border border-barbara-terracotta/20 flex flex-col items-center justify-center bg-barbara-clay/50 backdrop-blur-sm p-4 group">
                    <div className="relative w-full h-full flex items-center justify-center p-4">
                      <img src="/images/kin07.png" alt="Oráculo Kin 07" className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(139,115,85,0.3)] group-hover:drop-shadow-[0_0_25px_rgba(139,115,85,0.5)] transition-all duration-500" />
                    </div>
                    <div className="absolute bottom-6 px-4 py-1 bg-barbara-terracotta/10 border border-barbara-terracotta/30 rounded-full backdrop-blur-md">
                      <span className="text-[10px] md:text-xs uppercase tracking-widest text-barbara-terracotta font-medium">Canalização da Realização</span>
                    </div>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <h2 className="font-playfair text-4xl md:text-5xl mb-2">Identidade Galáctica</h2>
                  <p className="text-barbara-terracotta-light font-sans uppercase tracking-[0.2em] text-xs mb-8">Dreamspell • Sincronário das 13 Luas</p>

                  <div className="pl-6 border-l border-barbara-terracotta/30 mb-8">
                    <h3 className="text-2xl font-medium text-white mb-1">Mão Ressonante Azul</h3>
                    <p className="text-barbara-terracotta/60 text-sm mb-2 font-mono">KIN 07 • Conhecimento, Cura & Realização • Tom 7: Ressonante</p>
                    <p className="text-white/70 font-light text-justify leading-relaxed text-sm">
                      Bárbara, sua assinatura galáctica é a da <strong>realização sintonizada</strong>. A Mão transforma conhecimento em forma concreta. O Tom Ressonante pergunta: <em>"em que frequência você transmite o que realiza?"</em> Não basta fazer: é preciso que o que é feito ressoe.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-white/5 p-4 rounded-sm border border-white/5">
                      <h4 className="text-barbara-terracotta-light text-xs uppercase tracking-widest mb-3">Oráculo do KIN 07</h4>
                      <ul className="text-white/60 text-xs space-y-2">
                        <li><span className="text-white">Destino:</span> Mão Ressonante Azul — KIN 07</li>
                        <li><span className="text-white">Guia:</span> Tormenta Ressonante Azul — KIN 59</li>
                        <li><span className="text-white">Apoio:</span> Humano Ressonante Amarelo — KIN 72</li>
                        <li><span className="text-white">Desafio:</span> Terra Ressonante Vermelha — KIN 137</li>
                        <li><span className="text-white">Oculto:</span> Mago Ressonante Branco — KIN 254</li>
                      </ul>
                      <p className="text-[10px] text-white/30 mt-3 italic">Oráculo segundo a matriz do Dreamspell de José Argüelles.</p>
                    </div>
                    <div className="bg-white/5 p-4 rounded-sm border border-white/5">
                      <h4 className="text-barbara-gold/80 text-xs uppercase tracking-widest mb-3">Frequência Central</h4>
                      <p className="text-white font-medium text-sm mb-2">SINTONIZAÇÃO + CONHECIMENTO + REALIZAÇÃO</p>
                      <ul className="text-xs text-white/50 leading-relaxed space-y-1">
                        <li>✋ Realize aquilo que conhece.</li>
                        <li>🌩 Transforme aquilo que realiza.</li>
                        <li>🧑 Devolva escolha ao outro.</li>
                        <li>🌎 Reconheça o momento certo.</li>
                        <li>🧙 Permita-se também receber.</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-white/[0.03] border border-white/10 rounded-sm">
                    <p className="text-white/70 text-xs leading-relaxed italic">
                      KIN 07 é o 7º Kin da Onda Encantada do Dragão Vermelho. O pano de fundo é o nascimento: algo nasce, a Mão realiza, a Tormenta transforma, o Humano escolhe, a Terra navega e o Mago recebe. Dreamspell e Tzolk'in maia histórico não são sistemas idênticos.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </Reveal>
        </div>
      </section>

      {/* CONCEITO CENTRAL */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <SectionTitle eyebrow="Arquitetura Principal" title="A Construtora de Horizontes" description="A combinação estrutural que define este mapa: Terra que constrói e Fogo que se expande." />
          <div className="max-w-3xl mx-auto mb-16 text-white/70 font-light leading-relaxed space-y-6 text-sm md:text-base">
            <p>A Bárbara não pode ser reduzida a "taurina". Há uma arquitetura muito mais interessante: <strong className="text-white">Terra que constrói</strong> e <strong className="text-white">Fogo que se expande</strong>.</p>
            <p>Sol, Lua e Mercúrio em Touro formam uma base sólida. Ascendente Sagitário, Júpiter em Sagitário na Casa 1 e Marte em Leão conjunto ao MC abrem o horizonte.</p>
            <p>O eixo central é simples e fértil: <strong className="text-white">Raiz × Horizonte</strong> ou <strong className="text-white">Permanência × Expansão</strong>.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Reveal delay={100}>
              <Card className="h-full text-center border-t-2 border-t-barbara-terracotta">
                <Mountain className="w-8 h-8 text-barbara-terracotta mx-auto mb-4" />
                <h3 className="font-playfair text-xl text-white mb-2">Touro pergunta</h3>
                <p className="text-white/70 font-light text-sm italic">"O que possui valor suficiente para permanecer?"</p>
                <p className="text-white/50 text-xs mt-4">Matéria • Valor • Continuidade • Cultivo</p>
              </Card>
            </Reveal>
            <Reveal delay={200}>
              <Card className="h-full text-center border-t-2 border-t-barbara-gold">
                <Compass className="w-8 h-8 text-barbara-gold mx-auto mb-4" />
                <h3 className="font-playfair text-xl text-white mb-2">Sagitário pergunta</h3>
                <p className="text-white/70 font-light text-sm italic">"Até onde isso pode me levar?"</p>
                <p className="text-white/50 text-xs mt-4">Movimento • Horizonte • Significado • Exploração</p>
              </Card>
            </Reveal>
          </div>
          <Reveal>
            <Card className="bg-gradient-to-br from-barbara-terracotta/10 to-transparent border-barbara-terracotta/20">
              <div className="max-w-3xl mx-auto">
                <h3 className="font-playfair text-2xl text-barbara-terracotta mb-4">Matéria + Movimento</h3>
                <p className="text-white/70 leading-relaxed text-sm">Ela precisa de chão suficiente para explorar sem perder a própria base. A Terra constrói; o Fogo movimenta. A Mão realiza; Júpiter expande. Marte leva a obra ao mundo; Plutão pergunta se aquilo que parece sólido também consegue sobreviver à transformação.</p>
              </div>
            </Card>
          </Reveal>
        </div>
      </section>

      {/* A TERRA QUE CRIA */}
      <section className="py-24 px-6 bg-barbara-clay/30 relative z-10">
        <div className="max-w-6xl mx-auto">
          <SectionTitle eyebrow="Tríade Taurina" title="A Terra que Cria" description="Sol, Lua e Mercúrio em Touro, distribuídos entre as Casas 5 e 6." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Reveal delay={100}>
              <Card className="h-full">
                <Sun className="w-6 h-6 text-barbara-terracotta mb-4" />
                <h3 className="font-playfair text-xl text-white mb-2">Sol em Touro / Casa 5</h3>
                <p className="text-barbara-terracotta-light text-xs uppercase tracking-widest mb-4">Touro Criativo</p>
                <p className="text-white/60 text-sm leading-relaxed">Produzir, cultivar, expressar, criar valor próprio. A identidade encontra luz quando algo ganha forma através do prazer e da autoria.</p>
              </Card>
            </Reveal>
            <Reveal delay={200}>
              <Card className="h-full">
                <Moon className="w-6 h-6 text-barbara-gold mb-4" />
                <h3 className="font-playfair text-xl text-white mb-2">Lua em Touro / Casa 6</h3>
                <p className="text-barbara-terracotta-light text-xs uppercase tracking-widest mb-4">Touro Operacional</p>
                <p className="text-white/60 text-sm leading-relaxed">Organizar, repetir, manter, trabalhar, estruturar o cotidiano. O mundo emocional procura um ritmo no qual possa confiar.</p>
              </Card>
            </Reveal>
            <Reveal delay={300}>
              <Card className="h-full">
                <Sparkles className="w-6 h-6 text-barbara-terracotta mb-4" />
                <h3 className="font-playfair text-xl text-white mb-2">Mercúrio em Touro / Casa 6</h3>
                <p className="text-barbara-terracotta-light text-xs uppercase tracking-widest mb-4">Mente Concreta</p>
                <p className="text-white/60 text-sm leading-relaxed">Pensamento paciente, memória, consistência, necessidade de verificar antes de mudar de conclusão. A mente procura solidez.</p>
              </Card>
            </Reveal>
          </div>
          <Reveal>
            <div className="mt-8 text-center max-w-3xl mx-auto">
              <p className="text-white/60 text-sm leading-relaxed italic">Não basta imaginar. Existe uma assinatura forte de transformar valor em forma, e forma em continuidade.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* O HORIZONTE INTERIOR */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <SectionTitle eyebrow="Regente do Mapa" title="Júpiter em Sagitário • Casa 1" description="O planeta-guia do Ascendente encontra-se em seu próprio domicílio, na primeira casa." />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <Card className="h-full">
                <h3 className="font-playfair text-2xl text-white mb-4">A Expansão que Habita a Porta</h3>
                <p className="text-white/70 leading-relaxed mb-6">Sagitário ascende. Júpiter é o regente. E Júpiter está em Sagitário, seu domicílio, na Casa 1. Isso confere enorme relevância estrutural: expansão, filosofia, crença, conhecimento, exploração e busca de sentido não são capítulos secundários — são parte da forma como ela entra no mundo.</p>
                <p className="text-white/50 text-sm leading-relaxed">A retrogradação não indica fraqueza. Sugere uma relação mais interiorizada e reflexiva com verdade, crença, direção e significado. A pergunta central é: <em>"Que verdade é realmente minha?"</em></p>
              </Card>
            </Reveal>
            <Reveal>
              <div className="space-y-4">
                {[
                  { label: "Expansão", text: "Crescer, explorar, enxergar além." },
                  { label: "Filosofia", text: "Buscar princípios e sistemas de sentido." },
                  { label: "Crença", text: "Investir em algo maior que si mesma." },
                  { label: "Direção", text: "Precisar de norte para se mover." },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 bg-white/[0.03] border border-white/10 rounded-sm">
                    <ArrowUpRight className="w-5 h-5 text-barbara-terracotta flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-white text-sm font-medium mb-1">{item.label}</h4>
                      <p className="text-white/50 text-sm">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* A MENTE QUE ESCAVA */}
      <section className="py-24 px-6 bg-gradient-to-b from-transparent via-barbara-terracotta/5 to-transparent relative z-10">
        <div className="max-w-6xl mx-auto">
          <SectionTitle eyebrow="Aspecto Psicológico Central" title="A Mente que Escava" description="Mercúrio em Touro em oposição a Plutão em Escorpião: superfície e profundidade em diálogo." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Reveal>
              <Card className="h-full border-t-4 border-t-barbara-terracotta">
                <h3 className="font-playfair text-2xl text-white mb-2">☿ Mercúrio ☍ ♇ Plutão</h3>
                <p className="text-barbara-terracotta-light text-xs uppercase tracking-widest mb-4">Oposição ~2°38' • Touro ↔ Escorpião</p>
                <p className="text-white/70 text-sm leading-relaxed">Eixo entre o concreto e o oculto, a certeza e a investigação, a palavra e o silêncio. A mente de Bárbara não se contenta com informação: precisa compreender o que está por baixo.</p>
              </Card>
            </Reveal>
            <Reveal>
              <Card className="h-full border-t-4 border-t-barbara-gold">
                <h3 className="font-playfair text-2xl text-white mb-2">☿ Mercúrio △ ♆ Netuno</h3>
                <p className="text-barbara-terracotta-light text-xs uppercase tracking-widest mb-4">Trígono ~1°35' • Forma e Imaginação</p>
                <p className="text-white/70 text-sm leading-relaxed">À concretude taurina adiciona-se uma camada de imaginação, intuição e sensibilidade simbólica. Dar linguagem concreta àquilo que inicialmente é sentido ou imaginado.</p>
              </Card>
            </Reveal>
          </div>
          <Reveal>
            <div className="mt-8 text-center max-w-3xl mx-auto">
              <p className="text-white/70 leading-relaxed text-sm italic">"Não basta saber o que aconteceu. Existe uma necessidade de compreender o que está por baixo."</p>
              <p className="text-white/50 text-xs mt-4">Potencial integrado: investigação, concentração, percepção de subtexto, profundidade mental. Sombra: fixação, ruminação, dificuldade de abandonar uma conclusão.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* A COROA DE FOGO */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <SectionTitle eyebrow="Casa 9 → MC" title="A Coroa de Fogo" description="Marte em Leão conjunto ao Meio do Céu: ação, visibilidade e vocação." />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <Card className="bg-gradient-to-br from-barbara-gold/10 to-transparent border-barbara-gold/20">
                <div className="text-center">
                  <h3 className="font-playfair text-2xl text-barbara-gold mb-2">♂ Marte ☌ MC</h3>
                  <p className="text-barbara-terracotta-light text-xs uppercase tracking-widest mb-4">20°09' Leão • MC 21°53' Leão • Orbe ~1°44'</p>
                  <p className="text-white/70 leading-relaxed text-sm">Um dos aspectos mais importantes do mapa. Marte está na Casa 9, extremamente próximo do MC. Existe uma ponte direta entre conhecimento/visão de mundo e vocação/projeção pública.</p>
                  <p className="text-white/50 text-sm mt-4 italic">Quando decide ocupar seu lugar no mundo, existe pouca energia de neutralidade.</p>
                </div>
              </Card>
            </Reveal>
            <Reveal>
              <div className="space-y-6 text-white/70 font-light leading-relaxed text-sm">
                <p><strong className="text-white">Marte</strong> acrescenta ação, iniciativa, coragem, competição e desejo.</p>
                <p><strong className="text-white">Leão</strong> traz expressão, protagonismo, criatividade e visibilidade.</p>
                <p><strong className="text-white">Casa 9 → Casa 10</strong> indica que conhecimento, ensino, filosofia e visão de mundo podem alimentar diretamente a direção profissional.</p>
                <p className="text-white/50 text-xs italic">Sombra: conflito com autoridade, orgulho ferido, necessidade de provar competência ou impaciência com bloqueios.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* O TEMPLO INTERIOR */}
      <section className="py-24 px-6 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent relative z-10">
        <div className="max-w-6xl mx-auto">
          <SectionTitle eyebrow="Casa 4" title="O Templo Interior" description="Vênus em Áries e Saturno em Peixes no território íntimo e das raízes." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Reveal>
              <Card className="h-full">
                <h3 className="font-playfair text-2xl text-white mb-2">♀ Vênus em Áries / Casa 4</h3>
                <p className="text-barbara-terracotta-light text-xs uppercase tracking-widest mb-4">10°34' • Desejo no Lar</p>
                <p className="text-white/70 text-sm leading-relaxed">Vênus em Áries traz desejo direto, espontaneidade, autonomia e iniciativa afetiva. A Casa 4 desloca isso para o lar, intimidade, raízes e pertencimento.</p>
                <p className="text-white/50 text-sm mt-4 italic">Pergunta: como manter autonomia e desejo vivo dentro de um espaço de pertencimento?</p>
              </Card>
            </Reveal>
            <Reveal>
              <Card className="h-full">
                <h3 className="font-playfair text-2xl text-white mb-2">♄ Saturno em Peixes / Casa 4</h3>
                <p className="text-barbara-terracotta-light text-xs uppercase tracking-widest mb-4">21°20' • Forma na Sensibilidade</p>
                <p className="text-white/70 text-sm leading-relaxed">Saturno na Casa 4 fala de estrutura emocional, raízes, pertencimento e limites internos. Peixes acrescenta o paradoxo de dar forma ao que não possui forma.</p>
                <p className="text-white/50 text-sm mt-4 italic">Aprender onde termina a sensibilidade e começa a responsabilidade.</p>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      {/* O INVISÍVEL */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <Card className="bg-gradient-to-br from-white/[0.05] to-transparent border-white/10">
              <h2 className="font-playfair text-3xl mb-4">O Invisível</h2>
              <p className="text-barbara-terracotta-light text-xs uppercase tracking-widest mb-6">♇ Plutão em Escorpião / Casa 12</p>
              <p className="text-white/70 leading-relaxed mb-6">Plutão em Escorpião, signo de seu domicílio moderno, ocupa a Casa 12. Simbolicamente, aponta para profundidade inconsciente, conteúdos ocultos, transformação interior e a relação com aquilo que não é imediatamente visível. A oposição a Mercúrio traz parte desse material para o terreno mental.</p>
              <p className="text-white/50 text-sm italic">Aquilo que permanece oculto tende a pedir compreensão.</p>
            </Card>
          </Reveal>
        </div>
      </section>

      {/* CAMINHO DA ALMA */}
      <section className="py-24 px-6 bg-barbara-clay/30 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 flex flex-col md:flex-row justify-between items-end">
            <h2 className="font-playfair text-4xl">Caminho da Alma</h2>
            <p className="text-white/40 text-sm max-w-md text-right mt-4 md:mt-0">A Bússola Evolutiva.</p>
          </div>
          <div className="space-y-6">
            <Reveal>
              <Card className="flex flex-col md:flex-row gap-8 items-center bg-gradient-to-r from-white/5 to-transparent">
                <div className="md:w-1/4 text-center md:text-left">
                  <h3 className="text-barbara-terracotta font-playfair text-2xl">Nodo Norte em Escorpião</h3>
                  <p className="text-[10px] uppercase tracking-widest text-white/40 mt-1">5°36' • Casa 11 • Transformação Coletiva</p>
                </div>
                <div className="md:w-3/4 border-l border-white/10 md:pl-8 pt-4 md:pt-0 border-t md:border-t-0">
                  <p className="text-white font-serif italic mb-2">"De segurança pessoal para transformação compartilhada"</p>
                  <p className="text-white/60 text-sm leading-relaxed">Eixo aproximado: Nodo Sul Touro/Casa 5 ↔ Nodo Norte Escorpião/Casa 11. Na leitura evolutiva moderna, sugere passagem da criação individual e controle do território próprio para aprender transformação através de redes, grupos e sistemas maiores.</p>
                </div>
              </Card>
            </Reveal>
            <Reveal>
              <Card className="flex flex-col md:flex-row gap-8 items-center bg-gradient-to-r from-white/5 to-transparent">
                <div className="md:w-1/4 text-center md:text-left">
                  <h3 className="text-barbara-gold font-playfair text-2xl">Quíron em Virgem</h3>
                  <p className="text-[10px] uppercase tracking-widest text-white/40 mt-1">20°17' • Casa 9 • ℞</p>
                </div>
                <div className="md:w-3/4 border-l border-white/10 md:pl-8 pt-4 md:pt-0 border-t md:border-t-0">
                  <p className="text-white font-serif italic mb-2">"Preciso dominar completamente algo antes de ensiná-lo?"</p>
                  <p className="text-white/60 text-sm leading-relaxed">Quíron na Casa 9 toca conhecimento, método, competência, perfeccionismo, ensino e sistemas de verdade. A pergunta simbólica é sobre o direito de compartilhar o que se sabe.</p>
                </div>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ASPECTOS */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <SectionTitle eyebrow="Diálogos Estelares" title="Aspectos que Moldam o Mapa" description="As conversas entre planetas que desenham a sinfonia única da alma de Bárbara." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "♂ Marte ☌ MC",
                subtitle: "Conjunção ~1°44' • Ação e Vocação",
                text: "Marte em Leão na Casa 9, conjunto ao MC. Conhecimento e visão de mundo alimentam diretamente a projeção pública e a direção profissional."
              },
              {
                title: "☿ Mercúrio ☍ ♇ Plutão",
                subtitle: "Oposição ~2°38' • Superfície × Profundidade",
                text: "Mente concreta em diálogo com transformação profunda. Potencial de investigação, percepção de subtexto e profundidade mental."
              },
              {
                title: "☿ Mercúrio △ ♆ Netuno",
                subtitle: "Trígono ~1°35' • Forma e Imaginação",
                text: "Linguagem concreta para aquilo que é sentido ou imaginado. Sensibilidade simbólica e intuição estruturada."
              },
              {
                title: "☽ Lua △ ♆ Netuno",
                subtitle: "Trígono ~2°20' • Sensibilidade Emocional",
                text: "Percepção emocional, imaginação, estética e empatia. Mundo interno receptivo às camadas simbólicas da experiência."
              },
              {
                title: "☽ Lua ⚹ ♄ Saturno",
                subtitle: "Sextil ~1°52' • Estrutura e Emoção",
                text: "Constância emocional, responsabilidade, capacidade de sustentar compromissos e maturação através do tempo."
              },
              {
                title: "♀ Vênus ⚹ ♃ Júpiter",
                subtitle: "Sextil ~3°30' • Vitalidade e Expansão",
                text: "Vênus em Áries na Casa 4 em sextil com Júpiter em Sagitário na Casa 1. Desejo direto encontra expansão filosófica no território íntimo."
              },
            ].map((aspect, idx) => (
              <Reveal key={idx} delay={idx * 100}>
                <Card className="h-full">
                  <h3 className="font-playfair text-xl text-white mb-1">{aspect.title}</h3>
                  <p className="text-barbara-terracotta-light text-xs uppercase tracking-widest mb-4">{aspect.subtitle}</p>
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
          <SectionTitle eyebrow="Os Doze Terrenos" title="Casas Astrológicas" description="Os setores da vida onde a energia planetária de Bárbara se expressa e se realiza." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { house: "1", title: "Ascendente em Sagitário", area: "Identidade & Presença", text: "Presença expansiva, franqueza, movimento e busca de significado. Júpiter em domicílio aqui amplifica a importância da crença e da direção." },
              { house: "2", title: "Casa 2 em Capricórnio", area: "Recursos & Valores", text: "Solidez material construída com disciplina. Urano e Netuno trazem inovação e idealismo à gestão de recursos." },
              { house: "3", title: "Casa 3 em Aquário", area: "Comunicação & Mente", text: "Mente original, comunicação não-convencional, curiosidade por sistemas e redes de conhecimento." },
              { house: "4", title: "IC em Touro", area: "Lar & Raízes", text: "Refúgio de estabilidade e conforto. Vênus em Áries e Saturno em Peixes trazem autonomia afetiva e necessidade de estruturar a sensibilidade." },
              { house: "5", title: "Casa 5 em Gêmeos", area: "Criatividade & Paixão", text: "Criatividade versátil, curiosa e comunicativa. Sol em Touro aqui busca dar forma concreta à expressão pessoal." },
              { house: "6", title: "Casa 6 em Câncer", area: "Rotina & Saúde", text: "Cotidiano nutrido por cuidado e ritmo. Lua exaltada e Mercúrio em Touro estruturam emoção e pensamento no trabalho diário." },
              { house: "7", title: "DC em Gêmeos", area: "Relacionamentos", text: "Parcerias baseadas em comunicação, troca intelectual e liberdade de movimento." },
              { house: "8", title: "Casa 8 em Leão", area: "Transformação & Poder", text: "Profundidade vivida com calor, orgulho e necessidade de reconhecimento." },
              { house: "9", title: "Casa 9 em Virgem", area: "Expansão & Filosofia", text: "Conhecimento vivido com método, análise e aperfeiçoamento. Marte e Quíron aqui conectam ação à busca de sentido." },
              { house: "10", title: "MC em Leão", area: "Carreira & Legado", text: "Vocação pública de protagonismo, criatividade e liderança. Marte conjunto ao MC impulsiona ação no mundo." },
              { house: "11", title: "Casa 11 em Libra", area: "Amizades & Futuro", text: "Redes baseadas em equilíbrio, reciprocidade e estética. Nodo Norte em Escorpião aponta transformação através do coletivo." },
              { house: "12", title: "Casa 12 em Escorpião", area: "Espiritualidade & Bastidores", text: "Profundidade oculta, transformação interior e relação com o invisível. Plutão aqui intensifica a necessidade de compreender o que está por baixo." },
            ].map((h, idx) => (
              <Reveal key={idx} delay={idx * 50}>
                <Card className="h-full">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 rounded-full bg-barbara-terracotta/10 flex items-center justify-center text-barbara-terracotta text-sm font-playfair border border-barbara-terracotta/20">{h.house}</span>
                    <div>
                      <h3 className="font-playfair text-lg text-white leading-tight">{h.title}</h3>
                      <p className="text-[10px] text-barbara-terracotta-light uppercase tracking-widest">{h.area}</p>
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
      <section className="py-24 px-6 bg-gradient-to-b from-barbara-terracotta/5 via-transparent to-barbara-terracotta/5 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Reveal>
              <div>
                <h2 className="font-playfair text-3xl mb-8 text-center lg:text-left">Elementos</h2>
                <div className="space-y-4">
                  {[
                    { name: "Fogo", pct: "42%", desc: "Presença magnética, expansão, entusiasmo e capacidade de mobilização. Sagitário, Áries e Leão atuam fortemente.", color: "bg-orange-500" },
                    { name: "Terra", pct: "33%", desc: "Solidez, persistência, valor, materialização e continuidade. Touro, Capricórnio e Virgem sustentam.", color: "bg-emerald-500" },
                    { name: "Água", pct: "17%", desc: "Profundidade emocional, sensibilidade e transformação interior. Peixes e Escorpião.", color: "bg-indigo-400" },
                    { name: "Ar", pct: "8%", desc: "Mentalidade, comunicação e idealização. Aquário, de forma mais minoritária.", color: "bg-sky-400" },
                  ].map((el, idx) => (
                    <div key={idx} className="bg-white/[0.03] border border-white/10 rounded-sm p-5">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white font-medium flex items-center gap-2"><span className={`w-2 h-2 rounded-full ${el.color}`} />{el.name}</span>
                        <span className="text-barbara-terracotta-light text-sm">{el.pct}</span>
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
                    { name: "Fixo", pct: "58%", desc: "Persistência, continuidade, resistência e fidelidade àquilo que adquiriu valor.", color: "bg-purple-500" },
                    { name: "Mutável", pct: "25%", desc: "Adaptação, busca de sentido, flexibilidade e capacidade de transitar entre territórios.", color: "bg-yellow-500" },
                    { name: "Cardinal", pct: "17%", desc: "Iniciativa, impulso e necessidade de começar — em menor proporção, mas presente.", color: "bg-red-500" },
                  ].map((mod, idx) => (
                    <div key={idx} className="bg-white/[0.03] border border-white/10 rounded-sm p-5">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white font-medium flex items-center gap-2"><span className={`w-2 h-2 rounded-full ${mod.color}`} />{mod.name}</span>
                        <span className="text-barbara-terracotta-light text-sm">{mod.pct}</span>
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
      <section className="py-24 px-6 bg-gradient-to-b from-barbara-terracotta/5 via-transparent to-barbara-terracotta/5 relative z-10">
        <div className="max-w-6xl mx-auto">
          <SectionTitle eyebrow="Essência de Bárbara" title="Os Seis Poderes" description="As frequências centrais que regem sua encarnação e seu modo de mover o mundo." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "🌍",
                title: "A Criadora da Forma",
                subtitle: "Sol em Touro / Casa 5",
                quote: "Aquilo que ama precisa ganhar forma.",
                text: "Capacidade de cultivar algo próprio até que adquira consistência, beleza e valor. A criação não é passageira: é cultivada."
              },
              {
                icon: "🌙",
                title: "A Raiz Emocional",
                subtitle: "Lua exaltada em Touro / Casa 6",
                quote: "O mundo emocional procura um ritmo no qual possa confiar.",
                text: "Segurança interior através de continuidade, corpo, sentidos e previsibilidade. Organiza a emoção no cotidiano."
              },
              {
                icon: "🏹",
                title: "O Horizonte Interior",
                subtitle: "Ascendente Sagitário + Júpiter em Sagitário / Casa 1",
                quote: "Por dentro, construir raízes; por fora, procurar horizontes.",
                text: "Presença expansiva, franqueza e busca de significado. A expansão não é fuga: é direção."
              },
              {
                icon: "🔥",
                title: "A Coroa de Fogo",
                subtitle: "Marte conjunto ao MC em Leão / Casa 9",
                quote: "Quando decide ocupar seu lugar no mundo, existe pouca energia de neutralidade.",
                text: "Ação, visibilidade, coragem e liderança. Conhecimento e visão de mundo alimentam a vocação."
              },
              {
                icon: "🕳️",
                title: "A Mente que Escava",
                subtitle: "Mercúrio ☍ Plutão • Mercúrio △ Netuno",
                quote: "Não basta saber o que aconteceu. Existe uma necessidade de compreender o que está por baixo.",
                text: "Investigação, percepção de subtexto, profundidade mental e capacidade de dar forma ao imaginado."
              },
              {
                icon: "✋",
                title: "A Mão Ressonante",
                subtitle: "KIN 07 — Mão Ressonante Azul",
                quote: "Realize aquilo que conhece, e sintonize o que realiza.",
                text: "No Dreamspell, a Mão transforma conhecimento em cura e realização. O Tom Ressonante pergunta em que frequência o que se faz transmite."
              },
            ].map((power, idx) => (
              <Reveal key={idx} delay={idx * 100}>
                <Card className="h-full border-t-4 border-t-barbara-terracotta">
                  <div className="text-3xl mb-4">{power.icon}</div>
                  <h3 className="font-playfair text-xl text-white mb-1">{power.title}</h3>
                  <p className="text-barbara-terracotta-soft text-[10px] uppercase tracking-widest mb-4">{power.subtitle}</p>
                  <p className="text-white/80 italic text-sm mb-4">"{power.quote}"</p>
                  <p className="text-white/60 text-sm leading-relaxed">{power.text}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SÍNTESE FINAL */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <Card className="bg-gradient-to-br from-white/[0.05] to-transparent border-white/10">
              <h2 className="font-playfair text-3xl mb-4">A Construtora de Horizontes</h2>
              <p className="text-barbara-terracotta-light text-xs uppercase tracking-widest mb-6">Síntese dos Sistemas</p>
              <p className="text-white/70 leading-relaxed mb-6">Há nela uma Terra que procura tornar real aquilo que possui valor e um Fogo que se recusa a deixar essa realidade sem horizonte. A Mão realiza. Júpiter expande. Marte leva a obra ao mundo. E Plutão pergunta se aquilo que parece sólido também consegue sobreviver à transformação.</p>
              <p className="text-white/50 text-sm italic">Ela constrói para poder atravessar. Cria forma sem deixar que a forma se transforme em prisão.</p>
            </Card>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative bg-barbara-earth border-t border-white/5 overflow-hidden z-10">
        <div className="py-24 px-6 text-center relative z-10">
          <Reveal>
            <div className="mb-8 text-2xl animate-pulse">🌍</div>
            <h2 className="font-playfair text-3xl md:text-4xl text-white mb-8">✦ A Jornada Continua... ✦</h2>
            <div className="max-w-3xl mx-auto text-white/70 font-light leading-relaxed space-y-6 text-lg">
              <p>Bárbara, navegar pela arquitetura da sua alma foi uma honra. Este mapa não é um destino final, mas um mapa do tesouro que vive dentro de você.</p>
              <p>Que as frequências reveladas aqui — da <strong className="text-white">Terra que Cria</strong> ao <strong className="text-white">Fogo que Expand</strong> — sirvam como alicerce para sua maior obra-prima: a sua própria vida.</p>
              <p className="italic text-barbara-terracotta">Construa com paciência, expanda com coragem, e lembre-se: o horizonte só existe porque há chão por baixo.</p>
            </div>
          </Reveal>
        </div>
        <div className="py-12 bg-black/20 text-center relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(139,115,85,0.05),transparent_50%)] pointer-events-none" />
          <p className="font-sans text-xs text-white/40 tracking-widest uppercase mb-2">Feito com magia e dados por</p>
          <h2 className="font-playfair text-2xl text-barbara-terracotta tracking-wide mb-8">Marroc <span className="text-sm font-sans text-white/60 tracking-widest ml-1">by CosmoVision</span></h2>
        </div>
      </footer>
    </div>
  );
}
