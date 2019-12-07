import {Component, Input} from '@angular/core';
import {ISocialInfo} from '../../models/social-info.model';

@Component({
  selector: 'app-weather-widget-social',
  templateUrl: './weather-widget-social.component.html',
  styleUrls: ['./weather-widget-social.component.css']
})
export class WeatherWidgetSocialComponent {
  public socialInfo: ISocialInfo;

  @Input('social-info')
  private set inputSocialInfo(socialInfo: ISocialInfo) {
    this.socialInfo = socialInfo;
  }

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
