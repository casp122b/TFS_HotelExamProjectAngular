import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AdminModule } from './adminstrators/shared/admin.module';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routing';
import { FrontPageDetailComponent } from './front-page/front-page-detail/front-page-detail.component';
import { AuthGuard } from './guard/auth.guard';
import { GuestModule } from './guests/shared/guest.module';
import { GuestService } from './guests/shared/guest.service';
import { AuthenticationService } from './login/authentication.service';
import { JwtInterceptor } from './login/jwt.interceptor';
import { LoginComponent } from './login/login.component';
import { TokenInterceptor } from './login/token.interceptor';
import { NavBarModule } from './navigation/nav-bar/nav-bar.module';
import { DoubleRoomCreateComponent } from './rooms/double-room/double-room-create/double-room-create.component';
import { DoubleRoomDetailComponent } from './rooms/double-room/double-room-detail/double-room-detail.component';
import { DoubleRoomListComponent } from './rooms/double-room/double-room-list/double-room-list.component';
import { DoubleRoomService } from './rooms/double-room/shared/double-room.service';
import { SingleRoomService } from './rooms/single-room/shared/single-room.service';
import { SingleRoomCreateComponent } from './rooms/single-room/single-room-create/single-room-create.component';
import { SingleRoomDetailComponent } from './rooms/single-room/single-room-detail/single-room-detail.component';
import { SingleRoomListComponent } from './rooms/single-room/single-room-list/single-room-list.component';
import { SuiteModule } from './rooms/suites/shared/suite.module';
import { SuiteService } from './rooms/suites/shared/suite.service';
import { UnAuthorizedComponent } from './unauthorized/unauthorized/unauthorized.component';

<<<<<<< HEAD
=======

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
    component: SingleRoomDetailComponent
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
    component: SuiteDetailComponent
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
    path: 'trying/now',
    component: TryingComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'unauthorized',
    component: UnAuthorizedComponent
  },

];
>>>>>>> refs/remotes/origin/Virker
@NgModule({
  declarations: [
    AppComponent,
    SingleRoomCreateComponent,
    SingleRoomDetailComponent,
    SingleRoomListComponent,
    DoubleRoomDetailComponent,
    DoubleRoomCreateComponent,
    DoubleRoomListComponent,
    FrontPageDetailComponent,
    LoginComponent,
<<<<<<< HEAD
    UnAuthorizedComponent
=======
    TryingComponent,
    NavBarComponent,
    UnAuthorizedComponent,

>>>>>>> refs/remotes/origin/Virker
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    RouterModule,
    NavBarModule,
    GuestModule,
    AdminModule,
    SuiteModule,
    appRoutes,
    ReactiveFormsModule,
    NgbModule.forRoot()
  ],
  providers: [
    AuthGuard,
    DoubleRoomService,
    SingleRoomService,
    SuiteService,
    GuestService,
    AuthenticationService,
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