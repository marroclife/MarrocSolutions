import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import { cookies } from 'next/headers';

// Configuração da OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const maxDuration = 60; // Timeout maior para leitura de sites

export async function POST(req: Request) {
  try {
    const { url, email } = await req.json();

    // 1. Validação
    if (!url || !email) {
      return NextResponse.json({ error: 'URL e E-mail são obrigatórios para a invocação.' }, { status: 400 });
    }

    // 2. Rate Limit via Cookie (Bloqueio de 24h)
    const cookieStore = await cookies();
    const lastOracleUse = cookieStore.get('oracle_cooldown');
    
    // ATENÇÃO: Para testes, você pode comentar este bloco if
    if (lastOracleUse) {
      return NextResponse.json({ 
        error: 'O Oráculo precisa recarregar sua energia. Você já fez uma leitura nas últimas 24h.' 
      }, { status: 429 });
    }

    // 3. Disparo para n8n (Fire-and-Forget para não travar a UI)
    // Envia o lead imediatamente. Não usamos await para não somar ao tempo de loading.
    if (process.env.N8N_ORACLE_WEBHOOK) {
        fetch(process.env.N8N_ORACLE_WEBHOOK, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ url, email, timestamp: new Date().toISOString() }),
        }).catch(err => console.error("Erro silencioso no Webhook n8n:", err));
    }

    // 4. Raspagem Simples (Scraping)
    const targetUrl = url.startsWith('http') ? url : `https://${url}`;
    let siteText = "";
    
    try {
      const siteRes = await fetch(targetUrl, { 
        headers: { 
            'User-Agent': 'Mozilla/5.0 (compatible; MarrocBot/1.0; +https://marroc.xyz)' 
        },
        next: { revalidate: 0 } // Sem cache
      });
      
      if (!siteRes.ok) throw new Error("Falha ao acessar site");
      
      const html = await siteRes.text();
      
      // Limpeza brutal para economizar tokens e focar no conteúdo
      siteText = html
        .replace(/<script[^>]*>([\s\S]*?)<\/script>/gi, "")
        .replace(/<style[^>]*>([\s\S]*?)<\/style>/gi, "")
        .replace(/<[^>]+>/g, " ") // Remove tags HTML
        .replace(/\s+/g, " ")     // Remove espaços extras
        .slice(0, 12000);         // Limita caracteres (aprox 3k tokens)
        
    } catch (error) {
      return NextResponse.json({ error: 'Não consegui acessar essa dimensão digital. Verifique a URL (o site pode ter bloqueios de bot).' }, { status: 400 });
    }

    // 5. Invocação da IA (Persona Hacker Místico)
    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: `Você é o Oráculo do Marroc.xyz, um Arquiteto de Soluções Digitais e Hacker Místico.
          
          SUA MISSÃO:
          Fazer uma "Leitura Fria" (Cold Reading) impiedosa mas construtiva do site fornecido.
          Você deve misturar terminologia técnica (UX, SEO, Performance) com metáforas esotéricas/místicas.

          TOM DE VOZ:
          Enigmático, direto, profissional e levemente "Dark/Cyberpunk".
          Não seja genérico. Encontre falhas reais ou oportunidades perdidas no texto fornecido.
          
          ESTRUTURA DA RESPOSTA (Use Markdown simples):
          1. **A Aura (Impressão Inicial):** O que o site transmite em 3 segundos? Está confuso? Está genérico?
          2. **O Bloqueio (Problemas):** Cite 2 pontos onde o "fluxo de energia" (conversão/vendas) está vazando.
          3. **O Veredito:** Uma frase de impacto final sobre o potencial desperdiçado.

          IMPORTANTE:
          - Não dê a solução técnica completa (ex: "instale o plugin X"). Diga O QUE está errado, não COMO corrigir. Gere curiosidade para a consultoria.
          - Finalize dizendo: "O Guardião recomenda uma intervenção arquitetônica."`
        },
        {
          role: "user",
          content: `Analise a alma digital deste site: ${targetUrl}. \n\n CONTEÚDO EXTRAÍDO: \n ${siteText}`
        }
      ],
      temperature: 0.7,
    });

    const diagnosis = completion.choices[0].message.content;

    // Define Cookie
    const response = NextResponse.json({ result: diagnosis });
    response.cookies.set('oracle_cooldown', 'true', { 
        maxAge: 60 * 60 * 24, // 1 dia
        httpOnly: true 
    });
    
    return response;

  } catch (error) {
    console.error("Erro no Oráculo:", error);
    return NextResponse.json({ error: 'Interferência crítica no sinal. Tente novamente mais tarde.' }, { status: 500 });
  }
}