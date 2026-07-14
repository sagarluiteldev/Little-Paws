import Kicker from "../ui/Kicker";
import { A, gallery } from "../../constants";

export default function Gallery() {
  return (
    <section className="gallery section-pad">
      <div className="section-heading">
        <Kicker>Gallery</Kicker>
        <h2 data-reveal>Happy moments with the pets that brighten our days</h2>
      </div>
      <div className="marquee" data-reveal>
        {[...gallery, ...gallery].map((item, index) => (
          <img
            src={`${A}${item.src}`}
            alt={item.alt}
            loading="lazy"
            key={`${item.src}-${index}`}
          />
        ))}
      </div>
    </section>
  );
}
