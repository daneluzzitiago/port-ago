# Progress Tracker

## Fase Atual

Integração do último commit do GitHub nos cards de projeto.

## Objetivo

Exibir o último commit apenas para projetos que possuem GitHub e não possuem live.

## Em Progresso

Vazio.

## Concluído

1. Criada documentação inicial em `agent/` para orientar desenvolvimento com IA.
2. Configurada automação gratuita para revisão em commit, push e pull request.
3. Validado o pipeline local com `npm run quality:ci`.
4. Definido fluxo obrigatório: partir de `main` atualizada e criar branch específica antes de editar código.
5. Criada a branch `feature/project-latest-commit` a partir de `main` atualizada.
6. Implementada busca server-side do último commit via API pública do GitHub.
7. Adicionado bloco visual de último commit somente em projetos com GitHub e sem Live.
8. Validada a entrega com `npm run quality:ci`.

## Decisões Arquitetônicas

1. Usar ESLint com `eslint-plugin-sonarjs` para regras de código limpo em JavaScript/TypeScript.
2. Usar Husky e lint-staged para bloquear commits com problemas de lint em arquivos alterados.
3. Usar workflow `Quality` no GitHub Actions para lint, type-check, Knip, jscpd e build em PRs e pushes para `main`.
4. Usar reviewdog no PR para comentar achados de ESLint diretamente no diff.
5. Usar CodeQL para análise gratuita de segurança e qualidade em JavaScript/TypeScript.
6. Usar Dependabot para abrir PRs semanais de atualização de npm e GitHub Actions.
7. Enriquecer dados externos dos cards em `getPortfolioData`, preservando `WorkbenchSite` como componente de renderização.

## Notas da Sessão

1. A integração com GitHub deve ser opcional por card: projetos com Live continuam sem bloco de último commit.
