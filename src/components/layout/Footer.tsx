import { Facebook, Instagram, Mail, MapPin, Phone, X } from "lucide-react";
import { A } from "../../constants";

export default function Footer() {
  return (
    <footer className="footer">
      <img className="footer-bg" src={`${A}YaDj5qGDKZG2c6V9SyodRKc4.png`} alt="brand background image" />
      <div className="footer-inner">
        <div className="footer-brand">
          <img src={`${A}logo_little_paws.png`} alt="Brand Logo" />
          <p>Trusted pet care for a healthier, happier life.</p>
          <div className="socials">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook />
            </a>
            <a href="https://x.com/Plaiterhq" target="_blank" rel="noopener noreferrer" aria-label="X">
              <X />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram />
            </a>
          </div>
        </div>
        <div className="footer-links">
          <p>Navigation</p>
          <a href="#about-us">About us</a>
          <a href="#why-us">Why us</a>
          <a href="#services">Services</a>
          <a href="#how-it-works">How it works</a>
          <a href="#reviews">Reviews</a>
          <a href="#hero">Back to top</a>
        </div>
        <div className="footer-contact">
          <p>Contact us</p>
          <a href="#contact">
            <MapPin /> Amsterdam Netherlands
          </a>
          <a href="tel:+1234567890">
            <Phone /> +1 23 45 67 890
          </a>
          <a href="mailto:info@littlepaws.com">
            <Mail /> info@littlepaws.com
          </a>
        </div>
        <small>©2026 Little Paws All right reserved</small>
      </div>
    </footer>
  );
}
