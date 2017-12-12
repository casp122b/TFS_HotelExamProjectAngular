import { RouterModule } from '@angular/router';
import { GuestPageComponent } from './guests/guest-page/guest-page/guest-page.component';
import { GuestDetailComponent } from './guests/guest-detail/guest-detail.component';
import { GuestCreateComponent } from './guests/guest-create/guest-create.component';
import { GuestListComponent } from './guests/guest-list/guest-list.component';
import { DoubleRoomDetailComponent } from './rooms/double-room/double-room-detail/double-room-detail.component';
import { DoubleRoomCreateComponent } from './rooms/double-room/double-room-create/double-room-create.component';
import { DoubleRoomListComponent } from './rooms/double-room/double-room-list/double-room-list.component';
import { SingleRoomDetailComponent } from './rooms/single-room/single-room-detail/single-room-detail.component';
import { SingleRoomCreateComponent } from './rooms/single-room/single-room-create/single-room-create.component';
import { SingleRoomListComponent } from './rooms/single-room/single-room-list/single-room-list.component';
import { SuiteDetailComponent } from './rooms/suites/suite-detail/suite-detail.component';
import { SuiteCreateComponent } from './rooms/suites/suite-create/suite-create.component';
import { SuiteListComponent } from './rooms/suites/suite-list/suite-list.component';
import { FrontPageDetailComponent } from './front-page/front-page-detail/front-page-detail.component';
import { LoginComponent } from './login/login.component';
import { TryingComponent } from './trying/trying.component';
import { AuthGuard } from './guard/auth.guard';
import { UnAuthorizedComponent } from './unauthorized/unauthorized/unauthorized.component';
export const appRoutes = RouterModule.forRoot(
    [
        {
            path: 'guests/page',
            component: GuestPageComponent,
            data: { title: 'Guest page' }
          },
          {
            path: 'guests/:id',
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
          }
    ]
);