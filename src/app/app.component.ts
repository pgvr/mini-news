import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UpdateService } from './services/update.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(public update: UpdateService) {}
  ngOnInit() {}
}
