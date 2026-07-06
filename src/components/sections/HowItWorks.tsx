import Kicker from "../ui/Kicker";
import { A, steps } from "../../constants";

export default function HowItWorks() {
  return (
    <section className="how section-pad" id="how-it-works">
      <div className="container how-grid">
        <div className="how-title">
          <Kicker>How it works</Kicker>
          <h2 data-reveal>
            Straightforward steps to give your pet the <span>best care</span>
          </h2>
          <img data-reveal src={`${A}6OP0cfLbFDebaOcYg0wyASwZY.avif`} alt="goofy puppy peeking through a paper hole" />
        </div>
        <div className="step-list">
          {steps.map((step, index) => (
            <article className="step-card" data-reveal key={step.title}>
              <span>{step.icon}</span>
              <small>{String(index + 1).padStart(2, "0")}</small>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
