
"use client";

import Image from "next/image";

export function HeroImage(){
  return(
    <div style={{position:"relative",height:"520px",width:"700px"}}>

      <div style={{
        position:"absolute",
        inset:0,
        background:"radial-gradient(circle at 50% 50%, rgba(168,85,247,.6), transparent 60%), radial-gradient(circle at 60% 40%, rgba(56,189,248,.5), transparent 60%), radial-gradient(circle at 45% 60%, rgba(236,72,153,.4), transparent 60%)",
        filter:"blur(120px)"
      }}/>

      <Image
        src="/laptop-phone.png"
        alt="hero"
        fill
        style={{objectFit:"contain"}}
        priority
      />

    </div>
  )
}
