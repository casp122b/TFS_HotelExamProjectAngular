import 'rxjs/add/operator/switchMap';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SingleRoom } from '../shared/single-room.model';
import { SingleRoomService } from '../shared/single-room.service';

@Component({
  selector: 'app-single-room-list',
  templateUrl: './single-room-list.component.html',
  styleUrls: ['./single-room-list.component.css']
})

export class SingleRoomListComponent implements OnInit {
  singleRooms: SingleRoom[];
  singleRoomToDelete: SingleRoom;
  role: string = localStorage.getItem('role');
  constructor(private singleRoomService: SingleRoomService,
    private router: Router) {
  }
  // used to get a list of the singleRooms
  ngOnInit() {
    this.singleRoomService.get()
      .subscribe(
      singleRooms => {
        this.singleRooms = singleRooms;
      }
      );
  }
  //send you to the clicked singleRooms detail page
  details(singleRoom: SingleRoom) {
    this.router
      .navigateByUrl('/singleRoom/' + singleRoom.id);
  }
  //sets singleRoomToDelete = singleRoom and run an event
  delete(singleRoom: SingleRoom, $event) {
    this.singleRoomToDelete = singleRoom;
    $event.stopPropagation();
  }
  //Aborts deleting by setting the singleRoomToDelete = null
  deleteAborted($event) {
    this.singleRoomToDelete = null;
    $event.stopPropagation();
  }
  //deletes the singleRoom
  deleteConfirmed($event) {
    this.singleRoomService.delete(this.singleRoomToDelete.id)
      .switchMap(singleRoom => this.singleRoomService.get())
      .subscribe(
      singleRooms => {
        this.singleRooms = singleRooms;
      }
      );
    $event.stopPropagation();
  }
}
