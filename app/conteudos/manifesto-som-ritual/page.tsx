import React from 'react';
import { ShareButton } from '../../../components/ShareButton';
import { ArrowLeft, Calendar, Music2, Waves } from 'lucide-react';
import Link from 'next/link';

export default function SomRitualPage() {
  const article = {
    title: 'Manifesto do Som Ritual',
    excerpt: 'Música não é entretenimento. É portal. O som é uma ferramenta de arquitetura da realidade e engenharia vibracional.',
    publishDate: '2025-01-15',
    readTime: '4 min',
    tags: ['Música', 'Frequência', 'Ritual']
  };

  return (
    <article className="max-w-3xl mx-auto py-12 px-6 animate-fade-in-up font-sans text-zinc-100">
      {/* Navigation Back */}
      <Link 
        href="/conteudos"
        className="group inline-flex items-center gap-2 text-zinc-500 hover:text-gold-400 transition-colors mb-12 text-xs uppercase tracking-widest"
      >
        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
        Voltar para os Arquivos
      </Link>

      {/* Article Header */}
      <header className="mb-12 border-b border-zinc-800 pb-12">
        <div className="flex flex-wrap gap-3 mb-6">
            {article.tags.map(tag => (
                <span key={tag} className="px-3 py-1 border border-zinc-800 bg-zinc-900/50 rounded-full text-[10px] text-gold-500 uppercase tracking-wider font-semibold">
                    {tag}
                </span>
            ))}
        </div>
        
        <h1 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight">
            {article.title}
        </h1>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex items-center gap-3 text-zinc-400 text-sm">
                <Calendar className="w-4 h-4" />
                <time>{article.publishDate}</time>
                <span className="w-1 h-1 bg-zinc-700 rounded-full"></span>
                <span>{article.readTime} de leitura</span>
            </div>

            <ShareButton title={article.title} />
        </div>
      </header>

      {/* Featured Image */}
      <div className="w-full h-80 md:h-[500px] mb-16 overflow-hidden rounded-sm relative group">
         <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent z-10" />
         <img 
            src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2070&auto=format&fit=crop" 
            alt="Som Ritual" 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90"
         />
      </div>

      {/* Content Body */}
      <div className="prose prose-invert prose-lg prose-headings:font-serif prose-headings:text-zinc-100 prose-p:text-zinc-300 prose-p:leading-relaxed prose-strong:text-white prose-ul:text-zinc-300 prose-ol:text-zinc-300">
        
        {/* Intro Combinada */}
        <p className="text-xl md:text-2xl font-serif text-zinc-100 leading-relaxed mb-8 border-l-2 border-gold-500 pl-6">
           <strong className="text-gold-500">Música não é entretenimento. É portal.</strong> O som é uma ferramenta de arquitetura da realidade e engenharia vibracional. É a ponte entre o invisível e o visível, entre o que sentimos e o que ainda não conseguimos dizer.
        </p>
        
        <p>
          O Som Ritual nasce da lembrança de que, antes das palavras, havia ritmo. Antes das histórias, havia canto. Antes da razão, havia transe.
        </p>

        {/* Quote Block */}
        <div className="my-16 relative pl-8 md:pl-12 border-l border-gold-500/30 py-4">
             <div className="absolute -left-3 top-0 text-4xl text-gold-500/20 font-serif">"</div>
             <p className="text-lg md:text-xl text-zinc-300 italic font-light leading-relaxed">
               Cada frequência, cada batida, cada mantra, é um fio que tece a consciência em padrões sagrados. O tambor desperta a memória da Terra. O sopro carrega o chamado do vento. A voz abre portais no coração.
             </p>
        </div>

        {/* Card Templo */}
        <div className="bg-zinc-900/30 border border-zinc-800 p-8 my-16 rounded-sm hover:border-gold-900/30 transition-colors duration-500">
          <div className="flex items-center gap-3 mb-4">
              <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse"></span>
              <h3 className="text-gold-500 uppercase tracking-widest text-xs font-bold m-0 p-0">O Templo</h3>
          </div>
          <p className="text-zinc-200 leading-relaxed text-lg font-serif m-0">
            No Marroc, a pista de dança é um templo. O público, um círculo sagrado. As luzes, oferendas ao mistério. E cada set é um ritual vivo — onde a tecnologia encontra o espírito, e o corpo se torna veículo da transformação.
          </p>
        </div>

        <h3 className="text-2xl font-serif text-white mb-6 mt-16">A Tecnologia da Consciência</h3>
        
        <p>
          Para além da poesia, existe a física. O universo não é feito de matéria; ele é feito de música. A física quântica e as tradições védicas concordam em um ponto fundamental: tudo é vibração.
        </p>

        {/* Grid Técnico */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12 not-prose">
            <div className="p-6 bg-zinc-900/30 border border-zinc-800 hover:border-zinc-700 transition-colors rounded-sm group">
                <Waves className="w-8 h-8 text-zinc-600 mb-4 group-hover:text-gold-500 transition-colors" />
                <h4 className="text-gold-400 font-serif text-lg mb-3">Cimática</h4>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  O som organiza a matéria. Frequências específicas criam geometria sagrada na água e na areia. Somos 70% água; o som intencional reestrutura nossa biologia celular.
                </p>
            </div>
            <div className="p-6 bg-zinc-900/30 border border-zinc-800 hover:border-zinc-700 transition-colors rounded-sm group">
                <Music2 className="w-8 h-8 text-zinc-600 mb-4 group-hover:text-gold-500 transition-colors" />
                <h4 className="text-gold-400 font-serif text-lg mb-3">Arrastamento Neural</h4>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  O uso de BPMs específicos arrasta as ondas cerebrais de Beta (vigília/stress) para Theta (transe profundo). É o xamanismo digital em ação.
                </p>
            </div>
        </div>

        <p>
          O Som Ritual é essa engenharia vibracional, codificada para mover energia, liberar bloqueios e ancorar estados elevados de presença.
        </p>

        {/* Final Statement */}
        <div className="mt-16 p-10 bg-gradient-to-b from-zinc-900/20 to-zinc-900 border-t border-zinc-800 text-center rounded-sm">
          <p className="font-medium text-white text-xl font-serif italic">
            "Não estamos aqui para apenas tocar música. Estamos aqui para invocar. Para lembrar que dançar é orar, que cantar é curar, que viver é, acima de tudo, um rito."
          </p>
        </div>
      </div>

      {/* Bottom Share */}
      <div className="mt-16 pt-8 border-t border-zinc-800 flex justify-between items-center">
          <span className="text-zinc-500 text-sm italic">O chamado foi feito.</span>
          <ShareButton title={article.title} />
      </div>
    </article>
  );
}
