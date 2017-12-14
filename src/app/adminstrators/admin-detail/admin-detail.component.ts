import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Admin } from '../shared/admin.model';
import { AdminService } from '../shared/admin.service';

@Component({
  selector: 'app-admin-detail',
  templateUrl: './admin-detail.component.html',
  styleUrls: ['./admin-detail.component.css']
})
export class AdminDetailComponent implements OnInit {

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
      .subscribe(admin => {
        this.newAdminGroup.reset();
        this.router.navigateByUrl("/front")
      });
  }
}
