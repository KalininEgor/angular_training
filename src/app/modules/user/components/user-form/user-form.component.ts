import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { gmailValidator } from 'src/app/modules/shared/services/gmail-validator';
import { UniqueEmailValidatorService } from '../../services/unique-email-validator.service';

@Component({
    selector: 'app-user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
    @Output() formReady = new EventEmitter<FormGroup>();

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
        this.formReady.emit(this.newUserForm);
    }
}   
