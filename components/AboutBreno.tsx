import Image from "next/image";
import { buildWhatsappUrl } from "@/lib/whatsapp";
import { AnimatedSection } from "./AnimatedSection";

const authorityPoints = [
  "Curadoria Personalizada",
  "Consultoria Especializada",
  "Avaliacao Estrategica do Usado",
  "Negociacao sem Pressao",
];

export function AboutBreno() {
  const whatsappUrl = buildWhatsappUrl(
    "Ola Breno, quero falar direto com voce sobre uma curadoria premium na Automix Manaus.",
  );

  return (
    <AnimatedSection
      id="breno"
      className="section-band bg-[#0d0d10] px-5 py-12 md:px-8 md:py-16"
    >
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.94fr_1.06fr] lg:items-center">
        <aside className="premium-panel order-2 mx-auto w-full max-w-xl overflow-hidden p-3 lg:order-1">
          <div className="relative aspect-[4/5] overflow-hidden bg-black md:aspect-[5/6]">
            <Image
              src="/images/top1.webp"
              alt="Breno, consultor automotivo da Automix Manaus"
              fill
              sizes="(max-width: 1024px) 92vw, 560px"
              className="object-cover"
              style={{ objectPosition: "50% 42%" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
            <div className="absolute left-4 top-4 border border-red-500/30 bg-black/50 px-3 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-red-200 backdrop-blur-md">
              TOP 1 AUTOMIX
            </div>
            <div className="absolute bottom-5 left-5 right-5">
              <p className="text-3xl font-semibold text-white">Breno</p>
              <p className="mt-2 text-sm leading-6 text-zinc-300">
                Consultor Automotivo
                <br />
                Automix Manaus
              </p>
            </div>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="premium-button mt-4 inline-flex min-h-11 w-full items-center justify-center rounded-md px-5 text-sm font-semibold text-white"
          >
            <span>Falar com Breno</span>
          </a>
        </aside>

        <div className="order-1 max-w-3xl lg:order-2">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-red-400">
            Autoridade consultiva
          </p>
          <h2 className="mt-4 text-2xl font-semibold text-white md:text-4xl">
            Breno | Consultor Automotivo
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-400 md:text-base">
            Referencia em atendimento consultivo e curadoria de veiculos premium
            na Automix Manaus.
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-400 md:text-base">
            Atuo auxiliando clientes que buscam mais do que um veiculo: buscam
            uma escolha segura, coerente e alinhada ao seu estilo de vida.
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-400 md:text-base">
            Meu trabalho combina curadoria de oportunidades, avaliação
            estrategica de veiculos usados e consultoria durante todo o processo
            de negociação, proporcionando uma experiência mais transparente,
            objetiva e personalizada.
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {authorityPoints.map((point) => (
              <div
                key={point}
                className="group flex min-h-28 flex-col justify-between border border-white/10 bg-white/[0.035] px-4 py-4 transition duration-300 hover:-translate-y-0.5 hover:border-red-500/35 hover:bg-white/[0.055]"
              >
                <span className="block h-px w-8 bg-red-500/70 transition group-hover:w-12" />
                <p className="mt-3 text-sm font-medium text-zinc-200">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
