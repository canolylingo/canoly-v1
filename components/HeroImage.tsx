"use client";

import Image from "next/image";

export function HeroImage() {
  return (
    <div className="relative h-[560px] w-full">
      {/* Laptop */}
      <Image
        src="/hero-laptop.png"
        alt="Laptop preview"
        width={1100}
        height={700}
        priority
        className="absolute left-0 top-24 w-[86%] select-none drop-shadow-[0_40px_90px_rgba(0,0,0,0.65)]"
      />

      {/* Phone */}
      <Image
        src="/hero-phone.png"
        alt="Phone preview"
        width={420}
        height={860}
        className="absolute right-6 top-10 w-[22%] max-w-[240px] select-none drop-shadow-[0_35px_80px_rgba(0,0,0,0.7)]"
      />
    </div>
  );
}
