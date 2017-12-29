import { Component, OnInit } from '@angular/core';
import { SingleRoomService } from '../shared/single-room.service';
import { SingleRoom } from '../shared/single-room.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { BookingService } from '../../../bookings/booking.service';
import { Booking } from '../../../bookings/booking.model';
import { GuestService } from '../../../guests/shared/guest.service';
import { Guest } from '../../../guests/shared/guest.model';
import { forEach } from '@angular/router/src/utils/collection';

const now = new Date();

@Component({
  selector: 'app-single-room-detail',
  templateUrl: './single-room-detail.component.html',
  styleUrls: ['./single-room-detail.component.css']
})
export class SingleRoomDetailComponent implements OnInit {

  guestId: number = JSON.parse(localStorage.getItem('guestId'));
  guests: Guest[];
  guest: Guest;
  userId: number = JSON.parse(localStorage.getItem('userId'));
  singleRoomId: number;
  newSingleRoomGroup: FormGroup;
  createBookingGroup: FormGroup;
  constructor(private singleRoomService: SingleRoomService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private bookingService: BookingService,
    private guestService: GuestService) {
    this.newSingleRoomGroup = this.fb.group({
      price: '',
      available: '',
      name: ''
    });
    this.createBookingGroup = this.fb.group({
      checkIn: null,
      checkOut: null
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

  model: NgbDateStruct;
  model2: NgbDateStruct;

  date: { year: number, month: number };

  createBooking() {
    const thisSingleRoomId = this.singleRoomId;
    const bookingValues = this.createBookingGroup.value;

    const setYear = this.model.year;
    const setMonth = this.model.month;
    const setDay = this.model.day;
    const mod1 = new Date(setYear,setMonth,setDay);
    const setYear2 = this.model2.year;
    const setMonth2 = this.model2.month;
    const setDay2 = this.model2.day;
    const mod2 = new Date(setYear2,setMonth2,setDay2);
    //const testMod = JSON.parse(this.model.year + '-' + this.model.month + '-' + this.model.day);
    //const anotherTest = new Date(testMod);
    //console.log(anotherTest);
    //console.log(this.model.year + '-' + this.model.month + '-' + this.model.day)
    const newBooking: Booking = {
      checkIn: mod1,
      checkOut: mod2,
      guestId: this.guestId,
      singleRoomId: thisSingleRoomId
    };
    this.bookingService.create(newBooking)
      .subscribe(booking => {
        this.router.navigateByUrl('/front');
      });
  }
}
