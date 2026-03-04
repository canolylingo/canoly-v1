"use client";

import { useMemo, useState } from "react";

const QUESTIONS = [
  {
    q: "Choose the correct sentence.",
    options: ["She go to school.", "She goes to school.", "She going to school.", "She gone to school."],
    answer: 1
  },
  {
    q: "Which word is a noun?",
    options: ["quickly", "beautiful", "teacher", "under"],
    answer: 2
  },
  {
    q: "Pick the correct plural form.",
    options: ["childs", "childes", "children", "childrens"],
    answer: 2
  },
  {
    q: "Which is correct?",
    options: ["I has a cat.", "I have a cat.", "I having a cat.", "I haves a cat."],
    answer: 1
  },
  {
    q: "Choose the correct question form.",
    options: ["Where you are?", "Where are you?", "Where is you?", "Where you is?"],
    answer: 1
  }
];

export default function DemoPage() {
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const current = QUESTIONS[i];

  const onPick = (idx) => setPicked(idx);

  const onNext = () => {
    if (picked === null) return;
    const correct = picked === current.answer;
    if (correct) setScore((s) => s + 1);

    if (i === QUESTIONS.length - 1) {
      setDone(true);
      return;
    }
    setI((x) => x + 1);
    setPicked(null);
  };

  const onRestart = () => {
    setI(0);
    setPicked(null);
    setScore(0);
    setDone(false);
  };

  return (
    <main className="bg-space">
      <div className="demoContainer">
        <div className="demoTop">
          <a className="demoBack" href="/">← Back</a>
          <div className="demoBrand">Canoly Demo Quiz</div>
          <div className="demoProgress">{done ? "Done" : `${i + 1}/${QUESTIONS.length}`}</div>
        </div>

        <div className="demoCard">
          {!done ? (
            <>
              <div className="demoQ">{current.q}</div>
              <div className="demoOptions">
                {current.options.map((opt, idx) => {
                  const isSelected = picked === idx;
                  const isCorrect = picked !== null && idx === current.answer;
                  const isWrong = picked === idx && idx !== current.answer;
                  return (
                    <button
                      key={idx}
                      className={
                        "demoOpt" +
                        (isSelected ? " selected" : "") +
                        (isCorrect ? " correct" : "") +
                        (isWrong ? " wrong" : "")
                      }
                      onClick={() => onPick(idx)}
                    >
                      <span className="demoLetter">{String.fromCharCode(65 + idx)}</span>
                      <span className="demoText">{opt}</span>
                    </button>
                  );
                })}
              </div>

              <div className="demoActions">
                <button className="btn primary" onClick={onNext} disabled={picked === null}>
                  Next
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="demoQ">Your score</div>
              <div className="demoScore">{score} / {QUESTIONS.length}</div>
              <div className="demoActions">
                <button className="btn primary" onClick={onRestart}>Play again</button>
                <a className="btn ghost" href="/">Back to landing</a>
              </div>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
