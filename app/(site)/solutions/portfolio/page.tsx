// app/(site)/solutions/portfolio/page.tsx
// Portfólio detalhado com filtros por categoria.
// Migrado do antigo solutions/app/portfolio/page.tsx (subdomínio extinto).
// Adaptação: usa lib/cases.ts como fonte de verdade.

"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, Code2, Cpu, Zap } from "lucide-react";
import {
  ALL_CASES,
  CATEGORY_LABELS,
  type CaseCategory,
  type CaseStudy,
} from "@/lib/cases";

type FilterId = "all" | CaseCategory;

const FILTERS: { id: FilterId; label: string }[] = [
  { id: "all", label: "Todos os Casos" },
  { id: "software", label: "Softwares" },
  { id: "autoridade", label: "Design de Autoridade" },
  { id: "saliencia-regional", label: "Saliência Regional" },
];

const ICON_FOR: Record<CaseCategory, React.ReactNode> = {
  software: <Code2 className="w-6 h-6" />,
  autoridade: <Zap className="w-6 h-6" />,
  "saliencia-regional": <Cpu className="w-6 h-6" />,
};

const PortfolioCard = ({ project }: { project: CaseStudy }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="group relative"
  >
    <div className="rounded-2xl ring-1 ring-white/10 bg-gradient-to-br from-[#171717] to-[#0a0a0a] p-8 md:p-10 overflow-hidden hover:ring-neon-green/30 transition-all duration-500">
      <div className="absolute inset-0 bg-gradient-to-br from-neon-green/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="absolute top-6 right-6 z-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-green/10 border border-neon-green/30 backdrop-blur-sm">
          <div className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
          <span className="text-xs font-bold text-neon-green uppercase tracking-wider">
            Built by Marroc
          </span>
        </div>
      </div>

      <div className="relative z-10 grid md:grid-cols-[1fr,1fr] gap-8 items-start">
        <div>
          <div className="flex items-start gap-4 mb-6">
            <div className="w-14 h-14 rounded-lg bg-neon-green/10 border border-neon-green/20 flex items-center justify-center text-neon-green group-hover:scale-110 transition-transform duration-500 flex-shrink-0">
              {ICON_FOR[project.category]}
            </div>
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
                {project.name}
              </h3>
              <p className="text-sm font-mono text-neon-green uppercase tracking-wide">
                {project.tagline}
              </p>
            </div>
          </div>

          <div className="space-y-3 mb-8">
            {project.summary.map((text, i) => (
              <p key={i} className="text-slate-300 leading-relaxed flex items-start gap-3">
                <span className="text-neon-green mt-1.5 flex-shrink-0">▸</span>
                <span>{text}</span>
              </p>
            ))}
          </div>

          {project.results && project.results.length > 0 && (
            <div className="mb-8 p-4 rounded-lg bg-white/5 border border-white/10">
              <h4 className="text-sm font-bold text-neon-green mb-3 uppercase tracking-wider">
                Resultados
              </h4>
              <ul className="space-y-2">
                {project.results.map((result, i) => (
                  <li key={i} className="text-xs text-slate-400 flex items-start gap-2">
                    <span className="text-neon-green font-bold flex-shrink-0">+</span>
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <Link
            href={`/solutions/cases/${project.slug}`}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-neon-green text-black font-bold rounded-lg hover:bg-white transition-all duration-300 uppercase tracking-widest text-sm group-hover:shadow-[0_0_20px_rgba(0,255,148,0.3)]"
          >
            Ver Case Completo
          </Link>
        </div>

        <div className="relative w-full h-auto min-h-[240px] overflow-hidden rounded-xl bg-black/30">
          <Image
            src={project.image}
            alt={`${project.name} - ${project.tagline}`}
            width={400}
            height={300}
            className="w-full h-auto object-cover border border-white/10 group-hover:scale-105 transition-transform duration-500"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        </div>
      </div>
    </div>
  </motion.div>
);

const CategorySection = ({
  category,
  projects,
}: {
  category: CaseCategory;
  projects: CaseStudy[];
}) => {
  if (projects.length === 0) return null;
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="space-y-12"
    >
      <div className="border-l-4 border-neon-green pl-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
          {CATEGORY_LABELS[category]}
        </h2>
      </div>
      <div className="space-y-8">
        {projects.map((p) => (
          <PortfolioCard key={p.slug} project={p} />
        ))}
      </div>
    </motion.div>
  );
};

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState<FilterId>("all");

  const filtered =
    activeFilter === "all"
      ? ALL_CASES
      : ALL_CASES.filter((c) => c.category === activeFilter);

  const grouped: Record<CaseCategory, CaseStudy[]> = {
    software: filtered.filter((c) => c.category === "software"),
    autoridade: filtered.filter((c) => c.category === "autoridade"),
    "saliencia-regional": filtered.filter((c) => c.category === "saliencia-regional"),
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      {/* Navbar interna do portfólio */}
      <nav className="fixed w-full z-50 bg-[#050505]/90 backdrop-blur-md border-b border-white/5 py-4">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link
            href="/solutions"
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium hidden sm:block">Voltar ao Hub</span>
          </Link>
          <h1 className="text-white font-bold text-lg">Portfólio</h1>
          <a
            href="https://wa.me/5521990387232?text=Quero%20agendar%20um%20diagn%C3%B3stico"
            className="text-sm font-bold bg-white text-black px-4 py-2 rounded hover:bg-neon-green transition-colors"
          >
            Agendar Diagnóstico
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-[400px] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-deep-emerald/30 via-[#050505] to-[#050505] z-0" />
        <div className="max-w-7xl mx-auto px-6 z-10 w-full text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6">
              Nossas Intervenções: <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neon-green">
                Arquitetura Digital
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 mb-8 leading-relaxed max-w-2xl">
              Soluções enterprise que transformam operações através de
              inteligência, automação e design de conversão.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filtros */}
      <section className="py-12 px-6 md:px-12 lg:px-24 bg-[#050505] border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-start md:justify-center">
            {FILTERS.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 rounded-lg font-bold uppercase tracking-widest text-sm transition-all duration-300 ${
                  activeFilter === filter.id
                    ? "bg-neon-green text-black shadow-[0_0_20px_rgba(0,255,148,0.3)]"
                    : "bg-white/5 text-slate-400 border border-white/10 hover:border-neon-green/30 hover:text-white"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Sections por categoria */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto space-y-24">
          <CategorySection category="software" projects={grouped.software} />
          <CategorySection category="autoridade" projects={grouped.autoridade} />
          <CategorySection
            category="saliencia-regional"
            projects={grouped["saliencia-regional"]}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-[#0a0a0a] to-deep-emerald/20 border-t border-white/5">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Seu Negócio Merece Inteligência Operacional
          </h2>
          <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
            Arquitetura digital que escala. Automação que inteligence.
            Resultados que convertem em receita.
          </p>
          <a
            href="https://wa.me/5521990387232?text=Quero%20entender%20qual%20solu%C3%A7%C3%A3o%20se%20aplica%20ao%20meu%20neg%C3%B3cio"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-neon-green transition-colors text-lg"
          >
            Agendar Diagnóstico
          </a>
        </div>
      </section>
    </div>
  );
}
