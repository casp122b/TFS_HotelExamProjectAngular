import { Component, OnInit } from '@angular/core';
import {SingleRoom} from '../shared/single-room.model';
import {SingleRoomService} from '../shared/single-room.service';
import {Router} from '@angular/router';
import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'app-single-room-list',
  templateUrl: './single-room-list.component.html',
  styleUrls: ['./single-room-list.component.css']
})

export class SingleRoomListComponent implements OnInit {
  singleRoom: SingleRoom[];
  singleRoomToDelete: SingleRoom;
  constructor(private singleRoomService: SingleRoomService,
              private router: Router) {
  }

  ngOnInit() {
    // Ask for a bunch of code to execute
    this.singleRoomService.get()
    // Executing and explaning when done let me know
      .subscribe(
        singleRooms => {
          this.singleRoom = singleRooms;
        }
      );
  }

  details(singleRoom: SingleRoom) {
    this.router
      .navigateByUrl('/singleRoom/' + singleRoom.id);
  }

  delete(singleRoom: SingleRoom, $event) {
    console.log('delete Clicked');
    this.singleRoomToDelete = singleRoom;
    $event.stopPropagation();
  }

  deleteAborted($event) {
    this.singleRoomToDelete = null;
    $event.stopPropagation();
  }

  deleteConfirmed($event) {
    this.singleRoomService.delete(this.singleRoomToDelete.id)
      .switchMap(singleRoom => this.singleRoomService.get())
      .subscribe(
        singleRoom => {
          this.singleRoom = singleRoom;
        }
      );
    $event.stopPropagation();
  }

  createCustomer() {
    this.router
      .navigateByUrl('/singleRoom/create');
  }


}
