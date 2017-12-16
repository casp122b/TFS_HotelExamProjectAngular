import 'rxjs/add/operator/map';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../../../environments/environment';
import { DoubleRoom } from './double-room.model';

const url = environment.apiEndpoint + '/doubleRooms';

@Injectable()
export class DoubleRoomService {

  constructor(private http: HttpClient) {
  }

  get(): Observable<DoubleRoom[]> {
    return this.http
      .get<DoubleRoom[]>(url);
  }

  getById(id: number): Observable<DoubleRoom> {
    return this.http
      .get<DoubleRoom>(url + '/' + id);
  }

  delete(id: number): Observable<DoubleRoom> {
    return this.http
      .delete<DoubleRoom>(url + '/' + id);
  }

  create(doubleRoom: DoubleRoom): Observable<DoubleRoom> {
    return this.http
      .post<DoubleRoom>(url, doubleRoom);
  }

  update(id: number, doubleRoom: DoubleRoom): Observable<DoubleRoom> {
    return this.http
    .put<DoubleRoom>(url + '/' + id, doubleRoom);
  }
}
