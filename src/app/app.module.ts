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
import { SuiteService } from './rooms/suites/shared/suite.service';
import { SuiteCreateComponent } from './rooms/suites/suite-create/suite-create.component';
import { SuiteDetailComponent } from './rooms/suites/suite-detail/suite-detail.component';
import { SuiteListComponent } from './rooms/suites/suite-list/suite-list.component';
import { UnAuthorizedComponent } from './unauthorized/unauthorized/unauthorized.component';

@NgModule({
  declarations: [
    AppComponent,
    SuiteCreateComponent,
    SuiteDetailComponent,
    SuiteListComponent,
    SingleRoomCreateComponent,
    SingleRoomDetailComponent,
    SingleRoomListComponent,
    DoubleRoomDetailComponent,
    DoubleRoomCreateComponent,
    DoubleRoomListComponent,
    FrontPageDetailComponent,
    LoginComponent,
    UnAuthorizedComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    RouterModule,
    GuestModule,
    AdminModule,
    NavBarModule,
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