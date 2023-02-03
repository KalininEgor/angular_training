import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { UserApiService } from '../../services/user-api.service';

@Component({
    selector: 'app-add-user-page',
    templateUrl: './add-user-page.component.html',
    styleUrls: ['./add-user-page.component.scss'],
})
export class AddUserPageComponent implements OnInit, OnDestroy {
    destroyed: Subject<void> = new Subject();
    form!: FormGroup;

    constructor(
        private fb: FormBuilder,
        private userApi: UserApiService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.form = this.fb.group({});
    }

    ngOnDestroy(): void {
        this.destroyed.next();
    }

    addSubform(name: string, form: FormGroup): void {
        this.form.addControl(name, form);
    }

    addUser(): void {
        this.form.markAllAsTouched();

        if (this.form.valid) {
            this.userApi
                .addUser({
                    ...this.form.value.newUser,
                    ...this.form.value.addressesForm.addresses
                })
                .pipe(
                    takeUntil(this.destroyed)
                )
                .subscribe((isAdded) => {
                    if (isAdded) {
                        this.router.navigate(['users']);
                    } else {
                        window.alert("Something went wrong. Check form and try again")
                    }
                });
        }
    }
}
