/** @format */

import { FiltersSection, PageHeader, WrapperSection } from "../components";
import { BUDGETS, REGIONS, TYPES } from "../../../common/mocks/filters";
import { TouristSiteContainer } from "../components/TouristSitePage/TouristSiteContainer";
import { WORDS } from "../../../common/constants/wording";
import { STORIES_HEADER_SLIDES } from "../../../common/mocks";
import { Fragment } from "react/jsx-runtime";

export const TouristSite = () => {
  return (
    <Fragment>
      <PageHeader slides={STORIES_HEADER_SLIDES} />
      <WrapperSection>
        <section className="packages-tours">
          <FiltersSection
            title={WORDS.tourist_site_page.title}
            regions={REGIONS}
            types={TYPES}
            budgets={BUDGETS}
            description={WORDS.tourist_site_page.description}
          />
          <TouristSiteContainer />
        </section>
      </WrapperSection>
    </Fragment>
  );
};
