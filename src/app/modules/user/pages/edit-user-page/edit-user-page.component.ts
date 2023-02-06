import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, take } from 'rxjs';
import { ComponentCanDeactivate } from 'src/app/modules/core/guards/exit-about.guard';
import { IUser } from '../../models/user.interface';
import { UserApiService } from '../../services/user-api.service';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'app-edit-user-page',
    templateUrl: './edit-user-page.component.html',
    styleUrls: ['./edit-user-page.component.scss'],
})
export class EditUserPageComponent implements OnInit, ComponentCanDeactivate {
    isSaved: boolean = false;
    id!: string;
    email!: string;
    user!: IUser;
    form!: FormGroup;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private userApi: UserApiService,
        private fb: FormBuilder
    ) {}

    ngOnInit(): void {
        this.form = this.fb.group({
            addressesForm: this.fb.group({
                addresses: this.fb.array([]),
            }),
        });

        this.route.params.subscribe((params) => {
            this.id = params['id'];

            this.userApi
                .getUserById(this.id)
                .pipe(take(1))
                .subscribe((value) => {
                    this.user = value;
                    this.email = value.email;

                    for (const a of this.user.addresses) {
                        this.addresses.push(this.fb.group({}));
                    }

                    setTimeout(() => {
                        this.addresses.patchValue(this.user.addresses);
                    }, 0);
                    
                    this.form.get('user')?.patchValue(this.user);
                });
        });
    }
    
    get addresses(): FormArray {
        return this.form.get('addressesForm.addresses') as FormArray;
    }
    
    addSubForm(name: string, subForm: FormGroup): void {
        this.form.addControl(name, subForm);
    }

    updateUser(): void {
        this.form.markAllAsTouched();

        if (this.form.valid) {
            this.isSaved = true;

            const updatedUser = this.form.getRawValue();
            this.userApi.editUser({
                id: this.id,
                ...updatedUser.user,
                ...updatedUser.addressesForm.addresses
            }).subscribe(isEdited => {
                if (isEdited) {
                    this.router.navigate(['users']);
                } else {
                    window.alert('Something went wrong, please try again');
                }
            });
        }
    }

    canDeactivate(): boolean | Observable<boolean> {
        return !(this.form.dirty && !this.isSaved);
    }
}
