import { BackgroundSection } from "./BackgroundSection";

const trustSignals = [
  "Curadoria independente",
  "Avaliação estratégica",
  "Atendimento direto",
] as const;

export function HeroPremium() {
  return (
    <BackgroundSection
      image="/images/breno-hero.webp"
      alt="Breno ao lado de um BMW em ambiente de showroom"
      priority
      imageClassName="hero-premium-image"
      overlayClassName="hero-premium-overlay"
      className="min-h-[100svh] bg-[#050505] pt-14 md:pt-16"
    >
      <div id="topo" className="absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto flex min-h-[calc(100svh-3.5rem)] max-w-7xl items-end px-5 pb-28 pt-16 sm:items-center sm:pb-12 md:min-h-[calc(100svh-4rem)] md:px-8 md:py-16">
        <div className="hero-copy w-full max-w-2xl">
          <p className="flex items-center gap-3 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-red-300">
            <span className="h-px w-8 bg-red-400/80" aria-hidden="true" />
            Breno Automix · Manaus
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href="#configurador"
              className="premium-button inline-flex min-h-12 items-center justify-center rounded-sm px-7 text-sm font-semibold text-white"
            >
              <span>Solicitar curadoria</span>
            </a>
            <a
              href="#estoque"
              className="inline-flex min-h-12 items-center justify-center rounded-sm border border-white/25 bg-black/20 px-7 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white/45 hover:bg-white/[0.08]"
            >
              Ver veículos
            </a>
          </div>
          <div className="mt-7 grid grid-cols-3 gap-2 sm:max-w-2xl sm:gap-3">
            {trustSignals.map((signal) => (
              <div
                key={signal}
                className="min-h-16 border-t border-white/25 bg-black/20 px-2 py-3 backdrop-blur-sm sm:px-4"
              >
                <span className="block h-1 w-1 rounded-full bg-red-400" />
                <p className="mt-2 text-[0.6rem] font-medium uppercase leading-4 tracking-[0.1em] text-zinc-200 sm:text-[0.68rem] sm:tracking-[0.14em]">
                  {signal}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </BackgroundSection>
  );
}
