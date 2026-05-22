# Current Task

## 1. Objetivo da tarefa

Fazer a falha de resolução de dependências da Vercel quebrar ainda no PR, antes de chegar à produção.

## 2. Decisões de design

1. A falha observada veio de uma preview da Vercel em branch do Dependabot.
2. A Vercel executou `npm install` e encontrou conflito de peer dependencies entre pacotes Payload `3.83.0` e `3.84.1`.
3. O workflow de PR executava `npm ci`, que usa o lockfile e não reproduzia a mesma resolução.
4. A validação de PR deve executar uma checagem de resolução compatível com a Vercel antes do `npm ci`.

## 3. Detalhes de implementação

1. Adicionar ao workflow `Quality` o passo `npm install --package-lock-only --ignore-scripts --dry-run`.
2. Manter `npm ci` para instalação determinística depois da validação.
3. Registrar a regra nos documentos de workflow e qualidade.
4. Confirmar que a nova validação passa em `main` e falha na branch problemática do Dependabot.

## 4. Checklist de conclusão

- [x] PR da feature de último commit criada.
- [x] Branch de correção criada a partir de `main`.
- [x] Causa da falha da Vercel identificada.
- [x] Validação de resolução de dependências adicionada ao workflow de PR.
- [x] Validação final executada.
