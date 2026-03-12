/** @format */

import { Image } from "../../../../common/components/Image";
import { WORDS } from "../../../../common/constants/wording";
import {
  PALAIS_DES_CONGRES
} from "../../../../assets/images";

export const OurExperienceSection = () => {
  return (
    <section className="our-experience container">
      <div className="ourexp-content">
        <div className="ourexp-image" data-aos="fade-left">
          <div className="box-image">
            <Image
              className="image"
              src={PALAIS_DES_CONGRES}
              alt="Découvrez le Bénin - Culture et Patrimoine"
            />
          </div>
        </div>
        <div className="ourexp-info">
          <div className="text-left mb-7" data-aos="fade-left">
            <h3 className="title-above left">
              {WORDS.home_page.OurExperienceSection.title}
            </h3>
            <h2 className="heading-lg">
              {WORDS.home_page.OurExperienceSection.subtitle}
            </h2>
            <p className="description">
              {WORDS.home_page.OurExperienceSection.description}
            </p>
          </div>
          <div className="box-items-num">
            <div className="item" data-aos="fade-up">
              <span className="num" data-counter="">
                12k+
              </span>
              <span className="text">
                {WORDS.home_page.OurExperienceSection.happy_travelers}
              </span>
            </div>
            <div className="item" data-aos="fade-down">
              <span className="num" data-counter="">
                45+
              </span>
              <span className="text">
                {WORDS.home_page.OurExperienceSection.tourist_sites}
              </span>
            </div>
            <div className="item" data-aos="fade-up">
              <span className="num" data-counter="">
                3
              </span>
              <span className="text">
                {WORDS.home_page.OurExperienceSection.available_languages}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
