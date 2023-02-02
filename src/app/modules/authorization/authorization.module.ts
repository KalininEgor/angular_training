import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInPageComponent } from './pages/log-in-page/log-in-page.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { AuthorizationFormComponent } from './components/authorization-form/authorization-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    declarations: [
        LogInPageComponent,
        SignUpPageComponent,
        AuthorizationFormComponent,
    ],
    imports: [
        CommonModule, 
        SharedModule,
        RouterModule,
        ReactiveFormsModule,
        MatFormFieldModule, 
        MatInputModule,
        MatButtonModule,
        MatIconModule
    ],
})
export class AuthorizationModule {}
