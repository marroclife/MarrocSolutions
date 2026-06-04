import { NavItem, Article } from '@/components/types';

export const NAV_LINKS: NavItem[] = [
  { label: 'Livro', path: '/livro' },
  { label: 'Oráculo', path: '/oraculo' },
  { label: 'Projetos', path: '/projetos' },
  { label: 'Terapias', path: '/terapias' },
  { label: 'Livros', path: '/livros' },
  { label: 'Conteúdos', path: '/conteudos' }, // This is our target
  { label: 'Sobre', path: '/sobre' },
  { label: 'Contato', path: '/contato' },
];

export const ARTICLES: Article[] = [
  {
    // Tese 16 — adicionada em 03/06/2026 (vault/.../tese-psytrance-meditacao-ativa.md)
    // Não estava no PLANEJAMENTO original mas combina com Fase 2 Labs (arte+consciência).
    id: 'tese-16',
    slug: 'psytrance-como-meditacao-ativa',
    title: 'Psytrance como Meditação Ativa',
    excerpt: 'Engenharia sonora pra induzir flow state. Por que dança + ritmo elevado = meditação em movimento.',
    imageUrl: '/cases/psytrance-rave.jpg',
    publishDate: '2026-06-03',
    tags: ['Psytrance', 'Neurociência', 'Meditação Ativa', 'Flow State'],
    readTime: '5 min',
    content: ''
  },

  {
    id: 'tese-15',
    slug: 'o-algoritmo-da-criacao',
    title: 'O Algoritmo da Criação',
    excerpt: 'A união entre intuição e algoritmo. Sinfonia de Devoção & O Outro Lado. A Simbiose Algorítmica.',
    imageUrl: 'https://images.unsplash.com/photo-1543968996-ee822b8176ba?q=80&w=2070&auto=format&fit=crop',
    publishDate: '2026-06-03',
    tags: ['Arte Generativa', 'Intuição', 'Simbiose Algorítmica', 'Sintetista'],
    content: '',
    readTime: '5 min'
  },

  {
    id: 'tese-14',
    slug: 'a-sinergia-entre-hertz-e-bits',
    title: 'A Sinergia entre Hertz e Bits',
    excerpt: 'A convergência entre frequências sonoras, arte generativa e experiências imersivas.',
    imageUrl: 'https://images.unsplash.com/photo-1518972559570-7cc1309f3229?q=80&w=2070&auto=format&fit=crop',
    publishDate: '2026-06-03',
    tags: ['Arte Generativa', 'Hertz & Bits', 'Imersão', 'Sinergia Vibracional'],
    content: '',
    readTime: '5 min'
  },

  {
    id: 'tese-13',
    slug: 'soberania-cognitiva-na-era-da-ia',
    title: 'Soberania Cognitiva na Era da IA',
    excerpt: 'Essência humana vs. delegação operacional. O risco civilizatório não é a substituição — é a atrofia cognitiva.',
    imageUrl: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2070&auto=format&fit=crop',
    publishDate: '2026-06-03',
    tags: ['IA', 'Soberania Cognitiva', 'Autonomia', 'Futuro do Trabalho'],
    content: '',
    readTime: '6 min'
  },

  {
    id: 'tese-12',
    slug: 'a-matematica-da-cura-432hz',
    title: 'A Matemática da Cura 432Hz',
    excerpt: 'A precisão do código e a ressonância de 432Hz. Por que C5 = 256Hz é uma potência de 2 — arquitetura como cura.',
    imageUrl: 'https://images.unsplash.com/photo-1471478331149-c72f17e33c73?q=80&w=2070&auto=format&fit=crop',
    publishDate: '2026-06-03',
    tags: ['Frequência', 'Cura', '432Hz', 'Sistemas Vivos'],
    content: '',
    readTime: '5 min'
  },

  {
    id: 'tese-11',
    slug: 'a-psicologia-da-performance',
    title: 'A Psicologia da Performance',
    excerpt: 'Como a velocidade impacta a percepção de valor. Performance real vs. percebida — a distinção que define a conversão.',
    imageUrl: 'https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?q=80&w=2070&auto=format&fit=crop',
    publishDate: '2026-06-03',
    tags: ['Performance', 'Psicologia', 'UX', 'Authority Signaling'],
    content: '',
    readTime: '6 min'
  },

  {
    id: 'tese-10',
    slug: 'a-morte-do-freelancer-de-site',
    title: 'A Morte do Freelancer de Site',
    excerpt: 'A ascensão do Arquiteto de Sistemas Digitais. Por que vender sites virou commodity.',
    imageUrl: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2070&auto=format&fit=crop',
    publishDate: '2026-06-03',
    tags: ['Mercado', 'Freelancer', 'Arquiteto de Sistemas', 'Saliência'],
    content: '',
    readTime: '5 min'
  },

  {
    id: 'tese-09',
    slug: 'ia-como-alavanca-de-lucro',
    title: 'IA como Alavanca de Lucro',
    excerpt: 'Além da redução de custos. Por que tratar IA como cortador de despesas é jogar na defesa.',
    imageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2070&auto=format&fit=crop',
    publishDate: '2026-06-03',
    tags: ['IA', 'Lucro', 'Receita', 'Hiper-Personalização'],
    content: '',
    readTime: '6 min'
  },

  {
    id: 'tese-08',
    slug: 'sistemas-vivos-digitais',
    title: 'Sistemas Vivos Digitais',
    excerpt: 'Além da automação, a evolução em tempo real. O que diferencia um sistema que funciona de um que aprende e evolui.',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2070&auto=format&fit=crop',
    publishDate: '2026-06-03',
    tags: ['Sistemas Vivos', 'IA', 'Auto-Otimização', 'Ecossistemas'],
    content: '',
    readTime: '6 min'
  },

  {
    id: 'tese-07',
    slug: 'escalabilidade-sem-perda-de-qualidade',
    title: 'Escalabilidade sem Perda de Qualidade',
    excerpt: 'A arquitetura de agentes como motor de crescimento exponencial. Escalar com prompts isolados cria ruído.',
    imageUrl: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=2070&auto=format&fit=crop',
    publishDate: '2026-06-03',
    tags: ['Escalabilidade', 'Agentes', 'Sistemas Vivos'],
    content: '',
    readTime: '6 min'
  },

  {
    id: 'tese-06',
    slug: 'orquestracao-de-agentes-vs-chatbots',
    title: 'Orquestração de Agentes vs. Chatbots',
    excerpt: 'A diferença entre perguntar e operar. Chatbots são oráculos — agentes são unidades de execução.',
    imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2070&auto=format&fit=crop',
    publishDate: '2026-06-03',
    tags: ['IA', 'Agentes', 'Chatbots', 'Orquestração'],
    content: '',
    readTime: '6 min'
  },

  {
    id: 'tese-05',
    slug: 'a-transicao-para-a-operacao-autonoma',
    title: 'A Transição para a Operação Autônoma',
    excerpt: 'Do processo manual ao fluxo de agentes IA. Por que automação linear é o oposto de operação autônoma.',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop',
    publishDate: '2026-06-03',
    tags: ['IA', 'Agentes', 'Operação Autônoma', 'Sistemas Vivos'],
    content: '',
    readTime: '6 min'
  },

  {
    id: 'tese-04',
    slug: 'o-erro-das-agencias-tradicionais',
    title: 'O Erro das Agências Tradicionais',
    excerpt: 'Abordagem sistêmica vs. templates. Por que vender "sites" é vender commodity — e o que separa o arquiteto.',
    imageUrl: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop',
    publishDate: '2026-06-03',
    tags: ['Agências', 'Sistemas Vivos', 'Abordagem Sistêmica', 'Templates'],
    content: '',
    readTime: '7 min'
  },

  {
    id: 'tese-03',
    slug: 'core-web-vitals-conversao',
    title: 'Core Web Vitals & Conversão',
    excerpt: 'A matemática do Zero-Latency nas vendas. Por que performance não é sobre SEO — é sobre psicologia do consumo.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    publishDate: '2026-06-03',
    tags: ['Performance', 'Conversão', 'Core Web Vitals', 'Zero-Latency'],
    content: '',
    readTime: '6 min'
  },

  {
    id: 'tese-02',
    slug: 'a-anatomia-da-saliencia-de-entidade',
    title: 'A Anatomia da Saliência de Entidade',
    excerpt: 'Do keyword stuffing ao mapeamento semântico de autoridade. Como ser a fonte autoritativa que o Google reconhece.',
    imageUrl: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2070&auto=format&fit=crop',
    publishDate: '2026-06-03',
    tags: ['SEO', 'Saliência', 'Knowledge Graph', 'Autoridade'],
    content: '',
    readTime: '7 min'
  },

  {
    id: 'tese-01',
    slug: 'o-fim-do-site-estatico',
    title: 'O Fim do Site Estático',
    excerpt: 'A transição do panfleto digital para o Sistema Vivo. Por que beleza sem performance é apenas ruído visual.',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop',
    publishDate: '2026-06-03',
    tags: ['Saliência', 'SEO', 'Sistemas Vivos', 'Performance'],
    content: '',
    readTime: '6 min'
  },

  {
    id: 'sungazing',
    slug: 'sungazing',
    title: 'Sungazing: A Alimentação pelo Sol',
    excerpt: 'Descubra a antiga prática de absorção da energia solar e como ela pode reconfigurar sua biologia e a glândula pineal.',
    content: `
      <p>O sol não é apenas uma estrela física geradora de calor; na visão das tradições antigas, ele é um <strong>transmissor de dados</strong>. O Sungazing (ou contemplação solar) é uma tecnologia ancestral redescoberta que propõe que o corpo humano é uma célula fotovoltaica biológica, capaz de converter energia solar diretamente em vitalidade e clareza mental.</p>
      
      <h3>A Ciência Oculta</h3>
      <p>Quando a luz solar atinge a retina em horários específicos (baixa radiação UV), ela viaja pelo nervo óptico e ativa o hipotálamo e a glândula pineal. A pineal, frequentemente chamada de "Terceiro Olho", é responsável pela produção de melatonina e serotonina, regulando nossos ciclos circadianos e estados de consciência.</p>
      
      <h3>O Protocolo de Segurança</h3>
      <p>A prática exige rigor e respeito aos ciclos naturais. Não se deve olhar para o sol quando ele está forte. O protocolo seguro (baseado no método HRM) sugere:</p>
      
      <ul>
        <li><strong>A Janela Segura:</strong> A prática deve ser feita estritamente na primeira hora após o nascer do sol ou na última hora antes do pôr do sol. Nestes momentos, o índice UV é zero ou muito baixo.</li>
        <li><strong>Earthing (Aterramento):</strong> É essencial estar com os pés descalços na terra (areia ou grama) durante a prática para fechar o circuito eletromagnético.</li>
        <li><strong>Progressão Lenta:</strong> Comece com apenas 10 segundos no primeiro dia. Aumente 10 segundos por dia. Após um mês, você estará praticando por 5 minutos.</li>
      </ul>

      <blockquote>"O olho é a lâmpada do corpo. Se o teu olho for bom, todo o teu corpo terá luz." — Mateus 6:22</blockquote>

      <h3>Benefícios Relatados</h3>
      <p>Praticantes experientes relatam diminuição da ansiedade, aumento da clareza mental, decalcificação da pineal e uma sensação profunda de conexão com o todo. É uma forma de nutrição prânica que complementa a alimentação física.</p>
    `,
    imageUrl: 'https://images.unsplash.com/photo-1502481851512-e9e2529bfbf9?q=80&w=2069&auto=format&fit=crop',
    publishDate: '2023-10-27',
    tags: ['Biohacking', 'Espiritualidade', 'Energia'],
    readTime: '5 min'
  },

  {
    id: 'agua-solarizada',
    slug: 'agua-solarizada',
    title: 'Água Solarizada: Cromoterapia Líquida',
    excerpt: 'A ciência e a mística por trás da água energizada pelo sol. Como utilizar as cores para equilibrar chakras e curar o corpo sutil.',
    content: `
      <p>A água tem memória. Estudos de <em>Masaru Emoto</em> e tradições alquímicas sugerem que a estrutura molecular da água pode ser alterada por vibrações, intenções e luz. A Água Solarizada é uma técnica simples de cromoterapia que une o poder condutor da água com a frequência vibratória das cores e a energia vital do sol.</p>

      <h3>Como Funciona</h3>
      <p>Ao expor a água ao sol dentro de um recipiente de vidro colorido, a luz atravessa o vidro e a água absorve a frequência daquela cor específica. Ao bebermos essa água, estamos ingerindo aquela frequência vibratória, que atua nos nossos centros de energia (chakras).</p>

      <h3>O Significado das Cores</h3>
      <ul>
        <li><strong>Azul (Solarização Lunar):</strong> A mais comum. Tem efeito calmante, analgésico e equilibrador. Ótima para ansiedade, insônia e para "esfriar" excessos de calor no corpo. Atua no Chakra Laríngeo.</li>
        <li><strong>Verde:</strong> A cor da cura física e do equilíbrio. Remove toxinas e energias estagnadas. Atua no Chakra Cardíaco.</li>
        <li><strong>Âmbar/Laranja:</strong> Cor da coragem, criatividade e energia sexual. Revigorante. Atua no Chakra Sacral.</li>
        <li><strong>Violeta:</strong> Transmutação e espiritualidade. Ideal para momentos de meditação profunda. Atua no Chakra Coronário.</li>
      </ul>

      <h3>Como Preparar</h3>
      <ol>
        <li>Utilize uma garrafa de <strong>vidro</strong> (nunca plástico) da cor desejada. Se não tiver vidro colorido, envolva um vidro transparente em papel celofane da cor escolhida.</li>
        <li>Encha com água mineral ou filtrada.</li>
        <li>Deixe exposta ao sol (sem a tampa ou com um tecido cobrindo a boca para respirar) por 1h (sol forte) a 3h (sol fraco).</li>
        <li>Beba ao longo do dia.</li>
      </ol>

      <p>Esta é uma tecnologia simples, mas profunda, de realinhamento vibracional disponível gratuitamente pela natureza.</p>
    `,
    imageUrl: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?q=80&w=1888&auto=format&fit=crop',
    publishDate: '2023-10-28',
    tags: ['Cura', 'Alquimia', 'Prática'],
    readTime: '3 min'
  },
  // ===== 15 TESES MARROC SOLUTIONS SEO =====
  // Adicionadas em 03/06/2026. Cada tese vive em /conteudos/[slug] como página silo.,

  {
    id: 'ganesha-stotram',
    slug: 'ganesha-stotram',
    title: 'Notas sobre o Ganesha Stotram',
    excerpt: 'Palavra, ritmo e invocação. Entenda a ciência vibracional por trás dos mantras em sânscrito e a prática completa do Sankata Nashanam.',
    content: `
      <p>O <em>Sankata Nashanam Ganesha Stotram</em>, do <em>Narada Purana</em>, é um hino de invocação a Shri Ganesha: removedor de obstáculos, patrono dos começos e guardião da sabedoria.</p>
      <p>O próprio nome indica seu propósito: <strong>“o hino que destrói as dificuldades”</strong>. A recitação devocional remove impedimentos, dissipa medos e atrai bênçãos nos planos material e espiritual.</p>

      <h3>Benefícios da recitação</h3>
      <ul>
        <li>Dissolve obstáculos visíveis e invisíveis</li>
        <li>Protege contra energias negativas</li>
        <li>Atrai prosperidade e abundância</li>
        <li>Amplia conhecimento e clareza mental</li>
        <li>Concede bênçãos para saúde, família e realização espiritual</li>
      </ul>
      <p><em>Tradição oral: recitar o stotram três vezes ao dia (manhã, meio‑dia e entardecer) cria um campo de proteção contínuo. Os efeitos são percebidos em seis meses e, em um ano, manifestam‑se plenamente.</em></p>

      <h3>O Stotram completo</h3>
      <div class="space-y-6 not-prose my-8">
        
        <!-- MANTRA PRÉVIO -->
        <div class="rounded-sm border border-gold-900/40 bg-gold-900/10 p-6 hover:border-gold-600/50 transition-colors relative">
           <div class="absolute top-4 right-4 text-gold-500/20">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
           </div>
           <div class="text-xs mb-4 text-gold-500 uppercase tracking-widest font-bold">⭐ Mantra Prévio (Rigveda 2.23.1)</div>
           
           <div class="font-serif text-xl leading-relaxed text-zinc-100 mb-4 whitespace-pre-wrap">ॐ गणानां त्वा गणपतिं हवामहे
कविं कवीनामुपमश्रवस्तमम् ।
ज्येष्ठराजं ब्रह्मणां ब्रह्मणस्पत
आ नः शृण्वन्नूतिभिः सीद सादनम् ॥</div>

           <div class="text-sm text-gold-500 mb-4 font-medium font-mono leading-relaxed">oṃ gaṇānāṃ tvā gaṇapatiṃ havāmahe
kaviṃ kavīnām upamaśravastamam |
jyeṣṭharājaṃ brahmaṇāṃ brahmaṇaspata
ā naḥ śṛṇvannūtibhiḥ sīda sādanam ||</div>

           <p class="text-zinc-300 text-sm italic border-l border-gold-600 pl-4 bg-black/20 p-2 rounded-r-sm">
             <strong>“Om! Invocamos Você, Ganesha, líder das hostes divinas, o mais sábio entre os sábios, o mais famoso, o mais digno de louvor. Ó Senhor dos Brahmanas, o maior dos reis da sabedoria, escute nossas preces e sente-se em seu assento sagrado, concedendo-nos proteção e bênçãos.”</strong>
           </p>
        </div>

        <!-- NARADA UVACA -->
        <div class="text-center py-6">
            <div class="font-serif text-2xl text-zinc-200 mb-1">नारद उवाच ।</div>
            <div class="text-xs text-gold-500 font-mono mb-2">nārada uvāca |</div>
            <div class="text-zinc-500 italic text-sm tracking-wide">“Disse Nārada:</div>
        </div>

        <!-- Verso 1 -->
        <div class="rounded-sm border border-zinc-800 bg-zinc-900/50 p-6 hover:border-gold-900/50 transition-colors">
          <div class="text-xs mb-3 text-zinc-500 uppercase tracking-widest font-semibold">Verso 1</div>
          <div class="font-serif text-xl leading-relaxed text-zinc-100 mb-3 whitespace-pre-wrap">प्रणम्य शिरसा देवं गौरीपुत्रं विनायकम् ।
भक्तावासं स्मरेन्नित्यमायुः कामार्थसिद्धये ॥१॥</div>
          <div class="text-sm text-gold-500 mb-4 font-medium font-mono leading-relaxed">Pranamya shirasa devam Gauri putram Vinayakam
Bhaktavasam smaretnityam ayuh kama artha sidhaye</div>
          <p class="text-zinc-400 text-sm italic border-l border-zinc-700 pl-4">"Aquele que deseja vida longa, prosperidade e amor deve saudar com a cabeça curvada o Senhor Ganesha, filho de Gauri, morada dos devotos."</p>
        </div>

        <!-- Verso 2 -->
        <div class="rounded-sm border border-zinc-800 bg-zinc-900/50 p-6 hover:border-gold-900/50 transition-colors">
          <div class="text-xs mb-3 text-zinc-500 uppercase tracking-widest font-semibold">Verso 2</div>
          <div class="font-serif text-xl leading-relaxed text-zinc-100 mb-3 whitespace-pre-wrap">प्रथमं वक्रतुण्डं च एकदन्तं द्वितीयकम् ।
तृतीयं कृष्णपिङ्गाक्षं गजवक्त्रं चतुर्थकम् ॥२॥</div>
          <div class="text-sm text-gold-500 mb-4 font-medium font-mono leading-relaxed">Prathamam Vakratundam cha, Ekadantam dwitiyakam
Tritiyam Krushna Pingaksham, Gajavaktram Chaturthakam</div>
          <p class="text-zinc-400 text-sm italic border-l border-zinc-700 pl-4">"Pense nele primeiro como o Senhor de tromba curva; depois como o de uma presa; em seguida, como aquele de olhos negro‑avermelhados; e por fim como o que possui rosto de elefante."</p>
        </div>

        <!-- Verso 3 -->
        <div class="rounded-sm border border-zinc-800 bg-zinc-900/50 p-6 hover:border-gold-900/50 transition-colors">
          <div class="text-xs mb-3 text-zinc-500 uppercase tracking-widest font-semibold">Verso 3</div>
          <div class="font-serif text-xl leading-relaxed text-zinc-100 mb-3 whitespace-pre-wrap">लम्बोदरं पंचमं च षष्ठं विकटमेव च ।
सप्तमं विघ्नराजेन्द्रं धूम्रवर्णं तथाष्टमम् ॥३॥</div>
          <div class="text-sm text-gold-500 mb-4 font-medium font-mono leading-relaxed">Lambodaram Panchamam cha, Sashtam Vikatameva cha
Saptamam Vignarajam cha, Dhoomravarnam tathashtamam</div>
          <p class="text-zinc-400 text-sm italic border-l border-zinc-700 pl-4">"Quinto, como o de ventre amplo; sexto, o temível para os inimigos; sétimo, o senhor dos obstáculos; oitavo, o de cor esfumaçada."</p>
        </div>

        <!-- Verso 4 -->
        <div class="rounded-sm border border-zinc-800 bg-zinc-900/50 p-6 hover:border-gold-900/50 transition-colors">
          <div class="text-xs mb-3 text-zinc-500 uppercase tracking-widest font-semibold">Verso 4</div>
          <div class="font-serif text-xl leading-relaxed text-zinc-100 mb-3 whitespace-pre-wrap">नवमं भालचन्द्रं च दशमं तु विनायकम् ।
एकादशं गणपतिं द्वादशं तु गजाननम् ॥४॥</div>
          <div class="text-sm text-gold-500 mb-4 font-medium font-mono leading-relaxed">Navamam Bhalachandram cha, Dashamam tu Vinayakam
Ekadasham Ganapatim, Dwadasham tu Gajananam</div>
          <p class="text-zinc-400 text-sm italic border-l border-zinc-700 pl-4">"Nono, o que carrega a lua na testa; décimo, o líder que remove obstáculos; décimo primeiro, o comandante das hostes divinas; décimo segundo, o de face elefantina."</p>
        </div>

        <!-- Verso 5 -->
        <div class="rounded-sm border border-zinc-800 bg-zinc-900/50 p-6 hover:border-gold-900/50 transition-colors">
          <div class="text-xs mb-3 text-zinc-500 uppercase tracking-widest font-semibold">Verso 5</div>
          <div class="font-serif text-xl leading-relaxed text-zinc-100 mb-3 whitespace-pre-wrap">द्वादशैतानि नामानि त्रिसन्ध्यं यः पठेन्नरः ।
न च विघ्नभयं तस्य सर्वसिद्धिकरं परम् ॥५॥</div>
          <div class="text-sm text-gold-500 mb-4 font-medium font-mono leading-relaxed">Dwadasaithani namani, Trisandhyam yah pathen narah
Na cha vighna bhayam tasya, Sarvasiddhi karam param</div>
          <p class="text-zinc-400 text-sm italic border-l border-zinc-700 pl-4">"Aquele que recita estes doze nomes ao amanhecer, ao meio‑dia e ao entardecer não conhecerá medo de derrota e alcançará todas as realizações."</p>
        </div>

        <!-- Verso 6 -->
        <div class="rounded-sm border border-zinc-800 bg-zinc-900/50 p-6 hover:border-gold-900/50 transition-colors">
          <div class="text-xs mb-3 text-zinc-500 uppercase tracking-widest font-semibold">Verso 6</div>
          <div class="font-serif text-xl leading-relaxed text-zinc-100 mb-3 whitespace-pre-wrap">विद्यार्थी लभते विद्यां धनार्थी लभते धनम् ।
पुत्रार्थी लभते पुत्रान्मोक्षार्थी लभते गतिम् ॥६॥</div>
          <div class="text-sm text-gold-500 mb-4 font-medium font-mono leading-relaxed">Vidhyarthi labhate Vidhyam, Danarthi labhate Dhanam
Putrarthi labhate Putran, Moksharthi labhate Gatim</div>
          <p class="text-zinc-400 text-sm italic border-l border-zinc-700 pl-4">"O buscador de conhecimento o alcança; o que deseja riqueza a obtém; o que anseia por filhos é abençoado; e o que busca libertação encontra o caminho."</p>
        </div>

        <!-- Verso 7 -->
        <div class="rounded-sm border border-zinc-800 bg-zinc-900/50 p-6 hover:border-gold-900/50 transition-colors">
          <div class="text-xs mb-3 text-zinc-500 uppercase tracking-widest font-semibold">Verso 7</div>
          <div class="font-serif text-xl leading-relaxed text-zinc-100 mb-3 whitespace-pre-wrap">जपेद्गणपतिस्तोत्रं षड्भिर्मासैः फलम् लभेत् ।
संवत्सरेण सिद्धिं च लभते नात्र संशयः ॥७॥</div>
          <div class="text-sm text-gold-500 mb-4 font-medium font-mono leading-relaxed">Japet Ganapati stotram, Shadbhir masaih phalam labhet
Samvatsarena siddhim cha, Labhate natra sanshayah</div>
          <p class="text-zinc-400 text-sm italic border-l border-zinc-700 pl-4">"Recitar este stotram por seis meses traz resultados visíveis; em um ano, a perfeição é alcançada — sem dúvida."</p>
        </div>

        <!-- Verso 8 -->
        <div class="rounded-sm border border-zinc-800 bg-zinc-900/50 p-6 hover:border-gold-900/50 transition-colors">
          <div class="text-xs mb-3 text-zinc-500 uppercase tracking-widest font-semibold">Verso 8</div>
          <div class="font-serif text-xl leading-relaxed text-zinc-100 mb-3 whitespace-pre-wrap">अष्टभ्यो ब्राह्मणेभ्यश्च लिखित्वा यः समर्पयेत् ।
तस्य विद्या भवेत्सर्वा गणेशस्य प्रसादतः ॥८॥</div>
          <div class="text-sm text-gold-500 mb-4 font-medium font-mono leading-relaxed">Ashtabhyo Brahmanebhyascha likhitva yah samarpayet
Tasya vidya bhavetsarva, Ganeshasya prasadatah</div>
          <p class="text-zinc-400 text-sm italic border-l border-zinc-700 pl-4">"Aquele que escrever este hino e o oferecer a oito sábios, receberá todo o conhecimento pela graça de Ganesha."</p>
        </div>

        <!-- Encerramento -->
        <div class="rounded-sm border border-gold-900/30 bg-gold-900/10 p-6 mt-8 text-center">
            <div class="font-serif text-lg text-gold-200 mb-2">॥ इति श्री नारदपुराणे संकट नाशनं गणेश स्तोत्रं सम्पूर्णम् ॥</div>
            <div class="text-xs text-gold-500/70 uppercase tracking-widest">Iti Sri Narad Purane Sankat Nashanam Ganesha Stotram Sampurnam</div>
            <p class="text-zinc-400 text-sm mt-2 italic">"Isto conclui o Sankata Nashanam Ganesha Stotram do Narada Purana."</p>
        </div>

      </div>

      <h3>Como praticar</h3>
      <ol>
        <li><strong>Local:</strong> espaço limpo e calmo, voltado para o leste.</li>
        <li><strong>Preparação:</strong> acender vela/diya e incenso de sândalo.</li>
        <li><strong>Postura:</strong> coluna ereta, atenção serena.</li>
        <li><strong>Recitação:</strong> entoar o stotram inteiro, sentindo a vibração.</li>
        <li><strong>Fechamento:</strong> 3x “Om Gam Ganapataye Namaha”.</li>
      </ol>

      <h3>O Stotram no ritual sonoro</h3>
      <p>No Marroc, o hino pode ser acoplado a bases eletrônicas mantendo métrica e vibração originais, expandindo‑o para um campo coletivo. Em um Live Set ritualístico, o Ganesha Stotram age como <em>chave vibracional</em>, abrindo o portal para que toda a experiência sonora transcorra sem bloqueios.</p>
    `,
    imageUrl: '/ganesha-stotram-hero.jpg', // Shri Ganesha dourado com diyas e pétalas (03/06/2026)
    publishDate: '2025-01-10',
    tags: ['Mantra', 'Sânscrito', 'Tradição'],
    readTime: '6 min'
  },

  {
    id: 'manifesto-som-ritual',
    slug: 'manifesto-som-ritual',
    title: 'Manifesto do Som Ritual',
    excerpt: 'Música não é entretenimento. É portal. O som é uma ferramenta de arquitetura da realidade e engenharia vibracional.',
    content: `
      <p class="text-xl font-serif text-zinc-100 leading-relaxed mb-8">
        É a ponte entre o invisível e o visível, entre o que sentimos e o que ainda não conseguimos dizer. O Som Ritual nasce da lembrança de que, antes das palavras, havia ritmo. Antes das histórias, havia canto. Antes da razão, havia transe.
      </p>

      <div class="my-12 relative pl-6 border-l border-gold-500/50">
           <p class="text-lg text-zinc-300 italic font-light leading-relaxed">"Cada frequência, cada batida, cada mantra, é um fio que tece a consciência em padrões sagrados. O tambor desperta a memória da Terra. O sopro carrega o chamado do vento. A voz abre portais no coração."</p>
      </div>

      <div class="bg-zinc-900/50 border border-zinc-800 p-8 my-12 rounded-sm hover:border-gold-900/30 transition-colors duration-500 not-prose">
        <div class="flex items-center gap-3 mb-4">
            <span class="w-2 h-2 rounded-full bg-gold-500 animate-pulse"></span>
            <h3 class="text-gold-500 uppercase tracking-widest text-xs font-bold m-0">O Templo</h3>
        </div>
        <p class="text-zinc-200 leading-relaxed text-lg font-serif">
          No Marroc, a pista de dança é um templo. O público, um círculo sagrado. As luzes, oferendas ao mistério. E cada set é um ritual vivo — onde a tecnologia encontra o espírito, e o corpo se torna veículo da transformação.
        </p>
      </div>

      <h3 class="text-xl font-serif text-white mb-4 mt-12">Ciência e Magia</h3>
      
      <p>Para além da poesia, existe a física. O universo não é feito de matéria; ele é feito de música. A física quântica e as tradições védicas concordam em um ponto fundamental: tudo é vibração.</p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
          <div class="p-6 bg-zinc-900/30 border border-zinc-800 hover:border-zinc-600 transition-colors rounded-sm group">
              <h4 class="text-gold-400 font-serif text-lg mb-2 group-hover:text-gold-300">Cimática</h4>
              <p class="text-sm text-zinc-400 leading-relaxed">O som organiza a matéria. Frequências específicas criam geometria sagrada na água e na areia. Somos 70% água; o som intencional reestrutura nossa biologia celular.</p>
          </div>
          <div class="p-6 bg-zinc-900/30 border border-zinc-800 hover:border-zinc-600 transition-colors rounded-sm group">
              <h4 class="text-gold-400 font-serif text-lg mb-2 group-hover:text-gold-300">Arrastamento Neural</h4>
              <p class="text-sm text-zinc-400 leading-relaxed">O uso de BPMs específicos arrasta as ondas cerebrais de Beta (vigília/stress) para Theta (transe profundo). É o xamanismo digital em ação.</p>
          </div>
      </div>

      <p>O Som Ritual é essa engenharia vibracional, codificada para mover energia, liberar bloqueios e ancorar estados elevados de presença.</p>

      <div class="mt-12 p-8 bg-gradient-to-b from-transparent to-zinc-900 border-t border-zinc-800 text-center">
        <p class="font-medium text-white text-lg font-serif italic">"Não estamos aqui para apenas tocar música. Estamos aqui para invocar. Para lembrar que dançar é orar, que cantar é curar, que viver é, acima de tudo, um rito."</p>
      </div>
    `,
    imageUrl: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2070&auto=format&fit=crop', // Sound waves/music vibe
    publishDate: '2025-01-15',
    tags: ['Música', 'Frequência', 'Ritual'],
    readTime: '4 min'
  }

];