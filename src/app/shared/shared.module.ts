import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';

const MaterialUI = [
  MatInputModule,
  MatTabsModule,
  MatBadgeModule,
  MatButtonModule,
  MatSliderModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatSelectModule,
  BrowserAnimationsModule,
  FormsModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialUI
  ],
  exports: [MaterialUI]
})
export class SharedModule { }
