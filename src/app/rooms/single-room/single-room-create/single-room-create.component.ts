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
//Creates a Formgroup we call suiteGroup
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
//Creates a singleRoom by using FormGroup and then runs the singleRoomService.create to create a new singleRoom with the infomation that are in our singleRoomGroup and then route it back to our front
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


