import React from 'react';
import { ARTICLES } from './constants';
import { Article } from '../../components/types';
import { ArrowRight, Clock, Tag } from 'lucide-react';
import Link from 'next/link';

export default function ConteudosIndexPage() {
  return (
    <div className="max-w-7xl mx-auto py-16 px-6 animate-fade-in min-h-screen">
        {/* Header Section */}
        <div className="text-center mb-20 relative">
             <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/80 backdrop-blur-sm text-[10px] text-[#f59e0b] uppercase tracking-[0.2em] mb-8 shadow-lg shadow-black/20">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] animate-pulse shadow-[0_0_10px_rgba(245,158,11,0.5)]"></span>
                Protocolo: Sabedoria Viva
             </div>
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-8 tracking-tight">
                Arquivos <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#fbbf24] via-[#f59e0b] to-[#d97706]">Akáshicos</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#78350f] to-transparent mx-auto mb-8"></div>
            <p className="max-w-2xl mx-auto text-zinc-400 font-light text-lg md:text-xl leading-relaxed">
                Explore os códigos ocultos da natureza, rituais sonoros e as tecnologias esquecidas para expansão da consciência.
            </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12">
            {ARTICLES.map((article: Article) => (
                <Link 
                    key={article.id}
                    href={`/conteudos/${article.slug}`}
                    className="group relative bg-zinc-900/20 border border-zinc-800 overflow-hidden hover:border-[#f59e0b] transition-all duration-500 flex flex-col rounded-sm hover:bg-zinc-900/40 hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]"
                >
                    {/* Image Container */}
                    <div className="h-72 overflow-hidden relative">
                         <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-90 z-10 transition-opacity duration-700 group-hover:opacity-60" />
                         
                         {/* Hover Effect Overlay */}
                         <div className="absolute inset-0 bg-[#78350f]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 mix-blend-overlay" />

                        <img 
                            src={article.imageUrl} 
                            alt={article.title}
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                        />
                         
                         <div className="absolute top-4 right-4 z-20 flex gap-2">
                             <span className="bg-black/80 backdrop-blur-md border border-white/5 text-zinc-300 text-[10px] px-3 py-1.5 uppercase tracking-widest rounded-full flex items-center gap-1.5 shadow-xl">
                                 <Clock className="w-3 h-3 text-[#f59e0b]" />
                                 {article.readTime}
                             </span>
                         </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 md:p-10 flex-1 flex flex-col relative z-20">
                        {/* Decorative line */}
                        <div className="absolute top-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent group-hover:via-[#f59e0b]/50 transition-colors duration-700"></div>

                        <div className="flex flex-wrap gap-2 mb-6">
                            {article.tags.slice(0, 3).map((tag: string) => (
                                <span key={tag} className="inline-flex items-center gap-1 text-[10px] border border-zinc-800/80 bg-zinc-950/50 px-2.5 py-1 rounded-sm text-[#d97706] uppercase tracking-wider font-medium group-hover:border-[#f59e0b]/30 transition-colors">
                                    <Tag className="w-2.5 h-2.5" />
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <h3 className="text-3xl font-serif text-zinc-100 mb-4 group-hover:text-[#fbbf24] transition-colors leading-tight">
                            {article.title}
                        </h3>
                        
                        <p className="text-zinc-500 font-light leading-relaxed mb-8 flex-grow text-sm md:text-base line-clamp-3 group-hover:text-zinc-400 transition-colors">
                            {article.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between mt-auto pt-6 border-t border-zinc-800/50 group-hover:border-[#f59e0b]/30 transition-colors">
                            <span className="text-xs text-zinc-600 font-mono group-hover:text-[#f59e0b]/80 transition-colors">
                                {new Date(article.publishDate).toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' })}
                            </span>
                            
                            <div className="flex items-center text-xs text-zinc-100 uppercase tracking-widest font-bold gap-2 group-hover:gap-4 transition-all duration-300 group-hover:text-[#fbbf24]">
                                Acessar Transmissão 
                                <ArrowRight className="w-3 h-3 text-[#f59e0b]" />
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    </div>
  );
}
