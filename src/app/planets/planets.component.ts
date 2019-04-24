import { PlanetsModel } from './../_models/planets.model';
import { Component, OnInit } from '@angular/core';
import { PlanetsService } from '../_services/planets.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  providers: [PlanetsService]
})
export class PlanetsComponent implements OnInit {
  protected planets: PlanetsModel;
  protected search: string;
  protected pageNumber: number;
  protected pageSize = 10;
  protected maxPageNumber: number;

  constructor(private planetsService: PlanetsService) { }

  ngOnInit() {
    this.getPlanets();
  }

  protected getPlanetsByPhrase(phrase: string) {
    this.search = phrase;
    this.getPlanets(this.search, this.pageNumber, this.pageSize);
  }

  protected getPlanetsByPageNumber(pageNumber: number) {
    this.pageNumber = pageNumber;
    this.getPlanets(this.search, this.pageNumber, this.pageSize);
  }

  protected getPlanetsByPageSize(pageSize: number) {
    this.pageSize = pageSize;
    this.getPlanets(this.search, this.pageNumber, this.pageSize);
  }

  private getPlanets(search?: string, pageNumber?: number, pageSize?: number) {
    this.planetsService.getPlanets(search, pageNumber, pageSize).subscribe(
      (planets: PlanetsModel) => {
        this.planets = planets;
        this.setMaxPageNumber();
      });
  }

  private setMaxPageNumber() {
    this.maxPageNumber = Math.ceil(this.planets.count / this.pageSize);
  }

}
