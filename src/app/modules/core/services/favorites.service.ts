import { Injectable } from '@angular/core';
import { delay, Observable, of, take } from 'rxjs';
import { FavoriteTypes } from '../../shared/models/favorite.types';

export type FavoriteStore = { [key in FavoriteTypes]: string[] };

@Injectable({
    providedIn: 'root'
})
export class FavoritesService {
  
    store: FavoriteStore = {
        [FavoriteTypes.User]: [],
        [FavoriteTypes.Car]: []
    }

    getFavorites(type: FavoriteTypes): Observable<string[]> {
        return of(this.store[type]).pipe(delay(200));
    }

    toggleFavorites(type: FavoriteTypes, id: string): Observable<string[]> {
        const favorites = this.store[type];
        const index = favorites.indexOf(id);

        if (index === -1) {
            favorites.push(id);
        } else {
            favorites.splice(index, 1);
        }

        return this.getFavorites(type).pipe(take(1),delay(200))
    }
}
