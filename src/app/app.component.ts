import { Component } from '@angular/core';
import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public copyright: string = environment.copyright;
  public title: string = environment.title;
  public date: Date = environment.date;
}
