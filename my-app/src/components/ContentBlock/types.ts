export interface ContentBlockProps {
  icon: string;
  title: string;
  content: string;
  section?: any;
  button?: any;
  t?: any;
  id: string;
  type?: string;
}

export interface BlogContentBlockProps {
  title: string;
  subtitle: string;
  button?: any;
  image?: any;
  paragraphs: Array<string>;
}