export default function SerraNoTopoHub() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans">
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tighter">
            Serra no Topo
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light max-w-2xl mx-auto">
            Elevando a presença digital dos melhores serviços da Serra do Piloto.
            Uma vitrine exclusiva para quem faz a diferença.
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-emerald-400">
          Projetos em Destaque
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Agropec */}
          <a href="/serra-no-topo/agropec/mockup" className="group block relative h-96 rounded-2xl overflow-hidden border border-white/10 hover:border-emerald-500/50 transition-all duration-300">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1932&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110"></div>
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-300"></div>
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <span className="text-emerald-400 text-sm font-bold tracking-widest uppercase mb-2 block">Agro & Campo</span>
              <h3 className="text-3xl font-bold text-white mb-2">Agropec</h3>
              <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                Soluções rurais, rações e ferramentas essenciais para o dia a dia no campo.
              </p>
            </div>
          </a>

          {/* Card 2: Padaria & Coisas */}
          <a href="/serra-no-topo/padaria/mockup" className="group block relative h-96 rounded-2xl overflow-hidden border border-white/10 hover:border-amber-500/50 transition-all duration-300">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110"></div>
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-300"></div>
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <span className="text-amber-400 text-sm font-bold tracking-widest uppercase mb-2 block">Sabor Local</span>
              <h3 className="text-3xl font-bold text-white mb-2">Padaria & Coisas</h3>
              <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                O ponto de encontro mais delicioso da serra. Pães, quitutes e conveniência.
              </p>
            </div>
          </a>

          {/* Card 3: Art-Café */}
          <a href="/serra-no-topo/art-cafe/mockup" className="group block relative h-96 rounded-2xl overflow-hidden border border-white/10 hover:border-rose-500/50 transition-all duration-300">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110"></div>
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-300"></div>
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <span className="text-rose-400 text-sm font-bold tracking-widest uppercase mb-2 block">Gastronomia & Arte</span>
              <h3 className="text-3xl font-bold text-white mb-2">Art-Café / Rancho Madu</h3>
              <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                Experiência gastronômica única, lazer e conexão com a natureza exuberante.
              </p>
            </div>
          </a>

        </div>
      </div>

      {/* Footer */}
      <footer className="py-12 text-center text-gray-500 text-sm">
        <p>Desenvolvido por <span className="text-white font-bold">Marroc Solutions</span> © 2026</p>
      </footer>
    </div>
  )
}
