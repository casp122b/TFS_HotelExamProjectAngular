import 'rxjs/add/operator/map';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { User } from './user.model';
import { environment } from '../../../environments/environment';

const url = environment.apiEndpoint + '/users';

@Injectable()
export class UserService {

    constructor(private http: HttpClient) {
    }

    createUser(user: User): Observable<User> {
        return this.http.post<User>(url, user)
    }

    update(id: number, user: User): Observable<User> {
        return this.http
        .put<User>(url + '/' + id, user);
    }

    delete(id: number): Observable<User> {
        return this.http
          .delete<User>(url + '/' + id);
      }
}