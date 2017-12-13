import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { GuestCreateComponent } from '../guest-create/guest-create.component';
import { GuestDetailComponent } from '../guest-detail/guest-detail.component';
import { GuestListComponent } from '../guest-list/guest-list.component';
import { GuestPageComponent } from '../guest-page/guest-page/guest-page.component';
import { GuestService } from './guest.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        GuestListComponent,
        GuestCreateComponent,
        GuestDetailComponent,
        GuestPageComponent
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