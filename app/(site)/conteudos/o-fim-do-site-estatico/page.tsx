// app/(site)/conteudos/o-fim-do-site-estatico/page.tsx
// Tese 01: O Fim do Site Estático
// Migrada de: vault/01_Projects/Marroc_Solutions_SEO/TESES/Tese_01_O_Fim_do_Site_Estatico.md

import React from 'react';
import { ArticleLayout } from '@/components/ArticleLayout';

export default function Page() {
  return (
    <ArticleLayout
      title="O Fim do Site Estático"
      excerpt="A transição do panfleto digital para o Sistema Vivo. Por que beleza sem performance é apenas ruído visual — e como dominação semântica exige infraestrutura que respira."
      publishDate="2026-06-03"
      readTime="6 min"
      tags={['Saliência', 'SEO', 'Sistemas Vivos', 'Performance']}
      imageUrl="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
      imageAlt="Arquitetura de sistemas digitais — transições visuais que representam fluxo de dados"
      next={{ title: 'A Anatomia da Saliência de Entidade', href: '/conteudos/a-anatomia-da-saliencia-de-entidade' }}
    >
      <h2 className="text-3xl font-serif text-white mt-12 mb-6">A Grande Mentira do "Site Bonito"</h2>
      <p>
        Por décadas, o mercado foi condicionado a acreditar que um site "moderno" é aquele com um design visualmente atraente. No entanto, em 2026, a beleza sem funcionalidade é apenas um <strong>ruído visual</strong>.
      </p>
      <p>
        <strong>Um site bonito, mas lento, é um site invisível.</strong>
      </p>
      <p>
        Quando falamos em <strong>Sistemas Vivos</strong>, não estamos falando de animações fluidas, mas de <strong>arquiteturas que respiram</strong>. Um sistema vivo não é apenas uma página que exibe informações; é um ecossistema que:
      </p>
      <ol>
        <li><strong>Reage em tempo real</strong> à intenção do usuário.</li>
        <li><strong>Otimiza sua própria entrega</strong> via Zero-Latency (INP &lt; 200ms).</li>
        <li><strong>Sinaliza autoridade</strong> para os algoritmos de busca através da Saliência de Entidade.</li>
      </ol>

      <h2 className="text-3xl font-serif text-white mt-16 mb-6">O Que é Saliência de Entidade?</h2>
      <p>
        A maioria das agências foca em "Palavras-Chave". Nós focamos em <strong>Entidades</strong>.
      </p>
      <p>
        O Google não lê mais apenas palavras; ele lê relações. Se o seu site diz que você é "especialista em IA", mas não possui a estrutura de links, a profundidade de conteúdo e a performance técnica que validam essa afirmação, você é apenas mais um site com a palavra "IA" no texto.
      </p>
      <p>
        <strong>Saliência de Entidade</strong> é o processo de provar ao algoritmo que você é a autoridade máxima do seu nicho. Isso é feito através de:
      </p>
      <ul>
        <li><strong>Silos de Autoridade:</strong> Conteúdos interconectados que esgotam um tema.</li>
        <li><strong>E-E-A-T:</strong> Experiência, Especialidade, Autoridade e Confiança comprovadas por dados.</li>
        <li><strong>Performance Técnica:</strong> Um site que carrega instantaneamente sinaliza ao Google que a experiência do usuário é prioridade máxima.</li>
      </ul>

      <h2 className="text-3xl font-serif text-white mt-16 mb-6">De Estático para Vivo</h2>
      <div className="my-12 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gold-900/30">
              <th className="text-left py-3 text-gold-500 font-serif">Site Estático (Panfleto)</th>
              <th className="text-left py-3 text-gold-500 font-serif">Sistema Vivo (Ecossistema)</th>
            </tr>
          </thead>
          <tbody className="text-zinc-300">
            <tr className="border-b border-zinc-800/50">
              <td className="py-3">Informação passiva</td>
              <td className="py-3">Interação ativa e inteligente</td>
            </tr>
            <tr className="border-b border-zinc-800/50">
              <td className="py-3">Dependente de atualizações manuais</td>
              <td className="py-3">Evolução baseada em dados e feedback loops</td>
            </tr>
            <tr className="border-b border-zinc-800/50">
              <td className="py-3">Focado em "estética" superficial</td>
              <td className="py-3">Focado em "Saliência" e Performance</td>
            </tr>
            <tr className="border-b border-zinc-800/50">
              <td className="py-3">O usuário navega</td>
              <td className="py-3">O sistema conduz a jornada</td>
            </tr>
            <tr>
              <td className="py-3">Invisível para o Google (baixo rank)</td>
              <td className="py-3">Autoridade reconhecida (Saliência)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-3xl font-serif text-white mt-16 mb-6">A Era da Inteligência Operacional</h2>
      <p>
        Se a sua empresa ainda utiliza um site que serve apenas como "cartão de visitas", você está operando com a tecnologia de 2010. No mercado atual, a diferença entre converter um lead e perdê-lo para a concorrência é medida em <strong>milissegundos</strong> e na percepção de autoridade.
      </p>

      <div className="mt-16 p-10 bg-gradient-to-b from-zinc-900/20 to-zinc-900 border-t border-zinc-800 text-center rounded-sm">
        <p className="font-medium text-white text-xl font-serif italic">
          "Sua empresa não precisa de um site novo. Ela precisa de um Sistema Vivo."
        </p>
      </div>
    </ArticleLayout>
  );
}
