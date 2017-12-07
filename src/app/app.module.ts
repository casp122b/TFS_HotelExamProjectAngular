import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { SuiteCreateComponent } from './rooms/suites/suite-create/suite-create.component';
import { SuiteDetailComponent } from './rooms/suites/suite-detail/suite-detail.component';
import { SuiteListComponent } from './rooms/suites/suite-list/suite-list.component';
import { GuestListComponent } from './guests/guest-list/guest-list.component';
import { GuestDetailComponent } from './guests/guest-detail/guest-detail.component';
import { GuestCreateComponent } from './guests/guest-create/guest-create.component';
import { AdminCreateComponent } from './adminstrators/admin-create/admin-create.component';
import { AdminDetailComponent } from './adminstrators/admin-detail/admin-detail.component';
import { AdminListComponent } from './adminstrators/admin-list/admin-list.component';
import { SingleRoomCreateComponent } from './rooms/single-room/single-room-create/single-room-create.component';
import { SingleRoomDetailComponent } from './rooms/single-room/single-room-detail/single-room-detail.component';
import { SingleRoomListComponent } from './rooms/single-room/single-room-list/single-room-list.component';
import { DoubleRoomDetailComponent } from './rooms/double-room/double-room-detail/double-room-detail.component';
import { DoubleRoomCreateComponent } from './rooms/double-room/double-room-create/double-room-create.component';
import { DoubleRoomListComponent } from './rooms/double-room/double-room-list/double-room-list.component';
import { RouterModule, Routes } from '@angular/router';
import {DoubleRoomService} from './rooms/double-room/shared/double-room.service';
import {SingleRoomService} from './rooms/single-room/shared/single-room.service';
import {SuiteService} from './rooms/suites/shared/suite.service';
import {GuestService} from './guests/shared/guest.service';
import {HttpClientModule} from '@angular/common/http';
import { FrontPageDetailComponent } from './front-page/front-page-detail/front-page-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GuestPageComponent } from './guests/guest-page/guest-page/guest-page.component';

const appRoutes: Routes = [
  {
    path: 'signin',
    component: GuestPageComponent
  },
  {
    path: 'guest/:id',
    component: GuestDetailComponent
  },
  {
    path: 'guests/create',
    component: GuestCreateComponent
  },
  {
    path: 'guests',
    component: GuestListComponent,
    data: { title: 'Room List' }
  },
  { path: 'doubleRooms/:id',
    component: DoubleRoomDetailComponent },
  { path: 'doubleRoom/create',
    component: DoubleRoomCreateComponent },
  {
    path: 'doubleRooms',
    component: DoubleRoomListComponent,
    data: { title: 'Room List' }
  },
  { path: 'singleRooms/:id',
    component: SingleRoomDetailComponent },
  { path: 'singleRoom/create',
    component: SingleRoomCreateComponent },
  {
    path: 'singleRooms',
    component: SingleRoomListComponent,
    data: { title: 'Room List' }
  },
  { path: 'suites/:id',
    component: SuiteDetailComponent },
  { path: 'suite/create',
    component: SuiteCreateComponent },
  {
    path: 'suites',
    component: SuiteListComponent,
    data: { title: 'Room List' }
  },
  {
    path: 'guests/page',
    component: GuestPageComponent,
    data: { title: 'Guest page' }
  },
  {
  path: 'guest/detail',
  component: GuestDetailComponent,
  data: { title: 'Guest Details' }
},
  { path: 'front',
    component: FrontPageDetailComponent },
  { path: '',
    redirectTo: '/front',
    pathMatch: 'full'
  }
];
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
    AdminListComponent,
    SingleRoomCreateComponent,
    SingleRoomDetailComponent,
    SingleRoomListComponent,
    DoubleRoomDetailComponent,
    DoubleRoomCreateComponent,
    DoubleRoomListComponent,
    FrontPageDetailComponent,
    GuestPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot()
  ],
  providers: [
    DoubleRoomService,
    SingleRoomService,
    SuiteService,
    GuestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
