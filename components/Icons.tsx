import * as React from "react";

export function CubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <defs>
        <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#4DA3FF" />
          <stop offset="1" stopColor="#B86BFF" />
        </linearGradient>
      </defs>
      <path d="M12 2l8 4.5v11L12 22 4 17.5v-11L12 2z" fill="url(#g)" opacity="0.9"/>
      <path d="M12 2v20" stroke="rgba(255,255,255,0.22)" strokeWidth="1"/>
      <path d="M4 6.5l8 4.5 8-4.5" stroke="rgba(255,255,255,0.22)" strokeWidth="1" fill="none"/>
    </svg>
  );
}

export function CheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path d="M18 6L6 18M6 6l12 12" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
