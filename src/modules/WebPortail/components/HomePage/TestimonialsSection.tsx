/** @format */

import { WORDS } from "../../../../common/constants/wording";
import { Image } from "../../../../common/components/Image";
import {
  TESTIMONIALS_BACKGROUND_TRAVELS,
  TESTIMONIAL_AVATAR_AICHA,
  TESTIMONIAL_AVATAR_JOHN,
  TESTIMONIAL_AVATAR_LEA,
  TESTIMONIAL_AVATAR_MARIE
} from "../../../../assets/images";

export const TestimonialsSection = () => {
  return (
    <section className="testimonials testimonial-image-bg">
      <div className="box-image">
        <Image
          className="image"
          src={TESTIMONIALS_BACKGROUND_TRAVELS}
          alt="Témoignages des Voyageurs au Bénin"
        />
      </div>

      <div className="main-testimonials pt-5 pb-5">
        <div className="section-header">
          <h2 className="text-white">{WORDS.home_page.testimonial_section.title}</h2>
          <div className="divider"></div>
          {/* <h6 className="heading-lg text-white">
            {WORDS.home_page.testimonial_section.subTitle}
          </h6> */}
<p style={{ marginTop: "15px", color: "#fff" }}>            {WORDS.home_page.testimonial_section.description}
          </p>
        </div>

        <div
          className="testimonials-slider"
          data-testimonials-slider=""
          data-aos="fade-left">
          <div className="testimonial-item active" data-testimonial="">
            <div className="testimonial-content">
              <div className="stars">
                <svg className="star" viewBox="0 0 24 24">
                  <use xlinkHref="#star-filled"></use>
                </svg>
                <svg className="star" viewBox="0 0 24 24">
                  <use xlinkHref="#star-filled"></use>
                </svg>
                <svg className="star" viewBox="0 0 24 24">
                  <use xlinkHref="#star-filled"></use>
                </svg>
                <svg className="star" viewBox="0 0 24 24">
                  <use xlinkHref="#star-filled"></use>
                </svg>
                <svg className="star" viewBox="0 0 24 24">
                  <use xlinkHref="#star-filled"></use>
                </svg>
              </div>
              <div className="testimonial-text">
                "{WORDS.home_page.testimonial_section.card1.comment}"
              </div>
              <div className="testimonial-author">
                <div className="author-image">
                  <Image src={TESTIMONIAL_AVATAR_MARIE} alt="Marie Dupont" />
                </div>
                <div className="author-info">
                  <div className="author-name">
                    {WORDS.home_page.testimonial_section.card1.name}
                  </div>
                  <div className="author-location">
                    {WORDS.home_page.testimonial_section.card1.location}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="testimonial-item" data-testimonial="">
            <div className="testimonial-content">
              <div className="stars">
                <svg className="star" viewBox="0 0 24 24">
                  <use xlinkHref="#star-filled"></use>
                </svg>
                <svg className="star" viewBox="0 0 24 24">
                  <use xlinkHref="#star-filled"></use>
                </svg>
                <svg className="star" viewBox="0 0 24 24">
                  <use xlinkHref="#star-filled"></use>
                </svg>
                <svg className="star" viewBox="0 0 24 24">
                  <use xlinkHref="#star-filled"></use>
                </svg>
                <svg className="star" viewBox="0 0 24 24">
                  <use xlinkHref="#star-filled"></use>
                </svg>
              </div>
              <div className="testimonial-text">
                "{WORDS.home_page.testimonial_section.card2.comment}"
              </div>
              <div className="testimonial-author">
                <div className="author-image">
                  <Image src={TESTIMONIAL_AVATAR_JOHN} alt="John Smith" />
                </div>
                <div className="author-info">
                  <div className="author-name">
                    {WORDS.home_page.testimonial_section.card2.name}
                  </div>
                  <div className="author-location">
                    {WORDS.home_page.testimonial_section.card2.location}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="testimonial-item" data-testimonial="">
            <div className="testimonial-content">
              <div className="stars">
                <svg className="star" viewBox="0 0 24 24">
                  <use xlinkHref="#star-filled"></use>
                </svg>
                <svg className="star" viewBox="0 0 24 24">
                  <use xlinkHref="#star-filled"></use>
                </svg>
                <svg className="star" viewBox="0 0 24 24">
                  <use xlinkHref="#star-filled"></use>
                </svg>
                <svg className="star" viewBox="0 0 24 24">
                  <use xlinkHref="#star-filled"></use>
                </svg>
                <svg className="star" viewBox="0 0 24 24">
                  <use xlinkHref="#star-filled"></use>
                </svg>
              </div>
              <div className="testimonial-text">
                "{WORDS.home_page.testimonial_section.card3.comment}"
              </div>
              <div className="testimonial-author">
                <div className="author-image">
                  <Image src={TESTIMONIAL_AVATAR_AICHA} alt="Aïcha Kone" />
                </div>
                <div className="author-info">
                  <div className="author-name">
                    {WORDS.home_page.testimonial_section.card3.name}
                  </div>
                  <div className="author-location">
                    {WORDS.home_page.testimonial_section.card3.location}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="testimonial-item" data-testimonial="">
            <div className="testimonial-content">
              <div className="stars">
                <svg className="star" viewBox="0 0 24 24">
                  <use xlinkHref="#star-filled"></use>
                </svg>
                <svg className="star" viewBox="0 0 24 24">
                  <use xlinkHref="#star-filled"></use>
                </svg>
                <svg className="star" viewBox="0 0 24 24">
                  <use xlinkHref="#star-filled"></use>
                </svg>
                <svg className="star" viewBox="0 0 24 24">
                  <use xlinkHref="#star-filled"></use>
                </svg>
                <svg className="star" viewBox="0 0 24 24">
                  <use xlinkHref="#star-filled"></use>
                </svg>
              </div>
              <div className="testimonial-text">
                "{WORDS.home_page.testimonial_section.card4.comment}"
              </div>
              <div className="testimonial-author">
                <div className="author-image">
                  <Image src={TESTIMONIAL_AVATAR_LEA} alt="Léa Martin" />
                </div>
                <div className="author-info">
                  <div className="author-name">
                    {WORDS.home_page.testimonial_section.card4.name}
                  </div>
                  <div className="author-location">
                    {WORDS.home_page.testimonial_section.card4.location}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="testimonials-navigation">
            <button
              className="control-btn prev"
              data-prev=""
              aria-label="Voir le témoignage précédent">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button
              className="control-btn next"
              data-next=""
              aria-label="Voir le témoignage suivant">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
          </div>
        </div>

        <div className="testimonials-dots" data-dots=""></div>
      </div>
    </section>
  );
};
