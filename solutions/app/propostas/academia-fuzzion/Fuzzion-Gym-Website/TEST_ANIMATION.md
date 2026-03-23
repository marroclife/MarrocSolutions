# 🎥 Teste da Animação 3D - Background Scroll

## Como Testar Localmente

### 1. Inicie um servidor local

**Windows (Python):**
```powershell
python -m http.server 8000
```

**Alternativa (Node.js):**
```powershell
npx http-server
```

### 2. Abra no navegador
- Visite: `http://localhost:8000`

### 3. Valide a animação

✅ **Verificações principais:**

1. **Canvas como Background**
   - Ao carregar, o primeiro frame deve aparecer como background de toda a tela
   - O canvas deve cobrir 100% da largura e altura da viewport

2. **Animação no Scroll**
   - Role a página para baixo
   - Os frames devem mudar sequencialmente (1 → 2 → 3 → ... → 240)
   - A animação deve ser suave e sincronizada com o scroll

3. **Conteúdo Sobreposto**
   - Todo o texto, botões e seções aparecem SOBRE o background animado
   - O hero section com título "Transforme Seu Corpo" fica visível no topo
   - O botão CTA é interativo e clicável

4. **Indicador de Scroll**
   - O ícone de mouse aparece no canto inferior da tela
   - Ele indica para rolar (preto/branco visível)
   - Desaparece conforme você rola

5. **Console do Navegador**
   - Abra DevTools (F12 ou Ctrl+Shift+I)
   - Abra a aba "Console"
   - Verifique mensagens:
     ```
     🎬 Academia Fuzzion Gym - 3D Scroll Animation
     📊 Loading 240 frames...
     ✓ All 240 frames loaded successfully
     ```

---

## 🔍 Velocidade da Animação

A animação mapeia assim:

```
Scroll Progress   → Frame Number
0% (topo)         → Frame 1
50% (meio)        → Frame 120
100% (fundo)      → Frame 240
```

**Exemplo:**
- Se você tem 5000px de conteúdo scrollável
- Cada 1% de scroll = 2 frames
- Scroll é MUITO suave e responsivo

### Ajustar Velocidade (se necessário)

Se achar a animação muito rápida ou lenta, edite `script.js`:

```javascript
// Na função updateAnimation(), procure por:
const frameIndex = Math.floor(scrollProgress * (this.totalFrames - 1));

// Para deixar mais lenta (usa menos frames):
const frameIndex = Math.floor(scrollProgress * (this.totalFrames / 2 - 1));

// Para deixar mais rápida (pula frames):
const frameIndex = Math.floor(scrollProgress * (this.totalFrames * 2 - 1));
```

---

## 🎨 Overlay Gradient

O overlay escuro sobre o canvas ajuda a legibilidade do texto. Se quiser ajustar:

**Em styles.css procure por:**
```css
.canvas-overlay {
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.1) 0%,
        rgba(0, 0, 0, 0.3) 50%,
        rgba(0, 0, 0, 0.5) 100%
    );
}
```

Ajuste os valores de `rgba(0, 0, 0, 0.X)`:
- 0.0 = totalmente transparente
- 0.5 = 50% escuro
- 1.0 = totalmente preto

---

## 📊 Performance Check

### Métricas esperadas:

| Métrica | Alvo | Método |
|---------|------|--------|
| **FPS** | 60 | DevTools → Performance |
| **Load Time** | < 3s | Lighthouse |
| **Frames Loaded** | 240 | Console |
| **Memory** | < 300MB | DevTools → Memory |

### Teste de Performance

1. Abra DevTools (F12)
2. Vá para "Performance" tab
3. Clique em "Record"
4. Role a página por 10 segundos
5. Clique em "Stop"
6. Analise o gráfico:
   - FPS verde = ✅ Bom
   - FPS amarelo/vermelho = ⚠️ Pode precisar otimização

---

## 🐛 Troubleshooting

### Problema: Canvas preto/vazio
**Solução:**
1. Verifique se os 240 frames estão em `/frames`
2. Verifique os nomes: `ezgif-frame-001.jpg` até `ezgif-frame-240.jpg`
3. Verifique o console para erros de carregamento

### Problema: Animação não muda ao scrollar
**Solução:**
1. Verifique se há conteúdo suficiente para scroll
2. Agora o scroll é de toda a página (não só de uma seção)
3. Teste com DevTools: `window.scrollY` deve aumentar

### Problema: Texto/Botões não visíveis
**Solução:**
1. O overlay precisa ser ajustado (menos opaco)
2. Ou mudar a cor do texto
3. Edite em `.hero-text h1` a propriedade `text-shadow`

### Problema: Performance ruim
**Solução:**
1. Comprima as imagens dos frames:
   ```bash
   mogrify -quality 85 frames/*.jpg
   ```
2. Reduza a qualidade do canvas em `resizeCanvas()`
3. Aumente o intervalo de debounce no scroll listener

---

## ✨ Features Validadas

Ao rolar por toda a página, você deve ver:

1. **Hero Section** (topo)
   - Título: "Transforme Seu Corpo"
   - Subtitle + CTA Button
   - Background: Frame 1 da animação

2. **About Section**
   - Texto sobre a academia
   - Stats cards
   - Background: Frames 1-50

3. **Services Section**
   - 3 cards de serviços
   - Background: Frames 50-120

4. **Plans Section**
   - 3 planos de preços
   - Background: Frames 120-200

5. **Contact Section**
   - Formulário de contato
   - Info de contato
   - Background: Frames 200-240

6. **Footer**
   - Links e redes sociais
   - Copyright
   - Background: Frame 240 (estático - fim do scroll)

---

## 🎯 Próximos Passos

Após validar localmente:

1. **Otimizar Frames** (se necessário)
   - Comprimir imagens
   - Reduzir tamanho dos arquivos

2. **Deploy**
   - Seguir guia em `DEPLOYMENT.md`
   - Testar em produção
   - Validar performance em diferentes navegadores

3. **Analíticas**
   - Setup Google Analytics
   - Track scroll events
   - Monitor performance

---

## 📞 Suporte

Se encontrar problemas:
1. Verifique o arquivo `script.js` linha 65-80 (updateAnimation)
2. Verifique o arquivo `styles.css` linha 1-40 (canvas positioning)
3. Verifique `index.html` linha 26-27 (canvas placement)

**Debug rápido:**
```javascript
// Cole no console do DevTools
console.log('Total frames:', 240);
console.log('Scroll Y:', window.scrollY);
console.log('Max scroll:', document.documentElement.scrollHeight - window.innerHeight);
console.log('Frame index:', Math.floor(window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) * 239));
```

---

**Última atualização:** 18 de março de 2026
**Status:** ✅ Pronto para Teste
