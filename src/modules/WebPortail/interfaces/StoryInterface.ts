/** @format */

export interface StoryPage {
  title?: string;
  content: string;
  image?: string;
}

export interface StoryInterface {
  id: string;
  category: "rencontres" | "patrimoine" | "spirituel" | "nature";
  title: string;
  author?: string;
  readTime?: string;
  location?: string;
  year?: string;
  summary?: string;
  highlights?: string[];
  coverImage: string;
  excerpt: string;
  pages: StoryPage[];
}


export interface Page {
  id: string;
  title?: string;
  content: string;
  image?: string;
}

export interface Chapter {
  id: string;
  title: string;
  description?: string;
  pages: Page[];
}

export interface StoryTest {
  id: string;
  category: "rencontres" | "patrimoine" | "spirituel" | "nature";
  title: string;
  author?: string;
  readTime?: string;
  location?: string;
  year?: string;
  summary?: string;
  highlights?: {
    label: string;
    chapter: number;
    page?: number;
  }[];
  coverImage: string;
  excerpt: string;
  chapters: Chapter[]; // ⬅️ Ici change !
}

export interface StoryBookProps {
  story: StoryTest;
  chapterIndex: number;
  setChapterIndex: (index: number) => void;
  pageIndex: number;
  setPageIndex: (index: number) => void;
}

export interface TimelineItem {
  date: string;
  content: string;
}