import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NewsItem } from 'src/app/models/news-item';
import { ActivatedRoute, Router } from '@angular/router';
import {
  trigger,
  transition,
  query,
  style,
  animate,
} from '@angular/animations';

export const slider = trigger('detailEnter', [
  transition(':enter', [
    query(':enter', [
      style({
        opacity: 0,
        transform: 'scale(0)',
      }),
      animate(
        '600ms ease',
        style({
          opacity: 1,
          transform: 'scale(1)',
        }),
      ),
    ]),
  ]),
  transition(':leave', [
    query(':leave', [
      style({
        opacity: 1,
        transform: 'scale(1)',
      }),
      animate(
        '600ms ease',
        style({
          opacity: 0,
          transform: 'scale(0)',
        }),
      ),
    ]),
  ]),
]);

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  animations: [slider],
})
export class DetailComponent implements OnInit {
  public newsItem: NewsItem;
  constructor(private router: Router) {}

  ngOnInit() {
    this.newsItem = JSON.parse(localStorage.getItem('newsItem'));
    // this.newsItem = window.history.state.newsItem;
    // if (!this.newsItem) {
    //   this.router.navigateByUrl('');
    // }
    // console.log(this.newsItem);
  }

  goBack() {
    history.back();
  }
}
