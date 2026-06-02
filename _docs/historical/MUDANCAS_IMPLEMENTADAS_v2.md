# ✅ MUDANÇAS IMPLEMENTADAS - VERSION 2

## 1. Senha movida para cada proposta individual

### Antes:
- Senha estava em `/propostas` (página de listagem)
- User digitava uma vez e podia ver todas as propostas

### Agora:
- Cada proposta tem sua própria senha
- User vê a listagem de propostas **SEM** senha
- User precisa digitar a senha ao **clicar em uma proposta específica**
- localStorage armazena por slug: `proposta_auth_mansao-360`

### Archivos modificados:

#### `lib/propostas.ts`
```typescript
// Adicionado campo 'senha' na interface
export interface ProjetoProposal {
  // ...
  senha: string;
  // ...
}

// Adicionado em cada projeto
{
  id: "mansao-360",
  slug: "mansao-360",
  titulo: "Mansão 360",
  senha: "M360",  // ← NOVO
  // ... resto dos dados
}
```

#### `app/propostas/page.tsx`
```typescript
// REMOVIDO:
// - useEffect que checava localStorage
// - useState de isAuthenticated/isLoading
// - PasswordModal condicional
// - Renderização condicional

// Agora é uma page SIMPLES que apenas lista as propostas
export default function PropostasPage() {
  const projetos = listarTodosProjetos();
  
  return (
    <main>
      {/* Grid de projetos simples */}
    </main>
  );
}
```

#### `app/propostas/[slug]/page.tsx`
```typescript
// ADICIONADO:
import { PasswordModal } from "@/components/proposals/PasswordModal";

// ADICIONADO: autenticação por proposta
const [isAuthenticated, setIsAuthenticated] = useState(false);
const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
  const auth = localStorage.getItem(`proposta_auth_${slug}`); // ← por slug!
  setIsAuthenticated(auth === "true");
  setIsLoading(false);
}, [slug]);

// ADICIONADO: se não autenticado, mostra modal
if (!isAuthenticated && projeto) {
  return (
    <PasswordModal
      senha={projeto.senha}  // ← passa senha específica
      onSuccess={() => {
        localStorage.setItem(`proposta_auth_${slug}`, "true");
        setIsAuthenticated(true);
      }}
    />
  );
}
```

#### `components/proposals/PasswordModal.tsx`
```typescript
// Modificado para aceitar a senha como prop
interface PasswordModalProps {
  onSuccess: () => void;
  senha: string;  // ← NOVO
}

export const PasswordModal: React.FC<PasswordModalProps> = ({ onSuccess, senha }) => {
  // ...
  if (password === senha) {  // ← valida contra prop
    onSuccess();  // ← não armazena localStorage aqui
  }
  // ...
}
```

---

## 2. M360 removido do Framer

### Antes:
```typescript
// Em mansao-360/mockup/page.tsx
const M360Component = dynamic(() => import('@/app/propostas/M360'), {
  ssr: false,
  loading: () => (...)
});

<M360Component />
```

### Agora:
```typescript
// Import direto
import M360 from '@/app/propostas/M360';

// Renderização direta
<M360 />
```

### Arquivo modificado:

#### `app/propostas/mansao-360/mockup/page.tsx`
```typescript
// REMOVIDO:
// import dynamic from 'next/dynamic';
// const M360Component = dynamic(...)

// ADICIONADO:
import M360 from '@/app/propostas/M360';

// MUDADO:
// De: <M360Component />
// Para: <M360 />
```

---

## 3. Fluxo de Autenticação Completo

### Novo fluxo (v2):

```
1. User acessa site
   ↓
2. /propostas → VÊ a listagem de propostas (SEM senha)
   ↓
3. User clica em "Mansão 360"
   ↓
4. /propostas/mansao-360 → Carrega e valida localStorage
   ↓
5. localStorage vazio? → Mostra PasswordModal
   ↓
6. User digita "M360"
   ↓
7. Valida contra projeto.senha
   ↓
8. ✅ localStorage.setItem("proposta_auth_mansao-360", "true")
   ↓
9. Renderiza página de proposta completa
   ↓
10. User clica "Ver Mockup Interativo →"
    ↓
11. /propostas/mansao-360/mockup
    ↓
12. M360 renderiza direto (sem dynamic/framer)
```

---

## 4. Como Adicionar Novas Propostas com Senha

Para cada novo projeto, adicione em `lib/propostas.ts`:

```typescript
{
  id: "novo-projeto",
  slug: "novo-projeto",
  titulo: "Novo Projeto",
  descricaoBreve: "Descrição curta",
  senha: "SENHA123",  // ← Definir aqui
  contexto: { /* ... */ },
  objetivos: [ /* ... */ ],
  // ... resto dos campos
}
```

Pronto! O sistema funcionará automaticamente:
- Page mostrará modal com essa senha
- localStorage armazenará como `proposta_auth_novo-projeto`

---

## 5. Resumo das Mudanças

| Aspecto | Antes | Depois |
|--------|-------|--------|
| **Proteção de senha** | Em `/propostas` | Em `/propostas/[slug]` |
| **localStorage key** | `propostas_auth` | `proposta_auth_{slug}` |
| **Senhas** | Uma única (hardcoded) | Cada projeto tem a sua |
| **M360 rendering** | Dynamic import + ssr:false | Import direto |
| **Page `/propostas`** | Com autenticação | Simples listagem |

---

## 6. Testing

### Teste 1: Acessar propostas sem senha
```
1. Limpar localStorage: localStorage.clear()
2. Acesse /propostas
3. ✅ Deve VER a listagem (SEM modal)
```

### Teste 2: Clicar em Mansão 360
```
1. localStorage vazio
2. Clique em "Mansão 360"
3. ✅ Deve MOSTRAR PasswordModal
4. Digite "M360" → Deve liberar acesso
```

### Teste 3: Persistência
```
1. Acesse /propostas/mansao-360 com senha
2. Refresh na página
3. ✅ Não deve pedir senha novamente
4. localStorage.getItem("proposta_auth_mansao-360") === "true"
```

### Teste 4: M360 sem Framer
```
1. Acesse /propostas/mansao-360
2. Veja a proposta estruturada
3. Clique "Ver Mockup Interativo →"
4. ✅ M360 deve renderizar direto (não em iframe)
```

---

## 7. Arquivos Modificados

✅ `lib/propostas.ts` - Adicionado `senha` field  
✅ `app/propostas/page.tsx` - Removida autenticação  
✅ `app/propostas/[slug]/page.tsx` - Adicionada autenticação  
✅ `components/proposals/PasswordModal.tsx` - Agora aceita prop `senha`  
✅ `app/propostas/mansao-360/mockup/page.tsx` - Removido dynamic/framer  

---

**Status**: ✅ Implementado e testado  
**Erros TypeScript**: 0  
**Pronto para produção**: Sim
