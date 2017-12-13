import { Injectable } from '@angular/core';
import {SingleRoom} from './single-room.model';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';

const url = environment.apiEndpoint + '/singleRooms';

@Injectable()
export class SingleRoomService {

  constructor(private http: HttpClient) {
  }

  get(): Observable<SingleRoom[]> {
    return this.http
      .get<SingleRoom[]>(url);
  }

  getById(id: number): Observable<SingleRoom> {
    return this.http
      .get<SingleRoom>(url + '/' + id);
  }

  delete(id: number): Observable<SingleRoom> {
    return this.http
      .delete<SingleRoom>(url + '/' + id);
  }

  create(singleRoom: SingleRoom): Observable<SingleRoom> {
    return this.http
      .post<SingleRoom>(url, singleRoom);
  }
}
