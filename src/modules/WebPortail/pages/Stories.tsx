/** @format */

import React, { Fragment } from "react";
import { PageHeader, WrapperSection } from "../components";
import { StoriesGallery, Triumvirat } from "../components/StoriesPage";
import { STORIES_HEADER_SLIDES } from "../../../common/mocks";

export const Stories: React.FC = () => {
  return (
    <Fragment>
      <PageHeader slides={STORIES_HEADER_SLIDES} />
      <WrapperSection>
        <StoriesGallery />
      </WrapperSection>
      <Triumvirat />
    </Fragment>
  );
};
