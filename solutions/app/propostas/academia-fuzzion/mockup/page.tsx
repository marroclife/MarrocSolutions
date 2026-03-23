import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const pageDir = path.dirname(fileURLToPath(import.meta.url));

function resolveExistingDir(candidates: string[], requiredFile: string) {
  for (const dir of candidates) {
    const candidateFile = path.join(dir, requiredFile);
    if (fs.existsSync(candidateFile)) return dir;
  }
  const attempted = candidates.map((c) => path.join(c, requiredFile)).join("\n");
  throw new Error(`ENOENT resolving mockup assets. Tried:\n${attempted}`);
}

function resolveExistingFile(candidates: string[], filename: string) {
  for (const dir of candidates) {
    const candidateFile = path.join(dir, filename);
    if (fs.existsSync(candidateFile)) return candidateFile;
  }
  const attempted = candidates.map((c) => path.join(c, filename)).join("\n");
  throw new Error(`ENOENT resolving mockup assets. Tried:\n${attempted}`);
}

const baseDir = resolveExistingDir(
  [
    path.join(pageDir, "..", "Fuzzion-Gym-Website"),
    path.join(process.cwd(), "solutions/app/propostas/academia-fuzzion/Fuzzion-Gym-Website"),
    path.join(process.cwd(), "app/propostas/academia-fuzzion/Fuzzion-Gym-Website"),
  ],
  "index.html"
);

const indexHtmlPath = path.join(baseDir, "index.html");
const stylesCssPath = path.join(baseDir, "styles.css");
const scriptJsPath = path.join(baseDir, "script.js");

const logoPath = resolveExistingFile(
  [
    path.join(pageDir, ".."),
    path.join(process.cwd(), "solutions/app/propostas/academia-fuzzion"),
    path.join(process.cwd(), "app/propostas/academia-fuzzion"),
  ],
  "fuzzion logo.png"
);

function buildSrcDoc() {
  const indexHtml = fs.readFileSync(indexHtmlPath, "utf-8");
  const stylesCss = fs.readFileSync(stylesCssPath, "utf-8");
  const scriptJs = fs.readFileSync(scriptJsPath, "utf-8");
  const logoBase64 = fs.readFileSync(logoPath).toString("base64");
  const logoDataUri = `data:image/png;base64,${logoBase64}`;
  const mockupBaseHref = "/propostas/academia-fuzzion/mockup/";

  // VÍDEO / ÍCONE DO WHATSAPP REUTILIZÁVEL
  const waIconSvg = `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1.1em" width="1.1em" xmlns="http://www.w3.org/2000/svg" style="margin-right: 6px; transform: translateY(2px);"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zM223.9 413.6c-33.6 0-66.6-9-95.6-26.1l-6.8-4-71 18.6 18.9-69.2-4.4-7C47.6 295.5 38 260 38 223.9c0-102.5 83.4-185.9 186-185.9 50.1 0 97.2 19.5 132.6 55 35.4 35.5 54.9 82.5 54.9 132.7 0 102.6-83.4 185.9-186 185.9zm101.9-139c-5.6-2.8-33.1-16.3-38.2-18.2-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.4 18.2-17.7 21.9-3.3 3.7-6.5 4.2-12.1 1.4-5.6-2.8-23.6-8.7-45-27.9-16.6-14.9-27.8-33.4-31-39-3.3-5.6-.3-8.6 2.5-11.4 2.5-2.5 5.6-6.5 8.4-9.8 2.8-3.3 3.7-5.6 5.6-9.3 1.9-3.7.9-7-.5-9.8-1.4-2.8-12.5-30.2-17.1-41.3-4.5-10.8-9.1-9.3-12.5-9.5-3.3-.2-7-.2-10.7-.2-3.7 0-9.8 1.4-14.9 7-5.1 5.6-19.5 19.1-19.5 46.5s20 53.9 22.8 57.6c2.8 3.7 39.3 60 95.1 84.1 13.3 5.7 23.6 9.1 31.7 11.7 13.3 4.2 25.4 3.6 35 2.2 10.7-1.5 33.1-13.5 37.7-26.6 4.7-13 4.7-24.2 3.3-26.6-1.4-2.4-5.1-3.7-10.7-6.5z"></path></svg>`;

  const heroCssOverrides = `
    /* =========================================================
       1 & 2. DARK MODE PREMIUM & SISTEMA DE FUNDO (GLOBAL)
       ========================================================= */
    :root {
      --bg-dark-base: #0c0c0c;
      --bg-dark-surface: #141414;
      --bg-dark-surface-hover: #1c1c1c;
      --primary-orange: #FF6D00;
      --secondary-orange: #FF8C00;
      --text-title: #ffffff;
      --text-body: #a0a0b0; /* Cinza médio puxado pro azul/frio para dar contraste com laranja */
      --border-subtle: rgba(255, 255, 255, 0.06);
      --glow-orange: rgba(255, 109, 0, 0.15);
    }

    body, html {
      background-color: var(--bg-dark-base) !important;
      color: var(--text-body) !important;
      font-family: 'Inter', system-ui, sans-serif !important;
      overflow-x: hidden;
      scroll-behavior: smooth;
    }

    /* TEXTURA NOISE (FITNESS FEELING - CIMENTO/EMBORRACHADO) */
    body::before {
      content: "";
      position: fixed;
      top: 0; left: 0; width: 100vw; height: 100vh;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.035'/%3E%3C/svg%3E");
      pointer-events: none;
      z-index: 9999;
    }

    /* ELIMINAÇÃO DE ÁREAS BRANCAS */
    .about, .services, .plans, .contact {
      background: transparent !important; /* Herda o dark global */
      padding: 110px 20px;
      position: relative;
    }
    
    /* Variação de profundidade entre seções */
    .services, .contact {
      background: radial-gradient(circle at 50% 0%, rgba(255,255,255,0.02) 0%, transparent 60%) !important;
      border-top: 1px solid var(--border-subtle);
    }

    /* =========================================================
       3. TIPOGRAFIA - CONTRASTE E PRESENÇA
       ========================================================= */
    h1, h2, h3, h4 {
      color: var(--text-title) !important;
      font-weight: 900 !important;
      letter-spacing: -0.02em;
    }
    p, li, span, a {
      color: var(--text-body);
    }
    .section-title h2 {
      font-size: 2.5rem;
      margin-bottom: 12px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      background: linear-gradient(90deg, #fff, #aaa);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    /* =========================================================
       GLASSMORPHISM NAVBAR (FIXA E ELEGANTE)
       ========================================================= */
    .navbar {
      background: rgba(12, 12, 12, 0.75) !important;
      backdrop-filter: blur(16px) !important;
      -webkit-backdrop-filter: blur(16px) !important;
      border-bottom: 1px solid var(--border-subtle) !important;
      position: fixed;
      top: 0; width: 100%;
      z-index: 1000;
      transition: all 0.3s ease;
    }
    .nav-link { color: #fff !important; font-weight: 600; text-transform: uppercase; font-size: 0.85rem; letter-spacing: 1px; }
    .nav-link:hover { color: var(--primary-orange) !important; }
    
    /* Mantendo o botão de orçamento rápido visível e com bom contraste */
    .nav-link.btn, .btn.orçamento-rápido {
      background: rgba(255,255,255,0.1) !important;
      border: 1px solid var(--border-subtle) !important;
      border-radius: 50px;
      padding: 8px 18px;
    }

    /* =========================================================
       6. HERO & BARRA DE AUTORIDADE
       ========================================================= */
    .hero {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: 
        radial-gradient(800px circle at 50% 0%, rgba(255,109,0,0.15) 0%, transparent 50%),
        radial-gradient(600px circle at 20% 80%, rgba(0,102,255,0.05) 0%, transparent 50%),
        var(--bg-dark-base) !important;
      padding-top: 80px;
    }
    .hero-content {
      z-index: 2;
      max-width: 800px;
      text-align: center;
    }
    .hero-logo-wrap {
      margin: 0 auto 30px;
      display: inline-block;
      padding: 15px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(255,109,0,0.1) 0%, transparent 70%);
      animation: pulseGlow 3s infinite alternate;
    }
    @keyframes pulseGlow {
      0% { filter: drop-shadow(0 0 15px rgba(255,109,0,0.2)); transform: scale(0.98); }
      100% { filter: drop-shadow(0 0 35px rgba(255,109,0,0.5)); transform: scale(1.02); }
    }
    .hero-logo-wrap img { width: min(300px, 60vw); height: auto; }
    .hero-title { font-size: clamp(2.5rem, 5vw, 4.5rem); line-height: 1.1; margin-bottom: 20px; text-shadow: 0 10px 30px rgba(0,0,0,0.5); }
    .hero-subtitle { font-size: 1.2rem; color: #ddd !important; font-weight: 500; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 40px; }

    /* Barra de Autoridade (Trust Banner) */
    .trust-banner {
      background: rgba(15, 15, 15, 0.9);
      border-top: 1px solid var(--border-subtle);
      border-bottom: 1px solid var(--border-subtle);
      padding: 16px 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 40px;
      flex-wrap: wrap;
    }
    .trust-item {
      display: flex; align-items: center; gap: 8px;
      color: #e0e0e0; font-size: 0.95rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;
    }
    .trust-item span.highlight { color: var(--primary-orange); font-size: 1.2rem; }

    /* =========================================================
       4. CARDS (NOVO PADRÃO DARK)
       ========================================================= */
    .service-card, .plan-card, .stat-card, .testimonial-box, .info-item {
      background: var(--bg-dark-surface) !important;
      border: 1px solid var(--border-subtle) !important;
      border-radius: 20px !important;
      box-shadow: 0 10px 30px rgba(0,0,0,0.5) !important;
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important;
      position: relative;
      overflow: hidden;
    }
    
    /* Brilho sutil interno nos cards */
    .service-card::after, .plan-card::after {
      content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%;
      background: linear-gradient(180deg, rgba(255,255,255,0.03) 0%, transparent 100%);
      pointer-events: none;
    }

    .service-card:hover, .stat-card:hover {
      background: var(--bg-dark-surface-hover) !important;
      border-color: rgba(255, 109, 0, 0.3) !important;
      transform: translateY(-8px) !important;
      box-shadow: 0 20px 40px rgba(255, 109, 0, 0.1) !important;
    }
    
    /* Consertando textos pretos em fundos que agora são escuros */
    .service-card h3, .stat-card h3 { color: #fff !important; }
    .service-card p, .service-features li { color: #aaa !important; text-shadow: none !important; }
    .service-icon { font-size: 3.5rem; filter: drop-shadow(0 5px 15px rgba(255,109,0,0.3)); margin-bottom: 20px; display: block; }

    /* =========================================================
       5. PLANOS - DESTAQUE ABSURDO
       ========================================================= */
    .plan-card.featured {
      background: linear-gradient(145deg, #1c1410 0%, #111111 100%) !important;
      border: 1px solid var(--primary-orange) !important;
      box-shadow: 0 0 40px rgba(255, 109, 0, 0.15), inset 0 0 20px rgba(255, 109, 0, 0.05) !important;
      transform: scale(1.05) !important;
      z-index: 2;
    }
    .plan-card.featured:hover {
      transform: scale(1.07) translateY(-5px) !important;
      box-shadow: 0 0 60px rgba(255, 109, 0, 0.25) !important;
    }
    .plan-header h3 { color: #fff !important; font-size: 1.8rem; text-transform: uppercase; }
    .plan-price { font-size: 3.5rem !important; font-weight: 900 !important; color: var(--primary-orange) !important; margin: 15px 0; line-height: 1; }
    .plan-price span { font-size: 1rem; color: #888; font-weight: 500; }
    
    .plan-micro { display: inline-block; background: rgba(255, 109, 0, 0.15); color: var(--primary-orange); padding: 6px 14px; border-radius: 50px; font-size: 0.85rem; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px; border: 1px solid rgba(255,109,0,0.3); }

    .plan-features li { color: #ccc !important; border-bottom: 1px solid rgba(255,255,255,0.05); padding: 12px 0; }
    .plan-features li:last-child { border-bottom: none; }

    /* =========================================================
       7. CONTATO - BLOCO DE CONVERSÃO RECONSTRUÍDO
       ========================================================= */
    .contact-container { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1.5fr; gap: 60px; }
    @media (max-width: 900px) { .contact-container { grid-template-columns: 1fr; } }
    
    .contact-info h3 { font-size: 2rem; color: #fff; margin-bottom: 10px; }
    .contact-micro { font-size: 1.1rem; color: var(--primary-orange); font-weight: 600; margin-bottom: 30px; display: block; }
    
    .info-item { padding: 25px !important; display: flex; align-items: center; gap: 20px; margin-bottom: 20px; }
    .info-icon { background: rgba(255,109,0,0.1); width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; color: var(--primary-orange); }
    .info-text h4 { margin: 0 0 5px 0; color: #fff; font-size: 1.1rem; }
    .info-text p { margin: 0; color: #aaa !important; font-size: 0.95rem; }

    /* Inputs Dark Form */
    .contact-form { background: var(--bg-dark-surface); padding: 40px; border-radius: 20px; border: 1px solid var(--border-subtle); box-shadow: 0 20px 50px rgba(0,0,0,0.4); }
    .form-group input, .form-group textarea {
      width: 100%; background: rgba(0,0,0,0.5) !important; border: 1px solid var(--border-subtle) !important;
      padding: 16px 20px; border-radius: 12px; color: #fff !important; font-size: 1rem; transition: all 0.3s;
    }
    .form-group input:focus, .form-group textarea:focus { border-color: var(--primary-orange) !important; outline: none; box-shadow: 0 0 0 4px rgba(255,109,0,0.1); background: #111 !important; }
    .form-group input::placeholder, .form-group textarea::placeholder { color: #666 !important; }

    /* =========================================================
       BOTÕES UNIVERSAIS (CTAs) Efeitos de Energia
       ========================================================= */
    .cta-button, .plan-button, .form-button, .contact-whatsapp-cta {
      background: linear-gradient(90deg, var(--primary-orange), var(--secondary-orange)) !important;
      color: #fff !important;
      border: none !important;
      padding: 18px 36px !important;
      font-size: 1.1rem !important;
      font-weight: 900 !important;
      text-transform: uppercase;
      letter-spacing: 1px;
      border-radius: 50px !important;
      cursor: pointer;
      display: inline-flex; align-items: center; justify-content: center;
      box-shadow: 0 10px 25px rgba(255, 109, 0, 0.3) !important;
      transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important;
      text-decoration: none;
      width: auto;
    }
    .plan-button { width: 100%; margin-top: 20px; }
    .form-button { width: 100%; margin-top: 10px; }
    
    .cta-button:hover, .plan-button:hover, .form-button:hover, .contact-whatsapp-cta:hover {
      transform: translateY(-4px) scale(1.03) !important;
      box-shadow: 0 15px 35px rgba(255, 109, 0, 0.5) !important;
      filter: brightness(1.1);
    }

    /* =========================================================
       PROVA SOCIAL (Testimonial Premium)
       ========================================================= */
    .testimonial { padding: 40px 20px 80px; position: relative; z-index: 5; text-align: center; }
    .testimonial-box { max-width: 800px; margin: 0 auto; padding: 40px; }
    .testimonial-stars { color: var(--primary-orange); font-size: 1.5rem; letter-spacing: 5px; margin-bottom: 20px; }
    .testimonial-quote { color: #fff; font-size: 1.5rem; font-weight: 800; line-height: 1.4; font-style: italic; margin-bottom: 20px; }
    .testimonial-author { color: #888; font-size: 1rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; }

    /* =========================================================
       10. FINAL CTA (FECHAMENTO) E STICKY MOBILE CTA
       ========================================================= */
    .final-cta { text-align: center; padding: 60px 20px 100px; background: linear-gradient(0deg, #050505 0%, transparent 100%); }
    .final-cta h3 { font-size: 2.5rem; margin-bottom: 15px; }
    .final-cta p { font-size: 1.2rem; color: #aaa; margin-bottom: 30px; }

    .sticky-mobile-cta {
      display: none;
      position: fixed; bottom: 0; left: 0; width: 100%;
      background: rgba(10, 10, 10, 0.85);
      backdrop-filter: blur(15px); -webkit-backdrop-filter: blur(15px);
      border-top: 1px solid rgba(255,109,0,0.2);
      padding: 15px 20px; z-index: 1000;
      box-shadow: 0 -10px 40px rgba(0,0,0,0.8);
      animation: slideUpMobile 0.5s ease forwards;
    }
    @keyframes slideUpMobile { from { transform: translateY(100%); } to { transform: translateY(0); } }
    .sticky-mobile-cta a { width: 100%; padding: 16px; font-size: 1.1rem; }
    
    @media (max-width: 768px) {
      .sticky-mobile-cta { display: block; }
      body { padding-bottom: 80px; } /* espaço pro botão não cobrir footer */
      .hero-title { font-size: 2.5rem; }
      .contact-form { padding: 25px; }
    }

    /* =========================================================
       MICRO-ANIMAÇÕES (SCROLL REVEAL) Classes Base
       ========================================================= */
    .reveal-hidden { opacity: 0; transform: translateY(50px); transition: all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1); }
    .reveal-visible { opacity: 1; transform: translateY(0); }
  `;

  const heroStaticHtml = `
    <section id="hero" class="hero">
      <div class="hero-content">
        <div class="hero-logo-wrap">
          <img src="${logoDataUri}" alt="Fuzzion Gym" />
        </div>
        <h1 class="hero-title">ENERGIA, DISCIPLINA E RESULTADOS</h1>
        <p class="hero-subtitle">Treino Funcional • CrossFit • Muay Thai</p>
        <a class="cta-button" href="https://wa.me/5521966331819?text=Ol%C3%A1%20Fuzzion%20Gym%21%20Quero%20agendar%20uma%20aula%20experimental%20agora" target="_blank" rel="noopener noreferrer">
          ${waIconSvg} Falar no WhatsApp
        </a>
      </div>
    </section>
    
    <!-- Barra de Autoridade -->
    <div class="trust-banner">
      <div class="trust-item"><span class="highlight">⭐</span> 4.9/5 Avaliações Reais</div>
      <div class="trust-item"><span class="highlight">🤝</span> Aceitamos Wellhub & Gurupass</div>
      <div class="trust-item"><span class="highlight">🔥</span> +1000 Vidas Transformadas</div>
    </div>
  `;

  // Script injetado para lidar com Scroll Reveal e garantir a UX premium
  const dynamicJs = `
    document.addEventListener("DOMContentLoaded", () => {
      // 1. SCROLL REVEAL - Animação suave ao rolar a página
      const revealSelectors = '.service-card, .plan-card, .info-item, .contact-form, .testimonial-box, .section-title, .about-content > div';
      const elementsToReveal = document.querySelectorAll(revealSelectors);
      
      elementsToReveal.forEach(el => el.classList.add('reveal-hidden'));

      const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
      const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            observer.unobserve(entry.target); // Anima só na primeira vez
          }
        });
      }, observerOptions);

      elementsToReveal.forEach(el => scrollObserver.observe(el));

      // 2. WHATSAPP ICONS - Injetando via JS em todos os botões CTA gerados pelo HTML original
      const waSvg = \`${waIconSvg}\`;
      document.querySelectorAll('.plan-button, .form-button').forEach(btn => {
        if (!btn.innerHTML.includes('<svg')) {
           btn.innerHTML = waSvg + " " + btn.innerHTML;
        }
      });
    });
  `;

  const stickyMobileCtaHtml = `
    <div class="sticky-mobile-cta">
      <a class="cta-button" href="https://wa.me/5521966331819" target="_blank" rel="noopener noreferrer">
        ${waIconSvg} Agendar Aula Experimental
      </a>
    </div>
  `;

  // Executando as substituições e injeções no HTML original
  let modifiedIndexHtml = indexHtml
    // Limpeza da Hero 3D antiga
    .replace(/<canvas\s+id="frameCanvas"><\/canvas>/i, "")
    .replace(/<div\s+class="canvas-overlay"><\/div>/i, "")
    
    // Configurações de base e injeção de CSS
    .replace(
      /<head([^>]*)>/i,
      `<head$1><base href="${mockupBaseHref}">`
    )
    .replace(
      /<link\s+rel="stylesheet"\s+href="styles\.css"\s*\/?>/i,
      `<style>${stylesCss}\n${heroCssOverrides}</style>`
    )
    
    // Substituição da Seção Hero completa
    .replace(
      /<section id="hero" class="hero">[\s\S]*?<\/section>\s*<!-- About Section -->/i,
      `${heroStaticHtml}\n\n    <!-- About Section -->`
    )
    
    // Ajustes de copy e clareza na seção SOBRE
    .replace(
      /<p>\s*[\s\S]*?A Academia Fuzzion Gym é a escolha de centenas de alunos[\s\S]*?do Morro da Pedra Branca\.\s*<\/p>/i,
      `<p>Treino funcional premium com técnica, intensidade e comunidade em espaço amplo com vista do Morro da Pedra Branca.</p>`
    )
    
    // Refatoração dos PLANOS (Destaque e Microcopy)
    .replace(
      /<div class="plan-badge">Mais Popular<\/div>/i,
      `<div class="plan-badge">⚡ Comece hoje</div>`
    )
    .replace(
      /<h3>Completo<\/h3>\s*<p class="plan-price">/i,
      `<h3>Completo</h3>\n<div class="plan-micro">Mais escolhido</div>\n<p class="plan-price">`
    )
    .replace(
      /<div class="plan-card featured">([\s\S]*?)<button class="plan-button">Contrate<\/button>/i,
      (_m, inner) => `<div class="plan-card featured">${inner}<button class="plan-button">Começar hoje</button>`
    )
    
    // Inserção da PROVA SOCIAL antes do Contato
    .replace(
      /<!-- Contact Section -->/i,
      `<!-- Prova Social -->\n    <section class="testimonial">\n        <div class="testimonial-box">\n            <div class="testimonial-stars">★★★★★</div>\n            <p class="testimonial-quote">"Melhor decisão que tomei foi começar aqui. Ambiente foda, professores atenciosos e resultado rápido."</p>\n            <p class="testimonial-author">— Aluno Fuzzion Gym</p>\n        </div>\n    </section>\n\n    <!-- Contact Section -->`
    )
    
    // Ajustes na seção de CONTATO
    .replace(
      /<h2>Entre em Contato<\/h2>/i,
      `<h2>Agende sua aula agora</h2><span class="contact-micro">Resposta rápida via WhatsApp</span>`
    )
    
    // Inserção do CTA FINAL e STICKY MOBILE antes do Footer
    .replace(
      /<!-- Footer -->/i,
      `<!-- CTA Final -->\n    <section class="final-cta">\n      <h3>Pronto para começar sua transformação?</h3>\n      <p>Dê o primeiro passo hoje. Clique e fale com a Fuzzion no WhatsApp.</p>\n      <a class="cta-button" href="https://wa.me/5521966331819" target="_blank" rel="noopener noreferrer">${waIconSvg} Falar no WhatsApp Agora</a>\n    </section>\n\n    <!-- Footer -->`
    )
    .replace(
      /<\/body>/i,
      `\n${stickyMobileCtaHtml}\n</body>`
    )
    
    // Injeção dos Scripts (Original + Animações/Ícones)
    .replace(
      /<script\s+src="script\.js"\s*\/?>\s*<\/script>/i,
      `<script>${scriptJs}\n${dynamicJs}</script>`
    );

  return modifiedIndexHtml;
}

export const runtime = "nodejs";

const srcDoc = buildSrcDoc();

export default function AcademiaFuzzionMockupPage() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        margin: 0,
        backgroundColor: "#050505", // Fundo super escuro para o container do iframe
        overflow: "hidden",
      }}
    >
      <style>{`html, body { width: 100%; height: 100%; margin: 0; padding: 0; background: #050505; } body { overflow: hidden; } iframe { display: block; }`}</style>
      <iframe
        title="Academia Fuzzion - Mockup Dark Premium"
        srcDoc={srcDoc}
        style={{ width: "100%", height: "100%", border: 0 }}
      />
    </div>
  );
}