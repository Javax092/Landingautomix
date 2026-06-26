import Link from "next/link";
import { BackToHomeButton } from "./BackToHomeButton";
import { buildVehicleInterestMessage, buildWhatsappUrl } from "@/lib/whatsapp";
import type { Vehicle } from "@/lib/vehicles";

type VehicleDetailProps = {
  vehicle: Vehicle;
};

export function VehicleDetail({ vehicle }: VehicleDetailProps) {
  const whatsappUrl = buildWhatsappUrl(
    buildVehicleInterestMessage(vehicle.brand, vehicle.model),
  );
  const gallery = vehicle.gallery?.length ? vehicle.gallery : [vehicle.image];

  const specs = [
    ["Ano", vehicle.year ?? "Confirmar com consultor"],
    ["Cor", vehicle.color ?? "Confirmar com consultor"],
    ["Quilometragem", vehicle.mileage ?? "Confirmar com consultor"],
    ["Motorizacao", vehicle.engine ?? "Confirmar com consultor"],
    ["Categoria", vehicle.category],
    ["Perfil Ideal", vehicle.idealProfile],
  ];

  const commercialSpecs = [
    ["Condicao comercial", "Disponivel mediante consulta"],
    ["Disponibilidade", "Confirmar com consultor"],
    ["Troca", "Aceitamos avaliacao do seu usado"],
  ];

  return (
    <main className="bg-[#050505]">
      <section className="relative min-h-[82svh] overflow-hidden pt-24">
        <img
          src={vehicle.image}
          alt={`${vehicle.brand} ${vehicle.model}`}
          className="absolute inset-0 h-full w-full object-cover opacity-75"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,0.96)_0%,rgba(5,5,5,0.66)_48%,rgba(69,10,10,0.18)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#050505] to-transparent" />

        <div className="relative mx-auto flex min-h-[calc(82svh-6rem)] max-w-7xl items-end px-5 pb-16 md:px-8">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3">
              <BackToHomeButton className="min-h-10 px-4 text-xs uppercase tracking-[0.18em]" />
              <Link
                href="/#estoque"
                className="inline-flex min-h-10 items-center justify-center rounded-md border border-white/15 px-4 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:border-red-500/40 hover:bg-white/[0.06]"
              >
                Ver outros veículos
              </Link>
            </div>
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.28em] text-red-400">
              {vehicle.profile}
            </p>
            <h1 className="mt-4 text-3xl font-semibold leading-tight text-white md:text-5xl">
              {vehicle.brand} {vehicle.model}
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-zinc-300 md:text-base">
              {vehicle.recommendation}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="premium-button inline-flex min-h-12 items-center justify-center rounded-md px-6 text-sm font-semibold text-white"
              >
                <span>Solicitar Consultoria Personalizada</span>
              </a>
              <Link
                href="/#lista-vip"
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/15 px-6 text-sm font-semibold text-white transition hover:border-red-500/40 hover:bg-white/[0.06]"
              >
                Quer algo parecido?
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-red-400">
              Destaques
            </p>
            <h2 className="mt-4 text-2xl font-semibold text-white md:text-4xl">
              Posicionamento do modelo
            </h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {vehicle.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="border border-white/10 bg-white/[0.035] p-5"
                >
                  <span className="block h-px w-10 bg-red-500" />
                  <p className="mt-5 text-sm font-semibold text-white">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {gallery.slice(1).map((image) => (
                <div
                  key={image}
                  className="aspect-[4/3] overflow-hidden border border-white/10 bg-zinc-950"
                >
                  <img
                    src={image}
                    alt={`${vehicle.brand} ${vehicle.model}`}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>

            <div className="mt-10 border-l border-red-500/50 bg-white/[0.025] p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-red-400">
                Sobre este modelo
              </p>
              <div className="mt-4 space-y-4 text-sm leading-7 text-zinc-300 md:text-base">
                {vehicle.about.split("\n\n").map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>

          <aside className="border border-red-500/20 bg-white/[0.035] p-5 shadow-premium backdrop-blur md:p-6 lg:sticky lg:top-24 lg:self-start">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-red-400">
              Especificacoes Selecionadas
            </p>
            <dl className="mt-5 grid gap-3 sm:grid-cols-2">
              {specs.map(([label, value]) => (
                <div
                  key={label}
                  className="min-h-24 border border-white/10 bg-black/20 p-4"
                >
                  <dt className="text-[0.68rem] uppercase tracking-[0.18em] text-zinc-500">
                    {label}
                  </dt>
                  <dd className="mt-3 text-sm font-semibold leading-5 text-zinc-100">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>

            <dl className="mt-5 grid gap-3">
              {commercialSpecs.map(([label, value]) => (
                <div
                  key={label}
                  className="flex items-center justify-between gap-4 border-b border-white/10 pb-4 last:border-b-0"
                >
                  <dt className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                    {label}
                  </dt>
                  <dd className="text-right text-sm font-medium text-zinc-200">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-6 border border-white/10 bg-black/25 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
                Consultoria Breno Automix
              </p>
              <p className="mt-3 text-sm leading-6 text-zinc-300">
                Antes de qualquer decisao, recomendo confirmar disponibilidade,
                historico, condicoes comerciais e possibilidades de troca.
              </p>
              <p className="mt-3 text-sm leading-6 text-zinc-300">
                Meu objetivo e ajudar voce a encontrar a opcao mais alinhada ao
                seu perfil, mesmo que o veiculo inicialmente desejado ja nao
                esteja disponivel.
              </p>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="premium-button mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-md px-5 text-sm font-semibold text-white"
            >
              <span>Solicitar Consultoria Personalizada</span>
            </a>
          </aside>
        </div>
      </section>

      <section className="bg-gradient-to-br from-black via-zinc-950 to-red-950/40 px-5 py-16 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-red-400">
              Lista VIP
            </p>
            <h2 className="mt-4 text-2xl font-semibold text-white md:text-4xl">
              Quer algo parecido? Entre na Lista VIP.
            </h2>
          </div>
          <Link
            href="/#lista-vip"
            className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/15 px-6 text-sm font-semibold text-white transition hover:border-red-500/40 hover:bg-white/[0.06]"
          >
            Entrar na Lista VIP
          </Link>
          <BackToHomeButton className="md:ml-0" />
        </div>
      </section>
    </main>
  );
}
