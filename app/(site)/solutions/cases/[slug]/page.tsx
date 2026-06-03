// app/(site)/solutions/cases/[slug]/page.tsx
// Página individual de cada case.
// Gera rotas estáticas pra todos os cases do lib/cases.ts.
// Next.js 16+: `params` e `searchParams` são Promises — precisam de await.

import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import {
  ALL_CASES,
  CATEGORY_LABELS,
  getCaseBySlug,
} from "@/lib/cases";

export function generateStaticParams() {
  return ALL_CASES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = getCaseBySlug(slug);
  if (!c) return {};
  return {
    title: `${c.name} — ${c.tagline}`,
    description: c.summary[0],
  };
}

const CaseDetailPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const c = getCaseBySlug(slug);
  if (!c) notFound();

  const others = ALL_CASES.filter((x) => x.slug !== c.slug).slice(0, 3);

  return (
    <div className="bg-[#050505] text-white min-h-screen">
      {/* Navbar interna */}
      <nav className="fixed w-full z-50 bg-[#050505]/90 backdrop-blur-md border-b border-white/5 py-4">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link
            href="/solutions/portfolio"
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium hidden sm:block">Portfólio</span>
          </Link>
          <h1 className="text-white font-bold text-lg truncate max-w-[60%]">{c.name}</h1>
          <a
            href={`https://wa.me/5521990387232?text=Quero%20um%20diagn%C3%B3stico%20para%20${encodeURIComponent(c.name)}`}
            className="text-sm font-bold bg-white text-black px-4 py-2 rounded hover:bg-neon-green transition-colors whitespace-nowrap"
          >
            Agendar
          </a>
        </div>
      </nav>

      {/* Hero do case */}
      <section className="relative pt-20 pb-16 border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-deep-emerald/20 via-[#050505] to-[#050505] z-0" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 text-neon-green mb-4">
            <span className="font-mono text-xs tracking-widest uppercase">
              {CATEGORY_LABELS[c.category]}
            </span>
            {c.priority && (
              <>
                <span className="text-paper/30">·</span>
                <span className="font-mono text-xs tracking-widest uppercase text-red-400">
                  Em Execução Prioritária
                </span>
              </>
            )}
          </div>
          <h1 className="font-display text-5xl md:text-7xl leading-none mb-4">
            {c.name}
          </h1>
          <p className="font-mono text-neon-green text-lg md:text-xl mb-6">
            {c.tagline}
          </p>
          {c.headline && (
            <p className="text-2xl text-white/90 border-l-4 border-neon-green pl-4 max-w-3xl">
              <strong>{c.headline}</strong>
            </p>
          )}

          {c.liveUrl && (
            <a
              href={c.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 border border-neon-green/40 text-neon-green hover:bg-neon-green hover:text-black font-bold uppercase tracking-widest text-xs rounded-lg transition-colors"
            >
              Visitar site ao vivo <ExternalLink size={14} />
            </a>
          )}
        </div>
      </section>

      {/* Conteúdo */}
      <article className="max-w-5xl mx-auto px-6 py-16 space-y-16">
        {/* Screenshot */}
        <div className="relative w-full aspect-video overflow-hidden rounded-2xl border border-white/10 bg-black/40">
          <Image
            src={c.image}
            alt={`${c.name} preview`}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Resumo */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-neon-green pl-4">
            O Case
          </h2>
          <div className="space-y-4">
            {c.summary.map((s, i) => (
              <p key={i} className="text-lg text-paper/80 leading-relaxed flex gap-3">
                <span className="text-neon-green mt-1.5">▸</span>
                <span>{s}</span>
              </p>
            ))}
          </div>
        </section>

        {/* Resultados */}
        {c.results.length > 0 && (
          <section>
            <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-neon-green pl-4">
              Resultados
            </h2>
            <ul className="grid md:grid-cols-2 gap-4">
              {c.results.map((r, i) => (
                <li
                  key={i}
                  className="p-5 rounded-xl bg-white/5 border border-white/10 text-paper/80"
                >
                  <span className="text-neon-green font-bold mr-2">+</span>
                  {r}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Stack */}
        {c.stack && c.stack.length > 0 && (
          <section>
            <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-neon-green pl-4">
              Stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {c.stack.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1.5 rounded-full bg-neon-green/10 border border-neon-green/30 text-neon-green text-xs font-mono"
                >
                  {s}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="rounded-2xl bg-gradient-to-r from-deep-emerald/20 to-neon-green/10 border border-neon-green/30 p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Quer um resultado parecido?
          </h3>
          <p className="text-paper/70 mb-6 max-w-2xl mx-auto">
            Cada case acima começou com um diagnóstico técnico gratuito de 30 minutos.
          </p>
          <a
            href={`https://wa.me/5521990387232?text=Vi%20o%20case%20${encodeURIComponent(c.name)}%20e%20quero%20um%20diagn%C3%B3stico`}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-neon-green text-black font-bold rounded-lg hover:bg-white transition-colors text-lg"
          >
            Agendar meu Diagnóstico
          </a>
        </section>

        {/* Outros cases */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6">Outros Cases</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/solutions/cases/${o.slug}`}
                className="block p-4 rounded-xl border border-white/10 bg-white/5 hover:border-neon-green/40 transition-all"
              >
                <p className="text-xs font-mono text-neon-green uppercase tracking-wider mb-1">
                  {CATEGORY_LABELS[o.category]}
                </p>
                <h3 className="font-bold text-white mb-1">{o.name}</h3>
                <p className="text-xs text-paper/60 line-clamp-2">{o.tagline}</p>
                <span className="inline-flex items-center gap-1 mt-3 text-xs text-neon-green">
                  Ver <ArrowRight size={12} />
                </span>
              </Link>
            ))}
          </div>
        </section>
      </article>
    </div>
  );
};

export default CaseDetailPage;
