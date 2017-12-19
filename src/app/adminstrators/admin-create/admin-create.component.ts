import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from '../../users/shared/user.model';
import { Admin } from '../shared/admin.model';
import { AdminService } from '../shared/admin.service';
import { UserService } from '../../users/shared/user.service';

@Component({
  selector: 'app-admin-create',
  templateUrl: './admin-create.component.html',
  styleUrls: ['./admin-create.component.css']
})
export class AdminCreateComponent implements OnInit {

  adminGroup: FormGroup;
  constructor(private adminService: AdminService,
              private userService: UserService,
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
  //username and password is defined by the user input from the formgroup.
  createAdmin() {
    const values = this.adminGroup.value;

    const user: User = {
      username: values.username,
      password: values.password,
      role: 'Administrator'
    };
    this.userService.createUser(user)
      .subscribe(done => {
        user.id = done.id;
        //a guest with the input from the user is defined
        const admin: Admin = {
          firstName: values.firstName,
          lastName: values.lastName,
          address: values.address,
          userId: done.id
        };
        //By the adminService and through the entire backend, the guest is created. The subscribtion routes the guest to /front

        this.adminService.create(admin)
          .subscribe(admin => {
            this.router.navigateByUrl('/front');
          });
      });
  }
}
