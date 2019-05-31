import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  categories = ['All', 'Technology', 'Politics', 'Sports'];

  selectedCategory: string;

  constructor() {}

  ngOnInit() {
    this.selectCategory('All');
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
  }
}
