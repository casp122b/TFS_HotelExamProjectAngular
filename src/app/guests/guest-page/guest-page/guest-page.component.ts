import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-guest-page',
  templateUrl: './guest-page.component.html',
  styleUrls: ['./guest-page.component.css']
})
export class GuestPageComponent implements OnInit {
rooms: Object[];
constructor(private router: Router) { }

ngOnInit() {
  this.rooms = [{src:"../../../assets/images/singleRoom.jpg",
    routerLink:"/singleRooms/"},
    {src:"../../../assets/images/doubleRoom.jpg",
      routerLink:"/doubleRooms/"}, {src:"../../../assets/images/suite.jpg",
      routerLink:"/suites/"
    }]
}

}
