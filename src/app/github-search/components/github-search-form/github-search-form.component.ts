import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-github-search-form',
  templateUrl: './github-search-form.component.html',
  styleUrls: ['./github-search-form.component.css']
})
export class GithubSearchFormComponent {
  @Output()
  public onChangeValue: EventEmitter<string> = new EventEmitter<string>();

  public keyup(value: string): void {
    this.onChangeValue.emit(value);
  }
}
