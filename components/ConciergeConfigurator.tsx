"use client";

import Image from "next/image";
import { useMemo, useRef, useState } from "react";
import { BackToHomeButton } from "./BackToHomeButton";
import { buildConciergeMessage, buildWhatsappUrl } from "@/lib/whatsapp";
import { AnimatedSection } from "./AnimatedSection";
import { PremiumImage } from "./PremiumImage";

const profiles = [
  {
    title: "Executivo Discreto",
    text: "Presença sem excesso. Conforto, tecnologia e elegância no dia a dia.",
    mark: "ED",
  },
  {
    title: "Performance & Status",
    text: "Design forte, motor marcante e imagem a altura da sua conquista.",
    mark: "PS",
  },
  {
    title: "Familia Premium",
    text: "Espaço, segurança e conforto para uma rotina mais elevada.",
    mark: "FP",
  },
  {
    title: "Aventura Sofisticada",
    text: "Força, imponencia e liberdade para ir alem da cidade.",
    mark: "AS",
  },
];

type ProfileMark = (typeof profiles)[number]["mark"];

const profileRecommendations: Record<
  ProfileMark,
  {
    description: string;
    priceRange: string;
    priority: string;
    vehicles: {
      brand: string;
      model: string;
      year: string;
      price?: string;
      tags: string[];
      image?: {
        src: string;
        alt: string;
        objectPosition?: string;
      };
      curatorNote?: string;
    }[];
  }
> = {
  ED: {
    description:
      "Elegancia sem exageros. Conforto, tecnologia e imagem profissional.",
    priceRange: "R$150 mil a R$350 mil",
    priority: "Conforto e imagem profissional",
    vehicles: [
      {
        brand: "Mercedes-Benz",
        model: "C200 AMG",
        year: "2024",
        tags: ["Imagem profissional", "Tecnologia alema", "Elegancia"],
        image: {
          src: "/images/mercedez3.webp",
          alt: "Mercedes-Benz C200 AMG em curadoria premium",
        },
        curatorNote:
          "A escolha mais alinhada para presenca executiva sem excesso.",
      },
      {
        brand: "Volvo",
        model: "S60 Inscription",
        year: "2019/2020",
        tags: ["Conforto escandinavo", "Elegancia discreta", "Sedan premium"],
        curatorNote: "Para quem valoriza conforto, seguranca e discricao.",
      },
      {
        brand: "Toyota",
        model: "Corolla Altis",
        year: "2021/2022",
        tags: ["Confiabilidade", "Sofisticacao discreta", "Baixo risco"],
      },
      {
        brand: "Mercedes-Benz",
        model: "GLC 300",
        year: "2025/2026",
        tags: ["SUV executivo", "Alto padrao", "Conforto premium"],
      },
    ],
  },
  PS: {
    description:
      "Para quem gosta de acelerar, impressionar e celebrar conquistas.",
    priceRange: "R$300 mil+",
    priority: "Performance e exclusividade",
    vehicles: [
      {
        brand: "BMW",
        model: "M3 Competition",
        year: "2022",
        tags: ["Alta performance", "Motorsport", "Status"],
        image: {
          src: "/images/bmw4.webp",
          alt: "BMW em destaque na curadoria de performance",
        },
        curatorNote:
          "Entrega impacto, dirigibilidade e assinatura esportiva premium.",
      },
      {
        brand: "Chevrolet",
        model: "Corvette V8",
        year: "2024/2025",
        tags: ["Icone americano", "V8", "Exclusividade"],
        curatorNote: "Uma recomendacao para quem busca algo raro e memoravel.",
      },
      {
        brand: "Mercedes-AMG",
        model: "CLA 35",
        year: "2024/2025",
        tags: ["AMG", "Esportivo premium", "Uso diario"],
      },
      {
        brand: "Porsche",
        model: "Panamera S",
        year: "2013/2014",
        tags: ["Luxo", "Performance", "Presenca"],
      },
    ],
  },
  FP: {
    description:
      "Espaco, seguranca, conforto e tecnologia para quem transporta o que realmente importa.",
    priceRange: "R$150 mil a R$250 mil",
    priority: "Procedencia",
    vehicles: [
      {
        brand: "Toyota",
        model: "SW4 Platinum",
        year: "2025/2026",
        tags: ["7 lugares", "Seguranca Toyota", "Viagens em familia"],
        image: {
          src: "/images/sw4.webp",
          alt: "Toyota SW4 em curadoria familiar premium",
          objectPosition: "50% 44%",
        },
        curatorNote: "Prioriza conforto familiar, robustez e liquidez.",
      },
      {
        brand: "Volvo",
        model: "XC60 T8",
        year: "2025/2026",
        tags: ["SUV premium", "Hibrido", "Conforto executivo"],
        curatorNote:
          "Um SUV para familia com pegada mais tecnologica e refinada.",
      },
      {
        brand: "Jeep",
        model: "Commander Overland TD",
        year: "2024/2025",
        tags: ["SUV familiar", "Espacoso", "Custo-beneficio premium"],
      },
      {
        brand: "Toyota",
        model: "SW4 Diamond",
        year: "2026",
        tags: ["Topo de linha", "Robustez", "Presenca"],
      },
    ],
  },
  AS: {
    description: "Robustez, imponencia e liberdade para qualquer destino.",
    priceRange: "R$220 mil a R$500 mil+",
    priority: "Forca, altura e presenca",
    vehicles: [
      {
        brand: "RAM",
        model: "1500 Laramie Night Edition",
        year: "2025",
        tags: ["Presenca absoluta", "Luxo", "Forca"],
        image: {
          src: "/images/ram150.webp",
          alt: "RAM 1500 Laramie Night Edition em destaque",
          objectPosition: "50% 54%",
        },
        curatorNote:
          "A recomendacao para maxima presenca e conforto fora da rotina.",
      },
      {
        brand: "Toyota",
        model: "Hilux SRX Plus",
        year: "2025/2026",
        tags: ["Confiabilidade", "Robustez", "Pronta para tudo"],
        image: {
          src: "/images/hillux.webp",
          alt: "Toyota Hilux SRX Plus em curadoria de aventura sofisticada",
        },
        curatorNote:
          "Robusta, desejada e facil de defender como compra inteligente.",
      },
      {
        brand: "Land Rover",
        model: "Velar HSE",
        year: "2023/2024",
        tags: ["SUV premium", "Sofisticacao", "Conforto"],
      },
      {
        brand: "Ford",
        model: "Ranger Raptor",
        year: "2026",
        tags: ["Off-road extremo", "Tecnologia Ford", "Imponencia"],
      },
    ],
  },
};

const budgets = [
  "R$150 mil a R$250 mil",
  "R$250 mil a R$400 mil",
  "Acima de R$400 mil",
  "Prefiro conversar",
];

const priorities = [
  "Procedencia",
  "Baixa quilometragem",
  "Performance",
  "Conforto interno",
  "Presenca",
  "Revenda futura",
  "Aceitar usado na troca",
];

export function ConciergeConfigurator() {
  const [step, setStep] = useState(0);
  const [profile, setProfile] = useState(profiles[0].title);
  const [budget, setBudget] = useState(budgets[0]);
  const [priority, setPriority] = useState(priorities[0]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const recommendationRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const completionRef = useRef<HTMLDivElement>(null);

  const whatsappUrl = useMemo(() => {
    return buildWhatsappUrl(
      buildConciergeMessage({
        name: name.trim() || "[nome]",
        phone: phone.trim() || "[whatsapp]",
        profile,
        budget,
        priority,
      }),
    );
  }, [budget, name, phone, priority, profile]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const digits = phone.replace(/\D/g, "");
    if (!name.trim()) {
      setError("Informe seu nome para Breno identificar sua curadoria.");
      return;
    }

    if (digits.length < 10) {
      setError("Informe um WhatsApp valido com DDD.");
      return;
    }

    setError("");
    setSubmitted(true);
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    window.setTimeout(() => {
      completionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 120);
  }

  function scrollToForm() {
    window.setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 60);
  }

  function handleProfileSelect(nextProfile: string) {
    setProfile(nextProfile);
    window.setTimeout(() => {
      recommendationRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 80);
  }

  function handleNextStep() {
    setStep((current) => Math.min(3, current + 1));
    scrollToForm();
  }

  function handlePreviousStep() {
    setStep((current) => Math.max(0, current - 1));
    scrollToForm();
  }

  function handleResetMatch() {
    setStep(0);
    setProfile(profiles[0].title);
    setBudget(budgets[0]);
    setPriority(priorities[0]);
    setSubmitted(false);
    setError("");
    scrollToForm();
  }

  const progress = ((step + 1) / 4) * 100;
  const selectedProfile =
    profiles.find((item) => item.title === profile) ?? profiles[0];
  const selectedRecommendations =
    profileRecommendations[selectedProfile.mark as ProfileMark];
  const highlightedVehicles = selectedRecommendations.vehicles.slice(0, 2);
  const alternativeVehicles = selectedRecommendations.vehicles.slice(2);
  const summaries = [
    { label: "Perfil", value: profile },
    { label: "Faixa", value: budget },
    { label: "Prioridade", value: priority },
  ];

  return (
    <AnimatedSection
      id="configurador"
      className="section-band px-5 py-12 md:px-8 md:py-16"
    >
      <PremiumImage src="/images/x6interior.webp" alt="Interior premium com volante e painel digital" fill sizes="100vw" className="premium-section-image -z-20 object-cover" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(110deg,rgba(5,5,7,.97),rgba(7,7,9,.87),rgba(34,10,12,.75))]" />
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-red-400">
            Concierge automotivo
          </p>
          <h2 className="mt-4 text-2xl font-semibold text-white md:text-4xl">
            Inicie sua curadoria personalizada em menos de 1 minuto.
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-zinc-400 md:text-base">
            Compartilhe suas preferencias e receba uma pre-selecao construida a
            partir do seu perfil, momento e objetivo de compra.
          </p>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="premium-panel mx-auto max-w-4xl p-4 md:p-6"
        >
          <div className="flex flex-col gap-4 border-b border-white/10 pb-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-red-300">
                {step + 1} de 4
              </p>
              <div className="mt-3 h-1.5 w-48 overflow-hidden bg-white/10">
                <div
                  className="h-full bg-gradient-to-r from-red-900 via-red-500 to-red-300 transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
            <div className="grid gap-2 text-xs text-zinc-500 sm:grid-cols-3 md:min-w-[440px]">
              {summaries.map((item, index) => (
                <div
                  key={item.label}
                  className={`border px-3 py-2 ${
                    index < step
                      ? "border-white/12 bg-black/25 text-zinc-300"
                      : "border-white/10 bg-black/10"
                  }`}
                >
                  <span className="block uppercase tracking-[0.18em]">
                    {item.label}
                  </span>
                  <span className="mt-1 block truncate text-white/80">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div
            className="concierge-step mt-5 min-h-[300px] md:min-h-[270px]"
            key={step}
          >
            {step === 0 ? (
              <fieldset>
                <legend className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-300">
                  Qual perfil representa sua proxima escolha?
                </legend>
                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  {profiles.map((item) => {
                    const isSelected = item.title === profile;
                    return (
                      <button
                        key={item.title}
                        type="button"
                        onClick={() => handleProfileSelect(item.title)}
                        className={`min-h-28 border p-4 text-left transition duration-300 hover:scale-[1.01] ${
                          isSelected
                            ? "border-red-500/40 bg-red-950/20"
                            : "border-white/10 bg-black/20 hover:border-white/25 hover:bg-white/[0.035]"
                        }`}
                      >
                        <span className="inline-flex h-9 w-9 items-center justify-center border border-red-500/25 text-xs font-semibold text-red-400">
                          {item.mark}
                        </span>
                        <span className="mt-4 block text-base font-semibold text-white">
                          {item.title}
                        </span>
                        <span className="mt-2 block text-sm leading-6 text-zinc-400">
                          {item.text}
                        </span>
                      </button>
                    );
                  })}
                </div>
                <div
                  ref={recommendationRef}
                  key={selectedProfile.mark}
                  className="mt-6 border border-white/10 bg-black/25 p-4 transition duration-500 md:p-5"
                >
                  <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                    <div className="max-w-2xl">
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-red-300">
                        Curadoria indicada
                      </p>
                      <h3 className="mt-3 text-xl font-semibold text-white md:text-2xl">
                        {selectedProfile.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-zinc-400">
                        {selectedRecommendations.description}
                      </p>
                    </div>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="premium-button inline-flex min-h-11 items-center justify-center rounded-md px-5 text-sm font-semibold text-white"
                    >
                      <span>Falar com Breno</span>
                    </a>
                  </div>

                  <div className="mt-5 grid gap-3 md:grid-cols-3">
                    {[
                      {
                        label: "Faixa de preco",
                        value: selectedRecommendations.priceRange,
                      },
                      {
                        label: "Prioridade",
                        value: selectedRecommendations.priority,
                      },
                      {
                        label: "Selecao",
                        value: "Os 2 modelos que mais combinam com voce",
                      },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="border border-white/10 bg-white/[0.025] px-4 py-3"
                      >
                        <span className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-zinc-500">
                          {item.label}
                        </span>
                        <span className="mt-1 block text-sm font-semibold text-white">
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.26em] text-red-300">
                          Curadoria exclusiva para seu perfil
                        </p>
                        <h4 className="mt-2 text-lg font-semibold text-white">
                          Os 2 modelos que mais combinam com voce
                        </h4>
                      </div>
                      <p className="max-w-sm text-sm leading-6 text-zinc-500">
                        Recomendacoes priorizadas por imagem, perfil de uso e
                        potencial de compra consultiva.
                      </p>
                    </div>

                    <div className="mt-4 grid gap-4 md:grid-cols-2">
                      {highlightedVehicles.map((vehicle, index) => {
                        const brandInitials = vehicle.brand
                          .split(/\s|-/)
                          .filter(Boolean)
                          .map((word) => word[0])
                          .join("")
                          .slice(0, 3)
                          .toUpperCase();

                        return (
                          <article
                            key={`${selectedProfile.mark}-highlight-${vehicle.brand}-${vehicle.model}`}
                            className="group overflow-hidden border border-white/10 bg-[#08080a] shadow-[0_24px_70px_rgba(0,0,0,0.34)] transition duration-300 hover:-translate-y-1 hover:border-red-500/35 hover:bg-white/[0.035]"
                          >
                            <div className="relative min-h-[260px] overflow-hidden border-b border-white/10 bg-[linear-gradient(145deg,#17171a,#050505_58%,#260707)] md:min-h-[320px]">
                              {vehicle.image ? (
                                <Image
                                  src={vehicle.image.src}
                                  alt={vehicle.image.alt}
                                  fill
                                  sizes="(max-width: 768px) 100vw, 50vw"
                                  className="object-cover transition duration-700 group-hover:scale-[1.025]"
                                  style={{
                                    objectPosition:
                                      vehicle.image.objectPosition ?? "50% 50%",
                                  }}
                                />
                              ) : (
                                <div className="relative flex min-h-[260px] flex-col justify-between overflow-hidden p-5 md:min-h-[320px]">
                                  <div className="absolute inset-0 bg-[linear-gradient(145deg,#202024,#050505_58%,#3b0a0a)]" />
                                  <div className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(135deg,rgba(255,255,255,.14)_1px,transparent_1px)] [background-size:12px_12px]" />
                                  <p className="relative text-5xl font-semibold uppercase tracking-[0.18em] text-white/80">
                                    {brandInitials}
                                  </p>
                                  <div className="relative">
                                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-red-300/80">
                                      {vehicle.brand}
                                    </p>
                                    <p className="mt-2 text-2xl font-semibold text-white">
                                      {vehicle.model}
                                    </p>
                                  </div>
                                </div>
                              )}
                              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/55 to-transparent p-4">
                                <div className="flex items-center justify-between gap-3">
                                  <span className="border border-red-400/35 bg-red-950/50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-red-100">
                                    Destaque {index + 1}
                                  </span>
                                  <span className="border border-white/15 bg-black/45 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-zinc-200">
                                    {vehicle.image
                                      ? "Foto real"
                                      : "Fallback premium"}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="flex min-h-72 flex-col p-5">
                              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-red-300">
                                {vehicle.brand}
                              </p>
                              <h5 className="mt-2 text-2xl font-semibold leading-tight text-white">
                                {vehicle.model}
                              </h5>
                              <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-zinc-500">
                                <span>{vehicle.year}</span>
                                {vehicle.price ? (
                                  <>
                                    <span className="h-1 w-1 rounded-full bg-red-400/70" />
                                    <span className="font-semibold text-zinc-300">
                                      {vehicle.price}
                                    </span>
                                  </>
                                ) : null}
                              </div>
                              {vehicle.curatorNote ? (
                                <p className="mt-4 text-sm leading-6 text-zinc-400">
                                  {vehicle.curatorNote}
                                </p>
                              ) : null}
                              <div className="mt-5 flex flex-wrap gap-2">
                                {vehicle.tags.map((tag) => (
                                  <span
                                    key={tag}
                                    className="border border-white/10 bg-white/[0.035] px-2.5 py-1 text-[11px] leading-none text-zinc-300"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                              <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="premium-button mt-auto inline-flex min-h-12 items-center justify-center rounded-md px-5 text-sm font-semibold text-white"
                              >
                                <span>Quero analisar este modelo</span>
                              </a>
                            </div>
                          </article>
                        );
                      })}
                    </div>
                  </div>

                  <div className="mt-7 border-t border-white/10 pt-5">
                    <p className="text-sm font-semibold text-white">
                      Outras opcoes para o seu perfil
                    </p>
                    <div className="mt-3 grid gap-2 sm:grid-cols-2">
                      {alternativeVehicles.map((vehicle) => {
                        const brandInitials = vehicle.brand
                          .split(/\s|-/)
                          .filter(Boolean)
                          .map((word) => word[0])
                          .join("")
                          .slice(0, 3)
                          .toUpperCase();

                        return (
                          <article
                            key={`${selectedProfile.mark}-alternative-${vehicle.brand}-${vehicle.model}`}
                            className="group flex items-center gap-3 border border-white/10 bg-white/[0.025] p-3 transition hover:border-red-500/30 hover:bg-white/[0.045]"
                          >
                            <div className="flex h-14 w-14 shrink-0 items-center justify-center border border-white/10 bg-[linear-gradient(145deg,#17171a,#050505_58%,#260707)] text-sm font-semibold uppercase tracking-[0.12em] text-white/75">
                              {brandInitials}
                            </div>
                            <div className="min-w-0 flex-1">
                              <p className="truncate text-sm font-semibold leading-snug text-white">
                                {vehicle.brand} {vehicle.model}
                              </p>
                              <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-zinc-500">
                                <span>{vehicle.year}</span>
                                {vehicle.price ? (
                                  <>
                                    <span className="h-1 w-1 rounded-full bg-red-400/70" />
                                    <span className="font-semibold text-zinc-300">
                                      {vehicle.price}
                                    </span>
                                  </>
                                ) : null}
                              </div>
                            </div>
                          </article>
                        );
                      })}
                    </div>
                  </div>

                  <div className="mt-6 flex flex-col gap-4 border border-red-500/20 bg-red-950/10 p-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-base font-semibold text-white">
                        Nao encontrou o modelo ideal?
                      </p>
                      <p className="mt-1 text-sm leading-6 text-zinc-400">
                        Breno pode montar uma busca personalizada com base no
                        seu perfil e momento de compra.
                      </p>
                    </div>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="premium-button inline-flex min-h-11 shrink-0 items-center justify-center rounded-md px-5 text-sm font-semibold text-white"
                    >
                      <span>Receber curadoria personalizada</span>
                    </a>
                  </div>
                  <div className="mt-5 flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row sm:flex-wrap">
                    <a
                      href="#estoque"
                      className="inline-flex min-h-11 items-center justify-center rounded-md border border-white/15 px-5 text-sm font-semibold text-white transition hover:border-red-500/40 hover:bg-white/[0.06]"
                    >
                      Ver outros veículos
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        setStep(0);
                        scrollToForm();
                      }}
                      className="inline-flex min-h-11 items-center justify-center rounded-md border border-white/15 px-5 text-sm font-semibold text-white transition hover:border-red-500/40 hover:bg-white/[0.06]"
                    >
                      Alterar perfil
                    </button>
                    <button
                      type="button"
                      onClick={handleResetMatch}
                      className="inline-flex min-h-11 items-center justify-center rounded-md border border-white/15 px-5 text-sm font-semibold text-white transition hover:border-red-500/40 hover:bg-white/[0.06]"
                    >
                      Refazer Match
                    </button>
                    <BackToHomeButton />
                  </div>
                </div>
              </fieldset>
            ) : null}

            {step === 1 ? (
              <fieldset>
                <legend className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-300">
                  Qual faixa de investimento faz sentido agora?
                </legend>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {budgets.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setBudget(item)}
                      className={`min-h-14 border px-4 text-left text-sm font-medium transition duration-300 hover:scale-[1.01] ${
                        item === budget
                          ? "border-red-500/40 bg-red-950/20 text-white"
                          : "border-white/10 bg-black/20 text-zinc-400 hover:border-white/25"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </fieldset>
            ) : null}

            {step === 2 ? (
              <fieldset>
                <legend className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-300">
                  O que pesa mais na sua decisao?
                </legend>
                <div className="mt-4 flex flex-wrap gap-2">
                  {priorities.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setPriority(item)}
                      className={`min-h-10 border px-4 text-sm transition ${
                        item === priority
                          ? "border-red-500/40 bg-red-950/20 text-white"
                          : "border-white/10 bg-black/20 text-zinc-400 hover:border-white/25"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </fieldset>
            ) : null}

            {step === 3 ? (
              <fieldset>
                <legend className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-300">
                  Receber curadoria
                </legend>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <label className="block">
                    <span className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                      Nome
                    </span>
                    <input
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      className="mt-2 h-12 w-full border border-white/10 bg-black/30 px-4 text-sm text-white placeholder:text-zinc-600"
                      placeholder="Seu nome"
                    />
                  </label>
                  <label className="block">
                    <span className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                      WhatsApp
                    </span>
                    <input
                      value={phone}
                      onChange={(event) => setPhone(event.target.value)}
                      className="mt-2 h-12 w-full border border-white/10 bg-black/30 px-4 text-sm text-white placeholder:text-zinc-600"
                      inputMode="tel"
                      placeholder="(92) 99999-9999"
                    />
                  </label>
                </div>
                {error ? (
                  <p className="mt-3 text-sm text-red-300">{error}</p>
                ) : null}
                {submitted ? (
                  <div
                    ref={completionRef}
                    className="mt-5 border border-red-500/25 bg-red-950/15 p-4"
                  >
                    <p className="text-sm font-semibold text-white">
                      Curadoria enviada para o WhatsApp.
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
                        href="#lista-vip"
                        className="inline-flex min-h-11 items-center justify-center rounded-md border border-white/15 px-5 text-sm font-semibold text-white transition hover:border-red-500/40 hover:bg-white/[0.06]"
                      >
                        Receber Curadoria VIP
                      </a>
                    </div>
                  </div>
                ) : null}
              </fieldset>
            ) : null}
          </div>

          <div className="mt-5 flex flex-col-reverse gap-3 border-t border-white/10 pt-5 sm:flex-row sm:justify-between">
            <button
              type="button"
              onClick={handlePreviousStep}
              disabled={step === 0}
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-white/12 px-5 text-sm font-semibold text-zinc-300 transition hover:border-white/25 hover:bg-white/[0.04] disabled:cursor-not-allowed disabled:opacity-35"
            >
              Voltar
            </button>
            {step < 3 ? (
              <button
                type="button"
                onClick={handleNextStep}
                className="premium-button inline-flex min-h-11 items-center justify-center rounded-md px-5 text-sm font-semibold text-white"
              >
                <span>Continuar</span>
              </button>
            ) : (
              <button
                type="submit"
                className="premium-button inline-flex min-h-11 items-center justify-center rounded-md px-5 text-sm font-semibold text-white"
              >
                <span>Receber selecao personalizada</span>
              </button>
            )}
          </div>
        </form>
      </div>
    </AnimatedSection>
  );
}
