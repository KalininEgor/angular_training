import { Injectable } from '@angular/core';
import { FavoriteTypes } from '../../shared/models/favorite.types';
import { FavoritesService } from '../../core/services/favorites.service';
import { users } from '../mocks/users';
import { INewUser } from '../models/new-user.interface';
import { IUser } from '../models/user.interface';
import { IAddress } from '../../shared/models/address.interface';
import { delay, map, mergeMap, Observable, of, take } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    constructor(private favoriteService: FavoritesService) {}

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
                    const fullName = `${user.firstName.toLowerCase()} ${user.lastName.toLowerCase()}`;

                    return fullName.includes(searchText.trim().toLowerCase());
                });
            })
        );
    }

    addUser(userData: INewUser, addresses: IAddress[]): Observable<boolean> {
        return this.getUsers().pipe(
            take(1),
            map((users) => {
                try {
                    users.push({
                        id: users.length + 1,
                        ...userData,
                        addresses,
                    });

                    return true;
                } catch (error) {
                    console.log(error);
                    return false;
                }
            })
        );
    }

    editUser(
        userData: INewUser,
        addresses: IAddress[],
        id: number
    ): Observable<boolean> {
        return this.getUsers().pipe(
            take(1),
            map((users) => {
                const targetUser = users.findIndex((user) => user.id === id);

                if (targetUser === -1) {
                    return false;
                } else {
                    users.splice(targetUser, 1, {
                        id: id,
                        ...userData,
                        addresses,
                    });
                    return true;
                }
            })
        );
    }
}
