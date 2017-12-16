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

  //Gets a list of guests and inserts it into the local Guest[]
  ngOnInit() {
    this.guestService.get()
      .subscribe(
      guests => {
        this.guests = guests;
      }
      );
  }

  //When clicking a specific guest, this method is executed, and the admin is routed to /guest/ + guest.id
  details(guest: Guest) {
    this.router
      .navigateByUrl('/guest/' + guest.id);
  }

  //Registers which guest was clicked and changes the delete button into "are you sure?" and "cancel"
  delete(guest: Guest, $event) {
    this.guestToDelete = guest;
    $event.stopPropagation();
  }

  //The deletion of the clicked guest is aborted, and the delete button becomes visable again
  deleteAborted($event) {
    this.guestToDelete = null;
    $event.stopPropagation();
  }

  //When clicking the "are you sure?" button, the corresponding user to the guest's userId is deleted. 
  //Afterwards, the guest itself is deleted. The list of guests is refreshed due to the get request
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
