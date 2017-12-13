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

        // not logged in so redirect to login page
        
        this.router.navigateByUrl('/front');
        return false;
        
        };
    }
