import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Estudos internos",
  robots: { index: false, follow: false, noarchive: true },
};

export default function EstudosLayout({ children }: { children: React.ReactNode }) {
  return children;
}
