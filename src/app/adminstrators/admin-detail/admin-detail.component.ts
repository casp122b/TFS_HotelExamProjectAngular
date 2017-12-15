import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AdminService } from '../shared/admin.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Admin } from '../shared/admin.model';

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
      .subscribe(admin => {
        this.newAdminGroup.reset();
        this.router.navigateByUrl("/front")
      });
    }
}
