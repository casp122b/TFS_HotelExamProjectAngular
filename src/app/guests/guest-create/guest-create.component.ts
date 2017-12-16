import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from '../../users/shared/user.model';
import { UserService } from '../../users/shared/user.service';
import { Guest } from '../shared/guest.model';
import { GuestService } from '../shared/guest.service';

@Component({
  selector: 'app-guest-create',
  templateUrl: './guest-create.component.html',
  styleUrls: ['./guest-create.component.css']
})
export class GuestCreateComponent implements OnInit {

  guestGroup: FormGroup;
  authId: number;
  constructor(private guestService: GuestService,
    private userService: UserService,
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

    const user: User = {
      username: values.username,
      password: values.password
    };
    this.userService.createUser(user)
    .subscribe(done => {
      user.id = done.id;

      const guest: Guest = {
        firstName: values.firstName,
        lastName: values.lastName,
        address: values.address,
        userId: done.id
      };
      this.guestService.create(guest)
      .subscribe(guest => {
        this.router.navigateByUrl('/front');
      });
    });
  }
  }
