import { Component, OnInit } from '@angular/core';
import {CITIES} from '../cities/cities';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})

export class CityListComponent implements OnInit {

  cities = CITIES;

  constructor() { }

  ngOnInit(): void {
  }

}
