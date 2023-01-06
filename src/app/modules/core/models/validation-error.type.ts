import { AbstractControl } from "@angular/forms";

export type TError = {
    [key: string]: (controlName: string, control: AbstractControl<any, any> | null) => string
}