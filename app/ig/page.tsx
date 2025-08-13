import type { Metadata as MetaIG } from "next";
import { SITE_TITLE, SITE_DESCRIPTION, OG } from "@/lib/constants";
import { LINKS, withUTM } from "@/lib/links";
import { Button } from "@/components/ui/Button";

export const metadata: MetaIG = {
  title: `${SITE_TITLE} — Rotas do Instagram`,
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: OG.url + "/ig",
    siteName: OG.siteName,
    images: [
      { url: OG.image, width: 1200, height: 630, alt: "Marroc — IG" },
    ],
    locale: OG.locale,
    type: "website",
  },
};

export default function IGPage() {
  const utm = { source: "instagram", medium: "bio", campaign: "site_routing" } as const;
  return (
    <main className="min-h-[70vh] flex items-center">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <h1 className="text-3xl sm:text-4xl font-serif text-off">
          Chegou do Instagram? Escolha seu caminho.
        </h1>
        <p className="text-off/80">
          Três portais rápidos para mergulhar no universo do Marroc.
        </p>
        <div className="grid gap-4">
          <Button asChild href={withUTM(LINKS.streamingLastRelease, utm)}>
            🎧 Ouvir último lançamento
          </Button>
          <Button
            asChild
            href={withUTM(LINKS.book, { ...utm, content: "book" })}
            className="bg-off text-ink"
          >
            📖 Conhecer o livro "Um Lugar Entre Mundos"
          </Button>
          <Button
            asChild
            href={withUTM(LINKS.newsletter, { ...utm, content: "newsletter" })}
            className="bg-ink text-off ring-off/40"
          >
            ✉️ Entrar na lista de rituais (newsletter)
          </Button>
        </div>
        <p className="text-xs text-off/60">
          *UTM tracking ativo para entender a jornada de quem vem do Instagram.
        </p>
      </div>
    </main>
  );
}
