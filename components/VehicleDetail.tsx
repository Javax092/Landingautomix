import Image from "next/image";
import Link from "next/link";
import { BackToHomeButton } from "./BackToHomeButton";
import { buildVehicleInterestMessage, buildWhatsappUrl } from "@/lib/whatsapp";
import type { Vehicle } from "@/lib/vehicles";
import { VehicleGallery } from "./VehicleGallery";
import { AnimatedContent, Magnet, SplitText } from "./motion-primitives";

type VehicleDetailProps = {
  vehicle: Vehicle;
};

export function VehicleDetail({ vehicle }: VehicleDetailProps) {
  const whatsappUrl = buildWhatsappUrl(
    buildVehicleInterestMessage(vehicle.brand, vehicle.model),
  );
  const gallery = vehicle.gallery?.length ? vehicle.gallery : [vehicle.image];

  const specs = [
    ["Ano", vehicle.year ?? "Confirmar"],
    ["KM", vehicle.mileage ?? "Confirmar"],
    ["Cor", vehicle.color ?? "Confirmar"],
    ["Motor", vehicle.engine ?? "Confirmar"],
    ["Perfil", vehicle.idealProfile],
    ["Troca", "Avaliação do usado"],
  ];

  return (
    <main className="bg-[#050505] pb-20 md:pb-0">
      <section className="relative min-h-[86svh] overflow-hidden pt-20">
        <Image
          src={vehicle.image}
          alt={`${vehicle.brand} ${vehicle.model}`}
          fill
          priority
          sizes="100vw"
          className="object-cover vehicle-detail-hero-image"
          style={{ objectPosition: vehicle.imagePosition ?? "50% 50%" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,0.88)_0%,rgba(5,5,5,0.52)_38%,rgba(5,5,5,0.08)_72%,rgba(5,5,5,0.12)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#050505] to-transparent" />

        <div className="relative mx-auto flex min-h-[calc(86svh-5rem)] max-w-7xl items-end px-5 pb-14 md:px-8">
          <AnimatedContent className="max-w-3xl" distance={18}>
            <div className="flex flex-wrap items-center gap-3">
              <BackToHomeButton className="min-h-10 px-4 text-xs uppercase tracking-[0.18em]" />
              <Link
                href="/veiculos"
                className="inline-flex min-h-10 items-center justify-center rounded-md border border-white/15 px-4 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:border-red-500/40 hover:bg-white/[0.06]"
              >
                Ver outros veículos
              </Link>
            </div>
            <SplitText
              as="p"
              text={vehicle.brand}
              className="mt-6 text-xs font-semibold uppercase tracking-[0.28em] text-red-400"
            />
            <SplitText
              as="h1"
              text={vehicle.model}
              className="mt-4 text-3xl font-semibold leading-tight text-white md:text-5xl"
            />
            <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-zinc-300 md:text-base">
              {vehicle.year ? <span>{vehicle.year}</span> : null}
              {vehicle.mileage ? <span>· {vehicle.mileage}</span> : null}
              {vehicle.price ? (
                <span className="font-semibold text-white">· {vehicle.price}</span>
              ) : null}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Magnet>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="premium-button cta-motion inline-flex min-h-12 items-center justify-center gap-2 rounded-sm px-6 text-sm font-semibold text-white"
                >
                  <span>Tenho interesse</span>
                  <span className="cta-arrow" aria-hidden="true">↗</span>
                </a>
              </Magnet>
            </div>
          </AnimatedContent>
        </div>
      </section>

      <section className="px-5 py-12 md:px-8 lg:py-16">
        <AnimatedContent className="mx-auto max-w-7xl" scale>
          <VehicleGallery
            images={gallery}
            name={`${vehicle.brand} ${vehicle.model}`}
            objectPosition={vehicle.imagePosition}
          />
        </AnimatedContent>
      </section>

      <section className="px-5 pb-16 md:px-8 lg:pb-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <AnimatedContent as="aside" className="lg:sticky lg:top-24 lg:self-start">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-red-400">
              Informações essenciais
            </p>
            <h2 className="mt-4 text-2xl font-semibold text-white md:text-4xl">
              {vehicle.brand} {vehicle.model}
            </h2>
            <p className="mt-4 text-sm leading-7 text-zinc-300">
              {vehicle.recommendation}
            </p>
            <dl className="mt-6 grid gap-3 sm:grid-cols-2">
              {specs.map(([label, value]) => (
                <div
                  key={label}
                  className="min-h-20 border border-white/10 bg-white/[0.035] p-4"
                >
                  <dt className="text-[0.68rem] uppercase tracking-[0.18em] text-zinc-500">
                    {label}
                  </dt>
                  <dd className="mt-2 text-sm font-semibold leading-5 text-zinc-100">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
            <Magnet>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="premium-button cta-motion mt-6 hidden min-h-12 w-full items-center justify-center gap-2 rounded-sm px-5 text-sm font-semibold text-white md:inline-flex"
              >
                <span>Tenho interesse</span>
                <span className="cta-arrow" aria-hidden="true">↗</span>
              </a>
            </Magnet>
          </AnimatedContent>

          <AnimatedContent delay={120}>
            <div className="grid gap-3 sm:grid-cols-3">
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

            <div className="mt-8 border-l border-red-500/50 bg-white/[0.025] p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
                Curadoria Breno
              </p>
              <p className="mt-3 text-sm leading-6 text-zinc-300">
                Antes da decisão, Breno confirma disponibilidade, histórico,
                condições comerciais e possibilidade de troca.
              </p>
              <div className="mt-5 space-y-4 text-sm leading-7 text-zinc-300 md:text-base">
                {vehicle.about.split("\n\n").map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </AnimatedContent>
        </div>
      </section>

      <section className="bg-gradient-to-br from-black via-zinc-950 to-red-950/40 px-5 py-12 md:px-8">
        <AnimatedContent className="mx-auto flex max-w-7xl flex-col justify-between gap-5 md:flex-row md:items-center">
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
            className="cta-motion inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-white/15 px-6 text-sm font-semibold text-white transition hover:border-red-500/40 hover:bg-white/[0.06]"
          >
            <span>Entrar na Lista VIP</span>
            <span className="cta-arrow" aria-hidden="true">→</span>
          </Link>
          <BackToHomeButton className="md:ml-0" />
        </AnimatedContent>
      </section>

      <div className="fixed inset-x-3 bottom-3 z-40 rounded-sm border border-white/10 bg-black/85 p-2 shadow-[0_20px_56px_rgba(0,0,0,0.42)] backdrop-blur-xl md:hidden">
        <div className="grid grid-cols-[1fr_auto] items-center gap-3">
          <p className="min-w-0 truncate px-2 text-sm font-semibold text-white">
            {vehicle.brand} {vehicle.model}
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="premium-button inline-flex min-h-11 items-center justify-center rounded-sm px-4 text-sm font-semibold text-white"
          >
            Tenho interesse
          </a>
        </div>
      </div>
    </main>
  );
}
