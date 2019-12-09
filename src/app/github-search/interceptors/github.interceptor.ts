import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BASE_URL_TOKEN} from '../github-search.config';
import {Inject} from '@angular/core';

export class GithubInterceptor implements HttpInterceptor {
  constructor(
    @Inject(BASE_URL_TOKEN) private baseUrl: string
  ) {
  }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      url: `${this.baseUrl}/${req.url}`,
      params: req.params
    });

    return next.handle(req);
  }
}
