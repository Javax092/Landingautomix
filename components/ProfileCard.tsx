import { buildWhatsappUrl } from "@/lib/whatsapp";
import { PremiumImage } from "./PremiumImage";

export function ProfileCard() {
  const whatsappUrl = buildWhatsappUrl("Ola Breno, quero falar direto com voce sobre uma curadoria premium na Automix Manaus.");
  return (
    <aside className="profile-card relative mx-auto w-full max-w-2xl overflow-hidden rounded-sm border border-white/10 bg-black/45 p-3 shadow-[0_28px_80px_rgba(0,0,0,.42)] backdrop-blur-xl">
      <div className="absolute inset-0 -z-10 opacity-35 blur-2xl"><PremiumImage src="/images/top1.webp" alt="" fill sizes="600px" className="object-cover" /></div>
      <div className="relative h-[420px] overflow-hidden bg-black sm:h-[500px] md:aspect-[5/6] md:h-auto md:min-h-[430px]">
        <PremiumImage src="/images/top1.webp" alt="Breno, consultor automotivo premium da Automix Manaus" fill sizes="(max-width: 1024px) 92vw, 620px" className="object-cover brightness-[1.08] contrast-[.96]" style={{ objectPosition: "50% 34%" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/5 to-transparent" />
        <div className="gradual-blur-edge" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
          <p className="text-xs font-semibold uppercase tracking-[0.27em] text-red-300">Breno Automix</p>
          <p className="mt-2 font-serif text-4xl text-white">Breno</p>
          <p className="mt-1 text-sm text-zinc-300">Consultor Automotivo · Manaus</p>
        </div>
      </div>
      <a href={whatsappUrl} target="_blank" rel="noreferrer" className="premium-button cta-motion mt-3 inline-flex min-h-12 w-full items-center justify-center gap-2 px-5 text-sm font-semibold text-white"><span>Falar com Breno</span><span className="cta-arrow" aria-hidden="true">↗</span></a>
    </aside>
  );
}
