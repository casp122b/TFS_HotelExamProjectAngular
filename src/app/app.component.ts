import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  guests: string;
  loggedIn = false;
  constructor(private router: Router) {

  }
  public registerGuests() {
    this.router
      .navigateByUrl('/guests/create');
  }
}
