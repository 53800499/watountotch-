/** @format */

import React, { useEffect, useMemo, useState } from "react";

export type PageHeaderSlide = {
  id: string | number;
  title: string;
  subtitle?: string;
  description?: string;
  badge?: string;
  image: string;
};

type PageHeaderProps = {
  slides: PageHeaderSlide[];
  autoplayInterval?: number;
};

export const PageHeader: React.FC<PageHeaderProps> = ({
  slides,
  autoplayInterval = 8000
}) => {
  const [active, setActive] = useState(0);

  const current = useMemo(
    () => slides[active],
    [slides, active]
  );

  useEffect(() => {
    if (slides.length <= 1) return;
    const timer = window.setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, autoplayInterval);
    return () => window.clearInterval(timer);
  }, [slides.length, autoplayInterval]);

  const goTo = (index: number) => {
    setActive(index);
  };

  if (!slides.length) return null;

  return (
    <div className="page-header-hero">
      <div className="page-header-hero-bgs">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`page-header-hero-bg ${
              index === active ? "active" : ""
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          />
        ))}
      </div>

      <div className="page-header-hero-overlay" />

      <div className="page-header-hero-inner container">

        <h1 className="page-header-hero-title">{current.title}</h1>
        {current.subtitle && (
          <p className="page-header-hero-subtitle">{current.subtitle}</p>
        )}
        {current.description && (
          <p className="page-header-hero-description">
            {current.description}
          </p>
        )}

        {slides.length > 1 && (
          <div className="page-header-hero-dots">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                className={`page-header-hero-dot ${
                  index === active ? "active" : ""
                }`}
                onClick={() => goTo(index)}
                aria-label={`Aller au slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};


