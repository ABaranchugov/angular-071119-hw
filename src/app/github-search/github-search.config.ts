import {InjectionToken} from '@angular/core';
import {environment} from '../../environments/environment';

export const BASE_URL = environment.baseUrl;
export const BASE_URL_TOKEN = new InjectionToken(BASE_URL);
export const SEARCH_URI = 'search/repositories';
export const SEARCH_URI_TOKEN = new InjectionToken(SEARCH_URI);
