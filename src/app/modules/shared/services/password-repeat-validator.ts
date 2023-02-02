import { FormControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";

export const passwordRepeatValidator = (passGroup: FormGroup): ValidatorFn => {
    return (): ValidationErrors | null => {
        let pass = passGroup.get('password')!.value;
        let passRepeat = passGroup.get('passwordRepeat')!.value;
        
        return pass === passRepeat ? null : { notSamePass: true };
    }
};