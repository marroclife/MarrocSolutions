import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import { cookies } from 'next/headers';

// Configuração da OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const maxDuration = 60; // Timeout estendido para leitura profunda

export async function POST(req: Request) {
  try {
    const { url, email } = await req.json();

    if (!url || !email) {
      return NextResponse.json({ error: 'URL e E-mail são obrigatórios.' }, { status: 400 });
    }

    // --- 1. Rate Limit (Opcional - Comente para testes) ---
    const cookieStore = await cookies();
    const lastOracleUse = cookieStore.get('oracle_cooldown');
    
    // if (lastOracleUse) {
    //   return NextResponse.json({ error: 'O Oráculo precisa recarregar. Tente novamente em 24h.' }, { status: 429 });
    // }

    // --- 2. Disparo para n8n (Fire-and-forget) ---
    if (process.env.N8N_ORACLE_WEBHOOK) {
        fetch(process.env.N8N_ORACLE_WEBHOOK, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ url, email, timestamp: new Date().toISOString() }),
        }).catch(err => console.error("Erro Webhook n8n:", err));
    }

    // --- 3. A Nova Visão (Jina AI Reader) ---
    // Usamos o prefixo 'https://r.jina.ai/' para converter o site em Markdown limpo para LLMs
    const targetUrl = url.startsWith('http') ? url : `https://${url}`;
    const jinaUrl = `https://r.jina.ai/${targetUrl}`;
    
    let siteContent = "";

    try {
      const siteRes = await fetch(jinaUrl, {
        headers: { 
            'User-Agent': 'MarrocSolutions/1.0',
            'X-Return-Format': 'markdown' 
        }
      });

      if (!siteRes.ok) throw new Error("Falha na leitura do site");
      
      const rawText = await siteRes.text();
      
      // Cortamos para garantir que cabe no contexto (aprox 12k caracteres é seguro e suficiente)
      siteContent = rawText.slice(0, 12000);

      // Verificação de Segurança: Se o site vier vazio
      if (siteContent.length < 200) {
        throw new Error("Conteúdo insuficiente para análise");
      }

    } catch (error) {
      console.error("Scraping Error:", error);
      return NextResponse.json({ 
        result: "🚫 **Bloqueio no Sinal Digital**\n\nO Guardião tentou acessar seu site, mas encontrou um escudo (firewall ou erro de servidor) que impede a leitura externa.\n\nIsso, por si só, é um diagnóstico: seu site pode estar invisível para ferramentas de busca.\n\n**Recomendação:** Agende uma auditoria manual conosco." 
      });
    }

    // --- 4. A Invocação (Prompt Anti-Alucinação) ---
    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: `Você é o Oráculo da Marroc Solutions. Sua análise deve ser baseada ESTRITAMENTE no conteúdo fornecido.
          
          🚫 PROIBIDO ALUCINAR: Se o texto fornecido não tiver informações suficientes, diga isso. Não invente menus ou textos que não existem.
          
          SUA MISSÃO:
          1. Identifique o NICHO do site com base no texto.
          2. Critique a Copywriting (Textos de Venda) e a Clareza da Oferta.
          3. Aponte falhas técnicas implícitas (ex: se o texto é confuso, a UX provavelmente também é).

          TOM DE VOZ:
          "Cyberpunk Místico". Profissional, direto, mas usando termos como "Frequência", "Sinal", "Código", "Egrégora".
          Seja duro na queda. O objetivo é mostrar que o site atual é fraco para vender a consultoria.

          ESTRUTURA DA RESPOSTA (Markdown):
          1. **A Assinatura (O que o site diz ser):** Resuma o que você entendeu do negócio em 1 frase.
          2. **Ruído no Sinal (Problemas Reais):** Cite 2 problemas específicos encontrados no TEXTO (ex: "Não há chamada para ação clara", "O texto sobre 'Sobre Nós' é genérico").
          3. **O Veredito:** Uma frase final sobre o potencial desperdiçado.
          `
        },
        {
          role: "user",
          content: `URL Alvo: ${targetUrl}
          
          Conteúdo Extraído (Markdown):
          ---
          ${siteContent}
          ---
          
          Faça a análise agora.`
        }
      ],
      temperature: 0.5, // Baixei a temperatura para ser mais analítico e menos criativo
    });

    const diagnosis = completion.choices[0].message.content;

    const response = NextResponse.json({ result: diagnosis });
    // response.cookies.set('oracle_cooldown', 'true', { maxAge: 86400, httpOnly: true }); // Comentado para testes
    
    return response;

  } catch (error) {
    console.error("Erro Geral:", error);
    return NextResponse.json({ error: 'Erro interno na matriz.' }, { status: 500 });
  }
}