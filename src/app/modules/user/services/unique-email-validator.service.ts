import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { catchError, map, Observable, of } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
    providedIn: 'root',
})
export class UniqueEmailValidatorService implements AsyncValidator {
    constructor(private userService: UserService) {}

    validate(control: AbstractControl): Observable<ValidationErrors | null> {
        return this.userService.isEmailUnique(control.value).pipe(
            map(isTaken => (isTaken ? null : { 'uniqueEmail' : true })),
            catchError(() => of(null))
        );
    }
}
