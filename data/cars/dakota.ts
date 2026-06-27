import type { Car } from "@/types/car";

export const dakota: Car = {
  id: "dakota", slug: "dakota", brand: "Dakota", model: "Pickup", coverImage: "/images/dakota.webp",
  gallery: ["/images/vehicles/dakota.webp", "/images/dakota2.webp", "/images/dakota3.webp"], highlights: ["Robusta", "Autentica", "Fora do obvio"],
  specs: { Categoria: "Picape de Uso Misto" }, recommendedFor: ["Aventura Sofisticada", "Forca com personalidade", "Presenca"], status: "available",
  category: "Picape de Uso Misto", idealProfile: "Forca com personalidade", imagePosition: "50% 54%", profile: "Forca com personalidade",
  collection: "Selecao especial", recommendation: "Robusta, autentica e fora do obvio.", about: "A Dakota e uma alternativa robusta para quem procura versatilidade, personalidade e capacidade de uso sem abrir mao do conforto.",
  isNewArrival: false, matchProfiles: ["Aventura Sofisticada", "Forca com personalidade", "Presenca"],
};
