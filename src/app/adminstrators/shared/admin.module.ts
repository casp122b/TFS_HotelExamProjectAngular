import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AdminCreateComponent } from '../admin-create/admin-create.component';
import { AdminDetailComponent } from '../admin-detail/admin-detail.component';
import { AdminListComponent } from '../admin-list/admin-list.component';
import { AdminService } from './admin.service';


@NgModule({
    declarations: [
        AdminListComponent,
        AdminCreateComponent,
        AdminDetailComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule
    ],
    exports: [
        AdminListComponent,
        AdminCreateComponent,
        AdminDetailComponent

    ],
    providers: [
        AdminService
    ]
})
export class AdminModule { }