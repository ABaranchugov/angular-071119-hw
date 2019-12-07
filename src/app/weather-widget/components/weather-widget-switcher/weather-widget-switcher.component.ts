import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-weather-widget-switcher',
  templateUrl: './weather-widget-switcher.component.html',
  styleUrls: ['./weather-widget-switcher.component.css']
})
export class WeatherWidgetSwitcherComponent {
  public values: string[] = [];

  @Input('current-value')
  public currentValue: string;

  @Input('values')
  public set inputValues(values: string[]) {
    this.values = values;

    if (values.length > 0) {
      this.onSwitch.emit(values[0]);
    }
  }

  @Output()
  public onSwitch: EventEmitter<string> = new EventEmitter<string>(true);

  public switch(value: string): void {
    this.onSwitch.emit(value);
  }

  public trackByValue(index: number, value: string): string {
    return value;
  }
}
