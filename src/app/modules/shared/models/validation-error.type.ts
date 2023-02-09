import { AbstractControl } from '@angular/forms';

export type ValidationErrors = {
    [key: string]: (controlName: string, control: AbstractControl) => string
};
