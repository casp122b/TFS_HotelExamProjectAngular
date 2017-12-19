import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { DoubleRoom } from '../shared/double-room.model';
import { DoubleRoomService } from '../shared/double-room.service';

@Component({
  selector: 'app-double-room-detail',
  templateUrl: './double-room-detail.component.html',
  styleUrls: ['./double-room-detail.component.css']
})
export class DoubleRoomDetailComponent implements OnInit {

  doubleRoomId: number;
  newDoubleRoomGroup: FormGroup;
  constructor(private doubleRoomService: DoubleRoomService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute) {
    this.newDoubleRoomGroup = this.fb.group({
      price: '',
      available: '',
      name: ''
    });
  }
  //The params of the route is taken and used to find the corresponding doubleRoom. doubleRoom.id is grabbed,and put into local variables for later use.
  ngOnInit() {
    this.route.paramMap
      .switchMap(params =>
        this.doubleRoomService.getById(+params.get('id'))
      ).subscribe(doubleRoom => this.doubleRoomId = doubleRoom.id);
  }
//Edits the choosen doubleRooms properties values with FormGroup and then runs the doubleRoomService.update to update the currentDoubleRoom with the updatedDoubleRoom and then route it back to our front
  editDoubleRoom() {
    const currentDoubleRoom = this.doubleRoomId;
    const newValues = this.newDoubleRoomGroup.value;
    const updatedDoubleRoom: DoubleRoom = {
      id: currentDoubleRoom,
      price: newValues.price,
      available: newValues.available,
      name: newValues.name,

    };
    this.doubleRoomService.update(currentDoubleRoom, updatedDoubleRoom)
      .subscribe(doubleRoom => {
        this.newDoubleRoomGroup.reset();
        this.router.navigateByUrl("/front")
      });
  }
}
