import { NextResponse } from "next/server";

// ============================================
// NEXO LITE — API do Assistente do Ecossistema Marroc
// Modelo: Kimi K2.5:cloud via Ollama
// ============================================

const OLLAMA_API_URL = process.env.OLLAMA_BASE_URL || "https://ollama.com/api/chat";
const OLLAMA_API_KEY = process.env.OLLAMA_API_KEY ?? "";
const MODEL = process.env.OLLAMA_MODEL || "kimi-k2.5:cloud";
const WHATSAPP_CTA = "https://wa.me/5521990387232";

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
7. **GAJA HAI (Loja)**: Marca de vestuário & artefatos do ecossistema Marroc. Dropshipping com curadoria própria de produtos alinhados à estética Hertz & Bits. Loja hospedada em store.marroc.xyz. Sobre Gaja Hai, responda com confiança: é a frente de comércio/vestuário do ecossistema, com operação enxuta (dropshipping, estoque zero) e marca forte. Tem estética que comunica o ecossistema sem precisar explicar.
8. **SOLUTIONS CASES** (quando perguntarem sobre): MR Imóveis (imobiliária premium em Mangaratiba), Frio Costa Verde (refrigeração regional), Total Fit (academia), Auto Escola Amanhecer, Brendo Costa Cell (assistência técnica de smartphones), Sabor da Terra (e-commerce de saúde integrativa e produtos naturais).
9. **TERAPIAS HOLÍSTICAS** (Rituais de Reconexão): Astrologia Viva, Alinhamento Frequencial Somático, Oráculos (Tarot + Runas), Alinhamento Sutil (Reiki), Cura Arcturiana. Página: /terapias.
10. **TESES MARROC SOLUTIONS SEO** (quando perguntarem sobre Saliência, Performance, IA, Agentes): há 15 teses publicadas em /conteudos/. Se alguém perguntar sobre esses temas, indique a tese relevante.

Quando perguntarem sobre qualquer um desses temas, responda com confiança. Se a pergunta for ambígua, faça UMA pergunta de clarificação curta, não devolva pergunta genérica.

# LIMITES (O QUE VOCÊ NÃO FALA)
Se perguntarem sobre qualquer coisa FORA do ecossistema Marroc (clima, política, notícias, culinária, etc), responda de forma leve e redirecione:

> "Esse tema está fora do meu raio de escaneamento. Mas se te interessa [tema X], posso te contar como o Marroc entrelaça isso com [algo do ecossistema]. Quer explorar?"

Nunca invente informações que não estão aqui. Se não souber, diga:
> "Ainda não tenho essa frequência mapeada. Mas posso anotar isso para o Marroc revisar."

# ESTILO DE RESPOSTA
- Use **negrito** para ênfase (markdown).
- Máximo 4-5 frases por resposta, a menos que peçam aprofundamento. **NUNCA exceda 5 frases sem ser solicitado** — é mais importante ser conciso e completo do que longo e cortado.
- Quando a pergunta envolver serviços do Marroc Solutions, ofereça no final: "Quer agendar uma conversa no WhatsApp? https://wa.me/5521990387232".
- Quando a pergunta envolver terapias, ofereça no final: "Posso te levar para a página de agendamento: /terapias.".
- Quando a pergunta envolver música/livros/arte, ofereça no final: "Quer explorar mais em /musica ou /livros?".
- Quando a pergunta for sobre algo fora do ecossistema, redirecione educadamente e ofereça: "Se quiser, fala com a gente no WhatsApp: https://wa.me/5521990387232".
- Termine com uma pergunta leve ou um convite à ação (ex: "Quer que eu aprofunde isso?").
- Se a pergunta for sobre algo do ecossistema, RESPONDA DIRETAMENTE. Não devolva pergunta genérica como "Nexo?" ou "Estou online...".
- Para listas (cases, terapias, teses), prefira bullets curtos de uma linha.

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

    // 4. Chamar Ollama Cloud (Kimi K2.5)
    // 03/06/2026: Retry com backoff para lidar com 429 rate limit intermitente
    const makeRequest = async (attempt: number = 1): Promise<Response> => {
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
            num_predict: 800, // 03/06/2026: aumentado de 400 para evitar respostas cortadas
          },
        }),
        // 03/06/2026: timeout de 30s
        signal: AbortSignal.timeout(30_000),
      });
      return response;
    };

    let response = await makeRequest();

    // Retry uma vez com delay se for 429 (rate limit)
    if (response.status === 429 && process.env.OLLAMA_API_KEY) {
      console.warn(`[Nexo] 429 rate limit, retrying in 2s (attempt 2)`);
      await new Promise((r) => setTimeout(r, 2000));
      response = await makeRequest(2);
    }

    if (!response.ok) {
      const errText = await response.text();
      console.error(`[Nexo] Ollama API Error [${response.status}]:`, errText);
      
      // 03/06/2026: mensagens de erro específicas por status code
      let userMessage = "Falha na conexão com o servidor Nexo. Tente novamente.";
      if (response.status === 429) {
        userMessage = "Muitas requisições simultâneas. Aguarde 30s e tente de novo.";
      } else if (response.status === 401 || response.status === 403) {
        userMessage = "Autenticação do Nexo pendente. O assistente está em manutenção. Se for urgente, fale no WhatsApp: https://wa.me/5521990387232";
      } else if (response.status === 408 || response.status === 504) {
        userMessage = "O Nexo demorou demais pra responder. Tente de novo com uma pergunta mais curta.";
      }
      
      return NextResponse.json(
        { error: userMessage, statusCode: response.status },
        { status: response.status === 429 ? 429 : 502 }
      );
    }

    const data = await response.json();
    const reply = data.message?.content;
    const finishReason = data.done_reason;

    if (!reply || reply.trim() === "") {
      console.warn("[Nexo] Modelo retornou resposta vazia. Payload:", JSON.stringify(data).slice(0, 500));
      return NextResponse.json(
        { error: "O modelo ficou em silêncio. Reformule sua pergunta — o Nexo vai captar." },
        { status: 200 }
      );
    }

    // 03/06/2026: Detectar resposta truncada (finish_reason=length) e fazer retry
    if (finishReason === "length" && reply.length < 80) {
      console.warn(`[Nexo] Resposta truncada (length=${reply.length}, reason=${finishReason}). Retry com temperature mais baixa...`);
      const retryResponse = await fetch(OLLAMA_API_URL, {
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
            temperature: 0.4, // mais determinístico
            top_p: 0.85,
            num_predict: 800,
          },
        }),
        signal: AbortSignal.timeout(30_000),
      });
      if (retryResponse.ok) {
        const retryData = await retryResponse.json();
        if (retryData.message?.content && retryData.message.content.length > reply.length) {
          return NextResponse.json({ reply: retryData.message.content, model: MODEL, retried: true });
        }
      }
      // Se o retry não melhorou, retorna o que tem com aviso
      console.warn(`[Nexo] Retry não melhorou resposta. Devolvendo parcial (length=${reply.length}).`);
    }

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
