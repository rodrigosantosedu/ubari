# Ubari Espaço de Psicologia

Site institucional (Next.js 14 · App Router · TypeScript · Tailwind).

## Design system (anti-IA)

- **Cores:** 2 principais — `clay` (marca) e `moss` (somente CTA de agendar) + neutros `paper` / `mist` / `ink`
- **Tipo:** Outfit (títulos/UI geométrica) + Source Serif 4 (corpo legível)
- **Layout:** respiro generoso, assimetria sutil, divisores tipográficos no lugar de cards/ícones genéricos
- **Detalhe:** bordas hairline de baixa opacidade; sem sombras pesadas nem glow

Tokens em `src/app/globals.css` e `tailwind.config.ts`.

## Desenvolvimento

```bash
cp .env.example .env.local
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Conteúdo editável

| Arquivo | Conteúdo |
|---|---|
| `src/content/site.ts` | Endereço, CRP, contatos, redes |
| `src/content/team.ts` | Equipe |
| `src/content/home.ts` | Pilares, momentos, serviços, FAQ home |
| `src/content/blog/` | Posts |
| `public/brand/` | Logo oficial |
| `public/images/` | Fotos reais (substituir placeholders) |

## Scripts

- `npm run dev` — desenvolvimento
- `npm run build` — build de produção
- `npm run start` — servidor de produção

## Landing pages

`/lp/ansiedade-e-burnout` — sem menu de saída. Layout em `src/app/lp/`.
