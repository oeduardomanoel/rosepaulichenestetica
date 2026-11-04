import { defineConfig } from 'astro/config';

// Troque pelo domínio final antes de publicar. Canonical, sitemap, robots e llms.txt usam este valor.
export const SITE_URL = 'https://www.rosepaulichen.com.br';

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'auto' },
  compressHTML: true,
});
