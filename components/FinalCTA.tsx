import { buildWhatsappUrl } from "@/lib/whatsapp";
import { AnimatedSection } from "./AnimatedSection";
import { BackToHomeButton } from "./BackToHomeButton";
import { PremiumImage } from "./PremiumImage";

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
      <div className="relative mx-auto max-w-5xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-red-400">
          Decisão assistida
        </p>
        <h2 className="mt-5 text-2xl font-semibold text-white md:text-4xl">
          Seu proximo veiculo merece uma decisão orientada por experiência.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-zinc-400 md:text-base">
          Receba uma consultoria personalizada e tenha acesso a uma curadoria
          construida de acordo com seu perfil, prioridades e momento de compra.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href="#configurador"
            className="premium-button inline-flex min-h-12 items-center justify-center rounded-md px-6 text-sm font-semibold text-white"
          >
            <span>Iniciar Curadoria</span>
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/18 px-6 text-sm font-semibold text-white transition hover:border-red-500/40 hover:bg-white/[0.06]"
          >
            Falar com Breno
          </a>
          <a
            href="#estoque"
            className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/18 px-6 text-sm font-semibold text-white transition hover:border-red-500/40 hover:bg-white/[0.06]"
          >
            Ver outros veículos
          </a>
          <BackToHomeButton className="min-h-12 px-6" />
        </div>
      </div>
    </AnimatedSection>
  );
}
