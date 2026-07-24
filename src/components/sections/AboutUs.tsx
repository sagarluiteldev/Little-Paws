import Kicker from "../ui/Kicker";
import { A } from "../../constants";

export default function AboutUs() {
  return (
    <section className="about-collage section-pad">
      <div className="section-heading narrow">
        <Kicker>About us</Kicker>
        <h2 data-reveal>Trusted care that treats your pet like one of our own</h2>
        <p data-reveal>From checkups to treatments, we provide attentive, compassionate care that supports your pet's well-being every step of the way.</p>
      </div>
      <div className="collage-wrap" data-reveal>
        <div className="yellow-shelf" />
        <img className="collage-img left" src={`${A}OsueP7KJmSKkVV7OAeeUDKT3Feo.webp`} alt="lady smilling with a chihuahua" loading="lazy" />
        <img className="collage-img center" src={`${A}OHqEcD2usoRAhLXbVxuDv9nN4.webp`} alt="portrait shot of a puppy and its owner" loading="lazy" />
        <img className="collage-img right" src={`${A}YAZnBkBG3wKGjlW980PFrfWoaZ0.webp`} alt="puppy with its mum on a mountain hike" loading="lazy" />
      </div>
    </section>
  );
}
