"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

export const premiumBlurDataURL =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSczMicgaGVpZ2h0PScyMCc+PGZpbHRlciBpZD0nYic+PGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0nMicvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPScxMDAlJyBoZWlnaHQ9JzEwMCUnIGZpbGw9JyMwNzA3MDknLz48cmVjdCB3aWR0aD0nNjAlJyBoZWlnaHQ9JzEwMCUnIGZpbGw9JyMxYjExMTMnIGZpbHRlcj0ndXJsKCNiKScvPjwvc3ZnPg==";

type PremiumImageProps = ImageProps & { fallbackLabel?: string };

export function PremiumImage({ fallbackLabel = "Imagem em atualização", ...props }: PremiumImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_center,#201719,#070709_68%)] p-6 text-center text-xs uppercase tracking-[0.2em] text-zinc-500">
        {fallbackLabel}
      </div>
    );
  }

  return (
    <Image
      {...props}
      placeholder={props.placeholder ?? "blur"}
      blurDataURL={props.blurDataURL ?? premiumBlurDataURL}
      onError={(event) => {
        setFailed(true);
        props.onError?.(event);
      }}
    />
  );
}
