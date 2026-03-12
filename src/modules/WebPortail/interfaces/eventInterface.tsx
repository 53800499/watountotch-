export interface BlogAuthor {
  name: string;
  avatar: string;
}

export interface BlogStats {
  likes: number;
  comments: number;
}

export interface BlogCard {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  link: string;
  image: string;
  author: BlogAuthor;
  stats: BlogStats;
}
