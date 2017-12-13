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
    this.guestService.get()
      .subscribe(
        guests => {
          this.guests = guests;
        }
      );
  }

  details(guest: Guest) {
    this.router
      .navigateByUrl('/guests/' + guest.id);
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
