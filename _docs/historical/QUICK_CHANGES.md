# ⚡ QUICK START - Duas Mudanças Simples

## 🔐 Mudança 1: Proteção com Senha

**Onde:** `/propostas` (listagem)
**Senha:** `M360`
**Como funciona:**
```
User → /propostas → Modal pede senha → Digita "M360" → Acessa
```

Persistência com localStorage (não pede toda vez)

---

## 📂 Mudança 2: M360 Separado

**Antes:**
```
/propostas/mansao-360
├─ Proposta
└─ M360 AQUI (misturado)
```

**Agora:**
```
/propostas/mansao-360
└─ Proposta LIMPA
   └─ Botão "Ver Mockup →"

/propostas/mansao-360/mockup
└─ M360 SEPARADO (full-width)
```

---

## 🔗 Rotas Finais

| URL | O quê |
|-----|-------|
| `/propostas` | Listagem (com senha) |
| `/propostas/mansao-360` | Proposta estruturada |
| `/propostas/mansao-360/mockup` | M360 interativo |

---

## 🎯 Teste

```bash
npm run dev
```

1. Acesse `/propostas` → Modal pede "M360"
2. Clique em "Mansão 360" → Vê proposta
3. Clique "Ver Mockup" → M360 separado

---

**Tudo pronto! ✅**
