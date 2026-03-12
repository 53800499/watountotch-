/** @format */

import { HeroSection, WrapperSection } from "../components";
import { EventContainer } from "../components/EventPage/EventContainer";
import { EVENT_PAGE_HERO_BACKGROUND_NEWS } from "../../../assets/images";

export const Event = () => {
  return (
    <WrapperSection>
      <section className="news container">
        <HeroSection imageSrc={EVENT_PAGE_HERO_BACKGROUND_NEWS} />
        <EventContainer />
      </section>
    </WrapperSection>
  );
};
