import { NextResponse } from "next/server";
import { SignJWT } from "jose";

const SECRET = new TextEncoder().encode(
  process.env.TERAPIAS_SECRET || "marroc-terapias-default-secret-change-me"
);

// Chaves de acesso válidas (slug = nome da pasta do cliente)
const KEYS: Record<string, string> = {
  Nara: "nara",
  Marcio: "marcio",
  Serena: "serena",
  Tamires: "tamires",
};

export async function POST(request: Request) {
  try {
    const { key } = await request.json();

    if (!key || typeof key !== "string") {
      return NextResponse.json({ error: "Chave não fornecida" }, { status: 400 });
    }

    const normalizedKey = key.trim();
    const slug = KEYS[normalizedKey];

    if (!slug) {
      return NextResponse.json({ error: "Chave inválida" }, { status: 401 });
    }

    const token = await new SignJWT({ slug })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("7d")
      .sign(SECRET);

    const response = NextResponse.json({ success: true, slug });

    response.cookies.set({
      name: "terapias-token",
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 dias
      path: "/",
    });

    return response;
  } catch (error) {
    console.error("Erro no login de terapias:", error);
    return NextResponse.json({ error: "Erro interno" }, { status: 500 });
  }
}
