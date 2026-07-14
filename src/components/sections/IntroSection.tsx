import Kicker from "../ui/Kicker";
import { A } from "../../constants";

interface StatProps {
  value: number;
  label: string;
}

function Stat({ value, label }: StatProps) {
  return (
    <div className="stat">
      <strong className="stat-number" data-suffix="+">
        {value}+
      </strong>
      <span>{label}</span>
    </div>
  );
}

export default function IntroSection() {
  return (
    <section className="intro section-pad" id="about-us">
      <div className="container intro-grid">
        <div className="intro-art" data-reveal>
          <div className="yellow-arch">
            <span className="mini-cloud a" />
            <span className="mini-cloud b" />
            <span className="mini-cloud c" />
          </div>
          <div className="dog-wrapper">
            <img className="intro-dog" src={`${A}sX7EGztFkBg1CpPwavAlKndnlIQ.avif`} alt="happy dog sticking its toungue out" loading="lazy" />
            <img className="shades" src={`${A}tD3FyS3DOOswV2OVzWNjsbhs.avif`} alt="cute paw shades" loading="lazy" />
          </div>
        </div>
        <div className="copy-block">
          <Kicker>Introduction</Kicker>
          <h2 data-reveal>A place where pets feel right at home</h2>
          <p data-reveal>We're dedicated to giving your pets the care they deserve, offering everything from health checks to grooming with kindness and expertise.</p>
        </div>
      </div>
      <div className="stats-band" data-reveal>
        <div className="stats-inner">
          <Stat value={330} label="Pets Treated with Care" />
          <Stat value={330} label="Free Health Checkups" />
          <Stat value={25} label="Grooming Appointments" />
          <Stat value={1330} label="Pre Sales Service" />
        </div>
      </div>
    </section>
  );
}
