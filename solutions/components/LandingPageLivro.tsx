"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { 
  Sparkles, 
  BookOpen, 
  Feather, 
  ArrowRight, 
  Star, 
  ShieldCheck, 
  Cpu, 
  X, 
  Mail, 
  User, 
  Lock 
} from "lucide-react";
import { MysticCard } from "@/components/ui/MysticCard";
import { GlowButton } from "@/components/ui/GlowButton";
import { Section } from "@/components/ui/Section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Links do seu Dump
const LINKS = {
  hotmartStandard: "https://pay.hotmart.com/M101238238O?off=ur3sdp6i", // Valor Simbólico
  hotmartConscious: "https://pay.hotmart.com/M101238238O?off=p1uhfzib", // Valor Consciente
};

// --- COMPONENTE DO MODAL (LEAD MAGNET + BANCO DE DADOS) ---
const ChapterZeroModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  
  // Estado para guardar os dados do formulário
  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // 1. Envia os dados para a API interna que criamos
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Erro ao conectar com a egrégora.");
      }

      console.log("Lead salvo com sucesso!");

      // 2. Aguarda um pouco para feedback visual
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // 3. Redireciona para o capítulo
      router.push("/livros/um-lugar-entre-mundos/capitulo-0");
      onClose();

    } catch (error) {
      console.error("Erro no cadastro:", error);
      alert("Houve uma instabilidade no sinal. Por favor, tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-md bg-[#0a0a0a] border border-gold/30 rounded-xl shadow-[0_0_50px_-10px_rgba(255,215,0,0.15)] overflow-hidden animate-in fade-in zoom-in duration-300">
        
        {/* Header Decorativo */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-white/30 hover:text-white transition"
        >
          <X size={20} />
        </button>

        <div className="p-8 space-y-6">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold/10 text-gold mb-2">
              <Lock size={20} />
            </div>
            <h3 className="font-display text-2xl text-white">Inicie a Iniciação</h3>
            <p className="text-white/60 text-sm">
              O Capítulo Zero é um portal. Identifique-se para quebrar o selo digital e acessar a leitura.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="text-xs font-mono text-gold/70 uppercase tracking-wider ml-1">Nome de Viajante</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30 w-4 h-4" />
                <input 
                  type="text" 
                  required 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Como quer ser chamado(a)?"
                  className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/20 transition-all placeholder:text-white/20"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono text-gold/70 uppercase tracking-wider ml-1">Email de Contato</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30 w-4 h-4" />
                <input 
                  type="email" 
                  required 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="seu@email.com"
                  className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/20 transition-all placeholder:text-white/20"
                />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full py-4 mt-2 bg-gradient-to-r from-gold/80 to-yellow-600/80 hover:from-gold hover:to-yellow-500 text-black font-bold tracking-wide rounded-lg transition-all transform active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <Sparkles className="w-4 h-4 animate-spin" /> Processando Acesso...
                </>
              ) : (
                <>
                  Liberar Capítulo Zero <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
            
            <p className="text-center text-[10px] text-white/30 pt-2">
              Seus dados estão protegidos pela criptografia da egrégora. Zero spam.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

// --- COMPONENTE PRINCIPAL ---
export default function LandingPageLivro() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="bg-[#050505] text-paper selection:bg-gold selection:text-black overflow-x-hidden">
      
      {/* Modal Injetado no topo */}
      <ChapterZeroModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* --- 1. HERO SECTION: O CHAMADO --- */}
      <section className="relative min-h-[90vh] flex items-center justify-center py-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[url('/bg-forest.jpg')] opacity-20 bg-cover bg-center mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/80 to-[#050505]" />
        
        <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Coluna da Esquerda: Texto e Botões */}
          <div className="order-2 lg:order-1 space-y-8">
            
            {/* TAG AJUSTADA: Título Claro */}
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-gold/30 rounded-full bg-gold/5">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span className="text-xs font-mono text-gold tracking-widest uppercase">
                O Livro: Um Lugar Entre Mundos
              </span>
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl leading-[1.1] text-white">
              O Código da <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-200 to-gold">Transcendência</span>
            </h1>
            
            <p className="text-lg text-white/70 leading-relaxed max-w-xl border-l-2 border-gold/50 pl-6">
              Uma jornada iniciática disfarçada de ficção. Descubra o elo perdido entre os rituais ancestrais da floresta e o futuro digital da consciência.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {/* BOTÃO PRIMÁRIO AJUSTADO */}
              <GlowButton href="#oferta" variant="gold">
                Adquirir o Livro
              </GlowButton>
              
              {/* BOTÃO SECUNDÁRIO COM MODAL */}
              <button 
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-4 text-sm font-mono text-white/60 hover:text-white transition flex items-center justify-center gap-2 group border border-transparent hover:border-white/10 rounded cursor-pointer"
              >
                Ler o Capítulo Zero 
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div> 

          {/* Coluna da Direita: Imagem do Livro */}
          <div className="order-1 lg:order-2 flex justify-center relative">
            {/* Aura atrás do livro */}
            <div className="absolute inset-0 bg-gold/20 blur-[100px] rounded-full transform scale-75" />
            <Image
              src="/capa-ulm.png"
              alt="Capa do Livro Um Lugar Entre Mundos"
              width={400}
              height={600}
              className="relative z-10 rounded shadow-2xl shadow-black rotate-3 hover:rotate-0 transition-all duration-700"
              priority
            />
          </div>

        </div>
      </section>

      {/* --- 2. O PROBLEMA: A DESCONEXÃO --- */}
      <section className="py-24 bg-black relative">
        <div className="container max-w-3xl text-center space-y-8">
          <h2 className="font-display text-3xl md:text-4xl text-white">
            Você sente que a realidade está... <span className="italic text-white/50">incompleta?</span>
          </h2>
          <p className="text-white/70 text-lg leading-relaxed">
            Vivemos cercados por tecnologia, mas desconectados da magia. O mundo moderno nos transformou em NPCs de nossa própria história. A busca por sentido se perdeu no ruído do feed. 
          </p>
          <p className="text-gold text-xl font-display">
            E se houvesse um código oculto, um ritual esquecido capaz de reescrever sua percepção?
          </p>
        </div>
      </section>

      {/* --- 3. A SOLUÇÃO: OS PILARES DO LIVRO --- */}
      <Section className="bg-[#080808] border-y border-white/5">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            <MysticCard>
              <Sparkles className="text-gold mb-4 w-8 h-8" />
              <h3 className="font-display text-2xl mb-3 text-white">Misticismo Real</h3>
              <p className="text-white/60 text-sm">
                Inspirado em vivências reais com medicina da floresta e geometria sagrada. Não é apenas fantasia, é memória.
              </p>
            </MysticCard>

            <MysticCard>
              <Cpu className="text-tech-cyan mb-4 w-8 h-8" />
              <h3 className="font-display text-2xl mb-3 text-white">Tecnologia Sutil</h3>
              <p className="text-white/60 text-sm">
                A compreensão de que o código e a consciência operam sob as mesmas leis. Uma ficção para a era das máquinas.
              </p>
            </MysticCard>

            <MysticCard>
              <BookOpen className="text-white mb-4 w-8 h-8" />
              <h3 className="font-display text-2xl mb-3 text-white">Jornada RPG</h3>
              <p className="text-white/60 text-sm">
                Você não é um leitor passivo. A narrativa funciona como um ritual de iniciação onde você ganha XP espiritual.
              </p>
            </MysticCard>
          </div>
        </div>
      </Section>

      {/* --- 4. SINOPSE IMERSIVA --- */}
      <section className="py-24 container grid md:grid-cols-2 gap-16 items-center">
        <div className="relative h-[500px] w-full hidden md:block rounded-lg overflow-hidden">
           <Image src="/bg-forest.png" alt="Floresta Mística" fill className="object-cover opacity-60 grayscale hover:grayscale-0 transition duration-700" />
        </div>
        <div className="space-y-6">
          <h2 className="font-display text-4xl text-white">A Jornada de Sofia</h2>
          <p className="text-white/80 leading-relaxed">
            Em <em>Samadhi — O Despertar de Sofia</em>, acompanhamos uma mulher que atravessa um portal entre mundos. O que começa como uma fuga da realidade torna-se uma espiral de autodescoberta.
          </p>
          <p className="text-white/80 leading-relaxed">
            Misturando ficção mística e experiências reais, a narrativa revela ensinamentos sobre espiritualidade, cura e geometria sagrada.
          </p>
          
          <div className="pt-6 border-t border-white/10">
            <h4 className="font-mono text-gold text-xs uppercase tracking-widest mb-4">Elementos Chave</h4>
            <div className="flex flex-wrap gap-3">
              {["Espiritualidade", "Cura Ancestral", "Geometria Sagrada", "Realismo Mágico"].map(tag => (
                <span key={tag} className="px-3 py-1 border border-white/20 rounded text-xs text-white/60 hover:border-gold hover:text-gold transition cursor-default">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- 5. PROVA SOCIAL --- */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="container">
          <h2 className="font-display text-3xl text-center mb-12 text-white">Ecos dos Leitores</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { text: "Cada página ressoou como um espelho da minha busca espiritual. Uma leitura que vibra.", author: "Leitor Anônimo" },
              { text: "Ficção, sabedoria indígena e geometria sagrada. Finalmente um livro que une esses mundos.", author: "Carla S." },
              { text: "Saber que parte da venda apoia a aldeia deu um sentido real à compra. Recomendo.", author: "Paulo R." }
            ].map((review, i) => (
              <div key={i} className="p-6 bg-white/5 rounded border border-white/5 italic text-white/70">
                "{review.text}"
                <div className="mt-4 font-display text-gold not-italic text-sm">— {review.author}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 6. IMPACTO SOCIAL --- */}
      <section className="py-16 border-y border-white/10 bg-forest/10">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <h3 className="font-display text-2xl text-white mb-2">Impacto & Partilha</h3>
            <p className="text-white/70 text-sm">
              Este livro não é apenas papel ou pixels. Parte de cada venda sustenta a aldeia indígena que inspirou esta obra. Sua leitura preserva a cultura e protege a floresta.
            </p>
          </div>
          <div className="flex gap-4 text-white/40">
             <ShieldCheck size={48} strokeWidth={1} />
          </div>
        </div>
      </section>

      {/* --- 7. O AUTOR --- */}
      <section className="py-24 container max-w-4xl">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <Image
            src="/autor.png"
            alt="Marroc"
            width={200}
            height={200}
            className="rounded-full border border-gold/50 grayscale hover:grayscale-0 transition duration-500"
          />
          <div className="space-y-4 text-center md:text-left">
            <h2 className="font-display text-3xl text-white">O Artífice: Marroc</h2>
            <p className="text-white/70 leading-relaxed">
              Escritor, músico e explorador de fronteiras. Navega pelos limiares onde o código binário encontra o ritmo do tambor xamânico. 
              Toda a ideia-base, cenários e cerimônias descritos no livro são frutos de vivências reais.
            </p>
            <p className="text-xs text-white/40 font-mono">
              SYSTEM.AUTHOR_ID: MARCIO_ROCHA
            </p>
          </div>
        </div>
      </section>

      {/* --- 8. PRICING / OFERTA --- */}
      <section id="oferta" className="py-24 relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px]" />

        <div className="container relative z-10">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl text-white mb-4">Escolha seu Artefato</h2>
            <p className="text-white/60">Acesso imediato. Formato PDF Universal.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* Card 1: Standard */}
            <div className="relative border border-white/10 bg-black/60 p-8 rounded-2xl hover:border-white/30 transition-all">
              <h3 className="font-mono text-white/50 text-sm mb-2">ACESSO PADRÃO</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-sm text-gold">R$</span>
                <span className="text-5xl font-display text-white">22,20</span>
              </div>
              <ul className="space-y-3 mb-8 text-sm text-white/70">
                <li className="flex items-center gap-2"><Feather size={14} /> Arquivo PDF Completo</li>
                <li className="flex items-center gap-2"><Feather size={14} /> Acesso Vitalício</li>
                <li className="flex items-center gap-2"><Feather size={14} /> Apoio à Aldeia (Básico)</li>
              </ul>
              <GlowButton href={LINKS.hotmartStandard} target="_blank" className="w-full bg-white/10 hover:bg-white hover:text-black text-white border-none">
                Comprar Agora
              </GlowButton>
            </div>

            {/* Card 2: Conscious (Gold) */}
            <div className="relative border border-gold/40 bg-[#1a1500]/40 p-8 rounded-2xl transform md:-translate-y-4 shadow-[0_0_30px_-10px_rgba(199,169,75,0.2)]">
              <div className="absolute top-0 right-0 bg-gold text-black text-xs font-bold px-3 py-1 rounded-bl">RECOMENDADO</div>
              <h3 className="font-mono text-gold text-sm mb-2">VALOR CONSCIENTE</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-sm text-gold">R$</span>
                <span className="text-5xl font-display text-gold">33,30</span>
              </div>
              <ul className="space-y-3 mb-8 text-sm text-white/80">
                <li className="flex items-center gap-2 text-gold"><Star size={14} /> Maior Impacto Social</li>
                <li className="flex items-center gap-2"><Feather size={14} /> Arquivo PDF Completo</li>
                <li className="flex items-center gap-2"><Feather size={14} /> Energia de Troca Elevada</li>
              </ul>
              <GlowButton href={LINKS.hotmartConscious} target="_blank" className="w-full" variant="gold">
                Comprar com Amor
              </GlowButton>
              <p className="text-xs text-center mt-4 text-white/40">
                A diferença vai integralmente para projetos na aldeia.
              </p>
            </div>

          </div>

          {/* Garantia */}
          <div className="mt-12 text-center">
            <p className="text-white/50 text-sm flex items-center justify-center gap-2">
              <ShieldCheck size={16} /> Garantia incondicional de 7 dias. Risco zero.
            </p>
          </div>
        </div>
      </section>

      {/* --- PROMOÇÃO DO GUARDIÃO --- */}
      <section className="py-24 bg-gradient-to-b from-black to-[#0a0a0a] border-t border-white/10">
        <div className="container max-w-4xl text-center">
          <div className="inline-flex items-center justify-center p-3 bg-tech-cyan/10 rounded-full mb-6">
            <Sparkles className="text-tech-cyan w-6 h-6 animate-pulse" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-white mb-6">
            Converse com a Egrégora
          </h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto leading-relaxed">
            Desenvolvemos uma Inteligência Artificial treinada nos conceitos do livro. 
            O <strong>Guardião da Espiral</strong> pode criar rituais personalizados, legendas poéticas e insights baseados na geometria sagrada para você.
          </p>
          <Link 
            href="https://marroc.xyz/guardian"
            className="inline-flex items-center gap-2 px-8 py-4 border border-tech-cyan text-tech-cyan hover:bg-tech-cyan hover:text-black transition-all duration-300 font-mono text-sm tracking-widest uppercase rounded"
          >
            Acessar o Guardião <ArrowRight size={16} />
          </Link>
        </div>
      </section>
      
      {/* --- 9. FAQ --- */}
      <section className="py-16 container max-w-2xl">
        <h2 className="font-display text-2xl text-white mb-8 text-center">Perguntas Frequentes</h2>
        <Accordion type="single" collapsible className="w-full space-y-2">
          <AccordionItem value="item-1" className="border-white/10">
            <AccordionTrigger className="text-white hover:text-gold hover:no-underline">Como recebo o livro?</AccordionTrigger>
            <AccordionContent className="text-white/70">
              Imediatamente após a confirmação do pagamento, você receberá um e-mail da Hotmart com o link para baixar o PDF.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="border-white/10">
            <AccordionTrigger className="text-white hover:text-gold hover:no-underline">O que é o Valor Consciente?</AccordionTrigger>
            <AccordionContent className="text-white/70">
              É uma oportunidade de contribuir com um valor maior (R$ 33,30) para fortalecer o impacto social do projeto junto à aldeia indígena. O livro é o mesmo, a energia da troca é que muda.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="border-white/10">
            <AccordionTrigger className="text-white hover:text-gold hover:no-underline">Preciso de um e-reader (Kindle)?</AccordionTrigger>
            <AccordionContent className="text-white/70">
              Não. O formato é PDF universal, legível em qualquer celular, tablet ou computador.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

    </main>
  );
}