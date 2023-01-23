import { Injectable } from '@angular/core';
import { map, mergeMap, Observable } from 'rxjs';

import { FavoritesService } from '../../core/services/favorites.service';

import { FavoriteTypes } from '../../shared/models/favorite.types';
import { PAGE_SIZE } from '../configs/pagination.config';
import { IUser } from '../models/user.interface';
import { UserApiService } from './user-api.service';

@Injectable({
    providedIn: 'root',
})
export class UserService {

    constructor(
        private favoriteService: FavoritesService,
        private userApi: UserApiService
    ) {}

    getFavoriteUsers(): Observable<IUser[]> {
        return this.userApi.getUsers(1, PAGE_SIZE).pipe(
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

    // findUsers(searchText: string): Observable<IUser[]> {
    //     return this.userApi.getUsers().pipe(
    //         map((users) => {
    //             return users.filter((user) => {
    //                 const fullName = `${user.firstName.toLowerCase()} ${user.lastName.toLowerCase()}`;

    //                 return fullName.includes(searchText.trim().toLowerCase());
    //             });
    //         })
    //     );
    // }

    // addUser(userData: INewUser, addresses: IAddress[]): Observable<boolean> {
    //     return this.getUsers().pipe(
    //         take(1),
    //         map((users) => {
    //             try {
    //                 users.push({
    //                     id: users.length + 1,
    //                     ...userData,
    //                     addresses,
    //                 });

    //                 return true;
    //             } catch (error) {
    //                 console.log(error);
    //                 return false;
    //             }
    //         })
    //     );
    // }

    // editUser(
    //     userData: INewUser,
    //     addresses: IAddress[],
    //     id: number
    // ): Observable<boolean> {
    //     return this.getUsers().pipe(
    //         take(1),
    //         map((users) => {
    //             const targetUser = users.findIndex((user) => user.id === id);

    //             if (targetUser === -1) {
    //                 return false;
    //             } else {
    //                 users.splice(targetUser, 1, {
    //                     id: id,
    //                     ...userData,
    //                     addresses,
    //                 });
    //                 return true;
    //             }
    //         })
    //     );
    // }
}
