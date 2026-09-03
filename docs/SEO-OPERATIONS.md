# Operação de SEO, AEO e GEO

Este documento registra a camada de medição do domínio `marroc.xyz`.

## Variáveis de produção

- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`: token do Google Search Console.
- `NEXT_PUBLIC_BING_SITE_VERIFICATION`: token do Bing Webmaster Tools.
- `NEXT_PUBLIC_GA_MEASUREMENT_ID`: ID GA4 no formato `G-XXXXXXXXXX`.
- `INDEXNOW_KEY`: chave reservada para a integração IndexNow.

Sem essas credenciais, o site continua funcionando, mas verificação e coleta não são ativadas.

## Google Search Console

1. Criar uma propriedade de domínio para `marroc.xyz` e validar via DNS.
2. Enviar `https://marroc.xyz/sitemap.xml`.
3. Inspecionar homepage, quatro pilares, `/solutions` e três artigos.
4. Acompanhar semanalmente páginas indexadas, canonicals escolhidos pelo Google, consultas, CTR e Core Web Vitals.

## Bing e respostas generativas

1. Validar o domínio no Bing Webmaster Tools.
2. Enviar o sitemap.
3. Ativar IndexNow quando a chave estiver disponível.
4. Acompanhar o relatório AI Performance: citações, URLs citadas e evolução por período.

## Convenção de campanhas e conversões

- WhatsApp: evento `generate_lead`, com parâmetro `source_page`.
- Newsletter: evento `sign_up`.
- Diagnóstico: evento `book_consultation`.
- Saídas para cases: evento `view_case`.

Os eventos devem ser validados no DebugView antes de publicar uma nova versão.

## Rotina mensal

- Comparar cliques, impressões, CTR, posição e conversões por landing page.
- Revisar páginas excluídas, duplicadas ou com canonical divergente.
- Atualizar `dateModified` apenas quando houver mudança editorial real.
- Registrar quais páginas receberam links, menções e citações em respostas de IA.
- Priorizar melhorias pelas consultas que já têm impressões entre as posições 4 e 20.
