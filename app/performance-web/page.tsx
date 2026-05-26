import fs from 'fs';
import path from 'path';
import MarkdownContent from '@/components/MarkdownContent';
import { Metadata } from 'next';
import { CTABox } from '@/components/ui/CTABox';
import { AuthorBox } from '@/components/ui/AuthorBox';
import { RelatedSilos } from '@/components/RelatedSilos';
import { NewsletterForm } from '@/components/ui/NewsletterForm';
import { Rocket, Zap, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Performance Web | Marroc Solutions',
  description: 'Engenharia da velocidade como alavanca de ROI: Core Web Vitals e estratégias de elite.',
  alternates: {
    canonical: 'https://solutions.marroc.xyz/performance-web',
  },
  openGraph: {
    title: 'Performance Web | Marroc Solutions',
    description: 'Engenharia da velocidade como alavanca de ROI: Core Web Vitals e estratégias de elite.',
    url: 'https://solutions.marroc.xyz/performance-web',
    siteName: 'Marroc Solutions',
    type: 'article',
    locale: 'pt_BR',
    images: [{ url: 'https://solutions.marroc.xyz/og-image-performance-web.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Performance Web | Marroc Solutions',
    description: 'Engenharia da velocidade como alavanca de ROI: Core Web Vitals e estratégias de elite.',
  },
};

export default function Page() {
  const absolutePath = '/home/nexo-operator/.openclaw/workspace/org/projects/entity-salience-marroc/content/dev-2/performance-web.md';
  
  let content = '';
  try {
    content = fs.readFileSync(absolutePath, 'utf8');
  } catch (e) {
    content = '# Erro ao carregar conteúdo\nO arquivo de conteúdo não foi encontrado.';
  }

  // Simple parsing to extract H1 for the Hero
  const titleMatch = content.match(/^#\s+(.*)/m);
  const title = titleMatch ? titleMatch[1] : 'Performance Web';

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans selection:bg-[#00FF94] selection:text-black">
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 md:px-20 border-b border-neutral-900">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-400 uppercase tracking-widest">
            <Zap className="w-3 h-3 text-[#00FF94]" /> 
            Engenharia de Performance
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight text-white">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Transforme a velocidade de carregamento em conversão real. Core Web Vitals não são métricas, são dinheiro.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a 
              href="https://wa.me/5521990387232" 
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
        
        {/* Sticky TOC (Right Sidebar on Desktop) */}
        <aside className="hidden lg:block absolute right-0 top-16 w-64 shrink-0">
          <nav className="sticky top-24 space-y-4">
            <p className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-4">Conteúdo</p>
            <ul className="space-y-3 text-sm font-medium text-neutral-400">
              <li><a href="#introducao" className="hover:text-[#00FF94] transition-colors">Introdução</a></li>
              <li><a href="#estrategias" className="hover:text-[#00FF94] transition-colors">Estratégias de Elite</a></li>
              <li><a href="#vitals" className="hover:text-[#00FF94] transition-colors">Core Web Vitals</a></li>
              <li><a href="#conclusao" className="hover:text-[#00FF94] transition-colors">Conclusão</a></li>
            </ul>
          </nav>
        </aside>

        <div className="max-w-3xl">
          <MarkdownContent content={content} />
          
          {/* Mid-content conversion blocks (inserted via the logic or simply at key points) */}
          <CTABox 
            icon={Rocket} 
            text="Sua página demora mais de 2 segundos para carregar? Você está perdendo clientes agora mesmo."
            ctaText="Otimizar meu site" 
            href="https://wa.me/5521990387232" 
          />
          
          <CTABox 
            icon={Zap} 
            text="Implementamos a arquitetura de performance mais agressiva do mercado para ROI máximo."
            ctaText="Consultoria de Elite" 
            href="https://wa.me/5521990387232" 
          />

          <AuthorBox 
            name="Marroc" 
            role="Arquiteto de Performance" 
            bio="Especialista em sistemas de alta escala e performance web, focado em transformar infraestrutura técnica em vantagem competitiva de negócio."
            image="" 
          />
          
          <RelatedSilos currentSlug="performance-web" />
          
          <NewsletterForm />
        </div>
      </div>
    </div>
  );
}
