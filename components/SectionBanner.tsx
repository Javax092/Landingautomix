type SectionBannerProps = { eyebrow: string; title: string; description?: string };

export function SectionBanner({ eyebrow, title, description }: SectionBannerProps) {
  return <div className="max-w-3xl"><p className="text-xs font-semibold uppercase tracking-[0.28em] text-red-400">{eyebrow}</p><h2 className="mt-4 font-serif text-3xl font-medium leading-tight text-white md:text-5xl">{title}</h2>{description ? <p className="mt-4 text-sm leading-7 text-zinc-300 md:text-base">{description}</p> : null}</div>;
}
