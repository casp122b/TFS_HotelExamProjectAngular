import { Component, OnInit } from '@angular/core';
import { SingleRoomService } from '../shared/single-room.service';
import { SingleRoom } from '../shared/single-room.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-room-detail',
  templateUrl: './single-room-detail.component.html',
  styleUrls: ['./single-room-detail.component.css']
})
export class SingleRoomDetailComponent implements OnInit {

  singleRoomId: number;
  newSingleRoomGroup: FormGroup;
  constructor(private singleRoomService: SingleRoomService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute) {
    this.newSingleRoomGroup = this.fb.group({
      price: '',
      available: '',
      name: ''
    });
  }
  //The params of the route is taken and used to find the corresponding singleRoom. singleRoom.id is grabbed,and put into local variables for later use.
  ngOnInit() {
    this.route.paramMap
      .switchMap(params =>
        this.singleRoomService.getById(+params.get('id'))
      ).subscribe(singleRoom => this.singleRoomId = singleRoom.id);
  }
  //Edits the choosen singleRoom's properties values with FormGroup and then runs the singleRoomService.update to update the currentSingleRoom with the updatedSingleRoom and then route it back to our front
  editSingleRoom() {
    const currentSingleRoom = this.singleRoomId;
    const newValues = this.newSingleRoomGroup.value;
    const updatedSingleRoom: SingleRoom = {
      id: currentSingleRoom,
      price: newValues.price,
      available: newValues.available,
      name: newValues.name,
    };
    this.singleRoomService.update(currentSingleRoom, updatedSingleRoom)
      .subscribe(singleRoom => {
        this.newSingleRoomGroup.reset();
        this.router.navigateByUrl("/front");
      });
  }
}
