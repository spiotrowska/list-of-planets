import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmsService } from './../_services/films.service';
import { environment } from './../../environments/environment.prod';
import { FilmModel } from './../_models/film.model';
import { PeopleService } from './../_services/people.service';
import { PersonModel } from './../_models/person.model';
import { Location } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NamesModalComponent } from './../names-modal/names-modal.component';
import { PlanetsService } from '../_services/planets.service';
import { SpeciesService } from './../_services/species.service';
import { StarshipsService } from './../_services/starships.service';
import { VehiclesService } from './../_services/vehicles.service';
import { PlanetModel } from './../_models/planet.model';
import { StarshipModel } from './../_models/starship.model';
import { VehicleModel } from './../_models/vehicle.model';
import { SpeciesModel } from '../_models/species.model';

@Component({
  selector: 'app-film-view',
  templateUrl: './film-view.component.html',
  styleUrls: ['./film-view.component.less'],
  providers: [FilmsService, PeopleService, PlanetsService, SpeciesService, StarshipsService, VehiclesService]
})
export class FilmViewComponent implements OnInit {
  film: FilmModel;
  charactersNames: string[] = [];
  planetsNames: string[] = [];
  starshipsNames: string[] = [];
  vehiclesNames: string[] = [];
  speciesNames: string[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private filmsService: FilmsService,
    private peopleService: PeopleService,
    private planetsService: PlanetsService,
    private speciesService: SpeciesService,
    private starshipsService: StarshipsService,
    private vehiclesService: VehiclesService,
    private location: Location,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.getFilm();
  }

  goBack() {
    this.location.back();
  }

  openNamesModal(title: string, names: string[]) {
    const modalRef = this.modalService.open(NamesModalComponent);
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.names = names;
  }

  openCharactersModal() {
    this.getCharactersNames();
    this.openNamesModal('Characters', this.charactersNames);
  }

  openPlanetsModal() {
    this.getPlanetsNames();
    this.openNamesModal('Planets', this.planetsNames);
  }

  openStarshipsModal() {
    this.getStarshipsNames();
    this.openNamesModal('Starships', this.starshipsNames);
  }

  opensVehiclesModal() {
    this.getVehiclesNames();
    this.openNamesModal('Vehicles', this.vehiclesNames);
  }

  openSpeciesModal() {
    this.getSpeciesNames();
    this.openNamesModal('Species', this.speciesNames);
  }

  private getFilm() {
    const filmId = this.getFilmIdFromUrl();
    this.filmsService.getFilm(`${environment.apiUrl}films/${filmId}/`)
      .subscribe((film: FilmModel) => this.film = film);
  }

  private getFilmIdFromUrl(): string {
    return this.activatedRoute.snapshot.paramMap.get('id');
  }

  private getCharactersNames() {
    this.film.characters.forEach(url => this.peopleService.getPerson(url)
      .subscribe((character: PersonModel) => this.charactersNames.push(character.name)));
  }

  private getPlanetsNames() {
    this.film.planets.forEach(url => this.planetsService.getPlanet(url)
      .subscribe((planet: PlanetModel) => this.planetsNames.push(planet.name)));
  }

  private getStarshipsNames() {
    this.film.starships.forEach(url => this.starshipsService.getStarship(url)
      .subscribe((starship: StarshipModel) => this.starshipsNames.push(starship.name + " " + starship.model)));
  }

  private getVehiclesNames() {
    this.film.vehicles.forEach(url => this.vehiclesService.getVehicle(url)
      .subscribe((vehicle: VehicleModel) => this.vehiclesNames.push(vehicle.name + " " + vehicle.model)));
  }

  private getSpeciesNames() {
    this.film.species.forEach(url => this.speciesService.getSpecies(url)
      .subscribe((species: SpeciesModel) => this.speciesNames.push(species.name)));
  }

}
