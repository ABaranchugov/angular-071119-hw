import {NgModule} from '@angular/core';
import {GithubSearchComponent} from './github-search.component';
import {GithubSearchFormComponent} from './components/github-search-form/github-search-form.component';
import {GithubSearchResultsComponent} from './components/github-search-results/github-search-results.component';
import {BASE_URL, BASE_URL_TOKEN, SEARCH_URI, SEARCH_URI_TOKEN} from './github-search.config';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {GithubInterceptor} from './interceptors/github.interceptor';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [
    GithubSearchComponent,
    GithubSearchFormComponent,
    GithubSearchResultsComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    GithubSearchComponent
  ],
  providers: [
    {provide: BASE_URL_TOKEN, useValue: BASE_URL},
    {provide: SEARCH_URI_TOKEN, useValue: SEARCH_URI},
    {
      provide: HTTP_INTERCEPTORS,
      useClass: GithubInterceptor,
      multi: true
    }
  ]
})
export class GithubSearchModule {
}
