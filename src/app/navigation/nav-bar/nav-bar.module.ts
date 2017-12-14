import { NavBarComponent } from "./nav-bar.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        NavBarComponent
    ],
    imports: [
        ReactiveFormsModule,
        CommonModule
    ],
    exports: [
        ReactiveFormsModule,
        NavBarComponent,
        CommonModule,
        FormsModule
    ],  
})
export class NavBarModule { }