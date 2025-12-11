import React from 'react';
import { ARTICLES } from '../constants';
import { Article } from '../../../components/types';
import { ShareButton } from '../../../components/ShareButton';
import { ArrowLeft, Calendar } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return ARTICLES.map((article: Article) => ({
    slug: article.slug,
  }));
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const article = ARTICLES.find((a: Article) => a.slug === resolvedParams.slug);

  if (!article) {
    return notFound();
  }

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
            {article.tags.map((tag: string) => (
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
                <time>{new Date(article.publishDate).toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' })}</time>
                <span className="w-1 h-1 bg-zinc-700 rounded-full"></span>
                <span>{article.readTime} de leitura</span>
            </div>

            <ShareButton title={article.title} />
        </div>
      </header>

      {/* Featured Image */}
      <div className="w-full h-80 md:h-96 mb-16 overflow-hidden rounded-sm relative group">
         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
         <img 
            src={article.imageUrl} 
            alt={article.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
         />
      </div>

      {/* Content Body */}
      <div className="prose prose-invert prose-lg prose-headings:font-serif prose-headings:text-zinc-100 prose-p:text-zinc-300 prose-strong:text-white prose-ul:text-zinc-300 prose-ol:text-zinc-300 prose-a:text-gold-400 prose-blockquote:border-l-gold-500 prose-blockquote:bg-zinc-900/50 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:not-italic prose-blockquote:text-gold-100">
        <p className="lead text-xl text-zinc-200 italic border-l-2 border-gold-500 pl-6 mb-8">
            {article.excerpt}
        </p>
        
        {/* Dynamic content injection from constants.ts */}
        <div dangerouslySetInnerHTML={{ __html: article.content }} />
      </div>
      
      {/* Bottom Share */}
      <div className="mt-16 pt-8 border-t border-zinc-800 flex justify-between items-center">
          <span className="text-zinc-500 text-sm">Gostou deste conhecimento?</span>
          <ShareButton title={article.title} />
      </div>
    </article>
  );
}
