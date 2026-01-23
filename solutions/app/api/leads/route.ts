import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma"; // <--- Importamos do nosso arquivo inteligente

export async function POST(request: Request) {
    
  try {
    const body = await request.json();
    const { name, email } = body;

    // Validação simples
    if (!name || !email) {
      return NextResponse.json(
        { error: "Nome e Email são obrigatórios." },
        { status: 400 }
      );
    }

    // Salva no Banco de Dados
    const lead = await prisma.lead.create({
      data: {
        name,
        email,
      },
    });

    return NextResponse.json({ success: true, lead });
  } catch (error) {
    console.error("Erro ao salvar lead:", error);
    return NextResponse.json(
      { error: "Erro interno ao salvar dados." },
      { status: 500 }
    );
  }
}