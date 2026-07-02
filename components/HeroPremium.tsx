import { BackgroundSection } from "./BackgroundSection";

const trustSignals = [
  "Curadoria independente",
  "Avaliação estratégica",
  "Atendimento direto",
] as const;

export function HeroPremium() {
  return (
    <>
      <BackgroundSection
        image="/images/breno-hero.webp"
        alt="Breno ao lado de um BMW em ambiente de showroom"
        priority
        imageClassName="hero-premium-image"
        overlayClassName="hero-premium-overlay"
        className="hero-premium bg-[#080a0e] xl:min-h-[calc(100svh-6rem)] xl:pt-16"
      >
        <div id="topo" className="absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto flex max-w-7xl px-5 pb-10 pt-[calc(3.5rem+56.3vw+2rem)] md:px-8 md:pt-[calc(4rem+56.3vw+2.5rem)] xl:min-h-[calc(100svh-10rem)] xl:items-start xl:pb-14 xl:pt-[clamp(2rem,4vh,3.5rem)]">
          <div className="hero-copy w-full max-w-[30rem]">
            <p className="flex items-center gap-3 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-red-200">
              <span className="h-px w-8 bg-red-300/80" aria-hidden="true" />
              Breno Automix · Manaus
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#configurador"
                className="premium-button inline-flex min-h-12 items-center justify-center rounded-sm px-7 text-sm font-semibold text-white shadow-[0_14px_42px_rgba(127,29,29,0.26)]"
              >
                <span>Solicitar curadoria</span>
              </a>
              <a
                href="#estoque"
                className="inline-flex min-h-12 items-center justify-center rounded-sm border border-white/30 bg-slate-950/15 px-7 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white/50 hover:bg-white/[0.09]"
              >
                Ver veículos
              </a>
            </div>
          </div>
        </div>
      </BackgroundSection>

      <div
        className="border-y border-white/10 bg-[#080a0e]"
        aria-label="Diferenciais da curadoria"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 px-5 sm:grid-cols-3 md:px-8">
          {trustSignals.map((signal) => (
            <div
              key={signal}
              className="flex min-h-12 items-center gap-3 border-b border-white/10 py-3 last:border-b-0 sm:min-h-20 sm:border-b-0 sm:border-r sm:px-5 sm:last:border-r-0"
            >
              <span className="block h-1 w-1 shrink-0 rounded-full bg-red-300" />
              <p className="text-[0.64rem] font-medium uppercase leading-4 tracking-[0.14em] text-zinc-300 sm:text-[0.68rem]">
                {signal}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
