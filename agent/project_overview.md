# Project Overview

## Produto

Port Ago é um portfólio pessoal em formato de página única, construído com Next.js, TypeScript, React, Tailwind CSS v4 e Payload CMS. A experiência pública apresenta uma narrativa visual de "workbench" editorial, com dados gerenciados pelo Payload para hero, formação, experiências e projetos.

## Metas concretas e mensuráveis

1. Manter a home pública renderizando as seções Hero, Formação, Experiências e Projetos com dados vindos do Payload CMS.
2. Preservar suporte bilíngue em Português e Inglês para todo conteúdo localizado exibido na home.
3. Garantir que a troca de idioma atualize o cookie `lang` e revalide a página sem quebrar a navegação por âncoras.
4. Manter a interface responsiva em mobile, tablet e desktop, sem overflow horizontal.
5. Manter validação de tipos com `npm run type-check` e build de produção com `npm run build`.
6. Preservar as proteções HTTP configuradas em `next.config.ts` para rotas públicas.
7. Manter o CMS acessível apenas para usuários autenticados em operações de criação, edição e remoção.

## Fluxo principal do usuário

1. O usuário acessa a página inicial em `/`.
2. O servidor lê o cookie `lang`; se ele não existir ou não for válido, usa Português como idioma padrão.
3. A aplicação busca no Payload CMS os dados do hero, formações, experiências e projetos no idioma atual.
4. O usuário visualiza o hero com ilustração, papel profissional, nome, apelido, subtítulo e CTA.
5. O usuário navega pelas âncoras de Formação, Experiências e Projetos usando a navegação sticky.
6. O usuário pode alternar idioma pelo botão de bandeira, que grava o próximo idioma no cookie e revalida a rota.
7. O usuário acessa links externos de GitHub ou Live Demo dos projetos quando disponíveis.

## Personas principais

| Persona | Objetivo |
| --- | --- |
| Recrutador ou contratante | Entender rapidamente perfil, stack, experiências e projetos relevantes. |
| Pessoa técnica avaliadora | Ver evidências de qualidade, arquitetura, stack e maturidade em projetos. |
| Dono do portfólio | Atualizar conteúdo pelo Payload sem editar código para cada mudança textual. |

## Fora de escopo

As seguintes iniciativas não devem ser implementadas agora, mesmo que pareçam úteis:

1. Não criar autenticação customizada fora do Payload CMS.
2. Não transformar o portfólio em aplicação multiusuário.
3. Não adicionar blog, newsletter, comentários, analytics ou área privada.
4. Não adicionar e-commerce, pagamentos, agendamento ou formulários complexos.
5. Não trocar o CMS, banco de dados, framework principal ou estratégia de renderização sem decisão arquitetônica explícita.
6. Não reescrever a identidade visual para estética cyber, neon, glassmorphism ou dashboard gamer.
7. Não adicionar novas seções públicas sem especificação de conteúdo, layout e fonte de dados.
8. Não hardcodar conteúdo que já pertence ao Payload CMS.
9. Não introduzir bibliotecas de UI pesadas sem necessidade comprovada.
10. Não alterar arquivos de configuração global, segurança, build ou banco de dados para tarefas puramente visuais.

