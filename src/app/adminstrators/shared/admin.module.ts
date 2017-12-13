import { NavBarComponent } from '../../navigation/nav-bar/nav-bar.component';
import { AdminListComponent } from '../admin-list/admin-list.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AdminCreateComponent } from '../admin-create/admin-create.component';
import { AdminDetailComponent } from '../admin-detail/admin-detail.component';
import { AdminService } from './admin.service';


@NgModule({
    declarations: [
        AdminListComponent,
        AdminCreateComponent,
        AdminDetailComponent
    ],
    imports: [
        CommonModule,
        FormsModule
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