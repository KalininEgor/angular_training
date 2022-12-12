import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from "@angular/material/card";
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

import { UserPageComponent } from './components/user-page/user-page.component';
import { UserListComponent } from './components/user-list/user-list.component';



@NgModule({
  declarations: [
    UserPageComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatSlideToggleModule,
    MatDividerModule,
    MatButtonModule
  ],
})
export class UserModule { }
