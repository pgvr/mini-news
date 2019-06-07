import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RssSourcesComponent } from './rss-sources.component';

describe('RssSourcesComponent', () => {
  let component: RssSourcesComponent;
  let fixture: ComponentFixture<RssSourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RssSourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RssSourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
