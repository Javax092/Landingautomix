import { vehicles } from "@/lib/vehicles";
import { AnimatedSection } from "./AnimatedSection";
import { VehicleCard } from "./VehicleCard";
import { PremiumImage } from "./PremiumImage";

export function VehicleCatalog() {
  return (
    <AnimatedSection
      id="estoque"
      className="section-band relative isolate overflow-hidden px-5 py-16 md:px-8 md:py-24"
    >
      <PremiumImage src="/images/landinterior.webp" alt="Garagem premium e interior sofisticado" fill sizes="100vw" className="premium-section-image -z-20 object-cover" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(115deg,rgba(5,5,7,.97),rgba(5,5,7,.9),rgba(23,9,11,.82))]" />
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
