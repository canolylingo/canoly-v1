"use client";

import Image from "next/image";

export function HeroImage() {
  return (
    <div className="relative w-full h-[660px] flex items-center justify-center">

      {/* MASSIVE OUTER GLOW */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">

        {/* Deep purple base */}
        <div className="absolute h-[700px] w-[1100px] rounded-full blur-[140px] opacity-90 bg-[radial-gradient(circle,rgba(124,58,237,0.65),transparent_65%)]" />

        {/* Electric blue outer */}
        <div className="absolute h-[650px] w-[1000px] rounded-full blur-[130px] opacity-85 bg-[radial-gradient(circle,rgba(56,189,248,0.55),transparent_70%)]" />

        {/* Mid purple */}
        <div className="absolute h-[520px] w-[850px] rounded-full blur-[110px] opacity-90 bg-[radial-gradient(circle,rgba(139,92,246,0.70),transparent_60%)]" />

        {/* Cyan accent */}
        <div className="absolute h-[480px] w-[780px] rounded-full blur-[100px] opacity-80 bg-[radial-gradient(circle,rgba(34,211,238,0.60),transparent_65%)]" />

        {/* Focus glow tight */}
        <div className="absolute h-[420px] w-[680px] rounded-full blur-[90px] opacity-95 bg-[radial-gradient(circle,rgba(124,58,237,0.85),transparent_60%)]" />

        {/* Core light */}
        <div className="absolute h-[300px] w-[520px] rounded-full blur-[70px] opacity-95 bg-[radial-gradient(circle,rgba(255,255,255,0.25),transparent_70%)]" />
      </div>

      {/* HERO IMAGE */}
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
