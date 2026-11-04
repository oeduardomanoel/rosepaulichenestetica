# Rose Paulichen Estética Avançada

Site institucional da Rose Paulichen Estética Avançada (Praia Brava, Itajaí, SC). Astro estático, pronto para a Vercel.

## Rodar local

```bash
npm install
npm run dev
```

## Publicar na Vercel

1. Importe este repositório na Vercel. O framework (Astro) é detectado sozinho; build `npm run build`, saída `dist`.
2. Troque o domínio em `astro.config.mjs` (`SITE_URL`). Canonical, sitemap.xml, robots.txt e llms.txt usam esse valor.
3. Depois do primeiro deploy, envie `https://SEU-DOMINIO/sitemap.xml` no Google Search Console.

## Onde editar

| O quê | Arquivo |
| --- | --- |
| Endereço, telefone, horário, nota do Google, links | `src/data/site.ts` |
| Tratamentos (texto, FAQ, SEO, mensagem do WhatsApp) | `src/data/treatments.ts` |
| Avaliações exibidas | `src/data/reviews.ts` |
| Fotos reais (hero, sobre, tratamentos) | `public/img/` + `src/data/photos.ts` |
| Cores, fontes e animações | `src/styles/global.css`, `src/scripts/motion.ts` |

## SEO e GEO

- Uma página por tratamento em `/tratamentos/<slug>/` com título e descrição locais.
- schema.org: `BeautySalon` (endereço, geo, horário, catálogo de serviços), `Service`, `FAQPage`, `BreadcrumbList`, `ItemList`.
- `/sitemap.xml`, `/robots.txt` (buscadores e bots de IA liberados) e `/llms.txt` gerados a partir dos dados.
- Cliques no WhatsApp disparam `whatsapp_click` no dataLayer, `generate_lead` no GA4 e `Contact` no Meta Pixel quando esses scripts existirem.

## Regra de copy

`npm run check:copy` depois do build varre o texto visível e falha se houver hífen ou travessão na copy (telefone e CEP ficam de fora).
