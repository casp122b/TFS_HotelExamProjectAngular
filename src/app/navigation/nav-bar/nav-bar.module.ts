import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NavBarComponent } from './nav-bar.component';

@NgModule({
    declarations: [
        NavBarComponent
    ],
    imports: [
        ReactiveFormsModule,
        CommonModule,
        FormsModule
    ],
    exports: [
        ReactiveFormsModule,
        NavBarComponent,
        CommonModule,
        FormsModule
    ],  
})
export class NavBarModule { }