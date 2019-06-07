import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { UpdateService } from './services/update.service';
import { NewsService } from './services/news.service';
import { Gtag } from 'angular-gtag';
// declare ga as a function to set and sent the events
// tslint:disable-next-line: ban-types
declare let ga: Function;

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
    public gtag: Gtag,
  ) {}
  ngOnInit() {}
}
