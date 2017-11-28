import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-front-page-detail',
  templateUrl: './front-page-detail.component.html',
  styleUrls: ['./front-page-detail.component.css']
})
export class FrontPageDetailComponent implements OnInit {

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

  registerGuests() {
    this.router
    .navigateByUrl('/guest/create');
  }


}
