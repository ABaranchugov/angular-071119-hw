import {Component, OnDestroy, OnInit} from '@angular/core';
import {SearchService} from './services/search.service';
import {Observable} from 'rxjs';
import {ISearchResults} from './models/search-results.model';

@Component({
  selector: 'app-github-search',
  templateUrl: './github-search.component.html',
  styleUrls: ['./github-search.component.css']
})
export class GithubSearchComponent {
  public loading$: Observable<boolean> = this.$search.loading$;
  public results$: Observable<ISearchResults> = this.$search.results$;

  constructor(
    private $search: SearchService
  ) {}

  public changeValue(value: string): void {
    this.$search.searchValue = value;
  }

  public refresh(): void {
    this.$search.refresh();
  }
}
