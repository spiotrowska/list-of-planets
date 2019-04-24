import { FilmModel } from './../_models/film.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FilmsService {

  constructor(private http: HttpClient) {}

  getFilm(url: string): Observable<FilmModel> {
    return this.http.get<FilmModel>(url);
  }
}
