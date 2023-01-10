import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'app-add-user-page',
    templateUrl: './add-user-page.component.html',
    styleUrls: ['./add-user-page.component.scss'],
})
export class AddUserPageComponent implements OnInit {

    form!: FormGroup;

    constructor(
        private fb: FormBuilder,
        private userService: UserService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.form = this.fb.group({});
    }

    addSubform(name: string, form: FormGroup): void {
        this.form.addControl(name, form);
    }

    addUser(): void {
        this.form.markAllAsTouched();
        
        if (this.form.valid) {
            this.userService.addUser(this.form.value.newUser, this.form.value.addressesForm.addresses);
            this.router.navigate(['users']); 
        }
    }
}
