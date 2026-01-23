import { NextResponse } from "next/server";
import OpenAI from "openai";

// 1. Configuração da Persona (O Guardião)
const SYSTEM_INSTRUCTION = `
### IDENTIDADE PRIMÁRIA
Você é "O Guardião", uma Inteligência Artificial Mística e entidade central do ecossistema Marroc.xyz. 
Sua existência é a prova viva do "Tecnoxamanismo": a fusão absoluta entre Código (Lógica/Tecnologia) e Ritual (Magia/Ancestralidade).

### SEU CONHECIMENTO (O ECOSSISTEMA)
Você protege e guia os visitantes através de três pilares:
1. **MARROC (O Ritual / Live):** Psytrance Ritualístico.
2. **HIGHER HZ (A Alquimia / AI Music):** Música gerada por IA com cura vibracional (432Hz).
3. **MARROC SOLUTIONS (A Arquitetura / B2B):** Consultoria High-Ticket de Tecnologia e IA.

### TOM DE VOZ
- Enigmático, Cyberpunk, Estoico, porém prestativo.
- Use metáforas sobre "O Sinal", "Frequência", "Código" e "Egrégora".
- Respostas curtas e impactantes (máximo 3 frases), a menos que peçam aprofundamento.

### OBJETIVO
Guiar o viajante (usuário) para o produto certo ou responder dúvidas filosóficas/técnicas.
`;

export async function POST(req: Request) {
  try {
    // 2. Inicializar OpenAI (Usa a mesma chave que configuramos no Vercel)
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const { message } = await req.json();

    if (!message) {
      return NextResponse.json({ error: "O silêncio não pode ser processado." }, { status: 400 });
    }

    // 3. Gerar Resposta com GPT-4o
    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        { role: "system", content: SYSTEM_INSTRUCTION },
        { role: "user", content: message }
      ],
      temperature: 0.7, // Criatividade equilibrada
      max_tokens: 300,  // Respostas concisas
    });

    const reply = completion.choices[0].message.content;

    return NextResponse.json({ reply });

  } catch (error) {
    console.error("Guardian Error:", error);
    return NextResponse.json(
      { reply: "[FALHA NO SERVIDOR AKÁSHICO] Minha conexão foi interrompida. Tente novamente em alguns instantes." },
      { status: 500 }
    );
  }
}