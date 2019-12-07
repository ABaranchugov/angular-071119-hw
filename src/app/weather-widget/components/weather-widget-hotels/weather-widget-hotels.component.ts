import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IHotel, IHotels} from '../../models/hotels.model';

@Component({
  selector: 'app-weather-widget-hotels',
  templateUrl: './weather-widget-hotels.component.html',
  styleUrls: ['./weather-widget-hotels.component.css']
})
export class WeatherWidgetHotelsComponent {
  public hotels: IHotels = [];

  @Input('hotels')
  private set inputHotels(hotels: IHotels) {
    this.hotels = hotels;

    if (this.hotels.length > 0) {
      this.select(
        this.hotels.slice(0, 1).shift()
      );
    }
  }

  @Output()
  public onSelect: EventEmitter<IHotel> = new EventEmitter<IHotel>(true);

  constructor() {
  }

  public select(hotel: IHotel): void {
    this.onSelect.emit(hotel);
  }
}
