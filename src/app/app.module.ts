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
import { GtagModule } from 'angular-gtag';
/* Components */
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DetailComponent } from './components/detail/detail.component';
import { NewsCardComponent } from './components/news-card/news-card.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    HomeComponent,
    NewsCardComponent,
    FooterComponent,
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
    GtagModule.forRoot({ trackingId: 'UA-100079341-2', trackPageviews: true }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
