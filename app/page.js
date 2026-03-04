import { HeroImage } from "../components/HeroImage";

export default function Page() {
  return (
    <main className="bg-space">
      <div className="container">
        <div className="copy">
          <div className="badge">AI-powered Quiz Games</div>
          <h1>Canoly</h1>
          <p>
            Create Wordwall-style quizzes from a prompt. Landing + demo quiz now, AI generation next.
          </p>
          <div className="actions">
            <a className="btn primary" href="/demo" target="_blank" rel="noreferrer">
              Generate a Game
            </a>
            <a className="btn ghost" href="#how">
              Try Demo
            </a>
          </div>
        </div>

        {/* IMPORTANT: NO GLASS FRAME WRAPPER AROUND HERO */}
        <div className="heroWrap" aria-label="Hero mockup">
          <HeroImage />
        </div>
      </div>

      <section id="how" className="section">
        <div className="cards">
          <div className="card">
            <div className="cardTitle">AI Generated Quiz</div>
            <img className="cardImg" src="/tablet-left.png" alt="Quiz preview left" />
          </div>
          <div className="card">
            <div className="cardTitle">Fill in the Blanks</div>
            <img className="cardImg" src="/tablet-right.png" alt="Quiz preview right" />
          </div>
        </div>
      </section>
    </main>
  );
}
