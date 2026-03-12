/** @format */

export interface Slide {
  country: string;
  city: string;
  text: string;
  image: string;
  button?: { label: string; link: string };
}
export interface SlideHeroConfig {
  duration?: number;
  autoplay?: { enabled: boolean };
  timeline?: { enabled: boolean; loop?: boolean };
  textAnimation?: {
    entrance?: {
      orientation?: "up" | "down" | "left" | "right";
      duration?: number;
    };
    exit?: {
      orientation?: "up" | "down" | "left" | "right";
      duration?: number;
    };
  };
}
