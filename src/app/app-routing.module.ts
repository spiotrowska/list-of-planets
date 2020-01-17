import { PlanetDetailsComponent } from './planet-details/planet-details.component';
import { PlanetsComponent } from './planets/planets.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FilmViewComponent } from './film-view/film-view.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'planets', pathMatch: 'full' },
  {
    path: 'planets', children: [
      { path: '', component: PlanetsComponent },
      { path: ':id', component: PlanetDetailsComponent }
    ]
  },
  {
    path: 'films', children: [
      { path: ':id', component: FilmViewComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
