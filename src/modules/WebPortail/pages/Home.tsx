/** @format */

import React, { Fragment } from "react";
import { WrapperSection } from "../components";
import {
  CallActionSection,
  CulturalEventsSection,
  GuidedToursSection,
  OurExperienceSection,
  TestimonialsSection,
  GastronomySection,
  TouristSitesSection,
  // SeachSection,
  HistoireSection,
  SeachSection
  // TouristSitesSection
} from "../components/HomePage";
import { ScrollToTopButton } from "../../../common/components";
import {
  BACKGROUND_CALL_TO_ACTION,
  BACKGROUND_CALL_TO_ACTION_B,
  BACKGROUND_STORY_A,
  BACKGROUND_STORY_B,
  BACKGROUND_STORY_C,
  GANI
} from "../../../assets/images";
import SlideHero from "../components/HomePage/SlideHero";
import { DestinationSection } from "../components/HomePage/DestinationSection";
import { CultureSection } from "../components/HomePage/CultureSection";
import { SiteTouristiqueSection } from "../components/HomePage/SiteTouristiqueSection";
import { CultureGastroSection } from "../components/HomePage/CulturalAndGastronomy";

export const Home = () => {
  type Slide = {
    country: string;
    city: string;
    text: string;
    image: string;
    button?: {
      label: string;
      link: string;
    };
  };

  const SLIDES: Slide[] = [
  {
    country: "Bénin",
    city: "Ouidah",
    text: "Plongez dans l’histoire profonde du Bénin à Ouidah — la Route des Esclaves, la Porte du Non-Retour et les traditions vodun racontent une mémoire puissante.",
    image: BACKGROUND_STORY_A,
    button: { label: "Explorer l'histoire", link: "#" }
  },
  {
    country: "Bénin",
    city: "Ganvié",
    text: "Découvrez Ganvié, la Venise de l’Afrique — un village unique construit sur l’eau où la vie se déroule au rythme des pirogues.",
    image: BACKGROUND_STORY_B,
    button: { label: "Découvrir le lieu", link: "#" }
  },
  {
    country: "Bénin",
    city: "Abomey",
    text: "Entrez dans l’histoire des royaumes du Dahomey à Abomey — palais royaux, traditions ancestrales et héritage culturel classé à l’UNESCO.",
    image: BACKGROUND_STORY_C,
    button: { label: "Visiter les royaumes", link: "#" }
  }/* ,
  {
    country: "Bénin",
    city: "Pendjari",
    text: "Explorez la réserve de la Pendjari — l’un des plus beaux parcs naturels d’Afrique de l’Ouest, refuge d’éléphants, lions et buffles.",
    image: GANI,
    button: { label: "Voir la nature", link: "#" }
  } */
];

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
