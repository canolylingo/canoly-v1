"use client";

import Image from "next/image";

export function HeroImage() {
  return (
    <div className="relative w-full h-[620px] flex items-center justify-center">
      <Image
        src="/laptop-phone.png"
        alt="Canoly hero preview"
        fill
        priority
        className="object-contain select-none drop-shadow-[0_40px_120px_rgba(0,0,0,0.6)]"
      />
    </div>
  );
}
