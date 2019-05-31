import { Component, OnInit } from '@angular/core';
import { NewsService } from './services/news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'mini-news';
  constructor(private newsService: NewsService) {}
  ngOnInit() {
    this.getNews();
  }

  async getNews() {
    const results = await this.newsService
      .getNews()
      .catch(err => console.error(err));
  }
}
