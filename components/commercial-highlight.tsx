export function CommercialHighlight() {
  return (
    <section className="px-5 py-8 md:px-8 md:py-12">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-lg border border-glow/18 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(17,17,17,0.92)_42%,rgba(153,27,27,0.34))] p-6 shadow-premium md:p-9">
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="reveal-on-scroll text-xs font-semibold uppercase tracking-[0.28em] text-glow">
              Condições especiais
            </p>
            <h2 className="reveal-on-scroll stagger-1 mt-3 font-[var(--font-playfair)] text-3xl font-semibold leading-tight text-platinum md:text-5xl">
              Condições para modelos selecionados.
            </h2>
            <p className="reveal-on-scroll stagger-2 mt-4 max-w-3xl text-base leading-7 text-smoke">
              Consulte disponibilidade, entrada, financiamento e valorização do seu usado diretamente com Breno.
            </p>
          </div>
          <a
            href="#proposta"
            className="premium-button reveal-on-scroll stagger-3 inline-flex min-h-12 items-center justify-center rounded-md px-7 text-sm font-semibold text-white shadow-green transition hover:text-white"
          >
            <span>Solicitar proposta</span>
          </a>
        </div>
      </div>
    </section>
  );
}
