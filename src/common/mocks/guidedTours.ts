/** @format */

import { BACKGROUND_PARC, BACKGROUND_REGISTER_D, BACKGROUND_WASSAWASSA } from "../../assets/images";

export const guidedTours = [
  {
    id: 1,
    image: BACKGROUND_REGISTER_D,
    category: "Travel Tips",
    duration: "2 h",
    languages: "FR · EN · FON",
    title: "Circuit audio — Palais Royaux d'Abomey : Histoire & récits",
    link: "#",
    excerpt:
      "Suivez un parcours commenté pas à pas, synchronisé avec des repères visuels et des anecdotes locales pour mieux comprendre l'héritage du Dahomey.",
    authorImage: "/src/assets/images/blog/profile-01.jpg",
    authorName: "Guide local — Watountotche",
    likes: 24,
    comments: 12,
    aos: "fade-down"
  },
  {
    id: 2,
    image: BACKGROUND_WASSAWASSA,
    category: "Budget Travel",
    duration: "3 h",
    languages: "FR · EN",
    title: "Parcours gastronomique — Marchés & saveurs de Cotonou",
    link: "#",
    excerpt:
      "Découvrez les spécialités locales, arrêts dégustation et conseils pratiques pour goûter les plats incontournables en toute sécurité.",
    authorImage: "/src/assets/images/blog/profile-02.jpg",
    authorName: "Chef local — Watountotche",
    likes: 156,
    comments: 42,
    aos: "fade-up"
  },
  {
    id: 3,
    image: BACKGROUND_PARC,
    category: "Eco Travel",
    duration: "2-3 jours",
    languages: "FR · EN",
    title: "Itinéraire nature — Safari et découverte au Parc de la Pendjari",
    link: "#",
    excerpt:
      "Itinéraire conseillé pour observer la faune, points d'intérêt et recommandations pour préparer votre visite (équipements, sécurité, meilleur moment).",
    authorImage: "/src/assets/images/blog/profile-03.jpg",
    authorName: "Conservateur local — Watountotche",
    likes: 67,
    comments: 28,
    aos: "fade-down"
  }
];
