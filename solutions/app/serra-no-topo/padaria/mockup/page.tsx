export default function PadariaMockup() {
  return (
    <div className="bg-amber-50 min-h-screen text-amber-950 font-sans selection:bg-amber-400 selection:text-white">
      {/* Header / Nav */}
      <nav className="fixed w-full z-50 bg-amber-50/80 backdrop-blur-md border-b border-amber-900/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-serif font-bold tracking-tight text-amber-900">
            Padaria & Coisas
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-amber-800">
            <a href="#menu" className="hover:text-amber-600 transition-colors">Cardápio</a>
            <a href="#encomendas" className="hover:text-amber-600 transition-colors">Encomendas</a>
            <a href="#sobre" className="hover:text-amber-600 transition-colors">Nossa História</a>
            <a href="#local" className="hover:text-amber-600 transition-colors">Localização</a>
          </div>
          <button className="bg-amber-600 hover:bg-amber-500 text-white px-6 py-2 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg shadow-amber-900/20">
            Pedir Agora
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-amber-50 via-amber-100/30 to-transparent z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?q=80&w=2162&auto=format&fit=crop" 
            alt="Pão Fresco" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto mt-16">
          <span className="inline-block py-1 px-4 rounded-full bg-white/50 backdrop-blur-sm border border-amber-900/10 text-amber-800 text-sm font-bold tracking-widest mb-8 uppercase font-serif">
            Recanto da Serra • Sabor Artesanal
          </span>
          <h1 className="text-6xl md:text-8xl font-serif font-bold mb-6 tracking-tighter leading-tight text-amber-950 drop-shadow-sm">
            O Pão Mais Quente <br/>
            <span className="italic text-amber-700">da Serra</span>
          </h1>
          <p className="text-xl md:text-2xl text-amber-800 max-w-2xl mx-auto leading-relaxed mb-12 font-medium">
            Acorde com o aroma de pão fresco, bolos caseiros e aquele café passado na hora.
            O seu ponto de encontro diário.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-amber-800 text-amber-50 px-10 py-4 rounded-full font-bold text-lg hover:bg-amber-700 transition-all flex items-center justify-center gap-2 shadow-xl shadow-amber-900/10">
              ☕ Ver Cardápio
            </button>
            <button className="bg-white/50 backdrop-blur-sm border border-amber-900/10 text-amber-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-white/80 transition-all">
              🍰 Encomendar Bolo
            </button>
          </div>
        </div>
      </header>

      {/* Destaques do Dia */}
      <section id="menu" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-amber-950 mb-4">Saído do Forno</h2>
            <p className="text-amber-700 text-lg">Nossas especialidades que você não pode deixar de provar.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Item 1 */}
            <div className="group cursor-pointer">
              <div className="relative h-80 rounded-t-[100px] rounded-b-3xl overflow-hidden mb-6 shadow-xl shadow-amber-900/5 group-hover:shadow-amber-900/15 transition-all">
                <img 
                  src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=1926&auto=format&fit=crop" 
                  alt="Pães Artesanais" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <h3 className="text-2xl font-bold text-amber-900 text-center mb-2">Pães Rústicos</h3>
              <p className="text-amber-700 text-center px-4">Fermentação natural, casca crocante e miolo macio. Perfeito com manteiga da roça.</p>
            </div>

            {/* Item 2 */}
            <div className="group cursor-pointer">
              <div className="relative h-80 rounded-t-[100px] rounded-b-3xl overflow-hidden mb-6 shadow-xl shadow-amber-900/5 group-hover:shadow-amber-900/15 transition-all">
                <img 
                  src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1989&auto=format&fit=crop" 
                  alt="Bolos Caseiros" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <h3 className="text-2xl font-bold text-amber-900 text-center mb-2">Bolos da Vovó</h3>
              <p className="text-amber-700 text-center px-4">Cenoura com chocolate, fubá cremoso, laranja. Aquele gosto de infância.</p>
            </div>

            {/* Item 3 */}
            <div className="group cursor-pointer">
              <div className="relative h-80 rounded-t-[100px] rounded-b-3xl overflow-hidden mb-6 shadow-xl shadow-amber-900/5 group-hover:shadow-amber-900/15 transition-all">
                <img 
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop" 
                  alt="Café & Conveniência" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <h3 className="text-2xl font-bold text-amber-900 text-center mb-2">Café & Coisas</h3>
              <p className="text-amber-700 text-center px-4">Espresso, pingado, queijos, doces em compota e tudo pro seu café da tarde.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 bg-amber-100/50">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-amber-950">
              O Coração da Serra <br/>
              <span className="text-amber-700 italic">bate aqui.</span>
            </h2>
            <p className="text-amber-800 text-lg mb-8 leading-relaxed">
              Mais do que uma padaria, somos o ponto de encontro da comunidade.
              Onde as notícias correm, os amigos se encontram e o dia começa com energia.
              Preparamos tudo com carinho, como se fosse pra nossa própria família.
            </p>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-amber-900/5">
              <p className="text-amber-900 italic text-lg mb-4">
                "O melhor pão de queijo que já comi na vida! Parada obrigatória pra quem sobe a serra."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-amber-300"></div>
                <div>
                  <p className="font-bold text-amber-950 text-sm">Maria Silva</p>
                  <p className="text-amber-700 text-xs">Cliente Fiel</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2">
             <div className="grid grid-cols-2 gap-4">
               <img 
                 src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2072&auto=format&fit=crop" 
                 className="rounded-2xl object-cover h-64 w-full transform translate-y-8" 
                 alt="Pão"
               />
               <img 
                 src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop" 
                 className="rounded-2xl object-cover h-64 w-full" 
                 alt="Café"
               />
             </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="local" className="py-20 bg-amber-950 text-amber-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif font-bold mb-8">Venha nos visitar</h2>
          <div className="flex flex-col md:flex-row justify-center gap-12 text-left mb-12">
            <div>
              <h4 className="font-bold text-amber-200 mb-2 uppercase text-sm tracking-widest">Horários</h4>
              <p>Seg - Sex: 06h às 20h</p>
              <p>Sáb - Dom: 07h às 21h</p>
            </div>
            <div>
              <h4 className="font-bold text-amber-200 mb-2 uppercase text-sm tracking-widest">Contato</h4>
              <p>(21) 99999-9999</p>
              <p>@padariacoisas.serra</p>
            </div>
            <div>
              <h4 className="font-bold text-amber-200 mb-2 uppercase text-sm tracking-widest">Endereço</h4>
              <p>Estrada Principal, 123</p>
              <p>Serra do Piloto - RJ</p>
            </div>
          </div>
          <p className="text-amber-500/50 text-sm">Padaria & Coisas © 2026. Feito com ❤️ na Serra.</p>
        </div>
      </footer>
    </div>
  )
}
