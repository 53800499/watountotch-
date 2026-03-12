/** @format */

import { PageHeader, WrapperSection } from "../components";
import { DestinationDetailContainer } from "../components/DestinationDetailPage";
import { useParams } from "react-router-dom";
import { STORIES_HEADER_SLIDES } from "../../../common/mocks";
import { Fragment } from "react/jsx-runtime";

export const DestinationDetail = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <Fragment>
    <a href="index.html" className="nav-back"><i className="fas fa-arrow-left"></i> Retour</a>
    
    <a href="index.html" className="logo-floating">WATOUN<span>TOTCHE</span></a>
      <PageHeader slides={STORIES_HEADER_SLIDES} />
      <section className="news container">
        <DestinationDetailContainer />
      </section>
    </Fragment>
  );
};
