import { Component, OnInit } from '@angular/core';
import { AdminService } from '../shared/admin.service';
import { Admin } from '../shared/admin.model';
import { Router } from '@angular/router';
import { UserService } from '../../users/shared/user.service';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {
  admins: Admin[];
  adminToDelete: Admin;
  constructor(private adminService: AdminService,
    private userService: UserService,
    private router: Router) {
  }
// used to read a list of the admins
  ngOnInit() {
    this.adminService.get()
      .subscribe(
      admins => {
        this.admins = admins;
      }
      );
  }
  //send you to the clicked admins detail page
  details(admin: Admin) {
    this.router
      .navigateByUrl('/admin/' + admin.id);
  }
//sets adminToDelete = admin and run an event
  delete(admin: Admin, $event) {
    this.adminToDelete = admin;
    $event.stopPropagation();
  }
//Aborts deleting by setting the adminToDelete = null
  deleteAborted($event) {
    this.adminToDelete = null;
    $event.stopPropagation();
  }
//deletes the admins data and his admin user login
  deleteConfirmed($event) {
    
    this.adminService.delete(this.adminToDelete.id)
    .switchMap(admin => this.adminService.get())
      .subscribe( admins => {
        this.admins = admins;
        this.userService.delete(this.adminToDelete.userId)
      .subscribe(user => this.adminToDelete.userId = user.id);
      });
    $event.stopPropagation();
  }
}
