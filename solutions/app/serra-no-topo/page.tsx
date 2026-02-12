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
          <p className="text-xl md:text-2xl text-gray-300 font-light max-w-2xl mx-auto mb-8">
            Colocando os melhores serviços da Serra do Piloto no mapa digital.
          </p>
          <a href="#proposta" className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg shadow-emerald-900/50">
            Entenda o Projeto
          </a>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="py-20 px-6 max-w-7xl mx-auto border-b border-white/10">
        <h2 className="text-3xl font-bold mb-12 text-center text-emerald-400">
          Quem já está no Topo
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

      {/* Sales Copy Section */}
      <section id="proposta" className="py-24 bg-neutral-900">
        <div className="max-w-4xl mx-auto px-6 space-y-24">
          
          {/* BLOCO 1 - A DOR */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Sua empresa está <span className="text-red-500">invisível</span> para quem visita Mangaratiba?
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Todos os dias, turistas passam por Mangaratiba a caminho da Ilha Grande.
              Mas quase nenhum deles descobre a Serra do Piloto.
            </p>
            <div className="bg-black/30 p-6 rounded-xl border border-white/5 space-y-3">
              <p className="text-gray-400 font-mono text-sm">🔍 O turista procura no Google:</p>
              <p className="text-emerald-400 font-medium">"restaurante na Serra do Piloto"</p>
              <p className="text-emerald-400 font-medium">"pousada na Serra do Piloto"</p>
              <p className="text-emerald-400 font-medium">"o que fazer na Serra do Piloto"</p>
              <p className="text-red-400 italic mt-4">...e muitas vezes não encontra nada.</p>
            </div>
            <p className="text-xl font-bold text-white">
              Se não aparece no Google, não existe para o turista.
            </p>
          </div>

          {/* BLOCO 2 - A SOLUÇÃO */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-400 leading-tight">
              O Projeto Serra no Topo foi criado para mudar isso.
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Estamos construindo o <strong className="text-white">Guia Digital Oficial da Serra do Piloto</strong>.
              Um espaço online moderno, organizado e estratégico que:
            </p>
            <ul className="space-y-4 mt-4">
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 text-xl">✔</span>
                <span className="text-gray-300 text-lg">Destaca os melhores estabelecimentos da Serra</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 text-xl">✔</span>
                <span className="text-gray-300 text-lg">Facilita que turistas encontrem sua empresa</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 text-xl">✔</span>
                <span className="text-gray-300 text-lg">Direciona o cliente direto para o seu WhatsApp</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 text-xl">✔</span>
                <span className="text-gray-300 text-lg">Fortalece a presença digital da região como um todo</span>
              </li>
            </ul>
            <p className="text-xl font-bold text-white pt-4">
              Não é apenas um site. É posicionamento.
            </p>
          </div>

          {/* BLOCO 3 - O QUE VOCÊ RECEBE */}
          <div className="bg-emerald-900/10 border border-emerald-500/20 rounded-3xl p-8 md:p-12 space-y-8">
            <h2 className="text-3xl font-bold text-white">
              Ao participar, sua empresa ganha:
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                <span className="text-gray-200">Página profissional com domínio próprio</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                <span className="text-gray-200">Design moderno e responsivo</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                <span className="text-gray-200">Botão direto para WhatsApp</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                <span className="text-gray-200">Localização integrada no mapa</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                <span className="text-gray-200">Destaque dentro do Guia da Serra</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                <span className="text-gray-200">Estrutura preparada para o Google</span>
              </div>
            </div>
            <div className="pt-6 border-t border-emerald-500/20">
               <p className="text-emerald-400 font-bold text-xl text-center">
                 Tudo isso por um valor simbólico de lançamento.
               </p>
            </div>
          </div>

          {/* BLOCO 4 & 5 - VALOR E AUTORIDADE */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Por que o valor é R$250?</h3>
              <p className="text-gray-400 leading-relaxed">
                Estamos em fase inicial. O objetivo agora é fortalecer o comércio local e criar uma presença digital coletiva.
                Por isso, o valor é promocional. No futuro, novos participantes não entrarão nas mesmas condições.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Autoridade e Confiança</h3>
              <p className="text-gray-400 leading-relaxed">
                Este projeto nasce da própria Serra. Criado por quem tem história aqui, para valorizar nosso território através da tecnologia.
                Nosso objetivo: Trazer visibilidade, gerar movimento e fortalecer o comércio.
              </p>
            </div>
          </div>

          {/* BLOCO 6 - CHAMADA FINAL */}
          <div className="text-center pt-12 space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Se você quer que sua empresa seja encontrada, <br/>
              <span className="text-emerald-500">agora é o momento.</span>
            </h2>
            <div className="flex justify-center">
              <a 
                href="https://wa.me/5521992669980?text=Ol%C3%A1%2C%20quero%20participar%20do%20Serra%20no%20Topo!" 
                target="_blank"
                className="bg-emerald-600 hover:bg-emerald-500 text-white text-xl font-bold py-6 px-12 rounded-full shadow-2xl shadow-emerald-900/50 transform hover:scale-105 transition-all flex items-center gap-3"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.05 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67Z" /></svg>
                QUERO PARTICIPAR DO SERRA NO TOPO
              </a>
            </div>
            <p className="text-gray-500 text-sm">
              Fale diretamente comigo pelo WhatsApp para garantir sua vaga na fase inicial.
            </p>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-gray-500 text-sm border-t border-white/5 bg-neutral-900">
        <p>Desenvolvido por <span className="text-white font-bold">Marroc Solutions</span> © 2026</p>
      </footer>
    </div>
  )
}
