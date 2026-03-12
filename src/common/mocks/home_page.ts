export type HistoryTimelineItem = {
  period: string;
  title: string;
  description: string;
  dotColor?: string;
  ctaLabel?: string;
  href?: string;
};

export const HISTORY_TIMELINE_MOCK: HistoryTimelineItem[] = [
  {
    period: "1600 - 1894",
    title: "Royaume du Danxomè",
    description:
      "L'époque des rois bâtisseurs, des Amazones et de l'expansion d'Abomey.",
    ctaLabel: "Découvrir l'histoire →",
    href: "/histoire/royaume-danxome"
  },
  {
    period: "1894 - 1960",
    title: "Période Coloniale",
    description:
      "La résistance de Béhanzin, la colonisation française et les premiers mouvements d'émancipation.",
    dotColor: "var(--benin-red)",
    ctaLabel: "Découvrir l'histoire →",
    href: "/histoire/periode-coloniale"
  },
  {
    period: "1960",
    title: "L'Indépendance",
    description:
      "Le 1er Août, Hubert Maga proclame l'indépendance de la République du Dahomey.",
    dotColor: "var(--benin-yellow)"
  },
  {
    period: "1990",
    title: "Conférence Nationale",
    description:
      "Le renouveau démocratique et l'établissement de la constitution actuelle."
  }
];

export type DestinationItem = {
  title: string;
  subtitle: string;
  imageUrl: string;
  imageAlt: string;
  href?: string;
};

export const POPULAR_DESTINATIONS_MOCK: DestinationItem[] = [
  {
    title: "Ganvié",
    subtitle: "La cité lacustre unique.",
    imageUrl:
      "https://my-make-bucket.s3.eu-north-1.amazonaws.com/Photos/ixngcxhelvtbzfhlnsxx.webp",
    imageAlt: "Ganvié",
    href: "/destination-detail/ganvie"
  },
  {
    title: "Ouidah",
    subtitle: "Histoire & Route des Esclaves.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ94fWRqjhy-OejFKOf98OuIQhR1oZDCWz5Ng&s",
    imageAlt: "Ouidah",
    href: "/destination-detail/ouidah"
  },
  {
    title: "Parc Pendjari",
    subtitle: "Safari & Faune sauvage.",
    imageUrl:
      "https://i.la-croix.com/1400x933/smart/2019/07/22/1201036816/national-Pendjari-deserte-touristeslenlevement-Francais-1er_2.jpg",
    imageAlt: "Parc Pendjari",
    href: "/destination-detail/pendjari"
  },
  {
    title: "Natitingou",
    subtitle: "Pays des Tata Somba.",
    imageUrl:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/3e/a7/cf/grande-chute-ou-se-baigner.jpg?w=900&h=-1&s=1",
    imageAlt: "Natitingou"
  }
];

export type CultureItem = {
  iconClass: string;
  title: string;
  description: string;
};

export const CULTURE_ITEMS_MOCK: CultureItem[] = [
  {
    iconClass: "fas fa-mask",
    title: "Vodoun & Traditions",
    description:
      "Plongez au cœur de la spiritualité béninoise, des temples de Ouidah aux cérémonies Zangbeto."
  },
  {
    iconClass: "fas fa-drum",
    title: "Musique & Danse",
    description:
      "Vibrez aux rythmes du Zinli, du Têkê et découvrez les festivals modernes de Cotonou."
  },
  {
    iconClass: "fas fa-utensils",
    title: "Gastronomie",
    description:
      "Dégustez l'Amiwo au poulet, l'igname pilée sauce arachide et le fromage peuhl Wagassi."
  },
  {
    iconClass: "fas fa-palette",
    title: "Art & Artisanat",
    description:
      "Des bronzes royaux aux toiles contemporaines, l'art béninois rayonne dans le monde."
  }
];

export type CultureDishBadgeVariant = "default" | "yellow" | "red";

export type CultureDish = {
  title: string;
  description: string;
  difficultyLabel: string;
  difficultyValue: string;
  locationLabel: string;
  locationValue: string;
  imageUrl: string;
  imageAlt: string;
  badgeLabel: string;
  badgeVariant: CultureDishBadgeVariant;
  href?: string;
};

export const CULTURE_DISHES_MOCK: CultureDish[] = [
  {
    title: "Amiwo au Poulet",
    description:
      "La célèbre pâte rouge assaisonnée, servie avec un poulet frit croustillant et du piment noir.",
    difficultyLabel: "Difficulté",
    difficultyValue: "Moyenne",
    locationLabel: "Région",
    locationValue: "Sud Bénin",
    imageUrl:
      "https://static.wixstatic.com/media/504b32_507eb3e358ec451f927009256fe69c4f~mv2.jpeg/v1/fill/w_528,h_528,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/504b32_507eb3e358ec451f927009256fe69c4f~mv2.jpeg",
    imageAlt: "Amiwo",
    badgeLabel: "Populaire",
    badgeVariant: "default",
    href: "/culture-gastronomie/amiwo-poulet"
  },
  {
    title: "Igname Pilée (Agou)",
    description:
      "Le roi des plats béninois. L'igname est pilée au mortier jusqu'à devenir une pâte onctueuse.",
    difficultyLabel: "Difficulté",
    difficultyValue: "Difficile",
    locationLabel: "Région",
    locationValue: "Centre/Nord",
    imageUrl:
      "https://africadelices.wordpress.com/wp-content/uploads/2018/09/image-a-la-une-post-1.png?w=640",
    imageAlt: "Igname Pilée",
    badgeLabel: "Végétarien",
    badgeVariant: "yellow",
    href: "/culture-gastronomie/igname-pilee"
  },
  {
    title: "Sauce Légume (Man)",
    description:
      "Un mélange savoureux de légumes feuilles (épinards, gboma) avec du poisson fumé et du crabe.",
    difficultyLabel: "Santé",
    difficultyValue: "Top",
    locationLabel: "Région",
    locationValue: "Tout le pays",
    imageUrl: "https://i.ytimg.com/vi/pWRXdYlpCpo/hq720.jpg",
    imageAlt: "Sauce Légume",
    badgeLabel: "Épicé",
    badgeVariant: "red",
    href: "/culture-gastronomie/sauce-legume"
  }
];

export type TouristSite = {
  title: string;
  description: string;
  buttonLabel: string;
  imageUrl: string;
  imageAlt: string;
  imagePosition: "left" | "right";
  href?: string;
};

export const TOURISTIC_SITES_MOCK: TouristSite[] = [
  {
    title: "La Porte du Non-Retour",
    description:
      "Symbole poignant de la traite transatlantique, ce monument à Ouidah marque le lieu où des millions d'âmes ont quitté leur terre natale. Un lieu de mémoire inscrit au patrimoine mondial.",
    buttonLabel: "En savoir plus",
    imageUrl:
      "https://prod.cdn-medias.jeuneafrique.com/cdn-cgi/image/q=auto,f=auto,metadata=none,width=1215,fit=cover/https://prod.cdn-medias.jeuneafrique.com/medias/2017/04/05/ouidah_porte_non_retour_benin.jpg",
    imageAlt: "Porte du Non-Retour",
    imagePosition: "right",
    href: "/sites-touristiques/porte-non-retour"
  },
  {
    title: "Palais Royaux d'Abomey",
    description:
      "Témoignage exceptionnel du Royaume de Dahomey. Découvrez les trônes, les bas-reliefs et l'histoire des Amazones qui ont défendu ce royaume avec bravoure.",
    buttonLabel: "Visiter le Musée",
    imageUrl:
      "https://culturesetpatrimoines.bj/wp-content/uploads/2024/03/abomey-e1710267636659.png",
    imageAlt: "Palais Royaux d'Abomey",
    imagePosition: "left",
    href: "/sites-touristiques/palais-royaux-abomey"
  },
  {
    title: "Arène de Ouidah",
    description:
      "Vodun Days 2025 : Un spectacle grandeur nature pour son ouverture officielle.",
    buttonLabel: "En savoir plus",
    imageUrl:
      "https://lanation.bj/storage/assets/2025/01/elUm1oDZpZ4Q0uVz_Ar%C3%A8ne_de_OUIDAH,_Construit_dans_le_cadre_de_Vodun_Days_(3).JPG.webp",
    imageAlt: "Arène de Ouidah",
    imagePosition: "right",
    href: "/sites-touristiques/arene-ouidah"
  },
  {
    title: "GHANNI NIKKI",
    description: "PALAIS ROYAL DE NIKKI et l’Arène de la Gaani.",
    buttonLabel: "Visiter le palais",
    imageUrl:
      "https://www.sirat.bj/wp-content/uploads/2025/07/DJI_0994-3-scaled.jpg",
    imageAlt: "Palais Royal de Nikki",
    imagePosition: "left",
    href: "/sites-touristiques/palais-royal-nikki"
  }
];

