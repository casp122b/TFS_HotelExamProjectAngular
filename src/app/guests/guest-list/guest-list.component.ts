import 'rxjs/add/operator/switchMap';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Guest } from '../shared/guest.model';
import { GuestService } from '../shared/guest.service';
import { UserService } from '../../users/shared/user.service';

@Component({
  selector: 'app-guest-list',
  templateUrl: './guest-list.component.html',
  styleUrls: ['./guest-list.component.css']
})

export class GuestListComponent implements OnInit {
  guests: Guest[];
  guestToDelete: Guest;
  constructor(private guestService: GuestService,
              private userService: UserService,
              private router: Router) {
  }

  ngOnInit() {
    this.guestService.get()
      .subscribe(
      guests => {
        this.guests = guests;
      }
      );
  }

  details(guest: Guest) {
    this.router
      .navigateByUrl('/guest/' + guest.id);
  }

  delete(guest: Guest, $event) {
    this.guestToDelete = guest;
    $event.stopPropagation();
  }

  deleteAborted($event) {
    this.guestToDelete = null;
    $event.stopPropagation();
  }

  deleteConfirmed($event) {
    this.userService.delete(this.guestToDelete.userId)
      .subscribe(user => this.guestToDelete.userId = user.id);
    this.guestService.delete(this.guestToDelete.id)
      .switchMap(guest => this.guestService.get())
      .subscribe(
      guests => {
        this.guests = guests;
      }
      );
    $event.stopPropagation();
  }
}
