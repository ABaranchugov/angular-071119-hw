import {NgModule} from '@angular/core';
import {WeatherWidgetHotelsComponent} from './components/weather-widget-hotels/weather-widget-hotels.component';
import {WeatherWidgetSwitcherComponent} from './components/weather-widget-switcher/weather-widget-switcher.component';
import {WeatherWidgetWeatherComponent} from './components/weather-widget-weather/weather-widget-weather.component';
import {WeatherWidgetSocialComponent} from './components/weather-widget-social/weather-widget-social.component';
import {WeatherWidgetComponent} from './weather-widget.component';
import {SharedModule} from '../shared/shared.module';
import {HotelsTypesPipe} from './pipes/hotels-types.pipe';
import {WeatherWidgetImageComponent} from './components/weather-widget-image/weather-widget-image.component';
import {WeatherWidgetHotelComponent} from './components/weather-widget-hotels/weather-widget-hotel/weather-widget-hotel.component';

@NgModule({
  declarations: [
    WeatherWidgetComponent,
    WeatherWidgetHotelsComponent,
    WeatherWidgetSwitcherComponent,
    WeatherWidgetWeatherComponent,
    WeatherWidgetSocialComponent,
    HotelsTypesPipe,
    WeatherWidgetImageComponent,
    WeatherWidgetHotelComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    WeatherWidgetComponent
  ]
})
export class WeatherWidgetModule {
}
