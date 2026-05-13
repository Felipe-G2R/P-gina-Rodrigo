# A Casa Sobre a Rocha

Landing page de vendas da **comunidade de formação matrimonial** conduzida pelo professor **Robson Oliveira**.

> "Sobre a rocha, e não sobre a areia." (Mt 7, 24-27)

Uma página de vendas reverente, contemplativa e profundamente católica, construída para conversar com mulheres que ainda acreditam no matrimônio mas já não sabem como reconstruir aquilo que está se quebrando silenciosamente.

## Stack

- **Vite 5** + `@vitejs/plugin-react-swc`
- **React 18** + **TypeScript 5**
- **Tailwind CSS 3** (design tokens sacros herdados do nextjs-app)
- **Framer Motion 11** (animações suaves, com suporte a `prefers-reduced-motion`)
- **Lucide React** (ícones)
- **Google Fonts:** Playfair Display, EB Garamond, Cinzel, Libre Caslon Text

## Comandos

```bash
npm install        # instalar dependências
npm run dev        # ambiente de desenvolvimento (http://localhost:5173)
npm run build      # build de produção
npm run preview    # servir o build localmente
npm run lint       # type-check
```

## Estrutura

```
vite-app/
├── public/
│   └── robson.jpg
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── index.css
│   ├── lib/
│   │   └── content.ts          # Todo o copy estruturado e tipado
│   └── components/
│       ├── Header.tsx
│       ├── Hero.tsx
│       ├── EmotionalHook.tsx
│       ├── Problem.tsx
│       ├── Product.tsx
│       ├── Journey.tsx
│       ├── Authority.tsx
│       ├── Curriculum.tsx
│       ├── ValueStack.tsx
│       ├── Bonuses.tsx
│       ├── Guarantee.tsx
│       ├── Urgency.tsx
│       ├── FAQ.tsx
│       ├── CTASection.tsx
│       ├── Footer.tsx
│       └── ornaments/
│           ├── Divider.tsx
│           ├── House.tsx        # casa sobre a rocha
│           ├── Rings.tsx        # alianças entrelaçadas
│           ├── Vine.tsx         # vinha ornamental
│           ├── OpenBook.tsx     # bíblia aberta
│           ├── HeartCross.tsx   # coração com cruz
│           └── Family.tsx       # silhueta da família
├── index.html
├── tailwind.config.ts
├── postcss.config.cjs
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Design tokens

Paleta herdada da landing irmã (`nextjs-app`):

| Token | Cor | Uso |
|-------|-----|-----|
| `teal` | `#1F5E5C` | acentos sacros |
| `teal-deep` | `#0F3D3B` | botões primários (texto) |
| `teal-darker` | `#0A2C2A` | seções escuras (fundo) |
| `brass` | `#C99A6B` | latão (CTAs, ornamentos) |
| `brass-bright` | `#DDB388` | hover, destaque |
| `brass-dark` | `#A6764B` | tipografia sacra |
| `ivory` | `#F2E9D8` | texto sobre fundo escuro |
| `parchment` | `#F5EFE3` | fundo principal (papel) |
| `parchment-dark` | `#ECE3CF` | cards sutis |
| `charcoal` | `#1A1A1A` | corpo de texto |
| `rose` | `#9B3B47` | acento bordô discreto (preço riscado) |

Tipografia:

- **Playfair Display** — display, títulos
- **EB Garamond** — corpo de texto (prose-sacro)
- **Cinzel** — small-caps tracking ultra (eyebrows, CTAs)
- **Libre Caslon Text** — citações, callouts itálicos

## Estética

Tinta sobre papel. Sacra. Contemplativa. Sem sombras pesadas, sem gradientes berrantes. Filetes em latão. Numerais romanos. Ornamentos vetoriais finos (casa sobre rocha, vinha, livro aberto, coração-cruz, alianças, família) — todos em SVG inline, sem dependências externas.

## Acessibilidade

- HTML semântico (`<header>`, `<main>`, `<section>`, `<nav>`, `<footer>`, `<article>`)
- `aria-labelledby` em cada seção
- `aria-expanded` / `aria-controls` no acordeão de FAQ
- `alt` descritivo na foto de Robson
- Foco visível em latão (`outline: 2px solid #C99A6B`)
- Respeito completo a `prefers-reduced-motion`
- Contraste validado para WCAG AA

## Créditos

**Professor:** Robson Oliveira
**Comunidade:** A Casa Sobre a Rocha — formação matrimonial
**Visão:** matrimônio como construção, não como impulso
