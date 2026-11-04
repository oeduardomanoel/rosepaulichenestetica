// Cada tratamento vira uma página em /tratamentos/<slug>/ com Service + FAQPage em schema.org.
// Regra de copy: nada de promessa de resultado, número de sessões ou preço inventado. Isso é definido na avaliação.

export type Faq = { q: string; a: string };

export type Treatment = {
  slug: string;
  name: string;
  term: string; // como aparece no meio da frase
  withArticle: string;
  area: 'Facial' | 'Corporal' | 'Facial e corporal';
  seoTitle: string;
  metaDescription: string;
  h1: string;
  h1Accent: string;
  lead: string;
  card: string;
  whatIs: string[];
  forWho: string[];
  withRose: string;
  traits: string[];
  faq: Faq[];
  wa: string;
  hue: number; // tom da arte de cada cartão, em graus no círculo de cor
};

export const treatments: Treatment[] = [
  {
    slug: 'criolipolise',
    name: 'Criolipólise',
    term: 'criolipólise',
    withArticle: 'a criolipólise',
    area: 'Corporal',
    seoTitle: 'Criolipólise em Itajaí, Praia Brava | Rose Paulichen Estética Avançada',
    metaDescription:
      'Criolipólise em Itajaí para gordura localizada, sem cortes e sem agulhas. Avaliação individual com a Rose Paulichen na Praia Brava. Agende pelo WhatsApp.',
    h1: 'Criolipólise em Itajaí',
    h1Accent: 'para a gordura que o treino não leva',
    lead: 'Frio controlado aplicado na área certa, depois de uma avaliação que olha o seu corpo e a sua rotina. Sem cortes e sem agulhas.',
    card: 'Frio controlado para gordura localizada em abdômen, flancos, culote e outras áreas.',
    whatIs: [
      'A criolipólise usa o resfriamento controlado para atingir as células de gordura de uma região específica do corpo. É um procedimento não invasivo: a ponteira trabalha sobre a área marcada e você não passa por corte nem anestesia.',
      'Depois da sessão o próprio organismo elimina essas células aos poucos. Por isso a mudança é gradual e aparece nas semanas seguintes, não no mesmo dia.',
    ],
    forWho: [
      'Gordura localizada que não acompanha o resultado do treino e da alimentação',
      'Abdômen, flancos, culote, costas e outras áreas avaliadas',
      'Quem quer tratar o contorno sem cirurgia',
    ],
    withRose:
      'Criolipólise não é tratamento pra emagrecer, e a Rose vai te dizer isso na avaliação se for o caso. Ela marca as áreas, explica o que dá pra esperar e combina a criolipólise com outras tecnologias quando o seu corpo pede.',
    traits: ['Sem cortes', 'Sem agulhas', 'Resultado gradual'],
    faq: [
      {
        q: 'Criolipólise dói?',
        a: 'A sensação mais comum é de frio intenso nos primeiros minutos, que vai diminuindo durante a sessão. Antes de começar, a Rose explica cada etapa pra você saber exatamente o que vai sentir.',
      },
      {
        q: 'Quantas sessões de criolipólise eu preciso?',
        a: 'Depende da área e da quantidade de gordura localizada. O número de sessões é definido na avaliação, depois de olhar o seu caso de perto.',
      },
      {
        q: 'Em quanto tempo aparece o resultado?',
        a: 'O corpo elimina as células de gordura aos poucos, então a mudança é progressiva e costuma aparecer nas semanas seguintes à sessão.',
      },
      {
        q: 'Criolipólise substitui lipoaspiração?',
        a: 'Não. A criolipólise trata gordura localizada sem cirurgia, com uma proposta diferente da lipoaspiração. Se o seu objetivo pedir outro caminho, você fica sabendo na avaliação.',
      },
    ],
    wa: 'Olá, Rose! Vim pelo site e quero saber mais sobre criolipólise.',
    hue: 200,
  },
  {
    slug: 'hipro',
    name: 'Hipro',
    term: 'Hipro',
    withArticle: 'o Hipro',
    area: 'Facial e corporal',
    seoTitle: 'Hipro em Itajaí: ultrassom microfocado (HIFU) | Rose Paulichen',
    metaDescription:
      'Hipro em Itajaí: ultrassom microfocado (HIFU) para firmeza, flacidez e efeito lifting no rosto e no corpo, sem cortes. Avaliação na Praia Brava.',
    h1: 'Hipro em Itajaí',
    h1Accent: 'firmeza que vem de dentro da pele',
    lead: 'Ultrassom microfocado que trabalha nas camadas profundas da pele e estimula a produção de colágeno. No rosto e no corpo, sem cortes e sem agulhas.',
    card: 'Ultrassom microfocado (HIFU) para flacidez, firmeza e efeito lifting no rosto e no corpo.',
    whatIs: [
      'O Hipro é um equipamento de ultrassom focado de alta intensidade, a tecnologia conhecida pela sigla HIFU. Ele concentra energia em profundidades específicas da pele, onde o colágeno é produzido, sem agredir a superfície.',
      'No rosto, é indicado para flacidez e para o efeito lifting no contorno. No corpo, para flacidez e gordura localizada. Como depende do colágeno novo que a pele produz, o resultado é progressivo.',
    ],
    forWho: [
      'Flacidez no rosto, papada e contorno da mandíbula',
      'Pele que perdeu firmeza no corpo',
      'Quem quer efeito lifting sem procedimento cirúrgico',
    ],
    withRose:
      'A profundidade de cada disparo muda conforme a região e a espessura da sua pele. A Rose define isso na avaliação e monta o protocolo do Hipro junto com o que você já faz em casa.',
    traits: ['Sem cortes', 'Sem agulhas', 'Rosto e corpo'],
    faq: [
      {
        q: 'Hipro e ultrassom microfocado são a mesma coisa?',
        a: 'O Hipro é o nome do equipamento. A tecnologia que ele usa é o ultrassom focado de alta intensidade, o HIFU, com ponteiras microfocadas e macrofocadas.',
      },
      {
        q: 'O Hipro pode ser feito no rosto e no corpo?',
        a: 'Pode. No rosto, para flacidez e efeito lifting. No corpo, para flacidez e gordura localizada. A indicação certa para você sai da avaliação.',
      },
      {
        q: 'Preciso de tempo de recuperação depois do Hipro?',
        a: 'Em geral, não. A pele pode ficar um pouco sensível ou avermelhada logo depois da sessão, e a Rose te orienta sobre os cuidados em casa.',
      },
      {
        q: 'Quando vejo o resultado do Hipro?',
        a: 'O efeito aparece aos poucos, porque depende do colágeno que a sua pele produz depois da sessão. É um resultado progressivo.',
      },
    ],
    wa: 'Olá, Rose! Vim pelo site e quero saber mais sobre o Hipro.',
    hue: 330,
  },
  {
    slug: 'drenagem-linfatica',
    name: 'Drenagem linfática Renata França',
    term: 'drenagem linfática',
    withArticle: 'a drenagem linfática',
    area: 'Corporal',
    seoTitle: 'Drenagem linfática Método Renata França em Itajaí | Rose Paulichen',
    metaDescription:
      'Drenagem linfática pelo Método Renata França em Itajaí, na Praia Brava. Menos inchaço e retenção de líquido, com clientes que fazem todo mês há anos.',
    h1: 'Drenagem linfática em Itajaí',
    h1Accent: 'pelo Método Renata França',
    lead: 'Movimentos firmes, rápidos e ritmados que ajudam o corpo a eliminar o excesso de líquido. Você sai mais leve, e tem cliente que volta todo mês há mais de dois anos.',
    card: 'Método Renata França para reduzir inchaço e retenção de líquido, com clientes de manutenção mensal.',
    whatIs: [
      'O Método Renata França é uma técnica de drenagem com movimentos rápidos, firmes e com pressão. É diferente da drenagem tradicional, que é mais lenta e suave.',
      'O objetivo é estimular o sistema linfático a eliminar o excesso de líquido. A sensação de corpo desinchado costuma aparecer logo depois da sessão.',
    ],
    forWho: [
      'Inchaço e retenção de líquido',
      'Sensação de pernas pesadas no fim do dia',
      'Quem quer manter o resultado de outros tratamentos corporais',
    ],
    withRose:
      'Nas avaliações do Google, as clientes falam da técnica e das mãos da Rose. Tem quem faça a drenagem todo mês há mais de dois anos, como manutenção.',
    traits: ['Método Renata França', 'Sessão de manutenção', 'Corpo todo'],
    faq: [
      {
        q: 'Qual a diferença do Método Renata França para a drenagem tradicional?',
        a: 'O Método Renata França usa movimentos mais rápidos, firmes e com pressão. A drenagem tradicional é mais lenta e suave. As duas têm o mesmo objetivo: ajudar o corpo a eliminar o excesso de líquido.',
      },
      {
        q: 'Com que frequência devo fazer drenagem linfática?',
        a: 'Depende do seu objetivo. Tem cliente que faz todo mês como manutenção há anos, e tem quem faça uma sequência mais próxima. A frequência certa pra você é conversada na avaliação.',
      },
      {
        q: 'A drenagem linfática emagrece?',
        a: 'Não. A drenagem reduz o inchaço e a retenção de líquido, e por isso o corpo parece mais leve e definido. Para gordura localizada, existem tecnologias específicas como a criolipólise e o Multishape.',
      },
    ],
    wa: 'Olá, Rose! Vim pelo site e quero agendar uma drenagem linfática.',
    hue: 170,
  },
  {
    slug: 'multishape',
    name: 'Multishape',
    term: 'Multishape',
    withArticle: 'o Multishape',
    area: 'Corporal',
    seoTitle: 'Multishape em Itajaí: gordura localizada, flacidez e celulite | Rose Paulichen',
    metaDescription:
      'Multishape em Itajaí para gordura localizada, flacidez e celulite. Protocolo corporal individual com a Rose Paulichen na Praia Brava. Agende sua avaliação.',
    h1: 'Multishape em Itajaí',
    h1Accent: 'várias tecnologias em uma sessão',
    lead: 'Um equipamento que reúne tecnologias como radiofrequência, vácuo e eletroestimulação para tratar o contorno do corpo no mesmo protocolo.',
    card: 'Radiofrequência, vácuo e eletroestimulação juntos para contorno, flacidez e celulite.',
    whatIs: [
      'O Multishape é uma plataforma de tratamento corporal que reúne tecnologias como radiofrequência, vácuo e eletroestimulação no mesmo aplicador.',
      'Como cada tecnologia atua de um jeito, o protocolo pode ser ajustado para o que mais incomoda você: gordura localizada, flacidez ou celulite.',
    ],
    forWho: [
      'Gordura localizada',
      'Flacidez no corpo',
      'Celulite',
    ],
    withRose:
      'O Multishape entra no protocolo quando faz sentido para o seu corpo, sozinho ou junto com drenagem, criolipólise ou Hipro. A combinação é definida na avaliação.',
    traits: ['Contorno corporal', 'Sem cortes', 'Protocolo combinado'],
    faq: [
      {
        q: 'Para que serve o Multishape?',
        a: 'O Multishape é usado em tratamentos corporais para gordura localizada, flacidez e celulite, combinando tecnologias como radiofrequência, vácuo e eletroestimulação.',
      },
      {
        q: 'Posso fazer Multishape junto com outros tratamentos?',
        a: 'Pode, e muitas vezes é o que dá o melhor resultado. A Rose avalia se vale combinar com drenagem linfática, criolipólise ou Hipro.',
      },
      {
        q: 'Quantas sessões de Multishape são necessárias?',
        a: 'Varia conforme a área e o objetivo. O plano de sessões é montado na avaliação.',
      },
    ],
    wa: 'Olá, Rose! Vim pelo site e quero saber mais sobre o Multishape.',
    hue: 20,
  },
  {
    slug: 'depilacao-a-laser',
    name: 'Depilação a laser',
    term: 'depilação a laser',
    withArticle: 'a depilação a laser',
    area: 'Corporal',
    seoTitle: 'Depilação a laser em Itajaí, Praia Brava | Rose Paulichen Estética',
    metaDescription:
      'Depilação a laser em Itajaí com equipamento moderno e foco no seu conforto. Clientes contam que fizeram o tratamento inteiro sem dor. Agende na Praia Brava.',
    h1: 'Depilação a laser em Itajaí',
    h1Accent: 'com conforto do início ao fim',
    lead: 'Equipamento moderno, sessões pensadas para o seu tipo de pele e uma profissional que acompanha você até a última sessão.',
    card: 'Laser com equipamento moderno e foco em conforto. Tem cliente que terminou sem dor.',
    whatIs: [
      'A depilação a laser atinge o folículo do pelo com energia de luz e reduz o crescimento a cada sessão. Com o tempo, os pelos ficam mais finos e mais raros.',
      'O número de sessões e o intervalo entre elas mudam conforme a região, o tipo de pelo e a sua pele.',
    ],
    forWho: [
      'Quem cansou de lâmina, cera e pelo encravado',
      'Axilas, virilha, pernas, rosto e outras regiões',
      'Quem busca um tratamento confortável',
    ],
    withRose:
      '“Já fiz e terminei minha depilação a laser SEM DOR! Sempre com os melhores aparelhos.” A frase é de uma cliente nas avaliações do Google. Cada pessoa sente de um jeito, e a Rose ajusta a sessão para o seu conforto.',
    traits: ['Equipamento moderno', 'Foco em conforto', 'Várias regiões'],
    faq: [
      {
        q: 'Depilação a laser dói?',
        a: 'Cada pessoa sente de um jeito. Algumas clientes contam nas avaliações do Google que fizeram o tratamento inteiro sem dor. A Rose ajusta a sessão para o seu conforto.',
      },
      {
        q: 'Quantas sessões de depilação a laser eu preciso?',
        a: 'Varia conforme a região, o tipo de pelo e a pele. A Rose define o plano de sessões na avaliação.',
      },
      {
        q: 'Quais regiões posso depilar com laser?',
        a: 'As mais comuns são axilas, virilha, pernas e rosto, mas outras regiões também podem ser tratadas. Pergunte pela região que você quer tratar.',
      },
    ],
    wa: 'Olá, Rose! Vim pelo site e quero saber mais sobre depilação a laser.',
    hue: 280,
  },
  {
    slug: 'limpeza-de-pele',
    name: 'Limpeza de pele',
    term: 'limpeza de pele',
    withArticle: 'a limpeza de pele',
    area: 'Facial',
    seoTitle: 'Limpeza de pele em Itajaí, Praia Brava | Rose Paulichen Estética',
    metaDescription:
      'Limpeza de pele em Itajaí para adultos e adolescentes, com avaliação da sua pele e home care indicado. Atendimento acolhedor na Praia Brava.',
    h1: 'Limpeza de pele em Itajaí',
    h1Accent: 'pra pele respirar de novo',
    lead: 'Higienização profunda, extração cuidadosa e a indicação certa do que usar em casa. Para você e também para os filhos que estão começando a cuidar da pele.',
    card: 'Higienização profunda e extração cuidadosa, com home care indicado para continuar em casa.',
    whatIs: [
      'A limpeza de pele remove impurezas, células mortas e o excesso de oleosidade que entopem os poros. É a base de qualquer tratamento facial e ajuda a pele a responder melhor aos outros cuidados.',
      'Cada limpeza começa pela leitura da sua pele: oleosidade, sensibilidade, cravos e o que você usa em casa.',
    ],
    forWho: [
      'Cravos, poros entupidos e oleosidade',
      'Primeiros cravos e espinhas dos filhos',
      'Quem quer a pele preparada para outros tratamentos',
    ],
    withRose:
      'Tem cliente que traz a família: ela faz drenagem e os filhos fazem limpeza de pele. A Rose explica cada passo e indica o home care certo para a pele continuar bem até a próxima sessão.',
    traits: ['Para toda a família', 'Home care indicado', 'Pele preparada'],
    faq: [
      {
        q: 'Meus filhos podem fazer limpeza de pele?',
        a: 'Podem. Tem cliente que traz os filhos para fazer limpeza de pele com a Rose. A limpeza é adaptada para cada pele.',
      },
      {
        q: 'De quanto em quanto tempo devo fazer limpeza de pele?',
        a: 'Depende do tipo de pele e da oleosidade. A Rose indica a frequência ideal para você depois da avaliação.',
      },
      {
        q: 'A pele fica vermelha depois da limpeza?',
        a: 'Pode ficar levemente avermelhada por algumas horas, principalmente onde houve extração. Você sai com as orientações de cuidado em casa.',
      },
    ],
    wa: 'Olá, Rose! Vim pelo site e quero agendar uma limpeza de pele.',
    hue: 140,
  },
  {
    slug: 'microagulhamento',
    name: 'Microagulhamento',
    term: 'microagulhamento',
    withArticle: 'o microagulhamento',
    area: 'Facial',
    seoTitle: 'Microagulhamento em Itajaí: textura, manchas e cicatrizes | Rose Paulichen',
    metaDescription:
      'Microagulhamento em Itajaí para textura, luminosidade, linhas de expressão, cicatrizes de acne e manchas. Protocolo individual com home care. Agende.',
    h1: 'Microagulhamento em Itajaí',
    h1Accent: 'textura e luz que você percebe no espelho',
    lead: 'Protocolo individualizado, equipamento seguro e home care indicado para potencializar o tratamento. A pele evolui sessão após sessão.',
    card: 'Textura, luminosidade, linhas de expressão, cicatrizes de acne e manchas.',
    whatIs: [
      'O microagulhamento cria microcanais na pele que estimulam a renovação e a produção de colágeno. Também ajuda os ativos do tratamento a penetrarem melhor.',
      'É usado para melhorar textura e luminosidade e para tratar linhas de expressão, cicatrizes de acne e manchas, incluindo o melasma.',
    ],
    forWho: [
      'Textura irregular e pele sem brilho',
      'Cicatrizes de acne e linhas de expressão',
      'Manchas e melasma',
    ],
    withRose:
      'Nas palavras da própria Rose: muitas clientes percebem melhora já após a primeira sessão, especialmente em textura e luminosidade. Nas sessões seguintes, a pele continua evoluindo.',
    traits: ['Avaliação da pele', 'Home care indicado', 'Resultado progressivo'],
    faq: [
      {
        q: 'O microagulhamento trata cicatriz de acne?',
        a: 'Sim, é um dos usos mais comuns. Também é indicado para textura, luminosidade, linhas de expressão e manchas, como o melasma.',
      },
      {
        q: 'Quando percebo resultado no microagulhamento?',
        a: 'Muitas clientes percebem melhora já após a primeira sessão, principalmente em textura e luminosidade. Nas sessões seguintes, a pele continua evoluindo.',
      },
      {
        q: 'Preciso usar algum produto em casa?',
        a: 'Sim. O home care é parte do protocolo e potencializa o tratamento. A Rose indica o que usar de acordo com a sua pele.',
      },
    ],
    wa: 'Olá, Rose! Vim pelo site e quero saber mais sobre microagulhamento.',
    hue: 350,
  },
  {
    slug: 'tratamento-de-acne',
    name: 'Tratamento de acne',
    term: 'tratamento de acne',
    withArticle: 'o tratamento de acne',
    area: 'Facial',
    seoTitle: 'Tratamento de acne em Itajaí | Rose Paulichen Estética Avançada',
    metaDescription:
      'Tratamento de acne em Itajaí com procedimentos no consultório e formulações manipuladas para a sua pele. Foco em tratar a causa. Agende na Praia Brava.',
    h1: 'Tratamento de acne em Itajaí',
    h1Accent: 'cuidando da causa, não só da espinha',
    lead: 'Procedimentos no consultório e formulações manipuladas pensadas para a sua pele. O foco é tratar a causa da acne, e não esconder o que aparece.',
    card: 'Procedimentos no consultório e fórmulas manipuladas para a sua pele, tratando a causa.',
    whatIs: [
      'Acne tem causa, e ela muda de pessoa pra pessoa. O tratamento começa entendendo a sua pele, a sua rotina e o que já foi tentado antes.',
      'A partir daí, a Rose combina procedimentos no consultório com formulações manipuladas para uso em casa, ajustando o protocolo conforme a pele responde.',
    ],
    forWho: [
      'Acne que volta mesmo com produto de farmácia',
      'Pele oleosa com espinhas frequentes',
      'Marcas e cicatrizes deixadas pela acne',
    ],
    withRose:
      '“Sempre tive acnes e com os procedimentos que ela realizou no meu rosto e as formulações manipuladas exclusivamente para mim, hoje minha pele está muito linda e não tenho mais acne.” Gabriela W., nas avaliações do Google.',
    traits: ['Fórmulas manipuladas', 'Trata a causa', 'Acompanhamento'],
    faq: [
      {
        q: 'Como funciona o tratamento de acne?',
        a: 'Começa por uma avaliação da pele e da rotina. Depois a Rose monta um protocolo com procedimentos no consultório e formulações manipuladas para uso em casa, ajustando conforme a pele responde.',
      },
      {
        q: 'O tratamento serve para marcas de acne?',
        a: 'Serve. Depois que a acne está controlada, procedimentos como o microagulhamento ajudam a tratar marcas e cicatrizes.',
      },
      {
        q: 'O tratamento é igual para todo mundo?',
        a: 'Não. Cada protocolo, procedimento e formulação é pensado para a pele de quem está sendo tratada, com o objetivo de tratar a causa da acne.',
      },
    ],
    wa: 'Olá, Rose! Vim pelo site e quero tratar minha acne.',
    hue: 10,
  },
];

export const bySlug = (slug: string) => treatments.find((t) => t.slug === slug);
