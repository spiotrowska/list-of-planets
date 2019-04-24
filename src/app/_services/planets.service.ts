import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PlanetsModel } from '../_models/planets.model';
import { PlanetModel } from '../_models/planet.model';

@Injectable()
export class PlanetsService {

  constructor(private http: HttpClient) {}

  getPlanet(id: string): Observable<PlanetModel> {
    return this.http.get<PlanetModel>(`${environment.apiUrl}planets/${id}/`);
  }

  getPlanets(search?: string, pageNumber?: number, pageSize?: number): Observable<PlanetsModel> {
    let params = new HttpParams();
    if (search) {
      params = params.append('search', search);
    }
    if (pageNumber) {
      params = params.append('page', pageNumber.toString());
    }
    if (pageSize) {
      params = params.append('pageSize', pageSize.toString());
    }
    return this.http.get<PlanetsModel>(`${environment.apiUrl}planets/`, { params });
  }

}
