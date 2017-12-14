import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { NavBarModule } from '../../navigation/nav-bar/nav-bar.module';
import { GuestCreateComponent } from '../guest-create/guest-create.component';
import { GuestDetailComponent } from '../guest-detail/guest-detail.component';
import { GuestListComponent } from '../guest-list/guest-list.component';
import { GuestPageComponent } from '../guest-page/guest-page/guest-page.component';
import { GuestService } from './guest.service';

@NgModule({
    imports: [
        ReactiveFormsModule,
        NavBarModule
    ],
    declarations: [
        GuestListComponent,
        GuestCreateComponent,
        GuestDetailComponent,
        GuestPageComponent
    ],
    providers: [
        GuestService
    ],
})
export class GuestModule { }