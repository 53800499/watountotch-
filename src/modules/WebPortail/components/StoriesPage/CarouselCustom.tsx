/** @format */

import React, { useState, useRef, useEffect } from "react";
import type { StoryTest } from "../../interfaces/StoryInterface";

interface CarouselCustomProps {
  stories: StoryTest[];
  onSelectStory: (story: StoryTest) => void;
  activeStoryId?: string;
}

export const CarouselCustom: React.FC<CarouselCustomProps> = ({
  stories,
  onSelectStory,
  activeStoryId
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);
  const containerRef = useRef<HTMLDivElement>(null);

  // Calculate items per view based on window size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 480) {
        setItemsPerView(1);
      } else if (window.innerWidth < 768) {
        setItemsPerView(2);
      } else if (window.innerWidth < 1200) {
        setItemsPerView(3);
      } else {
        setItemsPerView(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, stories.length - itemsPerView);

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleDragStart = useRef(0);
  const handleDragMove = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      const currentX = e.touches[0].clientX;
      const diff = handleDragStart.current - currentX;

      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          handleNext();
        } else {
          handlePrev();
        }
        handleDragStart.current = currentX;
      }
    }
  };

  return (
    <div className="carousel-custom">
      <div
        className="carousel-custom__container"
        ref={containerRef}
        onTouchStart={(e) => {
          handleDragStart.current = e.touches[0].clientX;
        }}
        onTouchMove={handleDragMove}>
        <div
          className="carousel-custom__track"
          style={{
            transform: `translateX(-${(currentIndex / itemsPerView) * 100}%)`
          }}>
          {stories.map((item) => (
            <div key={item.id} className="carousel-custom__item">
              <button
                className={`story-card-carousel ${
                  item.id === activeStoryId ? "story-card-carousel--active" : ""
                }`}
                onClick={() => onSelectStory(item)}
                style={{
                  backgroundImage: `url(${item.coverImage})`
                }}>
                <div className="story-card-carousel__overlay">
                  {item.period && (
                    <span className="story-card-carousel__period">
                      {item.period}
                    </span>
                  )}
                  <h2 className="story-card-carousel__title">{item.title}</h2>
                  {item.excerpt && (
                    <p className="story-card-carousel__excerpt">{item.excerpt}</p>
                  )}
                  <span className="story-card-carousel__cta">
                    Découvrir l'histoire →
                  </span>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        className="carousel-custom__arrow carousel-custom__arrow--prev"
        onClick={handlePrev}
        disabled={currentIndex === 0}
        aria-label="Previous slide">
        ❮
      </button>

      <button
        className="carousel-custom__arrow carousel-custom__arrow--next"
        onClick={handleNext}
        disabled={currentIndex === maxIndex}
        aria-label="Next slide">
        ❯
      </button>

      {/* Dots Navigation */}
      {/* <div className="carousel-custom__dots">
        {Array.from({ length: Math.ceil(stories.length / itemsPerView) }).map(
          (_, idx) => (
            <button
              key={idx}
              className={`carousel-custom__dot ${
                idx === Math.floor(currentIndex / itemsPerView)
                  ? "carousel-custom__dot--active"
                  : ""
              }`}
              onClick={() => setCurrentIndex(idx * itemsPerView)}
              aria-label={`Go to slide group ${idx + 1}`}
            />
          )
        )}
      </div> */}
    </div>
  );
};
