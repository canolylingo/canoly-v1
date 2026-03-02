import Link from "next/link";
import { demoGame } from "@/data/demoGame";
import { Quiz } from "@/components/Quiz";

export default function DemoPage() {
  return (
    <main className="bg-space min-h-screen">
      <div className="relative z-10 mx-auto max-w-[900px] px-6 py-10">
        <div className="mb-6">
          <Link href="/" className="text-sm text-[color:var(--muted)] hover:text-[color:var(--text)] transition">
            ← Back to home
          </Link>
        </div>

        <div className="mx-auto max-w-[760px]">
          <Quiz game={demoGame} />
        </div>
      </div>
    </main>
  );
}
