"use client";

export default function BackgroundFX() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* camada 1: gradiente animado */}
      <div className="absolute inset-0 bg-ink/90 [mask-image:radial-gradient(70%_60%_at_50%_30%,#000_40%,transparent_75%)]">
        <div className="aurora h-full w-full" />
      </div>

      {/* camada 2: grão sutil */}
      <div className="absolute inset-0 noise opacity-[.07] mix-blend-soft-light" />

      {/* vinheta suave */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_30%,transparent_45%,rgba(0,0,0,.6))]" />
    </div>
  );
}
