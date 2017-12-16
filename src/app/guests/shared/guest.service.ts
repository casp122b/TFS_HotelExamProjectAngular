import 'rxjs/add/operator/map';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../../environments/environment';
import { Guest } from './guest.model';

const url = environment.apiEndpoint + '/guests';
/**
 * CRUD functions for guests.
 * 
 * @export
 * @class GuestService
 */
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

  update(id: number, guest: Guest): Observable<Guest> {
    return this.http
    .put<Guest>(url + '/' + id, guest);
  }

  create(guest: Guest): Observable<Guest> {
    return this.http
      .post<Guest>(url, guest);
  }
}
