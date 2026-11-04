// Fonte única dos dados do negócio. Tudo que aparece no site, no schema.org e no llms.txt sai daqui.
// Dados conferidos no Perfil da Empresa no Google em 04/11/2026.

export const site = {
  name: 'Rose Paulichen Estética Avançada',
  shortName: 'Rose Paulichen',
  professional: 'Rose Paulichen',
  tagline: 'Estética avançada facial e corporal na Praia Brava, Itajaí',
  phoneDisplay: '(47) 99998-1068',
  phoneE164: '+5547999981068',
  whatsapp: '5547999981068',
  address: {
    street: 'Av. Osvaldo Reis, 3385, sala 707/01',
    building: 'Edifício Riviera Concept',
    neighborhood: 'Praia Brava',
    city: 'Itajaí',
    state: 'SC',
    postalCode: '88306-001',
    country: 'BR',
  },
  geo: { lat: -26.953332, lng: -48.6394455 },
  hours: [
    { days: 'Segunda a sexta', time: '9h às 19h' },
    { days: 'Sábado e domingo', time: 'Fechado' },
  ],
  hoursSchema: {
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '19:00',
  },
  rating: { value: '5,0', count: 69, checkedAt: 'novembro de 2026' },
  links: {
    maps: 'https://www.google.com/maps/place/Rose+Paulichen+Est%C3%A9tica+Avan%C3%A7ada/@-26.953332,-48.6394455,17z/data=!4m6!3m5!1s0x94d8cbfa3e45e08f:0x336e05eef910fd68!8m2!3d-26.953332!4d-48.6394455!16s%2Fg%2F11k69vpp61',
    mapsCid: 'https://maps.google.com/?cid=3705906067311492456',
    directions: 'https://www.google.com/maps/dir/?api=1&destination=-26.953332,-48.6394455',
    mapEmbed: 'https://www.google.com/maps?q=Rose%20Paulichen%20Est%C3%A9tica%20Avan%C3%A7ada%2C%20Av.%20Osvaldo%20Reis%2C%203385%2C%20Itaja%C3%AD&z=16&output=embed',
    facebook: 'https://www.facebook.com/rosepaulichenestetica/',
    // Preencha quando confirmar o @ oficial. Fica de fora do site e do schema enquanto estiver vazio.
    instagram: '',
  },
  attributes: ['Empresa liderada por mulher', 'Ambiente LGBTQ+ friendly'],
};

export function waLink(message = 'Olá, Rose! Vim pelo site e quero agendar uma avaliação.') {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const fullAddress = `${site.address.street}, ${site.address.building}, ${site.address.neighborhood}, ${site.address.city}, ${site.address.state}, ${site.address.postalCode}`;
