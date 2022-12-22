import { Component } from '@angular/core';
import { FormBuilder, NonNullableFormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'app-user-form-page',
    templateUrl: './user-form-page.component.html',
    styleUrls: ['./user-form-page.component.scss'],
})
export class UserFormPageComponent {
    constructor(
        private fb: NonNullableFormBuilder,
        private userService: UserService,
        private router: Router
    ) {}

    userForm = this.fb.group({
        fullName: this.fb.group({
            firstName: [''],
            lastName: [''],
        }),
        company: [''],
        department: [''],
        email: [''],
        age: [15],
        gender: [false],
    });

    addUser(): void {
        this.userService.addUser(this.userForm.getRawValue());
        this.router.navigate(['user']);
    }
}
