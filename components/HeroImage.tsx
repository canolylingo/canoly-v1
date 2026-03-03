"use client";

import Image from "next/image";

export function HeroImage() {
  return (
    <div className="relative h-[600px] w-full">

      {/* Laptop - büyük ve solda */}
      <Image
        src="/hero-laptop.png"
        alt="Laptop preview"
        width={1400}
        height={900}
        priority
        className="absolute left-0 top-20 w-[95%] max-w-[900px] select-none drop-shadow-[0_50px_120px_rgba(0,0,0,0.7)]"
      />

      {/* Phone - sağ altta ve önde */}
      <Image
        src="/hero-phone.png"
        alt="Phone preview"
        width={500}
        height={1000}
        className="absolute right-8 bottom-0 w-[26%] max-w-[260px] select-none drop-shadow-[0_40px_100px_rgba(0,0,0,0.8)]"
      />

    </div>
  );
}
