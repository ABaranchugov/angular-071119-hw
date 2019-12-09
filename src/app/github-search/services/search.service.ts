import {Inject, Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {debounceTime, filter, map, shareReplay, switchMap} from 'rxjs/operators';
import {SEARCH_URI_TOKEN} from '../github-search.config';
import {ISearchResults} from '../models/search-results.model';
import {ISearchQuery} from '../models/search-query.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private _lastSearchedValue: string = null;
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
    this._searchValue$.next({value, refresh: false});
  }

  public refresh(): void {
    this._searchValue$.next({value: this._lastSearchedValue, refresh: false});
  }

  private createSearchResultsStream(): void {
    this._searchResults$ = this._searchValue$
      .pipe(
        map((query: ISearchQuery) => {
          this._searchLoading$.next(true);
          return query;
        }),
        debounceTime(1000),
        filter(({value, refresh}: ISearchQuery) => {
          const result = (!refresh && value !== this._lastSearchedValue) && value.length > 3;

          if (!result) {
            this._searchLoading$.next(false);
          }
          return result;
        }),
        switchMap(({value: q}: ISearchQuery) => {
          console.log('query');
          this._lastSearchedValue = q;
          return this.$http.get(`${this.searchUri}`, {params: {q}});
        }),
        map((res: ISearchResults) => {
          this._searchLoading$.next(false);
          return res;
        }),
        shareReplay(1)
      );
  }
}
