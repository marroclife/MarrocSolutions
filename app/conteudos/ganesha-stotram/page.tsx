import React from 'react';
import { ShareButton } from '../../../components/ShareButton';
import { ArrowLeft, Calendar, Sparkles, Scroll, Music, Flower } from 'lucide-react';
import Link from 'next/link';

export default function GaneshaStotramPage() {
  const article = {
    title: 'Notas sobre o Ganesha Stotram',
    excerpt: 'Palavra, ritmo e invocação. Entenda a ciência vibracional por trás dos mantras em sânscrito e a prática completa do Sankata Nashanam.',
    publishDate: '2025-01-10',
    readTime: '6 min',
    tags: ['Mantra', 'Sânscrito', 'Tradição']
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

      <div className="w-full h-80 md:h-[450px] mb-16 overflow-hidden rounded-sm relative group">
         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
         <img 
            src="/ganesha-cyber.png" 
            alt="Ganesha Cyberpunk - Misticismo Digital" 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90"
         />
      </div>

      <div className="prose prose-invert prose-lg prose-headings:font-serif prose-headings:text-zinc-100 prose-p:text-zinc-300 prose-strong:text-white prose-li:marker:text-gold-500">
        
        <p className="lead text-xl text-zinc-200 border-l-2 border-gold-500 pl-6 mb-8">
           O <em>Sankata Nashanam Ganesha Stotram</em>, do <em>Narada Purana</em>, é um hino de invocação a Shri Ganesha: removedor de obstáculos, patrono dos começos e guardião da sabedoria.
        </p>

        <p>
          O próprio nome indica seu propósito: <strong>“o hino que destrói as dificuldades”</strong>. A recitação devocional remove impedimentos, dissipa medos e atrai bênçãos nos planos material e espiritual.
        </p>

        <h3 className="text-2xl font-serif text-white mt-12 mb-6 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-gold-500" />
            Benefícios da recitação
        </h3>
        <ul className="space-y-2">
            <li>Dissolve obstáculos visíveis e invisíveis</li>
            <li>Protege contra energias negativas</li>
            <li>Atrai prosperidade e abundância</li>
            <li>Amplia conhecimento e clareza mental</li>
            <li>Concede bênçãos para saúde, família e realização espiritual</li>
        </ul>
        
        <div className="bg-zinc-900/30 border border-zinc-800 p-6 rounded-sm my-8 text-sm text-zinc-400 italic">
          Tradição oral: recitar o stotram três vezes ao dia (manhã, meio‑dia e entardecer) cria um campo de proteção contínuo. Os efeitos são percebidos em seis meses e, em um ano, manifestam‑se plenamente.
        </div>

        <h3 className="text-2xl font-serif text-white mt-16 mb-8 flex items-center gap-2">
            <Scroll className="w-5 h-5 text-gold-500" />
            O Stotram Completo
        </h3>

        {/* Mantra Section Wrapper */}
        <div className="space-y-8 not-prose">
            
            {/* Mantra Prévio */}
            <div className="rounded-sm border border-gold-900/40 bg-gold-900/10 p-8 hover:border-gold-600/50 transition-colors relative group">
                <div className="absolute top-4 right-4 text-gold-500/20 group-hover:text-gold-500/40 transition-colors">
                    <Flower className="w-6 h-6" />
                </div>
                <div className="text-xs mb-6 text-gold-500 uppercase tracking-widest font-bold">⭐ Mantra Prévio (Rigveda 2.23.1)</div>
                
                <div className="font-serif text-2xl leading-relaxed text-zinc-100 mb-4 whitespace-pre-wrap font-medium">
                    ॐ गणानां त्वा गणपतिं हवामहे{'\n'}
                    कविं कवीनामुपमश्रवस्तमम् ।{'\n'}
                    ज्येष्ठराजं ब्रह्मणां ब्रह्मणस्पत{'\n'}
                    आ नः शृण्वन्नूतिभिः सीद सादनम् ॥
                </div>

                <div className="text-sm text-gold-400 mb-6 font-medium font-mono leading-relaxed opacity-90">
                    oṃ gaṇānāṃ tvā gaṇapatiṃ havāmahe{'\n'}
                    kaviṃ kavīnām upamaśravastamam |{'\n'}
                    jyeṣṭharājaṃ brahmaṇāṃ brahmaṇaspata{'\n'}
                    ā naḥ śṛṇvannūtibhiḥ sīda sādanam ||
                </div>

                <p className="text-zinc-300 text-sm italic border-l border-gold-600 pl-4 bg-black/20 p-3 rounded-r-sm">
                    <strong>“Om! Invocamos Você, Ganesha, líder das hostes divinas, o mais sábio entre os sábios, o mais famoso, o mais digno de louvor. Ó Senhor dos Brahmanas, o maior dos reis da sabedoria, escute nossas preces e sente-se em seu assento sagrado, concedendo-nos proteção e bênçãos.”</strong>
                </p>
            </div>

            {/* Narada Intro */}
            <div className="text-center py-8">
                <div className="font-serif text-3xl text-zinc-200 mb-2">नारद उवाच ।</div>
                <div className="text-xs text-gold-500 font-mono mb-2">nārada uvāca |</div>
                <div className="text-zinc-500 italic text-sm tracking-wide">“Disse Nārada:</div>
            </div>

            {/* Verses Loop could be cleaner, but hardcoding for clarity as requested */}
            {[
                {
                    n: 1,
                    sanskrit: "प्रणम्य शिरसा देवं गौरीपुत्रं विनायकम् ।\nभक्तावासं स्मरेन्नित्यमायुः कामार्थसिद्धये ॥१॥",
                    translit: "Pranamya shirasa devam Gauri putram Vinayakam\nBhaktavasam smaretnityam ayuh kama artha sidhaye",
                    trans: "Aquele que deseja vida longa, prosperidade e amor deve saudar com a cabeça curvada o Senhor Ganesha, filho de Gauri, morada dos devotos."
                },
                {
                    n: 2,
                    sanskrit: "प्रथमं वक्रतुण्डं च एकदन्तं द्वितीयकम् ।\nतृतीयं कृष्णपिङ्गाक्षं गजवक्त्रं चतुर्थकम् ॥२॥",
                    translit: "Prathamam Vakratundam cha, Ekadantam dwitiyakam\nTritiyam Krushna Pingaksham, Gajavaktram Chaturthakam",
                    trans: "Pense nele primeiro como o Senhor de tromba curva; depois como o de uma presa; em seguida, como aquele de olhos negro‑avermelhados; e por fim como o que possui rosto de elefante."
                },
                {
                    n: 3,
                    sanskrit: "लम्बोदरं पंचमं च षष्ठं विकटमेव च ।\nसप्तमं विघ्नराजेन्द्रं धूम्रवर्णं तथाष्टमम् ॥३॥",
                    translit: "Lambodaram Panchamam cha, Sashtam Vikatameva cha\nSaptamam Vignarajam cha, Dhoomravarnam tathashtamam",
                    trans: "Quinto, como o de ventre amplo; sexto, o temível para os inimigos; sétimo, o senhor dos obstáculos; oitavo, o de cor esfumaçada."
                },
                {
                    n: 4,
                    sanskrit: "नवमं भालचन्द्रं च दशमं तु विनायकम् ।\nएकादशं गणपतिं द्वादशं तु गजाननम् ॥४॥",
                    translit: "Navamam Bhalachandram cha, Dashamam tu Vinayakam\nEkadasham Ganapatim, Dwadasham tu Gajananam",
                    trans: "Nono, o que carrega a lua na testa; décimo, o líder que remove obstáculos; décimo primeiro, o comandante das hostes divinas; décimo segundo, o de face elefantina."
                },
                {
                    n: 5,
                    sanskrit: "द्वादशैतानि नामानि त्रिसन्ध्यं यः पठेन्नरः ।\nन च विघ्नभयं तस्य सर्वसिद्धिकरं परम् ॥५॥",
                    translit: "Dwadasaithani namani, Trisandhyam yah pathen narah\nNa cha vighna bhayam tasya, Sarvasiddhi karam param",
                    trans: "Aquele que recita estes doze nomes ao amanhecer, ao meio‑dia e ao entardecer não conhecerá medo de derrota e alcançará todas as realizações."
                },
                {
                    n: 6,
                    sanskrit: "विद्यार्थी लभते विद्यां धनार्थी लभते धनम् ।\nपुत्रार्थी लभते पुत्रान्मोक्षार्थी लभते गतिम् ॥६॥",
                    translit: "Vidhyarthi labhate Vidhyam, Danarthi labhate Dhanam\nPutrarthi labhate Putran, Moksharthi labhate Gatim",
                    trans: "O buscador de conhecimento o alcança; o que deseja riqueza a obtém; o que anseia por filhos é abençoado; e o que busca libertação encontra o caminho."
                },
                {
                    n: 7,
                    sanskrit: "जपेद्गणपतिस्तोत्रं षड्भिर्मासैः फलम् लभेत् ।\nसंवत्सरेण सिद्धिं च लभते नात्र संशयः ॥७॥",
                    translit: "Japet Ganapati stotram, Shadbhir masaih phalam labhet\nSamvatsarena siddhim cha, Labhate natra sanshayah",
                    trans: "Recitar este stotram por seis meses traz resultados visíveis; em um ano, a perfeição é alcançada — sem dúvida."
                },
                {
                    n: 8,
                    sanskrit: "अष्टभ्यो ब्राह्मणेभ्यश्च लिखित्वा यः समर्पयेत् ।\nतस्य विद्या भवेत्सर्वा गणेशस्य प्रसादतः ॥८॥",
                    translit: "Ashtabhyo Brahmanebhyascha likhitva yah samarpayet\nTasya vidya bhavetsarva, Ganeshasya prasadatah",
                    trans: "Aquele que escrever este hino e o oferecer a oito sábios, receberá todo o conhecimento pela graça de Ganesha."
                }
            ].map((verso) => (
                <div key={verso.n} className="rounded-sm border border-zinc-800 bg-zinc-900/50 p-6 hover:border-gold-900/50 transition-colors">
                    <div className="text-xs mb-3 text-zinc-500 uppercase tracking-widest font-semibold">Verso {verso.n}</div>
                    <div className="font-serif text-xl leading-relaxed text-zinc-100 mb-3 whitespace-pre-wrap">{verso.sanskrit}</div>
                    <div className="text-sm text-gold-500/80 mb-4 font-medium font-mono leading-relaxed">{verso.translit}</div>
                    <p className="text-zinc-400 text-sm italic border-l border-zinc-700 pl-4">"{verso.trans}"</p>
                </div>
            ))}

            {/* Encerramento */}
            <div className="rounded-sm border border-gold-900/30 bg-gold-900/10 p-8 mt-12 text-center">
                <div className="font-serif text-xl text-gold-200 mb-2">॥ इति श्री नारदपुराणे संकट नाशनं गणेश स्तोत्रं सम्पूर्णम् ॥</div>
                <div className="text-xs text-gold-500/70 uppercase tracking-widest">Iti Sri Narad Purane Sankat Nashanam Ganesha Stotram Sampurnam</div>
                <p className="text-zinc-400 text-sm mt-4 italic">"Isto conclui o Sankata Nashanam Ganesha Stotram do Narada Purana."</p>
            </div>
        </div>

        <h3 className="text-2xl font-serif text-white mt-12 mb-6">Como praticar</h3>
        <ol className="list-decimal pl-5 space-y-2 text-zinc-300">
            <li><strong>Local:</strong> espaço limpo e calmo, voltado para o leste.</li>
            <li><strong>Preparação:</strong> acender vela/diya e incenso de sândalo.</li>
            <li><strong>Postura:</strong> coluna ereta, atenção serena.</li>
            <li><strong>Recitação:</strong> entoar o stotram inteiro, sentindo a vibração.</li>
            <li><strong>Fechamento:</strong> 3x “Om Gam Ganapataye Namaha”.</li>
        </ol>

        <div className="mt-12 p-6 bg-zinc-900/30 border-l-2 border-gold-500">
            <h3 className="text-lg font-serif text-white m-0 mb-2 flex items-center gap-2">
                <Music className="w-4 h-4 text-gold-500" />
                O Stotram no ritual sonoro
            </h3>
            <p className="text-sm text-zinc-400 m-0">
                No Marroc, o hino pode ser acoplado a bases eletrônicas mantendo métrica e vibração originais. Em um Live Set ritualístico, o Ganesha Stotram age como <em>chave vibracional</em>, abrindo o portal para que toda a experiência sonora transcorra sem bloqueios.
            </p>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-zinc-800 flex justify-between items-center">
          <span className="text-zinc-500 text-sm">Om Gam Ganapataye Namaha</span>
          <ShareButton title={article.title} />
      </div>
    </article>
  );
}