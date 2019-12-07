import {Component, OnDestroy, OnInit} from '@angular/core';
import {IHotel, IHotels} from './models/hotels.model';
import {getHotels$} from '../mock/hotels.mock';
import {Observable, Subject} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.css']
})
export class WeatherWidgetComponent implements OnInit {
  public hotels: IHotels;
  public selectedType: string;
  public selectedHotel: IHotel;

  public selectHotel(selectedHotel: IHotel): void {
    this.selectedHotel = selectedHotel;
  }

  public switchType(selectedType: string): void {
    this.selectedType = selectedType;
  }

  ngOnInit(): void {
    getHotels$().subscribe(hotels =>
      this.hotels = hotels
    );
  }
}
