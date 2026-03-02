import Link from "next/link";
import { Header } from "@/components/Header";
import { HeroImage } from "@/components/HeroImage";
import { CubeIcon } from "@/components/Icons";

function PrimaryButton({ href, children, newTab }: { href: string; children: React.ReactNode; newTab?: boolean }) {
  return (
    <a
      href={href}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noreferrer" : undefined}
      className="inline-flex h-[50px] items-center justify-center rounded-xl px-6 font-semibold text-[color:var(--text)]
                 bg-[linear-gradient(90deg,var(--blue),var(--purple))] shadow-glow hover:shadow-glowStrong transition"
    >
      {children}
    </a>
  );
}

function SecondaryButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex h-[50px] items-center justify-center rounded-xl px-6 font-semibold text-[color:var(--text)]
                 border border-[color:var(--cardBorder)] bg-transparent hover:bg-white/5 transition"
    >
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <main className="bg-space min-h-screen">
      <Header />

      <section className="relative z-10">
        <div className="mx-auto min-h-[85vh] max-w-[1150px] px-6 pb-10 pt-10">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="max-w-xl">
              <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
                Create Fun Language Games in Seconds with AI
              </h1>
              <p className="mt-4 text-base leading-relaxed text-[color:var(--muted)] md:text-lg">
                Generate interactive learning games for your students with just a few clicks!
              </p>

              <div className="mt-7 flex flex-wrap gap-4">
                <PrimaryButton href="/demo" newTab>Generate a Game</PrimaryButton>
                <SecondaryButton href="#demo">Watch Demo</SecondaryButton>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {["Teacher-ready", "Instant feedback", "Kid-friendly UI"].map((t) => (
                  <span key={t} className="glass rounded-full px-3 py-1 text-xs text-[color:var(--text)]">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="md:translate-y-[-10px]">
              <HeroImage />
            </div>
          </div>
        </div>
      </section>

      <section id="try" className="relative z-10">
        <div className="mx-auto max-w-[1150px] px-6 pb-14">
          <div className="glass rounded-3xl p-6 shadow-glow">
            <div className="flex items-center gap-3">
              <CubeIcon className="h-6 w-6" />
              <h2 className="text-xl font-bold">Try It Now!</h2>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-4">
              <div className="glass rounded-2xl p-4">
                <label className="text-xs text-[color:var(--muted)]">Topic</label>
                <div className="mt-2 text-sm font-semibold">Prepositions</div>
              </div>
              <div className="glass rounded-2xl p-4">
                <label className="text-xs text-[color:var(--muted)]">Level</label>
                <div className="mt-2 text-sm font-semibold">Beginner</div>
              </div>
              <div className="glass rounded-2xl p-4">
                <label className="text-xs text-[color:var(--muted)]">Game Type</label>
                <div className="mt-2 text-sm font-semibold">Multiple Choice</div>
              </div>
              <a
                href="/demo"
                target="_blank"
                rel="noreferrer"
                className="flex h-full items-center justify-center rounded-2xl px-6 font-semibold text-[color:var(--text)]
                           bg-[linear-gradient(90deg,var(--blue),var(--purple))] shadow-glow hover:shadow-glowStrong transition"
              >
                Generate Game
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="demo" className="relative z-10">
        <div className="mx-auto max-w-[1150px] px-6 pb-14">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="glass rounded-3xl p-6 shadow-glow hover:shadow-glowStrong transition">
              <h3 className="text-lg font-bold">AI Generated Quiz</h3>
              <p className="mt-2 text-sm text-[color:var(--muted)]">Preview</p>
              <div className="mt-5 glass rounded-2xl p-5">
                <div className="text-sm font-semibold">The cat is sitting ___ the table.</div>
                <div className="mt-4 grid gap-3">
                  <div className="glass rounded-xl p-3 text-sm">A. in</div>
                  <div className="rounded-xl p-3 text-sm border border-[color:var(--cyan)]/40 bg-[color:rgba(53,242,208,0.12)] flex items-center justify-between">
                    <span>B. on</span>
                    <span className="text-[color:var(--cyan)] font-semibold">✓</span>
                  </div>
                  <div className="glass rounded-xl p-3 text-sm">C. under</div>
                </div>
              </div>
            </div>

            <div className="glass rounded-3xl p-6 shadow-glow hover:shadow-glowStrong transition">
              <h3 className="text-lg font-bold">Fill in the Blanks</h3>
              <p className="mt-2 text-sm text-[color:var(--muted)]">Preview</p>
              <div className="mt-5 glass rounded-2xl p-5">
                <div className="text-sm font-semibold">Choose the correct word:</div>
                <div className="mt-3 text-sm text-[color:var(--muted)]">The ball is ___ the box.</div>
                <div className="mt-4 grid gap-3">
                  <div className="flex items-center gap-2 text-sm"><span className="glass h-5 w-5 rounded-md inline-block" /> in</div>
                  <div className="flex items-center gap-2 text-sm"><span className="glass h-5 w-5 rounded-md inline-block" /> on</div>
                  <div className="flex items-center gap-2 text-sm"><span className="glass h-5 w-5 rounded-md inline-block" /> under</div>
                </div>
                <div className="mt-5 inline-flex rounded-xl px-4 py-2 font-semibold text-sm bg-[linear-gradient(90deg,var(--blue),var(--purple))] shadow-glow">
                  Well Done!
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 pb-16">
        <div className="mx-auto max-w-[1150px] px-6">
          <div className="glass rounded-3xl p-10 text-center shadow-glow">
            <h2 className="text-3xl font-extrabold">Start Your Free Trial Today!</h2>
            <p className="mx-auto mt-3 max-w-2xl text-[color:var(--muted)]">
              Join now and create your first games for free.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-4">
              <PrimaryButton href="#signup">Sign Up Free</PrimaryButton>
              <SecondaryButton href="#learn">Learn More</SecondaryButton>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
