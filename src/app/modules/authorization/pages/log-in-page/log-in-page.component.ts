import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthorizationService } from '../../services/authorization.service';

@Component({
    selector: 'app-log-in-page',
    templateUrl: './log-in-page.component.html',
    styleUrls: ['./log-in-page.component.scss'],
})
export class LogInPageComponent implements OnInit {
    form!: FormGroup;

    constructor(
        private fb: FormBuilder,
        private authService: AuthorizationService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.form = this.fb.group({});
    }

    addChildForm(name: string, form: FormGroup): void {
        this.form.addControl(name, form);
    }

    logInUser(): void {
        this.form.markAllAsTouched();

        if (this.form.valid) {
            const formValue = this.form.value.loginForm;

            this.authService.checkCredentials({
                login: formValue.login,
                password: formValue.passGroup.password,
            })
            .subscribe((isCreated) => {
                isCreated ? this.router.navigate(['']) : alert('Invalid login or password. Check and try again');
            });
        }
    }
}
