import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthorizationService } from '../../services/authorization.service';

@Component({
    selector: 'app-sign-up-page',
    templateUrl: './sign-up-page.component.html',
    styleUrls: ['./sign-up-page.component.scss'],
})
export class SignUpPageComponent {
    form!: FormGroup;

    constructor(
        private fb: FormBuilder, 
        private authService: AuthorizationService, 
        private router: Router
    ){}

    ngOnInit(): void {
        this.form = this.fb.group({});
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
            .subscribe(isCreated => {
                isCreated ? this.router.navigate(['login']) : alert('Login already Exist. Choose another one');
            });
        }
    }
}
