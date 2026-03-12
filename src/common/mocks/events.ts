/** @format */

import {
  BLOG_AUTHOR_AVATAR_AMANDA,
  BLOG_AUTHOR_AVATAR_DAVID,
  BLOG_AUTHOR_AVATAR_JAMES,
  BLOG_POST_IMAGE_01,
  BLOG_POST_IMAGE_02,
  BLOG_POST_IMAGE_03
} from "../../assets/images";
import type { BlogCard } from "../../modules/WebPortail/interfaces/eventInterface";

export const eventsMockData: BlogCard[] = [
  {
    id: "event-1",
    title: "Découvrez les merveilles cachées de l'Afrique de l'Ouest",
    excerpt:
      "Explorez les destinations les plus spectaculaires et authentiques de l'Afrique de l'Ouest. Des plages paradisiaques aux villages traditionnels, une expérience inoubliable vous attend.",
    category: "Destination",
    date: "Décembre 15, 2025",
    readTime: "5 min",
    link: "/evenement/merveilles-afrique-ouest",
    image: BLOG_POST_IMAGE_01,
    author: {
      name: "Amanda Wilson",
      avatar: BLOG_AUTHOR_AVATAR_AMANDA
    },
    stats: {
      likes: 245,
      comments: 38
    }
  },
  {
    id: "event-2",
    title: "Voyager en Afrique avec un budget limité: Guide complet",
    excerpt:
      "Apprenez comment explorer les pays africains sans dépenser une fortune. Découvrez les hébergements abordables, les transports bon marché et les activités gratuites.",
    category: "Budget Travel",
    date: "Décembre 14, 2025",
    readTime: "6 min",
    link: "/evenement/voyage-budget-afrique",
    image: BLOG_POST_IMAGE_02,
    author: {
      name: "James Wilson",
      avatar: BLOG_AUTHOR_AVATAR_JAMES
    },
    stats: {
      likes: 156,
      comments: 42
    }
  },
  {
    id: "event-3",
    title: "Tourisme responsable: Voyager de manière durable en Afrique",
    excerpt:
      "Explorez comment voyager de façon responsable et réduire votre empreinte carbone. Hébergements écologiques et programmes de compensation carbone pour un tourisme durable.",
    category: "Eco Travel",
    date: "Décembre 13, 2025",
    readTime: "7 min",
    link: "/evenement/tourisme-responsable",
    image: BLOG_POST_IMAGE_03,
    author: {
      name: "David Thompson",
      avatar: BLOG_AUTHOR_AVATAR_DAVID
    },
    stats: {
      likes: 67,
      comments: 28
    }
  },
  {
    id: "event-4",
    title: "Les festivals culturels incontournables d'Afrique",
    excerpt:
      "Immergez-vous dans les vibrations culturelles des festivals africains. Du FESPACO de Ouagadougou aux fêtes traditionnelles, vivez l'authenticité.",
    category: "Culture",
    date: "Décembre 12, 2025",
    readTime: "5 min",
    link: "/evenement/festivals-culturels",
    image: BLOG_POST_IMAGE_01,
    author: {
      name: "Amanda Wilson",
      avatar: BLOG_AUTHOR_AVATAR_AMANDA
    },
    stats: {
      likes: 198,
      comments: 51
    }
  },
  {
    id: "event-5",
    title: "Cuisines d'Afrique: Les saveurs à découvrir absolument",
    excerpt:
      "Partez à la découverte des saveurs authentiques de l'Afrique. De la mafé sénégalaise aux njama njama camerounaise, un voyage gustatif inoubliable.",
    category: "Gastronomie",
    date: "Décembre 11, 2025",
    readTime: "6 min",
    link: "/evenement/cuisines-afrique",
    image: BLOG_POST_IMAGE_02,
    author: {
      name: "James Wilson",
      avatar: BLOG_AUTHOR_AVATAR_JAMES
    },
    stats: {
      likes: 287,
      comments: 64
    }
  },
  {
    id: "event-6",
    title: "Safari en Afrique: Guide ultime de la faune et flore",
    excerpt:
      "Découvrez les plus grands safaris africains et observez la faune sauvage. Des parcs nationaux aux réserves privées, des expériences exceptionnelles vous attendent.",
    category: "Nature & Faune",
    date: "Décembre 10, 2025",
    readTime: "7 min",
    link: "/evenement/safari-afrique",
    image: BLOG_POST_IMAGE_03,
    author: {
      name: "David Thompson",
      avatar: BLOG_AUTHOR_AVATAR_DAVID
    },
    stats: {
      likes: 342,
      comments: 89
    }
  },
  {
    id: "event-7",
    title: "Hébergement en Afrique: De la case au resort de luxe",
    excerpt:
      "Explorez les diverses options d'hébergement en Afrique. Des lodges authentiques aux hôtels de luxe, trouver votre séjour parfait.",
    category: "Hébergement",
    date: "Décembre 9, 2025",
    readTime: "5 min",
    link: "/evenement/hebergement-afrique",
    image: BLOG_POST_IMAGE_01,
    author: {
      name: "Amanda Wilson",
      avatar: BLOG_AUTHOR_AVATAR_AMANDA
    },
    stats: {
      likes: 124,
      comments: 31
    }
  },
  {
    id: "event-8",
    title: "Randonnées et trekking en Afrique: Les meilleurs parcours",
    excerpt:
      "Défiez-vous en explorant les plus beaux treks d'Afrique. Du Mont Kilimandjaro aux montagnes de l'Atlas, des aventures spectaculaires.",
    category: "Aventure",
    date: "Décembre 8, 2025",
    readTime: "6 min",
    link: "/evenement/randonnees-trekking",
    image: BLOG_POST_IMAGE_02,
    author: {
      name: "James Wilson",
      avatar: BLOG_AUTHOR_AVATAR_JAMES
    },
    stats: {
      likes: 156,
      comments: 42
    }
  },
  {
    id: "event-9",
    title: "Plages d'Afrique: Les secrets des côtes paradisiaques",
    excerpt:
      "Découvrez les plus belles plages d'Afrique. Sable blanc, eaux turquoise, couchers de soleil magiques - un paradis vous attend.",
    category: "Plages",
    date: "Décembre 7, 2025",
    readTime: "7 min",
    link: "/evenement/plages-afrique",
    image: BLOG_POST_IMAGE_03,
    author: {
      name: "David Thompson",
      avatar: BLOG_AUTHOR_AVATAR_DAVID
    },
    stats: {
      likes: 267,
      comments: 71
    }
  }
];
