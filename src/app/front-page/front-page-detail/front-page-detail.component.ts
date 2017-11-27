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
    this.rooms = [{src:"https://image.slidesharecdn.com/accommodationpresentationontypesofroom1-140222114118-phpapp01/95/typesofrooms-in-hotelashish-jumadeihm-ahmedabad-3-638.jpg?cb=1393069370",
    routerLink:"/singleRooms/"}, 
    {src:"http://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/images/amexpub/0043/3510/201406-w-top-rated-hotel-beds-in-america-distrikt-hotel.jpg?itok=6J8ig1RL",
    routerLink:"/doubleRooms/"}, {src:"https://ritzcarlton-h.assetsadobe.com/is/image/content/dam/the-ritz-carlton/hotels/usa-and-canada/washington-dc/washington-d-c-/guest-rooms/The%20Ritz-Carlton%20DC%201BDR%20Suite%20Bedroom.png?$XlargeViewport100pct$",
    routerLink:"/suites/"
    }]
  }

  registerGuests() {
    this.router
    .navigateByUrl('/guests/create');
  }


}
