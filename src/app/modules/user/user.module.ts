import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

import { SharedModule } from '../shared/shared.module';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserListItemComponent } from './components/user-list-item/user-list-item.component';
import { AddUserPageComponent } from './pages/add-user-page/add-user-page.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { EditUserPageComponent } from './pages/edit-user-page/edit-user-page.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
    declarations: [
        UsersPageComponent,
        AddUserPageComponent,
        UserListComponent,
        UserListItemComponent,
        UserFormComponent,
        EditUserPageComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        SharedModule,
        MatCardModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        MatRadioModule,
        MatProgressSpinnerModule,
        MatDividerModule,
        MatIconModule,
        MatPaginatorModule,
        UserRoutingModule
    ],
})
export class UserModule {}
