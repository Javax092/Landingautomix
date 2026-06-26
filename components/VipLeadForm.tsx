"use client";

import { useMemo, useState } from "react";
import { BackToHomeButton } from "./BackToHomeButton";
import { buildVipMessage, buildWhatsappUrl } from "@/lib/whatsapp";
import { AnimatedSection } from "./AnimatedSection";

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
      className="bg-gradient-to-br from-black via-zinc-950 to-red-950/40 px-5 py-12 md:px-8 md:py-16"
    >
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="inline-flex border border-red-500/30 bg-red-950/20 px-3 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-red-300 backdrop-blur">
            Acesso VIP
          </p>
          <h2 className="mt-4 text-2xl font-semibold text-white md:text-4xl">
            Acesso antecipado a oportunidades premium
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-zinc-400 md:text-base">
            Algumas oportunidades chegam ao estoque e são negociadas
            rapidamente.
          </p>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-zinc-400 md:text-base">
            Ao participar da Lista VIP, você passa a receber avisos sobre
            veiculos alinhados ao seu perfil antes de grande parte do mercado.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="premium-panel p-5 md:p-6">
          <div className="grid gap-3 sm:grid-cols-2">
            <label>
              <span className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                Nome
              </span>
              <input
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="mt-2 h-12 w-full border border-white/10 bg-black/35 px-4 text-sm text-white placeholder:text-zinc-600"
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
                className="mt-2 h-12 w-full border border-white/10 bg-black/35 px-4 text-sm text-white placeholder:text-zinc-600"
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
                className="mt-2 h-12 w-full border border-white/10 bg-black/35 px-4 text-sm text-white"
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
                className="mt-2 h-12 w-full border border-white/10 bg-black/35 px-4 text-sm text-white"
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
            className="premium-button mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-md px-5 text-sm font-semibold text-white sm:w-auto"
          >
            <span>Entrar para a Lista VIP</span>
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
                <BackToHomeButton />
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="premium-button inline-flex min-h-11 items-center justify-center rounded-md px-5 text-sm font-semibold text-white"
                >
                  <span>Falar com Breno</span>
                </a>
                <a
                  href="#configurador"
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
