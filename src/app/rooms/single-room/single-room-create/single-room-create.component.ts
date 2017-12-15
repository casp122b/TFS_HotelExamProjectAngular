import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {SingleRoomService} from '../shared/single-room.service';
import {SingleRoom} from '../shared/single-room.model';
import { Authentication } from '../../../login/authentication.model';
import { AuthenticationService } from '../../../login/authentication.service';


@Component({
  selector: 'app-single-room-create',
  templateUrl: './single-room-create.component.html',
  styleUrls: ['./single-room-create.component.css']
})
export class SingleRoomCreateComponent implements OnInit {
  singleRoomGroup: FormGroup;
  authId: number;
  constructor(private singleRoomService: SingleRoomService,
              private authenticationService: AuthenticationService,
              private fb: FormBuilder,
              private router: Router) {
    this.singleRoomGroup = this.fb.group({
      price: '',
    available: ''
    });
  }

  ngOnInit() {
  }
  createSingleRoom() {
    const values = this.singleRoomGroup.value;

    const authentication: Authentication = {
      username: values.username,
      password: values.password
    };
  const singleRoom: SingleRoom = {
    price: values.price,
  available: values.available

  };

  this.singleRoomService.create(singleRoom)
.subscribe(singleRoom => {
  this.router.navigateByUrl('/front');
});
}
}


