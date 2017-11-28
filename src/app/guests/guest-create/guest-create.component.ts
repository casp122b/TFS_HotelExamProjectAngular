import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Guest } from '../shared/guest.model';
import { GuestService } from '../shared/guest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-guest-create',
  templateUrl: './guest-create.component.html',
  styleUrls: ['./guest-create.component.css']
})
export class GuestCreateComponent implements OnInit {

  guestGroup: FormGroup;
  constructor(private guestService: GuestService,
              private fb: FormBuilder,
              private router: Router) {
      this.guestGroup = this.fb.group({
        firstName: '',
        lastName: '',
        address: ''
      })
   }

  ngOnInit() {
  }

  createGuest() {
    const values = this.guestGroup.value;
    const guest: Guest = {
      firstName: values.firstName,
      lastName: values.lastName,
      address: values.address
    };
    this.guestService.create(guest)
    .subscribe(guest => {
      this.guestGroup.reset();
      this.router.navigateByUrl("/front")
    });

  }
}
