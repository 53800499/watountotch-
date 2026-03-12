import { WORDS } from "../../../../common/constants/wording";
import { POPULAR_DESTINATIONS_MOCK } from "../../../../common/mocks/home_page";

export const DestinationSection = () => {
  const { title } = WORDS.home_page.destinations_section;

  return (
    <>
      <section id="destinations">
        <div className="section-header">
          <h2>{title}</h2>
          <div className="divider"></div>
        </div>

        <div className="destinations-grid">
          {POPULAR_DESTINATIONS_MOCK.map((destination) => {
            const CardContent = (
              <>
                <img
                  src={destination.imageUrl}
                  alt={destination.imageAlt}
                />
                <div className="dest-overlay">
                  <h3>{destination.title}</h3>
                  <p>{destination.subtitle}</p>
                </div>
              </>
            );

            return (
              <div className="dest-card" key={destination.title}>
                {destination.href ? (
                  <a href={destination.href}>{CardContent}</a>
                ) : (
                  CardContent
                )}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};