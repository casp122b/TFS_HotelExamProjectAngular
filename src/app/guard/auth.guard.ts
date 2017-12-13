import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate() {
        if (localStorage.getItem('role') == 'Administrator') {
            // logged in so return true
            return true;
        }

        //if the user is not logged in, return to guest's front page and canActivate == false;
        this.router.navigateByUrl('/guests/page');
        return false;
        
        };
    }
