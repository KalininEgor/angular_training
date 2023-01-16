import { Injectable } from '@angular/core';
import { FavoriteTypes } from '../../shared/models/favorite.types';
import { FavoritesService } from '../../core/services/favorites.service';
import { users } from '../mocks/users';
import { INewUser } from '../models/new-user.interface';
import { IUser } from '../models/user.interface';
import { IAddress } from '../../shared/models/address.interface';
import { BehaviorSubject, delay, map, mergeMap, Observable, of, take } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    constructor(private favoriteService: FavoritesService) {}

    /* usersSbj = new BehaviorSubject<IUser[]>(users);
    getUsers() = this.usersSbj.asObservable(); */

    getUsers(): Observable<IUser[]> {
        return of(users).pipe(delay(700));
    }

    getUserById(id: number): Observable<IUser> {
        return this.getUsers().pipe(
            take(1),
            delay(700),
            map((users) => {
                return users.find((user) => user.id === id)!;
            })
        );
    }

    getFavoriteUsers(): Observable<IUser[]> {
        return this.getUsers().pipe(
            mergeMap((users) => {
                return this.favoriteService
                    .getFavorites(FavoriteTypes.User)
                    .pipe(
                        map((favorites) => {
                            return users.filter((user) =>
                                favorites.includes(user.id)
                            );
                        })
                    );
            })
        );
    }

    findUsers(searchText: string): Observable<IUser[]> {
        return this.getUsers().pipe(
            map((users) => {
                return users.filter((user) => {
                    return (
                        user.lastName.toLowerCase().includes(searchText) ||
                        user.firstName.toLowerCase().includes(searchText)
                    );
                });
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
