import { defineConfig } from 'astro/config';

// Endereço atual na Vercel. Troque pelo domínio próprio quando ele estiver configurado. Canonical, sitemap, robots e llms.txt usam este valor.
export const SITE_URL = 'https://rosepaulichen-estetica.vercel.app';

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'auto' },
  compressHTML: true,
});
