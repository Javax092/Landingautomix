"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { buildVehicleInterestMessage, buildWhatsappUrl } from "@/lib/whatsapp";
import type { Vehicle } from "@/lib/vehicles";
import { GlareHover } from "./motion-primitives";

type VehicleCardProps = {
  vehicle: Vehicle;
  featured?: boolean;
};

const statusLabels: Record<Vehicle["status"], string> = {
  available: "Disponível",
  reserved: "Reservado",
  sold: "Vendido",
  "coming-soon": "Em breve",
};

export function VehicleCard({ vehicle, featured = false }: VehicleCardProps) {
  const [imageFailed, setImageFailed] = useState(false);
  const fullName = `${vehicle.brand} ${vehicle.model}`;
  const whatsappUrl = buildWhatsappUrl(
    buildVehicleInterestMessage(vehicle.brand, vehicle.model),
  );

  const cardClass =
    "vehicle-card flex h-full flex-col overflow-hidden rounded-sm border border-white/10 bg-white/[0.025]";
  const mediaClass = featured
    ? "vehicle-media relative aspect-[16/10] min-h-[280px] overflow-hidden bg-zinc-950 sm:aspect-[16/8] lg:min-h-[560px]"
    : "vehicle-media relative aspect-[4/3] overflow-hidden bg-zinc-950 sm:aspect-[1.35/1]";

  return (
    <article className={cardClass}>
      <div className={mediaClass}>
        {!imageFailed ? (
          <GlareHover className="absolute inset-0">
            <Image
              src={vehicle.image}
              alt={fullName}
              fill
              sizes={
                featured
                  ? "(max-width: 1024px) 100vw, 50vw"
                  : "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              }
              className="vehicle-photo object-cover transition duration-700"
              style={{ objectPosition: vehicle.imagePosition ?? "50% 50%" }}
              onError={() => setImageFailed(true)}
            />
          </GlareHover>
        ) : (
          <div className="flex h-full items-end justify-center bg-[radial-gradient(circle_at_50%_35%,#241719,#070709_70%)] p-8">
            <div className="w-full max-w-xs border-t border-white/20 bg-black/20 p-5 text-center">
              <p className="text-xs uppercase tracking-[0.24em] text-red-300">
                Imagem em atualização
              </p>
              <p className="mt-2 text-lg font-semibold text-white">{fullName}</p>
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4 md:p-5">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
              {vehicle.brand}
            </p>
            <h3 className={`${featured ? "text-2xl md:text-3xl" : "text-xl"} mt-2 font-semibold leading-tight text-white`}>
              {vehicle.model}
            </h3>
          </div>
          <p className="shrink-0 border border-white/10 px-2.5 py-1 text-[11px] font-medium text-zinc-300">
            {statusLabels[vehicle.status]}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-zinc-400">
          {vehicle.year ? <span>{vehicle.year}</span> : null}
          {vehicle.mileage ? (
            <>
              <span className="h-1 w-1 rounded-full bg-zinc-600" />
              <span>{vehicle.mileage}</span>
            </>
          ) : null}
          {vehicle.price ? (
            <>
              <span className="h-1 w-1 rounded-full bg-zinc-600" />
              <span className="font-semibold text-white">{vehicle.price}</span>
            </>
          ) : null}
        </div>

        <p className={`${featured ? "max-w-xl" : ""} mt-4 text-sm leading-6 text-zinc-400`}>
          {vehicle.recommendation}
        </p>

        <div className="mt-4 border-t border-white/10 pt-4">
          <p className="text-xs text-zinc-500">{vehicle.category}</p>
        </div>

        <div className="mt-auto grid gap-3 pt-5 sm:grid-cols-2">
          <Link
            href={`/veiculos/${vehicle.slug}`}
            className="cta-motion inline-flex min-h-11 items-center justify-center gap-2 rounded-sm border border-white/15 px-4 text-sm font-semibold text-white transition hover:border-red-500/40 hover:bg-white/[0.05]"
          >
            <span>Ver detalhes</span>
            <span className="cta-arrow" aria-hidden="true">→</span>
          </Link>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="premium-button cta-motion inline-flex min-h-11 items-center justify-center gap-2 rounded-sm px-4 text-sm font-semibold text-white"
          >
            <span>Solicitar proposta</span>
            <span className="cta-arrow" aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </article>
  );
}
