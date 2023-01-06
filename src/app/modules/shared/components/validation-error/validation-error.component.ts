import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { errorsConfig } from 'src/app/modules/core/configs/validation-errors.config';

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
            if (errorsConfig.hasOwnProperty(err)) {
                message = errorsConfig[err](this.controlName, this.control);
                break
            }
        }
        return message;        
    }
}

