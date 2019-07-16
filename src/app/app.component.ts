import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { UpdateService } from './services/update.service';
import { NewsService } from './services/news.service';

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
  ) { }
  ngOnInit() { }
}
