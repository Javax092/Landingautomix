"use client";

import { FormEvent, useState } from "react";
import { buildWhatsappUrl } from "@/lib/whatsapp";
import { SectionHeading } from "./section-heading";

export function TradeInSection() {
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!model.trim() || !year.trim() || !phone.trim()) {
      setError("Preencha modelo, ano e WhatsApp para solicitar a avaliação.");
      return;
    }

    setError("");

    const messageLines = [
      "Olá Breno, vim pelo site da Automix Manaus.",
      "",
      "Quero avaliar meu seminovo para troca.",
      `Modelo do usado: ${model.trim()}`,
      `Ano: ${year.trim()}`,
      `WhatsApp: ${phone.trim()}`
    ];

    if (note.trim()) {
      messageLines.push(`Observação: ${note.trim()}`);
    }

    window.open(buildWhatsappUrl(messageLines.join("\n")), "_blank", "noopener,noreferrer");
  }

  return (
    <section id="avaliar-usado" className="section-band px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-start">
        <SectionHeading
          eyebrow="Usado na troca"
          title="Valorize seu seminovo na troca."
          description="Informe o modelo do seu veículo atual e receba uma avaliação inicial para negociar seu próximo carro com mais clareza."
        />

        <form onSubmit={handleSubmit} className="premium-panel reveal-on-scroll stagger-2 rounded-lg p-5 md:p-7">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-platinum">Modelo do usado</span>
              <input
                value={model}
                onChange={(event) => setModel(event.target.value)}
                className="min-h-12 w-full rounded-md border border-white/10 bg-black/30 px-4 text-platinum outline-none transition placeholder:text-white/30 focus:border-glow focus:bg-black/40"
                placeholder="Ex.: Corolla Altis"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-platinum">Ano</span>
              <input
                value={year}
                onChange={(event) => setYear(event.target.value)}
                className="min-h-12 w-full rounded-md border border-white/10 bg-black/30 px-4 text-platinum outline-none transition placeholder:text-white/30 focus:border-glow focus:bg-black/40"
                placeholder="Ex.: 2021"
                inputMode="numeric"
              />
            </label>
            <label className="block sm:col-span-2">
              <span className="mb-2 block text-sm font-medium text-platinum">WhatsApp</span>
              <input
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                className="min-h-12 w-full rounded-md border border-white/10 bg-black/30 px-4 text-platinum outline-none transition placeholder:text-white/30 focus:border-glow focus:bg-black/40"
                placeholder="(92) 99999-9999"
                inputMode="tel"
                autoComplete="tel"
              />
            </label>
            <label className="block sm:col-span-2">
              <span className="mb-2 block text-sm font-medium text-platinum">Observação</span>
              <textarea
                value={note}
                onChange={(event) => setNote(event.target.value)}
                className="min-h-24 w-full resize-none rounded-md border border-white/10 bg-black/30 px-4 py-3 text-platinum outline-none transition placeholder:text-white/30 focus:border-glow focus:bg-black/40"
                placeholder="Versão, quilometragem, estado geral ou pendências"
              />
            </label>
          </div>

          {error ? (
            <p className="mt-4 rounded-md border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-100">
              {error}
            </p>
          ) : null}

          <button
            type="submit"
            className="premium-button mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-md px-6 text-sm font-semibold text-white shadow-green transition hover:text-white sm:w-auto"
          >
            <span>Avaliar meu usado pelo WhatsApp</span>
          </button>
        </form>
      </div>
    </section>
  );
}
