import { vehicles } from "@/lib/vehicles";
import { AnimatedSection } from "./AnimatedSection";
import { VehicleCard } from "./VehicleCard";
import { PremiumImage } from "./PremiumImage";
import { AnimatedContent, SplitText } from "./motion-primitives";

export function VehicleCatalog() {
  const featuredVehicles = vehicles.slice(0, 3);

  return (
    <AnimatedSection
      id="estoque"
      className="section-band relative isolate overflow-hidden px-5 py-16 md:px-8 lg:py-24"
    >
      <PremiumImage src="/images/landinterior.webp" alt="Garagem premium e interior sofisticado" fill sizes="100vw" className="premium-section-image -z-20 object-cover" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(115deg,rgba(5,5,7,.98),rgba(5,5,7,.92),rgba(18,18,20,.82))]" />
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-red-400">
              Seleção Breno
            </p>
            <SplitText
              as="h2"
              text="Veículos selecionados."
              className="mt-4 font-serif text-3xl font-semibold text-white md:text-5xl"
            />
          </div>
          <a
            href="/veiculos"
            className="cta-motion inline-flex min-h-11 items-center justify-center gap-2 rounded-sm border border-white/15 px-5 text-sm font-semibold text-white transition hover:border-red-500/40 hover:bg-white/[0.06]"
          >
            <span>Ver todo o estoque</span>
            <span className="cta-arrow" aria-hidden="true">→</span>
          </a>
        </div>

        <AnimatedContent className="grid gap-5 lg:grid-cols-[1.35fr_0.65fr]" delay={120} scale>
          {featuredVehicles[0] ? (
            <VehicleCard vehicle={featuredVehicles[0]} featured />
          ) : null}
          <div className="grid gap-5">
            {featuredVehicles.slice(1).map((vehicle) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>
        </AnimatedContent>
      </div>
    </AnimatedSection>
  );
}
