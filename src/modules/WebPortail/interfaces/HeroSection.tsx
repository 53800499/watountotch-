/** @format */

export type Slide = {
  country: string;
  city: string;
  text: string;
  image: string;
  button?: {
    label: string;
    link: string;
  };
};
