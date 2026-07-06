import { useState } from "react";
import { ChevronRight, PawPrint, X } from "lucide-react";
import Kicker from "../ui/Kicker";
import { faqs } from "../../constants";

export default function FAQ() {
  const [activeFaq, setActiveFaq] = useState(0);

  return (
    <section className="faq section-pad">
      <div className="section-heading">
        <Kicker>FAQ</Kicker>
        <h2 data-reveal>Support & Guidance for Your Pet's Needs</h2>
      </div>
      <div className="faq-list" data-reveal>
        {faqs.map((item, index) => {
          const open = activeFaq === index;
          return (
            <article className={`faq-item ${open ? "open" : ""}`} key={item.q}>
              <button type="button" onClick={() => setActiveFaq(open ? -1 : index)}>
                <span>{index + 1}</span>
                {item.q}
                <PawPrint className="faq-paw" />
                <i>{open ? <X /> : <ChevronRight />}</i>
              </button>
              <p>{item.a}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
