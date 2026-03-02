import { demoGame, type Game } from "@/data/demoGame";

export async function generateGameFromAI(_prompt: string): Promise<Game> {
  // TODO: integrate AI later (OpenAI/Claude/Gemini). Must return the same Game schema.
  return demoGame;
}
