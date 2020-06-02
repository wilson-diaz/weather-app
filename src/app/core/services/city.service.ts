import { Injectable } from '@angular/core';

import { City } from '../interfaces/city';
import { CITIES } from '../../mocks/cities.mock';
import { Forecast } from '../interfaces/forecast';
import { FORECASTS } from '../../mocks/forecasts.mock';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor() { }

  getCities(): Array<City> {
    return CITIES;
  }

  getForecast(cityId: number): Forecast {
    return FORECASTS.find(forecast => forecast.cityId === cityId);
  }
}
