# UI Context

## Identidade visual

O Port Ago usa uma estética de workbench editorial: quente, tátil, autoral e técnica sem parecer dashboard cyber. A interface deve transmitir portfólio pessoal maduro, com cartões físicos, bordas marcadas, sombras sólidas, tipografia editorial e detalhes de bancada de criação.

## Estilo geral

| Aspecto | Direção |
| --- | --- |
| Tema | Claro, quente e editorial |
| Sensação | Portfólio pessoal, bancada de trabalho, fichas e documentos |
| Contraste | Alto contraste entre texto marrom escuro e superfícies creme |
| Movimento | Sutil: elevação, deslocamento e rotação controlada |
| Evitar | Neon, cyber grid, glassmorphism genérico, aurora pesada, paleta gamer |

## Paleta de cores

Use apenas estes tokens e valores como base.

| Uso | Valor |
| --- | --- |
| Texto principal | `#251c14` |
| Fundo base do body | `#ead9bf` |
| Superfície clara | `#fff7e8` |
| Superfície translúcida | `rgba(255, 247, 232, 0.9)` |
| Navegação translúcida | `rgba(250, 239, 220, 0.78)` |
| Destaque amarelo | `#f1c869` |
| Destaque terroso | `#a14f2a` |
| Borda forte | `rgba(37, 28, 20, 0.76)` |
| Borda padrão | `rgba(37, 28, 20, 0.28)` |
| Borda sutil | `rgba(37, 28, 20, 0.22)` |
| Sombra padrão | `rgba(37, 28, 20, 0.12)` |
| Sombra hover | `rgba(37, 28, 20, 0.16)` |
| Seleção | `rgba(241, 200, 105, 0.48)` |
| Glow quente discreto | `rgba(218, 132, 76, 0.22)` |
| Glow verde discreto | `rgba(43, 79, 72, 0.12)` |

Tokens Tailwind definidos em `@theme`:

```css
--color-surface: #fff7e8;
--color-border: rgba(37, 28, 20, 0.28);
--color-border-hover: rgba(161, 79, 42, 0.76);
```

## Tipografia

| Uso | Fonte |
| --- | --- |
| Títulos editoriais | Fraunces |
| Texto geral | Archivo |
| Labels, navegação, metadados e botões | IBM Plex Mono |

Regras:

1. Títulos grandes devem usar Fraunces com tracking negativo.
2. Texto de leitura deve usar Archivo com line-height confortável.
3. Elementos técnicos curtos devem usar IBM Plex Mono, uppercase e letter spacing moderado.

## Bordas, raios e sombras

1. Cards principais usam borda de `2px` com `rgba(37, 28, 20, 0.76)`.
2. Botões e CTAs usam borda de `2px`, sombra sólida e fundo aprovado.
3. Chips e tags usam `border-radius: 999px`.
4. Navegação usa `border-radius: 999px` no desktop e `1.25rem` no mobile.
5. Sombras devem parecer offset físico, como `12px 12px 0 rgba(37, 28, 20, 0.12)`.
6. Hover pode mover o card com `translate(-4px, -4px)` e aumentar a sombra.

## Componentes visuais existentes

| Componente | Classe base |
| --- | --- |
| Shell da página | `.site-workbench` |
| Navegação | `.site-workbench__nav` |
| Hero | `.site-workbench__hero` |
| Card de imagem | `.site-workbench__photo-card` |
| Nota editorial | `.site-workbench__note` |
| Cards de formação | `.site-workbench__card` |
| Tickets de experiência | `.site-workbench__ticket` |
| Cards de projeto | `.site-workbench__project` |
| Botões de projeto | `.site-workbench__project-button` |

## Regras para novas telas ou componentes

1. Não usar cores arbitrárias fora da paleta.
2. Não adicionar gradientes chamativos sem necessidade.
3. Não criar componentes com visual de SaaS genérico.
4. Não usar biblioteca de componentes para resolver layout simples.
5. Reutilizar o vocabulário visual de cards, tickets, notas, etiquetas e sombras offset.
6. Manter acessibilidade: contraste, foco visível, texto alternativo e labels em botões.

