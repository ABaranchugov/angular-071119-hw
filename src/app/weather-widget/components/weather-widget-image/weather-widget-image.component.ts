import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-weather-widget-image',
  templateUrl: './weather-widget-image.component.html',
  styleUrls: ['./weather-widget-image.component.css']
})
export class WeatherWidgetImageComponent {
  public img: string;

  @Input('img')
  private set inputImg(img: string) {
    this.img = img;
  }
}
