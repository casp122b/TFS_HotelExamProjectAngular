import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Admin } from '../shared/admin.model';
import { AdminService } from '../shared/admin.service';
=======
import { FormGroup, FormBuilder } from '@angular/forms';
import { AdminService } from '../shared/admin.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Admin } from '../shared/admin.model';
>>>>>>> refs/remotes/origin/Virker

@Component({
  selector: 'app-admin-detail',
  templateUrl: './admin-detail.component.html',
  styleUrls: ['./admin-detail.component.css']
})
export class AdminDetailComponent implements OnInit {
<<<<<<< HEAD

  adminId: number;
  newAdminGroup: FormGroup;
  constructor(private adminService: AdminService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute) {
    this.newAdminGroup = this.fb.group({
      firstName: '',
      lastName: '',
      address: '',
    });
  }

  ngOnInit() {
    this.route.paramMap
      .switchMap(params =>
        this.adminService.getById(+params.get('id'))
      ).subscribe(admin => this.adminId = admin.id);
  }

  editAdmin() {
    const currentAdmin = this.adminId;
    const newValues = this.newAdminGroup.value;
    const updatedadmin: Admin = {
      id: currentAdmin,
      firstName: newValues.firstName,
      lastName: newValues.lastName,
      address: newValues.address
    };
    this.adminService.update(currentAdmin, updatedadmin)
=======
  
    adminId: number;
    newAdminGroup: FormGroup;
    constructor(private adminService: AdminService,
                private fb: FormBuilder,
                private router: Router,
                private route: ActivatedRoute) {
        this.newAdminGroup = this.fb.group({
          firstName: '',
          lastName: '',
          address: '',
          userId: ''
        })
     }
  
     ngOnInit() {
      this.route.paramMap
              .switchMap(params =>
                this.adminService.getById(+params.get('id'))
             ).subscribe(adminId => this.adminId = adminId.id);
    }
  
    editAdmin() {
      const currentAdmin = this.adminId;
      const newValues = this.newAdminGroup.value;
      const updatedAdmin: Admin = {
        id: currentAdmin,
        firstName: newValues.firstName,
        lastName: newValues.lastName,
        address: newValues.address,
        userId: newValues.userId
      };
      this.adminService.update(currentAdmin, updatedAdmin)
>>>>>>> refs/remotes/origin/Virker
      .subscribe(admin => {
        this.newAdminGroup.reset();
        this.router.navigateByUrl("/front")
      });
<<<<<<< HEAD
  }
=======
    }
>>>>>>> refs/remotes/origin/Virker
}
