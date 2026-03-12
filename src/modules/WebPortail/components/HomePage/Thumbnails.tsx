/** @format */

import type { Slide } from "../../interfaces/HeroSection";

export default function Thumbnails({
  slides,
  activeIndex,
  onSelect
}: {
  slides: Slide[];
  activeIndex: number;
  onSelect: (i: number) => void;
}) {
  return (
    <div className="thumbnails">
      {slides.map((s, i) => (
        <div
          key={i}
          className={`thumb ${i === activeIndex ? "active" : ""}`}
          onClick={() => onSelect(i)}>
          <img src={s.image} alt={s.city} />
          <div className="info">
            <span>{s.country}</span>
            <b>{s.city}</b>
          </div>
        </div>
      ))}
    </div>
  );
}
