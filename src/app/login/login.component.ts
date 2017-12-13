import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { Authentication } from './authentication.model';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errormessage = '';
  authGroup: FormGroup;

  constructor(private router: Router,
    private authenticationService: AuthenticationService,
    private fb: FormBuilder) {
    this.authGroup = this.fb.group({
      username: '',
      password: ''
    })
  }

  ngOnInit() {
    this.authenticationService.logout();
  }

  login() {
    const values = this.authGroup.value;
    const auth: Authentication = {
      username: values.username,
      password: values.password
    };
    this.authenticationService.login(auth)
      .subscribe(
      success => {
        auth.token = success.token;
        auth.username = success.username;
        auth.role = success.role;

        localStorage.setItem('currentUser', success.token);
        localStorage.setItem('username', success.username);
        localStorage.setItem('role', success.role);
        this.router.navigateByUrl('/trying/now');
      },
      error => {
        this.errormessage = 'Wrong username or password!';
      });
  }

}
