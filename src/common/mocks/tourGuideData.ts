/** @format */

import {
  BLOG_POST_IMAGE_01,
  BLOG_POST_IMAGE_02,
  BLOG_POST_IMAGE_03
} from "../../assets/images";
import type { TourGuideCardInterface } from "../../modules/WebPortail/interfaces/TourGuideCardInterface";

export const tourGuideCardsData: TourGuideCardInterface[] = [
  {
    id: "card1",
    image: BLOG_POST_IMAGE_01,
    alt: "Best Travel Destinations 2025",
    prix: "2000 FCFA / jour",
    title: "Passionné des traditions orales et des patrimoines culturels",
    link: "/guide-touristique/tabar",
    author: {
      name: "Amanda Wilson"
    },
    stats: {
      likes: "24",
      comments: "12"
    }
  },
  {
    id: "card2",
    image: BLOG_POST_IMAGE_02,
    alt: "Budget Travel Tips",
    category: "Budget Travel",
    prix: "3000 FCFA / jour",
    title: "Passionne des voyages culturels Ouest Africains",
    link: "/guide-touristique/tabar",
    author: {
      name: "James Wilson"
    },
    stats: {
      likes: "156",
      comments: "42"
    }
  },
  {
    id: "card3",
    image: BLOG_POST_IMAGE_03,
    alt: "Sustainable Travel Guide",
    prix: "5000 FCFA / jour",
    title: "Passionnée par l’histoire et la culture du Bénin",
    link: "/guide-touristique/tabar",
    author: {
      name: "David Thompson"
    },
    stats: {
      likes: "67",
      comments: "28"
    }
  },
  {
    id: "card3",
    image: BLOG_POST_IMAGE_03,
    alt: "Sustainable Travel Guide",
    prix: "7000 FCFA / jour",
    title: "Guide accompagnateur spécialiste de l’Ouémé et du Plateau.",
    link: "/guide-touristique/tabar",
    author: {
      name: "David Thompson"
    },
    stats: {
      likes: "67",
      comments: "28"
    }
  },
  {
    id: "card3",
    image: BLOG_POST_IMAGE_03,
    alt: "Sustainable Travel Guide",
    prix: "1000 FCFA / jour",
    title: " Spécialiste des plantes médicinales et ornithologue",
    link: "/guide-touristique/tabar",
    author: {
      name: "David Thompson"
    },
    stats: {
      likes: "67",
      comments: "28"
    }
  }
];

