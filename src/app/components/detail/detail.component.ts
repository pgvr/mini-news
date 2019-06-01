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
    style({
      opacity: 1,
      transform: 'scale(0) translateX(100%)',
    }),
    animate(
      '600ms ease',
      style({
        opacity: 1,
        transform: 'scale(1) translateX(0%)',
      }),
    ),
  ]),
  transition(':leave', [
    style({
      opacity: 1,
      position: 'fixed',
      width: '100%',
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
]);

const fadeIn = trigger('detailEnter', [
  transition('* => *', [
    query(
      ':leave',
      style({ position: 'absolute', left: 0, right: 0, opacity: 1 }),
      { optional: true },
    ),
    query(
      ':enter',
      style({ position: 'absolute', left: 0, right: 0, opacity: 0 }),
      { optional: true },
    ),
    query(':leave', animate('1s', style({ opacity: 0 })), { optional: true }),
    query(':enter', animate('1s', style({ opacity: 1 })), { optional: true }),
  ]),
]);

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  animations: [],
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

  animStart(event) {
    console.log('Animation Started');
    // do more stuff
  }

  animEnd(event) {
    console.log('Animation Ended');
    // do more stuff
  }

  goBack() {
    history.back();
  }
}
