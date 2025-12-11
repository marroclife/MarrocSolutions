import React from 'react';
import { ShareButton } from '../../../components/ShareButton';
import { ArrowLeft, Calendar, Sun, Eye, Zap } from 'lucide-react';
import Link from 'next/link';

export default function SungazingPage() {
  const article = {
    title: 'Sungazing: A Alimentação pelo Sol',
    excerpt: 'Descubra a antiga prática de absorção da energia solar e como ela pode reconfigurar sua biologia e a glândula pineal.',
    publishDate: '2023-10-27',
    readTime: '5 min',
    tags: ['Biohacking', 'Espiritualidade', 'Energia']
  };

  return (
    <article className="max-w-3xl mx-auto py-12 px-6 animate-fade-in-up font-sans text-zinc-100">
      <Link 
        href="/conteudos"
        className="group inline-flex items-center gap-2 text-zinc-500 hover:text-gold-400 transition-colors mb-12 text-xs uppercase tracking-widest"
      >
        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
        Voltar para os Arquivos
      </Link>

      <header className="mb-12 border-b border-zinc-800 pb-12">
        <div className="flex flex-wrap gap-3 mb-6">
            {article.tags.map(tag => (
                <span key={tag} className="px-3 py-1 border border-zinc-800 bg-zinc-900/50 rounded-full text-[10px] text-gold-500 uppercase tracking-wider font-semibold">
                    {tag}
                </span>
            ))}
        </div>
        
        <h1 className="text-4xl md:text-5xl font-serif text-white mb-8 leading-tight">
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

      <div className="w-full h-80 md:h-96 mb-16 overflow-hidden rounded-sm relative group">
         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
         <img 
            src="https://images.unsplash.com/photo-1502481851512-e9e2529bfbf9?q=80&w=2069&auto=format&fit=crop" 
            alt="Sungazing" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
         />
      </div>

      <div className="prose prose-invert prose-lg prose-headings:font-serif prose-headings:text-zinc-100 prose-p:text-zinc-300 prose-strong:text-white prose-ul:text-zinc-300 prose-li:marker:text-gold-500">
        <p className="text-xl text-zinc-200 font-serif italic mb-8">
            O sol não é apenas uma estrela física geradora de calor; na visão das tradições antigas, ele é um <strong>transmissor de dados</strong>.
        </p>

        <p>
            O Sungazing (ou contemplação solar) é uma tecnologia ancestral redescoberta que propõe que o corpo humano é uma célula fotovoltaica biológica, capaz de converter energia solar diretamente em vitalidade e clareza mental.
        </p>
        
        <h3 className="text-2xl font-serif text-white mt-12 mb-6 flex items-center gap-2">
            <Eye className="w-6 h-6 text-gold-500" />
            A Ciência Oculta
        </h3>
        <p>
            Quando a luz solar atinge a retina em horários específicos (baixa radiação UV), ela viaja pelo nervo óptico e ativa o hipotálamo e a glândula pineal. A pineal, frequentemente chamada de "Terceiro Olho", é responsável pela produção de melatonina e serotonina, regulando nossos ciclos circadianos e estados de consciência.
        </p>
        
        <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-sm my-10">
            <h3 className="text-xl font-serif text-gold-400 mt-0 mb-6 flex items-center gap-2">
                <Zap className="w-5 h-5" />
                O Protocolo de Segurança (HRM)
            </h3>
            <p className="text-sm text-zinc-400 mb-4">
                A prática exige rigor e respeito aos ciclos naturais. Não se deve olhar para o sol quando ele está forte.
            </p>
            
            <ul className="space-y-4 m-0 p-0 list-none">
                <li className="flex gap-4 items-start">
                    <span className="text-gold-500 font-bold text-lg">01.</span>
                    <div>
                        <strong className="text-white block mb-1">A Janela Segura</strong>
                        <span className="text-zinc-400 text-sm">A prática deve ser feita estritamente na primeira hora após o nascer do sol ou na última hora antes do pôr do sol. (Índice UV ~0).</span>
                    </div>
                </li>
                <li className="flex gap-4 items-start">
                    <span className="text-gold-500 font-bold text-lg">02.</span>
                    <div>
                        <strong className="text-white block mb-1">Earthing (Aterramento)</strong>
                        <span className="text-zinc-400 text-sm">É essencial estar com os pés descalços na terra (areia ou grama) durante a prática para fechar o circuito eletromagnético.</span>
                    </div>
                </li>
                <li className="flex gap-4 items-start">
                    <span className="text-gold-500 font-bold text-lg">03.</span>
                    <div>
                        <strong className="text-white block mb-1">Progressão Lenta</strong>
                        <span className="text-zinc-400 text-sm">Comece com 10 segundos no primeiro dia. Aumente 10 segundos por dia. Em um mês, você estará em 5 minutos.</span>
                    </div>
                </li>
            </ul>
        </div>

        <blockquote className="border-l-2 border-gold-500 pl-6 italic text-zinc-300 my-10">
            "O olho é a lâmpada do corpo. Se o teu olho for bom, todo o teu corpo terá luz." <br/>
            <span className="text-sm text-zinc-500 mt-2 block not-italic">— Mateus 6:22</span>
        </blockquote>

        <h3 className="text-2xl font-serif text-white mt-12 mb-6">Benefícios Relatados</h3>
        <p>
            Praticantes experientes relatam diminuição da ansiedade, aumento da clareza mental, decalcificação da pineal e uma sensação profunda de conexão com o todo. É uma forma de nutrição prânica que complementa a alimentação física.
        </p>
      </div>
      
      <div className="mt-16 pt-8 border-t border-zinc-800 flex justify-between items-center">
          <span className="text-zinc-500 text-sm">Energia Solar</span>
          <ShareButton title={article.title} />
      </div>
    </article>
  );
}
