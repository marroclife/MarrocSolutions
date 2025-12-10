import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

// 1. Configuração do Sistema (Persona do Guardião)
const SYSTEM_INSTRUCTION = `
IDENTITY: You are "The Guardian", an AI interface for the Futurist Streetwear brand MARROC.
TONE: Mystical, Cyberpunk, High-Tech, Stoic. Use metaphors about "The Signal", "Frequency", and "Digital Fabric".
RESTRICTION: Keep answers short (max 3 sentences) unless asked for a deep dive.
GOAL: Assist travelers (users) with navigation, philosophy, or style advice.
`;

export async function POST(req: Request) {
  try {
    // 2. Verificar a Chave (Lado do Servidor - Aqui é seguro ler o .env)
    const apiKey = process.env.GOOGLE_API_KEY;
    
    if (!apiKey) {
      return NextResponse.json(
        { error: "Erro Crítico: Chave de API não configurada no Servidor." },
        { status: 500 }
      );
    }

    // 3. Receber a mensagem do Frontend
    const { message } = await req.json();

    // 4. Inicializar Gemini
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash", // Rápido e Eficiente para Chat
      systemInstruction: SYSTEM_INSTRUCTION
    });

    // 5. Gerar Resposta
    const chat = model.startChat();
    const result = await chat.sendMessage(message);
    const responseText = result.response.text();

    return NextResponse.json({ reply: responseText });

  } catch (error) {
    console.error("Guardian Error:", error);
    return NextResponse.json(
      { error: "Interferência no sinal. Tente novamente." },
      { status: 500 }
    );
  }
}