# Current Task

## 1. Objetivo da tarefa

Consolidar a configuração inicial de contexto para desenvolvimento assistido por IA no Port Ago. A tarefa deve garantir que qualquer agente consiga entender escopo, arquitetura, padrões de código e identidade visual antes de alterar a aplicação.

## 2. Decisões de design

1. A identidade visual oficial é workbench editorial, com fundo claro quente, cartões físicos, bordas fortes e sombras offset.
2. A paleta deve seguir `agent/ui_context.md` e `app/(app)/globals.css`.
3. A tipografia oficial é Fraunces para títulos, Archivo para texto geral e IBM Plex Mono para labels técnicos.
4. Não usar neon, aurora pesada, grid cyber ou glassmorphism como linguagem principal.
5. O conteúdo administrável continua vindo do Payload CMS.

## 3. Detalhes de implementação

1. Criar e manter os arquivos de contexto dentro de `agent/`.
2. Garantir que os documentos reflitam o estado atual do repositório: Next.js, React, TypeScript, Tailwind CSS v4 e Payload CMS.
3. Registrar no tracker qualquer decisão arquitetônica tomada depois desta configuração inicial.
4. Antes de implementar futuras features, o agente deve ler `project_overview.md`, `architecture.md`, `code_standards.md`, `ai_workflow_rules.md` e `ui_context.md`.

## 4. Checklist de conclusão

- [x] A pasta `agent/` existe na raiz do repositório.
- [x] `agent/project_overview.md` descreve metas, fluxo principal e fora de escopo.
- [x] `agent/architecture.md` descreve stack, camadas e invariáveis.
- [x] `agent/code_standards.md` define padrões de TypeScript, React, Next.js, CSS e Payload.
- [x] `agent/ai_workflow_rules.md` instrui a IA a trabalhar em um recurso ou subsistema por vez.
- [x] `agent/ui_context.md` documenta identidade visual, paleta, tipografia, bordas e regras de UI.
- [x] `agent/progress_tracker.md` está inicializado na fase de configuração inicial.
- [x] Esta tarefa é marcada como concluída quando os arquivos acima estiverem criados e revisados.
