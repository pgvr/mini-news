import { NewsSource } from './news-source';
import { NewsItem } from './news-item';

export interface NewsResponse {
  status: string;
  feed: NewsSource;
  items: NewsItem[];
}
