# 🚀 Mansão 360 — Guia Rápido

## ⚡ Comece Aqui

### 1️⃣ Acessar a Página
```
URL: /propostas/mansao-360
Senha: M360
```

### 2️⃣ URGENTE: Atualizar WhatsApp
```typescript
// Arquivo: lib/constants.ts

export const CONTACT = {
  whatsapp: "SEU_NUMERO_AQUI",  // ← SUBSTITUA ESTE NÚMERO
  email: "contato@marrocsolutions.com",
  instagram: "@marrocsolutions",
};
```

Exemplo com número real:
```typescript
whatsapp: "5511987654321",  // 55 = Brasil, 11 = DDD, número
```

### 3️⃣ IMPORTANTE: Adicionar Mockup
Se você tem URL do Figma/Framer:

```typescript
// Arquivo: components/proposals/Mansao360Mockup.tsx

// Na seção de renderização, substitua:
mockupUrl ? (
  <iframe
    src="https://seu-mockup-url.aqui"  // ← SEU URL
    title={`Mockup ${titulo}`}
    className="w-full h-full border-0 rounded-lg"
    allowFullScreen
  />
) : (...)
```

---

## 📋 Estrutura da Página

```
/propostas/mansao-360
├── Header (sticky)
├── Hero Principal
├── Contexto (3 cards)
├── Objetivos (5 checkmarks)
├── Estrutura (3 colunas)
├── Mockup Interativo
├── Domínio (mansao360.com)
├── Opções (Toggle)
├── Evolução (2 fases)
├── Próximo Passo (CTAs)
└── Footer
```

---

## 🎨 Personalizações Rápidas

### Mudar Valores
```typescript
// Em: components/proposals/Mansao360Opcoes.tsx

// Opção 1
valor: "R$ 3.500,00",  // ← Mudar aqui

// Opção 2
valor: "a partir de R$ 2.000,00",  // ← Mudar aqui
```

### Mudar Senha
```typescript
// Em: app/propostas/mansao-360/page.tsx

const senha = "NOVA_SENHA";  // ← Mudar aqui
```

### Mudar Cores (Tailwind)
```tsx
// Procure por "neon-green" e substitua
// Exemplos de cores:
// blue-500, red-500, purple-500, emerald-500, etc.
```

---

## ✅ Checklist de Deployment

Antes de ir para produção:

```
[ ] WhatsApp atualizado
[ ] Mockup URL adicionada
[ ] Testado em desktop
[ ] Testado em mobile
[ ] Autenticação OK (M360)
[ ] Links funcionando
[ ] CTAs funcionando
[ ] Scroll funcionando
[ ] Toggle funcionando
```

---

## 🔗 Links Rápidos

| Componente | Local |
|-----------|-------|
| Página Principal | `app/propostas/mansao-360/page.tsx` |
| Hero | `components/proposals/Mansao360Hero.tsx` |
| Contexto | `components/proposals/Mansao360Contexto.tsx` |
| Opções | `components/proposals/Mansao360Opcoes.tsx` |
| Mockup | `components/proposals/Mansao360Mockup.tsx` |
| Domínio | `components/proposals/Mansao360Dominio.tsx` |
| Evolução | `components/proposals/Mansao360Evolucao.tsx` |
| Próximo Passo | `components/proposals/Mansao360ProximoPasso.tsx` |

---

## 🆘 Troubleshooting

### Página em branco?
- Verifique console (F12)
- Confirme estrutura de pastas
- Confirme imports corretos

### Senha não funciona?
- Senha é sensível a maiúsculas: `M360`
- Verifique localStorage (DevTools)
- Limpe cache: Ctrl+Shift+Delete

### Mockup não aparece?
- URL do iframe está correta?
- Domínio permite embed?
- Teste em nova aba para confirmar

### WhatsApp não abre?
- Número está no formato: 55XXXXXXXXXXX?
- Teste manualmente: https://wa.me/55119999999?text=ola

---

## 🎁 Recursos

- **Documentação Completa:** MANSAO360_PROPOSTA_ESTRUTURA.md
- **Checklist Detalhado:** MANSAO360_CHECKLIST.md
- **Visualização:** MANSAO360_VISUALIZACAO.md
- **Resumo Executivo:** MANSAO360_RESUMO.md

---

## 🎯 Próximos Passos (Ordem)

1. ✏️ Atualizar WhatsApp
2. 🖼️ Adicionar Mockup URL
3. 🧪 Testar página
4. 👥 Compartilhar com cliente
5. 📧 Integrar email (opcional)
6. 🎨 Ajustar conforme feedback
7. 🚀 Deploy para produção

---

## 💡 Dicas Pro

- Use DevTools para debugar rápido
- Teste links com Ctrl+Click
- Verifique responsividade em dev tools (F12 → Device Toggle)
- Use Git para versionar mudanças
- Backup antes de mudanças importantes

---

## 📱 URLs Úteis

```
Proposta: /propostas/mansao-360
Lista: /propostas
Home: /
```

---

## 🎉 Pronto!

Você tem tudo que precisa. A página está funcional, profissional e pronta para impressionar.

**Dúvidas?** Consulte a documentação completa.

---

**Última atualização:** 24/01/2025

