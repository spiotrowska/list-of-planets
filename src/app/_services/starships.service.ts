import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StarshipModel } from './../_models/starship.model';

@Injectable()
export class StarshipsService {

    constructor(private http: HttpClient) { }

    getStarship(url: string): Observable<StarshipModel> {
        return this.http.get<StarshipModel>(url);
    }
}
