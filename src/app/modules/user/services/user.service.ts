import { Injectable } from '@angular/core';
import { FavoriteTypes } from '../../shared/models/favorite.types';
import { FavoritesService } from '../../core/services/favorites.service';
import { users } from '../mocks/users';
import { INewUser } from '../models/new-user.interface';
import { IUser } from '../models/user.interface';
import { IAddress } from '../../shared/models/address.interface';
import { Observable, of } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor (private favoriteService: FavoritesService) {}

    getUsers(): IUser[] {
        return users;
    }

    getUser(id: number): Observable<IUser> {
        return of(users.find(user => user.id === id)!);
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

    editUser(userData: INewUser, addresses: IAddress[], id: number) {
        const targetUser = users.findIndex(user => user.id === id);
        
        users.splice(targetUser, 1, {
            id: id,
            ...userData,
            addresses
        });
    }
}