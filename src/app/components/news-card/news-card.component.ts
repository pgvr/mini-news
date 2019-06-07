import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NewsItem } from 'src/app/models/news-item';
import {
  DomSanitizer,
  SafeResourceUrl,
  SafeUrl,
  SafeStyle,
} from '@angular/platform-browser';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss'],
  animations: [
    trigger('fadeInHome', [
      transition('void => *', [
        style({ transform: 'translateY(100%)', opacity: 0 }),
        animate('200ms', style({ transform: 'translateY(0)', opacity: 1 })),
      ]),
    ]),
  ],
})
export class NewsCardComponent implements OnInit {
  @Input() newsItem: NewsItem;
  @Output() cardClickEvent: EventEmitter<NewsItem> = new EventEmitter<
    NewsItem
  >();
  backgroundUrl: SafeStyle;
  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    if (this.imagePresent()) {
      this.backgroundUrl = this.sanitizer.bypassSecurityTrustStyle(
        `linear-gradient(360deg, #000000 22.4%, rgba(0, 0, 0, 0) 100%), url(${this
          .newsItem.thumbnail ||
          this.newsItem.enclosure.link ||
          ''})`,
      );
    } else {
      this.backgroundUrl = '#333333';
    }
  }

  imagePresent(): boolean {
    const thumbnailPresent: boolean =
      this.newsItem.thumbnail !== undefined && this.newsItem.thumbnail !== '';
    const enclosurePresent: boolean =
      this.newsItem.enclosure.link !== undefined &&
      this.newsItem.enclosure.link !== '';
    return enclosurePresent || thumbnailPresent;
  }

  cardClick() {
    this.cardClickEvent.emit(this.newsItem);
  }
}
