import { SuiteService } from "./suite.service";
import { NavBarModule } from "../../../navigation/nav-bar/nav-bar.module";
import { NgModule } from "@angular/core";
import { SuiteListComponent } from "../suite-list/suite-list.component";
import { SuiteCreateComponent } from "../suite-create/suite-create.component";
import { SuiteDetailComponent } from "../suite-detail/suite-detail.component";

@NgModule({
    imports: [
        NavBarModule
    ],
    declarations: [
        SuiteListComponent,
        SuiteCreateComponent,
        SuiteDetailComponent,
    ],
    providers: [
        SuiteService
    ],
})
export class SuiteModule { }