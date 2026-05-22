# Current Task

## 1. Objetivo da tarefa

Resolver os conflitos da PR #27 e manter a validação que faz falhas de resolução de dependências da Vercel quebrarem ainda no PR.

## 2. Decisões de design

1. A falha observada veio de uma preview da Vercel em branch do Dependabot.
2. A Vercel executou `npm install` e encontrou conflito de peer dependencies entre pacotes Payload `3.83.0` e `3.84.1`.
3. O workflow de PR executava `npm ci`, que usa o lockfile e não reproduzia a mesma resolução.
4. A validação de PR deve executar uma checagem de resolução compatível com a Vercel antes do `npm ci`.
5. Os conflitos com a `main` devem preservar também o registro da integração de último commit nos cards de projeto.

## 3. Detalhes de implementação

1. Manter no workflow `Quality` o passo `npm install --package-lock-only --ignore-scripts --dry-run`.
2. Manter `npm ci` para instalação determinística depois da validação.
3. Preservar a ordem estável de qualidade: lint, Knip, type-check, duplicação e build.
4. Manter nos documentos de agente as regras de partir da `main`, monitorar operações longas e registrar decisões relevantes.

## 4. Checklist de conclusão

- [x] PR da feature de último commit criada e mesclada na `main`.
- [x] Branch da PR #27 atualizada com a `main`.
- [x] Conflitos em `agent/*.md` resolvidos preservando as duas tarefas.
- [x] Validação final executada.
- [ ] Branch da PR #27 atualizada no remoto.
