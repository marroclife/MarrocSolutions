export default function AgropecMockup() {
  return (
    <div className="bg-neutral-900 min-h-screen text-gray-100 font-sans selection:bg-emerald-500 selection:text-white">
      {/* Header / Nav */}
      <nav className="fixed w-full z-50 bg-neutral-900/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tighter text-emerald-500">
            AGROPEC
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
            <a href="#produtos" className="hover:text-emerald-400 transition-colors">Produtos</a>
            <a href="#servicos" className="hover:text-emerald-400 transition-colors">Serviços</a>
            <a href="#sobre" className="hover:text-emerald-400 transition-colors">Sobre</a>
            <a href="#contato" className="hover:text-emerald-400 transition-colors">Contato</a>
          </div>
          <button className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-2 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg shadow-emerald-900/50">
            Fale no WhatsApp
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/50 to-transparent z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=2070&auto=format&fit=crop" 
            alt="Agropec Background" 
            className="w-full h-full object-cover opacity-60"
          />
        </div>

        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto mt-16">
          <span className="inline-block py-1 px-3 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-bold tracking-widest mb-6 uppercase">
            Serra do Piloto • Desde 2020
          </span>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tighter leading-tight text-white">
            A Força do <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-600">Nosso Campo</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-10">
            Tudo o que você precisa para sua produção rural, jardim e cuidados animais. 
            Qualidade e confiança no coração da Serra.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-emerald-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-400 transition-all flex items-center justify-center gap-2">
              <span>📦</span> Ver Catálogo
            </button>
            <button className="bg-white/10 backdrop-blur-sm border border-white/10 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all">
              📍 Como Chegar
            </button>
          </div>
        </div>
      </header>

      {/* Features Grid */}
      <section id="produtos" className="py-24 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-neutral-800/50 p-8 rounded-3xl border border-white/5 hover:border-emerald-500/30 transition-all group">
              <div className="w-14 h-14 bg-emerald-500/20 rounded-2xl flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform">
                🌾
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Rações & Grãos</h3>
              <p className="text-gray-400 leading-relaxed">
                Nutrição animal de alta performance para equinos, bovinos e aves. As melhores marcas do mercado.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-neutral-800/50 p-8 rounded-3xl border border-white/5 hover:border-emerald-500/30 transition-all group">
              <div className="w-14 h-14 bg-emerald-500/20 rounded-2xl flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform">
                🛠️
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Ferramentas</h3>
              <p className="text-gray-400 leading-relaxed">
                Equipamentos robustos para o dia a dia na roça. Da enxada à motosserra, temos o que você precisa.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-neutral-800/50 p-8 rounded-3xl border border-white/5 hover:border-emerald-500/30 transition-all group">
              <div className="w-14 h-14 bg-emerald-500/20 rounded-2xl flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform">
                💊
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Farmácia Vet</h3>
              <p className="text-gray-400 leading-relaxed">
                Medicamentos e suplementos para manter seus animais saudáveis e produtivos. Consultoria básica no balcão.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="py-24 bg-neutral-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-500/5 blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1592997571659-0b21706533f3?q=80&w=2080&auto=format&fit=crop" 
              alt="Loja Interior" 
              className="rounded-3xl shadow-2xl border border-white/10 rotate-2 hover:rotate-0 transition-transform duration-500"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Mais que uma loja, <br/>
              <span className="text-emerald-500">um parceiro do produtor.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Entendemos a realidade da Serra do Piloto porque somos daqui. 
              Nosso compromisso é garantir que você nunca fique na mão, seja no trato dos animais ou na manutenção do sítio.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-gray-300">
                <span className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500 text-sm">✓</span>
                Entrega rápida na região
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <span className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500 text-sm">✓</span>
                Preços justos e competitivos
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <span className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500 text-sm">✓</span>
                Atendimento especializado
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <footer id="contato" className="py-20 bg-emerald-900/20 border-t border-emerald-500/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Precisa de algo agora?</h2>
          <p className="text-xl text-gray-300 mb-10">
            Mande uma mensagem e verificamos o estoque pra você na hora.
          </p>
          <a href="#" className="inline-flex items-center gap-3 bg-emerald-500 text-black px-10 py-5 rounded-full font-bold text-xl hover:bg-emerald-400 transition-all shadow-lg hover:shadow-emerald-500/20 transform hover:-translate-y-1">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.64 16.64C16.05 17.23 15.26 17.5 14.5 17.5C13.74 17.5 12.95 17.23 12.36 16.64L7.36 11.64C6.77 11.05 6.5 10.26 6.5 9.5C6.5 8.74 6.77 7.95 7.36 7.36C7.95 6.77 8.74 6.5 9.5 6.5C10.26 6.5 11.05 6.77 11.64 7.36L12 7.72L12.36 7.36C12.95 6.77 13.74 6.5 14.5 6.5C15.26 6.5 16.05 6.77 16.64 7.36C17.23 7.95 17.5 8.74 17.5 9.5C17.5 10.26 17.23 11.05 16.64 11.64L12 16.28L16.64 16.64Z" /></svg>
            Chamar no WhatsApp
          </a>
        </div>
      </footer>
    </div>
  )
}
