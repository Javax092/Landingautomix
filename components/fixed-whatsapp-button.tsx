import { buildWhatsappUrl } from "@/lib/whatsapp";

export function FixedWhatsappButton() {
  const whatsappUrl = buildWhatsappUrl(
    "Ola Breno, vim pelo site da Automix Manaus e gostaria de atendimento premium."
  );

  return (
    <div className="fixed inset-x-3 bottom-3 z-40 grid grid-cols-2 gap-2 rounded-lg border border-white/12 bg-black/72 p-2 shadow-[0_20px_70px_rgba(0,0,0,0.46)] backdrop-blur-xl md:hidden">
      <a
        href="/#configurador"
        className="premium-button inline-flex min-h-12 items-center justify-center rounded-md px-3 text-center text-sm font-semibold text-white"
      >
        <span>🚗 Fazer Match</span>
      </a>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/15 bg-white/[0.05] px-3 text-center text-sm font-semibold text-white transition hover:border-red-500/40 hover:bg-white/[0.08]"
      >
        📞 Falar com Breno
      </a>
    </div>
  );
}
