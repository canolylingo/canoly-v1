import Link from "next/link";
import { CubeIcon } from "./Icons";

export function Header() {
  return (
    <header className="relative z-10">
      <div className="mx-auto flex h-[72px] max-w-[1150px] items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3">
          <CubeIcon className="h-7 w-7 drop-shadow-[0_0_18px_rgba(77,163,255,0.22)]" />
          <span className="text-lg font-semibold tracking-tight">Canoly</span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-[color:var(--muted)] md:flex">
          <a className="hover:text-[color:var(--text)] transition" href="#features">Features</a>
          <a className="hover:text-[color:var(--text)] transition" href="#pricing">Pricing</a>
          <a className="hover:text-[color:var(--text)] transition" href="#about">About</a>
          <a className="hover:text-[color:var(--text)] transition" href="#login">Login</a>
          <a
            className="rounded-xl px-4 py-2 font-semibold text-[color:var(--text)] shadow-glow hover:shadow-glowStrong transition
                       bg-[linear-gradient(90deg,var(--blue),var(--purple))]"
            href="#try"
          >
            Get Started
          </a>
        </nav>

        <a
          className="md:hidden rounded-xl px-4 py-2 font-semibold text-[color:var(--text)] shadow-glow hover:shadow-glowStrong transition
                     bg-[linear-gradient(90deg,var(--blue),var(--purple))]"
          href="#try"
        >
          Get Started
        </a>
      </div>
    </header>
  );
}
