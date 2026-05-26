"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  Book, 
  Sparkles, 
  BrainCircuit, 
  Package, 
  Monitor, 
  CheckCircle2,
  Mail,
  User
} from "lucide-react";
import { Section } from "@/components/ui/Section";
import { MysticCard } from "@/components/ui/MysticCard";

// --- AUXILIARY COMPONENTS ---

const FormatBadge = ({ type }: { type: 'physical' | 'digital' }) => (
  <div className={`flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[9px] font-mono uppercase tracking-tighter border ${
    type === 'physical' 
    ? 'bg-white/10 border-white/20 text-white' 
    : 'bg-black/40 border-white/10 text-gray-400'
  }`}>
    {type === 'physical' ? <Package size={10} /> : <Monitor size={10} />}
    {type === 'physical' ? 'Físico' : 'Digital'}
  </div>
);

const BookItem = ({ 
  title, 
  tag, 
  category, 
  status, 
  description, 
  color, 
  image, 
  link, 
  hasPhysical = true, 
  hasDigital = true 
}: { 
  title: string; 
  tag: string; 
  category: string; 
  status: string; 
  description: string; 
  color: 'gold' | 'cyan'; 
  image: string; 
  link: string; 
  hasPhysical?: boolean; 
  hasDigital?: boolean; 
}) => {
  const colorClass = color === 'gold' ? 'text-gold border-gold/20 bg-gradient-to-br from-gold/5 to-transparent' : 'text-cyan-400 border-cyan-500/20 bg-gradient-to-br from-cyan-950/10 to-transparent';
  const btnClass = color === 'gold' ? 'bg-gold hover:bg-white' : 'bg-cyan-600 hover:bg-white';

  return (
    <MysticCard className={`${colorClass} group`}>
      <div className="flex flex-col h-full">
        <div className="relative aspect-[3/4] w-full mb-8 overflow-hidden rounded-sm bg-black border border-white/5">
          <Image 
            src={image} 
            alt={title} 
            fill 
            className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
          />
          <div className="absolute top-4 right-4 bg-white text-black text-[10px] font-bold px-2 py-1 uppercase tracking-tighter">
            {status}
          </div>
          <div className="absolute bottom-4 left-4 flex gap-2">
            {hasDigital && <FormatBadge type="digital" />}
            {hasPhysical && <FormatBadge type="physical" />}
          </div>
        </div>
        
        <div className="space-y-4 flex-1">
          <div className={`flex items-center gap-2 ${color === 'gold' ? 'text-gold' : 'text-cyan-400'}`}>
            <Sparkles size={18} />
            <span className="font-mono text-xs uppercase tracking-widest">{tag}</span>
          </div>
          <h2 className="font-display text-3xl text-white">{title}</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            {description}
          </p>
        </div>

        <Link 
          href={link}
          className={`mt-8 flex items-center justify-center gap-2 w-full py-4 ${btnClass} text-black font-bold uppercase text-xs tracking-widest transition-all`}
        >
          Acessar Transmissão <ArrowRight size={14} />
        </Link>
      </div>
    </MysticCard>
  );
};

export default function BibliotecaPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-paper pt-24 pb-20">
      
      {/* 1. HERO SECTION */}
      <Section
        title="A Tradição Agora Tem Forma"
        subtitle="Códices para a transição planetária. Deixamos o etéreo para tocar a matéria: a Biblioteca Marroc agora chega em edições físicas."
        headingLevel="h1"
        container
      >
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fadeUp">
            <p className="text-gray-400 text-lg leading-relaxed">
              Não somos apenas autores de livros, somos arquitetos de sistemas vivos. 
              A jornada de Sofia, a sabedoria de Ganesha e a estratégia da consciência 
              não são apenas pixels em uma tela — são frequências que pedem para ser tocadas, 
              sentidas e guardadas em estantes como relíquias de um despertar.
            </p>
            <div className="flex gap-4">
              <Link 
                href="#vitrine" 
                className="px-6 py-3 bg-white text-black font-bold uppercase text-xs tracking-widest hover:bg-gold transition-colors"
              >
                Explorar Artefatos
              </Link>
            </div>
          </div>
          <div className="relative aspect-square max-w-md mx-auto animate-slowFloat">
             <div className="absolute inset-0 bg-gold/10 blur-3xl rounded-full"></div>
             <div className="relative z-10 border border-white/10 p-4 backdrop-blur-sm rounded-lg">
                <div className="aspect-[3/4] bg-black border border-white/5 overflow-hidden rounded-md flex items-center justify-center">
                   <Book size={80} className="text-gold/20" />
                   <span className="absolute bottom-4 text-[10px] font-mono text-gray-500 uppercase tracking-widest">Sinergia Material</span>
                </div>
             </div>
          </div>
        </div>
      </Section>

      {/* 2. VITRINE (GRID) */}
      <div id="vitrine" className="bg-[#0A0A0A] py-24 border-y border-white/5">
        <Section
          title="Os Artefatos"
          subtitle="Sintonize a frequência. Escolha o seu portal."
          headingLevel="h2"
          container
        >
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            
            <BookItem 
              title="O Escriba do Inominável"
              tag="Códice de Ganesha"
              category="Guia Teúrgico"
              status="Novo Lançamento"
              description="Gaṇeśa e a Engenharia da Sabedoria Primordial. Um guia teúrgico para remover obstáculos e sintonizar a mente."
              color="gold"
              image="/Capa-escriba.png"
              link="/livros/ganesha"
            />

            <BookItem 
              title="O Eixo da Consciência"
              tag="Protocolo Digital"
              category="Estratégia / IA"
              status="Disponível"
              description="Como integrar inteligência artificial e psique humana sem perder a soberania. Um guia estratégico para criadores conscientes."
              color="cyan"
              image="/capa-eixo.png"
              link="/livros/o-eixo-da-consciencia"
            />

            <BookItem 
              title="Um Lugar Entre Mundos"
              tag="Ficção Iniciática"
              category="Romance Espiritual"
              status="Best-Seller"
              description="A jornada de Sofia. O despertar através do xamanismo, da medicina da floresta e da geometria sagrada. Uma obra que pulsa."
              color="gold"
              image="/covers/ulem-unified.png"
              link="/livros/um-lugar-entre-mundos"
            />

          </div>
        </Section>
      </div>

      {/* 3. ARGUMENTO DO FÍSICO */}
      <Section container>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16 items-center py-12">
          <div className="space-y-6">
            <h2 className="font-display text-4xl text-white leading-tight">
              Por que o <span className="text-gold">Tangível</span>?
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Vivemos a era da fragmentação digital. Notificações, abas abertas, luz azul. 
              O livro físico é um ato de resistência. É o ritual de desligar o ruído e 
              permitir que a consciência mergulhe sem interrupções.
            </p>
            <ul className="space-y-3">
              {[
                "Foco ininterrupto e imersão profunda",
                "A memória tátil do papel e do aroma",
                "Um objeto sagrado para sua biblioteca pessoal",
                "Soberania sobre a informação"
              ].map((text, i) => (
                <li key={i} className="flex items-center gap-3 text-xs text-gray-300 font-mono uppercase tracking-wider">
                  <CheckCircle2 size={14} className="text-gold" /> {text}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative p-8 border border-white/10 bg-white/[0.02] rounded-lg backdrop-blur-sm">
            <div className="text-center space-y-4">
               <Package className="mx-auto text-gold" size={40} strokeWidth={1} />
               <p className="text-xs font-mono uppercase tracking-[0.3em] text-gray-500">Edição Limitada</p>
               <p className="text-sm italic text-gray-400">
                 "O livro físico não é apenas papel; é um âncoramento da frequência no mundo material."
               </p>
            </div>
          </div>
        </div>
      </Section>

      {/* 4. SOBRE O AUTOR */}
      <div className="bg-[#0A0A0A] py-24 border-y border-white/5">
        <Section container>
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="relative w-24 h-24 mx-auto mb-6">
               <div className="absolute inset-0 bg-gold/20 blur-xl rounded-full"></div>
               <div className="relative w-24 h-24 rounded-full border-2 border-gold overflow-hidden bg-black flex items-center justify-center">
                  <User size={48} className="text-gold" />
               </div>
            </div>
            <h2 className="font-display text-3xl text-white">Marcio Rocha (Marroc)</h2>
            <p className="text-gray-400 text-sm leading-relaxed italic">
              "Não sou apenas um autor, sou um canal. Minhas obras nascem do encontro entre 
              a precisão do código, a estratégia do negócio e o silêncio da floresta."
            </p>
            <p className="text-gray-500 text-xs font-mono uppercase tracking-widest">
              Apoio à Sustentabilidade Cultural & Saberes Tradicionais
            </p>
          </div>
        </Section>
      </div>

      {/* 5. NEWSLETTER / CAPTURA */}
      <Section container>
        <div className="max-w-2xl mx-auto p-12 border border-gold/30 bg-gold/[0.03] rounded-sm text-center space-y-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gold"></div>
          <div className="space-y-4">
            <Mail className="mx-auto text-gold" size={32} strokeWidth={1} />
            <h3 className="font-display text-2xl text-white">Sintonize a Frequência</h3>
            <p className="text-gray-400 text-sm">
              Receba transmissões exclusivas, insights sobre a era da IA e 
              avisos sobre novos artefatos da Biblioteca Marroc.
            </p>
          </div>
          <form className="flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="seu@email.com" 
              className="flex-1 bg-black border border-white/10 px-4 py-3 text-sm text-white focus:border-gold outline-none transition-all"
            />
            <button className="px-8 py-3 bg-gold text-black font-bold uppercase text-xs tracking-widest hover:bg-white transition-all">
              Inscrever-se
            </button>
          </form>
        </div>
      </Section>

      {/* NOTA FINAL */}
      <div className="mt-20 p-8 border border-white/5 bg-white/[0.02] text-center max-w-2xl mx-auto">
          <Book className="mx-auto mb-4 text-gray-600" size={24} strokeWidth={1} />
          <p className="text-xs text-gray-500 font-mono uppercase tracking-[0.2em]">Sustentabilidade Cultural</p>
          <p className="mt-4 text-sm text-gray-400 italic">
            "Parte do valor de cada artefato é destinado ao apoio das aldeias e saberes tradicionais que fundamentam nossas obras."
          </p>
      </div>
    </main>
  );
}
