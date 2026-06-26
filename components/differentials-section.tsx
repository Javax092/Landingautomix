import { SectionHeading } from "./section-heading";

const differentials = [
  "Procedência verificada",
  "Negociação transparente",
  "Financiamento",
  "Avaliação do usado",
  "Atendimento presencial ou online",
  "Suporte até a entrega"
];

export function DifferentialsSection() {
  return (
    <section className="section-band px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Institucional"
          title="Atendimento premium, direto e sem excesso de etapas."
          description="Breno conduz cada atendimento com foco em clareza, segurança e praticidade, ajudando o cliente a escolher, negociar e avançar com confiança."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {differentials.map((item, index) => (
            <div key={item} className={`premium-panel reveal-on-scroll rounded-lg p-6 transition hover:border-glow/30 hover:bg-white/[0.035] stagger-${(index % 4) + 1}`}>
              <p className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-glow/25 bg-glow/10 text-xs font-semibold uppercase tracking-[0.08em] text-glow">
                {(index + 1).toString().padStart(2, "0")}
              </p>
              <h3 className="mt-5 text-xl font-semibold text-platinum">{item}</h3>
              <div className="mt-5 h-px bg-gradient-to-r from-glow/70 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
