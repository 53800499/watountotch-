/** @format */

import {
  BACKGROUND_LOGIN_A,
  BACKGROUND_LOGIN_B,
  BACKGROUND_LOGIN_C,
  BACKGROUND_STORY_A
} from "../../assets/images";
import type { StoryTest } from "../../modules/WebPortail/interfaces/StoryInterface";

/**
 * Stories historiques alignées sur la chronologie de la section Histoire (accueil).
 * Même rôle : présenter les grandes ères qui ont forgé la nation béninoise.
 */
export const STORIESTEST: StoryTest[] = [
  {
    id: "royaume-danxome",
    category: "patrimoine",
    period: "1600 - 1894",
    title: "Royaume du Danxomè",
    coverImage: BACKGROUND_LOGIN_B,
    excerpt:
      "L'époque des rois bâtisseurs, des Amazones et de l'expansion d'Abomey.",
    chapters: [
      {
        id: "origines",
        title: "Les rois bâtisseurs",
        description: "De la fondation à l'apogée du royaume.",
        pages: [
          {
            id: "p1",
            title: "Naissance du Danxomè",
            content:
              "Au début du XVIIe siècle, le roi Houégbadja pose les fondations du royaume d'Abomey. Son successeur, Agaja, étend le territoire et crée une administration centralisée. Les palais royaux s'élèvent progressivement, symbolisant la puissance et le savoir-faire des artisans du royaume.",
            image: BACKGROUND_STORY_A
          },
          {
            id: "p2",
            title: "Les Amazones du Dahomey",
            content:
              "Les Mino, gardes royales féminines, formaient une élite militaire redoutée. Entraînées au combat dès l'adolescence, elles protégeaient le roi et participaient aux campagnes d'expansion. Leur bravoure et leur discipline ont marqué l'histoire de l'Afrique de l'Ouest.",
            image: BACKGROUND_LOGIN_B
          },
          {
            id: "p3",
            content:
              "Les bas-reliefs des palais d'Abomey racontent cette histoire : guerres, rituels, vie quotidienne. Chaque roi ajoutait son palais à l'ensemble, créant un complexe unique classé au patrimoine mondial de l'UNESCO."
          }
        ]
      }
    ]
  },
  {
    id: "periode-coloniale",
    category: "patrimoine",
    period: "1894 - 1960",
    title: "Période Coloniale",
    coverImage: BACKGROUND_LOGIN_C,
    excerpt:
      "La résistance de Béhanzin, la colonisation française et les premiers mouvements d'émancipation.",
    chapters: [
      {
        id: "resistance",
        title: "Béhanzin et la résistance",
        description: "Le dernier roi face à la colonisation.",
        pages: [
          {
            id: "p1",
            title: "Le refus de l'occupation",
            content:
              "En 1890, le roi Béhanzin refuse de céder le royaume à la France. Les guerres franco-dahoméennes opposent les troupes coloniales aux armées du royaume, dont les Amazones. Malgré une résistance héroïque, Abomey tombe en 1892.",
            image: BACKGROUND_LOGIN_C
          },
          {
            id: "p2",
            title: "La colonisation",
            content:
              "Le Dahomey devient colonie française. L'administration coloniale impose de nouvelles structures, transforme l'économie et introduit le système scolaire. Les élites locales s'adaptent tout en préservant traditions et cultures.",
            image: BACKGROUND_STORY_A
          },
          {
            id: "p3",
            content:
              "Dès les années 1940, les mouvements d'émancipation se structurent. L'idée d'indépendance gagne du terrain, portée par une nouvelle génération d'intellectuels et de politiques."
          }
        ]
      }
    ]
  },
  {
    id: "independance",
    category: "patrimoine",
    period: "1960",
    title: "L'Indépendance",
    coverImage: BACKGROUND_LOGIN_A,
    excerpt:
      "Le 1er Août, Hubert Maga proclame l'indépendance de la République du Dahomey.",
    chapters: [
      {
        id: "proclamation",
        title: "Le jour historique",
        description: "Naissance de la République du Dahomey.",
        pages: [
          {
            id: "p1",
            title: "Le 1er Août 1960",
            content:
              "Hubert Maga, élu premier président, proclame l'indépendance de la République du Dahomey. La foule célèbre dans les rues de Porto-Novo et Cotonou. Après des décennies de colonisation, le pays retrouve sa souveraineté.",
            image: BACKGROUND_LOGIN_A
          },
          {
            id: "p2",
            title: "Un nouveau départ",
            content:
              "La jeune république hérite des frontières coloniales et doit construire ses institutions. Les années qui suivent verront des alternances politiques et des efforts pour unifier un territoire aux identités multiples.",
            image: BACKGROUND_LOGIN_B
          }
        ]
      }
    ]
  },
  {
    id: "conference-nationale",
    category: "patrimoine",
    period: "1990",
    title: "Conférence Nationale",
    coverImage: BACKGROUND_LOGIN_B,
    excerpt:
      "Le renouveau démocratique et l'établissement de la constitution actuelle.",
    chapters: [
      {
        id: "renouveau",
        title: "La Conférence des Forces vives",
        description: "Une transition pacifique vers la démocratie.",
        pages: [
          {
            id: "p1",
            title: "Février 1990",
            content:
              "La Conférence nationale des Forces vives de la nation réunit représentants de la société civile, partis politiques et syndicats. Elle décide de la fin du régime marxiste-léniniste et pose les bases d'une transition démocratique.",
            image: BACKGROUND_LOGIN_C
          },
          {
            id: "p2",
            title: "Une nouvelle constitution",
            content:
              "La Constitution de décembre 1990 instaure un régime présidentiel, le multipartisme et garantit les libertés fondamentales. Le Bénin devient un modèle de transition démocratique en Afrique.",
            image: BACKGROUND_STORY_A
          }
        ]
      }
    ]
  }
];
