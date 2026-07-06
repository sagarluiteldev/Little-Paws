import Kicker from "../ui/Kicker";
import { features } from "../../constants";

export default function WhyUsCards() {
  return (
    <section className="why-cards section-pad" id="why-us">
      <div className="section-heading">
        <Kicker>Why us</Kicker>
        <h2 data-reveal>Compassion and quality in every moment of care</h2>
      </div>
      <div className="container feature-grid">
        {features.map((feature) => (
          <article className="cloud-card" data-reveal key={feature.title}>
            <div className="card-inner">
              <span className="feature-icon">{feature.icon}</span>
              <h3>{feature.title}</h3>
              <p>{feature.body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
