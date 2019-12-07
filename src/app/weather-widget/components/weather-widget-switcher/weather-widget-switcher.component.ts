import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-weather-widget-switcher',
  templateUrl: './weather-widget-switcher.component.html',
  styleUrls: ['./weather-widget-switcher.component.css']
})
export class WeatherWidgetSwitcherComponent {
  public currentValue: string;
  public values: string[] = [];

  @Input('values')
  public set inputValues(values: string[]) {
    this.values = values;

    if (this.values.length > 0) {
      this.onSwitch.emit(values.slice(0, 1).shift());
    }
  }

  @Input('current-value')
  public set inputCurrentValue(currentValue: string) {
    this.currentValue = currentValue;
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
