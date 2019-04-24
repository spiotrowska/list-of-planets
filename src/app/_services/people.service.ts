import { PersonModel } from './../_models/person.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PeopleService {

  constructor(private http: HttpClient) {}

  getPerson(url: string): Observable<PersonModel> {
    return this.http.get<PersonModel>(url);
  }
}
