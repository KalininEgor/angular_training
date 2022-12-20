import { Injectable } from '@angular/core';
import { FavoriteTypes } from '../../shared/models/favorite.types';
import { FavoritesService } from '../../shared/services/favorites.service';
import { users } from '../mocks/users';
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

    getFavoriteUsers(): any {
        const favoriteIds = this.favoriteService.getFavorites(FavoriteTypes.User);
        return this.getUsers().filter(user => {
            return favoriteIds.includes(user.id);  
        })
    }
}