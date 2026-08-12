"use client";

import { useMemo, useState } from "react";
import { VehicleCard } from "./VehicleCard";
import type { Vehicle } from "@/lib/vehicles";
import { AnimatedContent, SplitText } from "./motion-primitives";

const filters = ["Todos", "SUV", "Esportivo", "Pickup"] as const;
type Filter = (typeof filters)[number];

function getBodyType(vehicle: Vehicle): Exclude<Filter, "Todos"> | "Outro" {
  const category = vehicle.category.toLowerCase();
  if (category.includes("suv")) return "SUV";
  if (category.includes("esportivo")) return "Esportivo";
  if (category.includes("picape") || category.includes("pickup")) return "Pickup";
  return "Outro";
}

export function VehicleInventory({ vehicles }: { vehicles: Vehicle[] }) {
  const [activeFilter, setActiveFilter] = useState<Filter>("Todos");

  const filteredVehicles = useMemo(() => {
    if (activeFilter === "Todos") return vehicles;
    return vehicles.filter((vehicle) => getBodyType(vehicle) === activeFilter);
  }, [activeFilter, vehicles]);

  return (
    <section className="px-5 py-10 md:px-8 md:py-14">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-red-400">
              Estoque
            </p>
            <SplitText
              as="h1"
              text="Veículos selecionados."
              className="mt-3 font-serif text-3xl font-semibold text-white md:text-5xl"
            />
          </div>
          <p className="max-w-md text-sm leading-6 text-zinc-400">
            Escolha um modelo para ver fotos, informações essenciais e falar
            direto com Breno.
          </p>
        </div>

        <AnimatedContent className="filter-scrollbar mb-6 flex gap-2 overflow-x-auto border-y border-white/10 py-3" delay={100}>
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`min-h-10 shrink-0 rounded-sm border px-4 text-sm font-semibold transition ${
                activeFilter === filter
                  ? "border-red-500/50 bg-red-950/20 text-white"
                  : "border-white/10 bg-white/[0.025] text-zinc-400 hover:border-white/20 hover:text-white"
              }`}
            >
              {filter}
            </button>
          ))}
        </AnimatedContent>

        <AnimatedContent className="grid gap-5 lg:grid-cols-3" delay={180} scale>
          {filteredVehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </AnimatedContent>
      </div>
    </section>
  );
}
