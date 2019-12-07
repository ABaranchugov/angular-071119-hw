import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {IHotel, IHotels} from '../../models/hotels.model';

@Component({
  selector: 'app-weather-widget-hotels',
  templateUrl: './weather-widget-hotels.component.html',
  styleUrls: ['./weather-widget-hotels.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherWidgetHotelsComponent {
  public hotels: IHotels = [];

  @Input('hotels')
  private set inputHotels(hotels: IHotels) {
    this.hotels = hotels;

    if (hotels.length > 0) {
      this.select(hotels[0]);
    }
  }

  @Input()
  public type: string;

  @Output()
  public onSelect: EventEmitter<IHotel> = new EventEmitter<IHotel>(true);

  public select(hotel: IHotel): void {
    this.onSelect.emit(hotel);
  }
}
