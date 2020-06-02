import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { WeatherComponent } from './weather.component';

const weatherRoutes: Routes = [
  { path: '',
    component: WeatherComponent,
    children: [
      { path: 'details/:id', loadChildren: () => import('./weather-details/weather-details.module').then(m => m.WeatherDetailsModule)}
    ]
  }
 ];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(weatherRoutes)
  ],
  exports: [ RouterModule ]
})
export class WeatherRoutingModule { }
