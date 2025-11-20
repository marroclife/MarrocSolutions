import React from "react";
import { cn } from "@/lib/utils";

interface GlowButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "gold" | "cyan";
}

export function GlowButton({ children, className, variant = "gold", ...props }: GlowButtonProps) {
  const colorClass = variant === "gold" 
    ? "bg-gold text-black hover:bg-white hover:shadow-[0_0_20px_rgba(199,169,75,0.6)]" 
    : "border border-tech-cyan text-tech-cyan hover:bg-tech-cyan hover:text-black hover:shadow-[0_0_20px_rgba(0,240,255,0.6)]";

  return (
    <a 
      className={cn(
        "relative inline-flex items-center justify-center px-8 py-4 text-sm font-bold uppercase tracking-widest transition-all duration-300 rounded-sm",
        colorClass,
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}