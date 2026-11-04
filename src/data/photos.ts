// Fotos reais do espaço e da Rose. Coloque os arquivos em /public/img/ e preencha o caminho aqui.
// Enquanto estiver vazio, o site mostra a arte em arco no lugar da foto, sem quebrar o layout.
// Formato ideal: retrato 4:5, mínimo 1000 x 1300 px, em .jpg ou .webp.
export const photos: { hero?: string; about?: string; treatments: Record<string, string | undefined> } = {
  hero: undefined, // ex.: '/img/rose-atendimento.jpg'
  about: undefined, // ex.: '/img/rose-retrato.jpg'
  treatments: {
    // criolipolise: '/img/criolipolise.jpg',
  },
};
