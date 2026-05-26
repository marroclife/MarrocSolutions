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
  Lock,
  Package,
  Monitor,
  Heart
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

// --- MAPA DE LINKS (Hormonizado com Hotmart) ---
const PRICING = {
  unified: {
    physical: "https://pay.hotmart.com/V106005042E",
    digital: "https://pay.hotmart.com/E106006681D",
    label: "Edição Unificada (Trilogia)",
    image: "/covers/ulem-unified.png"
  },
  vol1: {
    physical: "https://pay.hotmart.com/G106004710X",
    digital: "https://pay.hotmart.com/V106005087S",
    label: "Volume 1: O Colapso e o Despertar",
    image: "/covers/ulem-vol1.png"
  },
  vol2: {
    physical: "https://pay.hotmart.com/I106004849S",
    digital: "https://pay.hotmart.com/Q106006574A",
    label: "Volume 2: A Ressonância da Âncora",
    image: "/covers/ulem-vol2.png"
  },
  vol3: {
    physical: "https://pay.hotmart.com/E106004955X",
    digital: "https://pay.hotmart.com/K106006647O",
    label: "Volume 3: Na Visão de Numi",
    image: "/covers/ulem-vol3.png"
  }
};

// --- MODAL DE ACESSO (CAPÍTULO ZERO) ---
const ChapterZeroModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "" });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error("Erro na egrégora.");
      await new Promise(resolve => setTimeout(resolve, 800));
      router.push("/livros/um-lugar-entre-mundos/capitulo-0");
      onClose();
    } catch (error) {
      alert("Instabilidade no sinal. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={onClose} />
      <div className="relative w-full max-w-md bg-[#0a0a0a] border border-gold/30 rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in duration-300">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
        <button onClick={onClose} className="absolute top-4 right-4 text-white/30 hover:text-white transition"><X size={20} /></button>
        <div className="p-8 space-y-6">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold/10 text-gold mb-2"><Lock size={20} /></div>
            <h3 className="font-display text-2xl text-white">Inicie a Iniciação</h3>
            <p className="text-white/60 text-sm">O Capítulo Zero é o portal. Identifique-se para quebrar o selo.</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="text-xs font-mono text-gold/70 uppercase tracking-wider ml-1">Nome de Viajante</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30 w-4 h-4" />
                <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} placeholder="Seu nome..." className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/20 transition-all" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-mono text-gold/70 uppercase tracking-wider ml-1">Email de Contato</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30 w-4 h-4" />
                <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} placeholder="seu@email.com" className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/20 transition-all" />
              </div>
            </div>
            <button type="submit" disabled={isLoading} className="w-full py-4 bg-gradient-to-r from-gold/80 to-yellow-600/80 hover:from-gold hover:to-yellow-500 text-black font-bold tracking-wide rounded-lg transition-all flex items-center justify-center gap-2">
              {isLoading ? <Sparkles className="w-4 h-4 animate-spin" /> : <><span className="text-xs font-bold uppercase tracking-widest">Liberar Capítulo Zero</span> <ArrowRight className="w-4 h-4" /></>}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

interface BookOfferProps {
  data: {
    physical: string;
    digital: string;
    label: string;
    image: string;
  };
  isMain?: boolean;
}

// --- COMPONENTE DE PRODUTO (OFFER CARD) ---
const BookOffer = ({ data, isMain = false }: BookOfferProps) => {
  return (
    <MysticCard className={`relative group p-6 rounded-2xl border transition-all duration-500 flex flex-col ${isMain ? 'border-gold bg-gold/5 shadow-gold/10 shadow-2xl scale-105 z-10' : 'border-white/10 bg-white/[0.02] hover:border-gold/30'}`}>
      <div className="flex flex-col md:flex-row gap-8 h-full">
        <div className="relative w-full md:w-48 aspect-[3/4] shrink-0 overflow-hidden rounded-lg border border-white/10 shadow-2xl">
          <Image src={data.image} alt={data.label} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
          <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md text-gold text-[10px] font-bold px-2 py-1 rounded uppercase">
            {isMain ? "Recomendado" : "Versão"}
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-between space-y-6">
          <div className="space-y-3">
            <h3 className="font-display text-2xl md:text-3xl text-white leading-tight">{data.label}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Experiência completa de imersão. A sabedoria ancestral agora disponível em formato tangível e digital.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* DIGITAL */}
            <div className="p-4 rounded-xl bg-black/60 border border-white/10 space-y-4">
              <div className="flex items-center gap-2 text-gray-400">
                <Monitor size={14} /> <span className="text-[10px] font-mono uppercase tracking-widest">Digital (PDF)</span>
              </div>
              <Link 
                href={data.digital} 
                target="_blank" 
                className="flex items-center justify-center gap-2 w-full py-3 bg-white/5 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-widest transition-all rounded border border-white/10"
              >
                Adquirir Digital <ArrowRight size={12} />
              </Link>
            </div>
            
            {/* PHYSICAL */}
            <div className="p-4 rounded-xl bg-gold/10 border border-gold/30 space-y-4">
              <div className="flex items-center gap-2 text-gold/90">
                <Package size={14} /> <span className="text-[10px] font-mono uppercase tracking-widest">Livro Físico</span>
              </div>
              <Link 
                href={data.physical} 
                target="_blank" 
                className="flex items-center justify-center gap-2 w-full py-3 bg-gold hover:bg-white text-black text-xs font-bold uppercase tracking-widest transition-all rounded"
              >
                Adquirir Físico <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </MysticCard>
  );
};

export default function LandingPageLivro() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="bg-[#050505] text-paper selection:bg-gold selection:text-black overflow-x-hidden">
      <ChapterZeroModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* HERO */}
      <section className="relative min-h-[80vh] flex items-center justify-center py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/10 via-transparent to-transparent opacity-50" />
        <div className="container relative z-10 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1 border border-gold/30 rounded-full bg-gold/5 animate-fadeUp">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-xs font-mono text-gold tracking-widest uppercase">A Trilogia Completa</span>
          </div>
          <h1 className="font-display text-6xl md:text-8xl leading-tight text-white animate-fadeUp">
            Um Lugar <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-200 to-gold">Entre Mundos</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed animate-fadeUp">
            Não é apenas a leitura de um livro. É a travessia de um portal. 
             A obra completa agora disponível em edições físicas e digitais.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 animate-fadeUp">
            <GlowButton href="#ofertas" variant="gold">Ver Ofertas</GlowButton>
            <button onClick={() => setIsModalOpen(true)} className="px-8 py-4 text-sm font-mono text-white/60 hover:text-white transition border border-transparent hover:border-white/10 rounded">
              Ler Capítulo Zero
            </button>
          </div>
        </div>
      </section>

      {/* PROPOSTA de VALOR */}
      <Section className="bg-black border-y border-white/5 py-24">
        <div className="container grid md:grid-cols-3 gap-12 items-center">
          <div className="space-y-6 col-span-2">
            <h2 className="font-display text-4xl text-white">O Ritual do <span className="text-gold">Tangível</span></h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              O livro físico não é apenas papel e tinta. É um âncoramento de frequência. 
              Ao segurar a obra, você desliga o ruído do digital para sintonizar com a sabedoria ancestral.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex gap-4 p-4 border border-white/5 bg-white/[0.02] rounded-lg">
                <div className="text-gold"><Monitor size={20} /></div>
                <div className="text-sm text-gray-300">Digital: Acesso instantâneo, leitura fluida, portabilidade.</div>
              </div>
              <div className="flex gap-4 p-4 border border-white/5 bg-white/[0.02] rounded-lg">
                <div className="text-gold"><Package size={20} /></div>
                <div className="text-sm text-gray-300">Físico: Ritual de imersão, memória tátil, valor de coleção.</div>
              </div>
            </div>
          </div>
          <div className="relative group">
             <div className="absolute inset-0 bg-gold/20 blur-3xl rounded-full" />
             <Image src="/covers/ulem-unified.png" alt="Sinergia Material" width={300} height={400} className="relative z-10 rounded-lg shadow-2xl transform group-hover:scale-105 transition-all duration-500" />
          </div>
        </div>
      </Section>

      {/* OFERTAS (O CORAÇÃO) */}
      <section id="ofertas" className="py-24 bg-[#050505]">
        <Section container>
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-display text-4xl text-white">Escolha sua <span className="text-gold">Sintonização</span></h2>
            <p className="text-gray-400">Sintonize a frequência que melhor ressoa com seu momento.</p>
          </div>

          <div className="flex flex-col gap-8 max-w-5xl mx-auto">
            
            {/* OFERTA PRINCIPAL: UNIFICADO */}
            <BookOffer data={PRICING.unified} isMain={true} />
            
            {/* VOLUMES INDIVIDUAIS - AGORA EM LISTA HORIZONTAL */}
            <div className="flex flex-col gap-8 mt-8">
              <BookOffer data={PRICING.vol1} />
              <BookOffer data={PRICING.vol2} />
              <BookOffer data={PRICING.vol3} />
            </div>

          </div>
        </Section>
      </section>

      {/* GARANTIA E FAQ */}
      <Section className="bg-black border-t border-white/5 py-24">
        <div className="container max-w-2xl mx-auto text-center space-y-12">
          <div className="p-8 border border-white/10 bg-white/[0.02] rounded-2xl flex flex-col items-center gap-4">
            <ShieldCheck size={40} className="text-gold" />
            <h3 className="font-display text-xl text-white">Garantia Incondicional</h3>
            <p className="text-gray-400 text-sm">7 dias para solicitar reembolso total. Risco zero para sua jornada.</p>
          </div>

          <div className="space-y-4">
            <h3 className="font-display text-2xl text-white mb-6">Dúvidas Frequentes</h3>
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="border border-white/10 bg-white/[0.01] px-4 rounded-lg">
                <AccordionTrigger className="text-white hover:text-gold hover:no-underline py-4">Como recebo o livro físico?</AccordionTrigger>
                <AccordionContent className="text-gray-300 pb-4">
                  O livro é enviado via transportadora. O prazo de entrega depende da sua região, mas você receberá o código de rastreio por e-mail.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border border-white/10 bg-white/[0.01] px-4 rounded-lg">
                <AccordionTrigger className="text-white hover:text-gold hover:no-underline py-4">O PDF é o mesmo do físico?</AccordionTrigger>
                <AccordionContent className="text-gray-300 pb-4">
                  A essência é a mesma, mas a edição física possui acabamentos e detalhes que potencializam a experiência ritualística.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border border-white/10 bg-white/[0.01] px-4 rounded-lg">
                <AccordionTrigger className="text-white hover:text-gold hover:no-underline py-4">Qual a diferença do Unificado?</AccordionTrigger>
                <AccordionContent className="text-gray-300 pb-4">
                  A Edição Unificada contém os três volumes em um único tomo, ideal para quem quer a experiência completa e a economia de escala.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </Section>

      {/* FOOTER / CAPTURA FINAL */}
      <section className="py-24 bg-gradient-to-t from-gold/10 to-transparent">
        <div className="container max-w-2xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center justify-center p-3 bg-gold/10 rounded-full mb-4">
            <Heart className="text-gold w-6 h-6 animate-pulse" />
          </div>
          <h2 className="font-display text-3xl text-white">Sua jornada começa agora.</h2>
          <p className="text-gray-400">
            A floresta está esperando. O asfalto aprendeu a ser altar. 
            Sua semente está pronta para germinar.
          </p>
          <GlowButton href="#ofertas" variant="gold">Retornar às Ofertas</GlowButton>
        </div>
      </section>

    </main>
  );
}
