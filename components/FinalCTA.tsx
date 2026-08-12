import { buildWhatsappUrl } from "@/lib/whatsapp";
import { AnimatedSection } from "./AnimatedSection";
import { PremiumImage } from "./PremiumImage";
import { AnimatedContent, Magnet, ScrollRevealText } from "./motion-primitives";

export function FinalCTA() {
  const whatsappUrl = buildWhatsappUrl(
    "Ola Breno, quero receber uma curadoria automotiva premium alinhada ao meu perfil, faixa de investimento e momento de compra.",
  );

  return (
    <AnimatedSection
      id="atendimento"
      className="relative overflow-hidden px-5 py-12 md:px-8 md:py-16"
    >
      <PremiumImage src="/images/gla200inter.webp" alt="Mesa executiva e interior automotivo premium" fill sizes="100vw" className="premium-section-image object-cover" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(5,5,5,.97),rgba(17,17,20,.9)_52%,rgba(69,10,10,.78))]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-500/40 to-transparent" />
      <AnimatedContent className="relative mx-auto max-w-5xl text-center">
        <ScrollRevealText>
          <h2 className="text-2xl font-semibold text-white md:text-4xl">
            Seu proximo carro pode começar por uma conversa.
          </h2>
        </ScrollRevealText>
        <div className="mt-7 flex justify-center">
          <Magnet>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="cta-motion inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-white/18 px-6 text-sm font-semibold text-white transition hover:border-red-500/40 hover:bg-white/[0.06]"
            >
              <span>Falar com Breno</span>
              <span className="cta-arrow" aria-hidden="true">↗</span>
            </a>
          </Magnet>
        </div>
      </AnimatedContent>
    </AnimatedSection>
  );
}
