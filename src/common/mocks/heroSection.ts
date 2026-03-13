import { BACKGROUND_STORY_A, BACKGROUND_STORY_B, BACKGROUND_STORY_C } from "../../assets/images";
import type { Slide } from "../../modules/WebPortail/interfaces/HeroSection";

export const SLIDES: Slide[] = [
  {
    country: "Bénin",
    city: "Ouidah",
    text: "Plongez dans l’histoire profonde du Bénin à Ouidah — la Route des Esclaves, la Porte du Non-Retour et les traditions vodun racontent une mémoire puissante.",
    image: BACKGROUND_STORY_A,
    button: { label: "Explorer l'histoire", link: "#" }
  },
  {
    country: "Bénin",
    city: "Ganvié",
    text: "Découvrez Ganvié, la Venise de l’Afrique — un village unique construit sur l’eau où la vie se déroule au rythme rythme des pirogues.",
    image: BACKGROUND_STORY_B,
    button: { label: "Découvrir le lieu", link: "#" }
  },
  {
    country: "Bénin",
    city: "Abomey",
    text: "Entrez dans l’histoire des royaumes du Dahomey à Abomey — palais royaux, traditions ancestrales et héritage culturel classé à l’UNESCO.",
    image: BACKGROUND_STORY_C,
    button: { label: "Visiter les royaumes", link: "#" }
  }/* ,
  {
    country: "Bénin",
    city: "Pendjari",
    text: "Explorez la réserve de la Pendjari — l’un des plus beaux parcs naturels d’Afrique de l’Ouest, refuge d’éléphants, lions et buffles.",
    image: GANI,
    button: { label: "Voir la nature", link: "#" }
  } */
];