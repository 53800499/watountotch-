/** @format */

import { Fragment } from "react";
import { PageHeader, WrapperSection } from "../components";
import { STORIES_HEADER_SLIDES } from "../../../common/mocks";
import { TourGuideContainer } from "../components/TourGuidePage";
import { SeachSection } from "../components/HomePage";

export const TourGuide = () => {
  return (
    <Fragment>
      <PageHeader slides={STORIES_HEADER_SLIDES} />
      <SeachSection />
      <WrapperSection>
        <section className="news container">
          <TourGuideContainer />
        </section>
      </WrapperSection>
    </Fragment>
  );
};
