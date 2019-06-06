import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { UpdateService } from './services/update.service';
import { NewsService } from './services/news.service';
// declare ga as a function to set and sent the events
// tslint:disable-next-line: ban-types
declare let gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    public update: UpdateService,
    public newsService: NewsService,
    public router: Router,
  ) {
    // subscribe to router events and send page views to Google Analytics
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        gtag('set', 'page', event.urlAfterRedirects);
        gtag('send', 'pageview');
      }
    });
  }
  ngOnInit() {}
}
