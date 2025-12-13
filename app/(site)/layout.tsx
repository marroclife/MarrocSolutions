import type { Metadata } from "next";
import { Syne, JetBrains_Mono, Inter, Playfair_Display } from "next/font/google";
import Header from "@/components/site/Header";

// --- NOVAS FONTES DO BLUEPRINT V2.0 ---

// 1. Syne: Para Títulos e Headlines (Vibe Futurista/Artística)
const syne = Syne({ 
  subsets: ["latin"], 
  variable: "--font-display" 
});

// 2. JetBrains Mono: Para Dados, Tech e "Códigos" (Vibe Terminal)
const mono = JetBrains_Mono({ 
  subsets: ["latin"], 
  variable: "--font-mono" 
});

// 3. Inter: Para corpo de texto (Leitura Limpa)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

// 4. Playfair: Mantida como secundária para o contexto do Livro/Astrologia
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

// --- METADATA ---
export const metadata: Metadata = {
  metadataBase: new URL("https://marroc.xyz"),
  
  title: {
    default: "Marroc | Hertz & Bits Ecosystem",
    template: "%s | Marroc",
  },
  
  description:
    "Um ecossistema de inovação e alta performance. Da Arquitetura de Software (Solutions) à Engenharia Sonora (Higher Hz). Dominamos a frequência.",

  openGraph: {
    type: "website",
    title: "Marroc | Hertz & Bits Ecosystem",
    description:
      "Tecnologia com Alma. Consultoria B2B, AI Audio e Rituais.",
    url: "https://marroc.xyz",
    siteName: "Marroc Portal",
    locale: "pt_BR",
    images: [
      {
        url: "/banner-portal.png", 
        width: 1200,
        height: 630,
        alt: "Marroc - Hertz & Bits",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Marroc | Hertz & Bits Ecosystem",
    description: "Dominamos a frequência. Soluções Digitais e Arte Sonora.",
    images: ["/banner-portal.png"],
  },

  icons: { shortcut: "/favicon.ico" },
  themeColor: "#050505", // Atualizado para o Preto Profundo
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
                      display: ['var(--font-display)', 'sans-serif'], // Syne
                      mono: ['var(--font-mono)', 'monospace'],       // JetBrains
                      serif: ['var(--font-serif)', 'serif'],         // Playfair
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
                        900: '#0a0a0a', 
                        800: '#18181b',
                      }
                    }
                  }
                }
              }
            `,
          }}
        />
        <style>{`
          /* Correção Global para textos com gradiente */
          .bg-clip-text {
            padding-bottom: 0.1em;
            padding-right: 0.2em;
          }
          /* Ajuste de seleção para a nova identidade */
          ::selection {
            background-color: #06b6d4; /* Cyan */
            color: #000;
          }
        `}</style>
      </head>
      <body
        className={`${syne.variable} ${mono.variable} ${inter.variable} ${playfair.variable} font-body antialiased bg-[#050505] text-paper`}
      >
        {/* Header unificado */}
        <Header />

        <main className="min-h-[calc(100vh-8rem)]">
          {children}
        </main>

        <footer className="border-t border-white/10 bg-[#050505]">
          <div className="container px-4 py-10 text-sm text-paper/70 font-mono">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <p>MARROC ECOSYSTEM © {new Date().getFullYear()}</p>

              <div className="flex gap-4">
                <a
                  href="https://instagram.com/marroc.life"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  INSTAGRAM
                </a>
                <a
                  href="https://wa.me/5521992669980"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WHATSAPP
                </a>
                <a href="/newsletter" className="hover:text-white transition-colors">DATA_LOG</a>
              </div>

              <p className="max-w-xl text-xs text-paper/50">
                SYSTEM STATUS: <span className="text-green-500">OPERATIONAL</span>
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}