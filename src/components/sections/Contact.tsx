import { PawPrint } from "lucide-react";
import { A } from "../../constants";

export default function Contact() {
  return (
    <section className="contact section-pad" id="contact">
      <div className="container contact-grid">
        <div className="contact-copy" data-reveal>
          <h2>Get in touch with our pet care experts</h2>
          <div className="contact-image">
            <img src={`${A}DhxpPNyvDS30ZM9WEMahhQ1PY.avif`} alt="mum and puppy cute selfie" />
            <div>
              <span>Your pet's comfort, health, and happiness.</span>
              <PawPrint />
            </div>
          </div>
          <p>Exceptional care and wellness services designed to keep pets thriving.</p>
        </div>
        <form className="contact-form" data-reveal>
          <h3>Send us a message</h3>
          <label>
            Name
            <input placeholder="Enter your full name" />
          </label>
          <label>
            Email
            <input type="email" placeholder="Enter your email" />
          </label>
          <label>
            Services
            <select defaultValue="">
              <option value="" disabled>
                Select...
              </option>
              <option>Pet Grooming & Spa</option>
              <option>Veterinary Checkups</option>
              <option>Dental Care</option>
              <option>Emergency Care</option>
            </select>
          </label>
          <label>
            Type & Breed
            <input placeholder="Enter your pet's breed" />
          </label>
          <label className="wide">
            Date of Birth
            <input placeholder="dd/mm/yyyy" type="text" onFocus={(event) => (event.currentTarget.type = "date")} />
          </label>
          <label className="wide">
            Message
            <textarea placeholder="Type your message here" />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}
