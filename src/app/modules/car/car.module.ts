import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatInputModule } from '@angular/material/input';

import { CarPageComponent } from './components/car-page/car-page.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CarPageComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    FormsModule
  ]
})
export class CarModule { }
