import {Inject, Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {debounceTime, filter, map, shareReplay, switchMap} from 'rxjs/operators';
import {SEARCH_URI_TOKEN} from '../github-search.config';
import {ISearchResults} from '../models/search-results.model';
import {ISearchQuery} from '../models/search-query.model';
import {distinctUntilChanged} from 'rxjs/internal/operators/distinctUntilChanged';
import {tap} from 'rxjs/internal/operators/tap';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private _searchLoading$: Subject<boolean> = new BehaviorSubject(false);
  private _searchValue$: Subject<ISearchQuery> = new Subject();
  private _searchResults$: Observable<ISearchResults>;

  constructor(
    private $http: HttpClient,
    @Inject(SEARCH_URI_TOKEN) private searchUri: string
  ) {
    this.createSearchResultsStream();
  }

  public get loading$(): Observable<boolean> {
    return this._searchLoading$.asObservable();
  }

  public get results$(): Observable<any> {
    return this._searchResults$;
  }

  public set searchValue(value: string) {
    this._searchValue$.next({value});
  }

  private createSearchResultsStream(): void {
    this._searchResults$ = this._searchValue$
      .pipe(
        map(({value}) => value),
        filter((q: string) =>
          q.length > 3
        ),
        debounceTime(250),
        distinctUntilChanged(),
        tap(() =>
          this._searchLoading$.next(true)
        ),
        switchMap(q =>
          this.$http.get(this.searchUri, {params: {q}}) as Observable<ISearchResults>
        ),
        tap(() =>
          this._searchLoading$.next(false)
        ),
        shareReplay(1)
      );
  }
}
