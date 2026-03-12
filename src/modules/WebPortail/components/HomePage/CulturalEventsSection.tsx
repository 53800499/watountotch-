import CulturalEventCard from "./CulturalEventCard";
import { cultural_event } from "../../../../common/mocks/culturalEvent";
import { WORDS } from "../../../../common/constants/wording";
import { Link } from "react-router-dom";

export const CulturalEventsSection = () => {
  return (
    <section className="top-destinations container" data-aos="fade-down">
      <div className="text-center pb-3">
        <h3 className="title-above">
          {WORDS.home_page.cultural_events_section.title}
        </h3>
        <h2 className="heading-lg">
          {WORDS.home_page.cultural_events_section.subtitle}
        </h2>
        <p>{WORDS.home_page.cultural_events_section.description}</p>
      </div>

      <div className="box-destinations" data-crop-images="">
        {cultural_event.map((item) => (
          <CulturalEventCard
            key={item.id}
            image={item.image}
            rating={item.rating}
            country={item.country}
            city={item.city}
            description={item.description}
            price={item.price}
            onClick={() => console.log("Découvrir:", item.city)}
          />
        ))}
      </div>

      <div className="pt-5" data-aos="fade-down">
        <Link to="#" className="btn btn-more">
          {WORDS.home_page.cultural_events_section.button_text}
        </Link>
      </div>
    </section>
  );
};
