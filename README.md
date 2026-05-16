# Forge Webs

**Salgslanding for skræddersyede webpakker** — en moderne, responsiv landingsside bygget med Next.js og Tailwind CSS.

Forge Webs præsenterer tre målrettede webpakker til virksomheder, der ønsker en professionel online tilstedeværelse. Siden indeholder en interaktiv prisberegner, et porteføljeoverblik og en kontaktside.

## Pakker & priser

| Pakke | Pris |
|-------|------|
| **Starter** | 9.999 kr. |
| **Growth** | 19.999 kr. |
| **Premium** | 34.999 kr. |

## Kom i gang

```bash
npm install
npm run build
```

Build-output placeres i `out/`-mappen (statisk export).

## Deploy

Siden er konfigureret til statisk export og kan deployes til **Cloudflare Pages**:

1. Kør `npm run build`
2. Upload `out/`-mappen til Cloudflare Pages
3. Sæt build-kommando til `npm run build` og output-mappe til `out`
