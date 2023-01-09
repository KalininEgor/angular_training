import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'app-user-form-page',
    templateUrl: './user-form-page.component.html',
    styleUrls: ['./user-form-page.component.scss'],
})
export class UserFormPageComponent implements OnInit {

    form!: FormGroup;

    constructor(
        private fb: FormBuilder,
        private userService: UserService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.form = this.fb.group({});
    }

    addSubform(name: string, form: FormGroup | FormArray): void {
        this.form.addControl(name, form);
    }

    addUser(): void {
        this.form.markAllAsTouched();
        
        if (this.form.valid) {
            this.userService.addUser(this.form.value.newUser, this.form.value.addresses);
            this.router.navigate(['users']); 
        }
    }
}
