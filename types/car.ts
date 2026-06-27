export type CarStatus = "available" | "reserved" | "sold" | "coming-soon";

export interface Car {
  id: string;
  slug: string;
  brand: string;
  model: string;
  year?: string;
  price?: string;
  mileage?: string;
  transmission?: string;
  fuel?: string;
  coverImage: string;
  gallery: string[];
  highlights: string[];
  specs: Record<string, string>;
  recommendedFor: string[];
  status: CarStatus;

  // Campos editoriais mantidos para preservar o configurador e o match atuais.
  color?: string;
  engine?: string;
  category: string;
  idealProfile: string;
  imagePosition?: string;
  profile:
    | "Executivo Discreto"
    | "Performance & Status"
    | "Familia Premium"
    | "Aventura Sofisticada"
    | "Prazer ao dirigir"
    | "Forca com personalidade";
  collection: string;
  recommendation: string;
  about: string;
  isNewArrival: boolean;
  matchProfiles: string[];
}
