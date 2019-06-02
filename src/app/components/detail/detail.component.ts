import {
  animate,
  AnimationAnimateMetadata,
  AnimationBuilder,
  AnimationStyleMetadata,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
  HostBinding,
  Host,
} from '@angular/core';
import { Router } from '@angular/router';
import { timer } from 'rxjs';
import { mapTo } from 'rxjs/operators';
import { NewsItem } from 'src/app/models/news-item';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit, OnDestroy {
  public newsItem: NewsItem;

  readonly ANIMATION_TIME = 300;
  @ViewChild('detailContainer', { static: true }) el: ElementRef;
  animation;
  player;

  constructor(private router: Router, private builder: AnimationBuilder) {}

  ngOnInit() {
    console.log('detail on init');
    this.newsItem = JSON.parse(localStorage.getItem('newsItem'));
    this.newsItem.content = this.newsItem.content.replace(
      /<\/?[^>]+(>|$)/g,
      '',
    );
    this.newsItem.description = this.newsItem.description.replace(
      /<\/?[^>]+(>|$)/g,
      '',
    );
    //
    this.animation = this.builder.build(this.slideIn(this.ANIMATION_TIME));
    this.player = this.animation.create(this.el.nativeElement, {});
    this.player.play();
  }

  canDeactivate() {
    this.animation = this.builder.build(this.slideOut(this.ANIMATION_TIME));
    this.player = this.animation.create(this.el.nativeElement, {});
    this.player.play();
    return timer(this.ANIMATION_TIME - 100)
      .pipe(mapTo(true))
      .toPromise();
  }
  private slideOut(
    time: number,
  ): (AnimationStyleMetadata | AnimationAnimateMetadata)[] {
    return [
      style({ opacity: 1, transform: 'scale(1)' }),
      animate(`${time}ms ease`, style({ opacity: 0, transform: 'scale(0.5)' })),
    ];
  }
  private slideIn(
    time: number,
  ): (AnimationStyleMetadata | AnimationAnimateMetadata)[] {
    return [
      style({ opacity: 0, transform: 'scale(0.5)' }),
      animate(`${time}ms ease`, style({ opacity: 1, transform: 'scale(1)' })),
    ];
  }

  ngOnDestroy() {
    console.log('detail on destroy');
  }

  goBack() {
    history.back();
  }
}
