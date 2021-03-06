import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { NewsItem } from 'src/app/models/news-item';
import { Router } from '@angular/router';
import { NewsCategory } from 'src/app/models/news-category';
import { trigger, transition, style, animate } from '@angular/animations';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  constructor(public newsService: NewsService, private router: Router, private modalService: NgbModal) { }

  ngOnInit() { }

  ngAfterViewInit() {
    if (this.newsService.scroll && this.newsService.scroll > 0) {
      window.scroll({ top: this.newsService.scroll });
    }
  }

  ngOnDestroy() {
    this.newsService.scroll = window.scrollY;
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

  selectCategory(category: NewsCategory) {
    this.newsService.selectCategory(category);
  }

  navigateToDetail(newsItem: NewsItem) {
    console.log('navigate');
    localStorage.setItem('newsItem', JSON.stringify(newsItem));
    this.router.navigateByUrl('/detail');
  }
}
