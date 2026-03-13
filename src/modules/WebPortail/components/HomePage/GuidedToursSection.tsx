/** @format */

import GuidedToursCard from "./GuidedToursCard";
import { guidedTours } from "../../../../common/mocks/guidedTours";
import { WORDS } from "../../../../common/constants/wording";
import { Link } from "react-router-dom";

export const GuidedToursSection = () => {
  return (
    <section className="news">
      <div className="section-header">
        <h2>{WORDS.home_page.guided_tours_section.title}</h2>
        <div className="divider"></div>
        <p style={{ marginTop: "15px", color: "#666" }}>
          {" "}
          {WORDS.home_page.guided_tours_section.subtitle}
        </p>
      </div>

      <div className="box-news" data-crop-images="">
        {guidedTours.map((post) => (
          <GuidedToursCard key={post.id} {...post} />
        ))}
      </div>

      <div className="text-center pt-5" data-aos="fade-down">
        <Link to="/guided-tours" className="btn btn-more">
          {WORDS.home_page.guided_tours_section.button_text}
        </Link>
      </div>
    </section>
  );
};
