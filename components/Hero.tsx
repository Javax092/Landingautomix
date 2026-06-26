import Image from "next/image";
import { buildWhatsappUrl } from "@/lib/whatsapp";

const seals = [
  "Top 1 Automix",
  "Curadoria premium",
  "Atendimento direto",
  "Avaliacao do usado",
];

export function Hero() {
  const whatsappUrl = buildWhatsappUrl(
    "Ola Breno, quero conversar sobre uma curadoria automotiva premium para meu proximo carro.",
  );

  return (
    <section
      id="topo"
      className="relative min-h-[calc(100svh-72px)] overflow-hidden bg-[#050505] pt-16 md:min-h-[88vh]"
    >
      <Image
        src="/images/brenoauto.webp"
        alt="Veiculo premium em ambiente escuro"
        fill
        priority
        sizes="100vw"
        className="hero-image absolute inset-0 h-full w-full object-cover opacity-[0.92]"
      />
      <div className="hero-gradient absolute inset-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_38%,rgba(185,28,28,0.09),transparent_32rem)]" />
      <div className="absolute inset-0 shadow-[inset_0_0_110px_rgba(0,0,0,0.78)]" />
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#050505]/70 to-transparent" />

      <div className="relative mx-auto flex min-h-[calc(100svh-136px)] max-w-7xl items-center px-5 pb-12 pt-10 md:min-h-[calc(88vh-4rem)] md:px-8 md:pb-14 md:pt-12">
        <div className="hero-copy max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-red-400">
            BRENO AUTOMIX MANAUS
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#configurador"
              className="premium-button inline-flex min-h-12 items-center justify-center rounded-md px-6 text-sm font-semibold text-white"
            >
              <span>Iniciar curadoria</span>
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/15 bg-white/[0.04] px-6 text-sm font-semibold text-white transition hover:border-red-500/40 hover:bg-white/[0.08]"
            >
              Atendimento VIP
            </a>
          </div>

          <div className="hero-benefits mt-10 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-6">
            {seals.map((seal, index) => (
              <div
                key={seal}
                className="hero-seal flex min-h-[76px] items-center border border-white/12 bg-black/30 px-4 py-4 text-[0.68rem] font-semibold uppercase leading-snug tracking-[0.11em] text-zinc-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.055)] backdrop-blur-md transition duration-300"
                style={{ animationDelay: `${260 + index * 90}ms` }}
              >
                {seal}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
