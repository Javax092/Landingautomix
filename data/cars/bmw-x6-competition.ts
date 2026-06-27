import type { Car } from "@/types/car";

export const bmwX6Competition: Car = {
  id: "bmw-x6-competition", slug: "bmw-x6-competition", brand: "BMW", model: "X6 Competition",
  coverImage: "/images/bmwx6comp.webp", gallery: ["/images/vehicles/bmw-x6-competition.webp", "/images/x6comp.webp", "/images/x6interior.webp", "/images/x6interior2.webp"],
  highlights: ["SUV coupe", "Presenca extrema", "Performance assinada M"], specs: { Categoria: "SUV Coupe Performance" },
  recommendedFor: ["Performance & Status", "Executivo Discreto", "Presenca"], status: "available",
  category: "SUV Coupe Performance", idealProfile: "Performance & Status", imagePosition: "50% 58%", profile: "Performance & Status",
  collection: "Selecao especial", recommendation: "SUV coupe de presenca extrema.", about: "A X6 Competition entrega uma combinacao rara entre esportividade extrema, luxo e presenca visual.",
  isNewArrival: true, matchProfiles: ["Performance & Status", "Executivo Discreto", "Presenca"],
};
