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

import { UserPageComponent } from './pages/user-page/user-page.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { SharedModule } from '../shared/shared.module';
import { UserListItemComponent } from './components/user-list-item/user-list-item.component';
import { UserFormPageComponent } from './pages/user-form-page/user-form-page.component';
import { UserFormComponent } from './components/user-form/user-form.component';

@NgModule({
    declarations: [
        UserPageComponent,
        UserFormPageComponent,
        UserListComponent,
        UserListItemComponent,
        UserFormComponent,
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
        MatIconModule
    ],
})
export class UserModule {}
