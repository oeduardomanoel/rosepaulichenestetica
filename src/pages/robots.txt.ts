import type { APIRoute } from 'astro';

// Buscadores e assistentes de IA liberados: o objetivo é aparecer no Google e nas respostas de ChatGPT, Perplexity, Gemini e Claude.
const aiBots = [
  'GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'ClaudeBot', 'Claude-User', 'Claude-SearchBot', 'anthropic-ai',
  'PerplexityBot', 'Perplexity-User', 'Google-Extended', 'Applebot-Extended', 'Bingbot', 'CCBot', 'meta-externalagent', 'Amazonbot', 'DuckAssistBot',
];

export const GET: APIRoute = ({ site }) => {
  const base = (site?.href ?? '').replace(/\/$/, '');
  const body = [
    'User-agent: *',
    'Allow: /',
    'Disallow: /404/',
    '',
    ...aiBots.flatMap((b) => [`User-agent: ${b}`, 'Allow: /', '']),
    `Sitemap: ${base}/sitemap.xml`,
    '',
    `# Resumo do negócio para modelos de linguagem: ${base}/llms.txt`,
    '',
  ].join('\n');
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
