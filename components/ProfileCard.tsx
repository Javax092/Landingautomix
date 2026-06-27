import { buildWhatsappUrl } from "@/lib/whatsapp";
import { PremiumImage } from "./PremiumImage";

const credentials = ["Especialista em Veículos Premium", "Atendimento Consultivo", "Avaliação de Seminovos", "Negociação Estratégica"];

export function ProfileCard() {
  const whatsappUrl = buildWhatsappUrl("Ola Breno, quero falar direto com voce sobre uma curadoria premium na Automix Manaus.");
  return (
    <aside className="profile-card relative mx-auto w-full max-w-2xl overflow-hidden border border-white/10 bg-black/45 p-3 shadow-[0_35px_110px_rgba(0,0,0,.55)] backdrop-blur-xl">
      <div className="absolute inset-0 -z-10 opacity-35 blur-2xl"><PremiumImage src="/images/top1.webp" alt="" fill sizes="600px" className="object-cover" /></div>
      <div className="relative aspect-[4/5] min-h-[520px] overflow-hidden bg-black md:aspect-[5/6]">
        <PremiumImage src="/images/top1.webp" alt="Breno, consultor automotivo premium da Automix Manaus" fill sizes="(max-width: 1024px) 92vw, 620px" className="object-cover brightness-[1.08] contrast-[.96]" style={{ objectPosition: "50% 34%" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/5 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
          <p className="text-xs font-semibold uppercase tracking-[0.27em] text-red-300">Top 1 Automix</p>
          <p className="mt-2 font-serif text-4xl text-white">Breno</p>
          <p className="mt-1 text-sm text-zinc-300">Consultor Automotivo · Manaus</p>
        </div>
      </div>
      <div className="grid gap-px bg-white/10 sm:grid-cols-2">
        {credentials.map((item) => <div key={item} className="bg-[#0b0b0d]/95 px-4 py-4 text-xs font-medium leading-5 text-zinc-300">{item}</div>)}
      </div>
      <a href={whatsappUrl} target="_blank" rel="noreferrer" className="premium-button mt-3 inline-flex min-h-12 w-full items-center justify-center px-5 text-sm font-semibold text-white"><span>Falar com Breno</span></a>
    </aside>
  );
}
