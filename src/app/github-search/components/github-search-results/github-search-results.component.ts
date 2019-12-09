import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ISearchResults} from '../../models/search-results.model';

@Component({
  selector: 'app-github-search-results',
  templateUrl: './github-search-results.component.html',
  styleUrls: ['./github-search-results.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GithubSearchResultsComponent {
  public pagination = {size: 5, index: 1};

  @Input()
  public results$: Observable<ISearchResults>;

  @Input()
  public loading$: Observable<boolean>;

  public get sliceStart(): number {
    return (this.pagination.index - 1) * this.pagination.size;
  }

  public get sliceEnd(): number {
    return this.sliceStart + this.pagination.size;
  }

}
