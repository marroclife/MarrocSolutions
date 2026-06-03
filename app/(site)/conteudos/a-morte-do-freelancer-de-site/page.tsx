// app/(site)/conteudos/a-morte-do-freelancer-de-site/page.tsx
// Tese 10: A Morte do Freelancer de Site

import React from 'react';
import { ArticleLayout } from '@/components/ArticleLayout';

export default function Page() {
  return (
    <ArticleLayout
      title="A Morte do Freelancer de Site"
      excerpt="A ascensão do Arquiteto de Sistemas Digitais. Por que vender 'sites' virou commodity — e o que separa o profissional transacional do arquiteto estratégico."
      publishDate="2026-06-03"
      readTime="5 min"
      tags={['Mercado', 'Freelancer', 'Arquiteto de Sistemas', 'Saliência']}
      imageUrl="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2070&auto=format&fit=crop"
      imageAlt="Transformação profissional — de freelancer a arquiteto de sistemas"
      prev={{ title: 'IA como Alavanca de Lucro', href: '/conteudos/ia-como-alavanca-de-lucro' }}
      next={{ title: 'A Psicologia da Performance', href: '/conteudos/a-psicologia-da-performance' }}
    >
      <h2 className="text-3xl font-serif text-white mt-12 mb-6">A Grande Mudança de Paradigma</h2>
      <p>
        Durante décadas, o mercado de criação de sites operou sob a lógica do <strong>"entregável"</strong>. O freelancer era contratado para criar um artefato: um site, uma landing page, um e-commerce. O sucesso era medido pela conformidade do design com o briefing e a funcionalidade básica do código.
      </p>
      <p>
        No entanto, a democratização de ferramentas <em>no-code</em> e, mais drasticamente, a ascensão da IA Generativa, transformaram o "site" em uma commodity. Se qualquer pessoa com um prompt consegue gerar uma estrutura visualmente agradável, o valor do "fazedor de sites" colapsou.
      </p>
      <p>
        <strong>O que está morrendo não é a demanda por presença digital, mas a figura do freelancer que vende páginas.</strong>
      </p>

      <h2 className="text-3xl font-serif text-white mt-16 mb-6">Arquiteto de Sistemas vs. Web Designer</h2>
      <p>
        A transição do Freelancer para o Arquiteto de Sistemas Digitais não é apenas uma mudança de título, mas de <strong>modelo mental e modelo de negócio</strong>.
      </p>
      <div className="my-12 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gold-900/30">
              <th className="text-left py-3 text-gold-500 font-serif">Dimensão</th>
              <th className="text-left py-3 text-gold-500 font-serif">Freelancer (Commodity)</th>
              <th className="text-left py-3 text-gold-500 font-serif">Arquiteto (Autoridade)</th>
            </tr>
          </thead>
          <tbody className="text-zinc-300">
            <tr className="border-b border-zinc-800/50"><td className="py-3">Foco</td><td>Estética (O "O Quê")</td><td>Fluxo, Dados, Automação (O "Como")</td></tr>
            <tr className="border-b border-zinc-800/50"><td className="py-3">Entrega</td><td>Um Site (Artefato Estático)</td><td>Ecossistema Vivo (Sistemas Dinâmicos)</td></tr>
            <tr className="border-b border-zinc-800/50"><td className="py-3">Métrica de Valor</td><td>"Ficou bonito?" / "Está no ar?"</td><td>"Quanto tempo foi economizado?" / "Qual a escala do ROI?"</td></tr>
            <tr className="border-b border-zinc-800/50"><td className="py-3">Relacionamento</td><td>Transacional (Job → Pagamento)</td><td>Estratégico (Parceria → Evolução)</td></tr>
            <tr><td className="py-3">Alavanca</td><td>Horas de Trabalho → Dinheiro</td><td>Arquitetura de IA → Eficiência Sistêmica</td></tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-3xl font-serif text-white mt-16 mb-6">A Tese do Sistema Vivo</h2>
      <p>
        O Arquiteto de Sistemas Digitais não constrói "sites"; ele projeta <strong>Sistemas Vivos</strong>.
      </p>
      <p>
        Um sistema vivo é aquele onde a interface (o site) é apenas a camada superficial de uma infraestrutura invisível de agentes, automações e fluxos de dados. Enquanto o site tradicional é um panfleto digital, o Sistema Vivo é um organismo operacional que:
      </p>
      <ol>
        <li><strong>Captura Intenção:</strong> Não apenas recebe visitas, mas qualifica leads em tempo real via IA.</li>
        <li><strong>Processa Autonomamente:</strong> Integra-se a CRMs, ERPs e ferramentas de gestão sem intervenção humana manual.</li>
        <li><strong>Evolui com Dados:</strong> Utiliza a Saliência de Entidade para dominar nichos semânticos, tornando-se a resposta definitiva para o usuário.</li>
        <li><strong>Reduz Latência Operacional:</strong> Substitui processos burocráticos por fluxos de agentes que operam em milissegundos.</li>
      </ol>

      <h2 className="text-3xl font-serif text-white mt-16 mb-6">O Novo Imperativo Técnico</h2>
      <p>
        Para o profissional do digital, a escolha é binária: ou você compete no oceano vermelho da "estética de sites", onde a IA é seu substituto, ou você ascende para a camada de arquitetura, onde a IA é sua ferramenta de escala.
      </p>
      <p>
        A autoridade técnica hoje não reside em saber <em>como</em> codificar um componente, mas em saber <em>como</em> orquestrar agentes e dados para criar vantagem competitiva real para o cliente.
      </p>

      <div className="mt-16 p-10 bg-gradient-to-b from-zinc-900/20 to-zinc-900 border-t border-zinc-800 text-center rounded-sm">
        <p className="font-medium text-white text-xl font-serif italic">
          "O site morreu. Longa vida aos Sistemas Vivos."
        </p>
      </div>
    </ArticleLayout>
  );
}
