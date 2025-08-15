// app/conteudos/ganesha-stotram/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notas sobre o Ganesha Stotram — Palavra, Ritmo e Invocação",
  description:
    "Estudo do Sankata Nashanam Ganesha Stotram: significado, benefícios, versos completos e aplicação no ritual sonoro.",
};

type Verso = {
  sanskrit: string;
  translit: string;
  trad: string;
};

const VERSOS: Verso[] = [
  {
    sanskrit:
      "प्रणम्य शिरसा देवं गौरीपुत्रं विनायकम् ।\nभक्तावासं स्मरेन्नित्यमायुः कामार्थसिद्धये ॥१॥",
    translit:
      "Pranamya shirasa devam Gauri putram Vinayakam\nBhaktavasam smaretnityam ayuh kama artha sidhaye",
    trad:
      "Aquele que deseja vida longa, prosperidade e amor deve saudar com a cabeça curvada o Senhor Ganesha, filho de Gauri, morada dos devotos.",
  },
  {
    sanskrit:
      "प्रथमं वक्रतुण्डं च एकदन्तं द्वितीयकम् ।\nतृतीयं कृष्णपिङ्गाक्षं गजवक्त्रं चतुर्थकम् ॥२॥",
    translit:
      "Prathamam Vakratundam cha, Ekadantam dwitiyakam\nTritiyam Krushna Pingaksham, Gajavaktram Chaturthakam",
    trad:
      "Pense nele primeiro como o Senhor de tromba curva; depois como o de uma presa; em seguida, como aquele de olhos negro‑avermelhados; e por fim como o que possui rosto de elefante.",
  },
  {
    sanskrit:
      "लम्बोदरं पंचमं च षष्ठं विकटमेव च ।\nसप्तमं विघ्नराजेन्द्रं धूम्रवर्णं तथाष्टमम् ॥३॥",
    translit:
      "Lambodaram Panchamam cha, Sashtam Vikatameva cha\nSaptamam Vignarajam cha, Dhoomravarnam tathashtamam",
    trad:
      "Quinto, como o de ventre amplo; sexto, o temível para os inimigos; sétimo, o senhor dos obstáculos; oitavo, o de cor esfumaçada.",
  },
  {
    sanskrit:
      "नवमं भालचन्द्रं च दशमं तु विनायकम् ।\nएकादशं गणपतिं द्वादशं तु गजाननम् ॥४॥",
    translit:
      "Navamam Bhalachandram cha, Dashamam tu Vinayakam\nEkadasham Ganapatim, Dwadasham tu Gajananam",
    trad:
      "Nono, o que carrega a lua na testa; décimo, o líder que remove obstáculos; décimo primeiro, o comandante das hostes divinas; décimo segundo, o de face elefantina.",
  },
  {
    sanskrit:
      "द्वादशैतानि नामानि त्रिसन्ध्यं यः पठेन्नरः ।\nन च विघ्नभयं तस्य सर्वसिद्धिकरं परम् ॥५॥",
    translit:
      "Dwadasaithani namani, Trisandhyam yah pathen narah\nNa cha vighna bhayam tasya, Sarvasiddhi karam param",
    trad:
      "Aquele que recita estes doze nomes ao amanhecer, ao meio‑dia e ao entardecer não conhecerá medo de derrota e alcançará todas as realizações.",
  },
  {
    sanskrit:
      "विद्यार्थी लभते विद्यां धनार्थी लभते धनम् ।\nपुत्रार्थी लभते पुत्रान्मोक्षार्थी लभते गतिम् ॥६॥",
    translit:
      "Vidhyarthi labhate Vidhyam, Danarthi labhate Dhanam\nPutrarthi labhate Putran, Moksharthi labhate Gatim",
    trad:
      "O buscador de conhecimento o alcança; o que deseja riqueza a obtém; o que anseia por filhos é abençoado; e o que busca libertação encontra o caminho.",
  },
  {
    sanskrit:
      "जपेद्गणपतिस्तोत्रं षड्भिर्मासैः फलम् लभेत् ।\nसंवत्सरेण सिद्धिं च लभते नात्र संशयः ॥७॥",
    translit:
      "Japet Ganapati stotram, Shadbhir masaih phalam labhet\nSamvatsarena siddhim cha, Labhate natra sanshayah",
    trad:
      "Recitar este stotram por seis meses traz resultados visíveis; em um ano, a perfeição é alcançada — sem dúvida.",
  },
  {
    sanskrit:
      "अष्टभ्यो ब्राह्मणेभ्यश्च लिखित्वा यः समर्पयेत् ।\nतस्य विद्या भवेत्सर्वा गणेशस्य प्रसादतः ॥८॥",
    translit:
      "Ashtabhyo Brahmanebhyascha likhitva yah samarpayet\nTasya vidya bhavetsarva, Ganeshasya prasadatah",
    trad:
      "Aquele que escrever este hino e o oferecer a oito sábios, receberá todo o conhecimento pela graça de Ganesha.",
  },
];

const ENCERRAMENTO =
  "॥ इति श्री नारदपुराणे संकट नाशनं गणेश स्तोत्रं सम्पूर्णम् ॥\nIti Sri Narad Purane Sankat Nashanam Ganesha Stotram Sampurnam \nIsto conclui o Sankata Nashanam Ganesha Stotram do Narada Purana.”";

export default function GaneshaStotramPage() {
  return (
    <main className="bg-[#0b0b0b] text-paper">
      {/* HERO */}
      <section className="relative border-b border-white/10">
        <div className="container mx-auto max-w-5xl px-4 py-16 md:py-20">
          <h1 className="font-display text-4xl md:text-5xl leading-tight">
            🐘 Notas sobre o Ganesha Stotram — Palavra, Ritmo e Invocação
          </h1>
          <p className="mt-4 text-white/70 max-w-3xl">
            O <em>Sankata Nashanam Ganesha Stotram</em>, do <em>Narada Purana</em>,
            é um hino de invocação a Shri Ganesha: removedor de obstáculos,
            patrono dos começos e guardião da sabedoria.
          </p>
          <p className="mt-2 text-white/70 max-w-3xl">
            O próprio nome indica seu propósito:{" "}
            <strong>“o hino que destrói as dificuldades”</strong>. A recitação
            devocional remove impedimentos, dissipa medos e atrai bênçãos nos
            planos material e espiritual.
          </p>
        </div>
      </section>

      {/* CONTEÚDO */}
      <section className="container mx-auto max-w-4xl px-4 py-12 space-y-10">
        {/* 2. Benefícios */}
        <article>
          <h2 className="font-display text-2xl mb-3">Benefícios da recitação</h2>
          <ul className="list-disc pl-6 text-white/75 space-y-1">
            <li>Dissolve obstáculos visíveis e invisíveis</li>
            <li>Protege contra energias negativas</li>
            <li>Atrai prosperidade e abundância</li>
            <li>Amplia conhecimento e clareza mental</li>
            <li>Concede bênçãos para saúde, família e realização espiritual</li>
          </ul>
          <p className="mt-2 text-sm text-white/50">
            Tradição oral: recitar o stotram três vezes ao dia (manhã, meio‑dia
            e entardecer) cria um campo de proteção contínuo. Os efeitos são
            percebidos em seis meses e, em um ano, manifestam‑se plenamente.
          </p>
        </article>

        {/* 3. Versos */}
        <article>
          <h2 className="font-display text-2xl mb-6">O Stotram completo</h2>
          <div className="space-y-8">
            {VERSOS.map((v, i) => (
              <div
                key={i}
                className="rounded-xl border border-white/10 bg-white/5 p-5"
              >
                <div className="text-xs mb-2 text-white/60">Verso {i + 1}</div>
                <pre className="font-sans text-lg whitespace-pre-wrap leading-relaxed">
                  {v.sanskrit}
                </pre>
                <pre className="mt-2 text-sm text-amber-300 whitespace-pre-wrap">
                  {v.translit}
                </pre>
                <p className="mt-3 text-white/80">{v.trad}</p>
              </div>
            ))}
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <pre className="font-sans text-base whitespace-pre-wrap leading-relaxed text-white/80">
                {ENCERRAMENTO}
              </pre>
            </div>
          </div>
        </article>

        {/* 4. Como Praticar */}
        <article>
          <h2 className="font-display text-2xl mb-3">Como praticar</h2>
          <ol className="list-decimal pl-6 text-white/75 space-y-1">
            <li>Local: espaço limpo e calmo, voltado para o leste.</li>
            <li>Preparação: acender vela/diya e incenso de sândalo.</li>
            <li>Postura: coluna ereta, atenção serena.</li>
            <li>Recitação: entoar o stotram inteiro, sentindo a vibração.</li>
            <li>Fechamento: 3x “Om Gam Ganapataye Namaha”.</li>
          </ol>
        </article>

        {/* 5. No Ritual Sonoro */}
        <article>
          <h2 className="font-display text-2xl mb-3">
            O Stotram no ritual sonoro
          </h2>
          <p className="text-white/75">
            No Marroc, o hino pode ser acoplado a bases eletrônicas mantendo
            métrica e vibração originais, expandindo‑o para um campo coletivo.
            Em um Live Set ritualístico, o Ganesha Stotram age como{" "}
            <em>chave vibracional</em>, abrindo o portal para que toda a
            experiência sonora transcorra sem bloqueios.
          </p>
        </article>
      </section>
    </main>
  );
}
