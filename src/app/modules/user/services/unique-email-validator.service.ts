import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { delay, map, Observable, of } from 'rxjs';
import { IUser } from '../models/user.interface';
import { UserService } from './user.service';

@Injectable({
    providedIn: 'root',
})
export class UniqueEmailValidatorService implements AsyncValidator {
    constructor(private userService: UserService) {}

    validate(control: AbstractControl): Observable<ValidationErrors | null> {
        return this.isEmailUnique(control.value).pipe(
            delay(500),
            map(isUnique => isUnique ? null : { 'uniqueEmail' : true })
        );
    }

    isEmailUnique(email: string): Observable<boolean> {
        const users: IUser[] = this.userService.getUsers();
        const isUnique = users.findIndex(user => user.email.toLowerCase() === email.toLowerCase());

        return isUnique === -1 ? of(true) : of(false);
    }
}
