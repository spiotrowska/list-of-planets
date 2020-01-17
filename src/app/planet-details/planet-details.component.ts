import { FilmModel } from './../_models/film.model';
import { PersonModel } from './../_models/person.model';
import { PeopleService } from './../_services/people.service';
import { FilmsService } from './../_services/films.service';
import { PlanetsService } from '../_services/planets.service';
import { PlanetModel } from '../_models/planet.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-planet',
  templateUrl: './planet-details.component.html',
  providers: [PlanetsService, FilmsService, PeopleService]
})
export class PlanetDetailsComponent implements OnInit {
  planet: PlanetModel;
  protected residentsNames = [];
  protected films = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private planetsService: PlanetsService,
    private filmsService: FilmsService,
    private peopleService: PeopleService,
    private location: Location,
    private router: Router) { }

  ngOnInit() {
    this.getPlanetById();
  }

  goBack() {
    this.location.back();
  }

  protected redirectToFilmView(url: string) {
    this.router.navigate([`films/${url.substr(url.length - 2)}`]);
  }

  private getPlanetById() {
    const planetId = this.getPlanetIdFromUrl();
    this.planetsService.getPlanet(planetId).subscribe((planet: PlanetModel) => {
      this.planet = planet;
      this.getResidentsNames();
      this.getFilms();
    });
  }

  private getResidentsNames() {
    this.planet.residents.forEach(url => this.peopleService.getPerson(url)
      .subscribe((resident: PersonModel) => this.residentsNames.push(resident.name)));
  }

  private getFilms() {
    this.planet.films.forEach(url => this.filmsService.getFilm(url)
      .subscribe((film: FilmModel) => this.films.push(film)));
  }

  private getPlanetIdFromUrl(): string {
    return this.activatedRoute.snapshot.paramMap.get('id');
  }

}
