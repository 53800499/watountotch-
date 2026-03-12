/** @format */

import { Image } from "../../../../common/components/Image";
import { WORDS } from "../../../../common/constants/wording";
import {
  GASTRONOMY_DETAIL_GALLERY_IMAGE_01,
  GASTRONOMY_DETAIL_GALLERY_IMAGE_02,
  GASTRONOMY_DETAIL_GALLERY_IMAGE_03,
  GASTRONOMY_DETAIL_GALLERY_IMAGE_04,
  GASTRONOMY_DETAIL_GALLERY_IMAGE_05,
  GASTRONOMY_DETAIL_GALLERY_IMAGE_06
} from "../../../../assets/images";

export const GastronomyDetailContainer = () => {
  const {
    overview,
    booking_card: bookingCard,
    itinerary,
    services,
    gallery,
    pricing
  } = WORDS.gastronomy_detail_page.details;

  const galleryImages = [
    { src: GASTRONOMY_DETAIL_GALLERY_IMAGE_01, alt: gallery.images[0].alt },
    { src: GASTRONOMY_DETAIL_GALLERY_IMAGE_02, alt: gallery.images[1].alt },
    { src: GASTRONOMY_DETAIL_GALLERY_IMAGE_03, alt: gallery.images[2].alt },
    { src: GASTRONOMY_DETAIL_GALLERY_IMAGE_04, alt: gallery.images[3].alt },
    { src: GASTRONOMY_DETAIL_GALLERY_IMAGE_05, alt: gallery.images[4].alt },
    { src: GASTRONOMY_DETAIL_GALLERY_IMAGE_06, alt: gallery.images[5].alt }
  ];

  return (
    <div className="container">
      <section className="tour-overview" data-aos="fade-up">
        <div className="overview-content">
          <div className="overview-main">
            <h3 className="title-above left">{overview.title}</h3>
            <h2 className="heading-lg">{overview.heading}</h2>
            <p className="description">{overview.description}</p>

            <div className="tour-highlights">
              <h4>{overview.included_title}</h4>
              <div className="highlights-grid">
                {overview.included_items.map((item) => (
                  <div className="highlight-item" key={item}>
                    <svg viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="overview-sidebar">
            <div className="booking-card">
              <div className="price-section">
                <div className="price-info">
                  <span className="price-from">
                    {bookingCard.price_from_label}
                  </span>
                  <span className="price-amount">
                    {bookingCard.price_amount}
                  </span>
                  <span className="price-per">{bookingCard.price_suffix}</span>
                </div>
                <div className="rating">
                  <div className="stars">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <svg key={index} viewBox="0 0 24 24">
                        <use xlinkHref="#star-filled"></use>
                      </svg>
                    ))}
                  </div>
                  <span className="rating-text">{bookingCard.rating_text}</span>
                </div>
              </div>

              <div className="tour-details">
                {bookingCard.details.map((detail) => (
                  <div className="detail-row" key={detail.text}>
                    <svg viewBox="0 0 24 24">
                      <use xlinkHref={detail.icon}></use>
                    </svg>
                    <span>{detail.text}</span>
                  </div>
                ))}
              </div>

              <div className="text-center pt-2">
                <a href="javascript:void(0)" className="btn-book">
                  {bookingCard.cta_label}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tour-itinerary" data-aos="fade-up">
        <h3 className="title-above">{itinerary.title}</h3>
        <h2 className="heading-lg">{itinerary.subtitle}</h2>

        <div className="itinerary-timeline">
          {itinerary.days.map((day) => (
            <div className="timeline-item" key={day.day_number}>
              <div className="timeline-marker">
                <span className="day-number">{day.day_number}</span>
              </div>
              <div className="timeline-content">
                <h4>{day.title}</h4>
                <div className="time-badge">{day.time}</div>
                <p>{day.description}</p>
                <div className="day-highlights">
                  {day.highlights.map((highlight) => (
                    <span className="highlight" key={highlight}>
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="tour-services" data-aos="fade-up">
        <div className="services-grid">
          <div className="services-column">
            <h3 className="title-above left">{services.included.title}</h3>
            <div className="services-list">
              {services.included.items.map((item) => (
                <div className="service-item" key={item.title}>
                  <svg viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <div className="service-info">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="services-column">
            <h3 className="title-above left">{services.bring.title}</h3>
            <div className="bring-list">
              {services.bring.items.map((item) => (
                <div className="bring-item" key={item}>
                  <svg viewBox="0 0 24 24">
                    <use xlinkHref="#star-filled"></use>
                  </svg>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="tour-gallery" data-aos="fade-up">
        <h3 className="title-above">{gallery.title}</h3>
        <h2 className="heading-lg">{gallery.subtitle}</h2>

        <div className="gallery-grid" data-crop-images="">
          {galleryImages.map((image) => (
            <div className="gallery-item" key={image.alt}>
              <Image src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>
      </section>

      <section className="pricing" data-aos="fade-up">
        <h3 className="title-above">{pricing.title}</h3>
        <h2 className="heading-lg">{pricing.subtitle}</h2>

        <div className="pricing-grid">
          {pricing.packages.map((pkg) => (
            <div
              className={`pricing-card${pkg.badge ? " featured" : ""}`}
              key={pkg.name}>
              {pkg.badge ? (
                <div className="popular-badge">{pkg.badge}</div>
              ) : null}
              <h4 className="package-name">{pkg.name}</h4>
              <div className="package-price">
                <span className="price">{pkg.price}</span>
                <span className="per">{pkg.per}</span>
              </div>
              <div className="package-features">
                {pkg.features.map((feature) => (
                  <div className="feature" key={feature}>
                    {feature}
                  </div>
                ))}
              </div>
              <button className="btn-select">{pkg.cta_label}</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
