import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, Observable, of } from 'rxjs';
import { userCredentials } from '../../authorization/mocks/user-credentials.mock';
import { IUserCredentials } from '../../authorization/models/user-credentials.interface';

@Injectable({
    providedIn: 'root',
})
export class AuthorizationService {
    private currentUser: BehaviorSubject<string> = new BehaviorSubject<string>('');
    private isAuthorized: boolean = false;

    get authorizationStatus(): boolean {
        return this.isAuthorized;
    }

    get authorizedUser(): BehaviorSubject<string> {
        return this.currentUser;
    }

    constructor() {}

    createCredentials(user: IUserCredentials): Observable<boolean> {
        userCredentials.push(user);

        return of(true).pipe(delay(500));
    }

    checkCredentials(user: IUserCredentials): Observable<boolean> {
        const isCredentialsValid = userCredentials.findIndex(userCred => {
            return userCred.login === user.login && userCred.password === user.password;
        });

        let res = false;

        if (isCredentialsValid !== -1) {
            this.currentUser.next(user.login);

            this.isAuthorized = true;
            
            res = true; 
        }

        return of(res).pipe(delay(500));
    }

    signOut(): void {
        this.currentUser.next('');
        this.isAuthorized = false;
    }
}
