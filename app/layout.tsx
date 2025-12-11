import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Ou a fonte que você usa

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Marroc.xyz | Tecnoxamanismo",
  description: "Ecossistema de Arte, Código e Ritual.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}