import { NavBarComponent } from "./nav-bar.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        NavBarComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        NavBarComponent,
        CommonModule,
        FormsModule
    ],  
})
export class NavBarModule { }