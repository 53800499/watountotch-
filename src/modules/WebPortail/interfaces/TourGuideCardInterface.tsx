export interface TourGuideCardInterface {
  id: string;
  image: string;
  alt: string;
  category?: string;
  prix: string;
  title: string;
  link: string;
  author: {
    name: string;
  };
  stats: {
    likes: string;
    comments: string;
  };
}