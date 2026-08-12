import { buildWhatsappUrl } from "@/lib/whatsapp";
import { Magnet, SplitText } from "./motion-primitives";

export function HeroPremium() {
  const whatsappUrl = buildWhatsappUrl(
    "Ola Breno, vim pelo site da Automix Manaus e quero falar direto sobre uma curadoria automotiva premium.",
  );

  return (
    <section className="hero-premium relative isolate min-h-[100svh] overflow-hidden bg-[#080a0e] pt-16">
        <div id="topo" className="absolute inset-0" aria-hidden="true" />
        <HeroMedia />

        <div className="relative z-20 mx-auto flex min-h-[calc(100svh-4rem)] max-w-7xl items-end px-5 pb-20 pt-20 sm:pb-16 md:px-8 md:pb-20 lg:min-h-[calc(90svh-4rem)] lg:items-center">
          <HeroContent whatsappUrl={whatsappUrl} />
        </div>
      </section>
  );
}

function HeroMedia() {
  return (
    <>
      <div className="hero-premium-cover absolute inset-0 z-0" aria-hidden="true" />
      <div
        className="hero-premium-overlay absolute inset-0 z-10"
        aria-hidden="true"
      />
      <div
        className="hero-premium-scanline absolute inset-x-0 bottom-0 z-10 h-24"
        aria-hidden="true"
      />
    </>
  );
}

function HeroContent({ whatsappUrl }: { whatsappUrl: string }) {
  return (
    <div className="w-full max-w-3xl">
        <p className="animate-fade-up text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-red-200 sm:tracking-[0.28em]">
          Breno Automix · Manaus
        </p>

        <SplitText
          text="Seu próximo veículo merece uma escolha melhor."
          className="mt-5 max-w-3xl font-serif text-4xl font-semibold leading-[1.02] text-white sm:text-5xl md:text-7xl"
        />

        <p className="animate-fade-up animation-delay-400 mt-5 max-w-2xl text-base leading-7 text-zinc-200 md:text-lg md:leading-8">
          Curadoria automotiva, avaliação estratégica e atendimento direto em
          Manaus.
        </p>

        <HeroActions whatsappUrl={whatsappUrl} />
    </div>
  );
}

function HeroActions({ whatsappUrl }: { whatsappUrl: string }) {
  return (
    <div className="animate-fade-up animation-delay-600 mt-8 flex flex-col gap-3 sm:flex-row">
      <Magnet>
        <a
          href="#curadoria"
          className="premium-button cta-motion inline-flex min-h-12 items-center justify-center gap-2 rounded-sm px-7 text-sm font-semibold text-white shadow-[0_14px_42px_rgba(127,29,29,0.26)]"
        >
          <span>Encontrar meu próximo carro</span>
          <span className="cta-arrow" aria-hidden="true">↗</span>
        </a>
      </Magnet>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="cta-motion inline-flex min-h-12 items-center justify-center gap-2 rounded-sm border border-white/30 bg-slate-950/15 px-7 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white/50 hover:bg-white/[0.09]"
      >
        <span>Falar com Breno</span>
        <span className="cta-arrow" aria-hidden="true">›</span>
      </a>
    </div>
  );
}
