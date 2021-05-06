import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CITIES } from '../cities/cities';

@Component({
  selector: 'app-city-posts',
  templateUrl: './city-posts.component.html',
  styleUrls: ['./city-posts.component.css']
})

export class CityPostsComponent implements OnInit {

  city: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe( params => {
        console.log(params);
        this.city = CITIES.find( city => {
          return city.id === parseInt(params.get('id'), 10);
        });
      });
  }

}
