import Image from "next/image";
import { buildWhatsappUrl, brenoWhatsappNumber } from "@/lib/whatsapp";

const quickLinks = [
  { label: "Configurador", href: "#configurador" },
  { label: "Destaques", href: "#estoque" },
  { label: "Lista VIP", href: "#lista-vip" },
  { label: "Atendimento", href: "#atendimento" }
];

export function SiteFooter() {
  const whatsappUrl = buildWhatsappUrl(
    "Ola Breno, vim pelo site da Automix Manaus e gostaria de atendimento premium."
  );

  return (
    <footer id="atendimento" className="border-t border-white/10 px-5 py-10 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_auto] md:items-end">
        <div className="flex max-w-xl flex-col items-start gap-5 sm:flex-row sm:items-center">
          <div className="relative h-[112px] w-[112px] shrink-0 overflow-hidden rounded-full border border-red-500/35 bg-white/5 shadow-[0_18px_50px_rgba(127,29,29,0.34),0_0_28px_rgba(185,28,28,0.22)]">
            <Image
              src="/images/top1.webp"
              alt="Foto de Breno, consultor automotivo premium da Automix Manaus"
              fill
              sizes="112px"
              loading="eager"
              className="object-cover object-center"
            />
          </div>
          <div className="min-w-0">
            <p className="inline-flex border border-red-500/25 bg-red-950/30 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-red-200">
              TOP 1 AUTOMIX
            </p>
            <p className="mt-3 text-sm font-semibold uppercase tracking-[0.28em] text-platinum">Breno</p>
            <p className="mt-2 text-sm text-smoke">Consultor Automotivo Premium</p>
            <p className="mt-1 text-sm text-smoke">Automix Manaus</p>
            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-zinc-500">
              Curadoria &bull; Consultoria &bull; Negociacao
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex text-sm font-semibold text-red-300 transition hover:text-platinum"
            >
              WhatsApp +{brenoWhatsappNumber}
            </a>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 md:justify-end">
          {quickLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-smoke transition hover:text-red-300">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
