import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { AuthorizationService } from '../../../shared/services/authorization.service';

@Component({
    selector: 'app-log-in-page',
    templateUrl: './log-in-page.component.html',
    styleUrls: ['./log-in-page.component.scss'],
})
export class LogInPageComponent implements OnInit, OnDestroy {
    form!: FormGroup;

    destroyed: Subject<void> = new Subject();

    constructor(
        private fb: FormBuilder,
        private authService: AuthorizationService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.form = this.fb.group({});
    }

    ngOnDestroy(): void {
        this.destroyed.next();
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
            .pipe(
                takeUntil(this.destroyed)
            )
            .subscribe((isCreated) => {
                isCreated ? this.router.navigate(['']) : alert('Invalid login or password. Check and try again');
            });
        }
    }
}
