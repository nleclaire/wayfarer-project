import { Component, OnInit } from '@angular/core';
import {CITIES} from '../cities/cities';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isNavbarCollapsed = false;

  cities = CITIES;
  searchText: any;

  constructor() { }

  ngOnInit(): void {
  }

}
