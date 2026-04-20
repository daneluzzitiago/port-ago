---
name: react-component-builder
emoji: "⚛️"
description: >
  Cria componentes React/TSX reutilizáveis, tipados, acessíveis e fiéis aos tokens
  do design system. Use sempre que for adicionar um arquivo em
  `app/(app)/_components/` ou refatorar um existente.
when_to_use:
  - Vou criar um novo componente de UI.
  - Vou adicionar variantes, tamanhos ou estados a um componente existente.
  - Preciso extrair JSX repetido em um componente reutilizável.
inputs:
  - Mockup / descrição do componente.
  - Tokens disponíveis em `app/(app)/globals.css`.
outputs:
  - Arquivo `.tsx` em `app/(app)/_components/ui/` (primitivos) ou
    `app/(app)/_components/sections/` (composições de página).
references:
  - https://react.dev/learn/thinking-in-react
  - https://www.radix-ui.com/primitives/docs/overview/accessibility
  - https://inclusive-components.design/
  - https://cva.style/docs
  - https://tailwindcss.com/docs/reusing-styles
---

# ⚛️ React Component Builder

Constrói componentes com **API previsível, acessível e alinhada ao design system**.

---

## 1. Onde colocar

| Tipo                           | Diretório                            |
|--------------------------------|--------------------------------------|
| Primitivos (Button, Badge…)    | `app/(app)/_components/ui/`          |
| Composições de seção           | `app/(app)/_components/sections/`    |
| Layout (Navbar, Footer…)       | `app/(app)/_components/`             |

Um arquivo = um componente principal + subcomponentes relacionados.

## 2. Anatomia de um componente

```tsx
// app/(app)/_components/ui/Button.tsx
import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { clsx } from "clsx";

const button = cva(
  "inline-flex items-center justify-center gap-2 font-medium rounded-md " +
  "transition-colors duration-200 focus-visible:outline-none " +
  "focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 " +
  "focus-visible:ring-offset-bg disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary: "bg-primary text-white hover:bg-purple-light",
        secondary: "bg-bg-light text-text hover:text-white",
        ghost: "bg-transparent text-text hover:text-white",
      },
      size: {
        sm: "h-8 px-3 text-sm",
        md: "h-10 px-4 text-base",
        lg: "h-12 px-6 text-lg",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof button> & {
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
  };

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, leftIcon, rightIcon, children, ...rest }, ref) => (
    <button ref={ref} className={clsx(button({ variant, size }), className)} {...rest}>
      {leftIcon}
      {children}
      {rightIcon}
    </button>
  ),
);
Button.displayName = "Button";
```

## 3. Regras obrigatórias

1. **Tipagem estrita.** Sem `any`. Estenda o HTML nativo (`ButtonHTMLAttributes`…)
   para herdar props corretamente.
2. **`forwardRef`** em tudo que pode receber foco programático (inputs, buttons, links).
3. **`className` sempre "mergeável"** via `clsx`/`cn` — nunca sobrescreva o que o
   consumidor passou.
4. **Variantes com `cva`** (class-variance-authority) em vez de `if/else` de classes.
5. **Tokens, nunca valores crus.** `bg-primary` ✅ — `bg-[#5f00ba]` ❌.
6. **Acessibilidade built-in**: role/aria, foco visível, estados `disabled`/`aria-busy`.
7. **Server Component por padrão.** Adicione `"use client"` apenas se usar estado,
   efeitos, context, refs, ou event handlers do browser.
8. **Sem lógica de negócio.** Componentes em `_components/ui/` são "burros" —
   dados/estado ficam nas `sections/` ou na página.

## 4. API de props (heurísticas)

- Prefira **composição** a flags booleanas:
  `<Card><Card.Header/>...</Card>` > `<Card hasHeader title="...">`.
- Booleanos só para estados binários reais (`disabled`, `loading`, `selected`).
- Nomes de props: `variant`, `size`, `tone`, `as`, `leftIcon`, `rightIcon` — padronize.
- Aceite `asChild` (padrão Radix) quando fizer sentido para polimorfismo.
- **Children > prop `label`** sempre que possível.

## 5. Padrões de interação

| Estado         | Requisito                                                        |
|----------------|------------------------------------------------------------------|
| `:hover`       | Mudança sutil (cor, brilho). Nunca altere tamanho/posição.       |
| `:focus-visible` | Ring 2px em `--color-primary` com offset. **Nunca** `outline:none` sem substituto. |
| `:active`      | Feedback tátil (shade mais escuro, scale `0.98` max).            |
| `:disabled`    | `opacity-50` + `pointer-events-none` + `aria-disabled`.          |
| `loading`      | `aria-busy="true"` + spinner + manter largura (evitar CLS).      |

## 6. Responsividade

- Mobile-first: estilos base mobile, `md:`/`lg:` para telas maiores.
- Breakpoints Tailwind padrão: `sm 640 / md 768 / lg 1024 / xl 1280 / 2xl 1536`.
- Teste em 360px, 768px, 1280px.
- Texto **nunca** deve ser cortado; use `overflow-wrap: anywhere` ou `truncate`
  com `title` como fallback acessível.

## 7. Performance

- Liste-se de `"use client"` desnecessário.
- Use `next/image` para imagens (width/height obrigatórios).
- `next/font` para fontes (já configurado no projeto).
- Memoize **apenas** quando medido (`React.memo`, `useMemo`) — não por reflexo.

## 8. Checklist de saída

- [ ] Tipagem completa, sem `any`; `forwardRef` quando cabível.
- [ ] Classes derivam de tokens (`bg-primary`, `text-text`…) — zero hex hardcoded.
- [ ] `className` do consumidor é respeitado e mergeado por último.
- [ ] Variantes via `cva` com `defaultVariants`.
- [ ] Estados `hover` / `focus-visible` / `active` / `disabled` cobertos.
- [ ] Atributos ARIA corretos; elemento HTML semântico (`button`, `a`, `nav`…).
- [ ] Server Component por padrão; `"use client"` justificado se presente.
- [ ] Responsivo testado em ≥3 larguras.
- [ ] Sem lógica de dados em componentes de `ui/`.
- [ ] `npm run type-check && npm run lint` passam.
