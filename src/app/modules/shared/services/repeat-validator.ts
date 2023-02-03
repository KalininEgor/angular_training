import { AbstractControl, FormControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const repeatValidator = (controlName: string, subControlName: string): ValidatorFn => {
    return (group: AbstractControl): ValidationErrors | null => {
        const control = group.get(controlName)!;
        const subControl = group.get(subControlName)!;

        if (control.value !== subControl.value) {
            
            control.setErrors({'notSame' : true});
            subControl.setErrors({'notSame' : true});

            return { notSamePass: true };
        } else {
            control.setErrors(null);
            subControl.setErrors(null);

            return null;
        }

        
    }
};