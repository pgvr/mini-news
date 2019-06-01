import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewsItem } from '../models/news-item';
import { NewsResponse } from '../models/news-response';
import { NewsCategory } from '../models/news-category';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  baseUrl = 'https://newsapi.org/v2/top-headlines';
  apiKey = '5309396aaca7457c9d740dbe65dd7626';
  newsItems: NewsItem[] = [];
  public scroll: number;
  public selectedCategory: NewsCategory;
  itemsPerPage = 20;
  currentPage = 1;
  totalItemsInCategory: number;

  constructor(private http: HttpClient) {
    this.selectedCategory = { value: 'general' };
  }

  selectCategory(category: NewsCategory) {
    this.selectedCategory = category;
    this.currentPage = 1;
    this.newsItems = [];
    this.getNews();
  }

  async getNews(): Promise<NewsItem[]> {
    // Bundle all requests to different rss feeds in one array
    const req = await this.http
      .get<NewsResponse>(
        `${this.baseUrl}?apiKey=${this.apiKey}&country=de&category=${
          this.selectedCategory.value
        }&pageSize=${this.itemsPerPage}&page=${this.currentPage}`,
      )
      .toPromise();
    this.newsItems.push(...req.articles);
    this.totalItemsInCategory = req.totalResults;
    // if empty show toast 'these are all news for now'
    return req.articles;
  }

  loadMoreItems() {
    this.currentPage++;
    this.getNews();
  }

  showLoadButton(): boolean {
    console.log(this.totalItemsInCategory);
    const totalItems = this.currentPage * this.itemsPerPage;
    console.log(totalItems);
    return totalItems < this.totalItemsInCategory;
  }
}
