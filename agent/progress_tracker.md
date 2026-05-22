# Progress Tracker

## Fase Atual

Resolução de conflitos da PR #27.

## Objetivo

Manter a validação de dependências compatível com a Vercel e preservar o histórico documental da feature de último commit já integrada na `main`.

## Em Progresso

1. Atualizar a branch remota da PR #27 com os conflitos resolvidos.

## Concluído

1. Criada documentação inicial em `agent/` para orientar desenvolvimento com IA.
2. Configurada automação gratuita para revisão em commit, push e pull request.
3. Validado o pipeline local com `npm run quality:ci`.
4. Definido fluxo obrigatório: partir de `main` atualizada e criar branch específica antes de editar código.
5. Criada a branch `feature/project-latest-commit` a partir de `main` atualizada.
6. Implementada busca server-side do último commit via API pública do GitHub.
7. Adicionado bloco visual de último commit somente em projetos com GitHub e sem Live.
8. Validada a entrega com `npm run quality:ci`.
9. Criada a PR #26 para a feature de último commit nos cards de projeto.
10. Identificada falha da Vercel em preview do Dependabot: `npm install` encontrou conflito de peer dependencies entre pacotes Payload `3.83.0` e `3.84.1`.
11. Adicionada validação de resolução de dependências ao workflow `Quality`.
12. Reordenado `npm run quality` para executar Knip antes do type-check e manter o comando estável localmente.
13. Validada a correção com `npm install --package-lock-only --ignore-scripts --dry-run` e `npm run quality:ci`.
14. Registrada regra para monitorar operações longas e reportar travamentos em vez de deixar o agente carregando sem feedback.
15. Resolvidos conflitos da PR #27 após merge da `main`.
16. Validada a resolução com `npm install --package-lock-only --ignore-scripts --dry-run` e `npm run quality:ci`.

## Decisões Arquitetônicas

1. Usar ESLint com `eslint-plugin-sonarjs` para regras de código limpo em JavaScript/TypeScript.
2. Usar Husky e lint-staged para bloquear commits com problemas de lint em arquivos alterados.
3. Usar workflow `Quality` no GitHub Actions para lint, type-check, Knip, jscpd e build em PRs e pushes para `main`.
4. Usar reviewdog no PR para comentar achados de ESLint diretamente no diff.
5. Usar CodeQL para análise gratuita de segurança e qualidade em JavaScript/TypeScript.
6. Usar Dependabot para abrir PRs semanais de atualização de npm e GitHub Actions.
7. Enriquecer dados externos dos cards em `getPortfolioData`, preservando `WorkbenchSite` como componente de renderização.
8. Validar no PR a resolução de dependências com `npm install --package-lock-only --ignore-scripts --dry-run`, porque a Vercel usa o caminho de `npm install`.
9. Monitorar comandos longos, hooks, pushes, builds e agentes em background, comunicando travamentos ou lentidão anormal.

## Notas da Sessão

1. A integração com GitHub deve ser opcional por card: projetos com Live continuam sem bloco de último commit.
