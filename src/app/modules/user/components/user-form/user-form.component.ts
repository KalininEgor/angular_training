import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidationErrors, FormControl } from '@angular/forms';
import { UniqueEmailValidatorService } from '../../services/unique-email-validator.service';

@Component({
    selector: 'app-user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
    @Input() parentForm!: FormGroup;

    constructor(
        private fb: FormBuilder,
        private uniqueEmailValidator: UniqueEmailValidatorService
    ) {}

    newUserForm: FormGroup = this.fb.group({
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        company: ['', [Validators.maxLength(35)]],
        department: ['', [Validators.minLength(6)]],
        email: ['', [
                Validators.required, 
                Validators.email, 
                this.gmailValidator
            ], 
            [this.uniqueEmailValidator]
        ],
        age: [null, [ 
                Validators.required, 
                Validators.min(15), 
                Validators.max(100)
            ]
        ],
        gender: [null, [Validators.required]]
    });

    uploadingFileName: string = '';

    ngOnInit(): void {
        this.parentForm.addControl('user', this.newUserForm);
    }
    
    gmailValidator(control: FormControl): ValidationErrors | null {

        if (control.value.endsWith('@gmail.com') || !control.value.length) {
            return null;
        }
        return {'gmail' : true};
    }
}   
