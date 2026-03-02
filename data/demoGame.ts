export type Question = {
  id: string;
  prompt: string;
  options: string[];
  answerIndex: number;
};

export type Game = {
  title: string;
  topic: string;
  level: string;
  questions: Question[];
};

export const demoGame: Game = {
  title: "Board Quiz",
  topic: "Prepositions",
  level: "A1",
  questions: [
    { id: "q1", prompt: "The cat is sitting __ the table.", options: ["in", "on", "under", "behind"], answerIndex: 1 },
    { id: "q2", prompt: "The ball is __ the box.", options: ["in", "on", "next to", "above"], answerIndex: 0 },
    { id: "q3", prompt: "The book is __ the bag.", options: ["under", "in", "behind", "between"], answerIndex: 1 },
    { id: "q4", prompt: "The pencil is __ the desk.", options: ["on", "in", "under", "between"], answerIndex: 0 },
    { id: "q5", prompt: "The shoes are __ the bed.", options: ["under", "on", "in", "above"], answerIndex: 0 },
  ],
};
