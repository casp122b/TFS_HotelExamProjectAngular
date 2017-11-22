import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SuiteCreateComponent } from './suites/suite-create/suite-create.component';
import { SuiteDetailComponent } from './suites/suite-detail/suite-detail.component';
import { SuiteListComponent } from './suites/suite-list/suite-list.component';
import { GuestListComponent } from './guests/guest-list/guest-list.component';
import { GuestDetailComponent } from './guests/guest-detail/guest-detail.component';
import { GuestCreateComponent } from './guests/guest-create/guest-create.component';
import { AdminCreateComponent } from './adminstrators/admin-create/admin-create.component';
import { AdminDetailComponent } from './adminstrators/admin-detail/admin-detail.component';
import { AdminListComponent } from './adminstrators/admin-list/admin-list.component';


@NgModule({
  declarations: [
    AppComponent,

    SuiteCreateComponent,
    SuiteDetailComponent,
    SuiteListComponent,
    GuestListComponent,
    GuestDetailComponent,
    GuestCreateComponent,
    AdminCreateComponent,
    AdminDetailComponent,
    AdminListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
