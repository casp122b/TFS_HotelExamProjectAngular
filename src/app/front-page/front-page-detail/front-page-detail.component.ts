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
    this.rooms = [{src:"../../../assets/images/typesofrooms-in-hotelashish-jumadeihm-ahmedabad-3-638.jpg",
    routerLink:"/singleRooms/"}, 
    {src:"../../../assets/images/201406-w-top-rated-hotel-beds-in-america-distrikt-hotel.jpg",
    routerLink:"/doubleRooms/"}, {src:"../../../assets/images/The Ritz-Carlton-DC-1BDR-Suite-Bedroom.jpg",
    routerLink:"/suites/"
    }]
  }

  registerGuests() {
    this.router
    .navigateByUrl('/guest/create');
  }


}
