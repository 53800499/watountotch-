/** @format */

export interface TourDetailContentInterface {
  hero: {
    image_alt: string;
    category: string;
    date: string;
    read_time: string;
    title: string;
    author: {
      name: string;
      bio: string;
    };
  };
  content: {
    lead_paragraph: string;
    paragraphs: string[];
    sections: Array<{
      title?: string;
      text: string;
    }>;
    highlights?: Array<{
      icon: string;
      title: string;
      description: string;
    }>;
    itinerary?: Array<{
      day: number;
      title: string;
      activities: string[];
      duration: string;
    }>;
  };
  author_image: string;
}
