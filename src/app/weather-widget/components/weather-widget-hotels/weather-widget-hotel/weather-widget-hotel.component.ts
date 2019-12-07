import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {IHotel} from '../../../models/hotels.model';

@Component({
  selector: 'app-weather-widget-hotel',
  templateUrl: './weather-widget-hotel.component.html',
  styleUrls: ['./weather-widget-hotel.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherWidgetHotelComponent {
  @Input()
  public hotel: IHotel;

  @Output()
  public onSelect: EventEmitter<IHotel> = new EventEmitter<IHotel>();

  public get address(): string {
    return this.hotel.address;
  }

  public get img(): string {
    return this.hotel.img;
  }

  public get phone(): number {
    return this.hotel.phone;
  }

  public get socialInfoImg(): string {
    return this.hotel.social_info.img;
  }

  public get title(): string {
    return this.hotel.social_info.title;
  }
}
