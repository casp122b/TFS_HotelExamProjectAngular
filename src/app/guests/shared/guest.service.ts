import { Injectable } from '@angular/core';
import {Guest} from './guest.model';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

const url = environment.apiEndpoint + '/guest';

@Injectable()
export class GuestService {

  constructor(private http: HttpClient) {
  }

  get(): Observable<Guest[]> {
    return this.http
      .get<Guest[]>(url);
  }

  getById(id: number): Observable<Guest> {
    return this.http
      .get<Guest>(url + '/' + id);
  }

  delete(id: number): Observable<Guest> {
    return this.http
      .delete<Guest>(url + '/' + id);
  }

  create(guest: Guest): Observable<Guest> {
    return this.http
      .post<Guest>(url, guest);
  }
}
