/* Modules */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NgbDropdownModule,
  NgbButtonsModule,
  NgbAlertModule,
} from '@ng-bootstrap/ng-bootstrap';
/* Components */
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DetailComponent } from './components/detail/detail.component';
import { NewsCardComponent } from './components/news-card/news-card.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { FooterComponent } from './components/footer/footer.component';
import { PrivacyComponent } from './components/footer/privacy/privacy.component';
import { RssSourcesComponent } from './components/footer/rss-sources/rss-sources.component';
import { ContributionsComponent } from './components/footer/contributions/contributions.component';
import { ImpressumComponent } from './components/footer/impressum/impressum.component';
import { FooterHeaderComponent } from './components/footer/footer-header/footer-header.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    HomeComponent,
    NewsCardComponent,
    FooterComponent,
    PrivacyComponent,
    RssSourcesComponent,
    ContributionsComponent,
    ImpressumComponent,
    FooterHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbDropdownModule,
    NgbButtonsModule,
    BrowserAnimationsModule,
    NgbAlertModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
