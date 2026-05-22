# Progress Tracker

## Fase Atual

Correção da validação de dependências para Vercel.

## Objetivo

Garantir que conflitos de dependências que quebram o install da Vercel falhem ainda no PR.

## Em Progresso

Vazio.

## Concluído

1. Criada documentação inicial em `agent/` para orientar desenvolvimento com IA.
2. Configurada automação gratuita para revisão em commit, push e pull request.
3. Validado o pipeline local com `npm run quality:ci`.
4. Criada a PR #26 para a feature de último commit nos cards de projeto.
5. Identificada falha da Vercel em preview do Dependabot: `npm install` encontrou conflito de peer dependencies entre pacotes Payload `3.83.0` e `3.84.1`.
6. Adicionada validação de resolução de dependências ao workflow `Quality`.
7. Reordenado `npm run quality` para executar Knip antes do type-check e manter o comando estável localmente.
8. Validada a correção com `npm install --package-lock-only --ignore-scripts --dry-run` e `npm run quality:ci`.

## Decisões Arquitetônicas

1. Usar ESLint com `eslint-plugin-sonarjs` para regras de código limpo em JavaScript/TypeScript.
2. Usar Husky e lint-staged para bloquear commits com problemas de lint em arquivos alterados.
3. Usar workflow `Quality` no GitHub Actions para lint, type-check, Knip, jscpd e build em PRs e pushes para `main`.
4. Usar reviewdog no PR para comentar achados de ESLint diretamente no diff.
5. Usar CodeQL para análise gratuita de segurança e qualidade em JavaScript/TypeScript.
6. Usar Dependabot para abrir PRs semanais de atualização de npm e GitHub Actions.
7. Validar no PR a resolução de dependências com `npm install --package-lock-only --ignore-scripts --dry-run`, porque a Vercel usa o caminho de `npm install`.

## Notas da Sessão

Vazio.
