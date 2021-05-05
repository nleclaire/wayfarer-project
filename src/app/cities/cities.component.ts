import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {

  cities = [
    {
      name : 'San Francisco',
      image_url : ''
    },
    {
      name : 'London',
      image_url : ''
    },
    {
      name : 'Gibraltar',
      image_url : ''
    },
    {
      name : 'Sydney',
      image_url : ''
    },
    {
      name : 'New York',
      image_url : ''
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
