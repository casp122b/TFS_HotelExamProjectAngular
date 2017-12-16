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

  ngOnInit() {
    this.route.paramMap
      .switchMap(params =>
        this.adminService.getById(+params.get('id'))
      ).subscribe(admin => {
        this.adminId = admin.id;
        this.userId = admin.userId;
      });
  }

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
      password: newValues.password
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
