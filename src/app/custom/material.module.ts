// custom file for importing all the requirements from Angular Materials
// add what you want to import here, and just import this whole file into app.module.ts

import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';

// import {
//   MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
//   MatToolbarModule, MatMenuModule,MatIconModule, MatProgressSpinnerModule
// } from '@angular/material';

import {MatToolbarModule} from '@angular/material/toolbar';
//import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
//import {MatSidenavModule} from '@angular/material/sidenav';
import {MatStepperModule} from '@angular/material/stepper';
import {MatSelectModule} from '@angular/material/select';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
    imports: [
        CommonModule,
        MatToolbarModule,
        // MatSliderModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatInputModule,
        MatFormFieldModule,
        // MatSidenavModule,
        MatStepperModule,
        MatSelectModule,
        MatDividerModule,
    ],
    exports: [
        CommonModule,
        MatToolbarModule,
        // MatSliderModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatInputModule,
        MatFormFieldModule,
        // MatSidenavModule,
        MatStepperModule,
        MatSelectModule,
        MatDividerModule,
    ]
})

export class CustomMaterialModule { }
// @NgModule({
//   imports: [
//   CommonModule, 
//   MatToolbarModule,
//   MatButtonModule, 
//   MatCardModule,
//   MatInputModule,
//   MatDialogModule,
//   MatTableModule,
//   MatMenuModule,
//   MatIconModule,
//   MatProgressSpinnerModule
//   ],
//   exports: [
//   CommonModule,
//    MatToolbarModule, 
//    MatButtonModule, 
//    MatCardModule, 
//    MatInputModule, 
//    MatDialogModule, 
//    MatTableModule, 
//    MatMenuModule,
//    MatIconModule,
//    MatProgressSpinnerModule
//    ],
// })
