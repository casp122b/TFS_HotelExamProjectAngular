import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { GuestService } from '../shared/guest.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Guest } from '../shared/guest.model';

@Component({
  selector: 'app-guest-detail',
  templateUrl: './guest-detail.component.html',
  styleUrls: ['./guest-detail.component.css']
})
export class GuestDetailComponent implements OnInit {

  guestId: number;
  guestGroup: FormGroup;
  constructor(private guestService: GuestService,
              private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute) {
      this.guestGroup = this.fb.group({
        firstName: '',
        lastName: '',
        address: ''
      })
   }

   ngOnInit() {
    this.route.paramMap
            .switchMap(params =>
              this.guestService.getById(+params.get('id'))
           ).subscribe(guestId => this.guestId = guestId.id);
  }

  editGuest() {
    const currentGuest = this.guestId;
    console.log(currentGuest);
    const values = this.guestGroup.value;
    const guest: Guest = {
      id: currentGuest,
      firstName: values.firstName,
      lastName: values.lastName,
      address: values.address
    };
    this.guestService.update(currentGuest, guest)
    .subscribe(guest => {
      this.guestGroup.reset();
      this.router.navigateByUrl("/front")
    });

  }
}
