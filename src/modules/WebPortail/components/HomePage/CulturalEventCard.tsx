/** @format */

import { Button } from "../../../../common/components";
import type { CulturalEventCardInterface } from "../../interfaces/CulturalEventCardInterface";

export default function CulturalEventCard({
  image,
  country,
  city,
  description,
  price = "Gratuit",
  rating = 10.0,
  onClick
}: CulturalEventCardInterface) {
  return (
    <div className="destination">
      <div className="box-image">
        <div className="star-rate">
          <svg>
            <use href="#star-filled"></use>
          </svg>
          <span className="rate">{rating}</span>
        </div>

        <img className="image" src={image} alt={`${city} Destination`} />
      </div>

      <div className="box-info">
        <div className="detail">
          <h3 className="title">
            <svg>
              <use href="#map-marker-5"></use>
            </svg>
            {country} - {city}
          </h3>

          <p className="text">{description}</p>
        </div>

        <div className="price-action">
          <span className="price">{price}</span>

          <Button
            className="btn-decouvrir animated-btn-none"
            variant="trial"
            onClick={onClick}>
            Découvrir
          </Button>
        </div>
      </div>
    </div>
  );
}
