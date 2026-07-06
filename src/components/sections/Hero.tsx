import { useMemo } from "react";
import PawButton from "../ui/PawButton";
import { A } from "../../constants";

export default function Hero() {
  const titleWords = useMemo(
    () =>
      "Your Pet's Safe and Joyful Haven"
        .split(" ")
        .map((word) => <span className="word" key={word}>{word}</span>),
    [],
  );

  return (
    <section className="hero" id="hero">
      <img className="hero-dog" src={`${A}JIk8qxDeNDId0PHm90DHSgyCevg.avif`} alt="cute brown and white puppy" />
      
      {/* Bottom cloud overlays in front of the dog */}
      <img className="hero-cloud-bottom cloud-layer-one" src={`${A}hero_clouds_all.png`} alt="" />
      <img className="hero-cloud-bottom cloud-layer-two" src={`${A}hero_clouds_all.png`} alt="" />
      
      <div className="cloud-puff hero-cloud cloud-one" />
      <div className="cloud-puff hero-cloud cloud-two" />
      <div className="hero-content">
        <h1 className="hero-title">{titleWords}</h1>
        <p className="hero-copy">We provide professional care that keeps every pet safe, relaxed, and joyful.</p>
        <PawButton href="#services">View all services</PawButton>
      </div>
    </section>
  );
}
