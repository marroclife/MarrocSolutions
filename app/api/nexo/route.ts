import { NextResponse } from "next/server";

// ============================================
// NEXO LITE — API do Assistente do Ecossistema Marroc
// Modelo: Kimi K2.5 (cloud) via Ollama
// ============================================

const OLLAMA_API_URL = "https://ollama.com/api/chat";
const OLLAMA_API_KEY = process.env.OLLAMA_API_KEY || "7c7858a9ce0645ec861a580c2ee7372b.wGHiRO6SCRrc2BlcrMmKeO6J";
const MODEL = "kimi-k2.5";

// ============================================
// SYSTEM PROMPT — PERSONA NEXO
// ============================================
const SYSTEM_INSTRUCTION = `
# IDENTIDADE
Você é o **NEXO**, o assistente digital oficial do ecossistema Marroc.xyz.
Você é direto, inteligente, levemente místico (sem ser exagerado), e tem "presença".
Você fala como um parceiro estratégico, não como um chatbot genérico.
Seu tom é: confiante, acessível, com frases curtas e impactantes.

# ESCOPO (O QUE VOCÊ PODE FALAR)
Você conhece e fala EXCLUSIVAMENTE sobre o ecossistema Marroc:

1. **MARROC (Live Psytrance)**: Sets ritualísticos ao vivo, psytrance, eletrônica experimental. Não é gênero, é estado expandido.
2. **HIGHER HZ (AI Music)**: Música gerada por IA em 432Hz, alquimia sonora.
3. **MARROC SOLUTIONS (B2B)**: Desenvolvimento web high-ticket, performance, SEO, agentes de IA.
4. **MARROC LABS**: Cultivo, biologia, livros publicados, arte e ciência.
5. **ORÁCULOS E RITUAIS**: Ganesha, práticas de meditação, frequência vibracional.
6. **LIVROS PUBLICADOS**: O Eixo da Consciência, Um Lugar Entre Mundos, Códice de Ganesha.

# LIMITES (O QUE VOCÊ NÃO FALA)
Se perguntarem sobre qualquer coisa FORA do ecossistema Marroc (clima, política, notícias, culinária, etc), responda de forma leve e redirecione:

> "Esse tema está fora do meu raio de escaneamento. Mas se te interessa [tema X], posso te contar como o Marroc entrelaça isso com [algo do ecossistema]. Quer explorar?"

Nunca invente informações que não estão aqui. Se não souber, diga:
> "Ainda não tenho essa frequência mapeada. Mas posso anotar isso para o Marroc revisar."

# ESTILO DE RESPOSTA
- Use **negrito** para ênfase (markdown).
- Máximo 4-5 frases por resposta, a menos que peçam aprofundamento.
- Termine com uma pergunta leve ou um convite à ação (ex: "Quer que eu aprofunde isso?").

# FILOSOFIA OPERACIONAL
"Não somos apenas desenvolvedores. Somos arquitetos de sistemas vivos."
Você é a interface entre a visão do Marroc e o visitante.
`;

interface Message {
  role: "user" | "assistant" | "system";
  content: string;
}

// Rate limit simples em memória (em produção, usar Redis/Upstash)
const RATE_LIMIT_WINDOW = 60_000; // 1 min
const RATE_LIMIT_MAX = 15; // 15 req/min por IP
const ipHits = new Map<string, number[]>();

function rateLimit(ip: string): boolean {
  const now = Date.now();
  const hits = (ipHits.get(ip) || []).filter((t) => now - t < RATE_LIMIT_WINDOW);
  hits.push(now);
  ipHits.set(ip, hits);
  return hits.length > RATE_LIMIT_MAX;
}

export async function POST(req: Request) {
  try {
    // 1. Rate limit por IP
    const ip = req.headers.get("x-forwarded-for") || "unknown";
    if (rateLimit(ip)) {
      return NextResponse.json(
        { error: "Muitas requisições. Aguarde um momento." },
        { status: 429 }
      );
    }

    // 2. Extrair mensagem
    const body = await req.json();
    const { message, history = [] } = body as { message: string; history?: Message[] };

    if (!message || typeof message !== "string" || !message.trim()) {
      return NextResponse.json(
        { error: "Mensagem vazia. Digite algo para o Nexo processar." },
        { status: 400 }
      );
    }

    // 3. Montar histórico (limitado a 10 últimas trocas para contexto)
    const recentHistory = history.slice(-10);
    const messages: Message[] = [
      { role: "system", content: SYSTEM_INSTRUCTION },
      ...recentHistory,
      { role: "user", content: message },
    ];

    // 4. Chamar Ollama Cloud (Qwen 2.5)
    const response = await fetch(OLLAMA_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OLLAMA_API_KEY}`,
      },
      body: JSON.stringify({
        model: MODEL,
        messages,
        stream: false,
        options: {
          temperature: 0.7,
          top_p: 0.9,
          num_predict: 400, // ~resposta de 300 palavras
        },
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("Ollama API Error:", errText);
      return NextResponse.json(
        { error: "Falha na conexão com o servidor Nexo. Tente novamente." },
        { status: 502 }
      );
    }

    const data = await response.json();
    const reply = data.message?.content || "[Sem resposta do modelo]";

    return NextResponse.json({ reply, model: MODEL });

  } catch (error) {
    console.error("Nexo API Error:", error);
    return NextResponse.json(
      { error: "Erro interno do servidor." },
      { status: 500 }
    );
  }
}

// GET para health check
export async function GET() {
  return NextResponse.json({
    status: "online",
    model: MODEL,
    name: "Nexo Lite",
    version: "1.0.0",
  });
}
