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
        gender: [null, [Validators.required]],
        imageUrl: [null]
    });

    uploadingFileName: string = '';

    ngOnInit(): void {
        this.parentForm.addControl('user', this.newUserForm);
    }

    onFileSelected($event: Event): void {
        this.newUserForm.get('imageUrl')?.markAsTouched();
        
        const file: File = ($event.target as HTMLInputElement).files![0];
        this.uploadingFileName = file.name;

        if (file && file.type.match(/image\/*/)) { 
            this.newUserForm.get('imageUrl')?.setErrors(null);
            
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                this.newUserForm.get('imageUrl')?.setValue(reader.result);
            }
        } else {
            this.newUserForm.get('imageUrl')?.setErrors({'invalidFile': true})
        }
    }

    clearFile(fileUploadInput: HTMLInputElement): void {
        fileUploadInput.files = new DataTransfer().files;

        this.newUserForm.get('imageUrl')?.setValue(null);
        this.newUserForm.get('imageUrl')?.setErrors(null);

        this.uploadingFileName = '';
    }

    gmailValidator(control: FormControl): ValidationErrors | null {

        if (control.value.endsWith('@gmail.com') || !control.value.length) {
            return null;
        }
        return {'gmail' : true};
    }
}   
