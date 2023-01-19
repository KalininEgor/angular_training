import { Injectable } from '@angular/core';
import { delay, map, mergeMap, Observable, of, take } from 'rxjs';

import { FavoritesService } from '../../core/services/favorites.service';
import { HttpService } from '../../core/services/http.service';

import { FavoriteTypes } from '../../shared/models/favorite.types';
import { INewUser } from '../models/new-user.interface';
import { IUser } from '../models/user.interface';
import { IAddress } from '../../shared/models/address.interface';
import { IResponseGetUsers } from '../models/response-get-users.interface';
import { GET_USERS_URL } from '../../core/configs/global-variables';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    users!: IUser[];

    constructor(
        private favoriteService: FavoritesService,
        private http: HttpService
    ) {}

    getUsers(): Observable<IUser[]> {
        if (this.users) return of(this.users).pipe(delay(500));

        return this.http.get<IResponseGetUsers>(GET_USERS_URL).pipe(
            take(1),
            map((response) => {
                const responseUsers = response.results;

                this.users = <IUser[]>responseUsers.map((user, index) => {
                    return {
                        id: index,
                        firstName: user.name.first,
                        lastName: user.name.last,
                        email: user.email,
                        age: user.dob.age,
                        gender: user.gender === 'male' ? true : false,
                        company: user.company,
                        department: user.department,
                        imageUrl: user.picture.large,
                        addresses: [
                            {
                                addressLine: user.location.street.name + ',' + user.location.street.number,
                                city: user.location.city,
                                zip: user.location.postcode,
                            },
                        ],
                    };
                });
                return this.users;
            })
        );
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

    //example POST
    addUserOnServer(
        url: string,
        userData: INewUser,
        addresses: IAddress[]
    ): Observable<boolean> {
        const newUser: IUser = {
            id: this.users.length + 1,
            ...userData,
            addresses,
        };
        return this.http.post<IUser>(url, newUser);
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

    //example PUT
    EditUserOnServer(
        url: string,
        userData: INewUser,
        addresses: IAddress[],
        id: number
    ): Observable<boolean> {
        return this.http.put(
            url,
            {
                id: id,
                ...userData,
                addresses,
            }
        )
    }
}
