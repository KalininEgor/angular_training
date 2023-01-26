import { Injectable } from '@angular/core';
import { map, Observable, take } from 'rxjs';

import { FavoritesService } from '../../core/services/favorites.service';

import { FavoriteTypes } from '../../shared/models/favorite.types';
import { IUser } from '../models/user.interface';

@Injectable({
    providedIn: 'root',
})
export class UserService {

    constructor(
        private favoriteService: FavoritesService,
    ) {}

    getFavoriteUsers(users: IUser[]): Observable<IUser[]> {
        return this.favoriteService
            .getFavorites(FavoriteTypes.User)
            .pipe(
                take(1),
                map(ids => {
                    return users.filter(user => {
                        return ids.includes(user.id)
                    })
                })
            )
    }
}
