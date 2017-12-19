import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Admin } from '../shared/admin.model';
import { AdminService } from '../shared/admin.service';
import { UserService } from '../../users/shared/user.service';
import { User } from '../../users/shared/user.model';

@Component({
  selector: 'app-admin-detail',
  templateUrl: './admin-detail.component.html',
  styleUrls: ['./admin-detail.component.css']
})
export class AdminDetailComponent implements OnInit {

  adminId: number;
  userId: number;
  newAdminGroup: FormGroup;
  constructor(private adminService: AdminService,
              private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private userService: UserService) {
    this.newAdminGroup = this.fb.group({
      firstName: '',
      lastName: '',
      address: '',
      username: '',
      password: ''
    });
  }
  //The params of the route is taken and used to find the corresponding admin. admin.id and admin.userId is grabbed,
  // and put into local variables for later use.
  ngOnInit() {
    this.route.paramMap
      .switchMap(params =>
        this.adminService.getById(+params.get('id'))
      ).subscribe(admin => {
        this.adminId = admin.id;
        this.userId = admin.userId;
      });
  }
  //Edits the choosen Admin properties values with FormGroup and then runs the adminservice.update to update the currentAdmin with the updatedAdmin
  //Also edits the username and passoword doing the same just with currentUserId and updatedUser instead of admin and then route it back to our fron

  editAdmin() {
    const currentAdmin = this.adminId;
    const currentUserId = this.userId;
    const newValues = this.newAdminGroup.value;
    const updatedAdmin: Admin = {
      id: currentAdmin,
      firstName: newValues.firstName,
      lastName: newValues.lastName,
      address: newValues.address,
      userId: currentUserId
    };
    const updatedUser: User = {
      id: currentUserId,
      username: newValues.username,
      password: newValues.password,
      role: "Administrator"
    }
    this.adminService.update(currentAdmin, updatedAdmin)
      .subscribe(admin => {
        this.userService.update(currentUserId, updatedUser)
          .subscribe(user => {
            this.newAdminGroup.reset();
            this.router.navigateByUrl('/front')
          })
      });
  }
}
