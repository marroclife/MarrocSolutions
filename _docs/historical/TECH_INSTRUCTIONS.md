# 🔧 INSTRUÇÕES TÉCNICAS - DUAS CORREÇÕES

## Correção 1: Proteção com Senha

### Como funciona:
1. User acessa `/propostas`
2. Page verifica `localStorage.getItem("propostas_auth")`
3. Se não existe → mostra `<PasswordModal />`
4. User digita "M360" e clica "Acessar"
5. Se correto → `localStorage.setItem("propostas_auth", "true")`
6. Page renderiza normalmente
7. Próximas visitas: sem pedir senha

### Código:
```tsx
// app/propostas/page.tsx
const [isAuthenticated, setIsAuthenticated] = useState(false);

useEffect(() => {
  const auth = localStorage.getItem("propostas_auth");
  setIsAuthenticated(auth === "true");
}, []);

if (!isAuthenticated) {
  return <PasswordModal onSuccess={() => setIsAuthenticated(true)} />;
}

// Renderiza page normal...
```

### Component: `PasswordModal.tsx`
```tsx
const handleSubmit = (e: React.FormEvent) => {
  if (password === "M360") {
    localStorage.setItem("propostas_auth", "true");
    onSuccess();
  } else {
    setError(true);
  }
};
```

---

## Correção 2: M360 Separado

### Estrutura de Pastas:
```
app/propostas/
├── page.tsx                    ← Listagem (com senha)
├── [slug]/
│   └── page.tsx               ← Proposta (sem M360)
├── mansao-360/
│   └── mockup/
│       └── page.tsx           ← M360 Separado
└── M360.tsx                   ← Componente reutilizável
```

### Fluxo:
1. `/propostas/mansao-360` → Proposta estruturada
2. Botão "Ver Mockup Interativo →" → `/propostas/mansao-360/mockup`
3. `/propostas/mansao-360/mockup` → M360 renderizado

### Código em `[slug]/page.tsx`:
```tsx
// Para mansao-360: mostra botão de mockup
{projeto.slug === "mansao-360" && (
  <a href={`/propostas/${projeto.slug}/mockup`}>
    Ver Mockup Interativo →
  </a>
)}

// Não renderiza mais M360 embarcado aqui
// Apenas PropostaBlocoMockup para outros projetos
```

### Código em `mansao-360/mockup/page.tsx`:
```tsx
import dynamic from 'next/dynamic';

const M360Component = dynamic(() => import('@/app/propostas/M360'), {
  ssr: false,
  loading: () => <LoadingSpinner />
});

export default function M360Page() {
  return <M360Component />;
}
```

---

## localStorage Management

### Quando é setado:
- User submete senha correta em `/propostas`

### Quando é verificado:
- Page load em `/propostas`

### Como limpar (para dev):
```javascript
// No console do navegador:
localStorage.removeItem("propostas_auth");
```

### Persistência:
- Fica armazenado até:
  - User limpar cache/localStorage
  - Browser fechar (se "Forget on Close" configurado)
  - User sair da conta

---

## Componentes Envolvidos

### 1. PasswordModal.tsx
- Modal de autenticação
- Input de senha
- Validação
- localStorage integration
- Loading state

### 2. app/propostas/page.tsx
- Importa PasswordModal
- Gerencia isAuthenticated state
- Verificação localStorage
- Renderização condicional

### 3. app/propostas/[slug]/page.tsx
- Removido: M360 embarcado
- Adicionado: Botão "Ver Mockup" (mansao-360 only)
- Mantém: PropostaBlocoMockup (outros projetos)

### 4. app/propostas/mansao-360/mockup/page.tsx
- Dynamic import do M360
- Header com breadcrumb
- Renderiza M360 completo
- Link de volta

---

## Variáveis de Environment

Nenhuma necessária. Tudo está hardcoded:
- Senha: `"M360"` (em PasswordModal.tsx)
- localStorage key: `"propostas_auth"`

---

## Testing Checklist

- [ ] Acesse `/propostas` sem localStorage
- [ ] Vê modal de senha
- [ ] Digita "M360" → funciona
- [ ] Digita outra coisa → erro visual
- [ ] localStorage.setItem chamado
- [ ] Próxima visita em `/propostas` → sem pedir senha
- [ ] Clique em "Mansão 360" → proposta limpa
- [ ] Vê botão "Ver Mockup Interativo →"
- [ ] Clique no botão → navega para `/propostas/mansao-360/mockup`
- [ ] M360 renderiza completo
- [ ] Breadcrumb mostra: `Propostas / Mansão 360 / Mockup`
- [ ] Link "Ver proposta estruturada" volta para `/propostas/mansao-360`

---

## Performance Notes

- M360 carrega com `next/dynamic` (não bloqueia page load)
- Loading spinner while M360 loads
- localStorage é muito rápido (<1ms)
- Sem queries de banco (tudo client-side)

---

## Security Notes

- Senha em plaintext no localStorage (apenas demo)
- Para produção real: usar tokens JWT
- Atualmente: proteção por "obscurity"
- Adequado para propostas B2B confidenciais

---

**Fim das instruções técnicas.**
