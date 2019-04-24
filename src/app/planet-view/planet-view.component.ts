import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { PlanetModel } from '../_models/planet.model';

@Component({
  selector: 'app-planet-view',
  templateUrl: './planet-view.component.html'
})
export class PlanetViewComponent implements OnInit {
  @Input() planet: PlanetModel;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  protected redirectToPlanetDetails(url: string) {
    const hostNameLength = 21;
    this.router.navigate([url.substr(hostNameLength)]);
  }

}
