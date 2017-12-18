import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { DoubleRoom } from '../shared/double-room.model';
import { DoubleRoomService } from '../shared/double-room.service';

@Component({
  selector: 'app-double-room-create',
  templateUrl: './double-room-create.component.html',
  styleUrls: ['./double-room-create.component.css']
})
export class DoubleRoomCreateComponent implements OnInit {

  doubleRoomGroup: FormGroup;

  constructor(private doubleRoomService: DoubleRoomService,
    private fb: FormBuilder,
    private router: Router) {
    this.doubleRoomGroup = this.fb.group({
      price: '',
      available: '',
      name: ''
    });
  }
  ngOnInit() {
  }
//Method that create a doubleroom with the properties below which it takes from the FormGroup called doubleRoomGroup which is given data inside the html and route you to front
  createDoubleRoom() {
    const values = this.doubleRoomGroup.value;
    const doubleRoom: DoubleRoom = {
      price: values.price,
      available: values.available,
      name: values.name
    };
    this.doubleRoomService.create(doubleRoom)
      .subscribe(doubleRoom => {
        this.router.navigateByUrl('/front');
      });
  }
}
