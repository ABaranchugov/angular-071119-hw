import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ISocialInfo} from '../../models/social-info.model';

@Component({
  selector: 'app-weather-widget-social',
  templateUrl: './weather-widget-social.component.html',
  styleUrls: ['./weather-widget-social.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherWidgetSocialComponent {
  @Input('social-info')
  public socialInfo: ISocialInfo;

  public get title(): string {
    return this.socialInfo.title;
  }

  public get img(): string {
    return this.socialInfo.img;
  }

  public get followers(): number {
    return this.socialInfo.followers;
  }

  public get following(): number {
    return this.socialInfo.following;
  }
}
