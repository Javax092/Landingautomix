"use client";

import { useEffect, useState } from "react";
import { buildWhatsappUrl } from "@/lib/whatsapp";

const navItems = [
  { label: "Configurador", href: "#configurador" },
  { label: "Match", href: "#compatibilidade" },
  { label: "Destaques", href: "#estoque" },
  { label: "Breno", href: "#breno" },
  { label: "Lista VIP", href: "#lista-vip" },
];

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl transition-all duration-300 ${
        isScrolled
          ? "border-white/12 bg-ink/82 shadow-[0_18px_70px_rgba(0,0,0,0.34)]"
          : "border-white/10 bg-ink/42"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 transition-all duration-300 md:px-8 ${
          isScrolled ? "h-12 md:h-14" : "h-14 md:h-16"
        }`}
      >
        <a
          href="#topo"
          className="group inline-flex flex-col leading-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
          aria-label="Ir para o topo"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.24em] text-platinum transition group-hover:text-red-300">
            Breno Automix
          </span>
        </a>

        <nav
          className="hidden items-center gap-6 lg:flex"
          aria-label="Principal"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link text-sm font-medium text-smoke transition hover:text-red-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <nav
            className="hidden items-center gap-3 md:flex lg:hidden"
            aria-label="Atalhos"
          >
            <a
              href="#breno"
              className="text-xs font-medium text-smoke transition hover:text-red-300"
            >
              Breno
            </a>
            <a
              href="#configurador"
              className="text-xs font-medium text-smoke transition hover:text-red-300"
            >
              Curadoria
            </a>
          </nav>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="premium-button inline-flex min-h-10 items-center justify-center rounded-sm px-4 text-xs font-semibold text-white transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-ink sm:px-5 sm:text-sm"
          >
            <span>Falar com Breno</span>
          </a>
        </div>
      </div>
    </header>
  );
}
