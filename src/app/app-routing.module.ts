import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';

const appRoutes: Routes = [
 { path: 'weather', loadChildren: () => import('./weather/weather.module').then(m => m.WeatherModule)},
 { path: '', redirectTo: 'weather', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
