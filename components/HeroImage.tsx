"use client";

import Image from "next/image";

export function HeroImage() {
  return (
    <div className="relative w-full h-[680px] overflow-hidden">
      {/* ============ BIG AURA (purple / blue / pink) ============ */}
      <div className="pointer-events-none absolute inset-0">
        {/* Wide nebula wash */}
        <div className="absolute left-1/2 top-[44%] h-[760px] w-[1200px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[150px] opacity-95
          bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.60),transparent_62%)]" />

        {/* Cyan halo */}
        <div className="absolute left-[58%] top-[40%] h-[680px] w-[1050px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[140px] opacity-85
          bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.55),transparent_64%)]" />

        {/* Pink/magenta pop (this is what you’re missing) */}
        <div className="absolute left-[48%] top-[52%] h-[560px] w-[980px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[130px] opacity-80
          bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.48),transparent_66%)]" />

        {/* Tight core glow */}
        <div className="absolute left-[55%] top-[48%] h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[95px] opacity-90
          bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.72),transparent_62%)]" />

        {/* Dark vignette so text stays readable */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_45%,rgba(0,0,0,0.10),rgba(5,10,30,0.55)_58%,rgba(5,10,30,0.78)_100%)]" />
      </div>

      {/* ============ BRIGHT STARS (TWINKLE) ============ */}
      <div className="pointer-events-none absolute inset-0">
        {/* Small dense stars */}
        <div
          className="absolute inset-0 twinkle-a"
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
            `
          }}
        />

        {/* Bigger sparkle stars */}
        <div
          className="absolute inset-0 twinkle-b"
          style={{
            backgroundImage: `
              radial-gradient(2.6px 2.6px at 28% 30%, rgba(255,255,255,0.95), transparent 52%),
              radial-gradient(2.2px 2.2px at 70% 28%, rgba(56,189,248,0.95), transparent 52%),
              radial-gradient(2.4px 2.4px at 82% 58%, rgba(168,85,247,0.90), transparent 52%),
              radial-gradient(2.3px 2.3px at 46% 60%, rgba(236,72,153,0.85), transparent 52%),
              radial-gradient(2.6px 2.6px at 18% 58%, rgba(255,255,255,0.85), transparent 52%)
            `
          }}
        />

        {/* Soft haze sparkle */}
        <div
          className="absolute inset-0 twinkle-c opacity-60"
          style={{
            backgroundImage: `
              radial-gradient(120px 120px at 22% 30%, rgba(56,189,248,0.10), transparent 60%),
              radial-gradient(160px 160px at 62% 40%, rgba(168,85,247,0.10), transparent 62%),
              radial-gradient(140px 140px at 78% 62%, rgba(236,72,153,0.08), transparent 62%)
            `
          }}
        />
      </div>

      {/* ============ HERO IMAGE ============ */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative h-[560px] w-[860px]">
          <Image
            src="/laptop-phone.png"
            alt="Canoly hero preview"
            fill
            priority
            className="object-contain select-none drop-shadow-[0_80px_220px_rgba(0,0,0,0.75)]"
          />
        </div>
      </div>
    </div>
  );
}
