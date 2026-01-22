import React from "react";
import { cn } from "@/lib/utils";

export function MysticCard({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn(
      "relative overflow-hidden rounded-xl border border-white/10 bg-black/40 backdrop-blur-sm p-6 transition-all duration-500 hover:border-gold/30 hover:shadow-[0_0_30px_-10px_rgba(199,169,75,0.15)]",
      className
    )}>
      {children}
    </div>
  );
}