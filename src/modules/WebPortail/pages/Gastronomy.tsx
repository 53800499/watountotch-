/** @format */

import {
  FiltersSection,
  // HeroSection,
  PageHeader,
  WrapperSection
} from "../components";
import { WORDS } from "../../../common/constants/wording";
import { BUDGETS, REGIONS, TYPES } from "../../../common/mocks/filters";
import { GatronomyContainer } from "../components/GastronomyPage";
import { Fragment } from "react/jsx-runtime";
import { STORIES_HEADER_SLIDES } from "../../../common/mocks";

export const Gastronomy = () => {
  return (
    <Fragment>
      {/* <HeroSection /> */}
      <PageHeader slides={STORIES_HEADER_SLIDES} />

      <WrapperSection>
        <section className="packages-tours">
          <FiltersSection
            title={WORDS.tourist_site_page.title}
            // subTitle={WORDS.tourist_site_page.subTitle}
            regions={REGIONS}
            types={TYPES}
            budgets={BUDGETS}
            description={WORDS.tourist_site_page.description}
          />
          <GatronomyContainer />
        </section>
      </WrapperSection>
    </Fragment>
  );
};
