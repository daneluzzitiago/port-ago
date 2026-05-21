# Current Task

## 1. Objetivo da tarefa

Mostrar nos cards de projeto o último commit do GitHub apenas quando o projeto não tiver link live e tiver link de GitHub.

## 2. Decisões de design

1. A integração deve enriquecer os dados no servidor em `getPortfolioData`, mantendo `WorkbenchSite` focado em renderização.
2. O commit deve aparecer somente para projetos com `githubUrl` e sem `projectUrl`.
3. A UI deve preservar a estética workbench editorial e usar textos estruturais no dicionário de i18n.
4. Falhas da API do GitHub devem ser representadas como estado indisponível, sem ocultar o problema silenciosamente.

## 3. Detalhes de implementação

1. Parsear URLs de `github.com/{owner}/{repo}` a partir de `githubUrl`.
2. Buscar o commit mais recente pela API pública do GitHub no servidor.
3. Adicionar o resumo do commit aos dados normalizados dos projetos elegíveis.
4. Renderizar hash curto, mensagem e data do commit no card do projeto.
5. Manter os botões GitHub e Live existentes.

## 4. Checklist de conclusão

- [x] Branch criada a partir de `main` atualizada.
- [x] Helper de integração com GitHub implementado.
- [x] Dados de projeto enriquecidos apenas para projetos elegíveis.
- [x] UI e estilos do último commit adicionados.
- [x] Validação final executada com `npm run quality:ci`.
