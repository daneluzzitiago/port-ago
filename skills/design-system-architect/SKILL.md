---
name: design-system-architect
emoji: "🎨"
description: >
  Define e mantém os tokens de design (cor, tipografia, espaçamento, radius, elevação,
  motion) garantindo hierarquia, harmonia visual e escalabilidade. Use antes de criar
  qualquer componente novo ou ao introduzir um novo estilo.
when_to_use:
  - Vou introduzir uma nova cor, fonte, tamanho, sombra ou radius.
  - Preciso decidir entre criar um token novo ou reusar um existente.
  - O design está "quase certo" mas parece desalinhado ou inconsistente.
inputs:
  - Proposta visual (Figma, print, descrição).
  - Contexto do componente (onde aparece, frequência, importância).
outputs:
  - Tokens adicionados em `app/(app)/globals.css` no bloco `@theme`.
  - Justificativa da escala escolhida.
references:
  - https://m3.material.io/foundations
  - https://www.designsystems.com/space-grids-and-layouts/
  - https://www.designsystems.com/typography-guides/
  - https://refactoringui.com/
  - https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html
---

# 🎨 Design System Architect

> "Constraints breed consistency." — Refactoring UI

Sua função é **proteger a linguagem visual**. Nunca introduza um valor mágico
(`#3a3a3a`, `padding: 13px`, `font-size: 17px`) — sempre mapeie para um token.

Este projeto já define tokens em `app/(app)/globals.css` usando Tailwind v4
(`@theme { --color-*: ...; --font-*: ...; }`). Estenda **somente esse arquivo**.

---

## 1. Princípios

1. **Escala, não opinião.** Use sistemas matemáticos (modular scale, múltiplos de 4px).
2. **Hierarquia > decoração.** Cada token deve expressar uma intenção semântica
   (`--color-bg`, `--color-accent`), não um valor cru (`--color-orange`).
3. **Menos é mais.** Prefira 5 tokens bem usados a 25 tokens subutilizados.
4. **Contraste primeiro.** Todo par `foreground/background` precisa passar WCAG AA
   (4.5:1 texto normal, 3:1 texto ≥18.66px bold ou ≥24px, 3:1 UI e ícones).

## 2. Cores

### Paleta atual do repo

| Token                    | Uso                                    |
|--------------------------|----------------------------------------|
| `--color-bg`             | Background principal (`#111827`)       |
| `--color-bg-light`       | Superfícies elevadas (cards, navbar)   |
| `--color-text`           | Texto padrão sobre `--color-bg`        |
| `--color-white`          | Ênfase máxima de texto                 |
| `--color-primary`        | Ação primária / identidade             |
| `--color-accent`         | Destaques pontuais, CTAs alternativos  |
| `--color-gray` / `-light`| Texto secundário e bordas              |
| `--color-purple-*`       | Variações de primary para hover/gradientes |

### Regras

- **60/30/10**: ~60% neutro (`bg`/`bg-light`), ~30% texto, ~10% primary/accent.
- Sempre derivar hover/active de um token base (ex.: `--color-primary` →
  `--color-purple-light` no hover) em vez de inventar um valor.
- Para estados semânticos (success/warning/danger/info) use tons com luminosidade
  compatível com o fundo escuro (`#34d399`, `#fbbf24`, `#f87171`, `#60a5fa`).
- **Nunca use cor sozinha** para transmitir estado — combine com ícone ou texto
  (WCAG 1.4.1 Use of Color).
- Verifique contraste em <https://webaim.org/resources/contrastchecker/> antes de commitar.

## 3. Tipografia

### Escala tipográfica (modular, ratio 1.25 — Major Third)

| Token (sugestão)     | px / rem      | Uso                          |
|----------------------|---------------|------------------------------|
| `--text-xs`          | 12 / 0.75rem  | Captions, metadados          |
| `--text-sm`          | 14 / 0.875rem | Texto auxiliar, tags         |
| `--text-base`        | 16 / 1rem     | Corpo padrão                 |
| `--text-lg`          | 18 / 1.125rem | Lead paragraph               |
| `--text-xl`          | 20 / 1.25rem  | Subtítulos de card           |
| `--text-2xl`         | 24 / 1.5rem   | Títulos de seção secundários |
| `--text-3xl`         | 30 / 1.875rem | Títulos de seção             |
| `--text-4xl`         | 36 / 2.25rem  | Heading de página            |
| `--text-5xl`         | 48 / 3rem     | Hero                         |

### Pesos e line-height

- Pesos usados: **400** (body), **500** (ênfase), **600** (subtítulo), **700** (heading).
- Line-height: body `1.5–1.6`, headings `1.1–1.25`.
- Max line-length: **60–75 caracteres** (`max-w-prose` ≈ 65ch).
- Letter-spacing: negativo sutil (`-0.02em`) em headings grandes; neutro em body.

### Hierarquia

Toda tela deve ter **exatamente 1 H1**. Abaixo dele, H2 introduzindo seções,
H3 dentro de cards/subseções. Não pule níveis por motivos estéticos — use tamanho
via classe, mas mantenha semântica.

## 4. Espaçamento & Layout

- **Base de 4px** (Tailwind já usa: `1 = 0.25rem = 4px`).
- Escala recomendada: `4, 8, 12, 16, 24, 32, 48, 64, 96, 128`.
- **Regra da proximidade**: elementos relacionados ficam mais próximos entre si
  do que de elementos não relacionados (Lei de Gestalt).
- Grid: 12 colunas em desktop, 4 em mobile, gutter `24px`.
- Containers: `max-w-6xl mx-auto px-4 md:px-8`.

## 5. Radius & Elevação

| Token           | Valor     | Uso                     |
|-----------------|-----------|-------------------------|
| `--radius-sm`   | 4px       | Badges, inputs pequenos |
| `--radius-md`   | 8px       | Inputs, botões          |
| `--radius-lg`   | 12px      | Cards                   |
| `--radius-xl`   | 16–20px   | Modais, seções hero     |
| `--radius-full` | 9999px    | Avatares, pills         |

Elevação em dark theme usa **brilho de borda** (ring sutil) + leve sombra,
evita sombras pretas que "somem":

```css
--shadow-sm: 0 1px 2px rgba(0,0,0,.3);
--shadow-md: 0 4px 12px rgba(0,0,0,.35), 0 0 0 1px rgba(255,255,255,.04);
--shadow-lg: 0 12px 32px rgba(0,0,0,.45), 0 0 0 1px rgba(255,255,255,.06);
```

## 6. Motion

- Duração: `150ms` micro (hover), `250ms` padrão, `400ms` transições de layout.
- Easing: `cubic-bezier(0.4, 0, 0.2, 1)` (Material "standard").
- Respeitar `prefers-reduced-motion`: desabilitar animações não essenciais.

## 7. Fluxo de decisão para adicionar um token

```
Preciso de um novo valor?
  ├─ Existe token próximo (±10%)? → Reutilize.
  ├─ É uma variação de estado?    → Derive via opacidade/mix-color.
  └─ É genuinamente novo?         → Adicione em globals.css com nome semântico
                                    e documente o uso aqui.
```

## 8. Checklist de saída

- [ ] Todo valor visual está em `@theme` de `globals.css`.
- [ ] Nome do token é **semântico**, não literal.
- [ ] Contraste ≥ 4.5:1 (texto) / 3:1 (UI) contra o fundo esperado.
- [ ] Escala segue múltiplos consistentes (4px / ratio tipográfico).
- [ ] Não há duplicatas da paleta existente.
- [ ] Hover/active/focus derivam do token base, não são valores novos.
