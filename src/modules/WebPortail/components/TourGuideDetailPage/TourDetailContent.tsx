/** @format */

import { Fragment } from "react";
import type { TourDetailContentInterface } from "../../interfaces/TourDetailContentInterface";



export const TourDetailContent = ({
  hero,
  content,
  author_image
}: TourDetailContentInterface) => {
  return (
    <div className="tour-detail-content">
      {/* Lead Paragraph */}
      <p className="lead-paragraph">{content.lead_paragraph}</p>

      {/* Main Paragraphs */}
      {content.paragraphs.map((paragraph, index) => (
        <p key={`paragraph-${index}`} className="detail-paragraph">
          {paragraph}
        </p>
      ))}

      {/* Highlights Section */}
      {content.highlights && content.highlights.length > 0 && (
        <div className="highlights-section">
          <h2>Points forts de cette visite</h2>
          <div className="highlights-grid">
            {content.highlights.map((highlight, index) => (
              <div key={`highlight-${index}`} className="highlight-card">
                <div className="highlight-icon">{highlight.icon}</div>
                <h3>{highlight.title}</h3>
                <p>{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Content Sections */}
      {content.sections.map((section, index) => (
        <Fragment key={`section-${index}`}>
          {section.title && <h2 className="section-title">{section.title}</h2>}
          <p className="section-text">{section.text}</p>
        </Fragment>
      ))}

      {/* Itinerary Section */}
      {content.itinerary && content.itinerary.length > 0 && (
        <div className="itinerary-section">
          <h2>Itinéraire détaillé</h2>
          <div className="itinerary-timeline">
            {content.itinerary.map((day, index) => (
              <div key={`day-${index}`} className="itinerary-day">
                <div className="day-header">
                  <span className="day-number">Jour {day.day}</span>
                  <h3 className="day-title">{day.title}</h3>
                  <span className="day-duration">{day.duration}</span>
                </div>
                <ul className="day-activities">
                  {day.activities.map((activity, actIndex) => (
                    <li key={`activity-${actIndex}`}>{activity}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Author Card */}
      <div className="author-section">
        <div className="author-card">
          <img src={author_image} alt={hero.author.name} className="author-avatar" />
          <div className="author-info">
            <h3>À propos du guide</h3>
            <p className="author-name">{hero.author.name}</p>
            <p className="author-bio">{hero.author.bio}</p>
            <div className="author-meta">
              <span className="meta-item">🏆 Guide certifié</span>
              <span className="meta-item">🌍 10+ ans d'expérience</span>
              <span className="meta-item">⭐ 4.8/5 (250+ avis)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
