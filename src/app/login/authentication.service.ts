import { HttpClient } from '@angular/common/http';
import { Authentication } from './authentication.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { environment } from '../../environments/environment';

const url = environment.apiEndpoint + '/login';
//const urlForCreate = environment.apiEndpoint + '/users';

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
    }

    createUser(authentication: Authentication): Observable<Authentication> {
        return this.http.post<Authentication>('http://localhost:17711/api/users', authentication)
    }
}