# Benchmark visual para o Port Ago

## Objetivo

Este benchmark busca uma direção visual para o Port Ago que não pareça uma variação do `../tft/frontend`. Os dois projetos estão bons isoladamente, mas hoje compartilham uma mesma gramática: fundo escuro, gradientes radiais, glow colorido, grid técnico e vidro/neon.

## Diagnóstico do padrão repetido

| Projeto | Padrão atual | Risco de semelhança |
| --- | --- | --- |
| `port-ago` | `body` com aurora em `radial-gradient`, `.aurora-section` com novos glows, grid por pseudo-elemento, CTA com gradiente e sombra neon | Parece tech/cyber genérico; conversa muito com dashboards, jogos e AI SaaS |
| `../tft/frontend` | Fundo escuro, grid fixo em `body::before`, scanline animada em `body::after`, cards com azul/ciano/dourado e botões com shimmer | É coerente com esports/TFT, mas usa a mesma base visual de dark + grid + glow |

O problema não é o uso pontual de gradiente. O problema é o conjunto: **dark + aurora + grid + glass + neon**. Para o portfólio ficar mais autoral, o fundo deveria mudar de função: sair de "ambiente cyber" e virar uma metáfora ligada à pessoa, ao trabalho e à narrativa.

## Método de pesquisa

- Fonte principal: [emmabostian/developer-portfolios](https://github.com/emmabostian/developer-portfolios).
- Triagem textual completa do README: 1685 entradas encontradas, 125 com termos relacionados a AI/IA/ML/GenAI/LLM/machine learning/data science/automation/agentic.
- Inspeção aprofundada de uma amostra acessível de portfólios relacionados a IA e de portfólios variados/aleatórios.
- Foco da análise: comportamento, estrutura, narrativa, padrões de interação e ideias reaproveitáveis sem copiar identidade visual.

## Referências analisadas

### Relacionadas a IA/AI

| Referência | URL | O que observar |
| --- | --- | --- |
| Aaabad Touk | https://aaabadcode.com | Hero com imagem grande, disponibilidade, linguagem de "AI that ships", terminal fake, métricas e projetos com stack |
| Aman Rawat | https://amanrwt.com | Página direta, poucas seções, copy limpa, tom de engenheiro pragmático e uso leve de comentários/labels |
| Aryan Raj | https://www.aryanraj.cv | Perfil AI/ML minimalista, foco em texto, resumo profissional e CTA de agenda |
| Malaka Venu | https://malakavenu.com | AI-first forte, métricas, case studies, termos de agentes/MCP/RAG e hierarquia de especialidades |
| Arsh Mishra | https://windows-xp-portfolio-tau.vercel.app | Metáfora inteira de sistema operacional/Windows XP; diferenciação vem do comportamento, não só da paleta |
| Rajesh Pal | https://rajs.app | Loader interativo, cursor/hover com luz, tela de entrada e sensação de mini-produto |
| Peter Steinberger | https://steipete.me | Blog-first: identidade construída por escrita, posts recentes e histórico público |
| Arjun Ganesan | https://arjunganesan.com | Long-form técnico, narrativa de arquitetura, projetos com contexto profundo |
| Achyut Katiyar | https://achyutkatiyar.com | Projetos como prova principal, bullets objetivos, achievements e recomendações |

### Amostra variada

| Referência | URL | O que observar |
| --- | --- | --- |
| Brittany Chiang | https://brittanychiang.com | Estrutura clássica e escaneável: About, Experience, Projects, Writing; prova por detalhes |
| Lee Robinson | https://leerob.io | Minimalismo extremo, tom humano, escrita e links como centro da experiência |
| Ben Rogers | https://benrogers.dev | Experiência densa, projetos com screenshots e tecnologias, formato de currículo navegável |
| ShihabLabs | https://shihablabs.vercel.app | Navegação/rodapé com linguagem de terminal, status online e microcopy técnica |
| Ghom Krosmonaute | https://ghomkrosmonaute.github.io/?game | Modo jogo, temas, CSS com faixas/rainbow e comportamento lúdico |

## Padrões que aparecem nos portfólios de IA

1. **Claims de produção, não só hype**: "building AI that ships", "agentic systems", "RAG", "MCP", "streaming UI", "models deployed". Funciona melhor quando acompanhado de métricas.
2. **Terminal e código como ornamento narrativo**: muitos usam blocos `whoami`, `skills.txt`, prompt piscando ou labels com `// about`. É familiar, mas pode virar clichê.
3. **Métricas logo no hero ou no about**: anos, projetos, modelos, subagentes, servidores MCP, impacto em performance.
4. **Projetos como mini-case studies**: os melhores não listam só stack; contam problema, solução e resultado.
5. **IA como sistema, não como decoração**: quando a página fala de agentes, RAG ou automação, o design mais convincente mostra fluxo, rastros, decisões ou camadas.
6. **Diferenciação por metáfora**: Windows XP, jogo, blog, terminal, dossier, laboratório, timeline. A metáfora manda mais que a paleta.

## Ideias de comportamento aproveitáveis

| Ideia | Inspiração | Como adaptar ao Port Ago |
| --- | --- | --- |
| Hero como "dossier" | Malaka, Arjun, Brittany | Abrir com nome, papel, status e 3 evidências concretas em cartões editoriais |
| Background com mapa mental | Portfólios AI e arquitetura | Substituir grid cyber por linhas finas conectando formação, experiências e projetos |
| Projetos em modo investigação | Arjun, Ben Rogers | Cada projeto vira um caso: problema, papel, stack, decisão técnica, resultado |
| Microinteração de leitura | Lee Robinson, Peter Steinberger | Fundo quase neutro, com foco no texto e pequenos detalhes vivos |
| Terminal discreto | Aaabad, ShihabLabs | Usar terminal apenas como componente pontual, não como identidade inteira |
| Interface lúdica opcional | Ghom, Windows XP | Um modo alternativo ou easter egg, sem dominar toda a página |
| Loader/entrada com intenção | Rajesh Pal | Se houver entrada animada, ela deve revelar a narrativa, não apenas mostrar brilho |

## Direções visuais recomendadas

### 1. Editorial técnico

Um portfólio com cara de artigo interativo: fundo claro ou off-black fosco, tipografia forte, divisórias finas, notas laterais e projetos como estudos de caso. Diferencia bem do TFT porque abandona o grid neon.

**Elementos:**
- fundo `#f5f1e8` ou `#0f1115` sem aurora;
- textura sutil de papel/noise;
- headings grandes e secos;
- cards como fichas/documentos;
- links com sublinhado animado, não glow.

### 2. Mapa de trajetória

A página vira uma linha do tempo espacial: formação, experiências e projetos conectados por uma trilha orgânica. Mantém o tema de tecnologia, mas troca grid por cartografia pessoal.

**Elementos:**
- linhas SVG finas;
- nós para experiências/projetos;
- pequenas coordenadas ou datas;
- background com contornos/topografia em vez de quadrícula.

### 3. Workbench / bancada de criação

Um visual de mesa de trabalho digital: blocos soltos, snippets, anotações, mini-previews de projetos e tags como etiquetas. É mais pessoal e menos SaaS/cyber.

**Elementos:**
- cards desalinhados de forma controlada;
- etiquetas de stack como adesivos;
- sombras suaves, bordas de papel/cartão;
- hover com "levantar" card, não neon.

### 4. Blog-first com projetos como prova

Inspirado em Lee Robinson e Peter Steinberger: conteúdo e escrita em primeiro lugar. Bom se o objetivo for parecer mais maduro, técnico e memorável sem depender de efeitos visuais.

**Elementos:**
- home curta;
- blocos de texto muito bem escritos;
- lista de projetos com uma frase forte cada;
- seção de "notas" ou "decisões que eu tomei".

## O que evitar

- Repetir `radial-gradient` colorido em toda seção.
- Usar grid como camada principal do fundo.
- Botões com glow forte e gradiente semelhante ao TFT.
- Glass panels escuros como padrão de todos os cards.
- Paleta ciano/violeta/dourado como assinatura base.
- Terminal como identidade completa, porque muitos portfólios AI já fazem isso.

## Padrão de fundo recomendado

Em vez de aurora + grid, usar **textura editorial + linhas topográficas + manchas discretas**. O fundo passa a parecer uma superfície de pensamento, não um dashboard.

```html
<main class="portfolio-surface">
  <section class="hero-dossier">
    <p class="eyebrow">portfolio / full-stack developer</p>
    <h1>Construo produtos com clareza, cuidado e profundidade técnica.</h1>
    <p class="lead">
      Experiência em frontend, backend e sistemas que precisam sair do protótipo
      e virar produto confiável.
    </p>
  </section>
</main>
```

```css
.portfolio-surface {
  min-height: 100vh;
  color: #171717;
  background:
    linear-gradient(rgba(23, 23, 23, 0.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(23, 23, 23, 0.025) 1px, transparent 1px),
    radial-gradient(circle at 16% 18%, rgba(229, 166, 84, 0.16), transparent 22rem),
    #f4efe6;
  background-size: 100% 12px, 12px 100%, auto, auto;
}

.portfolio-surface::before {
  content: "";
  position: fixed;
  inset: 0;
  pointer-events: none;
  opacity: 0.28;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 240 160' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M-20 120C40 70 75 150 140 92S220 80 260 34' fill='none' stroke='%23171717' stroke-opacity='.18'/%3E%3Cpath d='M-10 48C34 20 90 44 124 28s80-36 130 4' fill='none' stroke='%23171717' stroke-opacity='.12'/%3E%3C/svg%3E");
  background-size: 520px 360px;
}
```

## Exemplo de hero em "dossier"

```html
<section class="dossier-hero">
  <div class="dossier-copy">
    <span class="stamp">disponível para bons problemas</span>
    <h1>Tiago Daneluzzi</h1>
    <p>
      Desenvolvedor full-stack que transforma requisitos ambíguos em interfaces,
      APIs e fluxos de produto que sustentam uso real.
    </p>
  </div>

  <aside class="evidence-card">
    <strong>evidências</strong>
    <dl>
      <div><dt>foco</dt><dd>produto, arquitetura e UX</dd></div>
      <div><dt>modo</dt><dd>clareza antes de brilho</dd></div>
      <div><dt>stack</dt><dd>React, Next.js, Node, Payload</dd></div>
    </dl>
  </aside>
</section>
```

```css
.dossier-hero {
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(280px, 0.8fr);
  gap: clamp(2rem, 6vw, 5rem);
  align-items: end;
  min-height: 86vh;
}

.stamp {
  display: inline-flex;
  width: fit-content;
  transform: rotate(-1deg);
  border: 1px solid #171717;
  padding: 0.35rem 0.7rem;
  font: 700 0.75rem/1 monospace;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.evidence-card {
  border: 1px solid rgba(23, 23, 23, 0.18);
  background: rgba(255, 252, 245, 0.72);
  box-shadow: 18px 18px 0 rgba(23, 23, 23, 0.06);
  padding: 1.25rem;
}
```

## Exemplo de projetos como case cards

```html
<article class="case-card">
  <span class="case-index">case 01</span>
  <h2>Port Ago</h2>
  <p>
    Reposicionamento visual de um portfólio para fugir de uma estética cyber
    repetida em outro projeto pessoal.
  </p>
  <ul>
    <li><strong>Problema:</strong> identidade parecida com dashboard gamer.</li>
    <li><strong>Decisão:</strong> trocar aurora/grid por linguagem editorial.</li>
    <li><strong>Resultado esperado:</strong> mais autoria e foco em narrativa.</li>
  </ul>
</article>
```

```css
.case-card {
  position: relative;
  border-top: 2px solid currentColor;
  padding: 1rem 0 2rem;
}

.case-index {
  font-family: monospace;
  font-size: 0.75rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #9a6232;
}

.case-card:hover h2 {
  text-decoration: underline;
  text-decoration-thickness: 0.12em;
  text-underline-offset: 0.16em;
}
```

## Recomendação final

A melhor direção para o Port Ago é **editorial técnico com mapa de trajetória**. Ela preserva sofisticação, permite motion sutil e continua comunicando tecnologia, mas remove a dependência de aurora/grid/glass que aproxima o portfólio do TFT.

Se esse benchmark virar redesign, a primeira mudança deveria ser no `app/(app)/globals.css`: substituir `body` e `.aurora-section` por uma superfície editorial/topográfica e simplificar glows no `HeroSection.tsx`.
