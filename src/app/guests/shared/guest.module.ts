import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NavBarComponent } from '../../navigation/nav-bar/nav-bar.component';
import { GuestCreateComponent } from '../guest-create/guest-create.component';
import { GuestDetailComponent } from '../guest-detail/guest-detail.component';
import { GuestListComponent } from '../guest-list/guest-list.component';
import { GuestPageComponent } from '../guest-page/guest-page/guest-page.component';
import { GuestService } from './guest.service';

@NgModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        GuestListComponent,
        GuestCreateComponent,
        GuestDetailComponent,
        GuestPageComponent,
        NavBarComponent
    ],
    declarations: [
        GuestListComponent,
        GuestCreateComponent,
        GuestDetailComponent,
        GuestPageComponent,
        NavBarComponent
    ],
    providers: [
        GuestService
    ],
})
export class GuestModule { }