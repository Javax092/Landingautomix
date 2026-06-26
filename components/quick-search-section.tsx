import { buildWhatsappUrl } from "@/lib/whatsapp";

const actions = [
  {
    label: "Ver veículos disponíveis",
    href: "#veiculos",
    detail: "Estoque selecionado"
  },
  {
    label: "Avaliar meu seminovo",
    href: "#avaliar-usado",
    detail: "Troca com clareza"
  },
  {
    label: "Solicitar proposta",
    href: "#proposta",
    detail: "Condição personalizada"
  }
];

export function QuickSearchSection() {
  const whatsappUrl = buildWhatsappUrl(
    "Olá Breno, vim pelo site da Automix Manaus e gostaria de atendimento direto."
  );

  return (
    <section id="seminovos" className="section-band px-5 py-12 md:px-8 md:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 border-y border-white/10 py-8 md:grid-cols-[0.85fr_1.15fr] md:items-center md:py-10">
          <div>
            <p className="reveal-on-scroll mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-glow">
              Busca rápida
            </p>
            <h2 className="reveal-on-scroll stagger-1 font-[var(--font-playfair)] text-3xl font-semibold leading-tight text-platinum md:text-5xl">
              Encontre seu próximo veículo.
            </h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {actions.map((action, index) => (
              <a
                key={action.href}
                href={action.href}
                className={`reveal-on-scroll stagger-${index + 1} group rounded-md border border-white/10 bg-white/[0.025] p-5 transition hover:border-glow/40 hover:bg-white/[0.055]`}
              >
                <span className="block text-sm font-semibold text-platinum transition group-hover:text-glow">
                  {action.label}
                </span>
                <span className="mt-2 block text-sm text-smoke">{action.detail}</span>
              </a>
            ))}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="premium-button reveal-on-scroll stagger-4 inline-flex min-h-[88px] items-center justify-center rounded-md px-5 text-center text-sm font-semibold text-white shadow-green transition hover:text-white"
            >
              <span>Falar com Breno</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
