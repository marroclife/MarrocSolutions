import type { Metadata } from "next";
import { Syne, JetBrains_Mono, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { FloatingWhatsapp } from "@/components/ui/FloatingWhatsapp";

const syne = Syne({ subsets: ["latin"], variable: "--font-display" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });
const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });

export const metadata: Metadata = {
  title: "Marroc Solutions | Arquitetura Digital B2B",
  description: "Consultoria de Tecnologia, Automação com IA e Desenvolvimento Web High-Ticket.",
  icons: { shortcut: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
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
                      display: ['var(--font-display)', 'sans-serif'],
                      mono: ['var(--font-mono)', 'monospace'],
                      serif: ['var(--font-serif)', 'serif'],
                    },
                    colors: {
                      paper: '#e4e4e7',
                      gold: { 400: '#fbbf24', 500: '#f59e0b', 600: '#d97706', 900: '#78350f' },
                      mystic: { 900: '#0a0a0a', 800: '#18181b' },
                      'neon-green': '#00FF94'
                    }
                  }
                }
              }
            `,
          }}
        />
        <style>{`
          .bg-clip-text { padding-bottom: 0.1em; padding-right: 0.2em; }
          ::selection { background-color: #00FF94; color: #000; }
        `}</style>
      </head>
      
      <body className={`${syne.variable} ${mono.variable} ${inter.variable} ${playfair.variable} font-body antialiased bg-[#050505] text-paper`}>
        
        <main className="min-h-screen">
          {children}
        </main>

        <FloatingWhatsapp />
        
      </body>
    </html>
  );
}
