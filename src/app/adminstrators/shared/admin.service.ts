import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { AuthenticationService } from '../../login/authentication.service';
import { Admin } from './admin.model';

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
