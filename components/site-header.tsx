"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { buildWhatsappUrl } from "@/lib/whatsapp";
import { Magnet } from "./motion-primitives";

const navItems = [
  { label: "Veículos", href: "/veiculos" },
  { label: "Curadoria", href: "/#curadoria", sectionId: "curadoria" },
  { label: "Breno", href: "/#breno" },
  { label: "Lista VIP", href: "/#lista-vip" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const whatsappUrl = buildWhatsappUrl(
    "Ola Breno, vim pelo site da Automix Manaus e gostaria de uma curadoria automotiva premium.",
  );

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 16);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection("");
      return;
    }

    const sectionIds = ["curadoria", "breno", "lista-vip"];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveSection(visible.target.id);
        }
      },
      { rootMargin: "-28% 0px -58% 0px", threshold: [0.08, 0.2, 0.4] },
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    if (!isMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl transition-all duration-300 ${
          isScrolled || isMenuOpen
            ? "border-white/12 bg-ink/88 shadow-[0_18px_70px_rgba(0,0,0,0.34)]"
            : "border-white/10 bg-ink/24"
        }`}
      >
        <div
          className={`mx-auto grid max-w-7xl grid-cols-[1fr_auto_1fr] items-center gap-4 px-5 transition-all duration-300 md:px-8 ${
            isScrolled ? "h-12 md:h-14" : "h-14 md:h-16"
          }`}
        >
          <a
            href="/#topo"
            onClick={closeMenu}
            className="group inline-flex flex-col justify-self-start leading-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            aria-label="Ir para o topo"
          >
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-platinum transition group-hover:text-red-300">
              Breno Automix
            </span>
            <span className="mt-1 hidden text-[0.62rem] uppercase tracking-[0.22em] text-zinc-400 sm:block">
              Automix Manaus
            </span>
          </a>

          <nav
            className="hidden items-center gap-8 justify-self-center lg:flex"
            aria-label="Principal"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`nav-link text-sm font-medium transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-ink ${
                  (item.href === "/veiculos" && pathname?.startsWith("/veiculos")) ||
                  ("sectionId" in item && item.sectionId === activeSection)
                    ? "text-white"
                    : "text-white/55"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center justify-end gap-3 justify-self-end">
            <Magnet strength={3}>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="premium-button cta-motion hidden min-h-10 items-center justify-center gap-2 rounded-sm px-4 text-xs font-semibold text-white transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-ink sm:px-5 sm:text-sm md:inline-flex"
              >
                <span>Falar com Breno</span>
                <span className="cta-arrow" aria-hidden="true">↗</span>
              </a>
            </Magnet>
            <button
              type="button"
              onClick={() => setIsMenuOpen((current) => !current)}
              className="inline-flex h-10 w-10 items-center justify-center border border-white/15 bg-white/[0.04] text-white transition hover:border-red-400/40 hover:bg-white/[0.08] lg:hidden"
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <span className="sr-only">
                {isMenuOpen ? "Fechar menu" : "Abrir menu"}
              </span>
              <span className="relative h-4 w-5" aria-hidden="true">
                <span
                  className={`absolute left-0 top-0 h-px w-5 bg-current transition ${
                    isMenuOpen ? "translate-y-2 rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-2 h-px w-5 bg-current transition ${
                    isMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-4 h-px w-5 bg-current transition ${
                    isMenuOpen ? "-translate-y-2 -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={`staggered-menu fixed inset-0 z-40 bg-[#050505]/98 backdrop-blur-2xl transition duration-300 lg:hidden ${
          isMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!isMenuOpen}
      >
        <nav
          className="mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pb-10 pt-24 md:px-8"
          aria-label="Menu mobile"
        >
          <div className="absolute left-5 top-5 text-sm font-semibold uppercase tracking-[0.22em] text-white">
            Breno Automix
          </div>
          <div className="mb-8 h-px w-full bg-white/10" />
          <div className="flex flex-col gap-1">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="mobile-menu-item flex min-h-14 items-center justify-between border-b border-white/10 py-3 text-3xl font-semibold uppercase tracking-[0.04em] text-white transition hover:text-red-200"
                style={{ animationDelay: `${80 + index * 80}ms` }}
              >
                <span>{item.label}</span>
                <span className="text-xl text-red-300" aria-hidden="true">
                  →
                </span>
              </a>
            ))}
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
            className="premium-button cta-motion mobile-menu-item mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-sm px-5 text-sm font-semibold uppercase tracking-[0.04em] text-white"
            style={{ animationDelay: `${80 + navItems.length * 80}ms` }}
          >
            <span>Falar com Breno</span>
            <span className="cta-arrow" aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
    </>
  );
}
