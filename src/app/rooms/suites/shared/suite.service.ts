import 'rxjs/add/operator/map';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../../../environments/environment';
import { Suite } from './suite.model';

const url = environment.apiEndpoint + '/suites';

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
  update(id: number, suite: Suite): Observable<Suite> {
    return this.http
    .put<Suite>(url + '/' + id, suite);
  }
}
