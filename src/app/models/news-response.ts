import { NewsSource } from './news-source';
import { NewsItem } from './news-item';

export interface NewsResponse {
  status: string;
  totalResults: number;
  articles: NewsItem[];
}
