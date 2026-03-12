import { tours } from '../../../../common/mocks';
import TourCard from '../HomePage/TouristSiteCard';
import { WORDS } from "../../../../common/constants/wording";

export const TouristSiteContainer = () => {
  return (
    <div className="container">
      <section className="all-tour" data-aos="fade-up">
        <div
          className="box-tours"
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
          <a href="/sites-touristiques" className="btn">
            {WORDS.tourist_site_page.container.load_more_button}
          </a>
          <p className="load-more-text">
            {WORDS.tourist_site_page.container.load_more_text}
          </p>
        </div>
      </section>
    </div>
  );
};

