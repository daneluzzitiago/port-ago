# AI Workflow Rules

## Regra principal

Trabalhe em apenas um recurso ou subsistema por vez, sem alterar arquivos não relacionados.

## Disciplina de escopo

1. Leia este diretório `agent/` antes de iniciar qualquer implementação relevante.
2. Entenda a tarefa atual em `agent/current_task.md` antes de editar código.
3. Se a tarefa não estiver clara, pare e peça clarificação antes de criar escopo.
4. Não invente features, telas, integrações, dependências ou fluxos que não estejam especificados.
5. Não aproveite uma tarefa pequena para fazer redesign, limpeza ampla ou troca de arquitetura.
6. Não altere configuração global, segurança, banco, CMS ou build sem que a tarefa peça isso diretamente.

## Fluxo obrigatório para mudanças

1. Antes de editar código, partir de `main` atualizada com `git pull --ff-only`.
2. Criar uma branch nova e específica para a tarefa.
3. Identificar arquivos diretamente envolvidos.
4. Ler os arquivos antes de editar.
5. Fazer mudanças cirúrgicas e coesas.
6. Atualizar documentação apenas quando a mudança alterar arquitetura, padrões ou fluxo.
7. Validar com os comandos existentes adequados.
8. Registrar decisões relevantes em `agent/progress_tracker.md`.

## Proteção contra regressões

1. Preserve comportamento existente salvo quando a tarefa pedir uma alteração explícita.
2. Não remova suporte a Português/Inglês.
3. Não quebre a busca de dados via Payload.
4. Não hardcode dados que pertencem ao CMS.
5. Não remova acessibilidade básica de botões, links, headings e imagens.
6. Não ignore erros de build, type-check ou validação.

## Regras para UI

1. Consulte `agent/ui_context.md` antes de alterar aparência.
2. Use apenas tokens, fontes e cores aprovadas.
3. Não usar cores arbitrárias, gradientes aleatórios, neon ou glassmorphism.
4. Preservar a linguagem de workbench editorial.
5. Se precisar de novo padrão visual, documente a decisão antes de aplicar amplamente.

## Regras para Payload e dados

1. Não editar `payload-types.ts` manualmente.
2. Ao mudar schema do Payload, atualizar tipos com o script existente.
3. Não tornar campos privados públicos nem liberar escrita sem autenticação.
4. Ao adicionar texto exibido ao usuário, decidir se ele pertence ao dicionário ou ao Payload.

## Critério de parada

Pare e peça orientação se:

1. A tarefa exigir acesso a sistemas externos ou dados ausentes.
2. Houver conflito entre a tarefa e as invariáveis arquitetônicas.
3. Uma mudança necessária afetar muitos subsistemas de uma vez.
4. O repositório tiver alterações não relacionadas que entrem em conflito com o trabalho.
