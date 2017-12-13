import { Component, OnInit } from '@angular/core';
import { AdminService } from '../shared/admin.service';
import { Admin } from '../shared/admin.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {
  admins: Admin[];
  adminToDelete: Admin;
  constructor(private adminService: AdminService,
    private router: Router) {
  }

  ngOnInit() {
    this.adminService.get()
      .subscribe(
      admins => {
        this.admins = admins;
      }
      );
  }

  details(admin: Admin) {
    this.router
      .navigateByUrl('/admins/' + admin.id);
  }

  delete(admin: Admin, $event) {
    this.adminToDelete = admin;
    $event.stopPropagation();
  }

  deleteAborted($event) {
    this.adminToDelete = null;
    $event.stopPropagation();
  }

  deleteConfirmed($event) {
    this.adminService.delete(this.adminToDelete.id)
      .switchMap(admin => this.adminService.get())
      .subscribe(
        admins => {
        this.admins = admins;
      }
      );
    $event.stopPropagation();
  }
}
