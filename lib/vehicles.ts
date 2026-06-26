export type VehicleProfile =
  | "Executivo Discreto"
  | "Performance & Status"
  | "Familia Premium"
  | "Aventura Sofisticada"
  | "Prazer ao dirigir"
  | "Forca com personalidade";

export type Vehicle = {
  id: string;
  slug: string;
  brand: string;
  model: string;
  year?: string;
  color?: string;
  mileage?: string;
  engine?: string;
  category: string;
  idealProfile: string;
  image: string;
  gallery?: string[];
  profile: VehicleProfile;
  collection: string;
  highlights: string[];
  recommendation: string;
  about: string;
  isNewArrival: boolean;
  matchProfiles: string[];
};

export const vehicles: Vehicle[] = [
  {
    id: "bmw-x6-competition",
    slug: "bmw-x6-competition",
    brand: "BMW",
    model: "X6 Competition",
    category: "SUV Coupe Performance",
    idealProfile: "Performance & Status",
    image: "/images/bmwx6comp.webp",
    gallery: [
      "/images/vehicles/bmw-x6-competition.webp",
      "/images/x6comp.webp",
      "/images/x6interior.webp",
      "/images/x6interior2.webp",
    ],
    profile: "Performance & Status",
    collection: "Selecao especial",
    highlights: ["SUV coupe", "Presenca extrema", "Performance assinada M"],
    recommendation: "SUV coupe de presenca extrema.",
    about:
      "A X6 Competition entrega uma combinacao rara entre esportividade extrema, luxo e presenca visual.",
    isNewArrival: true,
    matchProfiles: ["Performance & Status", "Executivo Discreto", "Presenca"],
  },
  {
    id: "porsche-718",
    slug: "porsche-718",
    brand: "Porsche",
    model: "718",
    category: "Esportivo Premium",
    idealProfile: "Prazer ao dirigir",
    image: "/images/718porsche.webp",
    gallery: ["/images/vehicles/porsche-718.webp", "/images/718.webp"],
    profile: "Prazer ao dirigir",
    collection: "Seleção especial",
    highlights: ["Esportivo puro", "Baixo e preciso", "Experiencia emocional"],
    recommendation: "Esportivo puro, baixo e preciso.",
    about:
      "O Porsche 718 foi desenvolvido para quem valoriza a experiencia de conducao acima de qualquer tendencia.",
    isNewArrival: true,
    matchProfiles: ["Performance & Status", "Prazer ao dirigir", "Presenca"],
  },
  {
    id: "ram-1500",
    slug: "ram-1500",
    brand: "RAM",
    model: "1500",
    year: "2025/2025",
    color: "Preta",
    mileage: "19.694 km",
    engine: "3.0",
    category: "Picape Premium",
    idealProfile: "Aventura Sofisticada",
    image: "/images/ram150.webp",
    gallery: [
      "/images/vehicles/ram-1500.webp",
      "/images/1500preta.webp",
      "/images/ram1502.webp",
    ],
    profile: "Aventura Sofisticada",
    collection: "Seleção especial",
    highlights: [
      "Força premium",
      "Cabine imponente",
      "Estrada em outro padrao",
    ],
    recommendation: "Força premium com cabine imponente.",
    about:
      "A RAM 1500 combina forca, conforto e tecnologia em um nivel dificil de encontrar em outras picapes da categoria.\n\nE uma escolha indicada para quem busca presenca marcante, cabine sofisticada e experiencia premium tanto na cidade quanto em viagens.",
    isNewArrival: true,
    matchProfiles: ["Aventura Sofisticada", "Familia Premium", "Presenca"],
  },
  {
    id: "dakota",
    slug: "dakota",
    brand: "Dakota",
    model: "Pickup",
    category: "Picape de Uso Misto",
    idealProfile: "Forca com personalidade",
    image: "/images/dakota.webp",
    gallery: [
      "/images/vehicles/dakota.webp",
      "/images/dakota2.webp",
      "/images/dakota3.webp",
    ],
    profile: "Forca com personalidade",
    collection: "Selecao especial",
    highlights: ["Robusta", "Autentica", "Fora do obvio"],
    recommendation: "Robusta, autentica e fora do obvio.",
    about:
      "A Dakota e uma alternativa robusta para quem procura versatilidade, personalidade e capacidade de uso sem abrir mao do conforto.",
    isNewArrival: false,
    matchProfiles: [
      "Aventura Sofisticada",
      "Forca com personalidade",
      "Presenca",
    ],
  },
  {
    id: "mercedes-gla-200",
    slug: "mercedes-gla-200",
    brand: "Mercedes-Benz",
    model: "GLA 200",
    category: "SUV Compacto Premium",
    idealProfile: "Executivo Discreto",
    image: "/images/gla200.webp",
    gallery: [
      "/images/vehicles/mercedes-gla-200.webp",
      "/images/gla200a.webp",
      "/images/gla200inter.webp",
    ],
    profile: "Executivo Discreto",
    collection: "Selecao especial",
    highlights: [
      "Compacta premium",
      "Elegancia discreta",
      "Rotina sofisticada",
    ],
    recommendation: "Compacta premium de elegancia discreta.",
    about:
      "A GLA 200 reune elegancia, tecnologia e praticidade em um formato ideal para quem deseja ingressar no universo premium com equilibrio.",
    isNewArrival: false,
    matchProfiles: [
      "Executivo Discreto",
      "Familia Premium",
      "Conforto interno",
    ],
  },
];

export function getVehicleBySlug(slug: string) {
  return vehicles.find((vehicle) => vehicle.slug === slug);
}
