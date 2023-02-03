import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { repeatValidator } from '../../../shared/services/repeat-validator';

@Component({
    selector: 'app-authorization-form',
    templateUrl: './authorization-form.component.html',
    styleUrls: ['./authorization-form.component.scss'],
})
export class AuthorizationFormComponent implements OnInit{
    @Output() formReady: EventEmitter<FormGroup> = new EventEmitter();
    @Input() authType!: 'login' | 'signup';

    authForm!: FormGroup;
    hidePass: boolean = true;

    constructor(private fb: FormBuilder){}

    ngOnInit(): void {
        this.authForm = this.fb.group({
            login: this.fb.control(null, Validators.required),
            passGroup: this.fb.group({
                password: this.fb.control(null, Validators.required)
            })
        });

        if (this.authType === 'signup') {
            this.passGroup.addControl('passwordRepeat', this.fb.control(null, Validators.required));

            this.passGroup.setValidators(repeatValidator('password', 'passwordRepeat'));
        };
        
        this.formReady.emit(this.authForm);
    }

    get passGroup(): FormGroup {
        return this.authForm.get('passGroup') as FormGroup;
    }

    togglePassword(event: Event): void {
        event.preventDefault();
        this.hidePass = !this.hidePass;
    }
}
