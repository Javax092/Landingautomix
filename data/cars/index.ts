import type { Car } from "@/types/car";
import { bmwX6Competition } from "./bmw-x6-competition";
import { porsche718 } from "./porsche-718";
import { ram1500 } from "./ram-1500";
import { dakota } from "./dakota";
import { mercedesGla200 } from "./mercedes-gla-200";

const registry: Car[] = [bmwX6Competition, porsche718, ram1500, dakota, mercedesGla200];

function validateCars(items: Car[]) {
  const ids = new Set<string>();
  const slugs = new Set<string>();
  for (const car of items) {
    if (!car.id || !car.slug || !car.brand || !car.model || !car.coverImage || !car.gallery.length) {
      throw new Error(`Cadastro de veículo incompleto: ${car.id || car.slug || "sem identificador"}`);
    }
    if (ids.has(car.id) || slugs.has(car.slug)) throw new Error(`ID ou slug duplicado: ${car.slug}`);
    if (!car.coverImage.startsWith("/images/") || car.gallery.some((image) => !image.startsWith("/images/"))) {
      throw new Error(`Imagem fora do diretório público permitido: ${car.slug}`);
    }
    ids.add(car.id);
    slugs.add(car.slug);
  }
  return items;
}

export const cars: Car[] = validateCars(registry);
export { bmwX6Competition, porsche718, ram1500, dakota, mercedesGla200 };
