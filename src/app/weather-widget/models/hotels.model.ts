import {ISocialInfo} from './social-info.model';
import {IWeather} from './weather.model';

export interface IHotels extends Array<IHotel> {
}

export interface IHotel {
  img: string;
  address: string;
  phone: number;
  type: string;
  weather: IWeather;
  social_info: ISocialInfo;
}
