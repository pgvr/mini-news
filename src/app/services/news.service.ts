import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewsItem } from '../models/news-item';
import { NewsResponse } from '../models/news-response';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  sources = [
    'http://www.welt.de/?service=Rss',
    'http://www.n-tv.de/23.rss',
    'http://www.tagesschau.de/xml/rss2/',
  ];
  baseUrl = 'https://api.rss2json.com/v1/api.json';
  apiKey = 'cdtj7svrzsylszvk9sczkvjx53uftv8gmita0n8p';

  constructor(private http: HttpClient) {}

  async getNews(): Promise<NewsItem[]> {
    // Bundle all requests to different rss feeds in one array
    const requests = this.sources.map(source =>
      this.http
        .get<NewsResponse>(
          `${this.baseUrl}?api_key=${this.apiKey}&rss_url=${source}`,
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
        items.push(item);
      }
    }
    const shuffledItems = this.shuffle(items);
    return shuffledItems;
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
