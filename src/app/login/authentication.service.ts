import 'rxjs/add/operator/map';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../environments/environment';
import { Authentication } from './authentication.model';

const url = environment.apiEndpoint + '/login';

@Injectable()
export class AuthenticationService {

    constructor(private http: HttpClient) {
        // set token if saved in local storage
        localStorage.getItem('currentUser');
    }

    login(authentication: Authentication): Observable<Authentication> {
        return this.http.post<Authentication>(url, authentication)
    }

    logout() {
        // clear token remove user from local storage to log user out
        localStorage.removeItem('username');
        localStorage.removeItem('currentUser');
        localStorage.removeItem('role');
    }
}