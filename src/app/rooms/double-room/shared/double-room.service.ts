import { Injectable } from '@angular/core';
import {DoubleRoom} from './double-room.model';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';

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
}
