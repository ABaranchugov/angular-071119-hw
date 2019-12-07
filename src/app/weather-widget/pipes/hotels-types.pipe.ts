import {Pipe, PipeTransform} from '@angular/core';
import {IHotels} from '../models/hotels.model';

@Pipe({
  name: 'hotelsTypes'
})
export class HotelsTypesPipe implements PipeTransform {
  public transform(hotels: IHotels): string[] {
    const types: string[] = hotels.map(hotel =>
      hotel.type
    );

    return Array.from(
      new Set(types)
    );
  }
}
