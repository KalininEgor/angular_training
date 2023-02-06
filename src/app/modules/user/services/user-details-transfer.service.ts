import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { IUser } from '../models/user.interface';

@Injectable({
    providedIn: 'root',
})
export class UserDetailsTransferService {
    transferUser: Subject<IUser | null> = new BehaviorSubject<IUser | null>(null);

    updateTransferUser(user: IUser): void {
        this.transferUser.next(user);
    }
}
