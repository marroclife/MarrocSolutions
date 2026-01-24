#!/bin/bash
# Script para testar as novas páginas de propostas

echo "🚀 Testando Área de Propostas - Marroc Solutions"
echo ""
echo "URLs disponíveis:"
echo "  1. Listagem:        http://localhost:3000/propostas"
echo "  2. Mansão 360:      http://localhost:3000/propostas/mansao-360"
echo ""
echo "Para adicionar mais projetos:"
echo "  → Edite: lib/propostas.ts"
echo "  → Adicione um novo objeto à array 'projetos'"
echo ""
echo "Estrutura de um novo projeto:"
echo "{
  id: 'seu-projeto',
  slug: 'seu-projeto',
  titulo: 'Nome do Projeto',
  descricaoBreve: 'Descrição breve...',
  contexto: { tipoDenegocio, situacao, necessidadePrincipal },
  objetivos: ['objetivo 1', 'objetivo 2', ...],
  mockupUrl: 'https://...' (opcional),
  mockupDescricao: 'Descrição do mockup...',
  estrutura: { paginas: [...], organizacao: '...', logicaNavegacao: '...' },
  visaoEvolucao: { faseAtual: [...], fasePossivel: [...] },
}"
echo ""
echo "✅ Implementação concluída!"
echo "📖 Consulte PROPOSTAS_README.md para documentação completa"
