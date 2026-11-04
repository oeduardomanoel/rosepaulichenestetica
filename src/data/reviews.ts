// Avaliações públicas do Google, transcritas como foram escritas (só o sobrenome foi abreviado).
export type Review = {
  name: string;
  text: string;
  tags: string[];
  date?: string;
};

export const reviews: Review[] = [
  {
    name: 'Mariana F. G.',
    text: 'Faço drenagem com a Rose mensalmente há mais de dois anos e adoro, sou fã! A Rose é um amor, super profissional, excelente drenagem do método Renata França além de ser muito dedicada e estudiosa. Meus filhos também fazem limpeza facial com ela e já fiz e terminei minha depilação a laser SEM DOR! Sempre com os melhores aparelhos.',
    tags: ['drenagem-linfatica', 'limpeza-de-pele', 'depilacao-a-laser'],
    date: 'fev. 2026',
  },
  {
    name: 'Gabriela W.',
    text: 'Indico demais o trabalho da Dra Rose!!! Seu trabalho mudou muito a minha pele. Sempre tive acnes e com os procedimentos que ela realizou no meu rosto e as formulações manipuladas exclusivamente para mim, hoje minha pele está muito linda e não tenho mais acne. Gratidão!!!',
    tags: ['tratamento-de-acne'],
  },
  {
    name: 'Chaiane D.',
    text: 'Quero deixar registrado o trabalho impecável da Rose. Fiz drenagem linfática, depilação a laser, limpeza de pele e sessões de Multishape, e em todos os procedimentos ela demonstrou extremo cuidado, técnica e profissionalismo. Além da competência, o atendimento é acolhedor e atencioso. (…) Recomendo de olhos fechados!',
    tags: ['multishape', 'drenagem-linfatica', 'depilacao-a-laser', 'limpeza-de-pele'],
    date: 'fev. 2026',
  },
  {
    name: 'Shayane G.',
    text: 'A Rose é uma profissional fora da curva. Realizei procedimentos de rosto e corpo com ela. Ambiente acolhedor, agradável, experiência do início ao fim, com resultados fantásticos. Suuper indico.',
    tags: ['geral'],
    date: 'fev. 2026',
  },
  {
    name: 'Cliente há 6 anos',
    text: 'A Rose é uma excelente profissional! Me atende há 6 anos. Está em constante aprendizagem, estudando muito para levar aos seus clientes o que tem de melhor (…)',
    tags: ['geral'],
  },
  {
    name: 'Muriel T. L.',
    text: 'A Rose é excelente em tudo que faz! Fiz tratamento de drenagem linfática e a técnica aplicada deu resultados incríveis. Além disso, já fiz tratamentos faciais e outros corporais. Sempre muito bem atendida e com tratamentos indicados conforme minhas necessidades.',
    tags: ['drenagem-linfatica'],
    date: 'fev. 2026',
  },
  {
    name: 'Eloisa E.',
    text: 'Parabéns Rose pelo ótimo atendimento, pela tuas mãos de fada, ótimo resultado. (…) ambiente super aconchegante, quase dormi ou dormi não sei kkkkkk Amei tudo 🥰',
    tags: ['geral'],
    date: 'fev. 2026',
  },
];

// Primeiro as avaliações que citam o tratamento; depois completa com as gerais (rosto e corpo, atendimento).
export function reviewsFor(slug: string, limit = 2) {
  const matched = reviews.filter((r) => r.tags.includes(slug));
  const general = reviews.filter((r) => r.tags.includes('geral'));
  return [...matched, ...general].slice(0, limit);
}
