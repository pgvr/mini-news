import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { NewsItem } from 'src/app/models/news-item';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  categories = ['All', 'Technology', 'Politics', 'Sports'];

  selectedCategory: string;

  loading: boolean;

  newsItems: NewsItem[];

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.selectCategory('All');
    this.getNews();
  }

  async getNews() {
    this.loading = true;
    this.newsItems = await this.newsService.getNews();
    this.loading = false;
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
  }
}
