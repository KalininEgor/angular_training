import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { map, merge, Observable, Subscription, take } from 'rxjs';
import { UniqueEmailValidatorService } from '../../services/unique-email-validator.service';
import { gmailValidator } from 'src/app/modules/shared/services/gmail-validator';
import { IUser } from '../../models/user.interface';

@Component({
    selector: 'app-user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit, OnDestroy {
    @Input() initialdata?: Observable<IUser>
    @Output() formReady = new EventEmitter<FormGroup>();

    constructor(
        private fb: FormBuilder,
        private uniqueEmailValidator: UniqueEmailValidatorService
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
            [this.uniqueEmailValidator.validate.bind(this.uniqueEmailValidator)]
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

        if (this.initialdata) this.initExistingUser()
        
        this.formReady.emit(this.newUserForm);
    }

    initExistingUser(): void {
        const emailField: AbstractControl = this.newUserForm.get('email')!;
        emailField.clearAsyncValidators();

        this.initialdata?.pipe(take(1)).subscribe(user => {

            this.subscribe.add(
                emailField.valueChanges.subscribe(value => {
            
                    if (value === user.email) {
                        emailField.clearAsyncValidators();
                    } else {
                        emailField.setAsyncValidators(this.uniqueEmailValidator.validate.bind(this.uniqueEmailValidator));
                    }
    
                    emailField.updateValueAndValidity({emitEvent: false});
                })  
            );         

            this.newUserForm.patchValue(user, {emitEvent: false});
        });
    }

    fillEmailValue(): void {
        let firstPart = '';
        let secondPart = '';

        this.subscribe.add(
            merge(
                this.newUserForm.get('firstName')!.valueChanges
                    .pipe(
                        map(value => {
                            return {
                                control: 'firstName',
                                value: value
                            }
                        })
                    ),
                this.newUserForm.get('lastName')!.valueChanges
                    .pipe(
                        map(value => {
                            return {
                                control: 'lastName',
                                value: value
                            }
                        })
                    ))
                .subscribe(emailPart => {
                    if (emailPart.control === 'firstName') {
                        firstPart = emailPart.value;
                    } else {
                        secondPart = emailPart.value;
                    }
                    this.newUserForm.get('email')!.setValue(`${firstPart}.${secondPart}@gmail.com`);
                    this.newUserForm.get('email')!.markAsTouched();
                }
            )
        );
    }
    
    ngOnDestroy(): void {
        this.subscribe.unsubscribe();
    }
}   
