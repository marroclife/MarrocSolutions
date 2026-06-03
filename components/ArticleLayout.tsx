// components/ArticleLayout.tsx
// Componente base reutilizável para todas as páginas de artigos/tese em /conteudos.
// Criado em 03/06/2026 para padronizar as 15 teses do Marroc Solutions SEO
// e evitar duplicação massiva de JSX entre páginas.

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar } from 'lucide-react';
import { ShareButton } from '@/components/ShareButton';

export type ArticleLayoutProps = {
  title: string;
  excerpt: string;
  publishDate: string;
  readTime: string;
  tags: string[];
  imageUrl: string;
  imageAlt: string;
  /** Quando definido, exibe a navegação prev/next entre artigos do mesmo eixo. */
  prev?: { title: string; href: string };
  next?: { title: string; href: string };
  children: React.ReactNode;
};

export function ArticleLayout({
  title,
  excerpt,
  publishDate,
  readTime,
  tags,
  imageUrl,
  imageAlt,
  prev,
  next,
  children,
}: ArticleLayoutProps) {
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
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 border border-zinc-800 bg-zinc-900/50 rounded-full text-[10px] text-gold-500 uppercase tracking-wider font-semibold"
            >
              {tag}
            </span>
          ))}
        </div>

        <h1 className="text-4xl md:text-5xl font-serif text-white mb-6 leading-tight">
          {title}
        </h1>

        <p className="text-lg text-zinc-400 mb-8 leading-relaxed font-light italic border-l-2 border-gold-500/40 pl-4">
          {excerpt}
        </p>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="flex items-center gap-3 text-zinc-400 text-sm">
            <Calendar className="w-4 h-4" />
            <time>{publishDate}</time>
            <span className="w-1 h-1 bg-zinc-700 rounded-full" />
            <span>{readTime} de leitura</span>
          </div>
          <ShareButton title={title} />
        </div>
      </header>

      {/* Featured Image */}
      <div className="w-full h-80 md:h-[500px] mb-16 overflow-hidden rounded-sm relative group">
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent z-10" />
        <img
          src={imageUrl}
          alt={imageAlt}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90"
        />
      </div>

      {/* Content Body */}
      <div className="prose prose-invert prose-lg prose-headings:font-serif prose-headings:text-zinc-100 prose-p:text-zinc-300 prose-p:leading-relaxed prose-strong:text-white prose-ul:text-zinc-300 prose-ol:text-zinc-300">
        {children}
      </div>

      {/* Navegação Prev/Next */}
      {(prev || next) && (
        <nav className="mt-20 pt-8 border-t border-zinc-800 grid grid-cols-1 md:grid-cols-2 gap-6">
          {prev ? (
            <Link
              href={prev.href}
              className="group p-6 border border-zinc-800 rounded-sm hover:border-gold-500/50 transition-colors"
            >
              <span className="text-[10px] text-zinc-500 uppercase tracking-widest">
                ← Tese Anterior
              </span>
              <p className="text-white font-serif mt-2 group-hover:text-gold-400 transition-colors">
                {prev.title}
              </p>
            </Link>
          ) : (
            <div />
          )}
          {next && (
            <Link
              href={next.href}
              className="group p-6 border border-zinc-800 rounded-sm hover:border-gold-500/50 transition-colors text-right"
            >
              <span className="text-[10px] text-zinc-500 uppercase tracking-widest">
                Próxima Tese →
              </span>
              <p className="text-white font-serif mt-2 group-hover:text-gold-400 transition-colors">
                {next.title}
              </p>
            </Link>
          )}
        </nav>
      )}

      {/* Bottom Share */}
      <div className="mt-16 pt-8 border-t border-zinc-800 flex justify-between items-center">
        <Link
          href="/conteudos"
          className="text-zinc-500 hover:text-gold-400 text-sm italic transition-colors"
        >
          ← Todos os Arquivos
        </Link>
        <ShareButton title={title} />
      </div>
    </article>
  );
}
