import type { APIRoute } from 'astro';
import { treatments } from '../data/treatments';

export const GET: APIRoute = ({ site }) => {
  const base = (site?.href ?? '').replace(/\/$/, '');
  const today = new Date().toISOString().slice(0, 10);
  const pages = [
    { loc: '/', priority: '1.0', freq: 'weekly' },
    { loc: '/tratamentos/', priority: '0.9', freq: 'monthly' },
    ...treatments.map((t) => ({ loc: `/tratamentos/${t.slug}/`, priority: '0.8', freq: 'monthly' })),
  ];
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map((p) => `  <url>\n    <loc>${base}${p.loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${p.freq}</changefreq>\n    <priority>${p.priority}</priority>\n  </url>`)
  .join('\n')}
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
