import React from "react";
import { Mic2, Music2, Calendar } from "lucide-react";

export function MarrocSection() {
  // ⚠️ IMPORTANTE: COLOQUE AQUI O ID REAL DO ARTISTA OU PLAYLIST DO MARROC
  // Exemplo: se o link for open.spotify.com/artist/12345, coloque "12345"
  const SPOTIFY_ID = "74vMSJj7Vy2CzAo1U3x9YY";

  return (
    <section className="relative py-24 px-4 overflow-hidden border-b border-white/5">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-purple-900/10 to-black z-0 pointer-events-none"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Texto e Conceito */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs tracking-widest uppercase">
              <Music2 size={12} /> Live Performance
            </div>
            
            <h2 className="text-5xl md:text-7xl font-serif text-white leading-none">
              Live Psytrance <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Ritualístico
              </span>
            </h2>

            <p className="text-xl text-gray-300 font-light">
              Energia de pista, alma de templo.
            </p>

            <div className="text-gray-400 space-y-4 text-sm md:text-base border-l-2 border-purple-500/30 pl-6">
              <p>
                Uma fusão sonora onde <strong className="text-white">Beats Eletrônicos</strong> encontram 
                <strong className="text-white"> Instrumentos Orgânicos</strong> e <strong className="text-white">Voz ao Vivo</strong>.
              </p>
              <p>
                Não é apenas um set, é uma cerimônia. O palco se torna um altar onde sintetizadores desenham a atmosfera, 
                enquanto flautas e tambores ancoram o ritual na terra. Uma jornada desenhada para induzir o transe e elevar a frequência coletiva.
              </p>
            </div>

            <div className="flex gap-4 pt-4">
               <a href="/agenda" className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition flex items-center gap-2">
                 <Calendar size={18} /> Ver Agenda
               </a>
            </div>
          </div>

          {/* Player Spotify */}
          <div className="w-full">
            <div className="rounded-xl overflow-hidden shadow-[0_0_50px_-10px_rgba(168,85,247,0.3)] border border-white/10 relative bg-black">
              {/* O iframe do Spotify */}
              {/* Se for Perfil de Artista, mantenha 'artist'. Se for Playlist, mude para 'playlist' na URL abaixo */}
              <iframe 
                style={{borderRadius: '12px'}} 
                src={`https://open.spotify.com/embed/artist/${SPOTIFY_ID}?utm_source=generator&theme=0`} 
                width="100%" 
                height="352" 
                frameBorder="0" 
                allowFullScreen 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"
              ></iframe>
            </div>
            <p className="text-center text-xs text-gray-500 mt-4 uppercase tracking-widest">
              Ouça os lançamentos mais recentes
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}