import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
    @Input() parentForm!: FormGroup;

    newUserForm: FormGroup = this.fb.group({
        firstName: [''],
        lastName: [''],
        company: [''],
        department: [''],
        email: [''],
        age: [null],
        gender: [null],
    });

    constructor(private fb: FormBuilder) {}
    
    ngOnInit(): void {
        this.parentForm.addControl('user', this.newUserForm);
    }
}
