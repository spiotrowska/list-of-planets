import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpeciesModel } from './../_models/species.model';

@Injectable()
export class SpeciesService {

    constructor(private http: HttpClient) { }

    getSpecies(url: string): Observable<SpeciesModel> {
        return this.http.get<SpeciesModel>(url);
    }
}
