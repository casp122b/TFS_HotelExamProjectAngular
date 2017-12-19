import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../login/authentication.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
//Checks if the users has authencation, which then is used in the HTML code to give Admininstrators more options than a normal Guest
export class NavBarComponent implements OnInit {
  

  authentication: string = localStorage.getItem('username');
  role: string = localStorage.getItem('role');
  constructor(private auth: AuthenticationService,
              private router: Router) {
  }

  ngOnInit() {
  }
// Logs the user out
  logout() {
    this.auth.logout();
    this.router.navigateByUrl('/guests/page');
  }
}
