import { cars } from "@/data/cars";
import type { Car } from "@/types/car";

export type Vehicle = Car & { image: string };
export type VehicleProfile = Car["profile"];

// Adaptador compatível: consumidores existentes continuam usando `image`.
export const vehicles: Vehicle[] = cars.map((car) => ({
  ...car,
  image: car.coverImage,
}));

export function getVehicleBySlug(slug: string) {
  return vehicles.find((vehicle) => vehicle.slug === slug);
}
