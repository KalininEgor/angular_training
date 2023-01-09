import { AbstractControl } from '@angular/forms';

export type TValidationErrors = {
    [key: string]: (controlName: string, control: AbstractControl) => string
};
