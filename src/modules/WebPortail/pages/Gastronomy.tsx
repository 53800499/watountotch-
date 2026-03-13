/** @format */

import { PageHeader, WrapperSection } from "../components";
import { GatronomyContainer } from "../components/GastronomyPage";
import { Fragment } from "react/jsx-runtime";
import { STORIES_HEADER_SLIDES } from "../../../common/mocks";
import { SeachSection } from "../components/HomePage";

export const Gastronomy = () => {
  return (
    <Fragment>
      <PageHeader slides={STORIES_HEADER_SLIDES} />
      <SeachSection />
      <WrapperSection>
        <section className="packages-tours">
          <GatronomyContainer />
        </section>
      </WrapperSection>
    </Fragment>
  );
};
