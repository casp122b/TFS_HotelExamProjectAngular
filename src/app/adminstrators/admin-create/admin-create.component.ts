import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { Authentication } from '../../login/authentication.model';
import { AuthenticationService } from '../../login/authentication.service';
import { Admin } from '../shared/admin.model';
import { AdminService } from '../shared/admin.service';

@Component({
  selector: 'app-admin-create',
  templateUrl: './admin-create.component.html',
  styleUrls: ['./admin-create.component.css']
})
export class AdminCreateComponent implements OnInit {

  adminGroup: FormGroup;
  authId: number;
  constructor(private adminService: AdminService,
    private authenticationService: AuthenticationService,
    private fb: FormBuilder,
    private router: Router) {
    this.adminGroup = this.fb.group({
      firstName: '',
      lastName: '',
      address: '',
      username: '',
      password: ''
    })
  }

  ngOnInit() {
  }

  createAdmin() {
    const values = this.adminGroup.value;

    const authentication: Authentication = {
      username: values.username,
      password: values.password,
      role: 'Administrator'
    };
    this.authenticationService.createUser(authentication)
      .subscribe(done => {
        authentication.id = done.id;
        const admin: Admin = {
          firstName: values.firstName,
          lastName: values.lastName,
          address: values.address,
          userId: done.id
        };
        this.adminService.create(admin)
          .subscribe(admin => {
            this.router.navigateByUrl('/front');
          });
      });
  }
}
