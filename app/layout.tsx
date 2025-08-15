// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

import { EB_Garamond, Inter } from "next/font/google";
import { SITE_TITLE, SITE_DESC, OG_DEFAULT } from "@/lib/site";
// import BackgroundFX from "@/components/BackgroundFX"; // ← descomente se for usar o fundo vivo
import Header from "@/components/site/Header";

const display = EB_Garamond({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});
const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: {
    default: SITE_TITLE ?? "Marroc — Hub Vivo",
    template: "%s — Marroc",
  },
  description:
    SITE_DESC ?? "Livros, imersões, música e rituais. Arte e espiritualidade integradas.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    type: "website",
    title: SITE_TITLE ?? "Marroc — Hub Vivo",
    description:
      SITE_DESC ?? "Livros, imersões, música e rituais. Arte e espiritualidade integradas.",
    url: "https://example.com",
    images: OG_DEFAULT
      ? [{ url: OG_DEFAULT, width: 1200, height: 630, alt: "Marroc — Live Psytrance Ritualístico" }]
      : undefined,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE ?? "Marroc — Hub Vivo",
    description:
      SITE_DESC ?? "Livros, imersões, música e rituais. Arte e espiritualidade integradas.",
    images: OG_DEFAULT ? [OG_DEFAULT] : undefined,
  },
  icons: { shortcut: "/favicon.ico" },
  themeColor: "#0b0b0b",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${display.variable} ${body.variable} font-body antialiased bg-[#0b0b0b] text-paper`}
      >
        {/* <BackgroundFX /> */}

        {/* Header unificado (mobile-first + hambúrguer) */}
        <Header />

        <main className="min-h-[calc(100vh-8rem)]">{children}</main>

        <footer className="border-t border-white/10">
          <div className="container px-4 py-10 text-sm text-paper/70">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <p>© {new Date().getFullYear()} Marroc / Higher Hz — todos os direitos reservados.</p>

              <div className="flex gap-4">
                <a
                  href="https://instagram.com/marroc.life"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
                <a
                  href="https://wa.me/5521992669980"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
                <a href="/newsletter">Newsletter</a>
              </div>

              <p className="max-w-xl text-xs text-paper/50">
                Nota de transparência: ferramentas de IA foram utilizadas para
                contextualização/edição. Ideias, personagens, cenas e cerimônias
                são do autor; o livro resulta de conteúdo vivido, visto ou ouvido.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
