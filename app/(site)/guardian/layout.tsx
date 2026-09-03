import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guardian — Aplicação Marroc",
  robots: { index: false, follow: false, noarchive: true },
};

export default function GuardianLayout({ children }: { children: React.ReactNode }) {
  return children;
}
