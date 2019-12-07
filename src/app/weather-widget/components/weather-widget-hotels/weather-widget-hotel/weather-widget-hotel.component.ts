import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IHotel} from '../../../models/hotels.model';

@Component({
  selector: 'app-weather-widget-hotel',
  templateUrl: './weather-widget-hotel.component.html',
  styleUrls: ['./weather-widget-hotel.component.css']
})
export class WeatherWidgetHotelComponent {
  @Input()
  public hotel: IHotel;

  @Output()
  public onSelect: EventEmitter<IHotel> = new EventEmitter<IHotel>();
}
