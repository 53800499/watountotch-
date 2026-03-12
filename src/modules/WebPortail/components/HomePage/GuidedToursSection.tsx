import React from 'react'
import GuidedToursCard from './GuidedToursCard';
import { guidedTours } from "../../../../common/mocks/guidedTours";
import { WORDS } from "../../../../common/constants/wording";
import { Link } from "react-router-dom";

export const GuidedToursSection = () => {
  return (
    <section className="news">
      <div className="text-center pb-4" data-aos="fade-up">
        <h3 className="title-above">
          {WORDS.home_page.guided_tours_section.title}
        </h3>
        <h2 className="heading-lg">
          {WORDS.home_page.guided_tours_section.subtitle}
        </h2>
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
