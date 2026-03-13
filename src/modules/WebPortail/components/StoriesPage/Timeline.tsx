/** @format */

import React from "react";

export type TimelineItem = {
  year: string;
  title?: string;
  description?: string;
};

type TimelineProps = {
  items?: TimelineItem[];
  showDescriptions?: boolean;
  activeIndex?: number;
  onSelectIndex?: (index: number) => void;
};

export const Timeline: React.FC<TimelineProps> = ({
  items = [],
  showDescriptions = true,
  activeIndex,
  onSelectIndex
}) => {
  return (
    <section className="timeline-wrapper d-flex flex-column align-items-center">
      <h4 className="timeline-title">Les chapitres</h4>
      <div className="timeline">
        <div className="timeline-line" />

        {items.map((item, index) => {
          const isLeft = index % 2 === 0;
          const isActive = index === activeIndex;
          return (
            <div
              key={item.year + index}
              className={`timeline-row ${isLeft ? "left" : "right"} ${
                isActive ? "active" : ""
              }`}
              onClick={() => onSelectIndex?.(index)}>
              {isLeft && (
                <div className="timeline-year-badge">
                  <span>{item.year}</span>
                </div>
              )}

              {showDescriptions && item.description && (
                <div className="timeline-card">
                  <p className="timeline-text">{item.description}</p>
                </div>
              )}

              <div className="timeline-hover-preview">
                <h4>{item.title || item.year}</h4>
                <p>{item.description}</p>
              </div>

              {!isLeft && (
                <div className="timeline-year-badge">
                  <span>{item.year}</span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
