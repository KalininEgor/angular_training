import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { AuthorizationService } from '../../../shared/services/authorization.service';

@Component({
    selector: 'app-sign-up-page',
    templateUrl: './sign-up-page.component.html',
    styleUrls: ['./sign-up-page.component.scss'],
})
export class SignUpPageComponent implements OnDestroy {
    form!: FormGroup;
    destroyed: Subject<void> = new Subject();

    constructor(
        private fb: FormBuilder, 
        private authService: AuthorizationService, 
        private router: Router
    ){}

    ngOnInit(): void {
        this.form = this.fb.group({});
    }

    ngOnDestroy(): void {
        this.destroyed.next();
    }

    addChildForm(name: string, form: FormGroup): void {
        this.form.addControl(name, form);
    }

    createNewUser(): void {
        this.form.markAllAsTouched();

        if (this.form.valid) {
            const formValue = this.form.value.signupForm;
            
            this.authService.createCredentials({
                login: formValue.login,
                password: formValue.passGroup.password
            })
            .pipe(
                takeUntil(this.destroyed)
            )
            .subscribe(isCreated => {
                if (isCreated) {
                    this.router.navigate(['login']);
                }
                
            });
        }
    }
}
