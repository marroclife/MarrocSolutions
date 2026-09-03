"use client";

import { useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Lock, Sparkles } from "lucide-react";

export default function TerapiasLoginPage() {
  return (
    <Suspense fallback={<LoginSkeleton />}>
      <LoginForm />
    </Suspense>
  );
}

function LoginSkeleton() {
  return (
    <main className="bg-[#0b0b0b] text-white min-h-screen font-sans flex items-center justify-center px-4">
      <div className="w-full max-w-md animate-pulse">
        <div className="h-16 w-16 rounded-full bg-white/10 mx-auto mb-6" />
        <div className="h-8 bg-white/10 rounded mb-3" />
        <div className="h-4 bg-white/10 rounded mb-8" />
        <div className="h-48 bg-white/5 rounded-2xl" />
      </div>
    </main>
  );
}

function LoginForm() {
  const [key, setKey] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();
  const from = searchParams.get("from") || "/terapias/terapiasclient";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/terapias/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ key }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Chave inválida");
        setLoading(false);
        return;
      }

      // Redireciona para a página permitida ou para o from seguro
      const target = from.startsWith("/terapias/terapiasclient/")
        ? from
        : `/terapias/terapiasclient/${data.slug}`;

      // Full reload para garantir que o cookie seja enviado no próximo request
      window.location.href = target;
    } catch {
      setError("Erro ao conectar. Tente novamente.");
      setLoading(false);
    }
  }

  return (
    <main className="bg-[#0b0b0b] text-white min-h-screen font-sans flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 border border-gold/30 mb-6">
            <Lock className="w-7 h-7 text-gold" />
          </div>
          <h1 className="font-display text-3xl md:text-4xl mb-3 text-white">Portal do Cliente</h1>
          <p className="text-white/50 text-sm leading-relaxed">
            Digite sua chave de acesso para visualizar seu material exclusivo.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="border border-white/10 bg-white/[0.03] rounded-2xl p-8 space-y-6"
        >
          <div className="space-y-2">
            <label htmlFor="key" className="text-xs uppercase tracking-[0.2em] text-white/40 font-bold">
              Chave de Acesso
            </label>
            <input
              id="key"
              type="text"
              value={key}
              onChange={(e) => setKey(e.target.value)}
              placeholder="Digite sua chave"
              className="w-full bg-black/40 border border-white/15 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all"
              autoComplete="off"
              disabled={loading}
            />
          </div>

          {error && (
            <div className="text-red-300 text-sm bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading || !key.trim()}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-gold text-black font-bold uppercase tracking-widest text-xs rounded-lg hover:bg-white hover:shadow-[0_0_30px_rgba(199,169,75,0.3)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Verificando..." : (
              <>
                <Sparkles size={14} />
                Acessar Portal
              </>
            )}
          </button>
        </form>

        <div className="mt-8 text-center">
          <a
            href="/terapias"
            className="text-white/30 hover:text-gold text-xs uppercase tracking-widest transition-colors"
          >
            ← Voltar para Terapias
          </a>
        </div>
      </div>
    </main>
  );
}
