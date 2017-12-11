import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Guest } from '../shared/guest.model';
import { GuestService } from '../shared/guest.service';
import { Router } from '@angular/router';
import { Authentication } from '../../login/authentication.model';
import { AuthenticationService } from '../../login/authentication.service';

@Component({
  selector: 'app-guest-create',
  templateUrl: './guest-create.component.html',
  styleUrls: ['./guest-create.component.css']
})
export class GuestCreateComponent implements OnInit {

  guestGroup: FormGroup;
  constructor(private guestService: GuestService,
              private authenticationService: AuthenticationService,
              private fb: FormBuilder,
              private router: Router) {
      this.guestGroup = this.fb.group({
        firstName: '',
        lastName: '',
        address: '',
        username: '',
        password: ''
      })
   }

  ngOnInit() {
  }

  createGuest() {
    const values = this.guestGroup.value;
    const guest: Guest = {
      firstName: values.firstName,
      lastName: values.lastName,
      address: values.address
    };
    const authentication: Authentication = {
      username: values.username,
      password: values.password
    };
    this.guestService.create(guest)
    .subscribe(guest => {
;
    });
    this.authenticationService.createUser(authentication)
    .subscribe(authentication => {
      this.guestGroup.reset();
      this.router.navigateByUrl("/front")
    });

  }
}
