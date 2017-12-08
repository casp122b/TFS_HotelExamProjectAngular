import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  loading = false;
  errormessage = '';

  constructor(private router: Router,
              private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.authenticationService.logout();
  }

  login() {
    this.loading = true;
    this.authenticationService.login(this.model.username, this.model.password)
      .subscribe(
        success => {
          this.router.navigateByUrl('/trying/now')
          //this.router.navigate(['/'])
        },
        error => {
          this.errormessage = 'Wrong username or password!';
          this.loading = false;
        });
}

}
