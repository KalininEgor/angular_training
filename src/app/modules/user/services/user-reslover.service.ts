import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    Resolve,
    RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { IUser } from '../models/user.interface';
import { UserApiService } from './user-api.service';

@Injectable({
    providedIn: 'root',
})
export class UserResloverService implements Resolve<IUser> {
    constructor(private userApi: UserApiService) {}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<IUser> {
        const id = route.params['id'];
        return this.userApi.getUserById(id);
    }
}
