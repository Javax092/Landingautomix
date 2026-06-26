import { buildWhatsappUrl } from "@/lib/whatsapp";

export function FinalCta() {
  const whatsappUrl = buildWhatsappUrl(
    "Olá Breno, vim pelo site da Automix Manaus e gostaria de consultar modelos disponíveis, condições especiais e avaliação do meu seminovo."
  );

  return (
    <section className="px-5 pb-16 pt-8 md:px-8 md:pb-20 md:pt-12">
      <div className="reveal-on-scroll mx-auto max-w-7xl overflow-hidden rounded-lg border border-white/10 bg-platinum p-7 text-center text-ink md:p-12">
        <p className="reveal-on-scroll text-xs font-semibold uppercase tracking-[0.28em] text-glow">
          Próximo passo
        </p>
        <h2 className="reveal-on-scroll stagger-1 mx-auto mt-5 max-w-3xl font-[var(--font-playfair)] text-3xl font-semibold leading-tight text-ink md:text-5xl">
          Pronto para encontrar seu próximo veículo?
        </h2>
        <p className="reveal-on-scroll stagger-2 mx-auto mt-5 max-w-2xl text-base leading-7 text-carbon">
          Fale com Breno e consulte modelos disponíveis, condições especiais e avaliação do seu seminovo.
        </p>
        <div className="reveal-on-scroll stagger-3 mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="premium-button inline-flex min-h-12 items-center justify-center rounded-md px-7 text-sm font-semibold text-white shadow-green transition hover:text-white"
          >
            <span>Falar no WhatsApp</span>
          </a>
          <a
            href="#veiculos"
            className="inline-flex min-h-12 items-center justify-center rounded-md border border-ink/20 px-7 text-sm font-semibold text-ink transition hover:border-emerald hover:text-emerald"
          >
            Ver veículos
          </a>
        </div>
      </div>
    </section>
  );
}
