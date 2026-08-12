import { AnimatedSection } from "./AnimatedSection";
import { PremiumImage } from "./PremiumImage";
import { AnimatedContent } from "./motion-primitives";

const steps = [
  {
    title: "Perfil",
    text: "Entendemos o que você procura.",
  },
  {
    title: "Seleção",
    text: "Filtramos as opções mais alinhadas.",
  },
  {
    title: "Avaliação",
    text: "Analisamos veículo e oportunidade.",
  },
  {
    title: "Negociação",
    text: "Breno acompanha a decisão.",
  },
] as const;

export function MatchScoreSection() {
  return (
    <AnimatedSection
      id="como-funciona"
      className="relative isolate overflow-hidden bg-[#050505] px-5 py-16 md:px-8 lg:py-24"
    >
      <PremiumImage
        src="/images/newdescovery.webp"
        alt="Veículo premium em rota selecionada"
        fill
        sizes="100vw"
        className="premium-section-image -z-20 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(105deg,rgba(5,5,7,.98),rgba(5,5,7,.9)_58%,rgba(12,12,14,.74))]" />
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <AnimatedContent className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-red-400">
            Curadoria
          </p>
          <h2 className="mt-4 font-serif text-3xl font-semibold text-white md:text-5xl">
            Como funciona.
          </h2>
        </AnimatedContent>

        <AnimatedContent className="grid gap-px border-y border-white/10 bg-white/10" delay={120}>
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="grid gap-4 bg-[#050505]/82 p-5 sm:grid-cols-[4rem_1fr] md:p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-300">
                0{index + 1}
              </p>
              <div>
                <h3 className="text-lg font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  {step.text}
                </p>
              </div>
            </article>
          ))}
        </AnimatedContent>
      </div>
    </AnimatedSection>
  );
}
