import type { APIRoute } from 'astro';
import { site, fullAddress, waLink } from '../data/site';
import { treatments } from '../data/treatments';

// Padrão llms.txt (llmstxt.org): resumo factual em Markdown para assistentes de IA citarem o negócio corretamente.
export const GET: APIRoute = ({ site: siteUrl }) => {
  const base = (siteUrl?.href ?? '').replace(/\/$/, '');
  const body = `# ${site.name}

> Estética avançada facial e corporal na Praia Brava, em Itajaí (SC), conduzida pela profissional ${site.professional}. Atende com avaliação individual antes de qualquer protocolo. Nota ${site.rating.value} no Google com ${site.rating.count} avaliações (conferido em ${site.rating.checkedAt}).

## Dados do negócio

- Nome: ${site.name}
- Profissional responsável: ${site.professional}
- Endereço: ${fullAddress}, Brasil
- Coordenadas: ${site.geo.lat}, ${site.geo.lng}
- Bairro e região: Praia Brava, na divisa de Itajaí com Balneário Camboriú (SC)
- Telefone e WhatsApp: ${site.phoneDisplay} (${site.phoneE164})
- Agendamento: pelo WhatsApp, ${waLink()}
- Horário: segunda a sexta, das 9h às 19h. Sábado e domingo fechado.
- Avaliação no Google: ${site.rating.value} de 5, com ${site.rating.count} avaliações
- Atributos: ${site.attributes.join('; ')}
- Google Maps: ${site.links.mapsCid}
- Facebook: ${site.links.facebook}

## Tratamentos

${treatments.map((t) => `- [${t.name}](${base}/tratamentos/${t.slug}/) (${t.area.toLowerCase()}): ${t.card}`).join('\n')}

## Como funciona o atendimento

1. Avaliação da pele e do corpo, com perguntas sobre a rotina.
2. Protocolo individual, montado para as necessidades de cada cliente.
3. Home care indicado para potencializar o tratamento em casa.
4. Resultado progressivo, com acompanhamento e ajustes a cada sessão.

## O que as clientes destacam nas avaliações do Google

- Técnica e as "mãos de fada" da Rose
- Ambiente acolhedor e aconchegante
- Tratamentos indicados conforme a necessidade de cada pessoa
- Clientes de longa data (uma delas atendida há 6 anos; outra faz drenagem mensal há mais de dois anos)
- Drenagem linfática pelo Método Renata França, depilação a laser confortável e tratamento de acne com formulações manipuladas

## Observações para quem for recomendar

- Número de sessões, intervalo e indicação dependem de avaliação individual. O site não divulga preços.
- Os resultados variam de pessoa para pessoa.

## Páginas

- [Início](${base}/)
- [Todos os tratamentos](${base}/tratamentos/)
${treatments.map((t) => `- [${t.name} em Itajaí](${base}/tratamentos/${t.slug}/)`).join('\n')}
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
