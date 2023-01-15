import { Injectable, OnInit } from '@angular/core';
import { FavoriteTypes } from '../../shared/models/favorite.types';
import { FavoritesService } from '../../core/services/favorites.service';
import { users } from '../mocks/users';
import { INewUser } from '../models/new-user.interface';
import { IUser } from '../models/user.interface';
import { IAddress } from '../../shared/models/address.interface';
import { BehaviorSubject, delay, filter, find, map, merge, mergeMap, Observable, of, Subject, take } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    constructor(private favoriteService: FavoritesService) {}

    usersSbj = new BehaviorSubject<IUser[]>(users);
    users$ = this.usersSbj.asObservable();

    getUsers(): Observable<IUser[]> {
        return this.users$.pipe(delay(700));
    }

    getUserById(id: number): Observable<IUser> {
        return this.users$.pipe(
            take(1),
            delay(700),
            map(users => {
                return users.find((user) => user.id === id)!
            })
        );
    }

    getFavoriteUsers(): Observable<IUser[]> {
        return this.users$.pipe(
            mergeMap(users => {
                return this.favoriteService.getFavorites(FavoriteTypes.User)
                    .pipe(
                        map(favorites => {
                            return users.filter(user => favorites.includes(user.id))
                        })
                    );
            })
        );
    }

    addUser(userData: INewUser, addresses: IAddress[]): void {
        users.push({
            id: users.length + 1,
            ...userData,
            addresses,
        });
    }

    editUser(userData: INewUser, addresses: IAddress[], id: number): void {
        const targetUser = users.findIndex((user) => user.id === id);

        users.splice(targetUser, 1, {
            id: id,
            ...userData,
            addresses,
        });
    }
}

