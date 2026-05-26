import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const silos = [
  {
    slug: 'sites-de-alta-performance',
    title: 'Sites de Alta Performance',
    description: 'Engenharia de conversão e ciência da velocidade para maximizar ROI.',
  },
  {
    slug: 'agentes-autonomos',
    title: 'Agentes Autónomos',
    description: 'Autonomia Cognitiva e IA como colaborador estratégico.',
  },
  {
    slug: 'performance-web',
    title: 'Performance Web',
    description: 'Engenharia da velocidade como alavanca de conversão real.',
  },
  {
    slug: 'seo-saliencia-entidade',
    title: 'Saliência de Entidade',
    description: 'Domine o SEO semântico e a autoridade algorítmica.',
  },
];

export function RelatedSilos({ currentSlug }: { currentSlug: string }) {
  const otherSilos = silos.filter(silo => silo.slug !== currentSlug);

  return (
    <div className="py-12 border-t border-neutral-900 mt-12">
      <h3 className="text-sm font-bold text-neutral-500 uppercase tracking-widest mb-6">
        Autoridade Relacionada
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {otherSilos.map((silo) => (
          <Link 
            key={silo.slug} 
            href={`/${silo.slug}`} 
            className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-[#00FF94]/50 hover:bg-neutral-800/50 transition-all group"
          >
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-[#00FF94] uppercase tracking-tighter">Silo de Autoridade</span>
                <ArrowRight className="w-3 h-3 text-neutral-600 group-hover:text-[#00FF94] transition-colors" />
              </div>
              <h4 className="font-bold text-neutral-100 group-hover:text-white transition-colors">
                {silo.title}
              </h4>
              <p className="text-sm text-neutral-400 leading-relaxed">
                {silo.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
