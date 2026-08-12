"use client";

import Link from "next/link";
import type { CSSProperties, InputHTMLAttributes, ReactNode } from "react";
import { useMemo, useRef, useState } from "react";
import {
  buildCuratorshipMessage,
  buildWhatsappUrl,
} from "@/lib/whatsapp";
import { vehicles, type Vehicle } from "@/lib/vehicles";
import { AnimatedSection } from "./AnimatedSection";
import { PremiumImage } from "./PremiumImage";
import { SplitText } from "./motion-primitives";

const profiles = [
  {
    title: "Executivo Discreto",
    text: "Conforto, tecnologia e presença sem excesso.",
  },
  {
    title: "Performance & Status",
    text: "Potência, design e experiência ao dirigir.",
  },
  {
    title: "Família Premium",
    text: "Espaço, segurança e conforto para a rotina.",
  },
  {
    title: "Aventura Sofisticada",
    text: "Versatilidade, força e liberdade com acabamento premium.",
  },
] as const;

const bodyTypes = ["SUV", "Esportivo", "Pickup", "Ainda não decidi"] as const;

const budgets = [
  "Até R$ 150 mil",
  "R$ 150 mil a R$ 250 mil",
  "R$ 250 mil a R$ 400 mil",
  "Acima de R$ 400 mil",
  "Prefiro conversar",
] as const;

const priorities = [
  "Procedência",
  "Conforto",
  "Performance",
  "Tecnologia",
  "Espaço",
  "Exclusividade",
  "Custo-benefício",
] as const;

const moments = [
  "Agora",
  "Nos próximos 30 dias",
  "Entre 1 e 3 meses",
  "Ainda estou pesquisando",
] as const;

const steps = [
  "Perfil",
  "Veículo",
  "Investimento",
  "Momento",
  "Troca",
  "Resultado",
] as const;

type ProfileTitle = (typeof profiles)[number]["title"];
type BodyType = (typeof bodyTypes)[number];
type Budget = (typeof budgets)[number];
type Priority = (typeof priorities)[number];
type Moment = (typeof moments)[number];

const profileAliases: Record<ProfileTitle, string[]> = {
  "Executivo Discreto": ["Executivo Discreto", "Conforto interno"],
  "Performance & Status": [
    "Performance & Status",
    "Prazer ao dirigir",
    "Presenca",
  ],
  "Família Premium": ["Familia Premium", "Família Premium"],
  "Aventura Sofisticada": [
    "Aventura Sofisticada",
    "Forca com personalidade",
    "Presenca",
  ],
};

function getBodyType(vehicle: Vehicle): Exclude<BodyType, "Ainda não decidi"> | "Outro" {
  const category = vehicle.category.toLowerCase();
  if (category.includes("suv")) return "SUV";
  if (category.includes("esportivo")) return "Esportivo";
  if (category.includes("picape") || category.includes("pickup")) return "Pickup";
  return "Outro";
}

function scoreVehicle(
  vehicle: Vehicle,
  answers: {
    profile: ProfileTitle;
    bodyType: BodyType;
    budget: Budget;
    priority: Priority;
  },
) {
  let score = 0;
  const aliases = profileAliases[answers.profile];
  const searchable = [
    vehicle.profile,
    vehicle.idealProfile,
    vehicle.category,
    vehicle.recommendation,
    ...vehicle.recommendedFor,
    ...vehicle.highlights,
    ...vehicle.matchProfiles,
  ].join(" ");

  if (aliases.some((alias) => searchable.includes(alias))) score += 4;
  if (answers.bodyType !== "Ainda não decidi" && getBodyType(vehicle) === answers.bodyType) {
    score += 5;
  }
  if (answers.bodyType === "Ainda não decidi") score += 1;

  if (answers.priority === "Performance" && /performance|esportivo|experiencia/i.test(searchable)) score += 3;
  if (answers.priority === "Conforto" && /conforto|cabine|premium|elegancia/i.test(searchable)) score += 3;
  if (answers.priority === "Tecnologia" && /tecnologia|digital|premium|compacta/i.test(searchable)) score += 2;
  if (answers.priority === "Espaço" && /familia|cabine|suv|picape|pickup/i.test(searchable)) score += 2;
  if (answers.priority === "Exclusividade" && /competition|porsche|fora do obvio|presenca/i.test(searchable)) score += 2;
  if (answers.priority === "Procedência" && /breno|selecao|seleção|premium|discreta/i.test(searchable)) score += 1;
  if (answers.priority === "Custo-benefício" && /compacta|equilibrio|uso misto|praticidade/i.test(searchable)) score += 2;

  if (answers.budget === "Até R$ 150 mil" && vehicle.slug === "dakota") score += 2;
  if (answers.budget === "R$ 150 mil a R$ 250 mil" && vehicle.slug === "mercedes-gla-200") score += 2;
  if (answers.budget === "R$ 250 mil a R$ 400 mil" && ["ram-1500", "porsche-718"].includes(vehicle.slug)) score += 2;
  if (answers.budget === "Acima de R$ 400 mil" && vehicle.slug === "bmw-x6-competition") score += 2;

  return score;
}

function getRecommendations(answers: {
  profile: ProfileTitle;
  bodyType: BodyType;
  budget: Budget;
  priority: Priority;
}) {
  return [...vehicles]
    .map((vehicle) => ({
      vehicle,
      score: scoreVehicle(vehicle, answers),
    }))
    .sort((a, b) => b.score - a.score)
    .map((item) => item.vehicle);
}

export function ConciergeConfigurator() {
  const [isStarted, setIsStarted] = useState(false);
  const [step, setStep] = useState(0);
  const [profile, setProfile] = useState<ProfileTitle>("Executivo Discreto");
  const [bodyType, setBodyType] = useState<BodyType>("SUV");
  const [budget, setBudget] = useState<Budget>("R$ 250 mil a R$ 400 mil");
  const [priority, setPriority] = useState<Priority>("Procedência");
  const [moment, setMoment] = useState<Moment>("Nos próximos 30 dias");
  const [hasTrade, setHasTrade] = useState<"Sim" | "Não">("Não");
  const [tradeBrand, setTradeBrand] = useState("");
  const [tradeModel, setTradeModel] = useState("");
  const [tradeYear, setTradeYear] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const panelRef = useRef<HTMLDivElement>(null);

  const recommendations = useMemo(
    () => getRecommendations({ profile, bodyType, budget, priority }),
    [bodyType, budget, priority, profile],
  );
  const mainRecommendations = recommendations.slice(0, 2);
  const alternatives = recommendations.slice(2, 5);
  const isApproximate =
    bodyType !== "Ainda não decidi" &&
    mainRecommendations.every((vehicle) => getBodyType(vehicle) !== bodyType);

  const whatsappUrl = useMemo(
    () =>
      buildWhatsappUrl(
        buildCuratorshipMessage({
          name: name.trim() || "[nome]",
          phone: phone.trim() || "[whatsapp]",
          profile,
          bodyType,
          budget,
          priority,
          moment,
          hasTrade,
          tradeVehicle:
            hasTrade === "Sim"
              ? [tradeBrand, tradeModel, tradeYear].filter(Boolean).join(" ")
              : "",
          suggestedModels: mainRecommendations.map(
            (vehicle) => `${vehicle.brand} ${vehicle.model}`,
          ),
        }),
      ),
    [
      bodyType,
      budget,
      hasTrade,
      mainRecommendations,
      moment,
      name,
      phone,
      priority,
      profile,
      tradeBrand,
      tradeModel,
      tradeYear,
    ],
  );

  function maybeScrollPanel() {
    window.setTimeout(() => {
      const panel = panelRef.current;
      if (!panel) return;
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const rect = panel.getBoundingClientRect();
      const outsideView = rect.top < 76 || rect.bottom > window.innerHeight + 80;
      if (outsideView) {
        panel.scrollIntoView({
          behavior: reducedMotion ? "auto" : "smooth",
          block: "start",
        });
      }
    }, 80);
  }

  function startCuratorship() {
    setIsStarted(true);
    maybeScrollPanel();
  }

  function goToStep(nextStep: number) {
    setError("");
    setStep(Math.max(0, Math.min(steps.length - 1, nextStep)));
    maybeScrollPanel();
  }

  function openWhatsapp() {
    if (!name.trim()) {
      setError("Informe seu nome para Breno identificar sua curadoria.");
      return;
    }
    if (phone.replace(/\D/g, "").length < 10) {
      setError("Informe um WhatsApp válido com DDD.");
      return;
    }
    setError("");
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  const summary = [
    ["Perfil", profile],
    ["Tipo de veículo", bodyType],
    ["Investimento", budget],
    ["Prioridade", priority],
    ["Momento", moment],
    ["Possui troca", hasTrade],
  ];

  return (
    <AnimatedSection
      id="curadoria"
      className="section-band px-5 py-16 md:px-8 lg:py-24"
    >
      <span id="configurador" className="absolute top-0" aria-hidden="true" />
      <PremiumImage
        src="/images/x6interior.webp"
        alt="Interior premium com volante e painel digital"
        fill
        sizes="100vw"
        className="premium-section-image -z-20 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(110deg,rgba(5,5,7,.95),rgba(7,7,9,.84),rgba(34,10,12,.68))]" />

      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-red-400">
            Curadoria
          </p>
          <SplitText
            as="h2"
            text="Encontre o veículo certo para o seu momento."
            className="mx-auto mt-4 justify-center text-2xl font-semibold text-white md:text-4xl"
          />
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-zinc-400 md:text-base">
            Responda algumas perguntas e receba uma seleção mais alinhada ao seu perfil.
          </p>
          {!isStarted ? (
            <button
              type="button"
              onClick={startCuratorship}
              className="premium-button cta-motion mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-sm px-7 text-sm font-semibold text-white"
            >
              <span>Encontrar meu próximo carro</span>
              <span className="cta-arrow" aria-hidden="true">→</span>
            </button>
          ) : null}
        </div>

        {isStarted ? (
          <div ref={panelRef} className="premium-panel mx-auto mt-8 max-w-4xl rounded-sm p-4 md:p-6">
            <div className="flex flex-col gap-4 border-b border-white/10 pb-5 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-red-300">
                  {String(step + 1).padStart(2, "0")} {steps[step]}
                </p>
                <p className="mt-2 text-sm text-zinc-500 md:hidden">
                  {step + 1} de {steps.length}
                </p>
              </div>
              <ol className="hidden gap-2 text-[0.65rem] uppercase tracking-[0.16em] text-zinc-500 md:flex">
                {steps.map((item, index) => (
                  <li
                    key={item}
                    className={index <= step ? "text-zinc-200" : undefined}
                  >
                    {String(index + 1).padStart(2, "0")} {item}
                  </li>
                ))}
              </ol>
            </div>

            <div key={step} className="concierge-step mt-6 min-h-[330px]">
              {step === 0 ? (
                <fieldset>
                  <legend className="text-lg font-semibold text-white">
                    Qual perfil representa sua próxima escolha?
                  </legend>
                  <div className="mt-4 grid gap-3 md:grid-cols-2">
                    {profiles.map((item) => (
                      <OptionButton
                        key={item.title}
                        selected={profile === item.title}
                        onClick={() => setProfile(item.title)}
                        title={item.title}
                        text={item.text}
                      />
                    ))}
                  </div>
                </fieldset>
              ) : null}

              {step === 1 ? (
                <div className="grid gap-7">
                  <fieldset>
                    <legend className="text-lg font-semibold text-white">
                      Qual tipo de veículo você procura?
                    </legend>
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      {bodyTypes.map((item) => (
                        <ChoiceButton
                          key={item}
                          selected={bodyType === item}
                          onClick={() => setBodyType(item)}
                        >
                          {item}
                        </ChoiceButton>
                      ))}
                    </div>
                  </fieldset>
                  <fieldset>
                    <legend className="text-lg font-semibold text-white">
                      O que mais pesa na sua decisão?
                    </legend>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {priorities.map((item) => (
                        <ChoiceButton
                          key={item}
                          selected={priority === item}
                          onClick={() => setPriority(item)}
                          compact
                        >
                          {item}
                        </ChoiceButton>
                      ))}
                    </div>
                  </fieldset>
                </div>
              ) : null}

              {step === 2 ? (
                <fieldset>
                  <legend className="text-lg font-semibold text-white">
                    Qual faixa de investimento você considera?
                  </legend>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {budgets.map((item) => (
                      <ChoiceButton
                        key={item}
                        selected={budget === item}
                        onClick={() => setBudget(item)}
                      >
                        {item}
                      </ChoiceButton>
                    ))}
                  </div>
                </fieldset>
              ) : null}

              {step === 3 ? (
                <fieldset>
                  <legend className="text-lg font-semibold text-white">
                    Quando pretende trocar ou comprar seu veículo?
                  </legend>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {moments.map((item) => (
                      <ChoiceButton
                        key={item}
                        selected={moment === item}
                        onClick={() => setMoment(item)}
                      >
                        {item}
                      </ChoiceButton>
                    ))}
                  </div>
                </fieldset>
              ) : null}

              {step === 4 ? (
                <div className="grid gap-7">
                  <fieldset>
                    <legend className="text-lg font-semibold text-white">
                      Possui veículo para entrar na negociação?
                    </legend>
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      {(["Sim", "Não"] as const).map((item) => (
                        <ChoiceButton
                          key={item}
                          selected={hasTrade === item}
                          onClick={() => setHasTrade(item)}
                        >
                          {item}
                        </ChoiceButton>
                      ))}
                    </div>
                  </fieldset>
                  {hasTrade === "Sim" ? (
                    <div className="trade-fields grid gap-3 sm:grid-cols-3">
                      <TextInput label="Marca" value={tradeBrand} onChange={setTradeBrand} placeholder="BMW" />
                      <TextInput label="Modelo" value={tradeModel} onChange={setTradeModel} placeholder="320i" />
                      <TextInput label="Ano" value={tradeYear} onChange={setTradeYear} placeholder="2021" inputMode="numeric" />
                    </div>
                  ) : null}
                </div>
              ) : null}

              {step === 5 ? (
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-red-300">
                    Sua curadoria está pronta.
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
                    Curadoria inicial para o seu perfil
                  </h3>
                  <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {summary.map(([label, value]) => (
                      <div key={label} className="border border-white/10 bg-black/24 p-4">
                        <p className="text-[0.65rem] uppercase tracking-[0.18em] text-zinc-500">
                          {label}
                        </p>
                        <p className="mt-2 text-sm font-semibold text-white">{value}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-7">
                    <h4 className="text-lg font-semibold text-white">
                      Selecionamos algumas possibilidades para começar.
                    </h4>
                    {isApproximate ? (
                      <p className="mt-2 text-sm leading-6 text-zinc-400">
                        Sugestões iniciais para orientar sua conversa com Breno.
                      </p>
                    ) : null}
                    <div className="mt-4 grid gap-4 md:grid-cols-2">
                      {mainRecommendations.map((vehicle, index) => (
                        <RecommendationCard key={vehicle.id} vehicle={vehicle} index={index} />
                      ))}
                    </div>
                    {alternatives.length ? (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {alternatives.map((vehicle) => (
                          <span
                            key={vehicle.id}
                            className="border border-white/10 bg-white/[0.025] px-3 py-2 text-xs text-zinc-300"
                          >
                            {vehicle.brand} {vehicle.model}
                          </span>
                        ))}
                      </div>
                    ) : null}
                  </div>

                  <div className="mt-7 grid gap-3 border-t border-white/10 pt-5 sm:grid-cols-2">
                    <TextInput label="Nome" value={name} onChange={setName} placeholder="Seu nome" />
                    <TextInput label="WhatsApp" value={phone} onChange={setPhone} placeholder="(92) 99999-9999" inputMode="tel" />
                  </div>

                  {error ? <p className="mt-3 text-sm text-red-300">{error}</p> : null}

                  <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
                    <button
                      type="button"
                      onClick={openWhatsapp}
                      className="premium-button cta-motion inline-flex min-h-12 items-center justify-center gap-2 rounded-sm px-6 text-sm font-semibold text-white"
                    >
                      <span>Falar com Breno sobre minha curadoria</span>
                      <span className="cta-arrow" aria-hidden="true">↗</span>
                    </button>
                    <Link
                      href="/veiculos"
                      className="inline-flex min-h-12 items-center justify-center rounded-sm border border-white/15 px-6 text-sm font-semibold text-white transition hover:border-red-500/40 hover:bg-white/[0.05]"
                    >
                      Ver veículos
                    </Link>
                  </div>
                </div>
              ) : null}
            </div>

            <div className="mt-6 flex flex-col-reverse gap-3 border-t border-white/10 pt-5 sm:flex-row sm:justify-between">
              <button
                type="button"
                onClick={() => goToStep(step - 1)}
                disabled={step === 0}
                className="inline-flex min-h-11 items-center justify-center rounded-sm border border-white/12 px-5 text-sm font-semibold text-zinc-300 transition hover:border-white/25 hover:bg-white/[0.04] disabled:cursor-not-allowed disabled:opacity-35"
              >
                Voltar
              </button>
              {step < steps.length - 1 ? (
                <button
                  type="button"
                  onClick={() => goToStep(step + 1)}
                  className="premium-button cta-motion inline-flex min-h-11 items-center justify-center gap-2 rounded-sm px-5 text-sm font-semibold text-white"
                >
                  <span>Continuar</span>
                  <span className="cta-arrow" aria-hidden="true">→</span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => goToStep(0)}
                  className="inline-flex min-h-11 items-center justify-center rounded-sm border border-white/12 px-5 text-sm font-semibold text-zinc-300 transition hover:border-white/25 hover:bg-white/[0.04]"
                >
                  Ajustar respostas
                </button>
              )}
            </div>
          </div>
        ) : null}
      </div>
    </AnimatedSection>
  );
}

function OptionButton({
  selected,
  onClick,
  title,
  text,
}: {
  selected: boolean;
  onClick: () => void;
  title: string;
  text: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`min-h-28 rounded-sm border p-4 text-left transition duration-300 hover:border-white/25 ${
        selected
          ? "border-red-500/55 bg-red-950/20 text-white"
          : "border-white/10 bg-black/20 text-zinc-400"
      }`}
      aria-pressed={selected}
    >
      <span className="block text-sm font-semibold text-white">{title}</span>
      <span className="mt-2 block text-sm leading-6">{text}</span>
    </button>
  );
}

function ChoiceButton({
  selected,
  onClick,
  compact = false,
  children,
}: {
  selected: boolean;
  onClick: () => void;
  compact?: boolean;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-sm border text-left text-sm font-medium transition hover:border-white/25 ${
        compact ? "min-h-10 px-4" : "min-h-12 px-4"
      } ${
        selected
          ? "border-red-500/55 bg-red-950/20 text-white"
          : "border-white/10 bg-black/20 text-zinc-400"
      }`}
      aria-pressed={selected}
    >
      {children}
    </button>
  );
}

function TextInput({
  label,
  value,
  onChange,
  placeholder,
  inputMode,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  inputMode?: InputHTMLAttributes<HTMLInputElement>["inputMode"];
}) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-[0.18em] text-zinc-500">
        {label}
      </span>
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 h-12 w-full rounded-sm border border-white/10 bg-black/35 px-4 text-sm text-white placeholder:text-zinc-600 transition focus:border-red-400/50 focus:bg-black/50"
        placeholder={placeholder}
        inputMode={inputMode}
      />
    </label>
  );
}

function RecommendationCard({ vehicle, index }: { vehicle: Vehicle; index: number }) {
  return (
    <article
      className="curatorship-result-card overflow-hidden border border-white/10 bg-[#08080a]"
      style={{ "--result-delay": `${150 + index * 100}ms` } as CSSProperties}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-zinc-950">
        <PremiumImage
          src={vehicle.image}
          alt={`${vehicle.brand} ${vehicle.model}`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
          style={{ objectPosition: vehicle.imagePosition ?? "50% 50%" }}
        />
      </div>
      <div className="p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-300">
          {vehicle.brand}
        </p>
        <h5 className="mt-2 text-xl font-semibold text-white">{vehicle.model}</h5>
        <p className="mt-2 text-sm leading-6 text-zinc-400">
          {vehicle.recommendation}
        </p>
      </div>
    </article>
  );
}
