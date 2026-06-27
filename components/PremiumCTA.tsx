type PremiumCTAProps = { href: string; children: React.ReactNode; secondary?: boolean };

export function PremiumCTA({ href, children, secondary = false }: PremiumCTAProps) {
  return <a href={href} className={secondary ? "inline-flex min-h-12 items-center justify-center border border-white/20 bg-white/[.04] px-6 text-sm font-semibold text-white transition hover:bg-white/[.08]" : "premium-button inline-flex min-h-12 items-center justify-center px-6 text-sm font-semibold text-white"}><span>{children}</span></a>;
}
