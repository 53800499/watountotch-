/** @format */

import { TOURIST_SITE_DETAIL_HERO_BACKGROUND } from "../../../assets/images";
import { HeroSection, WrapperSection } from "../components";
import { TouristSiteDetailContainer } from "../components/TouristSiteDetailPage";

export const TouristSiteDetail = () => {
  return (
    <WrapperSection>
      <section className="about-us">
        <HeroSection imageSrc={TOURIST_SITE_DETAIL_HERO_BACKGROUND} />
        <TouristSiteDetailContainer />
      </section>
    </WrapperSection>
  );
};
