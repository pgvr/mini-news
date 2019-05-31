export interface NewsItem {
  title: string;
  pubDate: string;
  link: string;
  guid: string;
  author: string;
  thumbnail: string;
  description: string;
  content: string;
  enclosure: NewsEnclosure;
  categories: string[];
  source: string;
}

export interface NewsEnclosure {
  link: string;
  type: string;
}
