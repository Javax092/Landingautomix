"use client";

import { useMemo, useState } from "react";
import { buildVipMessage, buildWhatsappUrl } from "@/lib/whatsapp";
import { AnimatedSection } from "./AnimatedSection";
import { PremiumImage } from "./PremiumImage";
import { SplitText } from "./motion-primitives";

const profiles = [
  "Executivo Discreto",
  "Performance & Status",
  "Familia Premium",
  "Aventura Sofisticada",
];

const budgets = [
  "R$150 mil a R$250 mil",
  "R$250 mil a R$400 mil",
  "Acima de R$400 mil",
  "Prefiro conversar",
];

export function VipLeadForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [profile, setProfile] = useState(profiles[0]);
  const [budget, setBudget] = useState(budgets[0]);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const whatsappUrl = useMemo(
    () =>
      buildWhatsappUrl(
        buildVipMessage({
          name: name.trim() || "[nome]",
          phone: phone.trim() || "[whatsapp]",
          profile,
          budget,
        }),
      ),
    [budget, name, phone, profile],
  );

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!name.trim()) {
      setError("Informe seu nome para entrar na Lista VIP.");
      return;
    }

    if (phone.replace(/\D/g, "").length < 10) {
      setError("Informe um WhatsApp valido com DDD.");
      return;
    }

    setError("");
    setSubmitted(true);
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <AnimatedSection
      id="lista-vip"
      className="relative isolate overflow-hidden bg-gradient-to-br from-black via-zinc-950 to-red-950/40 px-5 py-14 md:px-8 lg:py-20"
    >
      <PremiumImage src="/images/interiorland.webp" alt="Ambiente executivo premium" fill sizes="100vw" className="premium-section-image -z-20 object-cover" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(105deg,rgba(5,5,7,.97),rgba(7,7,9,.9),rgba(46,12,15,.78))]" />
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="inline-flex border border-red-500/30 bg-red-950/20 px-3 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-red-300 backdrop-blur">
            Lista VIP
          </p>
          <SplitText
            as="h2"
            text="Receba oportunidades alinhadas ao seu perfil."
            className="mt-4 text-2xl font-semibold text-white md:text-4xl"
          />
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-zinc-400 md:text-base">
            Algumas oportunidades não ficam disponíveis por muito tempo. A Lista
            VIP ajuda Breno a avisar primeiro quem já sabe o que procura.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="premium-panel rounded-sm p-5 md:p-6">
          <div className="mb-5 border-b border-white/10 pb-5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-red-300">
              Solicitação de acesso
            </p>
            <p className="mt-2 text-sm leading-6 text-zinc-400">
              Informe o perfil desejado.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <label>
              <span className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                Nome
              </span>
              <input
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="mt-2 h-12 w-full rounded-sm border border-white/10 bg-black/35 px-4 text-sm text-white placeholder:text-zinc-600 transition focus:border-red-400/50 focus:bg-black/50"
                placeholder="Seu nome"
              />
            </label>
            <label>
              <span className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                WhatsApp
              </span>
              <input
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                className="mt-2 h-12 w-full rounded-sm border border-white/10 bg-black/35 px-4 text-sm text-white placeholder:text-zinc-600 transition focus:border-red-400/50 focus:bg-black/50"
                inputMode="tel"
                placeholder="(92) 99999-9999"
              />
            </label>
            <label>
              <span className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                Perfil desejado
              </span>
              <select
                value={profile}
                onChange={(event) => setProfile(event.target.value)}
                className="mt-2 h-12 w-full rounded-sm border border-white/10 bg-black/35 px-4 text-sm text-white transition focus:border-red-400/50 focus:bg-black/50"
              >
                {profiles.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </label>
            <label>
              <span className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                Faixa
              </span>
              <select
                value={budget}
                onChange={(event) => setBudget(event.target.value)}
                className="mt-2 h-12 w-full rounded-sm border border-white/10 bg-black/35 px-4 text-sm text-white transition focus:border-red-400/50 focus:bg-black/50"
              >
                {budgets.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </label>
          </div>

          {error ? <p className="mt-3 text-sm text-red-300">{error}</p> : null}

          <button
            type="submit"
            className="premium-button cta-motion mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md px-5 text-sm font-semibold text-white sm:w-auto"
          >
            <span>Entrar para a Lista VIP</span>
            <span className="cta-arrow" aria-hidden="true">↗</span>
          </button>
          <p className="mt-4 text-xs text-zinc-500">
            Sem spam. Apenas oportunidades compativeis com seu perfil.
          </p>
          {submitted ? (
            <div className="mt-5 border border-red-500/25 bg-red-950/15 p-4">
              <p className="text-sm font-semibold text-white">
                Solicitação enviada para a Lista VIP.
              </p>
              <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                    className="premium-button cta-motion inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 text-sm font-semibold text-white"
                  >
                  <span>Falar com Breno</span>
                  <span className="cta-arrow" aria-hidden="true">↗</span>
                </a>
                <a
                  href="#curadoria"
                  className="inline-flex min-h-11 items-center justify-center rounded-md border border-white/15 px-5 text-sm font-semibold text-white transition hover:border-red-500/40 hover:bg-white/[0.06]"
                >
                  Receber Curadoria VIP
                </a>
              </div>
            </div>
          ) : null}
        </form>
      </div>
    </AnimatedSection>
  );
}
