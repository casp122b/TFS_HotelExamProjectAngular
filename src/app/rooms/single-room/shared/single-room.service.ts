import 'rxjs/add/operator/map';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../../../environments/environment';
import { SingleRoom } from './single-room.model';

const url = environment.apiEndpoint + '/singleRooms';

@Injectable()
export class SingleRoomService {

  constructor(private http: HttpClient) {
  }
// Gets the objects in the Observable SingleRoom
  get(): Observable<SingleRoom[]> {
    return this.http
      .get<SingleRoom[]>(url);
  }
// Get a specific SingleRoom by id
  getById(id: number): Observable<SingleRoom> {
    return this.http
      .get<SingleRoom>(url + '/' + id);
  }
// Delete a specific SingleRoom by using the id
  delete(id: number): Observable<SingleRoom> {
    return this.http
      .delete<SingleRoom>(url + '/' + id);
  }
//Create a new singleRoom
  create(singleRoom: SingleRoom): Observable<SingleRoom> {
    return this.http
      .post<SingleRoom>(url, singleRoom);
  }
  // Updates a SingleRoom
  update(id: number, singleRoom: SingleRoom): Observable<SingleRoom> {
    return this.http
      .put<SingleRoom>(url + '/' + id, singleRoom);
  }
}
