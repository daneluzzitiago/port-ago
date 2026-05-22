# Code Standards

## TypeScript

1. Manter `strict: true`; não usar `any` para contornar tipos.
2. Preferir tipos derivados das fontes existentes, como `PortfolioData`, `Locale` e tipos gerados pelo Payload.
3. Usar `type` para props e formatos de dados simples.
4. Validar entradas externas explicitamente, como já ocorre em URLs de projetos.
5. Não ignorar erros de TypeScript com `@ts-ignore` ou casts amplos.

## React e Next.js

1. Componentes são funções nomeadas exportadas.
2. Usar Server Components por padrão.
3. Adicionar `'use client'` apenas quando houver interatividade, hooks ou APIs de navegador.
4. Buscar dados no servidor e passar props tipadas para componentes de UI.
5. Usar `next/image` para imagens locais e remotas quando possível.
6. Manter links externos com `target="_blank"` e `rel="noopener noreferrer"`.
7. Não introduzir roteamento client-side desnecessário para navegação por âncoras.

## Organização de arquivos

1. Código público da home fica em `app/(app)`.
2. Componentes de UI compartilháveis da home ficam em `app/(app)/_components`.
3. Código de i18n fica em `app/(app)/i18n`.
4. Configuração e schema do Payload ficam em `payload.config.ts`, `collections/*` e `globals/*`.
5. Documentação operacional para agentes de IA fica em `agent/*`.

## Nomenclatura

1. Componentes React: `PascalCase`.
2. Funções e variáveis: `camelCase`.
3. Tipos: `PascalCase`.
4. Slugs do Payload: minúsculos e descritivos, como `projects`, `experiences`, `degrees`.
5. Classes CSS da experiência pública seguem o prefixo `site-workbench__`.
6. Modificadores CSS usam `--`, como `site-workbench__project-button--primary`.

## CSS e UI

1. Usar os tokens e cores definidos em `app/(app)/globals.css` e documentados em `agent/ui_context.md`.
2. Não usar cores arbitrárias em componentes.
3. Não adicionar estilos inline para aparência visual persistente.
4. Manter responsividade com `clamp`, grid fluido e media queries já existentes.
5. Preservar a estética editorial/workbench: cartões físicos, sombras sólidas, bordas fortes e textura quente.
6. Evitar neon, aurora pesada, glassmorphism genérico e grids cyber.

## Payload CMS

1. Toda collection pública deve manter `read: () => true` apenas quando o conteúdo for realmente público.
2. Escrita deve exigir `!!req.user`.
3. Campos obrigatórios devem usar `required: true`.
4. Campos exibidos em mais de um idioma devem usar `localized: true`.
5. Campos de ordenação devem manter `order` numérico quando a ordem visual importa.

## Qualidade

1. Antes de concluir mudanças de código, rodar `npm run quality:ci`.
2. Use `npm run lint`, `npm run type-check`, `npm run knip` e `npm run duplicates` para diagnósticos específicos.
3. O workflow de PR deve validar a resolução de dependências com `npm install --package-lock-only --ignore-scripts --dry-run`, equivalente ao caminho de install usado pela Vercel.
4. Não adicionar novas ferramentas de lint, build ou teste sem necessidade explícita.
5. Não misturar refatoração ampla com entrega de feature.
6. Não alterar arquivos não relacionados à tarefa atual.
