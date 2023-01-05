import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
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

    addUser(): void {
        this.form.get('user')?.markAllAsTouched();
        
        if (this.form.valid) {
            this.userService.addUser(this.form.value.user);
            this.router.navigate(['users']); 
        }
    }
}
