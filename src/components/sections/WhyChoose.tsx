import Kicker from "../ui/Kicker";
import PawButton from "../ui/PawButton";
import { A } from "../../constants";

export default function WhyChoose() {
  return (
    <section className="why-choose section-pad">
      <div className="container split">
        <div className="copy-block">
          <Kicker>Why choose us</Kicker>
          <h2 data-reveal>
            Putting your pet's comfort and <span>wellness</span> first
          </h2>
          <ul className="check-list" data-reveal>
            <li>Skilled and compassionate veterinary team</li>
            <li>Personalized care tailored to each pet's needs</li>
            <li>Years of trusted experience in pet wellness</li>
          </ul>
          <PawButton href="#contact">Schedule a visit</PawButton>
        </div>
        <div className="rounded-photo blue-photo" data-reveal>
          <img src={`${A}4Yb5t7I9TwOK30Fgn80wjPtAmQ.avif`} alt="scruffy puppy on a lemon hat" />
        </div>
      </div>
    </section>
  );
}
