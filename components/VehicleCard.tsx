"use client";

import Link from "next/link";
import { useState } from "react";
import { buildVehicleInterestMessage, buildWhatsappUrl } from "@/lib/whatsapp";
import type { Vehicle } from "@/lib/vehicles";

type VehicleCardProps = {
  vehicle: Vehicle;
  featured?: boolean;
};

export function VehicleCard({ vehicle, featured = false }: VehicleCardProps) {
  const [imageFailed, setImageFailed] = useState(false);
  const fullName = `${vehicle.brand} ${vehicle.model}`;
  const whatsappUrl = buildWhatsappUrl(
    buildVehicleInterestMessage(vehicle.brand, vehicle.model),
  );

  const cardClass = featured
    ? "vehicle-card flex h-full flex-col overflow-hidden border border-white/10 bg-white/[0.035] shadow-premium backdrop-blur lg:col-span-2"
    : "vehicle-card flex h-full flex-col overflow-hidden border border-white/10 bg-white/[0.035] shadow-premium backdrop-blur";
  const mediaClass = featured
    ? "vehicle-media relative aspect-[16/7] min-h-[280px] overflow-hidden bg-gradient-to-br from-black via-zinc-950 to-red-950/30"
    : "vehicle-media relative aspect-[1.35/1] overflow-hidden bg-gradient-to-br from-black via-zinc-950 to-red-950/30";

  return (
    <article className={cardClass}>
      <div className={mediaClass}>
        {!imageFailed ? (
          <img
            src={vehicle.image}
            alt={fullName}
            className="h-full w-full object-cover"
            onError={() => setImageFailed(true)}
          />
        ) : (
          <div className="flex h-full items-end justify-center p-8">
            <div className="w-full max-w-xs border border-white/12 bg-black/30 p-5">
              <p className="text-xs uppercase tracking-[0.24em] text-red-300">
                Imagem local
              </p>
              <p className="mt-2 text-lg font-semibold text-white">{fullName}</p>
              <p className="mt-1 text-sm text-zinc-500">{vehicle.image}</p>
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
        <div className="absolute left-4 top-4 border border-red-500/25 bg-black/45 px-3 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-red-300 backdrop-blur-md">
          {vehicle.profile}
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <p className="text-xs uppercase tracking-[0.18em] text-zinc-300">
            {vehicle.profile}
          </p>
          <h3 className={`${featured ? "text-2xl md:text-3xl" : "text-xl"} mt-2 font-semibold leading-tight text-white`}>
            {fullName}
          </h3>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4 md:p-5">
        <div className="flex items-start justify-between gap-4">
          <p className="text-sm leading-6 text-zinc-400">{vehicle.recommendation}</p>
          <p className="hidden shrink-0 text-right text-xs font-semibold uppercase tracking-[0.18em] text-red-300 sm:block">
            Consultoria premium
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {vehicle.highlights.slice(0, featured ? 3 : 2).map((highlight) => (
            <span
              key={highlight}
              className="border border-white/10 bg-black/20 px-3 py-1 text-xs text-zinc-400"
            >
              {highlight}
            </span>
          ))}
        </div>

        <div className="mt-auto grid gap-3 pt-5 sm:grid-cols-2">
          <Link
            href={`/veiculos/${vehicle.slug}`}
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-white/15 px-4 text-sm font-semibold text-white transition hover:border-red-500/40 hover:bg-white/[0.05]"
          >
            Ver detalhes
          </Link>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="premium-button inline-flex min-h-11 items-center justify-center rounded-md px-4 text-sm font-semibold text-white"
          >
            <span>Solicitar consultoria</span>
          </a>
        </div>
      </div>
    </article>
  );
}
