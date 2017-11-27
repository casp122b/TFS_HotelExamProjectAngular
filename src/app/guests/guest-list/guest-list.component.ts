import { Component, OnInit } from '@angular/core';
import {Guest} from '../shared/guest.model';
import {GuestService} from '../shared/guest.service';
import {Router} from '@angular/router';
import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'app-guest-list',
  templateUrl: './guest-list.component.html',
  styleUrls: ['./guest-list.component.css']
})

export class GuestListComponent implements OnInit {
  guests: Guest[];
  guestToDelete: Guest;
  constructor(private guestService: GuestService,
              private router: Router) {
  }

  ngOnInit() {
    // Ask for a bunch of code to execute
    this.guestService.get()
    // Executing and explaning when done let me know
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
    console.log('delete Clicked');
    this.guestToDelete = guest;
    $event.stopPropagation();
  }

  deleteAborted($event) {
    this.guestToDelete = null;
    $event.stopPropagation();
  }

  deleteConfirmed($event) {
    this.guestService.delete(this.guestToDelete.id)
      .switchMap(guest => this.guestService.get())
      .subscribe(
        guests => {
          this.guests = guests;
        }
      );
    $event.stopPropagation();
  }

  createCustomer() {
    this.router
      .navigateByUrl('/guests/create');
  }

  updateGuest(id: number, guest: Guest) {
    this.guestToDelete = guest;
    this.guestService.update(this.guestToDelete.id, this.guestToDelete)
    .switchMap(guest => this.guestService.get())
    .subscribe(
      guests => {
        this.guests = guests;
      }
    );
  }


}
