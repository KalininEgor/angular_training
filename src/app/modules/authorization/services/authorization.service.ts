import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, Observable, of } from 'rxjs';
import { userCredentials } from '../mocks/user-credentials.mock';
import { IUserCredentials } from '../models/user-credentials.interface';

@Injectable({
    providedIn: 'root',
})
export class AuthorizationService {
    currentUser: BehaviorSubject<string> = new BehaviorSubject<string>('');
    isAuthorized: boolean = false;

    constructor() {}

    createCredentials(user: IUserCredentials): Observable<boolean> {
        userCredentials.push(user);

        return of(true).pipe(delay(500));
    }

    checkCredentials(user: IUserCredentials): Observable<boolean> {
        const isCredentialsValid = userCredentials.findIndex(userCred => {
            return userCred.login === user.login && userCred.password === user.password;
        });

        if (isCredentialsValid !== -1) {
            this.currentUser.next(user.login);

            this.isAuthorized = true;
            
            return of(true).pipe(delay(500));
        } else {
            return of(false).pipe(delay(500));
        }
    }

    signOut(): void {
        this.currentUser.next('');
        this.isAuthorized = false;
    }
}
