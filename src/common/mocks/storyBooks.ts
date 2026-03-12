/** @format */

import type { TimelineItem } from "../../modules/WebPortail/interfaces/StoryInterface";

type Chapter = {
  id: string;
  year: string;
  title: string;
  content: string[];
};

export const CHAPTERS: Chapter[] = [
  {
    id: "ch-1943",
    year: "1943",
    title: "Les premières idées de réseaux",
    content: [
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore quae nemo illo maiores ut facilis enim culpa, quia repellat aut pariatur ipsam exercitationem fuga nobis corporis libero necessitatibus odit esse error atque deleniti ratione? Quibusdam doloremque vitae nulla consectetur! Reprehenderit repudiandae nesciunt ducimus eaque aliquam aut et optio. Doloribus nulla minima temporibus eum consectetur id animi eos dolorem aliquam aspernatur doloremque natus necessitatibus beatae optio aliquid quas iure asperiores esse, recusandae dolore quo suscipit ex quod? Culpa incidunt distinctio ullam aliquam, odio deleniti quibusdam alias, debitis tenetur dolor provident perspiciatis ea amet cupiditate impedit vitae praesentium, ab eveniet? Ut, aliquam.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore quae nemo illo maiores ut facilis enim culpa, quia repellat aut pariatur ipsam exercitationem fuga nobis corporis libero necessitatibus odit esse error atque deleniti ratione? Quibusdam doloremque vitae nulla consectetur! Reprehenderit repudiandae nesciunt ducimus eaque aliquam aut et optio. Doloribus nulla minima temporibus eum consectetur id animi eos dolorem aliquam aspernatur doloremque natus necessitatibus beatae optio aliquid quas iure asperiores esse, recusandae dolore quo suscipit ex quod? Culpa incidunt distinctio ullam aliquam, odio deleniti quibusdam alias, debitis tenetur dolor provident perspiciatis ea amet cupiditate impedit vitae praesentium, ab eveniet? Ut, aliquam.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore quae nemo illo maiores ut facilis enim culpa, quia repellat aut pariatur ipsam exercitationem fuga nobis corporis libero necessitatibus odit esse error atque deleniti ratione? Quibusdam doloremque vitae nulla consectetur! Reprehenderit repudiandae nesciunt ducimus eaque aliquam aut et optio. Doloribus nulla minima temporibus eum consectetur id animi eos dolorem aliquam aspernatur doloremque natus necessitatibus beatae optio aliquid quas iure asperiores esse, recusandae dolore quo suscipit ex quod? "
    ]
  },
  {
    id: "ch-1950",
    year: "1950",
    title: "L'épreuve de Turing",
    content: [
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore quae nemo illo maiores ut facilis enim culpa, quia repellat aut pariatur ipsam exercitationem fuga nobis corporis libero necessitatibus odit esse error atque deleniti ratione? Quibusdam doloremque vitae nulla consectetur! Reprehenderit repudiandae nesciunt ducimus eaque aliquam aut et optio. Doloribus nulla minima temporibus eum consectetur id animi eos dolorem aliquam aspernatur doloremque natus necessitatibus beatae optio aliquid quas iure asperiores esse, recusandae dolore quo suscipit ex quod? Culpa incidunt distinctio ullam aliquam, odio deleniti quibusdam alias, debitis tenetur dolor provident perspiciatis ea amet cupiditate impedit vitae praesentium, ab eveniet? Ut, aliquam.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore quae nemo illo maiores ut facilis enim culpa, quia repellat aut pariatur ipsam exercitationem fuga nobis corporis libero necessitatibus odit esse error atque deleniti ratione? Quibusdam doloremque vitae nulla consectetur! Reprehenderit repudiandae nesciunt ducimus eaque aliquam aut et optio. Doloribus nulla minima temporibus eum consectetur id animi eos dolorem aliquam aspernatur doloremque natus necessitatibus beatae optio aliquid quas iure asperiores esse, recusandae dolore quo suscipit ex quod? Culpa incidunt distinctio ullam aliquam, odio deleniti quibusdam alias, debitis tenetur dolor provident perspiciatis ea amet cupiditate impedit vitae praesentium, ab eveniet? Ut, aliquam."
    ]
  },
  {
    id: "ch-2018",
    year: "2018",
    title: "Les grands modèles de langage",
    content: [
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore quae nemo illo maiores ut facilis enim culpa, quia repellat aut pariatur ipsam exercitationem fuga nobis corporis libero necessitatibus odit esse error atque deleniti ratione? Quibusdam doloremque vitae nulla consectetur! Reprehenderit repudiandae nesciunt ducimus eaque aliquam aut et optio. Doloribus nulla minima temporibus eum consectetur id animi eos dolorem aliquam aspernatur doloremque natus necessitatibus beatae optio aliquid quas iure asperiores esse, recusandae dolore quo suscipit ex quod? Culpa incidunt distinctio ullam aliquam, odio deleniti quibusdam alias, debitis tenetur dolor provident perspiciatis ea amet cupiditate impedit vitae praesentium, ab eveniet? Ut, aliquam.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore quae nemo illo maiores ut facilis enim culpa, quia repellat aut pariatur ipsam exercitationem fuga nobis corporis libero necessitatibus odit esse error atque deleniti ratione? Quibusdam doloremque vitae nulla consectetur! Reprehenderit repudiandae nesciunt ducimus eaque aliquam aut et optio. Doloribus nulla minima temporibus eum consectetur id animi eos dolorem aliquam aspernatur doloremque natus necessitatibus beatae optio aliquid quas iure asperiores esse, recusandae dolore quo suscipit ex quod? Culpa incidunt distinctio ullam aliquam, odio deleniti quibusdam alias, debitis tenetur dolor provident perspiciatis ea amet cupiditate impedit vitae praesentium, ab eveniet? Ut, aliquam."
    ]
  }
];

 export const timelineData: TimelineItem[] = [
    {
      date: "1er Août 1960",
      content:
        "Proclamation officielle de l'indépendance. Hubert Maga devient le premier Président."
    },
    {
      date: "20 Sept. 1960",
      content: "Admission du Dahomey à l'Organisation des Nations Unies (ONU)."
    },
    {
      date: "1963",
      content:
        "Première révolution au Dahomey avec l'installation de Christophe Soglo au pouvoir."
    }
  ];