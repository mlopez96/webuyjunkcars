export interface BlogPost {
  id: number,
  title: string;
  author: string;
  date: string;
  description: string;
  featureImage: string;
  featureImageAlt: string;
  paragraphs?: string[];
}
