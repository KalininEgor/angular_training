import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from "@angular/material/card";
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

import { UserPageComponent } from './components/user-page/user-page.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    UserPageComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatCardModule,
    MatSlideToggleModule,
    MatDividerModule,
    MatButtonModule
  ],
})
export class UserModule { }
