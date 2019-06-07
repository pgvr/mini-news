import { Component, OnInit } from '@angular/core';
import {
  generalSources,
  economySources,
  politicSources,
  scienceSources,
  techSources,
  sportSources,
} from '../../../services/sources';

@Component({
  selector: 'app-rss-sources',
  templateUrl: './rss-sources.component.html',
  styleUrls: ['./rss-sources.component.scss'],
})
export class RssSourcesComponent implements OnInit {
  rssSources = {
    generalSources,
    economySources,
    politicSources,
    scienceSources,
    techSources,
    sportSources,
  };
  constructor() {}

  ngOnInit() {}

  goBack() {
    history.back();
  }
}
