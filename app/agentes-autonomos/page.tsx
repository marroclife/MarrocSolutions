import fs from 'fs';
import path from 'path';
import MarkdownContent from '@/components/MarkdownContent';
import { Metadata } from 'next';
import { CTABox } from '@/components/ui/CTABox';
import { AuthorBox } from '@/components/ui/AuthorBox';
import { RelatedSilos } from '@/components/RelatedSilos';
import { NewsletterForm } from '@/components/ui/NewsletterForm';
import { Bot, Cpu, BrainCircuit } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Agentes Autónomos | Marroc Solutions',
  description: 'A nova fronteira da produtividade empresarial: Autonomia Cognitiva e IA como colaborador.',
  alternates: {
    canonical: 'https://marroc.xyz/agentes-autonomos',
  },
  openGraph: {
    title: 'Agentes Autónomos | Marroc Solutions',
    description: 'A nova fronteira da produtividade empresarial: Autonomia Cognitiva e IA como colaborador.',
    url: 'https://marroc.xyz/agentes-autonomos',
    siteName: 'Marroc Solutions',
    type: 'article',
    locale: 'pt_BR',
    images: [{ url: 'https://marroc.xyz/og-image-agents.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agentes Autónomos | Marroc Solutions',
    description: 'A nova fronteira da produtividade empresarial: Autonomia Cognitiva e IA como colaborador.',
  },
};

export default function Page() {
  const absolutePath = '/home/nexo-operator/.openclaw/workspace/org/projects/entity-salience-marroc/content/dev-1/agentes-autonomos.md';
  
  let content = '';
  try {
    content = fs.readFileSync(absolutePath, 'utf8');
  } catch (e) {
    content = '# Erro ao carregar conteúdo\nO arquivo de conteúdo não foi encontrado.';
  }

  const titleMatch = content.match(/^#\s+(.*)/m);
  const title = titleMatch ? titleMatch[1] : 'Agentes Autónomos';

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans selection:bg-[#00FF94] selection:text-black">
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 md:px-20 border-b border-neutral-900">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-400 uppercase tracking-widest">
            <Bot className="w-3 h-3 text-[#00FF94]" /> 
            Autonomia Cognitiva
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight text-white">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Pare de usar IAs como chatbots e comece a usá-las como colaboradores. A era dos Agentes Autónomos chegou.
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
        
        {/* Sticky TOC */}
        <aside className="hidden lg:block absolute right-0 top-16 w-64 shrink-0">
          <nav className="sticky top-24 space-y-4">
            <p className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-4">Conteúdo</p>
            <ul className="space-y-3 text-sm font-medium text-neutral-400">
              <li><a href="#conceitos" className="hover:text-[#00FF94] transition-colors">Conceitos Fundamentais</a></li>
              <li><a href="#arquitetura" className="hover:text-[#00FF94] transition-colors">Arquitetura de Agentes</a></li>
              <li><a href="#impacto" className="hover:text-[#00FF94] transition-colors">Impacto no ROI</a></li>
              <li><a href="#conclusao" className="hover:text-[#00FF94] transition-colors">Conclusão</a></li>
            </ul>
          </nav>
        </aside>

        <div className="max-w-3xl">
          <MarkdownContent content={content} />
          
          <CTABox 
            icon={Cpu} 
            text="Quer automatizar fluxos complexos com agentes que pensam e executam sozinhos?"
            ctaText="Implementar Agentes" 
            href="https://wa.me/5521990387232" 
          />
          
          <CTABox 
            icon={BrainCircuit} 
            text="Aumente a capacidade cognitiva da sua empresa com arquiteturas de IA autônoma."
            ctaText="Consultoria de IA" 
            href="https://wa.me/5521990387232" 
          />

          <AuthorBox 
            name="Marroc" 
            role="Especialista em Autonomia Cognitiva" 
            bio="Pesquisador e implementador de sistemas autônomos, focado em criar fluxos de trabalho onde a IA atua como um braço executor e pensante da empresa."
            image="" 
          />
          
          <RelatedSilos currentSlug="agentes-autonomos" />
          
          <NewsletterForm />
        </div>
      </div>
    </div>
  );
}
