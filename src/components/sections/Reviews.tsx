import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { A } from "../../constants";

export default function Reviews() {
  const reviews = [
    {
      quote: "The staff is very kind, and my pet always comes back happy and well-groomed. I wouldn't trust anyone else with my pet",
      name: "Sophie Anderson",
      detail: "Max's Mom",
      avatar: "lX4cC7pSYwz3u2himuZXTpdU.avif",
    },
    {
      quote: "Every visit feels calm, warm, and professional. My puppy leaves relaxed, clean, and excited to come back again.",
      name: "Daniel Lee",
      detail: "Coco's Dad",
      avatar: "df97Hq3vu3cjP4GgD4gBxQMUII.avif",
    },
  ];
  const [index, setIndex] = useState(0);
  const current = reviews[index];

  return (
    <section className="reviews section-pad" id="reviews">
      <div className="review-art left">!</div>
      <div className="review-art right">?!</div>
      <div className="section-heading">
        <h2 data-reveal>Heartwarming words from happy pet owners</h2>
      </div>
      <div className="review-card" data-reveal>
        <p>{current.quote}</p>
        <div className="review-person">
          <img src={`${A}${current.avatar}`} alt="" />
          <span>
            <strong>{current.name}</strong>
            <em>{current.detail}</em>
          </span>
        </div>
        <button type="button" onClick={() => setIndex((index + 1) % reviews.length)} aria-label="Next review">
          <ChevronRight />
        </button>
      </div>
    </section>
  );
}
