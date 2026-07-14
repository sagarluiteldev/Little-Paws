import Kicker from "../ui/Kicker";
import PawButton from "../ui/PawButton";
import { A, services } from "../../constants";

export default function ServicesSection() {
  return (
    <section className="services section-pad" id="services">
      <div className="section-heading">
        <Kicker>Services</Kicker>
        <h2 data-reveal>Full-Service Pet Care Clinic</h2>
      </div>
      <div className="container service-grid">
        {services.map((service) => (
          <article className="service-card" data-reveal key={service.title}>
            <span className="service-icon">{service.icon}</span>
            <h3>{service.title}</h3>
            <p>{service.body}</p>
            <a href="#contact">Starting from $79</a>
          </article>
        ))}
        <article className="service-card appointment-card" data-reveal>
          <h3>Book Your Appointment</h3>
          <p>Schedule a session with our experienced vets and groomers to give your pet the care they deserve. Quick booking and thoughtful service.</p>
          <PawButton href="#contact">Schedule a visit</PawButton>
          <img src={`${A}C0TmIz4gdVQNswbCy8C1si7JzK4.avif`} alt="happy golden retriever dog" loading="lazy" />
        </article>
      </div>
    </section>
  );
}
