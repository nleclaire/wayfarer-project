import { Component, OnInit } from '@angular/core';
import { CITIES } from './cities';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {

  cities = CITIES;

  constructor() { }

  ngOnInit(): void {
  }

}
