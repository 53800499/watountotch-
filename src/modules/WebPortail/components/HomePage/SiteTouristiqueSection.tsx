/** @format */

import { WORDS } from "../../../../common/constants/wording";
import { TOURISTIC_SITES_MOCK } from "../../../../common/mocks/home_page";

export const SiteTouristiqueSection = () => {
  const { title /* , subtitle, description */, button_text } =
    WORDS.home_page.tourist_sites_section;

  return (
    <>
      <section id="sites-touristiques">
        <div className="section-header">
          <h2>{title}</h2>
          <div className="divider"></div>
          {/* 
          {subtitle && (
            <p style={{ marginTop: "10px", color: "#666" }}>{subtitle}</p>
          )}
          {description && (
            <p style={{ marginTop: "5px", color: "#777", fontSize: "0.95rem" }}>
              {description}
            </p>
          )} */}
        </div>

        {TOURISTIC_SITES_MOCK.map((site) => {
          const isImageLeft = site.imagePosition === "left";

          const TextBlock = (
            <div className="history-text">
              <h3>{site.title}</h3>
              <p>{site.description}</p>

              <a
                href={site.href ?? "#"}
                className="btn animated-btn text-black">
                {site.buttonLabel}
              </a>
            </div>
          );

          const ImageBlock = (
            <img
              src={site.imageUrl}
              className={`history-img ${isImageLeft ? "img-left" : ""}`}
              alt={site.imageAlt}
            />
          );

          return (
            <div className="history-grid" key={site.title}>
              {isImageLeft ?
                <>
                  {ImageBlock}
                  {TextBlock}
                </>
              : <>
                  {TextBlock}
                  {ImageBlock}
                </>
              }
            </div>
          );
        })}

        <div className="d-flex justify-center">
          <a href="/sites-touristiques" className="btn animated-btn text-black">
            {button_text}
          </a>
        </div>
      </section>
    </>
  );
};
