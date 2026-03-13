/** @format */

import { PageHeader, WrapperSection } from "../components";
import { TouristSiteContainer } from "../components/TouristSitePage/TouristSiteContainer";
import { STORIES_HEADER_SLIDES } from "../../../common/mocks";
import { Fragment } from "react/jsx-runtime";
import { SeachSection } from "../components/HomePage";

export const TouristSite = () => {
  return (
    <Fragment>
      <PageHeader slides={STORIES_HEADER_SLIDES} />
      <SeachSection />
      <WrapperSection>
        <section className="packages-tours">
          <TouristSiteContainer />
        </section>
      </WrapperSection>
    </Fragment>
  );
};
