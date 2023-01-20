import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { debounceTime, delay, map, Observable, of, take } from 'rxjs';
import { UserApiService } from './user-api.service';

@Injectable({
    providedIn: 'root',
})
export class UniqueEmailValidator {
    constructor(private userApi: UserApiService) {}

    validate(control: AbstractControl): Observable<ValidationErrors | null> {
        return this.isEmailUnique(control.value).pipe(
            debounceTime(1000),
            delay(500),
            map(isUnique => isUnique ? null : { 'uniqueEmail' : true })
        );
    }

    validateOnEdit(currentEmail: string): AsyncValidatorFn{

        return (control: AbstractControl): Observable<ValidationErrors | null> => {
            if (control.value === currentEmail) {
                return of(null)
            } else {
                return this.validate(control)
            }
        }  
    }

    isEmailUnique(email: string): Observable<boolean> {
        return this.userApi.getUsers().pipe(
            take(1),
            map(users => {
                const isUnique = users.findIndex(user => user.email.toLowerCase() === email.toLowerCase());
                return isUnique === -1 ? true : false 
            })
        )
    }
}
