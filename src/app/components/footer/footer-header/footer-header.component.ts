import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer-header',
  templateUrl: './footer-header.component.html',
  styleUrls: ['./footer-header.component.scss'],
})
export class FooterHeaderComponent implements OnInit {
  @Input() heading: string;
  constructor() {}

  ngOnInit() {}

  goBack() {
    history.back();
  }
}
