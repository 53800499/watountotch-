import { WORDS } from "../../../../common/constants/wording";
import { HISTORY_TIMELINE_MOCK } from "../../../../common/mocks/home_page";

export const HistoireSection = () => {
  const { title, subtitle } = WORDS.home_page.history_section;

  return (
    <section id="histoire" className="">
      <div className="section-header">
        <h2>{title}</h2>
        <div className="divider"></div>
        {subtitle && (
          <p style={{ marginTop: "15px", color: "#666" }}>{subtitle}</p>
        )}
      </div>

      <div className="timelines-wrapper">
        <div className="timelines-line"></div>

        {HISTORY_TIMELINE_MOCK.map((era) => (
          <div className="timelines-item" key={era.period}>
            <div
              className="timelines-dot"
              style={era.dotColor ? { background: era.dotColor } : undefined}
            ></div>

            <div
              className="timelines-card"
              style={era.href ? { cursor: "pointer" } : undefined}
              onClick={
                era.href ? () => (window.location.href = era.href as string) : undefined
              }
            >
              <span className="timelines-year">{era.period}</span>
              <h3 className="timelines-title">{era.title}</h3>
              <p className="timelines-content">{era.description}</p>

              {era.ctaLabel && (
                <span
                  style={{
                    fontSize: "0.8rem",
                    textDecoration: "underline",
                    color: "var(--benin-red)",
                    marginTop: "10px",
                    display: "block"
                  }}
                >
                  {era.ctaLabel}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};