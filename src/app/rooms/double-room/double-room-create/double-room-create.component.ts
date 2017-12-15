import { Component, OnInit } from '@angular/core';
import {DoubleRoom} from '../shared/double-room.model';
import {FormBuilder, FormGroup} from '@angular/forms';
import {DoubleRoomService} from '../shared/double-room.service';
import {AuthenticationService} from '../../../login/authentication.service';
import {Router} from '@angular/router';
import {Authentication} from '../../../login/authentication.model';

@Component({
  selector: 'app-double-room-create',
  templateUrl: './double-room-create.component.html',
  styleUrls: ['./double-room-create.component.css']
})
export class DoubleRoomCreateComponent implements OnInit {

  doubleRoomGroup: FormGroup;
  authId: number;
  constructor(private doubleRoomService: DoubleRoomService,
              private authenticationService: AuthenticationService,
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

  createDoubleRoom() {
    const values = this.doubleRoomGroup.value;

    const authentication: Authentication = {
      username: values.username,
      password: values.password
    };
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
