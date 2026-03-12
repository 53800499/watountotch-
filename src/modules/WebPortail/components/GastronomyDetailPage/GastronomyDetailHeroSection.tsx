/** @format */

import { Image } from "../../../../common/components/Image";
import { WORDS } from "../../../../common/constants/wording";
import { GASTRONOMY_CARD2_HERO_IMAGE } from "../../../../assets/images";

export const GastronomyDetailHeroSection = () => {
  return (
    <div className="header-detail">
      <div className="box-image">
        <Image
          className="image"
          src={GASTRONOMY_CARD2_HERO_IMAGE}
          alt="Tour Mountain"
        />
      </div>

      <div className="detail-info">
        <h2 className="text-white heading-lg" data-aos="fade-down">
          {WORDS.gastronomy_detail_page.hero_section.title}
        </h2>
        <p className="text-white" data-aos="fade-up">
          {WORDS.gastronomy_detail_page.hero_section.description}
        </p>
      </div>
    </div>
  );
};
