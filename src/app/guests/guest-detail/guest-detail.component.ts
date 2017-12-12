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
  newGuestGroup: FormGroup;
  constructor(private guestService: GuestService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute) {
    this.newGuestGroup = this.fb.group({
      firstName: '',
      lastName: '',
      address: '',
    });
  }

  ngOnInit() {
    this.route.paramMap
      .switchMap(params =>
        this.guestService.getById(+params.get('id'))
      ).subscribe(guest => this.guestId = guest.id);
  }

  editGuest() {
    const currentGuest = this.guestId;
    const newValues = this.newGuestGroup.value;
    const updatedGuest: Guest = {
      id: currentGuest,
      firstName: newValues.firstName,
      lastName: newValues.lastName,
      address: newValues.address
    };
    this.guestService.update(currentGuest, updatedGuest)
      .subscribe(guest => {
        this.newGuestGroup.reset();
        this.router.navigateByUrl("/guests/page")
      });
  }
}
