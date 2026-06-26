const trustItems = [
  "Atendimento direto com consultor",
  "Curadoria conforme perfil",
  "Avaliacao do usado",
  "Negociacao clara",
  "Opcoes selecionadas",
  "Experiencia sem pressao",
];

export function TrustSection() {
  return (
    <section id="autoridade" className="section-band bg-[#111114] px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-red-400">
            Autoridade e confianca
          </p>
          <h2 className="mt-4 text-2xl font-semibold text-white md:text-4xl">
            Compra premium exige conducao premium.
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-zinc-400 md:text-base">
            A experiencia foi desenhada para reduzir incerteza: perfil,
            momento de compra, troca e disponibilidade tratados direto com
            quem conduz a negociacao.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {trustItems.map((item) => (
            <div key={item} className="border border-white/10 bg-white/[0.035] p-5">
              <span className="block h-px w-12 bg-red-500" />
              <p className="mt-5 text-lg font-semibold text-white">{item}</p>
            </div>
          ))}
          <div className="border border-dashed border-white/16 bg-black/20 p-5 sm:col-span-2">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Atendimento consultivo
            </p>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              Sem pressao de classificados. A conversa prioriza procedencia,
              condicao, troca e alternativas caso o modelo desejado ja tenha
              mudado de disponibilidade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
