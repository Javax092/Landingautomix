import Image from "next/image";
import { vehicles } from "@/lib/vehicles";
import { buildVehicleInterestMessage, buildWhatsappUrl } from "@/lib/whatsapp";
import { AnimatedSection } from "./AnimatedSection";
import { BackToHomeButton } from "./BackToHomeButton";

const scores = [94, 91, 88];

export function MatchScoreSection() {
  return (
    <AnimatedSection
      id="compatibilidade"
      className="bg-[#050505] px-5 py-12 md:px-8 md:py-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-red-400">
            Match score
          </p>
          <h2 className="mt-4 text-2xl font-semibold text-white md:text-4xl">
            Recomendações alinhadas ao seu perfil
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-zinc-400 md:text-base">
            Nossa curadoria identificou modelos que se alinham ao perfil
            informado durante sua consulta.
          </p>
        </div>

        <div className="grid gap-3">
          {vehicles.slice(0, 3).map((vehicle, index) => {
            const fullName = `${vehicle.brand} ${vehicle.model}`;
            const whatsappUrl = buildWhatsappUrl(
              buildVehicleInterestMessage(vehicle.brand, vehicle.model),
            );

            return (
              <article
                key={vehicle.id}
                className="group grid gap-4 border border-white/10 bg-white/[0.035] p-3 backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-red-500/35 hover:bg-white/[0.05] sm:p-4 md:grid-cols-[112px_minmax(0,1fr)_auto] md:items-center"
              >
                <div className="relative aspect-[16/10] overflow-hidden border border-white/10 bg-zinc-950 md:aspect-square">
                  <Image
                    src={vehicle.image}
                    alt={fullName}
                    fill
                    sizes="(max-width: 768px) 100vw, 112px"
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    style={{
                      objectPosition: vehicle.imagePosition ?? "50% 50%",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
                </div>
                <div>
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className="text-lg font-semibold text-white">
                        {fullName}
                      </p>
                      <p className="mt-1 text-sm text-zinc-500">
                        {vehicle.profile}
                      </p>
                    </div>
                    <p className="rounded-full border border-red-500/25 bg-red-950/20 px-3 py-1 text-xs font-semibold text-red-200">
                      {scores[index]}% match
                    </p>
                  </div>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-400">
                    {vehicle.recommendation}
                  </p>
                </div>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center justify-center rounded-md border border-white/15 px-4 text-sm font-semibold text-white transition hover:border-red-500/40 hover:bg-white/[0.05]"
                >
                  Solicitar analise
                </a>
              </article>
            );
          })}
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a
            href="#estoque"
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-white/15 px-5 text-sm font-semibold text-white transition hover:border-red-500/40 hover:bg-white/[0.06]"
          >
            Ver outros veículos
          </a>
          <a
            href="#configurador"
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-white/15 px-5 text-sm font-semibold text-white transition hover:border-red-500/40 hover:bg-white/[0.06]"
          >
            Refazer Match
          </a>
          <a
            href="#lista-vip"
            className="premium-button inline-flex min-h-11 items-center justify-center rounded-md px-5 text-sm font-semibold text-white"
          >
            <span>Receber Curadoria VIP</span>
          </a>
          <BackToHomeButton />
        </div>
      </div>
    </AnimatedSection>
  );
}
