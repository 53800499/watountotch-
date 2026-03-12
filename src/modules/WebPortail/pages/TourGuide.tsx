/** @format */

import { Fragment } from "react";
import { FiltersSection, PageHeader, WrapperSection } from "../components";
import { BUDGETS, REGIONS, STORIES_HEADER_SLIDES, TYPES } from "../../../common/mocks";
import { TourGuideContainer } from "../components/TourGuidePage";
import { WORDS } from "../../../common/constants/wording";

export const TourGuide = () => {
  return (
    <Fragment>
      <PageHeader slides={STORIES_HEADER_SLIDES} />
      <WrapperSection>
        <FiltersSection
          title={WORDS.tour_guide_page.title}
          regions={REGIONS}
          types={TYPES}
          budgets={BUDGETS}
          description={WORDS.tour_guide_page.description}
        />
        <section className="news container">
          <TourGuideContainer />    
        </section>
      </WrapperSection>
    </Fragment>
  );
};
