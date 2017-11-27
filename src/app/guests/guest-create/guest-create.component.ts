import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {GuestService} from '../shared/guest.service';
import {Guest} from '../shared/guest.model';
import 'rxjs/add/observable/forkJoin';
import {FormBuilder, FormControl, FormGroup, Validators, ValidationErrors} from '@angular/forms';

@Component({
  selector: 'app-guest-create',
  templateUrl: './guest-create.component.html',
  styleUrls: ['./guest-create.component.css']
})

export class GuestCreateComponent implements OnInit {
  guestGroup: FormGroup;
  guestCreatedSuccessfully = false;

  constructor(private router: Router,
              private fb: FormBuilder,
              private guestService: GuestService) {
    this.guestGroup = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      address: ['', [Validators.required, Validators.minLength(2)]],
    });
  }
  ngOnInit() {
  }
  isInvalid(controlName: string) {
    const control = this.guestGroup.controls[controlName];
    return control.invalid && (control.touched || control.dirty);
  }
  isValid(controlName: string) {
    const control = this.guestGroup.controls[controlName];
    return !control.invalid && (control.touched || control.dirty);
  }

  closeAlert() {
    this.guestCreatedSuccessfully = false;
  }

  save() {
    // 1: Create all Addresses on the backend
    // and store the ids returned in a []
    const values = this.guestGroup.value;
  }


}


