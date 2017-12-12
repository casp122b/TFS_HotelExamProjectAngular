import { Component, OnInit } from '@angular/core';
import { Authentication } from '../../login/authentication.model';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../login/authentication.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  authentication: string = localStorage.getItem('username');
  role: string = localStorage.getItem('role');
  constructor(private auth: AuthenticationService,
              private router: Router) {
  }

  ngOnInit() {
  }

  logout() {
    localStorage.removeItem('username');
    localStorage.removeItem('currentUser');
    localStorage.removeItem('role');
    this.router.navigateByUrl('/guests/page');
  }
}
