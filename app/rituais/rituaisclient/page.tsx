// app/rituais/rituaisclient/page.tsx
import Link from "next/link";

export default function RituaisClientPage() {
  return (
    <main className="bg-[#0b0b0b] text-white min-h-screen">
      <div className="container mx-auto max-w-4xl px-4 py-16">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Área do Cliente</h1>
          <p className="text-white/70">
            Conteúdo exclusivo para clientes - seus materiais de sessão e recursos.
          </p>
        </div>

        {/* Seção do Mapa Natal */}
        <div className="bg-white/5 border border-white/10 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">📊 Mapa Natal - Anto</h2>
          <p className="text-white/70 mb-4">
            Clique no botão abaixo para acessar e visualizar seu mapa astral completo.
          </p>
          
          <div className="flex flex-wrap gap-3">
            <a 
              href="/rituais/mapa_anto.html" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary rounded-full px-5 py-2"
            >
              🔮 Abrir Mapa Natal
            </a>
            
            <Link 
              href="/rituais" 
              className="btn btn-outline rounded-full px-5 py-2"
            >
              ← Voltar para Rituais
            </Link>
          </div>
        </div>

        {/* Outras seções podem ser adicionadas aqui futuramente */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Seção de Tarot e Runas */}
          <div className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-3">🃏 Tarot & Runas</h3>
            <p className="text-white/70 mb-4">
              Resumos e gravações das suas sessões de Tarot e Runas.
            </p>
            <button className="btn btn-outline rounded-full px-4 py-2 opacity-50 cursor-not-allowed">
              Em breve
            </button>
          </div>

          {/* Seção de Gravações */}
          <div className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-3">🎙️ Gravações</h3>
            <p className="text-white/70 mb-4">
              Acesse as gravações das suas sessões anteriores.
            </p>
            <button className="btn btn-outline rounded-full px-4 py-2 opacity-50 cursor-not-allowed">
              Em breve
            </button>
          </div>
        </div>

        {/* Nota informativa */}
        <div className="mt-8 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
          <p className="text-sm text-blue-300">
            💡 <strong>Dica:</strong> O mapa natal abrirá em uma nova aba. 
            Você pode salvar o arquivo ou imprimir para consulta futura.
          </p>
        </div>
      </div>
    </main>
  );
}