import { useState, FormEvent } from "react";
import { PawPrint, CheckCircle2 } from "lucide-react";
import { A } from "../../constants";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    breed: "",
    dob: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.service) {
      setStatus("error");
      return;
    }

    setStatus("submitting");

    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        service: "",
        breed: "",
        dob: "",
        message: "",
      });
    }, 1200);
  };

  return (
    <section className="contact section-pad" id="contact">
      <div className="container contact-grid">
        <div className="contact-copy" data-reveal>
          <h2>Get in touch with our pet care experts</h2>
          <div className="contact-image">
            <img src={`${A}DhxpPNyvDS30ZM9WEMahhQ1PY.avif`} alt="mum and puppy cute selfie" loading="lazy" />
            <div>
              <span>Your pet's comfort, health, and happiness.</span>
              <PawPrint />
            </div>
          </div>
          <p>Exceptional care and wellness services designed to keep pets thriving.</p>
        </div>

        {status === "success" ? (
          <div className="contact-form success-state" data-reveal>
            <div className="success-icon-wrap">
              <CheckCircle2 size={48} className="success-check-icon" />
            </div>
            <h3>Woof! Message Sent!</h3>
            <p>
              Thank you for reaching out. One of our pet care experts will contact you within 24 hours to confirm your details.
            </p>
            <button type="button" className="reset-btn" onClick={() => setStatus("idle")}>
              Send another message
            </button>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit} data-reveal>
            <h3>Send us a message</h3>
            <label>
              Name *
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
            </label>
            <label>
              Email *
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </label>
            <label>
              Services *
              <select name="service" value={formData.service} onChange={handleChange} required>
                <option value="" disabled>
                  Select...
                </option>
                <option value="grooming">Pet Grooming & Spa</option>
                <option value="vet">Veterinary Checkups</option>
                <option value="dental">Dental Care</option>
                <option value="emergency">Emergency Care</option>
              </select>
            </label>
            <label>
              Type & Breed
              <input
                name="breed"
                value={formData.breed}
                onChange={handleChange}
                placeholder="Enter your pet's breed"
              />
            </label>
            <label className="wide">
              Date of Birth
              <input
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                placeholder="dd/mm/yyyy"
                type="text"
                onFocus={(event) => (event.currentTarget.type = "date")}
              />
            </label>
            <label className="wide">
              Message
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message here"
              />
            </label>
            
            {status === "error" && (
              <p className="form-error-msg">Please fill out all required fields (*).</p>
            )}

            <button type="submit" disabled={status === "submitting"}>
              {status === "submitting" ? "Sending..." : "Submit"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
