
import { HeroImage } from "../components/HeroImage";

export default function Page() {
  return (
    <main className="page">
      <div className="left">
        <h1>Canoly</h1>
        <p>Create AI generated quizzes in seconds.</p>
      </div>
      <div className="right">
        <HeroImage />
      </div>
    </main>
  );
}
