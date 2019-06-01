import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { NewsItem } from 'src/app/models/news-item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  categories = ['All', 'Technology', 'Politics', 'Sports'];

  selectedCategory: string;

  loading: boolean;

  constructor(public newsService: NewsService, private router: Router) {}

  ngOnInit() {
    this.selectCategory('All');
    if (this.newsService.newsItems.length === 0) {
      this.getNews();
    }
  }

  async getNews() {
    console.log('getting news');
    this.loading = true;
    await this.newsService.getNews();
    this.loading = false;
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
  }

  navigateToDetail(newsItem: NewsItem) {
    console.log('navigate');
    localStorage.setItem('newsItem', JSON.stringify(newsItem));
    this.router.navigateByUrl('/detail');
  }
}
