// app/agenda/page.tsx
import React from "react";
import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import Link from "next/link";
import { Calendar, MapPin, ArrowUpRight } from "lucide-react"; // Certifique-se de ter lucide-react instalado

export const metadata: Metadata = {
  title: "Agenda — Marroc",
  description: "Próximos rituais, festivais e imersões. Acompanhe a agenda do Marroc.",
};

// Dados dos eventos atualizados
const events = [
  {
    id: "sambashiva",
    date: "19 DEZ",
    year: "2025",
    title: "Festival SambaShiva",
    category: "Festival / Sandro Shankara Band",
    location: "Regiao Serrana, RJ",
    link: "https://www.instagram.com/sambashivabrasil/",
    btnLabel: "Ver no Instagram"
  },
  {
    id: "aya-dez",
    date: "20 DEZ",
    year: "2025",
    title: "Cerimônia de Ayahuasca",
    category: "Ritual / Medicina",
    location: "Rio de Janeiro, RJ (Sandro Shankara)",
    link: "https://www.instagram.com/sandroshankara/",
    btnLabel: "Saiba Mais"
  },
  {
    id: "reveillon",
    date: "30 DEZ - 02 JAN",
    year: "2025/26",
    title: "Imersão Conexões Ano Novo",
    category: "Retiro / Imersão",
    location: "Região Serrana, RJ (Rosane Ventura)",
    link: "https://www.instagram.com/rosaneventuraa",
    btnLabel: "Garantir Vaga"
  },
  {
    id: "aya-jan",
    date: "17 JAN",
    year: "2026",
    title: "Cerimônia de Ayahuasca",
    category: "Ritual / Medicina",
    location: "Rio de Janeiro, RJ (Sandro Shankara)",
    link: "https://www.instagram.com/sandroshankara/",
    btnLabel: "Saiba Mais"
  }
];

export default function AgendaPage() {
  return (
    <main className="bg-[#0b0b0b] text-paper min-h-screen">
      {/* CABEÇALHO */}
      <Section
        title="Agenda & Rituais"
        subtitle="Onde o som encontra o espírito. Datas confirmadas para vivências presenciais."
        headingLevel="h1"
        className="py-12 md:py-20"
      >
        {/* GRID DE EVENTOS */}
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        {/* MENSAGEM FINAL / NEWSLETTER CTA */}
        <div className="mt-16 rounded-2xl border border-white/10 bg-white/5 p-8 text-center md:p-12">
          <h3 className="mb-3 font-display text-2xl text-white">
            Não encontrou sua cidade?
          </h3>
          <p className="mx-auto max-w-lg text-white/70 mb-6">
            Novas datas são lançadas mensalmente. Entre no grupo silencioso ou assine a newsletter para receber os avisos em primeira mão.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/contato" 
              className="btn bg-white text-black hover:bg-amber-200 hover:scale-105 transition-all rounded-full px-8 py-3 font-bold"
            >
              Falar com Produção
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}

/*COMPONENTES LOCAIS*/

function EventCard({ event }: { event: any }) {
  return (
    <article className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#121212] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-amber-200/50 hover:shadow-xl hover:shadow-amber-200/5">
      
      {/* Categoria (Badge) */}
      <div className="mb-4 flex items-center justify-between">
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white/60">
          {event.category}
        </span>
        <ArrowUpRight className="h-5 w-5 text-white/30 transition-colors group-hover:text-amber-200" />
      </div>

      {/* Corpo do Card */}
      <div className="mb-6">
        {/* Data com destaque Dourado */}
        <div className="mb-2 flex items-baseline gap-2">
          <span className="font-display text-3xl text-amber-200">
            {event.date}
          </span>
          <span className="text-sm font-bold text-white/40">
            {event.year}
          </span>
        </div>

        <h3 className="mb-3 font-display text-2xl leading-tight text-white group-hover:text-amber-100">
          {event.title}
        </h3>

        <div className="flex items-center gap-2 text-sm text-white/60">
          <MapPin className="h-4 w-4 text-amber-200/70" />
          <span>{event.location}</span>
        </div>
      </div>

      {/* Botão (Link Externo) */}
      <a
        href={event.link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto flex w-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 py-3 text-sm font-bold uppercase tracking-wide text-white transition-all hover:border-amber-200 hover:bg-amber-200 hover:text-black"
      >
        {event.btnLabel}
        <ArrowUpRight className="h-4 w-4" />
      </a>
    </article>
  );
}