"use client";

import Image from "next/image";
import { useMemo } from "react";

export function HeroImage() {
  const exists = useMemo(() => true, []);
  // We can't actually check file existence at runtime reliably in Next static hosting,
  // so we just render it; if missing, it will 404 in network. User can replace in /public/image.png.
  return (
    <div className="glass rounded-3xl border-[color:var(--cardBorder)] p-4 shadow-glowStrong">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
        <Image
          src="/image.png"
          alt="Canoly hero reference"
          fill
          priority
          className="object-contain"
        />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(5,7,18,0.00),rgba(5,7,18,0.18),rgba(5,7,18,0.35))]" />
      </div>
      {!exists ? (
        <div className="mt-3 rounded-xl border border-[color:var(--danger)]/50 bg-black/30 p-3 text-sm text-[color:var(--text)]">
          Missing <span className="font-mono">/public/image.png</span> — please upload your reference image.
        </div>
      ) : null}
    </div>
  );
}
