import { SITE_TITLE, SITE_DESC, OG_DEFAULT } from "@/lib/site";
import type { Metadata } from "next";
import "./globals.css";
import { EB_Garamond, Inter } from "next/font/google";
import Link from "next/link"; // <-- este é o que está faltando

const display = EB_Garamond({ weight: "400", subsets: ["latin"], variable: "--font-display" });
const body = Inter({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "Marroc — Hub Vivo",
  description: "Livros, imersões, música e rituais. Arte e espiritualidade integradas.",
  metadataBase: new URL("https://example.com")
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${display.variable} ${body.variable} font-body antialiased`}>
        <header className="border-b border-white/10">
          <div className="container flex h-16 items-center justify-between">
            <Link href="/" className="font-display text-xl">Marroc</Link>
            <nav className="flex gap-5 text-sm">
              <Link href="/livros/um-lugar-entre-mundos">Livros</Link>
              <Link href="/projetos">Projetos</Link>
              <Link href="/agenda">Agenda</Link>
              <Link href="/conteudos">Conteúdos</Link>
              <Link href="/sobre">Sobre</Link>
              <Link href="/contato">Contato</Link>
              <Link href="/loja" className="btn btn-primary">Apoiar</Link>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="border-t border-white/10">
          <div className="container py-10 text-sm text-paper/70">
            <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
              <p>© {new Date().getFullYear()} Marroc / Higher Hz — todos os direitos reservados.</p>
              <div className="flex gap-4">
                <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
                <a href="https://wa.me/5521XXXXXXXXX" target="_blank" rel="noreferrer">WhatsApp</a>
                <a href="/newsletter">Newsletter</a>
              </div>
              <p className="text-xs text-paper/50">
  Nota de transparência: ferramentas de IA foram utilizadas para contextualização/edição.
  Ideias, personagens, cenas e cerimônias são do autor; o livro resulta de conteúdo vivido,
  visto ou ouvido.
</p>

            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
