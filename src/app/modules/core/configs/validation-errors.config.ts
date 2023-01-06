import { TError } from "../models/validation-error.type";

export const errorsConfig: TError = {
    required: (controlName) => {
        return `'${controlName}' is required field`;
    },
    email: () => {
        return 'Provide a valid email';
    },
    invalidGmailEmail: () => {
        return 'Provide a google email (@gmail.com)';
    },
    uniqueEmail: () => {
        return 'This email is already taken';
    },
    min: (controlName, control) => {
        return `'${controlName}' must be more than ${control!.errors!['min'].min}`;
    },
    max: (controlName, control) => {
        return `'${controlName}' must be less than ${control!.errors!['max'].max}`;
    },
    minlength: (controlName, control) => {
        return `'${controlName}' must contain more than ${control!.errors!['minlength'].requiredLength} characters`;
    },
    maxlength: (controlName, control) => {
        return `'${controlName}' must contain less than ${control!.errors!['maxlength'].requiredLength} characters`;
    },
    invalidImage: () => {
        return 'Only pictures allowed';
    },
}