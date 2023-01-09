import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { validationErrorsConfig } from 'src/app/modules/shared/configs/validation-errors.config';

@Component({
    selector: 'app-validation-error',
    templateUrl: './validation-error.component.html',
    styleUrls: ['./validation-error.component.scss'],
})
export class ValidationErrorComponent {
    @Input() control!: AbstractControl<any, any> | null;
    @Input() controlName!: string;

    showErrorMessage(): string {
        let message: string = '';

        const errors: string[] = Object.keys(this.control?.errors!);

        for (const err of errors) {
            if (validationErrorsConfig.hasOwnProperty(err)) {
                message = validationErrorsConfig[err](this.controlName, this.control!);
                break
            }
        }
        return message;        
    }
}

