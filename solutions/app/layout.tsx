import type { Metadata } from "next";
import { Syne, JetBrains_Mono, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { FloatingWhatsapp } from "@/components/ui/FloatingWhatsapp";

const syne = Syne({ subsets: ["latin"], variable: "--font-display" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });
const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });

export const metadata: Metadata = {
  metadataBase: new URL("https://solutions.marroc.xyz"),
  title: "Marroc Solutions | Arquitetura Digital B2B",
  description: "Consultoria de Tecnologia, Automação com IA e Desenvolvimento Web High-Ticket.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
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
