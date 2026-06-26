"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { vehicles } from "@/lib/vehicles";
import { buildWhatsappUrl } from "@/lib/whatsapp";
import { SectionHeading } from "./section-heading";

const purchaseOptions = [
  "À vista",
  "Financiamento",
  "Tenho usado na troca",
  "Quero receber opções"
];

const tradeOptions = ["Sim", "Não", "Quero avaliar"];

export function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [purchaseType, setPurchaseType] = useState("");
  const [hasTrade, setHasTrade] = useState("");
  const [usedModel, setUsedModel] = useState("");
  const [usedYear, setUsedYear] = useState("");
  const [usedNote, setUsedNote] = useState("");
  const [generalNote, setGeneralNote] = useState("");
  const [error, setError] = useState("");

  const vehicleOptions = useMemo(
    () => vehicles.map((item) => `${item.brand} ${item.model}`),
    [],
  );
  const shouldShowTradeFields = hasTrade === "Sim";

  useEffect(() => {
    function handleVehicleSelection(event: Event) {
      const selectedVehicle = (event as CustomEvent<string>).detail;

      if (selectedVehicle) {
        setVehicle(selectedVehicle);
        setError("");
      }
    }

    window.addEventListener("select-vehicle", handleVehicleSelection);
    return () => window.removeEventListener("select-vehicle", handleVehicleSelection);
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!name.trim() || !phone.trim() || !vehicle || !purchaseType || !hasTrade) {
      setError("Preencha nome, WhatsApp, veículo, forma de compra e troca para solicitar proposta.");
      return;
    }

    setError("");

    const messageLines = [
      "Olá Breno, vim pelo site da Automix Manaus.",
      "",
      `Meu nome: ${name.trim()}`,
      `WhatsApp: ${phone.trim()}`,
      `Veículo de interesse: ${vehicle}`,
      `Forma de compra: ${purchaseType}`,
      `Possui veículo para troca: ${hasTrade}`,
      `Observação: ${generalNote.trim() || "Não informado"}`
    ];

    if (shouldShowTradeFields && (usedModel.trim() || usedYear.trim() || usedNote.trim())) {
      messageLines.push(
        "",
        "Dados do usado:",
        usedModel.trim() ? `Modelo: ${usedModel.trim()}` : "Modelo: Não informado",
        usedYear.trim() ? `Ano: ${usedYear.trim()}` : "Ano: Não informado",
        usedNote.trim() ? `Observação do usado: ${usedNote.trim()}` : "Observação do usado: Não informado"
      );
    }

    messageLines.push("", "Gostaria de receber uma proposta.");

    window.open(buildWhatsappUrl(messageLines.join("\n")), "_blank", "noopener,noreferrer");
  }

  return (
    <section id="proposta" className="section-band section-band-alt px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.88fr_1.12fr] md:items-start">
        <SectionHeading
          eyebrow="Proposta"
          title="Solicite uma proposta."
          description="Envie seu interesse e receba retorno com disponibilidade, condições e possibilidades de negociação."
        />

        <form onSubmit={handleSubmit} className="premium-panel reveal-on-scroll stagger-2 rounded-lg p-5 md:p-7">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-platinum">Nome</span>
              <input
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="min-h-12 w-full rounded-md border border-white/10 bg-black/30 px-4 text-platinum outline-none transition placeholder:text-white/30 focus:border-glow focus:bg-black/40"
                placeholder="Seu nome"
                autoComplete="name"
              />
            </label>

            <label className="block">
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

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-platinum">
                Veículo de interesse
              </span>
              <select
                value={vehicle}
                onChange={(event) => setVehicle(event.target.value)}
                className="min-h-12 w-full rounded-md border border-white/10 bg-black/30 px-4 text-platinum outline-none transition focus:border-glow focus:bg-black/40"
              >
                <option value="">Selecione</option>
                {vehicleOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-platinum">
                Forma de compra
              </span>
              <select
                value={purchaseType}
                onChange={(event) => setPurchaseType(event.target.value)}
                className="min-h-12 w-full rounded-md border border-white/10 bg-black/30 px-4 text-platinum outline-none transition focus:border-glow focus:bg-black/40"
              >
                <option value="">Selecione</option>
                {purchaseOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>

            <label className="block sm:col-span-2">
              <span className="mb-2 block text-sm font-medium text-platinum">
                Possui veículo para troca?
              </span>
              <select
                value={hasTrade}
                onChange={(event) => setHasTrade(event.target.value)}
                className="min-h-12 w-full rounded-md border border-white/10 bg-black/30 px-4 text-platinum outline-none transition focus:border-glow focus:bg-black/40"
              >
                <option value="">Selecione</option>
                {tradeOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
          </div>

          {shouldShowTradeFields ? (
            <div className="trade-fields mt-5 rounded-md border border-glow/15 bg-black/20 p-4">
              <p className="mb-4 text-sm font-semibold text-platinum">Dados opcionais do usado</p>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-platinum">
                    Modelo do veículo usado
                  </span>
                  <input
                    value={usedModel}
                    onChange={(event) => setUsedModel(event.target.value)}
                    className="min-h-12 w-full rounded-md border border-white/10 bg-black/30 px-4 text-platinum outline-none transition placeholder:text-white/30 focus:border-glow focus:bg-black/40"
                    placeholder="Ex.: Hilux SRX"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-platinum">
                    Ano do veículo usado
                  </span>
                  <input
                    value={usedYear}
                    onChange={(event) => setUsedYear(event.target.value)}
                    className="min-h-12 w-full rounded-md border border-white/10 bg-black/30 px-4 text-platinum outline-none transition placeholder:text-white/30 focus:border-glow focus:bg-black/40"
                    placeholder="Ex.: 2021"
                    inputMode="numeric"
                  />
                </label>
                <label className="block sm:col-span-2">
                  <span className="mb-2 block text-sm font-medium text-platinum">
                    Observação sobre o usado
                  </span>
                  <textarea
                    value={usedNote}
                    onChange={(event) => setUsedNote(event.target.value)}
                    className="min-h-24 w-full resize-none rounded-md border border-white/10 bg-black/30 px-4 py-3 text-platinum outline-none transition placeholder:text-white/30 focus:border-glow focus:bg-black/40"
                    placeholder="Estado, versão, acessórios ou pendências relevantes"
                  />
                </label>
              </div>
            </div>
          ) : null}

          <label className="mt-5 block">
            <span className="mb-2 block text-sm font-medium text-platinum">Observação</span>
            <textarea
              value={generalNote}
              onChange={(event) => setGeneralNote(event.target.value)}
              className="min-h-24 w-full resize-none rounded-md border border-white/10 bg-black/30 px-4 py-3 text-platinum outline-none transition placeholder:text-white/30 focus:border-glow focus:bg-black/40"
              placeholder="Ex.: Procuro SUV premium até R$ 250 mil"
            />
          </label>

          {error ? (
            <p className="mt-4 rounded-md border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-100">
              {error}
            </p>
          ) : null}

          <button
            type="submit"
            className="premium-button mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-md px-6 text-sm font-semibold text-white shadow-green transition hover:text-white sm:w-auto"
          >
            <span>Enviar para Breno</span>
          </button>
        </form>
      </div>
    </section>
  );
}
