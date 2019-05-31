import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NewsItem } from 'src/app/models/news-item';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  public newsItem: NewsItem;
  constructor(private router: Router) {}

  ngOnInit() {
    this.newsItem = window.history.state.newsItem;
    if (!this.newsItem) {
      this.router.navigateByUrl('');
    }
    console.log(this.newsItem);
  }

  goBack() {
    history.back();
  }
}
