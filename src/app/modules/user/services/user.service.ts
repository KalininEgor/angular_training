import { Injectable } from '@angular/core';
import { FavoriteTypes } from '../../shared/models/favorite.types';
import { FavoritesService } from '../../core/services/favorites.service';
import { users } from '../mocks/users';
import { INewUser } from '../models/new-user.interface';
import { IUser } from '../models/user.interface';
import { IAddress } from '../../shared/models/address.interface';


@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor (private favoriteService: FavoritesService) {}

    getUsers(): IUser[] {
        return users;
    }

    getFavoriteUsers(): IUser[] {
        const favoriteIds = this.favoriteService.getFavorites(FavoriteTypes.User);
        return this.getUsers().filter(user => {
            return favoriteIds.includes(user.id);  
        })
    }

    addUser(userData: INewUser, addresses: IAddress[]): void {
        users.push ({
            id: users.length+1,
            ...userData,
            addresses
        });
    }
}