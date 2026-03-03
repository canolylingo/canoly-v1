"use client";

import Image from "next/image";

export function HeroImage() {
  return (
    <div className="relative w-full h-[680px] overflow-hidden">
      {/* ===== Background stars (soft) ===== */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-70"
          style={{
            backgroundImage: `
              radial-gradient(1.6px 1.6px at 12% 18%, rgba(255,255,255,0.95), transparent 55%),
              radial-gradient(1.4px 1.4px at 22% 42%, rgba(56,189,248,0.95), transparent 55%),
              radial-gradient(1.7px 1.7px at 34% 28%, rgba(168,85,247,0.95), transparent 55%),
              radial-gradient(1.5px 1.5px at 48% 20%, rgba(236,72,153,0.85), transparent 55%),
              radial-gradient(1.8px 1.8px at 62% 32%, rgba(255,255,255,0.95), transparent 55%),
              radial-gradient(1.5px 1.5px at 76% 22%, rgba(56,189,248,0.85), transparent 55%),
              radial-gradient(1.7px 1.7px at 86% 36%, rgba(168,85,247,0.85), transparent 55%),
              radial-gradient(1.6px 1.6px at 18% 74%, rgba(255,255,255,0.85), transparent 55%),
              radial-gradient(1.4px 1.4px at 38% 82%, rgba(56,189,248,0.75), transparent 55%),
              radial-gradient(1.6px 1.6px at 58% 78%, rgba(236,72,153,0.70), transparent 55%),
              radial-gradient(1.8px 1.8px at 74% 86%, rgba(255,255,255,0.85), transparent 55%),
              radial-gradient(1.5px 1.5px at 90% 74%, rgba(168,85,247,0.70), transparent 55%)
            `,
          }}
        />
      </div>

      {/* ===== Centered hero group (THIS REMOVES THE BIG RECTANGLE) ===== */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* This wrapper has NO background, NO glass, only positions glow + image */}
        <div className="relative h-[520px] w-[900px]">
          {/* === Glow locked to the image area === */}
          <div className="pointer-events-none absolute inset-0">
            {/* purple core */}
            <div className="absolute left-[52%] top-[52%] h-[520px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px] opacity-95
              bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.70),transparent_62%)]" />
            {/* cyan halo */}
            <div className="absolute left-[58%] top-[44%] h-[520px] w-[860px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[130px] opacity-85
              bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.60),transparent_66%)]" />
            {/* pink pop */}
            <div className="absolute left-[46%] top-[58%] h-[520px] w-[860px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[135px] opacity-80
              bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.55),transparent_68%)]" />
            {/* vignette so text area stays clean */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_50%,rgba(0,0,0,0.00),rgba(5,10,30,0.35)_55%,rgba(5,10,30,0.55)_100%)]" />
          </div>

          {/* === The actual image === */}
          <Image
            src="/laptop-phone.png"
            alt="Canoly hero preview"
            fill
            priority
            className="object-contain select-none drop-shadow-[0_90px_240px_rgba(0,0,0,0.75)]"
          />
        </div>
      </div>
    </div>
  );
}
