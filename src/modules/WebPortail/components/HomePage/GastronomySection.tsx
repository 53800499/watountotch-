/** @format */

import { useState } from "react";
import { WORDS } from "../../../../common/constants/wording";
import { Image } from "../../../../common/components/Image";
import { Link } from "react-router-dom";
import {
  BACKGROUND_ATELIER_DE_CUISINE,
  // BACKGROUND_BOUFFE_A,
  BACKGROUND_DESSERT,
  BACKGROUND_MARCHE,
  BACKGROUND_STREET_FOOD
} from "../../../../assets/images";

export const GastronomySection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="main pt-8 pb-8">
      <div className="main-content">
        <section
          className="popular-packages-tours container"
          data-aos="fade-up">
          <div className="text-center pb-4">
            <h3 className="title-above">
              {WORDS.home_page.gastronomy_section.title}
            </h3>
            <h2 className="heading-lg">
              {WORDS.home_page.gastronomy_section.subtitle}
            </h2>
            <p className="description">
              {WORDS.home_page.gastronomy_section.description}
            </p>
          </div>

          <div className="tours-collage" data-crop-images="">
            {/* CARD 1 */}
            <div
              className="tour-card tall bg-dark d-flex align-items-between"
              onMouseEnter={() => setHoveredIndex(1)}
              onMouseLeave={() => setHoveredIndex(null)}>
              <Image
                className="image"
                src={BACKGROUND_STREET_FOOD}
                alt="Beach Paradise"
              />

              {hoveredIndex === 1 && (
                <div className="tour-info">
                  <div>
                    <Link
                      to={WORDS.home_page.gastronomy_section.card1.link}
                      className="tag">
                      {WORDS.home_page.gastronomy_section.card1.link_text}
                    </Link>
                    <h3 className="title">
                      {WORDS.home_page.gastronomy_section.card1.title}
                    </h3>
                    <p>
                      {WORDS.home_page.gastronomy_section.card1.description}
                    </p>
                  </div>

                  <div className="bottom">
                    <span className="price">
                      {WORDS.home_page.gastronomy_section.card1.price}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* CARD 2 */}
            <div
              className="tour-card wide"
              onMouseEnter={() => setHoveredIndex(2)}
              onMouseLeave={() => setHoveredIndex(null)}>
              <Image
                className="image"
                src={BACKGROUND_ATELIER_DE_CUISINE}
                alt="Mountain Explorer"
              />

              {hoveredIndex === 2 && (
                <div className="tour-info">
                  <div>
                    <Link
                      to={WORDS.home_page.gastronomy_section.card2.link}
                      className="tag">
                      {WORDS.home_page.gastronomy_section.card2.link_text}
                    </Link>
                    <h3 className="title">
                      {WORDS.home_page.gastronomy_section.card2.title}
                    </h3>
                    <p>
                      {WORDS.home_page.gastronomy_section.card2.description}
                    </p>
                  </div>

                  <div className="bottom">
                    <span className="price">
                      {WORDS.home_page.gastronomy_section.card2.price}
                    </span>
                  </div>
                </div>
              )}
            </div>

            <div className="box-two-column">
              {/* CARD 3 */}
              <div
                className="tour-card"
                onMouseEnter={() => setHoveredIndex(3)}
                onMouseLeave={() => setHoveredIndex(null)}>
                <Image
                  className="image"
                  src={BACKGROUND_MARCHE}
                  alt="European City"
                />

                {hoveredIndex === 3 && (
                  <div className="tour-info">
                    <div>
                      <Link
                        to={WORDS.home_page.gastronomy_section.card3.link}
                        className="tag">
                        {WORDS.home_page.gastronomy_section.card3.link_text}
                      </Link>
                      <h3 className="title">
                        {WORDS.home_page.gastronomy_section.card3.title}
                      </h3>
                      <p>
                        {WORDS.home_page.gastronomy_section.card3.description}
                      </p>
                    </div>
                    <div className="bottom">
                      <span className="price">
                        {WORDS.home_page.gastronomy_section.card3.price}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* CARD 4 */}
              <div
                className="tour-card"
                onMouseEnter={() => setHoveredIndex(4)}
                onMouseLeave={() => setHoveredIndex(null)}>
                <Image
                  className="image"
                  src={BACKGROUND_DESSERT}
                  alt="Safari Adventure"
                />

                {hoveredIndex === 4 && (
                  <div className="tour-info">
                    <div>
                      <Link
                        to={WORDS.home_page.gastronomy_section.card4.link}
                        target="_blank"
                        rel="noreferrer"
                        className="tag">
                        {WORDS.home_page.gastronomy_section.card4.link_text}
                      </Link>
                      <h3 className="title">
                        {WORDS.home_page.gastronomy_section.card4.title}
                      </h3>
                      <p>
                        {WORDS.home_page.gastronomy_section.card4.description}
                      </p>
                    </div>

                    <div className="bottom">
                      <span className="price">
                        {WORDS.home_page.gastronomy_section.card4.price}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="text-center pt-5" data-aos="fade-down">
            <Link to="/gastronomy" className="btn btn-more">
              {WORDS.home_page.gastronomy_section.link_text}
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};
