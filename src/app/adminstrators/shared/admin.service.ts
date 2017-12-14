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

  getById(id: number): Observable<Admin> {
    return this.http
      .get<Admin>(url + '/' + id);
  }

  delete(id: number): Observable<Admin> {
    return this.http
      .delete<Admin>(url + '/' + id);
  }

  update(id: number, admin: Admin): Observable<Admin> {
    return this.http
      .put<Admin>(url + '/' + id, admin);
  }

  create(admin: Admin): Observable<Admin> {
    return this.http
      .post<Admin>(url, admin);
  }
}
