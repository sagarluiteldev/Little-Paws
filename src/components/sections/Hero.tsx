import { useMemo } from "react";
import PawButton from "../ui/PawButton";
import { A } from "../../constants";

export default function Hero() {
  const titleWords = useMemo(
    () =>
      "Your Pet's Safe and Joyful Haven"
        .split(" ")
        .map((word, index) => (
          <span className="word" key={`${word}-${index}`}>
            {word}
          </span>
        )),
    [],
  );

  return (
    <section className="hero" id="hero">
      <img className="hero-dog" src={`${A}hero_dog.webp`} alt="cute Siberian Husky puppy" />
      
      {/* Bottom cloud overlays in front of the dog */}
      <img className="hero-cloud-bottom cloud-layer-one" src={`${A}hero_clouds_all.webp`} alt="" />
      <img className="hero-cloud-bottom cloud-layer-two" src={`${A}hero_clouds_all.webp`} alt="" />
      
      <div className="cloud-puff hero-cloud cloud-one" />
      <div className="cloud-puff hero-cloud cloud-two" />
      
      {/* Mobile mini clouds randomly placed above the dog */}
      <div className="mini-cloud hero-mini-cloud cloud-m1" />
      <div className="mini-cloud hero-mini-cloud cloud-m2" />
      <div className="mini-cloud hero-mini-cloud cloud-m3" />
      <div className="mini-cloud hero-mini-cloud cloud-m4" />
      <div className="mini-cloud hero-mini-cloud cloud-m5" />
      <div className="hero-content">
        <h1 className="hero-title">{titleWords}</h1>
        <p className="hero-copy">We provide professional care that keeps every pet safe, relaxed, and joyful.</p>
        <PawButton href="#services">View all services</PawButton>
      </div>
    </section>
  );
}
