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
    this._searchValue$.next({value, refresh: false});
  }

  public refresh(): void {
    this._searchValue$.next({value: this._lastSearchedValue, refresh: true});
  }

  private createSearchResultsStream(): void {
    let currentRequest: Observable<any>;

    this._searchResults$ = this._searchValue$
      .pipe(
        filter(({value}: ISearchQuery) => {
          const result: boolean = value.length > 3;

          if (!result) {
            this._searchLoading$.next(false);
          }

          return result;
        }),
        map((query: ISearchQuery) => {
          this._searchLoading$.next(true);
          return query;
        }),
        debounceTime(250),
        filter(({value, refresh}: ISearchQuery) => {
          const result = (!refresh && value !== this._lastSearchedValue);

          if (!result) {
            this._searchLoading$.next(false);
          }
          return result;
        }),
        concatMap(({value: q}: ISearchQuery) => {
          currentRequest = this.$http.get(`${this.searchUri}`, {params: {q}});

          return combineLatest(currentRequest, of(q));
        }),
        map(([res, q]: [ISearchResults, string]) => {
          this._lastSearchedValue = q;
          this._searchLoading$.next(false);
          return res;
        }),
        shareReplay(1)
      );
  }
}
