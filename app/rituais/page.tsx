// app/rituais/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rituais de Reconexão",
  description:
    "Terapias holísticas para relembrar quem você é: Astrologia Viva, Tarot + Runas, Reiki e Terapias Energéticas, Sistema Arcturiano.",
};

const WHATS =
  "https://wa.me/5521992669980?text=Olá,%20quero%20agendar%20uma%20sessão%20de%20Rituais%20de%20Reconexão.";
const CALENDLY =
  "https://calendly.com/SEU_USUARIO/rituais"; // troque quando tiver o link

type Ritual = {
  icon: string;
  title: string;
  desc: string;
  bullets?: string[];
};

const RITUAIS: Ritual[] = [
  {
    icon: "🔭",
    title: "Astrologia Viva",
    desc:
      "Mais do que mapas, espelhos cósmicos. A leitura astral torna-se uma ativação: revela potenciais, padrões e portais.",
    bullets: [
      "Consulta individual com abordagem profunda e intuitiva",
      "Direcionamentos para fases da vida e propósitos",
      "Rituais de alinhamento para integração",
    ],
  },
  {
    icon: "🃏",
    title: "Tarot + Runas Nórdicas",
    desc:
      "O Tarot como tecnologia ancestral: traduz o invisível em orientação prática. Espelhos ativos para decisões com clareza e coragem.",
    bullets: [
      "Leitura oracular com foco em escolhas presentes",
      "Mapeamento de padrões e possibilidades",
      "Ato ritual para selar o movimento",
    ],
  },
  {
    icon: "🌿",
    title: "Reiki e Terapias Energéticas",
    desc:
      "O corpo fala, mas o campo grita em silêncio. Reiki Usui e canalizações energéticas para desbloqueio e harmonização.",
    bullets: [
      "Equilíbrio de chakras e limpeza do campo",
      "Envio de energia à distância quando necessário",
      "Reconexão do fluxo vital",
    ],
  },
  {
    icon: "🛸",
    title: "Sistema Arcturiano de Cura Multidimensional",
    desc:
      "Para quem sente o chamado das estrelas. Terapia vibracional canalizada com os Arcturianos para expansão de consciência.",
    bullets: [
      "Limpeza de registros kármicos e reprogramação do campo",
      "Trabalho sutil, profundo e transformador",
      "Integração com práticas de ancoragem",
    ],
  },
];

export default function RituaisPage() {
  return (
    <main className="bg-[#0b0b0b] text-paper">
      {/* HERO */}
      <section className="relative border-b border-white/10">
        <div className="container mx-auto max-w-6xl px-4 py-16 md:py-20">
          <h1 className="font-display text-4xl leading-tight md:text-6xl">
            Rituais de Reconexão — terapias holísticas para relembrar quem você é.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/70">
            Neste espaço, a jornada é para dentro. O mistério encontra o método. A ciência sutil encontra o espírito.
            Cada sessão é um chamado à tua essência.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={WHATS}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary rounded-full px-5 py-2"
            >
              Agendar pelo WhatsApp
            </a>
            <a
              href={CALENDLY}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline rounded-full px-5 py-2"
            >
              Ver disponibilidade (Calendly)
            </a>
          </div>
        </div>
      </section>

      {/* GRID DE RITUAIS */}
      <section className="container mx-auto max-w-6xl px-4 py-16">
        <div className="mb-8">
          <h2 className="font-display text-3xl md:text-4xl">As terapias</h2>
          <p className="mt-2 text-white/60">
            Escolha o caminho que te chama. Todas as sessões podem ser online ou presenciais (sob consulta).
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {RITUAIS.map((r, i) => (
            <article
              key={r.title}
              className="card group translate-y-2 animate-fadeUp border-white/10 bg-white/5 p-5 transition-all duration-500 hover:border-white/20"
              style={{ animationDelay: `${80 * i}ms` }}
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 text-xl">{r.icon}</div>
                <h3 className="font-display text-2xl">{r.title}</h3>
              </div>
              <p className="text-white/80">{r.desc}</p>

              {r.bullets?.length ? (
                <ul className="mt-4 list-disc space-y-1 pl-5 text-white/70">
                  {r.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              ) : null}

              <div className="mt-6 flex gap-3">
                <a href={WHATS} target="_blank" rel="noreferrer" className="btn btn-outline rounded-full px-4 py-1.5">
                  Falar agora
                </a>
                <a href={CALENDLY} target="_blank" rel="noreferrer" className="btn btn-primary rounded-full px-4 py-1.5">
                  Agendar sessão
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SOBRE O FACILITADOR */}
      <section className="container mx-auto max-w-6xl px-4 pb-16">
        <div className="card border-white/10 bg-white/5 p-6 md:p-8">
          <h2 className="font-display text-3xl md:text-4xl">🧙‍♂️ Sobre o facilitador</h2>
          <div className="mt-4 space-y-4 text-white/75">
            <p>Me chamo <strong>Marroc</strong>.</p>
            <p>
              Sou massoterapeuta desde 2021, iniciado no Reiki Usui, e caminho entre o som e o silêncio.
            </p>
            <p>
              Integro terapias como Reiki ritualizado, Tarot com Runas Nórdicas, Astrologia intuitiva, Cura Multidimensional Arcturiana, e Sound Healing com frequências específicas.
            </p>
            <p>
              Cada sessão é um campo preparado — onde símbolos, energias e música se alinham para te reconectar com tua própria força.
            </p>
            <p>
              Não entrego respostas prontas. Eu abro caminhos para que você lembre quem é.
            </p>
          </div>
          <div className="mt-6">
            <Link
              href="/sobre"
              className="btn btn-outline rounded-full px-5 py-2"
            >
              Ler mais sobre o facilitador
            </Link>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="container mx-auto max-w-6xl px-4 pb-16">
        <div className="card border-white/10 bg-white/5 p-6 md:p-8">
          <h2 className="font-display text-3xl md:text-4xl">Como funciona</h2>
          <div className="mt-3 grid gap-6 md:grid-cols-3">
            <p className="text-white/75">
              <span className="font-semibold">Online ou presencial</span> (sob consulta). Indicado conforme a necessidade
              do momento e logística.
            </p>
            <p className="text-white/75">
              <span className="font-semibold">Preparação ritual</span>: altar, intenção, silêncio e escuta. Você não entra
              em uma consulta — você entra em um portal.
            </p>
            <p className="text-white/75">
              <span className="font-semibold">Pós-sessão</span>: orientações e práticas de integração podem ser sugeridas
              conforme o caso.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href={WHATS} target="_blank" rel="noreferrer" className="btn btn-primary rounded-full px-5 py-2">
              Quero conversar
            </a>
            <a href={CALENDLY} target="_blank" rel="noreferrer" className="btn btn-outline rounded-full px-5 py-2">
              Ver agenda
            </a>
            <Link href="/sobre" className="btn btn-ghost rounded-full px-5 py-2">
              Sobre o facilitador
            </Link>
          </div>
        </div>
      </section> 
      
      {/* Área de Clientes CORRIGIDA */}
      <section className="container mx-auto max-w-6xl px-4 pb-16">
        <div className="card border-white/10 bg-white/5 p-6 md:p-8">
          <h2 className="font-display text-3xl md:text-4xl">Área de Clientes</h2>
          <div className="mt-3">
            <p className="text-white/75">
              <span className="font-semibold">Acesse aqui para abrir seu mapa natal,</span> resumos de Tarot e Runas, gravações de sessões e mais.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/rituais/rituaisclient" className="btn btn-primary rounded-full px-5 py-2">
              ACESSAR
            </Link>
            <Link href="/sobre" className="btn btn-ghost rounded-full px-5 py-2">
              Sobre o facilitador
            </Link>
          </div>
        </div>
      </section>

      {/* NOTA DE TRANSPARÊNCIA */}
      <section className="container mx-auto max-w-6xl px-4 pb-16">
        <p className="text-xs text-white/45">
          Nota: ferramentas de IA podem ser usadas como apoio à comunicação e organização. A condução terapêutica é humana,
          presencial e intuitiva — enraizada em práticas ancestrais e formação contínua.
        </p>
      </section>
    </main>
  );
}