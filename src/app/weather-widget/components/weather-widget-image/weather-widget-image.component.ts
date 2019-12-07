import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-weather-widget-image',
  templateUrl: './weather-widget-image.component.html',
  styleUrls: ['./weather-widget-image.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherWidgetImageComponent {
  @Input()
  public img: string;
}
