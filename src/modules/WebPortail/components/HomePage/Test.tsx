/** @format */

import React from "react";
import { Image } from "../../../../common/components/Image";
import { GENERIC_HERO_TOURS_BACKGROUND } from "../../../../assets/images";

export const Test = () => {
  return (
    <div className="hero-main-bg">
      <div className="hero-background">
        <Image
          src={GENERIC_HERO_TOURS_BACKGROUND}
          alt="Travel Tours"
          className="hero-image"
        />
      </div>

      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title" data-aos="fade-up">
            Unforgettable Tours Await
          </h1>
          <p className="hero-subtitle" data-aos="fade-up" data-aos-delay="200">
            Embark on journeys that inspire — from hidden gems in vibrant cities
            to breathtaking natural wonders. Discover, explore, and create
            memories that last a lifetime.
          </p>
        </div>
      </div>
    </div>
  );
};
