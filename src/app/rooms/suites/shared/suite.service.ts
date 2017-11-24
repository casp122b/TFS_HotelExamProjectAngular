import { Injectable } from '@angular/core';
import {Suite} from './suite.model';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';

const url = environment.apiEndpoint + '/Suites';

@Injectable()
export class SuiteService {

  constructor(private http: HttpClient) {
  }

  get(): Observable<Suite[]> {
    return this.http
      .get<Suite[]>(url);
  }

  getById(id: number): Observable<Suite> {
    return this.http
      .get<Suite>(url + '/' + id);
  }

  delete(id: number): Observable<Suite> {
    return this.http
      .delete<Suite>(url + '/' + id);
  }

  create(suite: Suite): Observable<Suite> {
    return this.http
      .post<Suite>(url, suite);
  }
}
