import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PlanetsComponent } from './planets/planets.component';
import { FilterComponent } from './filter/filter.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PlanetDetailsComponent } from './planet-details/planet-details.component';
import { PlanetViewComponent } from './planet-view/planet-view.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FilmViewComponent } from './film-view/film-view.component';
import { NamesModalComponent } from './names-modal/names-modal.component';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanetsComponent,
    FilterComponent,
    PaginationComponent,
    PlanetDetailsComponent,
    PlanetViewComponent,
    FilmViewComponent,
    NamesModalComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  entryComponents: [
    NamesModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
