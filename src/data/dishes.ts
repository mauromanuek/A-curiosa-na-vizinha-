/**
 * Lista de Pratos - A Curiosa na Cozinha
 * 
 * Para adicionar, remover ou editar pratos:
 * 1. Altere os campos abaixo (nome, descrição, preço, etc.)
 * 2. Coloque as imagens na pasta: /public/assets/images/
 * 3. O formato de imagem pode ser JPG, PNG ou WEBP.
 */

export interface Dish {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  price: string;
  priceNumeric: number;
  image: string;
  category: "Todos" | "Típicos Angolanos" | "Grelhados & Carnes" | "Mariscos & Peixes";
  serves: string;
  prepNotice: string;
  ingredients: string[];
  isPopular?: boolean;
}

export const DISHES: Dish[] = [
  {
    id: "mufete-de-peixe",
    name: "Mufete de peixe",
    shortDescription: "O clássico angolano com peixe fresco grelhado na brasa, feijão de óleo de palma, farinha e batata doce.",
    description: "Um dos pratos mais emblemáticos de Luanda e de Angola. Peixe fresco da nossa costa grelhado no ponto perfeito, guarnecido com feijão de óleo de palma aromatizado, batata-doce macia, banana-pão cozida, farinha de mandioca torrada e o autêntico molho de cebola com vinagre e azeite.",
    price: "16.000 Kz",
    priceNumeric: 16000,
    image: "/assets/images/prato-1.jpg", // Substitua por sua foto em public/assets/images/prato-1.jpg
    category: "Típicos Angolanos",
    serves: "Serve 2 pessoas",
    prepNotice: "Encomendas com 24h de antecedência",
    ingredients: [
      "Peixe carapau ou corvina fresca",
      "Feijão cozido em óleo de palma puro",
      "Batata-doce e banana-pão",
      "Farinha de mandioca torrada",
      "Molho de cebola, azeite e vinagre"
    ],
    isPopular: true
  },
  {
    id: "calulu-de-peixe",
    name: "Calulu de peixe",
    shortDescription: "Um prato tradicional angolano preparado com sabor, folhas de rama/gimboa e cuidado artesanal.",
    description: "Sabor ancestral com textura aveludada. Combinação harmoniosa de peixe fresco e seco, folhas tenras de quiabos e folhas verdes refogadas em óleo de palma de dendém de primeira prensa. Acompanhado por funge quentinho e feijão com óleo de palma.",
    price: "15.000 Kz",
    priceNumeric: 15000,
    image: "/assets/images/prato-2.jpg", // Substitua por sua foto em public/assets/images/prato-2.jpg
    category: "Típicos Angolanos",
    serves: "Serve 2 a 3 pessoas",
    prepNotice: "Encomendas com 24h de antecedência",
    ingredients: [
      "Peixe fresco e peixe seco desfiado",
      "Quiabos frescos tenros",
      "Folhas verdes (rama/gimboa)",
      "Óleo de palma selecionado",
      "Alho, cebola, tomate e pimento"
    ],
    isPopular: true
  },
  {
    id: "frango-moda-da-casa",
    name: "Frango à moda da casa",
    shortDescription: "Frango tenro marinado com tempero secreto da Indira, dourado no ponto certo e muito suculento.",
    description: "Frango caipira ou de corte especial marinado durante 24 horas em especiarias naturais, alho fresco, limão, ervas aromáticas e toque cítrico suave. Assado lentamente até a pele ficar dourada e estaladiça, com carne extraordinariamente macia e suculenta.",
    price: "13.500 Kz",
    priceNumeric: 13500,
    image: "/assets/images/prato-3.jpg", // Substitua por sua foto em public/assets/images/prato-3.jpg
    category: "Grelhados & Carnes",
    serves: "Serve 3 a 4 pessoas",
    prepNotice: "Disponível sob encomenda",
    ingredients: [
      "Frango inteiro selecionado",
      "Marinada especial da casa",
      "Alho, louro e ervas frescas",
      "Batatas rústicas douradas",
      "Molho especial para regar"
    ],
    isPopular: true
  },
  {
    id: "arroz-de-marisco",
    name: "Arroz de marisco",
    shortDescription: "Arroz caldoso e perfumado com camarão fresco, marisco variado, coentros e temperos do mar.",
    description: "Um festival de sabores marinhos. Arroz carolino caldoso, preparado num caldo apurado de cabeças de camarão e peixe nobre, com camarões graúdos, lulas macias, mexilhões e ameijoas, finalizado generosamente com coentros frescos picados.",
    price: "18.500 Kz",
    priceNumeric: 18500,
    image: "/assets/images/prato-4.jpg", // Substitua por sua foto em public/assets/images/prato-4.jpg
    category: "Mariscos & Peixes",
    serves: "Serve 2 a 3 pessoas",
    prepNotice: "Encomendas com 24h a 48h de antecedência",
    ingredients: [
      "Camarão fresco de grande calibre",
      "Lulas e mariscos da costa",
      "Arroz selecionado caldoso",
      "Fundo rico de peixe e marisco",
      "Coentros frescos e azeite extra virgem"
    ],
    isPopular: true
  },
  {
    id: "moamba-de-galinha",
    name: "Moamba de galinha",
    shortDescription: "O clássico creme de dendém aromático com pedaços de galinha tenra e quiabos frescos.",
    description: "A autêntica moamba com molho encorpado e aromático de dendém artesanal, alho socado e quiabos cozinhados na perfeição. Uma refeição reconfortante que representa o coração da cozinha angolana tradicional.",
    price: "14.000 Kz",
    priceNumeric: 14000,
    image: "/assets/images/prato-5.jpg", // Substitua por sua foto em public/assets/images/prato-5.jpg
    category: "Típicos Angolanos",
    serves: "Serve 3 pessoas",
    prepNotice: "Encomendas com 24h de antecedência",
    ingredients: [
      "Galinha caipira em pedaços",
      "Óleo de palma dendém puro",
      "Quiabos frescos",
      "Alho fresco e cebola",
      "Acompanha funge de milho ou mandioca"
    ]
  },
  {
    id: "feijoada-rica-angolana",
    name: "Feijoada rica angolana",
    shortDescription: "Feijoada apurada e substancial com carnes selecionadas, repolho e acompanhamentos clássicos.",
    description: "Feijão encorpado cozinhado lentamente com variedade de enchidos tradicionais, carnes tenras, repolho, cenoura e temperos apurados. Perfeita para almoços de domingo e encontros de família.",
    price: "15.500 Kz",
    priceNumeric: 15500,
    image: "/assets/images/prato-6.jpg", // Substitua por sua foto em public/assets/images/prato-6.jpg
    category: "Grelhados & Carnes",
    serves: "Serve 3 a 4 pessoas",
    prepNotice: "Encomendas com 24h de antecedência",
    ingredients: [
      "Feijão manteiga ou cateto selecionado",
      "Carnes nobres marinadas",
      "Chouriço e enchidos tradicionais",
      "Repolho fresco e cenoura",
      "Acompanha arroz branco e farofa"
    ]
  }
];

export const CATEGORIES = [
  "Todos",
  "Típicos Angolanos",
  "Grelhados & Carnes",
  "Mariscos & Peixes"
] as const;
