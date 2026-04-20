---
name: accessibility-checker
emoji: "♿"
description: >
  Audita componentes e páginas contra WCAG 2.2 nível AA. Cobre semântica HTML,
  teclado, foco, ARIA, contraste, movimento e formulários. Use antes do merge
  de qualquer PR que toque UI.
when_to_use:
  - Criei ou alterei um componente interativo (botão, link, form, modal, menu).
  - Adicionei imagens, ícones ou mídia.
  - Vou publicar uma página nova.
inputs:
  - Código do componente / página.
  - Opcional: resultado de axe DevTools ou Lighthouse.
outputs:
  - Lista de violações WCAG com critério (ex.: `1.4.3`), severidade e fix.
references:
  - https://www.w3.org/WAI/WCAG22/quickref/
  - https://www.w3.org/WAI/ARIA/apg/patterns/
  - https://inclusive-components.design/
  - https://www.deque.com/axe/
---

# ♿ Accessibility Checker

Alvo: **WCAG 2.2 nível AA**. Todo item abaixo cita o success criterion (SC) correspondente.

Antes de qualquer coisa, rode:
```bash
npx @axe-core/cli http://localhost:3000
# ou use axe DevTools / Lighthouse a11y audit no navegador
```

---

## 1. Semântica HTML primeiro (SC 1.3.1, 4.1.2)

- [ ] Use a tag certa: `<button>` para ações, `<a href>` para navegação,
      `<nav>`, `<main>`, `<header>`, `<footer>`, `<section>`, `<article>`.
- [ ] Nunca `<div onClick>`. Se for inevitável, adicione `role`, `tabIndex={0}`
      e handlers de teclado (Enter/Espaço).
- [ ] Heading hierarchy correta (1 × H1, sem pular níveis).
- [ ] Listas (`ul`/`ol`) para conjuntos de itens relacionados.
- [ ] Formulários: `<label htmlFor>` associado a cada input; `<fieldset><legend>`
      para grupos de radios/checkboxes.

## 2. Teclado (SC 2.1.1, 2.1.2, 2.4.3, 2.4.7)

- [ ] Tudo que é operável por mouse é operável por teclado.
- [ ] Ordem de tabulação segue a ordem visual/lógica.
- [ ] Sem "keyboard traps" (modais devem trap **e** liberar o foco no close).
- [ ] Foco **sempre visível** — nunca `outline: none` sem substituto.
      Use `focus-visible:ring-2 ring-primary ring-offset-2 ring-offset-bg`.
- [ ] Skip link ("Pular para o conteúdo") no topo das páginas longas (SC 2.4.1).
- [ ] Atalhos de uma tecla (se existirem) são desligáveis ou remapeáveis (SC 2.1.4).

## 3. ARIA (use com parcimônia — regra #1: HTML nativo > ARIA)

- [ ] Componentes customizados seguem padrões do
      [ARIA APG](https://www.w3.org/WAI/ARIA/apg/patterns/) (combobox, tabs,
      menu, dialog, disclosure…).
- [ ] `aria-label` / `aria-labelledby` em elementos sem texto visível
      (ícones-botão, landmarks duplicados).
- [ ] `aria-expanded`, `aria-controls`, `aria-selected` sincronizados com estado real.
- [ ] `aria-live` (`polite`/`assertive`) para feedback dinâmico (toasts, erros).
- [ ] `aria-hidden="true"` em ícones puramente decorativos adjacentes a texto.
- [ ] **Não use** `role="button"` em um `<button>`. Não duplique o nativo.

## 4. Imagens & mídia (SC 1.1.1, 1.2.*)

- [ ] `alt` descritivo em imagens informativas.
- [ ] `alt=""` em imagens puramente decorativas.
- [ ] SVGs informativos têm `<title>` ou `aria-label` no `<svg>`.
- [ ] Vídeos têm legendas (captions); áudio tem transcrição.
- [ ] Sem autoplay com som.

## 5. Contraste & uso de cor (SC 1.4.3, 1.4.11, 1.4.1)

- [ ] Texto normal ≥ **4.5:1**; texto grande (≥18.66px bold ou ≥24px) ≥ **3:1**.
- [ ] Componentes de UI e estados (borda de input focada, ícones informativos) ≥ **3:1**.
- [ ] Informação **não depende só da cor** (adicione ícone, label ou padrão).
- [ ] Testado em modo escuro (atual) e, se houver, modo claro.

## 6. Texto & leitura (SC 1.4.4, 1.4.10, 1.4.12)

- [ ] Zoom de texto até **200%** sem quebrar layout.
- [ ] Reflow em 320px sem scroll horizontal.
- [ ] Line-height ≥ 1.5; spacing de parágrafo ≥ 2× font-size (não trava custom CSS).
- [ ] Não force `text-transform: uppercase` em blocos longos.

## 7. Formulários (SC 1.3.5, 3.3.1, 3.3.2, 3.3.3, 3.3.4)

- [ ] Cada input tem label visível (ou acessível via `aria-label`).
- [ ] `autocomplete` apropriado (`email`, `name`, `current-password`…).
- [ ] Mensagens de erro:
    - identificam o campo,
    - descrevem o problema,
    - sugerem correção,
    - associadas via `aria-describedby` e `aria-invalid`.
- [ ] Campos obrigatórios sinalizados por texto **e** `aria-required`.
- [ ] Ações destrutivas/financeiras (SC 3.3.4, 3.3.6 em 2.2) têm
      confirmação / reversão / checagem.

## 8. Movimento & animação (SC 2.2.2, 2.3.1, 2.3.3)

- [ ] Animações ≤ 5s OU controles de pause/stop/hide.
- [ ] Nada pisca >3× por segundo (epilepsy safe).
- [ ] Respeitar `@media (prefers-reduced-motion: reduce)` — reduzir/cancelar
      animações não essenciais.

## 9. Target size (SC 2.5.8 — novidade WCAG 2.2)

- [ ] Alvos de toque mínimos **24×24px** (recomendado 44×44px).
- [ ] Espaçamento suficiente entre alvos adjacentes para evitar toques errados.

## 10. Navegação consistente (SC 3.2.3, 3.2.4)

- [ ] Menus/nav repetidos aparecem na mesma posição entre páginas.
- [ ] Componentes com mesma função têm o mesmo rótulo em toda a aplicação.

## 11. Language (SC 3.1.1, 3.1.2)

- [ ] `<html lang="pt-BR">` (ou equivalente) definido.
- [ ] Trechos em outro idioma marcados com `lang="..."`.

## 12. Formato do relatório

```
## A11y Audit — <tela/componente>

### 🔴 Falhas nível A
- [Navbar.tsx:22] SC 2.4.7 — Botão de menu sem foco visível.
  Adicionar `focus-visible:ring-2 ring-primary`.

### 🟡 Falhas nível AA
- [HeroSection.tsx:40] SC 1.4.3 — Texto `#9ca3af` sobre `#111827` = 4.31:1.
  Trocar por `--color-gray-light` (contraste 9.2:1) ou aumentar peso/tamanho.

### 🟢 Melhorias
- Considerar skip link no layout principal.
```

## 13. Ferramentas recomendadas

- **axe DevTools** (browser ext.) — violations automatizadas.
- **Lighthouse** — audit de a11y com score.
- **NVDA / VoiceOver** — teste manual com screen reader (essencial para componentes complexos).
- **Contrast Checker** WebAIM — checagem de cor manual.
- Teste real: desconecte o mouse e navegue só com `Tab`/`Shift+Tab`/`Enter`/`Espaço`/setas.
