import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VehicleModel } from './../_models/vehicle.model';

@Injectable()
export class VehiclesService {

    constructor(private http: HttpClient) { }

    getVehicle(url: string): Observable<VehicleModel> {
        return this.http.get<VehicleModel>(url);
    }
}
