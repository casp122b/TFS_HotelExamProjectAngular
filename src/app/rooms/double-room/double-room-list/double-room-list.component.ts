import 'rxjs/add/operator/switchMap';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DoubleRoom } from '../shared/double-room.model';
import { DoubleRoomService } from '../shared/double-room.service';

@Component({
  selector: 'app-double-room-list',
  templateUrl: './double-room-list.component.html',
  styleUrls: ['./double-room-list.component.css']
})

export class DoubleRoomListComponent implements OnInit {
  doubleRooms: DoubleRoom[];
  doubleRoomToDelete: DoubleRoom;
  role: string = localStorage.getItem('role');
  constructor(private doubleRoomService: DoubleRoomService,
    private router: Router) {
  }
  // used to get a list of the doubleRooms
  ngOnInit() {
    this.doubleRoomService.get()
      .subscribe(
      doubleRooms => {
        this.doubleRooms = doubleRooms;
      });
  }
  //send you to the clicked doubleRooms details page
  details(doubleRoom: DoubleRoom) {
    this.router
      .navigateByUrl('/doubleRoom/' + doubleRoom.id);
  }
  //sets doubleRoomToDelete = doubleRoom and run an event
  delete(doubleRoom: DoubleRoom, $event) {
    this.doubleRoomToDelete = doubleRoom;
    $event.stopPropagation();
  }
  //Aborts deleting by setting the doubleRoom = null
  deleteAborted($event) {
    this.doubleRoomToDelete = null;
    $event.stopPropagation();
  }
  //deletes the doubleRoom
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
}
