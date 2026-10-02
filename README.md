# Ahmed Mohamed | Portfolio

Bilingual (English / Arabic, full RTL) portfolio built with React 19, TypeScript, Vite, Tailwind CSS and Motion.

## Two builds from one codebase

| Command | Output |
| --- | --- |
| `npm run build` | Public site: email, WhatsApp, LinkedIn and CV download |
| `npm run build:upwork` | Upwork-safe site: no contact details in the bundle, CV removed, "Hire me on Upwork" CTA |

On Vercel, the Upwork project uses the build command `npm run build:upwork`.

## Develop

```bash
npm install
npm run dev          # public variant
npm run dev:upwork   # Upwork variant
```

Edit all text (both languages) in `src/i18n/content.ts`.
