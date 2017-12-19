import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AdminCreateComponent } from './adminstrators/admin-create/admin-create.component';
import { AdminDetailComponent } from './adminstrators/admin-detail/admin-detail.component';
import { AdminListComponent } from './adminstrators/admin-list/admin-list.component';
import { AdminService } from './adminstrators/shared/admin.service';
import { AppComponent } from './app.component';
import { FrontPageDetailComponent } from './front-page/front-page-detail/front-page-detail.component';
import { AuthGuard } from './guard/auth.guard';
<<<<<<< HEAD
import { GuestModule } from './guests/shared/guest.module';
=======
import { GuestCreateComponent } from './guests/guest-create/guest-create.component';
import { GuestDetailComponent } from './guests/guest-detail/guest-detail.component';
import { GuestListComponent } from './guests/guest-list/guest-list.component';
import { GuestPageComponent } from './guests/guest-page/guest-page/guest-page.component';
import { GuestService } from './guests/shared/guest.service';
>>>>>>> refs/remotes/origin/master
import { AuthenticationService } from './login/authentication.service';
import { JwtInterceptor } from './login/jwt.interceptor';
import { LoginComponent } from './login/login.component';
import { TokenInterceptor } from './login/token.interceptor';
import { NavBarComponent } from './navigation/nav-bar/nav-bar.component';
import { DoubleRoomCreateComponent } from './rooms/double-room/double-room-create/double-room-create.component';
import { DoubleRoomDetailComponent } from './rooms/double-room/double-room-detail/double-room-detail.component';
import { DoubleRoomListComponent } from './rooms/double-room/double-room-list/double-room-list.component';
import { DoubleRoomService } from './rooms/double-room/shared/double-room.service';
import { SingleRoomService } from './rooms/single-room/shared/single-room.service';
import { SingleRoomCreateComponent } from './rooms/single-room/single-room-create/single-room-create.component';
import { SingleRoomDetailComponent } from './rooms/single-room/single-room-detail/single-room-detail.component';
import { SingleRoomListComponent } from './rooms/single-room/single-room-list/single-room-list.component';
<<<<<<< HEAD
import { SuiteModule } from './rooms/suites/shared/suite.module';
=======
import { SuiteService } from './rooms/suites/shared/suite.service';
import { SuiteCreateComponent } from './rooms/suites/suite-create/suite-create.component';
import { SuiteDetailComponent } from './rooms/suites/suite-detail/suite-detail.component';
import { SuiteListComponent } from './rooms/suites/suite-list/suite-list.component';
>>>>>>> refs/remotes/origin/master
import { UnAuthorizedComponent } from './unauthorized/unauthorized/unauthorized.component';
import { UserService } from './users/shared/user.service';

//defines the routes for all components used in the frontend.
const appRoutes: Routes = [
  {
    path: 'admins/create',
    component: AdminCreateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin/:id',
    component: AdminDetailComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admins',
    component: AdminListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'guests/page',
    component: GuestPageComponent,
    data: { title: 'Guest page' }
  },
  {
    path: 'guest/:id',
    component: GuestDetailComponent
  },
  {
    path: 'guests',
    component: GuestListComponent,
    canActivate: [AuthGuard],
    data: { title: 'Guest List' }
  },
  {
    path: 'guests/create',
    component: GuestCreateComponent
  },
  {
    path: 'doubleRoom/:id',
    component: DoubleRoomDetailComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'doubleRooms/create',
    component: DoubleRoomCreateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'doubleRooms',
    component: DoubleRoomListComponent,
    data: { title: 'Room List' }
  },
  {
    path: 'singleRoom/:id',
    component: SingleRoomDetailComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'singleRooms/create',
    component: SingleRoomCreateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'singleRooms',
    component: SingleRoomListComponent,
    data: { title: 'Room List' }
  },
  {
    path: 'suite/:id',
    component: SuiteDetailComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'suites/create',
    component: SuiteCreateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'suites',
    component: SuiteListComponent,
    data: { title: 'Room List' }
  },
  {
    path: 'front',
    component: FrontPageDetailComponent
  },
  {
    path: '',
    redirectTo: '/front',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'unauthorized',
    component: UnAuthorizedComponent
  },

];
//Lists all the components used by the root module.
@NgModule({
  declarations: [
    AppComponent,
    SingleRoomCreateComponent,
    SingleRoomDetailComponent,
    SingleRoomListComponent,
    DoubleRoomDetailComponent,
    DoubleRoomCreateComponent,
    DoubleRoomListComponent,
    SuiteCreateComponent,
    SuiteDetailComponent,
    SuiteListComponent,
    AdminCreateComponent,
    AdminDetailComponent,
    AdminListComponent,
    GuestCreateComponent,
    GuestListComponent,
    GuestDetailComponent,
    GuestPageComponent,
    FrontPageDetailComponent,
    LoginComponent,
    NavBarComponent,
    UnAuthorizedComponent,

  ],
  //All imports used by the root module.
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
<<<<<<< HEAD
    RouterModule,
    NavBarModule,
    GuestModule,
    AdminModule,
    SuiteModule,
    ReactiveFormsModule,
    FormsModule,
    appRoutes,
=======
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
>>>>>>> refs/remotes/origin/master
    NgbModule.forRoot()
  ],
  //List of services from all the components in the frontend.
  providers: [
    AuthGuard,
    DoubleRoomService,
    SingleRoomService,
<<<<<<< HEAD
=======
    SuiteService,
    GuestService,
    AdminService,
>>>>>>> refs/remotes/origin/master
    AuthenticationService,
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }