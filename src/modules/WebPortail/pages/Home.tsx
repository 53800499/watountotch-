/** @format */

import { Fragment } from "react";
import { WrapperSection } from "../components";
import {
  CallActionSection,
  GuidedToursSection,
  TestimonialsSection,
  // SeachSection,
  HistoireSection,
  SeachSection
  // TouristSitesSection
} from "../components/HomePage";
import { ScrollToTopButton } from "../../../common/components";
import {
  BACKGROUND_CALL_TO_ACTION,
  BACKGROUND_CALL_TO_ACTION_B
} from "../../../assets/images";
import SlideHero from "../components/HomePage/SlideHero";
import { DestinationSection } from "../components/HomePage/DestinationSection";
import { CultureSection } from "../components/HomePage/CultureSection";
import { SiteTouristiqueSection } from "../components/HomePage/SiteTouristiqueSection";
import { CultureGastroSection } from "../components/HomePage/CulturalAndGastronomy";
import { SLIDES } from "../../../common/mocks";

export const Home = () => {
  return (
    <Fragment>
      <SlideHero
        slides={SLIDES}
        config={{
          duration: 6000,
          autoplay: { enabled: true },
          timeline: { enabled: true }
        }}
      />

      {/* <HeroSection /> */}
      {/* <WrapperSection>
        <OurExperienceSection />
        <CulturalEventsSection />
      </WrapperSection> */}
      <SeachSection/>
      <HistoireSection/>
      <CallActionSection imageSrc={BACKGROUND_CALL_TO_ACTION} />
      <DestinationSection/>
      <CultureSection/>
      <CultureGastroSection/>
      <CallActionSection imageSrc={BACKGROUND_CALL_TO_ACTION_B} />
      <WrapperSection>
        {/* <TouristSitesSection /> */}
        <SiteTouristiqueSection/>
      </WrapperSection>
      <TestimonialsSection />
      <WrapperSection>
        <GuidedToursSection />
      </WrapperSection>
      <ScrollToTopButton />
    </Fragment>
  );
};
