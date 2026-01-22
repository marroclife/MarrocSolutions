export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string; // Markdown or HTML string
  imageUrl: string;
  publishDate: string;
  tags: string[];
  readTime: string;
}

export interface NavItem {
  label: string;
  path: string;
  highlight?: boolean;
}