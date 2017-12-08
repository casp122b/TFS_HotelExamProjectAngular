import { Component, OnInit } from '@angular/core';
import { Admin } from '../adminstrators/shared/admin.model';
import { AdminService } from '../adminstrators/shared/admin.service';

@Component({
  selector: 'app-trying',
  templateUrl: './trying.component.html',
  styleUrls: ['./trying.component.css']
})
export class TryingComponent implements OnInit {

  admins: Admin[] = [];
  username: string;
  errormessage: string = '';

  constructor(private adminService: AdminService) {
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.username = currentUser && currentUser.username;
  }

  ngOnInit() {
    this.adminService.get()
    .subscribe(
      items => {
        this.admins = items;
      },
      error => {
        this.errormessage = error.valueOf();
      });
  }

}
