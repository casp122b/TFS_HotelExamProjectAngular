import { Component, OnInit } from '@angular/core';
import {DoubleRoom} from '../shared/double-room.model';
import {DoubleRoomService} from '../shared/double-room.service';
import {Router} from '@angular/router';
import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'app-double-room-list',
  templateUrl: './double-room-list.component.html',
  styleUrls: ['./double-room-list.component.css']
})

export class DoubleRoomListComponent implements OnInit {
  doubleRooms: DoubleRoom[];
  doubleRoomToDelete: DoubleRoom;
  constructor(private doubleRoomService: DoubleRoomService,
              private router: Router) {
  }

  ngOnInit() {
    // Ask for a bunch of code to execute
    this.doubleRoomService.get()
    // Executing and explaning when done let me know
      .subscribe(
        doubleRooms => {
          this.doubleRooms = doubleRooms;
        }
      );
  }

  details(doubleRoom: DoubleRoom) {
    this.router
      .navigateByUrl('/doubleRoom/' + doubleRoom.id);
  }

  delete(doubleRoom: DoubleRoom, $event) {
    console.log('delete Clicked');
    this.doubleRoomToDelete = doubleRoom;
    $event.stopPropagation();
  }

  deleteAborted($event) {
    this.doubleRoomToDelete = null;
    $event.stopPropagation();
  }

  deleteConfirmed($event) {
    this.doubleRoomService.delete(this.doubleRoomToDelete.id)
      .switchMap(doubleRoom => this.doubleRoomService.get())
      .subscribe(
        doubleRooms => {
          this.doubleRooms = doubleRooms;
        }
      );
    $event.stopPropagation();
  }

  createCustomer() {
    this.router
      .navigateByUrl('/doubleRoom/create');
  }


}
