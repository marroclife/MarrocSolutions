// app/livros/um-lugar-entre-mundos/page.tsx
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HotmartButton } from "@/components/ui/HotmartButton";
import { HOTMART_URL_STANDARD, HOTMART_URL_CONSCIOUS } from "@/lib/links";

// --- Metadata da página ---
export const metadata = {
  title: "Um Lugar entre Mundos — Samadhi: O Despertar de Sofia",
  description:
    "Ficção mística inspirada em vivências reais com espiritualidade, medicina da floresta e geometria sagrada.",
};

// --- Blocos auxiliares (fora do componente principal) --
function ImpactoSection() {
  return (
    <section className="container pb-6" aria-labelledby="impacto-title">
      <Card className="bg-white/5 border-white/10">
        <CardHeader>
          <h2 id="impacto-title" className="font-display text-3xl md:text-4xl">
            Impacto & Partilha
          </h2>
        </CardHeader>
        <CardContent className="text-paper/80 leading-relaxed">
          Parte de cada venda sustenta a aldeia indígena que inspirou esta obra.
          Nossa contribuição é trimestral e transparente — você participa da preservação
          cultural, do cuidado com a floresta.
        </CardContent>
      </Card>
    </section>
  );
}

function AutorSection() {
  return (
    <section
      className="container py-10"
      aria-labelledby="autor-title"
      itemScope
      itemType="https://schema.org/Person"
    >
      <h2 id="autor-title" className="font-display text-3xl md:text-4xl mb-6">
        Sobre o Autor
      </h2>

      <div className="grid md:grid-cols-[220px,1fr] gap-6 md:gap-10 items-start">
        <Image
          src="/txai marroc.png"
          alt="Foto do autor Marcio Rocha"
          width={220}
          height={280}
          className="rounded-2xl object-cover border border-white/10"
          itemProp="image"
        />
        <Card className="bg-white/5 border-white/10">
          <CardContent className="p-6 text-paper/80 leading-relaxed">
            <p itemProp="description">
              Meu nome é <span itemProp="name">Marcio Rocha</span>. Esta obra nasceu da minha própria
              jornada, tecida por vivências com espiritualidade, medicina da floresta, geometria
              sagrada, rituais e encontros de silêncio. Escrevi <em>Samadhi</em> como um portal de cura — um
              convite para quem sente o chamado.
            </p>
            <p className="mt-4">
              Todo o conteúdo do livro é <strong>vivido, visto ou ouvido</strong>. Os cenários, personagens,
              cerimônias e acontecimentos foram experienciados ou registrados a partir de relatos,
              como parte de um caminho real de pesquisa e presença.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function CreditosIA() {
  return (
    <section className="container pb-16" aria-labelledby="creditos-title">
      <h2 id="creditos-title" className="font-display text-2xl mb-2">
        Créditos
      </h2>
      <p className="text-sm text-paper/60 max-w-3xl leading-relaxed">
        Este projeto utilizou ferramentas de IA no processo de{" "}
        <em>contextualização, organização e edição técnica</em> do conteúdo e do site. Toda a ideia-base,
        cenários, personagens e descrições de cenas e cerimônias são de autoria de Marcio Rocha;
        a IA auxiliou apenas na articulação e na experiência de leitura.{" "}
        <strong>O livro é integralmente composto por conteúdos vividos, vistos ou ouvidos</strong> pelo autor.
      </p>
    </section>
  );
}

// --- Página principal ---
export default function LivroPage() {
  return (
    <main className="bg-ritual text-paper">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <Image
          src="/bg-forest.jpg"
          alt=""
          fill
          className="object-cover opacity-40 -z-10"
          priority
        />
        <div className="container py-16 md:py-24">
          <div className="grid md:grid-cols-[320px,1fr] gap-8 md:gap-12 items-center">
            <Image
              src="/capa-ulm.png"
              width={320}
              height={440}
              alt="Capa do livro Um Lugar Entre Mundos"
              className="rounded-2xl shadow-ritual object-cover"
              priority
            />
            <div>
              <h1 className="font-display text-4xl md:text-6xl">Um Lugar Entre Mundos</h1>
              <p className="mt-2 text-lg text-paper/80">
                Samadhi — O Despertar de Sofia
              </p>
              <ul className="mt-6 space-y-2 text-paper/80">
                <li>• Uma jornada mística entre mundos para despertar o seu poder interior.</li>
                <li>• Inspirada em vivências reais com espiritualidade e medicina da floresta.</li>
                <li>• PDF com acesso imediato, em qualquer dispositivo.</li>
                <li>• Parte do valor é destinada à aldeia indígena que inspirou a história.</li>
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild>
                  <a href={HOTMART_URL_STANDARD} target="_blank" rel="noreferrer">
                    Comprar (R$ 22,20)
                  </a>
                </Button>
                <Button asChild>
                  <a href={HOTMART_URL_CONSCIOUS} target="_blank" rel="noreferrer">
                    Valor consciente (R$ 33,30)
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE / COPY */}
      <section className="container py-14">
        <h2 className="font-display text-3xl md:text-4xl">Sobre o livro</h2>
        <div className="mt-4 text-paper/80 space-y-4 max-w-3xl">
          <p>
            Em <em>Samadhi — O Despertar de Sofia</em>, acompanhamos a jornada de Sofia por portais
            entre mundos, numa espiral de autodescoberta. A narrativa, inspirada em vivências reais,
            entrelaça espiritualidade, cura, geometria sagrada e medicina da floresta.
          </p>
          <p>
            É uma leitura ritualística: cada capítulo convida a um estado de presença e à
            lembrança da sabedoria que habita em nós.
          </p>
        </div>

        {/* Temas */}
        <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-4 gap-3">
          {["Espiritualidade", "Cura & Ritual", "Geometria Sagrada", "Medicina da Floresta"].map((t) => (
            <div
              key={t}
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center text-paper/80"
            >
              {t}
            </div>
          ))}
        </div>
      </section>

      {/* IMPACTO / PARTILHA */}
      <ImpactoSection />

      {/* AUTOR */}
      <AutorSection />

      {/* DEPOIMENTOS */}
      <section className="container py-14">
        <h2 className="font-display text-3xl md:text-4xl text-center mb-8">
          Depoimentos de leitores
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              t: "“Cada página ressoou como um espelho da minha busca espiritual.”",
              a: "Leitor Anônimo",
            },
            {
              t: "“Ficção, sabedoria indígena e geometria sagrada — leitura transformadora.”",
              a: "Carla S.",
            },
            {
              t: "“Apoiar a aldeia deu ainda mais sentido à experiência.”",
              a: "Paulo R.",
            },
          ].map((d, i) => (
            <Card key={i} className="bg-white/5 border-white/10">
              <CardContent className="pt-6">
                <p className="italic text-paper/80">{d.t}</p>
                <p className="mt-3 text-sm text-paper/70">— {d.a}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* PREÇOS */}
      <section id="precos" className="container pb-6">
        <h2 className="font-display text-3xl md:text-4xl text-center mb-8">
          Escolha seu valor
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Card className="bg-white/5 border-white/10">
            <CardContent className="pt-6 text-center">
              <h3 className="font-display text-xl">Valor Simbólico</h3>
              <div className="text-4xl font-bold text-green-400 my-3">R$ 22,20</div>
              <p className="text-sm text-paper/80 mb-4">
                Ideal para quem sente o chamado e deseja iniciar a jornada.
              </p>
              <Button asChild>
                <a href={HOTMART_URL_STANDARD} target="_blank" rel="noreferrer">
                  Comprar Agora
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10">
            <CardContent className="pt-6 text-center">
              <h3 className="font-display text-xl">Valor Consciente</h3>
              <div className="text-4xl font-bold text-green-400 my-3">R$ 33,30</div>
              <p className="text-sm text-paper/80 mb-4">
                Para ampliar o impacto social e apoiar ainda mais a aldeia.
              </p>
              <Button variant="outline" asChild>
                <a href={HOTMART_URL_CONSCIOUS} target="_blank" rel="noreferrer">
                  Comprar com Amor
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* GARANTIA */}
      <section className="container pb-10">
        <Card className="bg-white/5 border-white/10">
          <CardContent className="py-8 text-center">
            <h2 className="font-display text-2xl mb-2">Garantia incondicional de 7 dias</h2>
            <p className="text-paper/80 max-w-2xl mx-auto">
              Se por qualquer razão você sentir que este livro não ressoou com você, devolvemos o valor em até 7 dias — sem perguntas.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* FAQ */}
      <section className="container pb-10">
        <h2 className="font-display text-3xl md:text-4xl mb-4">Perguntas Frequentes</h2>
        <Accordion type="single" collapsible>
          <AccordionItem value="faq1">
            <AccordionTrigger>Para quem é este livro?</AccordionTrigger>
            <AccordionContent>
              Para quem busca autoconhecimento, conexão com a natureza e inspiração para transformar a própria vida.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq2">
            <AccordionTrigger>Como funciona a garantia?</AccordionTrigger>
            <AccordionContent>
              Em até 7 dias após a compra você pode solicitar reembolso total, sem burocracia.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq3">
            <AccordionTrigger>O que é o valor consciente?</AccordionTrigger>
            <AccordionContent>
              Uma contribuição maior para fortalecer o impacto social do projeto na aldeia.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq4">
            <AccordionTrigger>Como acesso o livro?</AccordionTrigger>
            <AccordionContent>
              Após a confirmação na Hotmart, você recebe o link de download por e-mail e mantém acesso vitalício.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* CRÉDITOS (IA) */}
      <CreditosIA />
    </main>
  );
}
