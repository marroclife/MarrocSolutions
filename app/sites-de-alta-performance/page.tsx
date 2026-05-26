import fs from 'fs';
import path from 'path';
import MarkdownContent from '@/components/MarkdownContent';
import { Metadata } from 'next';
import { CTABox } from '@/components/ui/CTABox';
import { AuthorBox } from '@/components/ui/AuthorBox';
import { RelatedSilos } from '@/components/RelatedSilos';

import { Layout, Smartphone, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sites de Alta Performance | Marroc Solutions',
  description: 'Engenharia de conversão e ciência da velocidade para maximizar ROI e autoridade de marca.',
  alternates: {
    canonical: 'https://solutions.marroc.xyz/sites-de-alta-performance',
  },
  openGraph: {
    title: 'Sites de Alta Performance | Marroc Solutions',
    description: 'Engenharia de conversão e ciência da velocidade para maximizar ROI e autoridade de marca.',
    url: 'https://solutions.marroc.xyz/sites-de-alta-performance',
    siteName: 'Marroc Solutions',
    type: 'article',
    locale: 'pt_BR',
    images: [{ url: 'https://solutions.marroc.xyz/og-image-performance.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sites de Alta Performance | Marroc Solutions',
    description: 'Engenharia de conversão e ciência da velocidade para maximizar ROI e autoridade de marca.',
  },
};

export default function Page() {
  const absolutePath = '/home/nexo-operator/.openclaw/workspace/org/projects/entity-salience-marroc/content/dev-1/sites-de-alta-performance.md';
  
  let content = '';
  try {
    content = fs.readFileSync(absolutePath, 'utf8');
  } catch (e) {
    content = '# Erro ao carregar conteúdo\nO arquivo de conteúdo não foi encontrado.';
  }

  const titleMatch = content.match(/^#\s+(.*)/m);
  const title = titleMatch ? titleMatch[1] : 'Sites de Alta Performance';

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans selection:bg-[#00FF94] selection:text-black">
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 md:px-20 border-b border-neutral-900">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-400 uppercase tracking-widest">
            <Layout className="w-3 h-3 text-[#00FF94]" /> 
            Conversão & Velocidade
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight text-white">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Seu site não é um cartão de visitas, é uma máquina de vendas. Engenharia de elite para quem não aceita perda de tráfego.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a 
              href="https://wa.me/5521992669980" 
              className="bg-[#00FF94] text-black font-bold px-8 py-4 rounded-lg hover:bg-[#00dd85] transition-all shadow-[0_0_20px_rgba(0,255,148,0.3)]"
            >
              Agendar Auditoria Gratuita
            </a>
            <div className="text-sm font-mono text-neutral-500">
              15 min de leitura | Atualizado em Maio 2026
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 md:px-20 lg:pr-80 py-16 relative">
        
        {/* Sticky TOC */}
        <aside className="hidden lg:block absolute right-0 top-16 w-64 shrink-0">
          <nav className="sticky top-24 space-y-4">
            <p className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-4">Conteúdo</p>
            <ul className="space-y-3 text-sm font-medium text-neutral-400">
              <li><a href="#arquitetura" className="hover:text-[#00FF94] transition-colors">Arquitetura de Conversão</a></li>
              <li><a href="#performance" className="hover:text-[#00FF94] transition-colors">Ciência da Velocidade</a></li>
              <li><a href="#ux-strategy" className="hover:text-[#00FF94] transition-colors">Estratégia de UX</a></li>
              <li><a href="#conclusao" className="hover:text-[#00FF94] transition-colors">Conclusão</a></li>
            </ul>
          </nav>
        </aside>

        <div className="max-w-3xl">
          <MarkdownContent content={content} />
          
          <CTABox 
            icon={Smartphone} 
            text="Seu site demora a carregar no mobile? Você está jogando dinheiro no lixo."
            ctaText="Otimizar Mobile" 
            href="https://wa.me/5521992669980" 
          />
          
          <CTABox 
            icon={Zap} 
            text="Implementamos a arquitetura de conversão mais rápida do mercado para maximizar seu ROI."
            ctaText="Consultoria de Elite" 
            href="https://wa.me/5521992669980" 
          />

          <AuthorBox 
            name="Marroc" 
            role="Arquiteto de Conversão" 
            bio="Especialista em transformar sites lentos em máquinas de alta conversão, unindo design industrial e engenharia de performance."
            image="" 
          />
          
          <RelatedSilos currentSlug="sites-de-alta-performance" />
          
          <NewsletterForm />
        </div>
      </div>
    </div>
  );
}
