import { WORDS } from "../../../../common/constants/wording";
import { TOURISTIC_SITES_MOCK } from "../../../../common/mocks/home_page";

export const SiteTouristiqueSection = () => {
  const { title/* , subtitle, description */, button_text } =
    WORDS.home_page.tourist_sites_section;

  return (
    <>
      <section id="sites-touristiques">
        <div className="section-header">
          <h2>{title}</h2>
          <div className="divider"></div>{/* 
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
                className="btn-cta"
                style={{ background: "var(--benin-green)" }}
              >
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
              {isImageLeft ? (
                <>
                  {ImageBlock}
                  {TextBlock}
                </>
              ) : (
                <>
                  {TextBlock}
                  {ImageBlock}
                </>
              )}
            </div>
          );
        })}

        
            <a
              href="/sites-touristiques"
              className="btn-cta"
              style={{ background: "var(--benin-green)" }}
            >
              {button_text}
            </a>
      </section>
    </>
  );
};
