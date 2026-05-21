# Architecture

## Stack tecnológico

| Camada | Tecnologia |
| --- | --- |
| Runtime | Node.js 20+ |
| Framework web | Next.js `~15.4.11` com App Router |
| UI | React `^19.1.0`, React DOM `^19.1.0` |
| Linguagem | TypeScript `^5` com `strict: true` |
| CMS | Payload CMS `^3.83.0` |
| Banco do CMS | `@payloadcms/db-sqlite` |
| Rich text | `@payloadcms/richtext-lexical` |
| Imagens | `next/image` e `sharp` |
| CSS | Tailwind CSS `^4.2.2` via `@tailwindcss/postcss` e CSS global |
| Fontes | `next/font/google`: Fraunces, Archivo e IBM Plex Mono |
| Deploy previsto | Vercel/Payload Cloud |
| Validação local | `npm run type-check`, `npm run build` |

## Camadas do sistema

### App público

Roda em `app/(app)` e expõe a página pública do portfólio.

- `app/(app)/page.tsx` resolve o idioma, busca dados e renderiza a experiência.
- `app/(app)/layout.tsx` configura metadados, idioma HTML, fontes e CSS global.
- `app/(app)/_components/workbench/WorkbenchSite.tsx` renderiza a UI pública.
- `app/(app)/globals.css` concentra a identidade visual e os estilos globais do workbench.

### CMS e dados

Payload CMS é a fonte de verdade para conteúdo administrável.

- `payload.config.ts` registra collections, global, localização, banco, CORS, CSRF e GraphQL.
- `collections/*` define conteúdo repetível: formação, experiências, projetos, mídia e usuários.
- `globals/Hero.ts` define conteúdo único do hero.
- `payload-types.ts` é gerado pelo Payload e não deve ser editado manualmente.

### Internacionalização

A aplicação usa uma estratégia simples baseada em cookie.

- Idiomas aceitos: `pt` e `en`.
- Idioma padrão: `pt`.
- `getLocale` lê o cookie `lang`.
- `setLanguage` valida o idioma, grava o cookie HTTP-only e chama `revalidatePath('/')`.
- Textos estruturais da UI ficam em `app/(app)/i18n/dictionary.ts`.
- Conteúdo editorial localizado fica no Payload.

### Operações longas e tarefas administrativas

Não há workers nem filas no projeto atual. Tarefas administrativas e geração de tipos são executadas por scripts npm.

- Seed: `npm run seed`.
- Tipos do Payload: `npm run generate:types`.
- Build e type-check rodam localmente ou no pipeline de deploy.

## Invariáveis arquitetônicas

1. Conteúdo editorial administrável deve ficar no Payload, não hardcoded em componentes.
2. Componentes públicos devem consumir dados já normalizados por `getPortfolioData`.
3. `WorkbenchSite` deve permanecer focado em renderização; busca de dados fica fora dele.
4. Novos campos localizáveis no Payload devem declarar `localized: true` quando o texto aparecer em PT e EN.
5. O idioma só pode ser `pt` ou `en`; não adicionar idiomas sem atualizar config, dicionário, conteúdo e testes manuais.
6. Não editar `payload-types.ts` manualmente; gere novamente com `npm run generate:types`.
7. Não remover headers de segurança de `next.config.ts` sem decisão explícita.
8. Não usar dependências de UI que conflitem com a linguagem visual atual sem ADR registrada em `agent/progress_tracker.md`.
9. Não introduzir estado global para dados que já são resolvidos no servidor.
10. Não criar acesso público de escrita às collections do Payload.

