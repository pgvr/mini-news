import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetailComponent } from './components/detail/detail.component';
import { AnimationGuard } from './services/animation-guard.guard';
import { ContributionsComponent } from './components/footer/contributions/contributions.component';
import { PrivacyComponent } from './components/footer/privacy/privacy.component';
import { RssSourcesComponent } from './components/footer/rss-sources/rss-sources.component';
import { ImpressumComponent } from './components/footer/impressum/impressum.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'detail',
    component: DetailComponent,
    canDeactivate: [AnimationGuard],
  },
  {
    path: 'contributions',
    component: ContributionsComponent,
  },
  {
    path: 'privacy',
    component: PrivacyComponent,
  },
  {
    path: 'rss-sources',
    component: RssSourcesComponent,
  },
  {
    path: 'impressum',
    component: ImpressumComponent,
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
