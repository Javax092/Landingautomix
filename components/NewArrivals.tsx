import { vehicles } from "@/lib/vehicles";
import { VehicleCard } from "./VehicleCard";

export function NewArrivals() {
  const arrivals = vehicles.filter((vehicle) => vehicle.isNewArrival);

  return (
    <section id="chegadas" className="section-band px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-red-400">
            Chegadas recentes
          </p>
          <h2 className="mt-4 text-2xl font-semibold text-white md:text-4xl">
            Oportunidades que merecem uma conversa rapida.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-zinc-400 md:text-base">
            Modelos recem-selecionados podem mudar de status. Confirme
            disponibilidade e condicao diretamente com Breno.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {arrivals.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      </div>
    </section>
  );
}
