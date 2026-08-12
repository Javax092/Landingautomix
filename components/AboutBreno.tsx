import { AnimatedSection } from "./AnimatedSection";
import { ProfileCard } from "./ProfileCard";
import { AnimatedContent, SplitText } from "./motion-primitives";

export function AboutBreno() {
  return (
    <AnimatedSection
      id="breno"
      className="section-band consultant-background bg-[#0d0d10] px-5 py-16 md:px-8 md:py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.94fr_1.06fr] lg:items-center">
        <AnimatedContent className="order-2 lg:order-1" scale>
          <ProfileCard />
        </AnimatedContent>

        <AnimatedContent className="order-1 max-w-3xl lg:order-2" delay={120}>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-red-400">
            Breno
          </p>
          <h2 className="mt-4 text-2xl font-semibold text-white md:text-4xl">
            Breno | Consultor Automotivo
          </h2>
          <p className="mt-2 text-sm font-medium text-red-200">
            Consultor Automotivo · Manaus
          </p>
          <SplitText
            as="h3"
            text="Uma boa compra começa antes da negociação."
            className="mt-5 max-w-2xl text-2xl font-semibold leading-tight text-white md:text-4xl"
          />
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-400 md:text-base">
            Breno conduz a escolha com leitura de perfil, avaliação do usado e
            conversa direta sobre o que realmente faz sentido.
          </p>
        </AnimatedContent>
      </div>
    </AnimatedSection>
  );
}
