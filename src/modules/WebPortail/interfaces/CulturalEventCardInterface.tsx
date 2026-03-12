/** @format */

export interface CulturalEventCardInterface {
  image: string;
  country: string;
  city: string;
  description: string;
  price?: string;
  rating?: number;
  onClick: () => void;
}
