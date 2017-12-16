import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Guest } from '../shared/guest.model';
import { GuestService } from '../shared/guest.service';
import { UserService } from '../../users/shared/user.service';
import { User } from '../../users/shared/user.model';

@Component({
  selector: 'app-guest-detail',
  templateUrl: './guest-detail.component.html',
  styleUrls: ['./guest-detail.component.css']
})
export class GuestDetailComponent implements OnInit {

  guestId: number;
  userId: number;
  newGuestGroup: FormGroup;
  constructor(private guestService: GuestService,
              private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private userService: UserService) {
    this.newGuestGroup = this.fb.group({
      firstName: '',
      lastName: '',
      address: '',
      username: '',
      password: ''
    });
  }

  ngOnInit() {
    this.route.paramMap
      .switchMap(params =>
        this.guestService.getById(+params.get('id'))
      ).subscribe(guest => {
        this.guestId = guest.id;
        this.userId = guest.userId;
      });
  }

  editGuest() {
    const currentGuest = this.guestId;
    const currentUserId = this.userId;
    const newValues = this.newGuestGroup.value;
    const updatedGuest: Guest = {
      id: currentGuest,
      firstName: newValues.firstName,
      lastName: newValues.lastName,
      address: newValues.address,
      userId: currentUserId
    };
    const updatedUser: User = {
      id: currentUserId,
      username: newValues.username,
      password: newValues.password
    }
    this.guestService.update(currentGuest, updatedGuest)
      .subscribe(guest => {
        this.userService.update(currentUserId, updatedUser)
        .subscribe(user => {
          this.newGuestGroup.reset();
        this.router.navigateByUrl("/front")
        })
      });
  }
}
