"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Volume2, RotateCw, Eye, EyeOff, CheckCircle, XCircle, Keyboard, BookOpen, MessageCircle, HelpCircle } from "lucide-react";

// ============================================================================
// DADOS: ALFABETO ÁRABE COM VOCABULÁRIO MARRoc
// ============================================================================

interface Letter {
  isolated: string;
  initial: string;
  medial: string;
  final: string;
  name: string;
  sound: string;
  wordAr: string;
  wordTransliteration: string;
  wordPt: string;
}

const ALPHABET: Letter[] = [
  { isolated: "ا", initial: "ا", medial: "ـا", final: "ـا", name: "Alif", sound: "a", wordAr: "ذكاء", wordTransliteration: "dhakā'", wordPt: "inteligência" },
  { isolated: "ب", initial: "بـ", medial: "ـبـ", final: "ـب", name: "Bā", sound: "b", wordAr: "برمجة", wordTransliteration: "barnamaja", wordPt: "programação" },
  { isolated: "ت", initial: "تـ", medial: "ـتـ", final: "ـت", name: "Tā", sound: "t", wordAr: "تحسين", wordTransliteration: "taḥsīn", wordPt: "otimização" },
  { isolated: "ث", initial: "ثـ", medial: "ـثـ", final: "ـث", name: "Thā", sound: "th", wordAr: "ثقة", wordTransliteration: "thiqa", wordPt: "confiança" },
  { isolated: "ج", initial: "جـ", medial: "ـجـ", final: "ـج", name: "Jīm", sound: "j", wordAr: "جمهور", wordTransliteration: "jumhūr", wordPt: "público" },
  { isolated: "ح", initial: "حـ", medial: "ـحـ", final: "ـح", name: "Ḥā", sound: "ḥ", wordAr: "حقيقة", wordTransliteration: "ḥaqīqa", wordPt: "verdade" },
  { isolated: "خ", initial: "خـ", medial: "ـخـ", final: "ـخ", name: "Khā", sound: "kh", wordAr: "خدمة", wordTransliteration: "khidma", wordPt: "serviço" },
  { isolated: "د", initial: "د", medial: "ـد", final: "ـد", name: "Dāl", sound: "d", wordAr: "دقة", wordTransliteration: "daqa", wordPt: "precisão" },
  { isolated: "ذ", initial: "ذ", medial: "ـذ", final: "ـذ", name: "Dhāl", sound: "dh", wordAr: "ذكاء", wordTransliteration: "dhakā'", wordPt: "inteligência" },
  { isolated: "ر", initial: "ر", medial: "ـر", final: "ـر", name: "Rā", sound: "r", wordAr: "رقم", wordTransliteration: "raqm", wordPt: "número" },
  { isolated: "ز", initial: "ز", medial: "ـز", final: "ـز", name: "Zāy", sound: "z", wordAr: "زيادة", wordTransliteration: "ziyāda", wordPt: "crescimento" },
  { isolated: "س", initial: "سـ", medial: "ـسـ", final: "ـس", name: "Sīn", sound: "s", wordAr: "سلطة", wordTransliteration: "sulṭa", wordPt: "autoridade" },
  { isolated: "ش", initial: "شـ", medial: "ـشـ", final: "ـش", name: "Shīn", sound: "sh", wordAr: "شركة", wordTransliteration: "sharika", wordPt: "empresa" },
  { isolated: "ص", initial: "صـ", medial: "ـصـ", final: "ـص", name: "Ṣād", sound: "ṣ", wordAr: "صناعة", wordTransliteration: "ṣinā'a", wordPt: "indústria" },
  { isolated: "ض", initial: "ضـ", medial: "ـضـ", final: "ـض", name: "Ḍād", sound: "ḍ", wordAr: "ضغط", wordTransliteration: "ḍaghṭ", wordPt: "performance" },
  { isolated: "ط", initial: "طـ", medial: "ـطـ", final: "ـط", name: "Ṭā", sound: "ṭ", wordAr: "طاقة", wordTransliteration: "ṭāqa", wordPt: "potência" },
  { isolated: "ظ", initial: "ظـ", medial: "ـظـ", final: "ـظ", name: "Ẓā", sound: "ẓ", wordAr: "ظهور", wordTransliteration: "ẓuhūr", wordPt: "visibilidade" },
  { isolated: "ع", initial: "عـ", medial: "ـعـ", final: "ـع", name: "'Ayn", sound: "'", wordAr: "عمل", wordTransliteration: "'amal", wordPt: "ação" },
  { isolated: "غ", initial: "غـ", medial: "ـغـ", final: "ـغ", name: "Ghayn", sound: "gh", wordAr: "غدًا", wordTransliteration: "ghadan", wordPt: "futuro" },
  { isolated: "ف", initial: "فـ", medial: "ـفـ", final: "ـف", name: "Fā", sound: "f", wordAr: "فكرة", wordTransliteration: "fikra", wordPt: "ideia" },
  { isolated: "ق", initial: "قـ", medial: "ـقـ", final: "ـق", name: "Qāf", sound: "q", wordAr: "قياس", wordTransliteration: "qiyās", wordPt: "métrica" },
  { isolated: "ك", initial: "كـ", medial: "ـكـ", final: "ـك", name: "Kāf", sound: "k", wordAr: "شركة", wordTransliteration: "sharika", wordPt: "empresa" },
  { isolated: "ل", initial: "لـ", medial: "ـلـ", final: "ـل", name: "Lām", sound: "l", wordAr: "لوجستية", wordTransliteration: "lūjistiyya", wordPt: "fluxo" },
  { isolated: "م", initial: "مـ", medial: "ـمـ", final: "ـم", name: "Mīm", sound: "m", wordAr: "ماروك", wordTransliteration: "Mārrūk", wordPt: "Marroc" },
  { isolated: "ن", initial: "نـ", medial: "ـنـ", final: "ـن", name: "Nūn", sound: "n", wordAr: "نتائج", wordTransliteration: "natā'ij", wordPt: "resultados" },
  { isolated: "ه", initial: "هـ", medial: "ـهـ", final: "ـه", name: "Hā", sound: "h", wordAr: "هدف", wordTransliteration: "hadaf", wordPt: "objetivo" },
  { isolated: "و", initial: "و", medial: "ـو", final: "ـو", name: "Wāw", sound: "w/u", wordAr: "ويب", wordTransliteration: "wēb", wordPt: "web" },
  { isolated: "ي", initial: "يـ", medial: "ـيـ", final: "ـي", name: "Yā", sound: "y/i", wordAr: "يد", wordTransliteration: "yad", wordPt: "mão" },
];

const VOCABULARY = [
  { ar: "ذكاء اصطناعي", transliteration: "dhakā' iṣṭinā'ī", pt: "inteligência artificial" },
  { ar: "عميل ذكي", transliteration: "'amil dhakī", pt: "agente inteligente / autônomo" },
  { ar: "تحسين محركات البحث", transliteration: "taḥsīn maḥarrikāt al-baḥth", pt: "SEO" },
  { ar: "نظام حيّ", transliteration: "niẓām ḥayy", pt: "sistema vivo" },
  { ar: "أداء عالي", transliteration: "adā' 'ālī", pt: "alta performance" },
  { ar: "بيانات", transliteration: "bayānāt", pt: "dados" },
  { ar: "محتوى", transliteration: "maḥtawā", pt: "conteúdo" },
  { ar: "تحويل", transliteration: "taḥwīl", pt: "conversão" },
  { ar: "رؤية", transliteration: "ru'ya", pt: "visão" },
  { ar: "شركة", transliteration: "sharika", pt: "empresa" },
  { ar: "نمو", transliteration: "numū", pt: "crescimento" },
  { ar: "استراتيجية", transliteration: "istrātījiyya", pt: "estratégia" },
  { ar: "أتمتة", transliteration: "atma", pt: "automação" },
  { ar: "تقرير", transliteration: "taqrīr", pt: "relatório" },
  { ar: "تحليل", transliteration: "taḥlīl", pt: "análise" },
];

const PHRASES = [
  { ar: "أنا ماروك", transliteration: "Anā Mārrūk", pt: "Eu sou Marroc." },
  { ar: "أنا مهندس أنظمة", transliteration: "Anā muhandis niẓām", pt: "Eu sou arquiteto de sistemas." },
  { ar: "أعمل في مجال الذكاء الاصطناعي", transliteration: "A'mal fī majāl al-dhakā' al-iṣṭinā'ī", pt: "Trabalho na área de inteligência artificial." },
  { ar: "ماروك سوليوشنز بناء أنظمة ذكية للشركات", transliteration: "Mārrūk Sūlūshinz binā' anẓima dhakiyya lil-sharikāt", pt: "Marroc Solutions constrói sistemas inteligentes para empresas." },
  { ar: "نصنع عملاء ذكيين يعملون على مدار الساعة", transliteration: "Naṣna' 'umalā' dhakiyyīn ya'malūna 'alā madār al-sā'a", pt: "Criamos agentes inteligentes que trabalham 24 horas." },
  { ar: "هدفنا نمو عملك", transliteration: "Hadafunā numū 'amalika", pt: "Nosso objetivo é o crescimento do seu negócio." },
  { ar: "ما تحدي عملك اليوم؟", transliteration: "Mā taḥdī 'amalika al-yawm?", pt: "Qual é o desafio do seu negócio hoje?" },
  { ar: "كيف نساعدك في التوسع؟", transliteration: "Kayfa nusā'iduka fī al-tawsu'?", pt: "Como podemos ajudá-lo a escalar?" },
];

// ============================================================================
// UTILITÁRIOS
// ============================================================================

function speak(text: string, lang = "ar-SA") {
  if (typeof window === "undefined" || !window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = lang;
  u.rate = 0.85;
  window.speechSynthesis.speak(u);
}

// ============================================================================
// COMPONENTES AUXILIARES
// ============================================================================

function TabButton({ active, onClick, icon: Icon, label }: { active: boolean; onClick: () => void; icon: React.ElementType; label: string }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
        active
          ? "bg-neon-green text-black"
          : "bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800"
      }`}
    >
      <Icon size={16} />
      {label}
    </button>
  );
}

function ArabicText({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span dir="rtl" lang="ar" className={`font-mono ${className}`}>
      {children}
    </span>
  );
}

// ============================================================================
// ABA 1: ALFABETO
// ============================================================================

function AlphabetTab() {
  const [selected, setSelected] = useState<Letter | null>(ALPHABET[0]);

  return (
    <div className="grid lg:grid-cols-[1fr_360px] gap-6">
      <Card className="bg-neutral-900 border-neutral-800">
        <CardHeader>
          <CardTitle className="text-white text-lg">28 letras</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-4 sm:grid-cols-7 gap-3">
            {ALPHABET.map((letter) => (
              <button
                key={letter.name}
                onClick={() => setSelected(letter)}
                className={`aspect-square rounded-lg border flex flex-col items-center justify-center gap-1 transition-colors ${
                  selected?.name === letter.name
                    ? "border-neon-green bg-neon-green/10"
                    : "border-neutral-800 hover:border-neutral-700"
                }`}
              >
                <ArabicText className="text-3xl text-white">{letter.isolated}</ArabicText>
                <span className="text-[10px] text-neutral-500 uppercase">{letter.name}</span>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-neutral-900 border-neutral-800 h-fit sticky top-24">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-white text-lg">{selected?.name}</CardTitle>
            <button
              onClick={() => selected && speak(selected.wordAr)}
              className="p-2 rounded-full bg-neutral-800 text-neon-green hover:bg-neutral-700"
              aria-label="Ouvir"
            >
              <Volume2 size={18} />
            </button>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-2 gap-3 text-center">
            <div className="p-3 rounded-lg bg-neutral-950 border border-neutral-800">
              <div className="text-xs text-neutral-500 mb-1">Isolada</div>
              <ArabicText className="text-4xl text-white">{selected?.isolated}</ArabicText>
            </div>
            <div className="p-3 rounded-lg bg-neutral-950 border border-neutral-800">
              <div className="text-xs text-neutral-500 mb-1">Inicial</div>
              <ArabicText className="text-4xl text-white">{selected?.initial}</ArabicText>
            </div>
            <div className="p-3 rounded-lg bg-neutral-950 border border-neutral-800">
              <div className="text-xs text-neutral-500 mb-1">Medial</div>
              <ArabicText className="text-4xl text-white">{selected?.medial}</ArabicText>
            </div>
            <div className="p-3 rounded-lg bg-neutral-950 border border-neutral-800">
              <div className="text-xs text-neutral-500 mb-1">Final</div>
              <ArabicText className="text-4xl text-white">{selected?.final}</ArabicText>
            </div>
          </div>

          <div className="space-y-2">
            <div className="text-sm text-neutral-400">
              Som: <span className="text-white font-medium">{selected?.sound}</span>
            </div>
            <div className="p-4 rounded-lg bg-neutral-950 border border-neutral-800">
              <div className="text-xs text-neutral-500 mb-2">Palavra técnica</div>
              <ArabicText className="text-3xl text-neon-green mb-1">{selected?.wordAr}</ArabicText>
              <div className="text-sm text-neutral-300">{selected?.wordTransliteration}</div>
              <div className="text-sm text-neutral-500">{selected?.wordPt}</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// ============================================================================
// ABA 2: VOCABULÁRIO (FLASHCARDS)
// ============================================================================

function VocabularyTab() {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [known, setKnown] = useState<Set<number>>(new Set());
  const [studyOnlyUnknown, setStudyOnlyUnknown] = useState(false);

  const pool = useMemo(() => {
    if (!studyOnlyUnknown) return VOCABULARY;
    return VOCABULARY.filter((_, i) => !known.has(i));
  }, [studyOnlyUnknown, known]);

  const current = pool[index % pool.length] || VOCABULARY[0];
  const realIndex = VOCABULARY.indexOf(current);

  const next = useCallback(() => {
    setFlipped(false);
    setIndex((i) => (i + 1) % pool.length);
  }, [pool.length]);

  const prev = useCallback(() => {
    setFlipped(false);
    setIndex((i) => (i - 1 + pool.length) % pool.length);
  }, [pool.length]);

  const toggleKnown = () => {
    setKnown((prev) => {
      const nextSet = new Set(prev);
      if (nextSet.has(realIndex)) nextSet.delete(realIndex);
      else nextSet.add(realIndex);
      return nextSet;
    });
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div className="text-sm text-neutral-400">
          {studyOnlyUnknown ? "Modo revisão" : "Todos os cards"} · {index + 1} / {pool.length}
        </div>
        <button
          onClick={() => { setStudyOnlyUnknown((v) => !v); setIndex(0); setFlipped(false); }}
          className={`text-xs px-3 py-1 rounded-full border ${studyOnlyUnknown ? "border-neon-green text-neon-green" : "border-neutral-700 text-neutral-400"}`}
        >
          {studyOnlyUnknown ? "Mostrar todos" : "Só revisar errados"}
        </button>
      </div>

      <div
        onClick={() => setFlipped((v) => !v)}
        className="relative h-80 cursor-pointer group"
      >
        <div className={`absolute inset-0 rounded-2xl border border-neutral-800 bg-neutral-900 p-8 flex flex-col items-center justify-center text-center transition-all duration-300 ${flipped ? "opacity-0 rotate-y-180 pointer-events-none" : "opacity-100"}`}>
          <ArabicText className="text-5xl text-white mb-4">{current.ar}</ArabicText>
          <div className="text-sm text-neutral-500">Clique para revelar</div>
        </div>
        <div className={`absolute inset-0 rounded-2xl border border-neon-green/30 bg-neutral-950 p-8 flex flex-col items-center justify-center text-center transition-all duration-300 ${flipped ? "opacity-100" : "opacity-0 rotate-y-180 pointer-events-none"}`}>
          <div className="text-xl text-neon-green mb-2">{current.pt}</div>
          <div className="text-sm text-neutral-400">{current.transliteration}</div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-3">
        <button onClick={prev} className="px-4 py-2 rounded-lg bg-neutral-800 text-white hover:bg-neutral-700">Anterior</button>
        <button onClick={() => speak(current.ar)} className="p-2 rounded-lg bg-neutral-800 text-neon-green hover:bg-neutral-700"><Volume2 size={18} /></button>
        <button onClick={() => { setFlipped(false); next(); }} className="px-4 py-2 rounded-lg bg-neutral-800 text-white hover:bg-neutral-700">Próximo</button>
      </div>

      <div className="flex justify-center">
        <button
          onClick={toggleKnown}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm border ${known.has(realIndex) ? "border-neon-green text-neon-green" : "border-neutral-700 text-neutral-400"}`}
        >
          {known.has(realIndex) ? <CheckCircle size={16} /> : <XCircle size={16} />}
          {known.has(realIndex) ? "Já sei" : "Marcar como aprendida"}
        </button>
      </div>
    </div>
  );
}

// ============================================================================
// ABA 3: FRASES + ÁUDIO
// ============================================================================

function PhrasesTab() {
  const [showPt, setShowPt] = useState<Set<number>>(new Set());

  const toggle = (i: number) => {
    setShowPt((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  return (
    <div className="grid gap-4 max-w-3xl mx-auto">
      {PHRASES.map((phrase, i) => (
        <Card key={i} className="bg-neutral-900 border-neutral-800">
          <CardContent className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <ArabicText className="text-2xl text-white">{phrase.ar}</ArabicText>
              <div className="text-sm text-neutral-400">{phrase.transliteration}</div>
              {showPt.has(i) && <div className="text-sm text-neon-green mt-2">{phrase.pt}</div>}
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => speak(phrase.ar)}
                className="p-2 rounded-lg bg-neutral-800 text-neon-green hover:bg-neutral-700"
              >
                <Volume2 size={18} />
              </button>
              <button
                onClick={() => toggle(i)}
                className="p-2 rounded-lg bg-neutral-800 text-neutral-400 hover:bg-neutral-700"
              >
                {showPt.has(i) ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

// ============================================================================
// ABA 4: QUIZ
// ============================================================================

function QuizTab() {
  const [items] = useState(() => {
    const all = [...VOCABULARY, ...PHRASES.map((p) => ({ ar: p.ar, transliteration: p.transliteration, pt: p.pt }))];
    return all.sort(() => Math.random() - 0.5).slice(0, 10);
  });
  const [idx, setIdx] = useState(0);
  const [options, setOptions] = useState<string[]>([]);
  const [answered, setAnswered] = useState<"correct" | "wrong" | null>(null);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const correct = items[idx].pt;
    const wrongPool = items.filter((_, i) => i !== idx).map((i) => i.pt);
    const wrong = wrongPool.sort(() => Math.random() - 0.5).slice(0, 3);
    setOptions([correct, ...wrong].sort(() => Math.random() - 0.5));
    setAnswered(null);
  }, [idx, items]);

  const current = items[idx];

  const answer = (opt: string) => {
    if (answered) return;
    const isCorrect = opt === current.pt;
    setAnswered(isCorrect ? "correct" : "wrong");
    if (isCorrect) setScore((s) => s + 1);
  };

  const next = () => {
    if (idx < items.length - 1) {
      setIdx((i) => i + 1);
    } else {
      // reinicia
      setIdx(0);
      setScore(0);
    }
  };

  if (!current) return null;

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="flex items-center justify-between text-sm text-neutral-400">
        <span>Quiz</span>
        <span>Placar: {score} / {items.length}</span>
      </div>

      <Card className="bg-neutral-900 border-neutral-800">
        <CardContent className="p-8 text-center space-y-4">
          <ArabicText className="text-4xl text-white">{current.ar}</ArabicText>
          <div className="text-neutral-400">{current.transliteration}</div>
        </CardContent>
      </Card>

      <div className="grid gap-3">
        {options.map((opt) => {
          let cls = "p-4 rounded-lg border text-left transition-colors ";
          if (answered) {
            if (opt === current.pt) cls += "border-neon-green bg-neon-green/10 text-white";
            else if (answered === "wrong") cls += "border-neutral-800 bg-neutral-900 text-neutral-500";
            else cls += "border-neutral-800 bg-neutral-900 text-neutral-400";
          } else {
            cls += "border-neutral-800 bg-neutral-900 text-neutral-300 hover:border-neutral-600";
          }
          return (
            <button key={opt} onClick={() => answer(opt)} className={cls} disabled={!!answered}>
              {opt}
            </button>
          );
        })}
      </div>

      {answered && (
        <div className="flex items-center justify-between">
          <div className={`text-sm ${answered === "correct" ? "text-neon-green" : "text-red-400"}`}>
            {answered === "correct" ? "Correto" : `Errado. Resposta: ${current.pt}`}
          </div>
          <button onClick={next} className="px-4 py-2 rounded-lg bg-neon-green text-black font-medium hover:bg-white">
            {idx < items.length - 1 ? "Próxima" : "Reiniciar"}
          </button>
        </div>
      )}
    </div>
  );
}

// ============================================================================
// PÁGINA PRINCIPAL
// ============================================================================

export default function ArabicStudyPage() {
  const [tab, setTab] = useState<"alphabet" | "vocabulary" | "phrases" | "quiz">("alphabet");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-[#050505] text-paper pb-20">
      <section className="border-b border-white/5 bg-gradient-to-b from-deep-emerald/20 to-[#050505]">
        <div className="container py-16 md:py-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-neon-green mb-4">
              <BookOpen size={18} />
              <span className="font-mono text-xs uppercase tracking-widest">Estudos</span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl text-white mb-4">
              Árabe para Marroc
            </h1>
            <p className="text-paper/60 text-lg max-w-2xl leading-relaxed">
              Alfabetização, vocabulário técnico e frases de apresentação. Tudo em um só lugar, sem distração.
            </p>
          </div>
        </div>
      </section>

      <div className="container py-8">
        <div className="flex flex-wrap gap-2 mb-8 sticky top-14 z-30 bg-[#050505]/95 backdrop-blur py-3 border-b border-white/5">
          <TabButton active={tab === "alphabet"} onClick={() => setTab("alphabet")} icon={Keyboard} label="Alfabeto" />
          <TabButton active={tab === "vocabulary"} onClick={() => setTab("vocabulary")} icon={BookOpen} label="Vocabulário" />
          <TabButton active={tab === "phrases"} onClick={() => setTab("phrases")} icon={MessageCircle} label="Frases" />
          <TabButton active={tab === "quiz"} onClick={() => setTab("quiz")} icon={HelpCircle} label="Quiz" />
        </div>

        {tab === "alphabet" && <AlphabetTab />}
        {tab === "vocabulary" && <VocabularyTab />}
        {tab === "phrases" && <PhrasesTab />}
        {tab === "quiz" && <QuizTab />}
      </div>
    </main>
  );
}
