import { FormControl, ValidationErrors } from "@angular/forms";

export const gmailValidator = (control: FormControl): ValidationErrors | null => {

    if (control.value.endsWith('@gmail.com') || !control.value.length) {
        return null;
    }
    return {'invalidGmailEmail' : true};
}