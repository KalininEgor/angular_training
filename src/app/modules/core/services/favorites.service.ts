import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, map, mergeMap, Observable, of, Subject, take } from 'rxjs';
import { FavoriteTypes } from '../../shared/models/favorite.types';

export type FavoriteStore = { [key in FavoriteTypes]: number[] };

@Injectable({
    providedIn: 'root'
})
export class FavoritesService {
  
    store: FavoriteStore = {
        [FavoriteTypes.User]: [],
        [FavoriteTypes.Car]: []
    }

    getFavorites(type: FavoriteTypes): Observable<number[]> {
        return of(this.store[type]).pipe(delay(200));
    }

    toggleFavorites(type: FavoriteTypes, id: number): Observable<number[]> {
        const favorites = this.store[type];
        const index = favorites.indexOf(id);

        if (index === -1) {
            favorites.push(id);
        } else {
            favorites.splice(index, 1);
        }

        return this.getFavorites(type).pipe(delay(200))
    }
}
