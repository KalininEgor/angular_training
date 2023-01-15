import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { delay, map, Observable, of, take } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
    providedIn: 'root',
})
export class UniqueEmailValidator {
    constructor(private userService: UserService) {}

    validate(control: AbstractControl): Observable<ValidationErrors | null> {
        return this.isEmailUnique(control.value).pipe(
            delay(500),
            map(isUnique => isUnique ? null : { 'uniqueEmail' : true })
        );
    }

    validateOnEdit(editableEmail: boolean): AsyncValidatorFn{
        return (control: AbstractControl): Observable<ValidationErrors | null> => {
            return editableEmail ? of(null) : this.validate(control);
        }  
    }

    isEmailUnique(email: string): Observable<boolean> {
        return this.userService.getUsers().pipe(
            take(1),
            map(users => {
                const isUnique = users.findIndex(user => user.email.toLowerCase() === email.toLowerCase());
                return isUnique === -1 ? true : false 
            })
        )
    }
}
