"use client";

import Image from "next/image";

export function HeroImage() {
  return (
    <div className="relative w-full h-[640px] flex items-center justify-center">
      {/* Local glow halo behind the hero image */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div
          className="
            h-[520px] w-[820px]
            rounded-[999px]
            blur-[70px]
            opacity-90
            bg-[radial-gradient(circle_at_50%_50%,rgba(124,58,237,0.55),transparent_60%)]
          "
        />
        <div
          className="
            absolute
            h-[420px] w-[720px]
            rounded-[999px]
            blur-[70px]
            opacity-80
            bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.40),transparent_62%)]
          "
        />
      </div>

      {/* Hero image (single PNG) */}
      <Image
        src="/laptop-phone.png"
        alt="Canoly hero preview"
        fill
        priority
        className="object-contain select-none drop-shadow-[0_50px_140px_rgba(0,0,0,0.65)]"
      />

      {/* Subtle vignette to blend edges */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_60%_45%,rgba(255,255,255,0.06),transparent_55%)]" />
    </div>
  );
}
