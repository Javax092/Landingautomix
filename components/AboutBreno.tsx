import { AnimatedSection } from "./AnimatedSection";
import { ProfileCard } from "./ProfileCard";

const authorityPoints = [
  "Curadoria Personalizada",
  "Consultoria Especializada",
  "Avaliacao Estrategica do Usado",
  "Negociacao sem Pressao",
];

export function AboutBreno() {
  return (
    <AnimatedSection
      id="breno"
      className="section-band consultant-background bg-[#0d0d10] px-5 py-16 md:px-8 md:py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.94fr_1.06fr] lg:items-center">
        <div className="order-2 lg:order-1"><ProfileCard /></div>

        <div className="order-1 max-w-3xl lg:order-2">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-red-400">
            Autoridade consultiva
          </p>
          <h2 className="mt-4 text-2xl font-semibold text-white md:text-4xl">
            Breno | Consultor Automotivo
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-400 md:text-base">
            Referência em atendimento consultivo na Automix Manaus, Breno une
            curadoria de oportunidades, avaliação estratégica do usado e
            negociação transparente para orientar uma escolha segura e alinhada
            ao estilo de vida de cada cliente.
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {authorityPoints.map((point) => (
              <div
                key={point}
                className="group flex min-h-24 flex-col justify-between border-t border-white/15 bg-white/[0.025] px-4 py-4 transition duration-300 hover:-translate-y-0.5 hover:border-red-500/45 hover:bg-white/[0.045]"
              >
                <span className="block h-px w-8 bg-red-500/70 transition group-hover:w-12" />
                <p className="mt-3 text-sm font-medium text-zinc-200">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
