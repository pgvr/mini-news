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
    this.backgroundUrl = this.sanitizer.bypassSecurityTrustStyle(
      `linear-gradient(360deg, #000000 22.4%, rgba(0, 0, 0, 0) 100%), url(${this
        .newsItem.thumbnail || this.newsItem.enclosure.link})`,
    );
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
