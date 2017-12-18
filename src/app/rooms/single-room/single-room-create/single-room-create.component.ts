import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SingleRoom } from '../shared/single-room.model';
import { SingleRoomService } from '../shared/single-room.service';


@Component({
  selector: 'app-single-room-create',
  templateUrl: './single-room-create.component.html',
  styleUrls: ['./single-room-create.component.css']
})
export class SingleRoomCreateComponent implements OnInit {
  singleRoomGroup: FormGroup;
  constructor(private singleRoomService: SingleRoomService,
    private fb: FormBuilder,
    private router: Router) {
    this.singleRoomGroup = this.fb.group({
      price: '',
      available: '',
      name: ''
    });
  }

  ngOnInit() {
  }
  //Method that create a singleRoom with the properties below which it takes from the FormGroup called singleRoomGroup, which is given data inside the html and route you to front
  createSingleRoom() {
    const values = this.singleRoomGroup.value;
    const singleRoom: SingleRoom = {
      price: values.price,
      available: values.available,
      name: values.name
    };

    this.singleRoomService.create(singleRoom)
      .subscribe(singleRoom => {
        this.router.navigateByUrl('/front');
      });
  }
}


