import { SectionHeading } from "./section-heading";

export function AuthoritySection() {
  return (
    <section id="breno" className="section-band px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
        <SectionHeading
          eyebrow="Automix "
          title="Negociação direta. Sem intermediários."
          description="Atendimento próximo para compra, financiamento ou troca do seu usado, com clareza desde a primeira conversa."
        />
        <div className="premium-panel reveal-on-scroll stagger-2 rounded-lg p-6 md:p-9">
          <p className="text-lg leading-8 text-platinum">
            Meu objetivo não é apenas vender um carro. É ajudar você a encontrar
            o veículo certo, nas melhores condições possíveis, seja para compra
            à vista, financiamento ou troca do seu usado. Cada negociação é
            conduzida com atenção aos detalhes, transparência e respeito ao seu
            tempo.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              "Atendimento personalizado",
              "Transparência em todas as etapas",
              "Curadoria de veículos selecionados",
              "Suporte completo até a entrega",
            ].map((item, index) => (
              <div
                key={item}
                className={`reveal-on-scroll rounded-md border border-white/10 bg-white/[0.03] p-4 stagger-${index + 1}`}
              >
                <span className="mb-3 inline-flex h-7 w-7 items-center justify-center rounded-full border border-glow/25 bg-glow/10 text-xs font-semibold text-glow">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                <p className="text-sm font-semibold text-platinum">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
