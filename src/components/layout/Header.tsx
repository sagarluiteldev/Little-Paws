import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import PawButton from "../ui/PawButton";
import { A, nav } from "../../constants";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => {
      headerRef.current?.classList.toggle("scrolled", window.scrollY > 80);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="site-header" ref={headerRef}>
      <a className="logo-link" href="#hero" aria-label="Little Paws home">
        <img src={`${A}logo_little_paws.png`} alt="Little Paws" />
      </a>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {nav.map(([label, href]) => (
          <a href={href} key={href}>
            {label}
          </a>
        ))}
      </nav>
      <PawButton href="#contact" compact>
        Schedule a visit
      </PawButton>
      <button className="menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
        {menuOpen ? <X /> : <Menu />}
      </button>
      <div className={`mobile-panel ${menuOpen ? "open" : ""}`}>
        {nav.map(([label, href]) => (
          <a href={href} key={href} onClick={() => setMenuOpen(false)}>
            {label}
          </a>
        ))}
        <a className="mobile-cta" href="#contact" onClick={() => setMenuOpen(false)}>
          Schedule a visit
        </a>
      </div>
    </header>
  );
}
