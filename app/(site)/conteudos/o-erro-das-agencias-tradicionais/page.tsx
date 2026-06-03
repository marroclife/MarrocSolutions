// app/(site)/conteudos/o-erro-das-agencias-tradicionais/page.tsx
// Tese 04: O Erro das Agências Tradicionais — Sistêmica vs. Templates

import React from 'react';
import { ArticleLayout } from '@/components/ArticleLayout';

export default function Page() {
  return (
    <ArticleLayout
      title="O Erro das Agências Tradicionais"
      excerpt="Abordagem sistêmica vs. templates. Por que vender 'sites' é vender commodity — e o que separa o arquiteto de sistemas do fazedor de páginas."
      publishDate="2026-06-03"
      readTime="7 min"
      tags={['Agências', 'Sistemas Vivos', 'Abordagem Sistêmica', 'Templates']}
      imageUrl="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop"
      imageAlt="Engrenagens interconectadas representando arquitetura sistêmica"
      prev={{ title: 'Core Web Vitals & Conversão', href: '/conteudos/core-web-vitals-conversao' }}
      next={{ title: 'A Transição para a Operação Autônoma', href: '/conteudos/a-transicao-para-a-operacao-autonoma' }}
    >
      <h2 className="text-3xl font-serif text-white mt-12 mb-6">A Premissa</h2>
      <p>
        A maioria das agências de marketing e web design opera sob a lógica da <strong>commodity</strong>. Elas vendem "sites" como se fossem produtos de prateleira, utilizando templates (WordPress, Elementor, Shopify) que priorizam a estética imediata e a velocidade de entrega da agência, não a performance do negócio do cliente.
      </p>
      <p>
        O erro fundamental é tratar a presença digital como uma "peça de marketing" (um panfleto digital) e não como um <strong>sistema vivo de aquisição e conversão</strong>.
      </p>

      <h2 className="text-3xl font-serif text-white mt-16 mb-6">A Anatomia do Erro (Abordagem de Template)</h2>

      <h3 className="text-2xl font-serif text-white mt-12 mb-4">1. A Ilusão da Estética</h3>
      <p>
        Agências tradicionais focam no "bonito". O problema é que a beleza sem performance é apenas um custo. Um site visualmente impactante que demora 4 segundos para carregar ou que não possui uma hierarquia de informação baseada em intenção de busca é um ralo de tráfego.
      </p>

      <h3 className="text-2xl font-serif text-white mt-12 mb-4">2. O Gargalo Técnico do "Sobe-Tudo"</h3>
      <p>
        O uso indiscriminado de plugins e builders pesados cria um <em>bloatware</em> digital. O resultado são sites com Core Web Vitals medíocres, dependência de caches agressivos que quebram a experiência do usuário e uma fragilidade sistêmica: qualquer atualização de plugin pode derrubar a operação.
      </p>

      <h3 className="text-2xl font-serif text-white mt-12 mb-4">3. SEO como "Checklist"</h3>
      <p>
        Para a agência tradicional, o SEO é um anexo: "colocamos as palavras-chave e as meta-descriptions". Eles ignoram a <strong>Saliência de Entidade</strong>. Não se trata de palavras, mas de como o Google entende a relação entre a empresa, seus serviços e a autoridade do domínio no grafo de conhecimento.
      </p>

      <h2 className="text-3xl font-serif text-white mt-16 mb-6">A Solução: Abordagem Sistêmica</h2>
      <p>A abordagem sistêmica inverte a lógica. O site não é o destino final, mas a interface de um sistema de engenharia de performance.</p>

      <h3 className="text-2xl font-serif text-white mt-12 mb-4">1. Engenharia de Zero-Latency</h3>
      <p>
        Em vez de "instalar um template", projetamos a entrega. Foco em HTML puro, CSS otimizado e JS minimalista. O objetivo é que o site seja instantâneo. A velocidade não é um "bônus de SEO", é um gatilho psicológico de confiança e autoridade.
      </p>

      <h3 className="text-2xl font-serif text-white mt-12 mb-4">2. Arquitetura de Conversão Baseada em Dados</h3>
      <p>
        Substituímos o "eu acho que fica bonito aqui" por fluxos de intenção. Cada elemento da página é posicionado para mover o usuário através de um funil lógico, integrando gatilhos de autoridade técnica e provas sociais de forma sistêmica.
      </p>

      <h3 className="text-2xl font-serif text-white mt-12 mb-4">3. Saliência de Entidade e Autoridade Semântica</h3>
      <p>
        Não otimizamos para palavras-chave, otimizamos para <strong>Entidades</strong>. Construímos a estrutura de silos e interligações internas para que o buscador não apenas "leia" o site, mas "compreenda" que aquele domínio é a autoridade máxima no tópico.
      </p>

      <h2 className="text-3xl font-serif text-white mt-16 mb-6">Comparativo Final</h2>
      <div className="my-12 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gold-900/30">
              <th className="text-left py-3 text-gold-500 font-serif">Aspecto</th>
              <th className="text-left py-3 text-gold-500 font-serif">Agência Tradicional</th>
              <th className="text-left py-3 text-gold-500 font-serif">Abordagem Sistêmica</th>
            </tr>
          </thead>
          <tbody className="text-zinc-300">
            <tr className="border-b border-zinc-800/50">
              <td className="py-3">Foco</td>
              <td className="py-3">Estética e Prazo</td>
              <td className="py-3">Performance e ROI</td>
            </tr>
            <tr className="border-b border-zinc-800/50">
              <td className="py-3">Tecnologia</td>
              <td className="py-3">Builders Pesados</td>
              <td className="py-3">Código Limpo / Modular</td>
            </tr>
            <tr className="border-b border-zinc-800/50">
              <td className="py-3">SEO</td>
              <td className="py-3">Checklist de Keywords</td>
              <td className="py-3">Saliência de Entidade</td>
            </tr>
            <tr>
              <td className="py-3">Resultado</td>
              <td className="py-3">"Site bonito que não vende"</td>
              <td className="py-3">"Máquina de autoridade e vendas"</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-16 p-10 bg-gradient-to-b from-zinc-900/20 to-zinc-900 border-t border-zinc-800 text-center rounded-sm">
        <p className="font-medium text-white text-xl font-serif italic">
          "O mercado está saturado de sites. O que falta são Sistemas Vivos."
        </p>
      </div>
    </ArticleLayout>
  );
}
