# context.md — Port Ago

Portfolio pessoal de Tiago L. Daneluzzi ("Dan"), desenvolvedor full stack. O projeto está em estágio inicial com conteúdo hard-coded e funcionalidades incompletas.

---

## Stack Tecnológica

| Camada | Tecnologia |
|---|---|
| Framework | Next.js 15 (App Router) |
| UI | MUI (Material UI) v7 + Emotion |
| CMS | Payload CMS v3 (instalado, subutilizado) |
| Banco de dados | SQLite via `@payloadcms/db-sqlite` |
| Ícones | react-icons v5 |
| Fonte | Inter (`@fontsource/inter`) |
| Linguagem | TypeScript (strict mode) |

---

## Estrutura do Projeto

### Rotas (App Router)

O projeto usa dois route groups do Next.js:

- `app/(app)/` — portfolio público (rota `/`)
- `app/(payload)/` — painel administrativo do Payload CMS (rota `/admin`)
- `app/(app)/components/` — página de showcase interno da biblioteca de componentes (rota `/components`), usada apenas durante o desenvolvimento

### Pastas principais

```
app/
  (app)/
    page.tsx         ← entrada da aplicação; mapeia seções e as renderiza
    layout.tsx       ← 'use client', envolve tudo com ThemeProvider do MUI
    theme.ts         ← cria o tema MUI com fonte Inter e cores de texto
    colors.js        ← objeto Colors com todos os tokens de cor (arquivo .js em projeto TS)
    global.css       ← reset CSS; contém o mesmo bloco duplicado
    components/
      page.tsx       ← showcase interno de tipografia e botões
  (payload)/         ← gerado automaticamente pelo Payload

collections/
  Users.ts           ← coleção de autenticação do Payload
  Media.ts           ← coleção de upload de mídia do Payload

components/
  menu.tsx           ← navegação fixa com scroll-aware e drawer mobile
  sections.ts        ← configuração das seções (metadados: nome, ícone, label)
  Hero/index.tsx     ← seção hero com nome, título e imagem SVG
  About/             ← seção sobre (formação, experiências, skills)
  Projects/          ← grid de projetos pessoais
  BeyondTech/        ← componente vazio, comentado nas sections
  Resume/            ← embed de PDF via <iframe>, comentado nas sections
  shared/
    section.tsx      ← container que mapeia string → componente de seção
    subSection.tsx   ← card semi-transparente com título
    button.tsx       ← Button customizado com variantes primary/secondary/tertiary
    tools.tsx        ← Tool: mapeia nome de tecnologia → ícone + label
    typography.tsx   ← componente antigo, DEPRECATED (não utilizado)
    typographyV2.tsx ← componente ativo com variantes nomeadas por string
    floatingExp.tsx  ← animação de label flutuante aleatório (usado em "Ramping Up")

utils/
  scroll.ts          ← handleScroll(section): smooth scroll por ID de elemento
```

---

## Arquitetura e Decisões de Implementação

### Navegação entre seções
As seções são definidas em `components/sections.ts` como um array de objetos com metadados (`name`, `buttonLabel`, `icon`, `component`). O campo `component` é uma string (ex: `"hero"`, `"about"`). Em `components/shared/section.tsx`, um `ComponentMap` mapeia essa string para o JSX do componente correspondente. Essa indireção desacopla a configuração da seção do componente em si, mas cria um ponto de manutenção duplicado toda vez que uma nova seção é adicionada.

A navegação usa scroll suave via `document.getElementById(section).scrollIntoView({ behavior: 'smooth' })`.

### Design system
- **Cores**: centralizadas em `colors.js` como um objeto `Colors`. Referenciado diretamente em todos os componentes via import.
- **Tipografia**: `TypographyV2` com variantes nomeadas por string (`heroTitle`, `sectionTitle`, `body`, etc.) definidas como constantes em `typographyVariants`. O componente aplica as props do variant e aceita `sx` para overrides pontuais.
- **Botões**: `Button` com variantes `primary`, `secondary`, `tertiary`, cada uma definida em `buttonVariants` como um objeto de props MUI.
- **Tools (tecnologias)**: o tipo `Tool` é uma union de string literals representando tecnologias. O componente `Tool` usa um `iconMapper` para associar cada string ao ícone correto da react-icons.

### Conteúdo 100% hard-coded
Todo o conteúdo do portfólio é definido em arquivos TypeScript:

| Dado | Arquivo |
|---|---|
| Experiências profissionais | `components/About/experiences.ts` |
| Formações acadêmicas | `components/About/degrees.ts` |
| Linguagens e frameworks | `components/About/languagesAndFrameworks.ts` |
| Projetos pessoais | `components/Projects/projects.ts` |
| Seções do site | `components/sections.ts` |

### Payload CMS (subutilizado)
O Payload CMS v3 está instalado e configurado com SQLite. O painel admin está acessível em `/admin`. No entanto, apenas as coleções geradas por padrão existem — `Users` (autenticação) e `Media` (upload). Nenhum conteúdo do portfólio foi migrado para o CMS.

### Responsividade
Feita inteiramente com breakpoints do MUI (`xs`, `sm`, `md`, `lg`) via prop `sx`. O menu colapsa para um Drawer em mobile. O layout hero usa `Grid` do MUI v7 com prop `size`.

---

## Regras e Convenções Extraídas do Código

1. **Imports de cores**: todos os componentes importam `Colors` de `@/app/(app)/colors.js`. Não há CSS variables nem tokens no tema MUI.
2. **Tipografia**: usar sempre `TypographyV2` com uma das variantes nomeadas. O componente antigo `typography.tsx` existe mas não deve ser usado.
3. **Botões**: sempre usar o `Button` customizado de `components/shared/button.tsx`, nunca o `Button` do MUI diretamente.
4. **Tools/tecnologias**: novas tecnologias precisam ser adicionadas ao tipo `Tool` (union) e ao `iconMapper` em `tools.tsx`.
5. **Novas seções**: requerem atualização em dois lugares — `sections.ts` (metadado) e `section.tsx` (ComponentMap).
6. **Scroll**: navegação interna usa `handleScroll` de `utils/scroll.ts`, que depende de `id` HTML correspondendo ao `name` da seção.
7. **Layout `'use client'`**: o layout raiz da aplicação pública é client-side por causa do `ThemeProvider` do MUI.
8. **Alias `@/`**: mapeado para a raiz do projeto no `tsconfig.json`.

---

## Problemas e Inconsistências Identificadas

- `next.config.ts`: `withPayload` importado e aplicado duas vezes (bug — wrapper duplicado).
- `colors.js`: arquivo `.js` num projeto TypeScript, sem tipagem.
- `global.css`: bloco de reset CSS duplicado no mesmo arquivo.
- `typography.tsx` e `typographyV2.tsx` coexistem — refatoração pela metade sem remoção do arquivo antigo.
- `ProjectTools` (`components/Projects/projectTools.tsx`) nunca é usado; `ProjectCard` renderiza as tools inline.
- `About/index.tsx` importa `useMemo` mas não usa.
- `BeyondTech` e `Resume` são stubs vazios, comentados na lista de seções.
- `SubSection` usa a mesma variante de tipografia para `title` e `subtitle`, sem distinção visual.
- O portfólio não lê nenhum dado do Payload CMS — toda a integração está por fazer.
- O nome do dono do portfólio ("Tiago L. Daneluzzi") está hard-coded no JSX do `Hero`.

---

## Roadmap

### 1. Utilizar Payload CMS

Configurar o Payload CMS no projeto e migrar todas as informações do portfólio para esse gerenciador de conteúdo.

Isso inclui:
- Criar coleções no Payload para cada entidade de conteúdo: `Experiences`, `Degrees`, `Projects`, `Skills`, `Sections` (ou equivalente)
- Definir os campos de cada coleção espelhando os tipos TypeScript existentes (ex: `Experience`, `Degree`, `Project`)
- Remover os arquivos de dados hard-coded e substituir as chamadas estáticas por fetches ao Payload (via API REST ou local `getPayload`)
- Configurar seeds iniciais para popular o banco com o conteúdo atual
- Garantir que o `payload-types.ts` gerado automaticamente seja a fonte de verdade dos tipos de conteúdo
- Resolver o bug do `withPayload` duplicado em `next.config.ts`

### 2. Melhorar interface

Refatorar componentes deixando-os com responsabilidades mais claras, com arquivos pequenos e separação entre componentes genéricos e containers com contexto. Criar padrões visuais consistentes e utilizar boas práticas.

Isso inclui:
- Migrar `colors.js` para `colors.ts` e converter os tokens para CSS custom properties ou integrá-los ao tema MUI (`theme.palette`)
- Remover `typography.tsx` (deprecated) e consolidar toda tipografia em `typographyV2.tsx`
- Separar componentes "dumb" (puramente visuais, sem dados) de containers (que recebem dados e os distribuem)
- Eliminar o `ComponentMap` string → JSX em `section.tsx`, passando componentes diretamente via `sections.ts`
- Padronizar espaçamentos, border-radius e sombras como tokens reutilizáveis
- Corrigir a duplicação no `global.css`
- Remover `ProjectTools.tsx` que está morto
- Remover o import não-utilizado de `useMemo` em `About/index.tsx`
- Implementar as seções `BeyondTech` e `Resume` ou removê-las definitivamente
