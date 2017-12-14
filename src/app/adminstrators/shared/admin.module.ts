import { NgModule } from '@angular/core';

import { NavBarModule } from '../../navigation/nav-bar/nav-bar.module';
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
        NavBarModule
    ],
    providers: [
        AdminService
    ],
})
export class AdminModule { }