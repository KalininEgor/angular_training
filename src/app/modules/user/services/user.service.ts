import { Injectable } from '@angular/core';
import { FavoriteTypes } from '../../shared/models/favorite.types';
import { FavoritesService } from '../../core/services/favorites.service';
import { users } from '../mocks/users';
import { INewUser } from '../models/new-user.interface';
import { IUser } from '../models/user.interface';
import { concatMap, Observable, of, timer } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor (
        private favoriteService: FavoritesService
    ) {}

    getUsers(): IUser[] {
        return users;
    }

    getFavoriteUsers(): IUser[] {
        const favoriteIds = this.favoriteService.getFavorites(FavoriteTypes.User);
        return this.getUsers().filter(user => {
            return favoriteIds.includes(user.id);  
        })
    }

    addUser(userData: INewUser): void {
        users.push ({
            id: users.length+1,
            ...userData
        });
    }

    isEmailUnique(email: string): Observable<boolean> {
        const isUnique = users.findIndex(user => user.email === email);
        const result = isUnique === -1 ? of(true) : of(false);
        return timer(1000).pipe(concatMap(() => result))
    }
}