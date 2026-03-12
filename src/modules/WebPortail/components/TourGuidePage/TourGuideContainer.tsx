/** @format */

import React from "react";
import { WORDS } from "../../../../common/constants/wording";
import { TourGuideCard } from "./TourGuideCard";
import { tourGuideCardsData } from "../../../../common/mocks/tourGuideData";

export const TourGuideContainer = () => {
  return (
    <div className="include-aside">
      <div className="content">
        <div className="tour-guide-grid">
          {tourGuideCardsData.map((card) => (
            <TourGuideCard key={card.id} {...card} />
          ))}
        </div>
        <div className="text-center pt-5" data-aos="fade-down">
          <a href="javascript:void(0)" className="btn btn-more">
            {WORDS.event_page.list.load_more_button}
          </a>
        </div>
      </div>
    </div>
  );
};
