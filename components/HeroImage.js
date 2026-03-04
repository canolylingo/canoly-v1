"use client";

import Image from "next/image";

export function HeroImage() {
  return (
    <div className="hero">
      {/* Massive aura */}
      <div className="heroGlow" aria-hidden="true">
        <div className="g g1" />
        <div className="g g2" />
        <div className="g g3" />
        <div className="g g4" />
        <div className="g g5" />
        <div className="stars s1" />
        <div className="stars s2" />
      </div>

      <Image
        src="/laptop-phone.png"
        alt="Laptop and phone quiz preview"
        fill
        priority
        className="heroImg"
      />
    </div>
  );
}
