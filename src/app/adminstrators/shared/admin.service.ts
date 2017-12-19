import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../../environments/environment';
import { AuthenticationService } from '../../login/authentication.service';
import { Admin } from './admin.model';

const url = environment.apiEndpoint + '/admins';

@Injectable()
export class AdminService {

  constructor(private http: HttpClient) { }

  get(): Observable<Admin[]> {
    return this.http
      .get<Admin[]>(url);
  }
// Gets a specific admin by id
  getById(id: number): Observable<Admin> {
    return this.http
      .get<Admin>(url + '/' + id);
  }
// Deletes a specific admin by using the id
  delete(id: number): Observable<Admin> {
    return this.http
      .delete<Admin>(url + '/' + id);
  }
  // Updates an admin
  update(id: number, admin: Admin): Observable<Admin> {
    return this.http
      .put<Admin>(url + '/' + id, admin);
  }
// Creates a new admin
  create(admin: Admin): Observable<Admin> {
    return this.http
      .post<Admin>(url, admin);
  }
}
