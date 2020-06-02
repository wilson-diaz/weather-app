import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CityService } from 'src/app/core/services/city.service';
import { Forecast } from 'src/app/core/interfaces/forecast';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.scss']
})
export class WeatherDetailsComponent implements OnInit {

  forecast: Forecast;

  constructor(
    private route: ActivatedRoute,
    private cityService: CityService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.initializeForecast(+params.id));
  }

  initializeForecast(id: number) {
    this.forecast = this.cityService.getForecast(id);
  }

}
