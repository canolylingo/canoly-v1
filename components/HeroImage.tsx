"use client";

import Image from "next/image";

export function HeroImage() {
  return (
    <div className="glass rounded-3xl border-[color:var(--cardBorder)] p-4 shadow-glowStrong">
      {/* Layered hero mockups */}
      <div className="relative h-[560px] w-full overflow-hidden rounded-2xl">
        {/* Laptop */}
        <Image
          src="/hero-laptop.png"
          alt="Laptop preview"
          width={1100}
          height={700}
          priority
          className="absolute left-0 top-20 w-[78%] select-none drop-shadow-[0_40px_90px_rgba(0,0,0,0.65)]"
        />

        {/* Phone */}
        <Image
          src="/hero-phone.png"
          alt="Phone preview"
          width={420}
          height={860}
          className="absolute right-10 top-2 w-[28%] select-none drop-shadow-[0_35px_80px_rgba(0,0,0,0.7)]"
        />

        {/* Subtle cinematic overlay (keeps text readable vibe) */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_circle_at_70%_35%,rgba(80,160,255,0.18),transparent_60%),radial-gradient(800px_circle_at_30%_70%,rgba(184,107,255,0.14),transparent_58%),linear-gradient(180deg,rgba(5,7,18,0.00),rgba(5,7,18,0.18),rgba(5,7,18,0.35))]" />
      </div>

      {/* Optional helper text (doesn't block UI) */}
      <div className="mt-3 text-xs text-white/50">
        Tip: Images must exist in <span className="font-mono">/public</span> as{" "}
        <span className="font-mono">hero-laptop.png</span> and{" "}
        <span className="font-mono">hero-phone.png</span>.
      </div>
    </div>
  );
}
