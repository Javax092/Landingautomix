"use client";

import { useState } from "react";
import { PremiumImage } from "./PremiumImage";

type VehicleGalleryProps = { images: string[]; name: string; objectPosition?: string };

export function VehicleGallery({ images, name, objectPosition = "50% 50%" }: VehicleGalleryProps) {
  const safeImages = images.length ? images : ["/images/brenoauto.webp"];
  const [active, setActive] = useState(0);

  return (
    <div aria-label={`Galeria do ${name}`}>
      <div className="group relative aspect-[16/10] overflow-hidden border border-white/10 bg-zinc-950 shadow-[0_28px_90px_rgba(0,0,0,.45)] md:aspect-[16/9]">
        <PremiumImage key={safeImages[active]} src={safeImages[active]} alt={`${name} — imagem ${active + 1}`} fill sizes="(max-width: 1024px) 100vw, 65vw" className="object-cover transition duration-700 group-hover:scale-[1.025]" style={{ objectPosition }} fallbackLabel={`Imagem do ${name} em atualização`} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10" />
        <p className="absolute bottom-4 right-4 border border-white/15 bg-black/45 px-3 py-2 text-[0.62rem] uppercase tracking-[0.2em] text-zinc-300 backdrop-blur">{String(active + 1).padStart(2, "0")} / {String(safeImages.length).padStart(2, "0")}</p>
      </div>
      {safeImages.length > 1 ? (
        <div className="mt-3 grid grid-cols-3 gap-3 sm:grid-cols-4">
          {safeImages.map((image, index) => (
            <button key={image} type="button" onClick={() => setActive(index)} aria-label={`Ver imagem ${index + 1} de ${name}`} aria-pressed={active === index} className={`group relative aspect-[3/2] overflow-hidden border bg-zinc-950 transition ${active === index ? "border-red-400/80 ring-1 ring-red-400/25" : "border-white/10 opacity-65 hover:border-white/30 hover:opacity-100"}`}>
              <PremiumImage src={image} alt="" fill sizes="(max-width: 640px) 33vw, 180px" className="object-cover transition duration-500 group-hover:scale-105" style={{ objectPosition }} />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
