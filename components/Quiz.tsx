"use client";

import { useMemo, useState } from "react";
import type { Game } from "@/data/demoGame";
import { CheckIcon, XIcon } from "./Icons";

function letter(i: number) {
  return ["A", "B", "C", "D"][i] ?? String(i + 1);
}

export function Quiz({ game }: { game: Game }) {
  const total = game.questions.length;
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [score, setScore] = useState(0);

  const q = game.questions[idx];
  const isLast = idx === total - 1;

  const status = useMemo(() => {
    if (!revealed || selected === null) return "idle";
    return selected === q.answerIndex ? "correct" : "wrong";
  }, [revealed, selected, q.answerIndex]);

  function choose(i: number) {
    if (revealed) return;
    setSelected(i);
    setRevealed(true);
    if (i === q.answerIndex) setScore((s) => s + 1);
  }

  function next() {
    if (!revealed) return;
    if (isLast) {
      setIdx(total); // results
      return;
    }
    setIdx((v) => v + 1);
    setSelected(null);
    setRevealed(false);
  }

  function reset() {
    setIdx(0);
    setSelected(null);
    setRevealed(false);
    setScore(0);
  }

  if (idx >= total) {
    return (
      <div className="glass rounded-3xl border border-[color:var(--cardBorder)] p-8 shadow-glowStrong">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm text-[color:var(--muted)]">Score</div>
            <div className="mt-1 text-4xl font-extrabold">{score} / {total}</div>
          </div>
          <div className="rounded-2xl bg-white/5 px-4 py-2 text-sm text-[color:var(--muted)]">Results</div>
        </div>
        <button
          onClick={reset}
          className="mt-7 inline-flex h-[50px] w-full items-center justify-center rounded-xl px-6 font-semibold text-[color:var(--text)]
                     bg-[linear-gradient(90deg,var(--blue),var(--purple))] shadow-glow hover:shadow-glowStrong transition"
        >
          Play Again
        </button>
      </div>
    );
  }

  return (
    <div className="glass rounded-3xl border border-[color:var(--cardBorder)] p-6 shadow-glowStrong">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-xl font-extrabold">{game.title}</div>
          <div className="mt-2 inline-flex rounded-full border border-[color:var(--cardBorder)] bg-white/5 px-3 py-1 text-xs text-[color:var(--muted)]">
            {game.topic} • {game.level}
          </div>
        </div>
        <div className="inline-flex rounded-full border border-[color:var(--cardBorder)] bg-white/5 px-3 py-1 text-xs text-[color:var(--muted)]">
          Q {idx + 1}/{total}
        </div>
      </div>

      <div className="mt-6">
        <div className="text-lg font-semibold md:text-xl">{q.prompt}</div>
        <div className="mt-1 text-sm text-[color:var(--muted)]">Choose one answer.</div>
      </div>

      <div className="mt-6 grid gap-3">
        {q.options.map((opt, i) => {
          const isSel = selected === i;
          const isCorrect = i === q.answerIndex;
          const showCorrect = revealed && isCorrect;
          const showWrongSelected = revealed && isSel && !isCorrect;

          let cls =
            "w-full rounded-2xl px-4 py-4 text-left transition border overflow-hidden " +
            "whitespace-normal break-words";

          cls += " border-[color:var(--cardBorder)] bg-white/5 hover:bg-white/7";

          if (isSel && !revealed) cls += " ring-2 ring-[color:var(--blue)]/40";
          if (showCorrect) cls += " border-[color:var(--cyan)]/50 bg-[color:rgba(53,242,208,0.12)]";
          if (showWrongSelected) cls += " border-[color:var(--danger)]/55 bg-[color:rgba(255,77,109,0.12)]";

          return (
            <button key={i} onClick={() => choose(i)} className={cls} disabled={revealed && !isSel}>
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10 text-xs font-bold">
                    {letter(i)}
                  </span>
                  <span className="text-sm font-semibold md:text-base">{opt}</span>
                </div>

                {showCorrect ? (
                  <span className="inline-flex items-center gap-2 text-[color:var(--cyan)]">
                    <CheckIcon className="h-5 w-5" />
                  </span>
                ) : showWrongSelected ? (
                  <span className="inline-flex items-center gap-2 text-[color:var(--danger)]">
                    <XIcon className="h-5 w-5" />
                  </span>
                ) : null}
              </div>
            </button>
          );
        })}
      </div>

      <button
        onClick={next}
        disabled={!revealed}
        className="mt-6 inline-flex h-[50px] w-full items-center justify-center rounded-xl px-6 font-semibold text-[color:var(--text)]
                   bg-[linear-gradient(90deg,var(--blue),var(--purple))] shadow-glow hover:shadow-glowStrong transition
                   disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none"
      >
        {isLast ? "Finish" : "Next"}
      </button>

      {revealed && selected !== null ? (
        <div className="mt-4 text-sm">
          {status === "correct" ? (
            <span className="text-[color:var(--cyan)] font-semibold">Correct!</span>
          ) : (
            <span className="text-[color:var(--danger)] font-semibold">
              Not quite. Correct answer: {q.options[q.answerIndex]}
            </span>
          )}
        </div>
      ) : null}
    </div>
  );
}
