import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Admin } from './admin.model';
import { AuthenticationService } from '../../login/authentication.service';
import { environment } from '../../../environments/environment';

const url = environment.apiEndpoint + '/admins';

@Injectable()
export class AdminService {

  constructor(private http: HttpClient,
              private authenticationService: AuthenticationService) { }

  get(): Observable<Admin[]> {
    return this.http
      .get<Admin[]>(url);
  }
}
