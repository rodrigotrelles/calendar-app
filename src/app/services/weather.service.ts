import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private forecastSource = new BehaviorSubject<any>(null);
  public readonly forecast$ = this.forecastSource.asObservable();

  constructor(private http: HttpClient) { }

  getCityWeatherForDate(city: string, dayPicked: moment.Moment) {
    const url = `${environment.weather.url}?`;
    const params = `${environment.weather.params.city}${this.capitalize(city)}&${environment.weather.params.id}${environment.weather.key}`;
    this.http.get(`${url}${params}`).subscribe(result => {
      // tslint:disable-next-line: no-string-literal
      const days = result['list'];
      let forecast = 'no';
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < days.length; i++) {
        const day = days[i];
        const duration = moment.duration(dayPicked.diff(day.dt_txt));
        const hoursDif = Math.abs(duration.asHours());
        // tslint:disable-next-line: no-string-literal
        if (hoursDif <= 3) {
          forecast = day;
        }
      }
      this.forecastSource.next(forecast);
    });
  }

  get forecast(): any {
    return this.forecastSource.getValue();
  }

  cleanForecast() {
    this.forecastSource.next(null);
  }

  capitalize(city: string) {
    return city[0].toUpperCase() + city.slice(1);
  }

}
