// app/(site)/conteudos/a-anatomia-da-saliencia-de-entidade/page.tsx
// Tese 02: A Anatomia da Saliência de Entidade

import React from 'react';
import { ArticleLayout } from '@/components/ArticleLayout';

export default function Page() {
  return (
    <ArticleLayout
      title="A Anatomia da Saliência de Entidade"
      excerpt="Do keyword stuffing ao mapeamento semântico de autoridade. Como ser a fonte autoritativa que o Google reconhece — não mais um site que repete palavras."
      publishDate="2026-06-03"
      readTime="7 min"
      tags={['SEO', 'Saliência', 'Knowledge Graph', 'Autoridade']}
      imageUrl="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2070&auto=format&fit=crop"
      imageAlt="Conexões em grafo de conhecimento — representação visual de Saliência de Entidade"
      prev={{ title: 'O Fim do Site Estático', href: '/conteudos/o-fim-do-site-estatico' }}
      next={{ title: 'Core Web Vitals & Conversão', href: '/conteudos/core-web-vitals-conversao' }}
    >
      <h2 className="text-3xl font-serif text-white mt-12 mb-6">A Mudança de Paradigma</h2>
      <p>
        O SEO tradicional morreu no momento em que o Google deixou de ser um indexador de strings (sequências de caracteres) para se tornar um indexador de <strong>coisas (entidades)</strong>. No cenário atual, o algoritmo não busca mais a repetição de uma palavra-chave, mas a confirmação de que você <strong>é</strong> a entidade que representa a autoridade máxima sobre um tópico.
      </p>
      <p>
        <strong>Saliência de Entidade</strong> não é sobre "falar muito" de um assunto, mas sobre a força da conexão semântica entre a sua marca (Entidade A) e o conceito técnico (Entidade B) dentro do Grafo de Conhecimento do Google.
      </p>

      <h2 className="text-3xl font-serif text-white mt-16 mb-6">O que é Saliência de Entidade?</h2>
      <p>
        Tecnicamente, a saliência é a medida de quão central uma entidade é em relação ao tópico de um documento. Se você escreve sobre "Sistemas Vivos" e o Google consegue conectar esse termo a "Automação de Processos", "IA Generativa" e "Eficiência Operacional" com alta precisão, sua saliência aumenta.
      </p>
      <p>
        Para dominar um nicho, você não precisa de 100 artigos genéricos; você precisa de uma <strong>estratégia de saliência</strong>, onde cada peça de conteúdo reforça a posição da sua entidade como o "nó central" daquele ecossistema.
      </p>

      <h2 className="text-3xl font-serif text-white mt-16 mb-6">Os 3 Pilares da Autoridade Técnica</h2>

      <h3 className="text-2xl font-serif text-white mt-12 mb-4">1. Precisão Semântica (NLP e LSI)</h3>
      <p>
        Não usamos sinônimos por acaso. Utilizamos a linguagem que a IA do Google espera encontrar em um especialista.
      </p>
      <ul>
        <li><strong>Termos de Apoio:</strong> Se falo de "Zero-Latency", devo obrigatoriamente conectar isso a "Core Web Vitals", "TTFB" e "Edge Computing".</li>
        <li><strong>Densidade de Entidades:</strong> Aumentar a proporção de entidades reconhecidas pelo Google (via Wikidata/Knowledge Graph) em relação a palavras comuns.</li>
      </ul>

      <h3 className="text-2xl font-serif text-white mt-12 mb-4">2. Estrutura de Dados (Schema Markup)</h3>
      <p>O conteúdo humano é para conversão; o Schema Markup é para a máquina.</p>
      <ul>
        <li><strong>SameAs:</strong> Conectar a entidade da empresa a perfis oficiais, Wikidata e outras fontes de verdade.</li>
        <li><strong>Entity Linking:</strong> Uso estratégico de links internos que não servem apenas para navegação, mas para definir a hierarquia de conceitos (Tópico Pai → Tópico Filho).</li>
      </ul>

      <h3 className="text-2xl font-serif text-white mt-12 mb-4">3. Sinais de Confiança Externos (E-E-A-T)</h3>
      <p>A saliência não é construída apenas dentro do site. Ela é validada externamente.</p>
      <ul>
        <li><strong>Menções Não-Linkadas:</strong> Quando marcas de autoridade citam o nome da empresa associado ao tópico, mesmo sem link, o Google reforça a conexão entre as entidades.</li>
        <li><strong>Saliência Cross-Platform:</strong> A presença consistente do mesmo discurso técnico no LinkedIn, Medium e sites de nicho cria um "consenso digital".</li>
      </ul>

      <h2 className="text-3xl font-serif text-white mt-16 mb-6">Veredito: Saturar → Validar → Dominar</h2>
      <p>
        Para ser a autoridade máxima, a abordagem deve ser: <strong>Saturar o Grafo → Validar a Entidade → Dominar a Intenção.</strong>
      </p>
      <p>
        Sair da "briga por cliques" e entrar na "estratégia de definição". Quem define o conceito do nicho para a IA é quem detém a maior saliência de entidade. No final, o SEO deixa de ser sobre truques de ranking e passa a ser sobre a <strong>verdade sistêmica</strong> da sua marca no ecossistema digital.
      </p>
    </ArticleLayout>
  );
}
