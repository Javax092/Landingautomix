import { buildWhatsappUrl, brenoWhatsappNumber } from "@/lib/whatsapp";

const quickLinks = [
  { label: "Veículos", href: "/veiculos" },
  { label: "Curadoria", href: "/#curadoria" },
  { label: "Lista VIP", href: "/#lista-vip" },
  { label: "WhatsApp", href: "whatsapp" },
];

export function SiteFooter() {
  const whatsappUrl = buildWhatsappUrl(
    "Ola Breno, vim pelo site da Automix Manaus e gostaria de atendimento premium."
  );

  return (
    <footer id="atendimento" className="border-t border-white/10 px-5 py-8 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-platinum">
            Breno Automix
          </p>
          <p className="mt-2 text-sm text-smoke">
            Curadoria automotiva · Manaus
          </p>
          <p className="mt-3 text-xs text-zinc-500">© 2026</p>
        </div>

        <div className="flex flex-wrap gap-4 md:justify-end">
          {quickLinks.map((link) => (
            <a
              key={link.label}
              href={link.href === "whatsapp" ? whatsappUrl : link.href}
              target={link.href === "whatsapp" ? "_blank" : undefined}
              rel={link.href === "whatsapp" ? "noreferrer" : undefined}
              className="text-sm text-smoke transition hover:text-red-300"
            >
              {link.label}
            </a>
          ))}
          <span className="text-sm text-zinc-600">+{brenoWhatsappNumber}</span>
        </div>
      </div>
    </footer>
  );
}
