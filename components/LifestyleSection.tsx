const lifestyles = [
  "Executivo discreto para rotina premium",
  "Performance para quem valoriza direcao",
  "Familia premium com conforto real",
  "Aventura sofisticada fora da cidade",
  "Presenca forte sem compra por impulso",
];

export function LifestyleSection() {
  return (
    <section id="perfil" className="bg-[#0B0B0D] px-5 py-16 text-white md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-red-400">
            Escolha por estilo de vida
          </p>
          <h2 className="mt-4 text-2xl font-semibold md:text-4xl">
            A melhor escolha comeca pelo uso certo.
          </h2>
        </div>

        <div className="grid gap-3">
          {lifestyles.map((item, index) => (
            <a
              key={item}
              href="#configurador"
              className="group grid min-h-24 items-center border border-white/10 bg-white/[0.025] px-5 transition hover:border-red-500/35 hover:bg-white/[0.055] md:grid-cols-[80px_1fr_120px] md:px-8"
            >
              <span className="text-sm font-semibold text-red-400 transition">
                0{index + 1}
              </span>
              <span className="mt-2 text-xl font-semibold md:mt-0 md:text-2xl">
                {item}
              </span>
              <span className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500 transition group-hover:text-red-300 md:mt-0 md:text-right">
                Configurar
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
