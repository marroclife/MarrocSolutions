export default function ArtCafeMockup() {
  return (
    <div className="bg-rose-50/50 min-h-screen font-sans selection:bg-rose-400 selection:text-white">
      {/* Header / Nav */}
      <nav className="fixed w-full z-50 bg-white/70 backdrop-blur-md border-b border-rose-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-serif font-bold tracking-tight text-rose-950">
            Art-Café <span className="text-rose-400 font-light mx-2">|</span> Rancho Madu
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-rose-900/80">
            <a href="#experiencia" className="hover:text-rose-500 transition-colors">Experiência</a>
            <a href="#gastronomia" className="hover:text-rose-500 transition-colors">Gastronomia</a>
            <a href="#eventos" className="hover:text-rose-500 transition-colors">Eventos</a>
            <a href="#reserva" className="hover:text-rose-500 transition-colors">Reservas</a>
          </div>
          <button className="bg-rose-500 hover:bg-rose-400 text-white px-8 py-2 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg shadow-rose-200">
            Reservar Mesa
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video/Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/20 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070&auto=format&fit=crop" 
            alt="Art Café Ambiente" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-8xl font-serif font-bold mb-6 text-white drop-shadow-lg tracking-tight">
            Onde a Natureza <br/>
            <span className="italic font-light">Encontra a Arte</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-light max-w-2xl mx-auto leading-relaxed mb-10 drop-shadow-md">
            Um refúgio gastronômico no coração da Serra do Piloto.
            Arte, sabor e momentos inesquecíveis.
          </p>
          <div className="flex justify-center">
            <a href="#gastronomia" className="animate-bounce text-white">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
            </a>
          </div>
        </div>
      </header>

      {/* Gastronomia Section */}
      <section id="gastronomia" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16 mb-24">
            <div className="w-full md:w-1/2 relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-rose-100 rounded-full blur-xl opacity-50"></div>
              <img 
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop" 
                alt="Prato Gourmet" 
                className="rounded-2xl shadow-2xl relative z-10"
              />
            </div>
            <div className="w-full md:w-1/2">
              <span className="text-rose-500 font-bold tracking-widest uppercase text-sm mb-4 block">Nossa Cozinha</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-rose-950">
                Sabores que Contam Histórias
              </h2>
              <p className="text-rose-900/70 text-lg mb-8 leading-relaxed">
                Nossa culinária resgata a tradição local com um toque contemporâneo.
                Ingredientes frescos da serra, preparados com técnica e paixão.
                Do café colonial ao jantar romântico à luz de velas.
              </p>
              <button className="text-rose-600 font-bold border-b-2 border-rose-200 hover:border-rose-600 transition-all pb-1">
                Ver Menu Completo →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 bg-rose-50">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[600px]">
             {/* Large Item */}
             <div className="col-span-2 row-span-2 relative group overflow-hidden rounded-2xl cursor-pointer">
               <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Ambiente Externo" />
               <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                 <p className="text-white font-serif text-2xl">Jardim & Lazer</p>
               </div>
             </div>
             
             {/* Small Items */}
             <div className="relative group overflow-hidden rounded-2xl cursor-pointer">
               <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2071&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Café" />
             </div>
             <div className="relative group overflow-hidden rounded-2xl cursor-pointer">
               <img src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Drinks" />
             </div>
             <div className="col-span-2 relative group overflow-hidden rounded-2xl cursor-pointer">
               <img src="https://images.unsplash.com/photo-1519671482502-9759101d4561?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Eventos" />
               <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                 <p className="text-white font-serif text-2xl">Casamentos & Eventos</p>
               </div>
             </div>
           </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-rose-950 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <svg className="w-12 h-12 text-rose-500 mx-auto mb-8 opacity-50" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16H9.01697C7.9124 16 7.01697 16.8954 7.01697 18L7.01697 21H2.01697V7L10.517 2L19.017 7V21H14.017ZM12.017 14V7.5L5.01697 11V14H12.017ZM14.017 14H16.017V11H14.017V14ZM16.017 14V11L18.017 11V14H16.017Z" /></svg>
          <p className="text-2xl md:text-3xl font-serif leading-relaxed mb-8 italic text-rose-100/90">
            "Um lugar mágico. A comida é divina, mas a atmosfera é o que realmente te transporta.
            O pôr do sol visto do deck é inesquecível."
          </p>
          <div className="flex justify-center items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-rose-500 overflow-hidden">
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Cliente" />
            </div>
            <div className="text-left">
              <p className="font-bold text-rose-200">Ana Clara</p>
              <p className="text-rose-400 text-sm">Visitante do Rio</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="reserva" className="py-20 bg-white border-t border-rose-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-serif font-bold text-rose-950 mb-6">Faça sua Reserva</h2>
            <p className="text-rose-900/70 mb-8">
              Garanta seu lugar especial. Para eventos, entre em contato com antecedência.
            </p>
            <form className="space-y-4">
              <input type="text" placeholder="Nome" className="w-full p-4 bg-rose-50 rounded-xl border border-rose-100 focus:outline-none focus:border-rose-300 transition-colors" />
              <div className="grid grid-cols-2 gap-4">
                <input type="date" className="w-full p-4 bg-rose-50 rounded-xl border border-rose-100 focus:outline-none focus:border-rose-300 transition-colors" />
                <input type="time" className="w-full p-4 bg-rose-50 rounded-xl border border-rose-100 focus:outline-none focus:border-rose-300 transition-colors" />
              </div>
              <button className="w-full bg-rose-500 text-white font-bold p-4 rounded-xl hover:bg-rose-600 transition-all shadow-lg shadow-rose-200">
                Confirmar Reserva
              </button>
            </form>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="font-bold text-rose-950 mb-2">Localização</h3>
              <p className="text-rose-900/70">Estrada da Serra, Km 5<br/>Serra do Piloto, Mangaratiba - RJ</p>
            </div>
            <div>
              <h3 className="font-bold text-rose-950 mb-2">Contato</h3>
              <p className="text-rose-900/70">+55 (21) 98888-8888<br/>contato@artcaferanchomadu.com.br</p>
            </div>
            <div className="pt-8 border-t border-rose-100">
              <p className="text-rose-300 text-sm">Art-Café / Rancho Madu © 2026. Design by Marroc Solutions.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
