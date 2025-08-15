"use client";
import { useEffect, useRef } from "react";

export default function BackgroundFX() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    // inicia no centro
    const setXY = (x: number, y: number) => {
      el.style.setProperty("--x", `${x}px`);
      el.style.setProperty("--y", `${y}px`);
    };

    const onMove = (e: MouseEvent) => {
      setXY(e.clientX, e.clientY);
    };

    const onTouch = (e: TouchEvent) => {
      const t = e.touches[0];
      if (t) setXY(t.clientX, t.clientY);
    };

    // centra ao montar
    const { innerWidth, innerHeight } = window;
    setXY(innerWidth / 2, innerHeight / 2);

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("touchmove", onTouch, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onTouch);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      aria-hidden
      className="
        pointer-events-none fixed inset-0 -z-10 overflow-hidden
        [--x:50vw] [--y:50vh]
      "
    >
      {/* camada 1: base do site (sólida) */}
      <div className="absolute inset-0 bg-[#0b0b0b]" />

      {/* camada 2: spotlight que segue o cursor */}
      <div
        className="
          absolute inset-0
          will-change-transform will-change-opacity
          transition-opacity duration-300
        "
        style={{
          // cores: forest/dourado bem sutis
          background:
            "radial-gradient(600px at var(--x) var(--y), rgba(199,169,75,0.12), transparent 70%)",
        }}
      />

      {/* camada 3: blobs em parallax MUITO sutis */}
      <div className="absolute -inset-1 opacity-50">
        <div
          className="
            absolute top-[-20%] left-[-10%] h-[60vmax] w-[60vmax]
            rounded-full blur-[80px]
            bg-[radial-gradient(circle_at_30%_30%,rgba(14,59,46,0.35),transparent_60%)]
            animate-slowFloat
          "
        />
        <div
          className="
            absolute bottom-[-25%] right-[-15%] h-[70vmax] w-[70vmax]
            rounded-full blur-[90px]
            bg-[radial-gradient(circle_at_70%_70%,rgba(199,169,75,0.18),transparent_65%)]
            animate-slowerFloat
          "
        />
      </div>

      {/* camada 4: grão sutil (grain/noise) */}
      <div className="absolute inset-0 opacity-[0.07] mix-blend-overlay bg-[url('/noise.png')]" />

      {/* respeita usuários com redução de movimento */}
      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          .animate-slowFloat,
          .animate-slowerFloat {
            animation: none !important;
          }
        }
      `}</style>
      
    </div>
  );
}
