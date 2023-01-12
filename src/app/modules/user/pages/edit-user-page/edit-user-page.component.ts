import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, take } from 'rxjs';
import { DialogService } from 'src/app/modules/core/services/dialog.service';
import { ComponentCanDeactivate } from 'src/app/modules/core/services/exitAbout.guard';
import { IUser } from '../../models/user.interface';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'app-edit-user-page',
    templateUrl: './edit-user-page.component.html',
    styleUrls: ['./edit-user-page.component.scss'],
})
export class EditUserPageComponent implements OnInit, ComponentCanDeactivate{
    isSaved: boolean = false;
    id!: number;
    user!: Observable<IUser>;
    form!: FormGroup;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private userService: UserService,
        private dialogService: DialogService,
        private fb: FormBuilder
    ) {}

    canDeactivate(): boolean | Observable<boolean> {
        if (this.form.dirty && !this.isSaved) {
            return this.dialogService.confirmLeave("You have some unsaved changes. Do you want to leave this page?");
        } else {
            return true;
        }
    }

    ngOnInit(): void {
        this.form = this.fb.group({});

        this.route.params.pipe(take(1)).subscribe((params) => {
            this.id = +params['id'];
            this.user = this.userService.getUser(this.id).pipe(take(1));
        });
    }

    initSubForm(name: string, subForm: FormGroup): void {
        this.form.addControl(name, subForm);
    }
    
    updateUser(): void {
        this.form.markAllAsTouched();

        if (this.form.valid) {
            this.isSaved = true;

            const updatedUser = this.form.getRawValue();
            this.userService.editUser(updatedUser.user, updatedUser.addressesForm.addresses, this.id);
            
            this.router.navigate(['users']); 
        }
    }

      
}
