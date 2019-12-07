import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {IWeather} from '../../models/weather.model';

@Component({
  selector: 'app-weather-widget-weather',
  templateUrl: './weather-widget-weather.component.html',
  styleUrls: ['./weather-widget-weather.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherWidgetWeatherComponent {
  @Input()
  public weather: IWeather;

  public get title(): string {
    return this.weather.title;
  }

  public get icon(): string {
    return this.weather.icon;
  }

  public get temperature(): number {
    return this.weather.temperature;
  }

  public get waterTemperature(): number {
    return this.weather.water;
  }
}
