import type { Metadata } from "next";
import "./globals.css";
import { Playfair_Display, Inter } from "next/font/google";
import Header from "@/components/site/Header";

// Atualizado para Playfair Display para alinhar com a estética "Misticismo Digital" dos novos artigos
const display = Playfair_Display({
  weight: ["400", "600", "700", "800"], // Pesos adicionados para hierarquia visual
  subsets: ["latin"],
  variable: "--font-display",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

// --- METADATA DO PORTAL (Atualizada para "Portal Marroc") ---
export const metadata: Metadata = {
  metadataBase: new URL("https://marroc.xyz"),
  
  title: {
    default: "Marroc | Arte, Tecnologia & Misticismo",
    template: "%s | Marroc",
  },
  
  description:
    "Um portal de experiências imersivas. Do Psytrance ritualístico (Marroc) à literatura iniciática (Um Lugar Entre Mundos), do código ao sagrado. Explore a interseção entre o futuro digital e a sabedoria ancestral.",

  openGraph: {
    type: "website",
    title: "Marroc | Onde o Código Encontra o Sagrado",
    description:
      "Música, Livros e Tecnologia. Um ecossistema criativo para expandir a percepção.",
    url: "https://marroc.xyz",
    siteName: "Marroc Portal",
    locale: "pt_BR",
    images: [
      {
        url: "/banner-portal.png", // Certifique-se de ter essa imagem em public/
        width: 1200,
        height: 630,
        alt: "Portal Marroc - Arte e Tecnologia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Marroc | Arte, Tecnologia & Misticismo",
    description:
      "Do Psytrance ritualístico à literatura iniciática. Explore o portal.",
    images: ["/banner-portal.png"],
  },

  icons: { shortcut: "/favicon.ico" },
  themeColor: "#0b0b0b",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className="scroll-smooth">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              tailwind.config = {
                theme: {
                  extend: {
                    fontFamily: {
                      sans: ['var(--font-body)', 'sans-serif'],
                      serif: ['var(--font-display)', 'serif'],
                    },
                    colors: {
                      paper: '#e4e4e7',
                      gold: {
                        400: '#fbbf24',
                        500: '#f59e0b',
                        600: '#d97706',
                        900: '#78350f',
                      },
                      mystic: {
                        900: '#0a0a0a', // Deep black/zinc
                        800: '#18181b', // Card bg
                      }
                    }
                  }
                }
              }
            `,
          }}
        />
      </head>
      <body
        className={`${display.variable} ${body.variable} font-body antialiased bg-[#0b0b0b] text-paper`}
      >
        {/* Header unificado */}
        <Header />

        <main className="min-h-[calc(100vh-8rem)]">
          {children}
        </main>

        <footer className="border-t border-white/10 bg-[#050505]">
          <div className="container px-4 py-10 text-sm text-paper/70">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <p>© {new Date().getFullYear()} Marroc / Higher Hz — todos os direitos reservados.</p>

              <div className="flex gap-4">
                <a
                  href="https://instagram.com/marroc.life"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="https://wa.me/5521992669980"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp
                </a>
                <a href="/newsletter" className="hover:text-white transition-colors">Newsletter</a>
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