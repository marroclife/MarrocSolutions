// app/(site)/conteudos/core-web-vitals-conversao/page.tsx
// Tese 03: Core Web Vitals & Conversão — A Matemática do Zero-Latency

import React from 'react';
import { ArticleLayout } from '@/components/ArticleLayout';

export default function Page() {
  return (
    <ArticleLayout
      title="Core Web Vitals & Conversão"
      excerpt="A matemática do Zero-Latency nas vendas. Por que performance não é sobre SEO — é sobre psicologia do consumo e termodinâmica de conversão."
      publishDate="2026-06-03"
      readTime="6 min"
      tags={['Performance', 'Conversão', 'Core Web Vitals', 'Zero-Latency']}
      imageUrl="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
      imageAlt="Métricas de performance e latência visualizadas em dashboard"
      prev={{ title: 'A Anatomia da Saliência de Entidade', href: '/conteudos/a-anatomia-da-saliencia-de-entidade' }}
      next={{ title: 'O Erro das Agências Tradicionais', href: '/conteudos/o-erro-das-agencias-tradicionais' }}
    >
      <h2 className="text-3xl font-serif text-white mt-12 mb-6">A Premissa</h2>
      <p>
        A maioria dos empresários e agências enxerga o <em>Core Web Vitals</em> (CWV) como uma "métrica de SEO" ou um "check-list do Google". Isso é um erro fundamental de perspectiva. <strong>Performance não é sobre rankings; é sobre psicologia do consumo e eficiência termodinâmica de conversão.</strong>
      </p>
      <p>
        No cenário de 2026, onde a atenção é o recurso mais escasso da economia, a latência não é apenas um atraso técnico — é um atrito cognitivo que interrompe o fluxo de desejo do cliente.
      </p>

      <h2 className="text-3xl font-serif text-white mt-16 mb-6">A Matemática da Perda (The Latency Tax)</h2>
      <p>
        Dados de mercado (Google/Deloitte) indicam que um atraso de apenas <strong>1 segundo no LCP (Largest Contentful Paint)</strong> correlaciona-se com uma queda de <strong>7% nas taxas de conversão</strong>.
      </p>
      <p>
        Se você fatura R$ 100k/mês e seu site demora 1s a mais que o concorrente para renderizar o elemento principal, você está pagando um "imposto de latência" de R$ 7.000,00. Multiplique isso por cada etapa do funil.
      </p>

      <h3 className="text-2xl font-serif text-white mt-12 mb-4">Os 3 Pilares da Fricção</h3>
      <ol>
        <li><strong>LCP (Largest Contentful Paint):</strong> O tempo até que a promessa principal do site apareça. Se demora, a mente do usuário começa a questionar se clicou no link certo ou se a empresa é "lenta/antiga".</li>
        <li><strong>INP (Interaction to Next Paint):</strong> A resposta ao comando. O "lag" entre o clique e a ação. No cérebro humano, a falta de resposta imediata gera ansiedade e desconfiança.</li>
        <li><strong>CLS (Cumulative Layout Shift):</strong> A instabilidade visual. Elementos que pulam enquanto a página carrega. Isso não é apenas irritante; é a prova visual de amadorismo técnico.</li>
      </ol>

      <h2 className="text-3xl font-serif text-white mt-16 mb-6">O Conceito de Zero-Latency</h2>
      <p>
        Enquanto o mercado luta para "passar no teste do Google", a abordagem de <strong>Sistemas Vivos</strong> busca o <em>Zero-Latency Perception</em>.
      </p>
      <p>
        <strong>Zero-Latency</strong> não é a ausência total de tempo de servidor, mas a eliminação de qualquer percepção de espera. É a transição fluida onde a interface se comporta como um software nativo, não como um documento HTML sendo baixado.
      </p>

      <h3 className="text-2xl font-serif text-white mt-12 mb-4">Por que "Sites Bonitos" não vendem se forem lentos?</h3>
      <p>
        Um design sofisticado em um site lento cria uma <strong>Dissonância Cognitiva</strong>. O usuário vê "luxo" no visual, mas sente "pobreza" na performance. O resultado é a desvalorização imediata da autoridade da marca.
      </p>

      <h2 className="text-3xl font-serif text-white mt-16 mb-6">Veredito Técnico</h2>
      <p>Para dominar a conversão em 2026, a prioridade deve ser:</p>
      <ul>
        <li><strong>Edge Delivery:</strong> Mover a lógica para a borda para reduzir o TTFB.</li>
        <li><strong>Static Generation com Hydration Inteligente:</strong> Eliminar o "estalo" de carregamento.</li>
        <li><strong>Priorização de Assets:</strong> LCP crítico renderizado antes de qualquer script de terceiros.</li>
      </ul>

      <div className="mt-16 p-10 bg-gradient-to-b from-zinc-900/20 to-zinc-900 border-t border-zinc-800 text-center rounded-sm">
        <p className="font-medium text-white text-xl font-serif italic">
          "A performance é a nova interface. Se não é instantâneo, não é autoridade."
        </p>
      </div>
    </ArticleLayout>
  );
}
