import React from "react";
import { Section } from "@/components/ui/Section";
import { Mail, MessageSquare, ArrowRight, Instagram } from "lucide-react";

export default function ContatoPage() {
  return (
    <main className="bg-[#0b0b0b] text-paper min-h-screen">
      <Section
        title="Canal Aberto"
        subtitle="Três portas. Escolha a frequência da sua mensagem."
        headingLevel="h1"
        className="pt-16 pb-12 md:pt-24 md:pb-20"
      >
        {/* Box de Texto — copy introdutória centralizada */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-lg md:text-xl text-white/80 leading-relaxed">
            O ecossistema Marroc opera em múltiplas frequências — tecnologia,
            cura, música. Escolha o canal que combina com a sua intenção.
          </p>
        </div>

        {/* 3 CANAIS — destaque central, grid 1col mobile / 3col desktop */}
        <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-3">
          {/* WhatsApp — DESTAQUE (verde neon) */}
          <a
            href="https://wa.me/5521990387232"
            target="_blank"
            rel="noreferrer"
            className="group relative flex flex-col items-center text-center p-8 md:p-10 rounded-3xl bg-[#121212] border-2 border-green-500/30 hover:border-green-500 transition-all duration-300 hover:shadow-[0_0_40px_rgba(34,197,94,0.25)] hover:-translate-y-1"
          >
            {/* Badge "Recomendado" */}
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-green-500 text-black text-[10px] font-bold uppercase tracking-widest rounded-full">
              Resposta mais rápida
            </span>

            <div className="bg-green-500/15 p-5 rounded-full text-green-500 group-hover:scale-110 transition-transform mb-5">
              <MessageSquare size={32} />
            </div>

            <h3 className="font-display text-2xl text-white mb-2">WhatsApp</h3>
            <p className="text-sm text-white/60 mb-4">
              Para conversas diretas, briefings rápidos e agendamentos.
            </p>
            <p className="text-green-500 font-bold text-lg">+55 21 99038-7232</p>

            <div className="mt-6 flex items-center gap-2 text-green-500 text-sm font-bold uppercase tracking-widest group-hover:translate-x-1 transition-transform">
              Abrir conversa <ArrowRight size={16} />
            </div>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/marroc.xyz"
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col items-center text-center p-8 md:p-10 rounded-3xl bg-[#121212] border border-white/10 hover:border-amber-200/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(251,191,36,0.15)] hover:-translate-y-1"
          >
            <div className="bg-white/5 p-5 rounded-full text-white/70 group-hover:text-amber-200 group-hover:bg-amber-200/15 transition-all mb-5 group-hover:scale-110">
              <Instagram size={32} />
            </div>

            <h3 className="font-display text-2xl text-white mb-2">Instagram</h3>
            <p className="text-sm text-white/60 mb-4">
              Para acompanhar o dia a dia, bastidores e lançamentos.
            </p>
            <p className="text-amber-200 font-bold text-lg">@marroc.xyz</p>

            <div className="mt-6 flex items-center gap-2 text-amber-200 text-sm font-bold uppercase tracking-widest group-hover:translate-x-1 transition-transform">
              Seguir <ArrowRight size={16} />
            </div>
          </a>

          {/* Email */}
          <a
            href="mailto:contato@marroc.xyz"
            className="group flex flex-col items-center text-center p-8 md:p-10 rounded-3xl bg-[#121212] border border-white/10 hover:border-cyan-300/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] hover:-translate-y-1"
          >
            <div className="bg-white/5 p-5 rounded-full text-white/70 group-hover:text-cyan-300 group-hover:bg-cyan-300/15 transition-all mb-5 group-hover:scale-110">
              <Mail size={32} />
            </div>

            <h3 className="font-display text-2xl text-white mb-2">Email</h3>
            <p className="text-sm text-white/60 mb-4">
              Para propostas formais, parcerias e materiais detalhados.
            </p>
            <p className="text-cyan-300 font-bold text-base md:text-lg break-all">
              contato@marroc.xyz
            </p>

            <div className="mt-6 flex items-center gap-2 text-cyan-300 text-sm font-bold uppercase tracking-widest group-hover:translate-x-1 transition-transform">
              Escrever <ArrowRight size={16} />
            </div>
          </a>
        </div>

        {/* Rodapé sutil — alinhado com a tese âncora da /sobre */}
        <div className="max-w-2xl mx-auto text-center mt-16 pt-12 border-t border-white/5">
          <p className="text-white/40 text-sm italic">
            &ldquo;Eu não entrego serviços. Eu ativo frequência. A sua, a do seu negócio, a do coletivo.&rdquo;
          </p>
        </div>
      </Section>
    </main>
  );
}
