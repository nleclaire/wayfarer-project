import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CitiesComponent} from './cities/cities.component';
import {CityPostsComponent} from './city-posts/city-posts.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'cities',
    component: CitiesComponent,
    children: [
      {
        path: ':id',
        component: CityPostsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
