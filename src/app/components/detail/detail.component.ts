import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';
import { NewsItem } from 'src/app/models/news-item';
import { ActivatedRoute, Router } from '@angular/router';
import {
  trigger,
  transition,
  query,
  style,
  animate,
} from '@angular/animations';

const fadeEnterLeave = trigger('detailEnterLeave', [
  transition('* => entering', [
    style({ transform: 'translateX(100%)' }),
    animate('600ms ease', style({ transform: 'translateX(0)' })),
  ]),
  transition('* => leaving', [
    style({ transform: 'translateX(0)' }),
    animate('600ms ease', style({ transform: 'translateX(100%)' })),
  ]),
]);

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  animations: [fadeEnterLeave],
})
export class DetailComponent implements OnInit, OnDestroy {
  public newsItem: NewsItem;
  public animationState: 'entering' | 'leaving' | '' = '';
  constructor(private router: Router) {}

  ngOnInit() {
    console.log('detail on init');
    this.newsItem = JSON.parse(localStorage.getItem('newsItem'));
    this.animationState = 'entering';
  }

  ngOnDestroy() {
    this.animationState = 'leaving';
    console.log('detail on destroy');
  }

  animStart(event) {
    console.log('Animation Started');
    console.log(event);
    // do more stuff
  }

  animEnd(event) {
    console.log('Animation Ended');
    console.log(event);
    if (event.toState === 'leaving') {
      history.back();
    }
    // do more stuff
  }

  goBack() {
    // history.back();
    this.animationState = 'leaving';
  }
}
