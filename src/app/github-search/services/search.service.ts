import {Inject, Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {debounceTime, filter, map, shareReplay} from 'rxjs/operators';
import {SEARCH_URI_TOKEN} from '../github-search.config';
import {ISearchResults} from '../models/search-results.model';
import {ISearchQuery} from '../models/search-query.model';
import {of} from 'rxjs/internal/observable/of';
import {combineLatest} from 'rxjs/internal/observable/combineLatest';
import {concatMap} from 'rxjs/internal/operators/concatMap';

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
    this._searchValue$.next({value});
  }

  private createSearchResultsStream(): void {
    let currentRequest: Observable<any>;

    this._searchResults$ = this._searchValue$
      .pipe(
        filter(({value}: ISearchQuery) => {
          const isNotShortValue: boolean = value.length > 3;

          if (!isNotShortValue) {
            this._searchLoading$.next(false);
          }

          return isNotShortValue;
        }),
        map((query: ISearchQuery) => {
          this._searchLoading$.next(true);
          return query;
        }),
        debounceTime(250),
        filter(({value}: ISearchQuery) => {
          const isNewValue = value !== this._lastSearchedValue;

          if (!isNewValue) {
            this._searchLoading$.next(false);
          }
          return isNewValue;
        }),
        concatMap(({value}: ISearchQuery) => {
          currentRequest = this.$http.get(`${this.searchUri}`, {params: {q: value}});

          return combineLatest(currentRequest, of(value));
        }),
        map(([res, value]: [ISearchResults, string]) => {
          this._lastSearchedValue = value;
          this._searchLoading$.next(false);
          return res;
        }),
        shareReplay(1)
      );
  }
}
