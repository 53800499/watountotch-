/** @format */

import { WORDS } from "../../../../common/constants/wording";
import { slides } from "../../../../common/mocks/heroSection";
import { HeroSlider } from "./HeroSlider";

export const HeroSection = () => {
  
  return (
    // <!-- Slide Hero -->
    <div className="hero-container">
      {/* <!-- Only visible to SEO search engines --> */}
      <h1 className="visually-hidden">
        {WORDS.home_page.hero_section.title}
      </h1>

      <div id="hero">
        {slides.map((slide, index) => (
          <HeroSlider
            key={index}
            imageSrc={slide.imageSrc}
            description={slide.description}
            country={slide.country}
            city={slide.city}
            buttonText={slide.buttonText}
          />
        ))}
      </div>
    </div>
  );
};
