"use client";

import Image from "next/image";

export function HeroSection() {
  return (
    <section
      id="topo"
      className="relative isolate min-h-[92svh] overflow-hidden px-5 pb-14 pt-28 md:px-8 md:pb-20 md:pt-32"
    >
      <Image
        src="/images/brenoauto.webp"
        alt="foto do consultor automotivo Breno, da Automix Manaus, ao lado do carro"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(11,11,15,0.96)_0%,rgba(11,11,15,0.78)_42%,rgba(11,11,15,0.34)_72%,rgba(11,11,15,0.76)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(11,11,15,0.32)_0%,rgba(153,27,27,0.08)_48%,#0B0B0F_100%)]" />

      <div className="mx-auto flex min-h-[calc(92svh-7rem)] max-w-7xl items-center">
        <div className="max-w-3xl">
          <p className="reveal-on-scroll mb-5 text-xs font-semibold uppercase tracking-[0.32em] text-glow">
            Breno Automix || Consultoria Automotiva
          </p>
          <h1 className="reveal-on-scroll stagger-1 font-[var(--font-playfair)] text-5xl font-semibold leading-[0.96] text-platinum md:text-7xl">
            Automix Exclusive Motors.
          </h1>

          <div className="reveal-on-scroll stagger-4 mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#proposta"
              className="premium-button inline-flex min-h-12 items-center justify-center rounded-md px-6 text-sm font-semibold text-white shadow-green transition hover:text-white"
            >
              <span>Solicitar proposta</span>
            </a>
            <a
              href="#veiculos"
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-glow/35 px-6 text-sm font-semibold text-platinum transition hover:border-glow hover:bg-white/5"
            >
              Ver veículos
            </a>
          </div>

          <p className="reveal-on-scroll stagger-4 mt-6 max-w-xl text-sm leading-6 text-smoke">
            Atendimento direto com Breno, consultor automotivo da Automix
            Manaus.
          </p>
        </div>
      </div>
      <a
        href="#seminovos"
        aria-label="Rolar para a próxima seção"
        className="reveal-on-scroll stagger-4 absolute bottom-6 left-1/2 hidden h-12 w-px -translate-x-1/2 bg-gradient-to-b from-glow/70 to-transparent md:block"
      />
    </section>
  );
}
