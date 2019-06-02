import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewsItem } from '../models/news-item';
import { NewsResponse } from '../models/news-response';
import { NewsCategory } from '../models/news-category';
import {
  generalSources,
  economySources,
  politicSources,
  scienceSources,
  techSources,
  sportSources,
} from './sources';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  baseUrl = 'https://api.rss2json.com/v1/api.json';
  apiKey = 'cdtj7svrzsylszvk9sczkvjx53uftv8gmita0n8p';
  newsItems: NewsItem[] = [];
  public scroll: number;
  itemsPerPage = 5; // default is 10 from api
  categories: NewsCategory[] = [
    { value: 'general' },
    { value: 'politics' },
    { value: 'economy' },
    { value: 'sport' },
    { value: 'science' },
    { value: 'tech' },
  ];
  public loading: boolean;

  selectedCategory: NewsCategory;
  constructor(private http: HttpClient) {
    this.selectCategory({ value: 'general' });
  }

  async getNews(): Promise<NewsItem[]> {
    // Bundle all requests to different rss feeds in one array
    this.loading = true;
    const sources = this.getSourcesForCategory(this.selectedCategory);
    const requests = sources.map(source =>
      this.http
        .get<NewsResponse>(
          `${this.baseUrl}?api_key=${this.apiKey}&rss_url=${source}&count=${
            this.itemsPerPage
          }`,
        )
        .toPromise(),
    );
    // Resolve all requests simultaneously to save time
    const results = await Promise.all(requests);
    const items = [];
    // Add the respective news source for later reference
    for (const result of results) {
      for (const item of result.items) {
        item.source = result.feed.title;
        if (item.source === 'tagesschau.de - Die Nachrichten der ARD') {
          item.link = 'https:' + item.link.split(':')[1];
          item.thumbnail = 'https:' + item.thumbnail.split(':')[1];
        }
        items.push(item);
      }
    }
    const shuffledItems = this.shuffle(items);
    this.newsItems = shuffledItems;
    this.loading = false;
    return shuffledItems;
  }

  selectCategory(category: NewsCategory) {
    this.selectedCategory = category;
    this.newsItems = [];
    this.getNews();
  }

  getSourcesForCategory(category: NewsCategory): string[] {
    switch (category.value) {
      case 'general':
        return generalSources;
      case 'politics':
        return politicSources;
      case 'economy':
        return economySources;
      case 'sport':
        return sportSources;
      case 'science':
        return scienceSources;
      case 'tech':
        return techSources;
      default:
        return [];
    }
  }

  shuffle(array: Array<any>) {
    let currentIndex = array.length;
    let temporaryValue: any;
    let randomIndex: number;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
}
