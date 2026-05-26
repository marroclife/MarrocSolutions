// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marroc Solutions | Arquitetura de Sistemas Vivos & Saliência de Entidade",
  description: "Especialistas em sites de alta performance, agentes autônomos e SEO avançado. Transformando a presença digital em autoridade inquestionável.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Removi as fontes daqui para deixar o layout (site) e (b2b) controlarem suas identidades
    <html lang="pt-br" suppressHydrationWarning className="scroll-smooth">
      <body className="antialiased bg-industrial-black text-paper">
        {children}
      </body>
    </html>
  );
}