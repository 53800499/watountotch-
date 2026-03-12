/** @format */

import TourCard from "./TouristSiteCard";
import { tours } from "../../../../common/mocks/touristSite";
import { WORDS } from "../../../../common/constants/wording";
import { Link } from "react-router-dom";

export const TouristSitesSection = () => {
  const gridStyles = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))"
  };

  return (
    <div className="packages-tours">
      <div className="container">
        <section className="all-tour" data-aos="fade-up">
          <div className="text-center pb-4">
            <h3 className="title-above">
              {WORDS.home_page.tourist_sites_section.title}
            </h3>
            <h2 className="heading-lg">
              {WORDS.home_page.tourist_sites_section.subtitle}
            </h2>
            <p className="description">
              {WORDS.home_page.tourist_sites_section.description}
            </p>
          </div>
          <div
            className="box-tours"
            style={gridStyles}
            data-crop-images=""
            data-filter-container=""
            data-item-selector=".tour-card"
            data-filter-controls=".filter-select"
            data-clear-button=".filter-clear"
            data-gutter="30"
            data-padding="10">
            {tours.map((tour) => (
              <TourCard key={tour.id} {...tour} />
            ))}
          </div>

          {/* <!-- Load More Button --> */}
          <div className="text-center pt-5" data-aos="fade-down">
            <Link to="/sites-touristiques" className="btn btn-more">
              {WORDS.home_page.tourist_sites_section.button_text}
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};
