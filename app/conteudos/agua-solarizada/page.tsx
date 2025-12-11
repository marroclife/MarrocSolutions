import React from 'react';
import { ShareButton } from '../../../components/ShareButton';
import { ArrowLeft, Calendar, Droplets, Palette } from 'lucide-react';
import Link from 'next/link';

export default function AguaSolarizadaPage() {
  const article = {
    title: 'Água Solarizada: Cromoterapia Líquida',
    excerpt: 'A ciência e a mística por trás da água energizada pelo sol. Como utilizar as cores para equilibrar chakras e curar o corpo sutil.',
    publishDate: '2023-10-28',
    readTime: '3 min',
    tags: ['Cura', 'Alquimia', 'Prática']
  };

  return (
    <article className="max-w-3xl mx-auto py-12 px-6 animate-fade-in-up font-sans text-zinc-100">
      <Link 
        href="/conteudos"
        className="group inline-flex items-center gap-2 text-zinc-500 hover:text-gold-400 transition-colors mb-12 text-xs uppercase tracking-widest"
      >
        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
        Voltar para os Arquivos
      </Link>

      <header className="mb-12 border-b border-zinc-800 pb-12">
        <div className="flex flex-wrap gap-3 mb-6">
            {article.tags.map(tag => (
                <span key={tag} className="px-3 py-1 border border-zinc-800 bg-zinc-900/50 rounded-full text-[10px] text-gold-500 uppercase tracking-wider font-semibold">
                    {tag}
                </span>
            ))}
        </div>
        
        <h1 className="text-4xl md:text-5xl font-serif text-white mb-8 leading-tight">
            {article.title}
        </h1>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex items-center gap-3 text-zinc-400 text-sm">
                <Calendar className="w-4 h-4" />
                <time>{article.publishDate}</time>
                <span className="w-1 h-1 bg-zinc-700 rounded-full"></span>
                <span>{article.readTime} de leitura</span>
            </div>
            <ShareButton title={article.title} />
        </div>
      </header>

      <div className="w-full h-80 md:h-96 mb-16 overflow-hidden rounded-sm relative group">
         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
         <img 
            src="https://images.unsplash.com/photo-1548839140-29a749e1cf4d?q=80&w=1888&auto=format&fit=crop" 
            alt="Água Solarizada" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
         />
      </div>

      <div className="prose prose-invert prose-lg prose-headings:font-serif prose-headings:text-zinc-100 prose-p:text-zinc-300 prose-strong:text-white prose-ul:text-zinc-300">
        <p className="text-xl text-zinc-200 border-l-2 border-blue-500 pl-6 mb-8">
            A água tem memória. A Água Solarizada é uma técnica simples de cromoterapia que une o poder condutor da água com a frequência vibratória das cores e a energia vital do sol.
        </p>

        <h3 className="flex items-center gap-2 text-white">
            <Droplets className="text-blue-400" />
            Como Funciona
        </h3>
        <p>
          Estudos de <em>Masaru Emoto</em> e tradições alquímicas sugerem que a estrutura molecular da água pode ser alterada por vibrações.
          Ao expor a água ao sol dentro de um recipiente de vidro colorido, a luz atravessa o vidro e a água absorve a frequência daquela cor específica.
        </p>

        <h3 className="flex items-center gap-2 text-white mt-12">
            <Palette className="text-purple-400" />
            O Significado das Cores
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose my-8">
            <div className="bg-blue-900/20 border border-blue-900/50 p-4 rounded-sm">
                <h4 className="text-blue-400 font-bold uppercase text-xs tracking-widest mb-2">Azul</h4>
                <p className="text-sm text-zinc-300">Calmante, analgésico e equilibrador. Ótima para ansiedade, insônia e para "esfriar" excessos. Atua no Chakra Laríngeo.</p>
            </div>
            <div className="bg-green-900/20 border border-green-900/50 p-4 rounded-sm">
                <h4 className="text-green-400 font-bold uppercase text-xs tracking-widest mb-2">Verde</h4>
                <p className="text-sm text-zinc-300">Cura física e equilíbrio. Remove toxinas e energias estagnadas. Atua no Chakra Cardíaco.</p>
            </div>
            <div className="bg-orange-900/20 border border-orange-900/50 p-4 rounded-sm">
                <h4 className="text-orange-400 font-bold uppercase text-xs tracking-widest mb-2">Âmbar/Laranja</h4>
                <p className="text-sm text-zinc-300">Coragem, criatividade e energia sexual. Revigorante. Atua no Chakra Sacral.</p>
            </div>
            <div className="bg-purple-900/20 border border-purple-900/50 p-4 rounded-sm">
                <h4 className="text-purple-400 font-bold uppercase text-xs tracking-widest mb-2">Violeta</h4>
                <p className="text-sm text-zinc-300">Transmutação e espiritualidade. Ideal para meditação profunda. Atua no Chakra Coronário.</p>
            </div>
        </div>

        <h3 className="text-white mt-12">Como Preparar</h3>
        <ol className="space-y-2">
            <li>Utilize uma garrafa de <strong>vidro</strong> (nunca plástico) da cor desejada. Se não tiver vidro colorido, envolva um vidro transparente em celofane.</li>
            <li>Encha com água mineral ou filtrada.</li>
            <li>Deixe exposta ao sol (sem a tampa ou com um tecido respirável) por <strong>1h</strong> (sol forte) a <strong>3h</strong> (sol fraco).</li>
            <li>Beba ao longo do dia.</li>
        </ol>

        <p className="text-sm text-zinc-400 italic mt-8">
            Esta é uma tecnologia simples, mas profunda, de realinhamento vibracional disponível gratuitamente pela natureza.
        </p>
      </div>

      <div className="mt-16 pt-8 border-t border-zinc-800 flex justify-between items-center">
          <span className="text-zinc-500 text-sm">Compartilhe a cura.</span>
          <ShareButton title={article.title} />
      </div>
    </article>
  );
}
