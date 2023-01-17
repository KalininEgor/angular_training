import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { merge, Subscription } from 'rxjs';
import { UniqueEmailValidator } from '../../services/unique-email.validator';
import { gmailValidator } from 'src/app/modules/shared/services/gmail-validator';

@Component({
    selector: 'app-user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit, OnDestroy {
    @Input() set emailOnEdit(currentEmail: string) {
        this.newUserForm.get('email')?.setAsyncValidators(this.uniqueEmailValidator.validateOnEdit(currentEmail));
        this.newUserForm.get('email')?.updateValueAndValidity();
    };
    @Input() currentEmail?: string;
    @Output() formReady = new EventEmitter<FormGroup>();

    constructor(
        private fb: FormBuilder,
        private uniqueEmailValidator: UniqueEmailValidator
    ) {}

    subscribe: Subscription = new Subscription();

    newUserForm: FormGroup = this.fb.group({
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        company: ['', [Validators.maxLength(35)]],
        department: ['', [Validators.minLength(6)]],
        email: ['', [
                Validators.required, 
                Validators.email, 
                gmailValidator
            ], 
            [this.uniqueEmailValidator]
        ],
        age: [null, [ 
                Validators.required, 
                Validators.min(15), 
                Validators.max(100)
            ]
        ],
        gender: [null, [Validators.required]],
        imageUrl: [null]
    });

    ngOnInit(): void {
        this.fillEmailValue();
        
        this.formReady.emit(this.newUserForm);
    }

    ngOnDestroy(): void {
        this.subscribe.unsubscribe();
    }

    fillEmailValue(): void {
        const firstName = this.newUserForm.get('firstName')!;
        const lastName = this.newUserForm.get('lastName')!;
        
        this.subscribe.add(
            merge(firstName.valueChanges,lastName.valueChanges)
                .subscribe(() => {
                    this.newUserForm.get('email')!.setValue(
                        `${firstName.value}.${lastName.value}@gmail.com`
                    );
                    this.newUserForm.get('email')!.markAsTouched();
                }
            )
        );
    }
}   
