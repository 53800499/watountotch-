/** @format */

import { Link } from "react-router-dom";
import { WORDS } from "../../../../common/constants/wording";
import { Image } from "../../../../common/components/Image";
import {
  GASTRONOMY_CARD1_HERO_IMAGE,
  GASTRONOMY_CARD2_HERO_IMAGE,
  GASTRONOMY_CARD3_HERO_IMAGE,
  GASTRONOMY_CARD4_HERO_IMAGE
} from "../../../../assets/images";

export const GatronomyContainer = () => {
  return (
    <div className="main pt-2 pb-2">
      {/* <!-- Main Content --> */}
      <div className="main-content">
        {/* <!-- Gastronomy Section --> */}
        <section
          className="popular-packages-tours container"
          data-aos="fade-up">
          <div className="tours-collage" data-crop-images="">
            <div className="tour-card tall">
              <Image
                className="image"
                src={GASTRONOMY_CARD1_HERO_IMAGE}
                alt="Beach Paradise"
              />
              <div className="tour-info">
                <div>
                  <span className="tag">
                    {WORDS.home_page.gastronomy_section.card1.slug}
                  </span>
                  <h3 className="title">
                    {WORDS.home_page.gastronomy_section.card1.title}
                  </h3>
                  <p>{WORDS.home_page.gastronomy_section.card1.description}</p>
                </div>

                <div className="bottom">
                  <span className="price">
                    {WORDS.home_page.gastronomy_section.card1.price}
                  </span>
                  <Link
                    to={WORDS.home_page.gastronomy_section.card1.link}
                    className="btn xs">
                    {WORDS.home_page.gastronomy_section.card1.link_text}
                  </Link>
                </div>
              </div>
            </div>

            <div className="tour-card wide">
              <Image
                className="image"
                src={GASTRONOMY_CARD2_HERO_IMAGE}
                alt="Mountain Explorer"
              />
              <div className="tour-info">
                <div>
                  <span className="tag">
                    {WORDS.home_page.gastronomy_section.card2.slug}
                  </span>
                  <h3 className="title">
                    {WORDS.home_page.gastronomy_section.card2.title}
                  </h3>
                  <p>{WORDS.home_page.gastronomy_section.card2.description}</p>
                </div>
                <div className="bottom">
                  <span className="price">
                    {WORDS.home_page.gastronomy_section.card2.price}
                  </span>
                  <Link
                    to={WORDS.home_page.gastronomy_section.card2.link}
                    className="btn xs">
                    {WORDS.home_page.gastronomy_section.card2.link_text}
                  </Link>
                </div>
              </div>
            </div>

            <div className="box-two-column">
              <div className="tour-card">
                <Image
                  className="image"
                  src={GASTRONOMY_CARD3_HERO_IMAGE}
                  alt="European City"
                />
                <div className="tour-info">
                  <div>
                    <span className="tag">
                      {WORDS.home_page.gastronomy_section.card3.slug}
                    </span>
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
                    <Link
                      to={WORDS.home_page.gastronomy_section.card3.link}
                      className="btn xs">
                      {WORDS.home_page.gastronomy_section.card3.link_text}
                    </Link>
                  </div>
                </div>
              </div>

              <div className="tour-card">
                <Image
                  className="image"
                  src={GASTRONOMY_CARD4_HERO_IMAGE}
                  alt="Safari Adventure"
                />
                <div className="tour-info">
                  <div>
                    <span className="tag">
                      {WORDS.home_page.gastronomy_section.card4.slug}
                    </span>
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
                    <Link
                      to={WORDS.home_page.gastronomy_section.card4.link}
                      target="_blank"
                      rel="noreferrer"
                      className="btn xs">
                      {WORDS.home_page.gastronomy_section.card4.link_text}
                    </Link>
                  </div>
                </div>
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
