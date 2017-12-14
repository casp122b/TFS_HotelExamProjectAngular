import { JwtInterceptor } from './login/jwt.interceptor';
import { TokenInterceptor } from './login/token.interceptor';
import { AuthenticationService } from './login/authentication.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
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
import { DoubleRoomService } from './rooms/double-room/shared/double-room.service';
import { SingleRoomService } from './rooms/single-room/shared/single-room.service';
import { SuiteService } from './rooms/suites/shared/suite.service';
import { GuestService } from './guests/shared/guest.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FrontPageDetailComponent } from './front-page/front-page-detail/front-page-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GuestPageComponent } from './guests/guest-page/guest-page/guest-page.component';
import { LoginComponent } from './login/login.component';
import { TryingComponent } from './trying/trying.component';
import { AuthGuard } from './guard/auth.guard';
import { HttpModule } from '@angular/http';
import { AdminService } from './adminstrators/shared/admin.service';
import { NavBarComponent } from './navigation/nav-bar/nav-bar.component';
import { UnAuthorizedComponent } from './unauthorized/unauthorized/unauthorized.component';


const appRoutes: Routes = [
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
    path: 'admin/create',
    component: AdminCreateComponent
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
  {
    path: 'doubleRoom/:id',
    component: DoubleRoomDetailComponent
  },
  {
    path: 'doubleRooms/create',
    component: DoubleRoomCreateComponent
  },
  {
    path: 'doubleRooms',
    component: DoubleRoomListComponent,
    data: { title: 'Room List' }
  },
  {
    path: 'singleRoom/:id',
    component: SingleRoomDetailComponent
  },
  {
    path: 'singleRooms/create',
    component: SingleRoomCreateComponent
  },
  {
    path: 'singleRooms',
    component: SingleRoomListComponent,
    data: { title: 'Room List' }
  },
  {
    path: 'suite/:id',
    component: SuiteDetailComponent
  },
  {
    path: 'suites/create',
    component: SuiteCreateComponent
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
    path: 'trying/now',
    component: TryingComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'unauthorized',
    component: UnAuthorizedComponent
  },

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
    GuestPageComponent,
    LoginComponent,
    TryingComponent,
    NavBarComponent,
    UnAuthorizedComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot()
  ],
  providers: [
    AuthGuard,
    DoubleRoomService,
    SingleRoomService,
    SuiteService,
    GuestService,
    AuthenticationService,
    AdminService, {
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
