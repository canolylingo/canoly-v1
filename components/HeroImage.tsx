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
   <div className="relative h-[560px] w-full overflow-hidden rounded-2xl">

  {/* Laptop */}
  <Image
    src="/hero-laptop.png"
    alt="Laptop preview"
    width={900}
    height={600}
    className="absolute left-0 top-16 w-[78%] drop-shadow-[0_40px_80px_rgba(0,0,0,0.6)]"
    priority
  />

  {/* Phone */}
  <Image
    src="/hero-phone.png"
    alt="Phone preview"
    width={300}
    height={600}
    className="absolute right-10 top-0 w-[28%] drop-shadow-[0_30px_60px_rgba(0,0,0,0.7)]"
  />

</div>
  );
}
