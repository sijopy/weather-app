import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather',
  templateUrl: './weather-app.component.html',
  styleUrls: ['./weather-app.component.scss']
})
export class WeatherComponent {
  city: any;
  weatherData: any = null;
  constructor(private http: HttpClient) { }
  getWeather() {
    this.http.get("https://api.openweathermap.org/data/2.5/weather?q="+this.city+"&appid=96d1ab39ba34503dd54d121555126170")
      .subscribe((data: any) => {
        console.log(data);
        this.weatherData = data;
      },(err)=>{
    return false})
      return true;
  }
}

