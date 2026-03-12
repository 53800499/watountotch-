/** @format */

import React from "react";
import type { TourCardInterface } from "../../interfaces/TourCardInterface";
import { Image } from "../../../../common/components/Image";
import { Link } from "react-router-dom";

const TourCard = ({
  image,
  title,
  description,
  duration,
  price,
  link = "#",
  region,
  budget,
  type
}: TourCardInterface) => {
  return (
    <div
      className="tour-card"
      data-region={region}
      data-budget={budget}
      data-type={type}>
      <Image className="image" src={image} alt={title} />

      <div className="tour-info">
        <div>
          <span className="tag">{duration}</span>
          <h3 className="title">{title}</h3>
          <p>{description}</p>
        </div>

        <div className="bottom">
          <span className="price">{price}</span>
          <Link to={link} className="btn xs">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
