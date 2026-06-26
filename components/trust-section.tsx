import { SectionHeading } from "./section-heading";

const trustCards = [
  {
    title: "Atendimento sem pressão",
    text: "Conversas objetivas para entender seu perfil antes de indicar qualquer veículo."
  },
  {
    title: "Procedência e transparência",
    text: "Informações claras sobre histórico, condição e oportunidades de negociação."
  },
  {
    title: "Experiência premium",
    text: "Atendimento pensado para quem valoriza praticidade, discrição e acompanhamento próximo."
  }
];

export function TrustSection() {
  return (
    <section id="confianca" className="section-band px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Confiança"
          title="Comprar um veículo premium exige confiança."
          description="Por isso cada atendimento é conduzido de forma transparente, respeitando seu perfil, seu tempo e suas expectativas."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {trustCards.map((card, index) => (
            <article key={card.title} className={`premium-panel reveal-on-scroll rounded-lg p-6 stagger-${index + 1}`}>
              <div className="mb-6 h-1 w-16 rounded-full bg-glow" />
              <h3 className="text-xl font-semibold text-platinum">{card.title}</h3>
              <p className="mt-4 text-sm leading-7 text-smoke">{card.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
