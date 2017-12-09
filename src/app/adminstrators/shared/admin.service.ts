import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Admin } from './admin.model';
import { AuthenticationService } from '../../login/authentication.service';

//const url = environment.apiEndpoint + '/admins';

@Injectable()
export class AdminService {

  constructor(private http: HttpClient,
              private authenticationService: AuthenticationService) { }

  get(): Observable<Admin[]> {
    //const headers = new HttpHeaders().set('Authorization', `Bearer ${this.authenticationService.token}`)
    return this.http
      .get<Admin[]>('http://localhost:17711/api/admins');
  }
}
