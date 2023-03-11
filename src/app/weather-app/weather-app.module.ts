import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherComponent } from './weather-app/weather-app.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    WeatherComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
   
  ],
  exports:[
    WeatherComponent,
  ]
})
export class WeatherAppModule { }
