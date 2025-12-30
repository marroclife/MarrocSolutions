// app/(site)/layout.tsx
import type { Metadata } from "next";
import { Syne, JetBrains_Mono, Inter, Playfair_Display } from "next/font/google";
import Header from "@/components/site/Header";

// --- NOVAS FONTES DO BLUEPRINT V2.0 (MANTIDAS) ---
const syne = Syne({ subsets: ["latin"], variable: "--font-display" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });
const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });

// --- METADATA (MANTIDA) ---
export const metadata: Metadata = {
  metadataBase: new URL("https://marroc.xyz"),
  title: {
    default: "Marroc | Hertz & Bits Ecosystem",
    template: "%s | Marroc",
  },
  description: "Um ecossistema de inovação e alta performance. Tecnologia com Alma.",
  openGraph: {
    type: "website",
    title: "Marroc | Hertz & Bits Ecosystem",
    description: "Tecnologia com Alma. Consultoria B2B, AI Audio e Rituais.",
    url: "https://marroc.xyz",
    siteName: "Marroc Portal",
    locale: "pt_BR",
    images: [{ url: "/banner-portal.png", width: 1200, height: 630, alt: "Marroc - Hertz & Bits" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marroc | Hertz & Bits Ecosystem",
    description: "Dominamos a frequência. Soluções Digitais e Arte Sonora.",
    images: ["/banner-portal.png"],
  },
  icons: { shortcut: "/favicon.ico" },
};

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    // REMOVEMOS <html> e <body> daqui, pois já estão no app/layout.tsx
    // Usamos uma <divWrapper> que carrega todas as suas fontes e estilos
    <div className={`${syne.variable} ${mono.variable} ${inter.variable} ${playfair.variable} font-body antialiased`}>
      
      {/* Injetamos seus scripts e estilos customizados diretamente */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .bg-clip-text { padding-bottom: 0.1em; padding-right: 0.2em; }
          ::selection { background-color: #06b6d4; color: #000; }
        `
      }} />

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
              <a href="https://instagram.com/marroc.life" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">INSTAGRAM</a>
              <a href="https://wa.me/5521992669980" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">WHATSAPP</a>
              <a href="/newsletter" className="hover:text-white transition-colors">DATA_LOG</a>
            </div>

            <p className="max-w-xl text-xs text-paper/50">
              SYSTEM STATUS: <span className="text-green-500">OPERATIONAL</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}