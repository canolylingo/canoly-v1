"use client";

import Image from "next/image";

export function HeroImage() {
  return (
    <div className="relative w-full h-[660px] flex items-center justify-center overflow-hidden">

      {/* ================= GLOW LAYERS ================= */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">

        <div className="absolute h-[700px] w-[1100px] rounded-full blur-[140px] opacity-90 bg-[radial-gradient(circle,rgba(124,58,237,0.65),transparent_65%)]" />
        <div className="absolute h-[650px] w-[1000px] rounded-full blur-[130px] opacity-85 bg-[radial-gradient(circle,rgba(56,189,248,0.55),transparent_70%)]" />
        <div className="absolute h-[520px] w-[850px] rounded-full blur-[110px] opacity-90 bg-[radial-gradient(circle,rgba(139,92,246,0.70),transparent_60%)]" />
        <div className="absolute h-[480px] w-[780px] rounded-full blur-[100px] opacity-80 bg-[radial-gradient(circle,rgba(34,211,238,0.60),transparent_65%)]" />
        <div className="absolute h-[420px] w-[680px] rounded-full blur-[90px] opacity-95 bg-[radial-gradient(circle,rgba(124,58,237,0.85),transparent_60%)]" />
      </div>

      {/* ================= GALAXY STARS ================= */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 animate-pulse opacity-70"
          style={{
            backgroundImage: `
              radial-gradient(2px 2px at 15% 25%, rgba(124,58,237,0.9), transparent 50%),
              radial-gradient(2px 2px at 70% 35%, rgba(56,189,248,0.9), transparent 50%),
              radial-gradient(2px 2px at 40% 75%, rgba(139,92,246,0.8), transparent 50%),
              radial-gradient(2px 2px at 80% 65%, rgba(34,211,238,0.8), transparent 50%),
              radial-gradient(1.5px 1.5px at 55% 15%, rgba(255,255,255,0.9), transparent 50%),
              radial-gradient(1.5px 1.5px at 25% 60%, rgba(124,58,237,0.7), transparent 50%)
            `
          }}
        />
      </div>

      {/* ================= HERO IMAGE ================= */}
      <Image
        src="/laptop-phone.png"
        alt="Canoly hero preview"
        fill
        priority
        className="object-contain select-none drop-shadow-[0_70px_200px_rgba(0,0,0,0.75)]"
      />

    </div>
  );
}
