import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NewsItem } from 'src/app/models/news-item';
import {
  DomSanitizer,
  SafeResourceUrl,
  SafeUrl,
  SafeStyle,
} from '@angular/platform-browser';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss'],
})
export class NewsCardComponent implements OnInit {
  @Input() newsItem: NewsItem;
  @Output() cardClickEvent: EventEmitter<NewsItem> = new EventEmitter<
    NewsItem
  >();
  backgroundUrl: SafeStyle;
  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    if (this.newsItem.urlToImage) {
      this.backgroundUrl = this.sanitizer.bypassSecurityTrustStyle(
        `linear-gradient(360deg, #000000 22.4%, rgba(0, 0, 0, 0) 100%), url(${
          this.newsItem.urlToImage
        })`,
      );
    } else {
      this.backgroundUrl = '#333333';
    }
  }

  cardClick() {
    this.cardClickEvent.emit(this.newsItem);
  }
}
