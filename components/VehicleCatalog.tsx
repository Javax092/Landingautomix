import { vehicles } from "@/lib/vehicles";
import { AnimatedSection } from "./AnimatedSection";
import { VehicleCard } from "./VehicleCard";

export function VehicleCatalog() {
  return (
    <AnimatedSection
      id="estoque"
      className="section-band px-5 py-12 md:px-8 md:py-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-red-400">
              Estoque selecionado
            </p>
            <h2 className="mt-4 text-2xl font-semibold text-white md:text-4xl">
              Seleção especial
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-zinc-400">
            Cinco perfis diferentes para abrir uma conversa mais precisa sobre
            estilo, presenca e momento de compra.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {vehicles.map((vehicle, index) => (
            <VehicleCard
              key={vehicle.id}
              vehicle={vehicle}
              featured={index === 0}
            />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
