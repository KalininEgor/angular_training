import { Injectable } from '@angular/core';
import { FavoriteTypes } from '../../shared/models/favorite.types';
import { FavoritesService } from '../../core/services/favorites.service';
import { users } from '../mocks/users';
import { INewUser } from '../models/new-user.interface';
import { IUser } from '../models/user.interface';


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
        users.unshift ({
            id: Date.now(),
            imageUrl: 'https://canningtonvet.com.au/wp-content/uploads/2019/06/Cat-question-mark-2.png',
            ...userData
        });
    }
}