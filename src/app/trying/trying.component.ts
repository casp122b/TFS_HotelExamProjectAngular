import { TokenInterceptor } from './../login/token.interceptor';
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
  username = '';
  errormessage = '';

  constructor(private adminService: AdminService,
    private tokenInterceptor: TokenInterceptor) {
    this.username = this.tokenInterceptor.getToken();
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
