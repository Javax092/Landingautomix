import type { Car } from "@/types/car";

export const porsche718: Car = {
  id: "porsche-718", slug: "porsche-718", brand: "Porsche", model: "718",
  coverImage: "/images/718porsche.webp", gallery: ["/images/vehicles/porsche-718.webp", "/images/718.webp"],
  highlights: ["Esportivo puro", "Baixo e preciso", "Experiencia emocional"], specs: { Categoria: "Esportivo Premium" },
  recommendedFor: ["Performance & Status", "Prazer ao dirigir", "Presenca"], status: "available",
  category: "Esportivo Premium", idealProfile: "Prazer ao dirigir", imagePosition: "50% 56%", profile: "Prazer ao dirigir",
  collection: "Seleção especial", recommendation: "Esportivo puro, baixo e preciso.", about: "O Porsche 718 foi desenvolvido para quem valoriza a experiencia de conducao acima de qualquer tendencia.",
  isNewArrival: true, matchProfiles: ["Performance & Status", "Prazer ao dirigir", "Presenca"],
};
